import { createFileRoute, Link } from '@tanstack/react-router';
import { useMemo, useState } from 'react';
import {
  Search,
  SlidersHorizontal,
  X,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { PageIntro } from '@/components/store/site';
import { ProductCard } from '@/components/store/product-card';
import {
  categories,
  discount,
  products,
} from '@/lib/catalogue';

export const Route = createFileRoute('/products/')({
  validateSearch: (
    search: Record<string, unknown>,
  ): {
    q?: string;
    category?: string;
  } => ({
    ...(typeof search['q'] === 'string'
      ? { q: search['q'] }
      : {}),
    ...(typeof search['category'] === 'string'
      ? { category: search['category'] }
      : {}),
  }),

  head: () => ({
    meta: [
      {
        title: 'Shop Fireworks & Crackers | AGS CRACKER',
      },
      {
        name: 'description',
        content:
          'Browse crackers, sparklers, flower pots, sky shots and more from AGS CRACKER in Virudhunagar.',
      },
      {
        property: 'og:title',
        content:
          'Shop Fireworks & Crackers | AGS CRACKER',
      },
      {
        property: 'og:description',
        content:
          'Explore festive fireworks and enquire about current prices at AGS CRACKER.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
  }),

  component: ProductsPage,
});

function ProductsPage() {
  const { q, category } = Route.useSearch();

  const [search, setSearch] = useState(q ?? '');
  const [selected, setSelected] = useState(
    category ?? '',
  );

  const [sort, setSort] =
    useState('featured');

  const [discountOnly, setDiscountOnly] =
    useState(false);

  const [availableOnly, setAvailableOnly] =
    useState(false);

  const filtered = useMemo(() => {
    return products
      .filter(product => {
        const matchesCategory =
          !selected ||
          product.category === selected;

        const searchValue =
          search.trim().toLowerCase();

        const matchesSearch =
          !searchValue ||
          product.name
            .toLowerCase()
            .includes(searchValue) ||
          product.category
            .toLowerCase()
            .includes(searchValue);

        const matchesDiscount =
          !discountOnly ||
          discount(product) !== null;

        const matchesAvailability =
          !availableOnly ||
          product.available === true;

        return (
          matchesCategory &&
          matchesSearch &&
          matchesDiscount &&
          matchesAvailability
        );
      })
      .sort((a, b) => {
        if (sort === 'name-asc') {
          return a.name.localeCompare(b.name);
        }

        if (sort === 'name-desc') {
          return b.name.localeCompare(a.name);
        }

        if (sort === 'price-asc') {
          return (
            (a.price ?? Infinity) -
            (b.price ?? Infinity)
          );
        }

        if (sort === 'price-desc') {
          return (
            (b.price ?? -Infinity) -
            (a.price ?? -Infinity)
          );
        }

        return 0;
      });
  }, [
    search,
    selected,
    sort,
    discountOnly,
    availableOnly,
  ]);

  const clearFilters = () => {
    setSelected('');
    setSearch('');
    setDiscountOnly(false);
    setAvailableOnly(false);
  };

  return (
    <main className="w-full min-w-0 overflow-x-hidden">
      <PageIntro
        eyebrow="Our collection"
        title="Explore Fireworks"
        description="From little sparks to grand celebrations, discover what brings your festivities to life."
      />

      <div
        className="
          page-container
          section-space
          w-full
          min-w-0
          max-w-full
          overflow-x-hidden
        "
      >
        {/* =====================================================
            MAIN PRODUCTS LAYOUT
        ====================================================== */}
        <div
          className="
            grid
            w-full
            min-w-0
            gap-6
            lg:grid-cols-[230px_minmax(0,1fr)]
            lg:gap-8
          "
        >
          {/* =================================================
              FILTERS
          ================================================== */}
          <aside
            className="
              w-full
              min-w-0
              max-w-full
            "
          >
            {/* Filter heading */}
            <div
              className="
                flex
                w-full
                min-w-0
                items-center
                justify-between
              "
            >
              <h2
                className="
                  flex
                  min-w-0
                  items-center
                  gap-2
                  text-sm
                  font-bold
                  uppercase
                  tracking-widest
                "
              >
                <SlidersHorizontal
                  size={16}
                  className="shrink-0"
                />

                <span>Filters</span>
              </h2>

              <Button
                variant="link"
                size="sm"
                className="shrink-0"
                onClick={clearFilters}
              >
                Clear
              </Button>
            </div>

            {/* Categories */}
            <div
              className="
                mt-5
                w-full
                min-w-0
                border-t
                border-border
                pt-5
              "
            >
              <h3
                className="
                  mb-3
                  text-xs
                  font-bold
                  uppercase
                  tracking-widest
                  text-muted-foreground
                "
              >
                Categories
              </h3>

              <div
                className="
                  flex
                  w-full
                  min-w-0
                  max-w-full
                  gap-2
                  overflow-x-auto
                  overscroll-x-contain
                  pb-2
                  [scrollbar-width:none]
                  [&::-webkit-scrollbar]:hidden
                  lg:flex-col
                  lg:overflow-visible
                  lg:pb-0
                "
              >
                {[
                  'All Categories',
                  ...categories,
                ].map(name => {
                  const value =
                    name === 'All Categories'
                      ? ''
                      : name;

                  const active =
                    selected === value;

                  return (
                    <Button
                      key={name}
                      variant={
                        active
                          ? 'navy'
                          : 'ghost'
                      }
                      size="sm"
                      className="
                        shrink-0
                        justify-start
                        whitespace-nowrap
                        text-left
                        lg:w-full
                      "
                      onClick={() =>
                        setSelected(value)
                      }
                    >
                      {name}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Checkboxes */}
            <div
              className="
                mt-5
                w-full
                border-t
                border-border
                pt-5
              "
            >
              <label
                className="
                  flex
                  min-w-0
                  items-center
                  gap-2
                  text-sm
                "
              >
                <input
                  type="checkbox"
                  checked={discountOnly}
                  onChange={e =>
                    setDiscountOnly(
                      e.target.checked,
                    )
                  }
                  className="shrink-0 accent-primary"
                />

                <span>
                  Discounted items
                </span>
              </label>

              <label
                className="
                  mt-3
                  flex
                  min-w-0
                  items-center
                  gap-2
                  text-sm
                "
              >
                <input
                  type="checkbox"
                  checked={availableOnly}
                  onChange={e =>
                    setAvailableOnly(
                      e.target.checked,
                    )
                  }
                  className="shrink-0 accent-primary"
                />

                <span>
                  Confirmed available
                </span>
              </label>
            </div>
          </aside>

          {/* =================================================
              PRODUCTS CONTENT
          ================================================== */}
          <section
            className="
              w-full
              min-w-0
              max-w-full
              overflow-hidden
            "
          >
            {/* Search + Sort */}
            <div
              className="
                flex
                w-full
                min-w-0
                flex-col
                gap-3
                border-b
                border-border
                pb-5
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              {/* Search */}
              <label
                className="
                  flex
                  h-11
                  w-full
                  min-w-0
                  items-center
                  gap-2
                  rounded-sm
                  border
                  border-input
                  bg-card
                  px-3
                  sm:w-72
                "
              >
                <Search
                  size={17}
                  className="
                    shrink-0
                    text-muted-foreground
                  "
                />

                <input
                  value={search}
                  onChange={e =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search products"
                  aria-label="Search products"
                  className="
                    min-w-0
                    w-full
                    flex-1
                    bg-transparent
                    text-sm
                    outline-none
                  "
                />

                {search && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="
                      h-7
                      w-7
                      shrink-0
                    "
                    onClick={() =>
                      setSearch('')
                    }
                    aria-label="Clear search"
                  >
                    <X size={14} />
                  </Button>
                )}
              </label>

              {/* Count + Sort */}
              <div
                className="
                  flex
                  w-full
                  min-w-0
                  items-center
                  justify-between
                  gap-3
                  sm:w-auto
                  sm:justify-end
                "
              >
                <span
                  className="
                    shrink-0
                    text-xs
                    text-muted-foreground
                  "
                >
                  {filtered.length} products
                </span>

                <select
                  value={sort}
                  onChange={e =>
                    setSort(e.target.value)
                  }
                  aria-label="Sort products"
                  className="
                    h-10
                    min-w-0
                    max-w-[170px]
                    flex-1
                    rounded-sm
                    border
                    border-input
                    bg-card
                    px-2
                    text-xs
                    outline-none
                    sm:h-11
                    sm:w-auto
                    sm:flex-none
                    sm:px-3
                  "
                >
                  <option value="featured">
                    Featured
                  </option>

                  <option value="name-asc">
                    Name: A to Z
                  </option>

                  <option value="name-desc">
                    Name: Z to A
                  </option>

                  <option value="price-asc">
                    Price: Low to High
                  </option>

                  <option value="price-desc">
                    Price: High to Low
                  </option>
                </select>
              </div>
            </div>

            {/* =================================================
                PRODUCT GRID
            ================================================== */}

            <div
              className="
                mt-6
                grid
                w-full
                min-w-0
                max-w-full
                grid-cols-1
                gap-4
                overflow-hidden
                sm:grid-cols-2
                sm:gap-5
                lg:grid-cols-3
              "
            >
              {filtered.map(product => (
                <div
                  key={product.slug}
                  className="
                    min-w-0
                    w-full
                    max-w-full
                  "
                >
                  <ProductCard
                    product={product}
                  />
                </div>
              ))}
            </div>

            {/* No products */}
            {filtered.length === 0 && (
              <div
                className="
                  py-20
                  text-center
                "
              >
                <h3
                  className="
                    font-display
                    text-3xl
                  "
                >
                  No matching products
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    text-muted-foreground
                  "
                >
                  Try another search or
                  category. Prices and
                  availability are confirmed
                  on enquiry.
                </p>

                <Button
                  variant="navy"
                  className="mt-5"
                  onClick={clearFilters}
                >
                  Show all products
                </Button>
              </div>
            )}

            {/* Bottom message */}
            <div
              className="
                mt-10
                w-full
                min-w-0
                border-t
                border-border
                pt-5
                text-sm
                text-muted-foreground
              "
            >
              Looking for something else?{' '}
              <Link
                to="/contact"
                className="
                  font-semibold
                  text-primary
                  underline
                "
              >
                Contact us
              </Link>{' '}
              for the full catalogue.
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}