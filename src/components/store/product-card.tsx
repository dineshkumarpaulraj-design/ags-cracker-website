import { Link } from '@tanstack/react-router';
import {
  MessageCircle,
  ShoppingBag,
  ArrowUpRight,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/cart';
import {
  discount,
  priceText,
  type Product,
  whatsapp,
} from '@/lib/catalogue';

export function ProductCard({
  product,
}: {
  product: Product;
}) {
  const { add } = useCart();
  const off = discount(product);

  return (
    <article
      className="
        group flex w-full min-w-0 flex-col
        overflow-hidden
        rounded-md
        border border-border
        bg-card
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* =====================================================
          PRODUCT IMAGE
      ====================================================== */}
      <Link
        to="/products/$slug"
        params={{
          slug: product.slug,
        }}
        className="
          relative
          flex
          h-[155px]
          w-full
          items-center
          justify-center
          overflow-hidden
          bg-white
          sm:h-[205px]
          md:h-[230px]
          lg:h-[245px]
        "
      >
        <img
          src={product.image}
          alt={`${product.name} fireworks`}
          loading="lazy"
          className="
            block
            h-full
            w-full
            object-contain
            p-1
            transition-transform
            duration-500
            group-hover:scale-[1.08]
          "
        />

        {/* Discount Badge */}
        {off !== null && (
          <span
            className="
              absolute
              left-2
              top-2
              z-10
              rounded-sm
              bg-primary
              px-1.5
              py-1
              text-[8px]
              font-bold
              uppercase
              leading-none
              text-primary-foreground
              shadow-sm
              sm:left-3
              sm:top-3
              sm:px-2
              sm:py-1
              sm:text-[10px]
            "
          >
            {off}% OFF
          </span>
        )}

        {/* Product Details Arrow */}
        <span
          className="
            absolute
            bottom-2
            right-2
            z-10
            grid
            size-7
            place-items-center
            rounded-full
            bg-white
            text-foreground
            shadow-md
            opacity-0
            transition-opacity
            sm:bottom-3
            sm:right-3
            sm:size-8
            sm:group-hover:opacity-100
          "
        >
          <ArrowUpRight size={15} />
        </span>
      </Link>

      {/* =====================================================
          PRODUCT INFORMATION
      ====================================================== */}
      <div
        className="
          flex
          min-w-0
          flex-1
          flex-col
          p-3
          sm:p-4
          md:p-5
        "
      >
        {/* Category */}
        <p
          className="
            truncate
            text-[8px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-primary
            sm:text-[10px]
            sm:tracking-[0.13em]
          "
        >
          {product.category}
        </p>

        {/* Product Name */}
        <Link
          to="/products/$slug"
          params={{
            slug: product.slug,
          }}
          className="
            mt-1
            min-w-0
          "
        >
          <h3
            className="
              line-clamp-2
              min-h-[36px]
              break-words
              font-display
              text-[15px]
              font-bold
              leading-tight
              text-navy
              transition-colors
              hover:text-primary
              sm:min-h-[44px]
              sm:text-xl
              md:text-2xl
            "
          >
            {product.name}
          </h3>
        </Link>

        {/* =================================================
            PRICE
        ================================================== */}
        <div
          className="
            mt-2
            min-h-[48px]
            sm:mt-3
            sm:min-h-[52px]
          "
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.14em]
              text-muted-foreground
              sm:text-[10px]
              sm:tracking-widest
            "
          >
            Offer price
          </p>

          <div
            className="
              mt-0.5
              flex
              min-w-0
              flex-wrap
              items-baseline
              gap-x-2
              gap-y-0.5
            "
          >
            <span
              className="
                text-base
                font-bold
                text-primary
                sm:text-xl
              "
            >
              {priceText(product.price)}
            </span>

            {product.mrp != null && (
              <span
                className="
                  text-[9px]
                  text-muted-foreground
                  line-through
                  sm:text-xs
                "
              >
                MRP {priceText(product.mrp)}
              </span>
            )}
          </div>

          {product.unit && (
            <span
              className="
                text-[9px]
                text-muted-foreground
                sm:text-xs
              "
            >
              / {product.unit}
            </span>
          )}
        </div>

        {/* =================================================
            ACTION BUTTONS
        ================================================== */}
        <div
          className="
            mt-auto
            grid
            w-full
            gap-1.5
            pt-3
            sm:gap-2
            sm:pt-4
          "
        >
          {/* Add To Cart */}
          <Button
            variant="navy"
            size="sm"
            className="
              w-full
              min-w-0
              px-2
              text-[11px]
              sm:text-sm
            "
            onClick={() => add(product.slug)}
          >
            <ShoppingBag
              size={14}
              className="shrink-0"
            />
            <span className="truncate">
              Add to Cart
            </span>
          </Button>

          {/* WhatsApp Enquire */}
          <Button
            asChild
            variant="light"
            size="sm"
            className="
              w-full
              min-w-0
              px-2
              text-[11px]
              sm:text-sm
            "
          >
            <a
              href={whatsapp(
                `Hi AGS CRACKER, I am interested in ${product.name}. Please share the details.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle
                size={14}
                className="shrink-0"
              />
              <span className="truncate">
                Enquire
              </span>
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
