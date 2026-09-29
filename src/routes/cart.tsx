import { createFileRoute, Link } from '@tanstack/react-router';
import { useMemo, useState } from 'react';
import {
  ArrowRight,
  Download,
  MessageCircle,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { PageIntro } from '@/components/store/site';
import { useCart } from '@/lib/cart';
import { priceText, whatsapp } from '@/lib/catalogue';
import { downloadOrderPdf } from '@/lib/order-pdf';

export const Route = createFileRoute('/cart')({
  head: () => ({
    meta: [
      { title: 'Your Cart | AGS CRACKER' },
      {
        name: 'description',
        content:
          'Review your AGS CRACKER selection, download an order PDF, and send your enquiry through WhatsApp.',
      },
      {
        property: 'og:title',
        content: 'Your Cart | AGS CRACKER',
      },
      {
        property: 'og:description',
        content:
          'Review your fireworks selection, download a branded order PDF, and enquire with AGS CRACKER on WhatsApp.',
      },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Cart,
});

function Cart() {
  const { items, count, getProduct, update, remove, clear } = useCart();

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [pdfBusy, setPdfBusy] = useState(false);

  const rows = useMemo(
    () =>
      items
        .map((item) => ({
          ...item,
          product: getProduct(item.slug),
        }))
        .filter(
          (
            row,
          ): row is typeof row & {
            product: NonNullable<typeof row.product>;
          } => !!row.product,
        ),
    [items, getProduct],
  );

  const totals = useMemo(
    () =>
      rows.reduce(
        (acc, row) => {
          const mrp =
            row.product.mrp ??
            row.product.price ??
            0;

          const price =
            row.product.price ??
            0;

          acc.mrp +=
            mrp *
            row.quantity;

          acc.amount +=
            price *
            row.quantity;

          return acc;
        },
        {
          mrp: 0,
          amount: 0,
        },
      ),
    [rows],
  );

  const discount = Math.max(
    0,
    totals.mrp -
      totals.amount,
  );

  const allPriced = rows.every(
    (row) =>
      row.product.price != null,
  );

  const validate = () => {
    if (!name.trim()) {
      setError(
        'Please enter your name to continue.',
      );
      return false;
    }

    const cleanMobile =
      mobile.replace(/\D/g, '');

    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      setError(
        'Please enter a valid 10-digit mobile number.',
      );
      return false;
    }

    if (!address.trim()) {
      setError('Please enter your complete address.');
      return false;
    }

    if (!rows.length) {
      setError(
        'Your cart is empty.',
      );
      return false;
    }

    setError('');
    return true;
  };

  const downloadPdf = async () => {
    if (!validate()) return;

    setPdfBusy(true);
    setError('');

    try {
      await downloadOrderPdf({
        rows,
        customerName:
          name.trim(),
        mobile:
          mobile.replace(/\D/g, ''),
        address: address.trim(),
      });
    } catch (e) {
      console.error(e);

      setError(
        'Could not create the PDF. Please try again.',
      );
    } finally {
      setPdfBusy(false);
    }
  };

  const order = () => {
    if (!validate()) return;

    const cleanMobile =
      mobile.replace(/\D/g, '');

    const lines = rows.map(
      ({
        product,
        quantity,
      }) =>
        `• ${product.name} | Qty: ${quantity} | ${product.unit ?? ''} | Price: ${priceText(product.price)} | Subtotal: ${priceText(
          (product.price ?? 0) *
            quantity,
        )}`,
    );

    const message =
      `Hi AGS CRACKER, I would like to enquire about an order.\n` +
      `Customer Name: ${name.trim()}\n` +
      `Mobile Number: ${cleanMobile}\n` +
      `Address: ${address.trim()}\n\n` +
      `${lines.join('\n')}\n\n` +
      `Total MRP: ${priceText(totals.mrp)}\n` +
      `Total Discount: ${priceText(discount)}\n` +
      `Total Amount: ${
        allPriced
          ? priceText(totals.amount)
          : 'To be confirmed by AGS CRACKER'
      }\n\n` +
      `Please confirm the current prices and availability.`;

    window.open(
      whatsapp(message),
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <main>
      <PageIntro
        eyebrow="Your selection"
        title="Shopping Cart"
        description="Review your picks, download a branded order PDF, or send your enquiry through WhatsApp."
      />

      <section className="page-container section-space">
        {count === 0 ? (
          <div className="py-14 text-center">
            <ShoppingBag
              size={45}
              className="mx-auto text-primary"
            />

            <h2 className="display-title mt-5 text-4xl text-navy">
              Your cart is empty
            </h2>

            <p className="mt-3 text-sm text-muted-foreground">
              A celebration begins with a little spark.
            </p>

            <Button
              asChild
              variant="navy"
              className="mt-7"
            >
              <Link to="/products">
                Explore products
                <ArrowRight />
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div>
              <div className="flex items-center justify-between border-b border-border pb-4">
                <h2 className="text-lg font-bold">
                  Items ({count})
                </h2>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary"
                  onClick={clear}
                >
                  <Trash2 />
                  Clear cart
                </Button>
              </div>

              {rows.map(
                ({
                  product,
                  quantity,
                }) => (
                  <article
                    key={product.slug}
                    className="grid grid-cols-[76px_minmax(0,1fr)] gap-4 border-b border-border py-5 sm:grid-cols-[115px_minmax(0,1fr)_auto]"
                  >
                    <Link
                      to="/products/$slug"
                      params={{
                        slug: product.slug,
                      }}
                      className="aspect-square overflow-hidden rounded-sm bg-muted"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </Link>

                    <div className="min-w-0">
                      <Link
                        to="/products/$slug"
                        params={{
                          slug: product.slug,
                        }}
                        className="font-display text-xl font-bold text-navy hover:text-primary sm:text-2xl"
                      >
                        {product.name}
                      </Link>

                      <p className="mt-1 text-xs text-muted-foreground">
                        {product.category} ·{' '}
                        {product.unit ??
                          '1 Box'}
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-3">
                        <span className="text-sm font-bold text-primary">
                          {priceText(
                            product.price,
                          )}
                        </span>

                        {product.mrp != null &&
                          product.price !=
                            null && (
                            <span className="text-xs text-muted-foreground line-through">
                              MRP{' '}
                              {priceText(
                                product.mrp,
                              )}
                            </span>
                          )}
                      </div>

                      <Button
                        variant="link"
                        size="sm"
                        className="mt-2 h-auto p-0 text-xs text-muted-foreground"
                        onClick={() =>
                          remove(
                            product.slug,
                          )
                        }
                      >
                        Remove
                      </Button>
                    </div>

                    <div className="col-start-2 flex h-9 w-fit items-center border border-input sm:col-start-3 sm:row-start-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        aria-label={`Decrease ${product.name} quantity`}
                        onClick={() =>
                          quantity === 1
                            ? remove(
                                product.slug,
                              )
                            : update(
                                product.slug,
                                quantity -
                                  1,
                              )
                        }
                      >
                        <Minus size={14} />
                      </Button>

                      <span className="w-8 text-center text-sm">
                        {quantity}
                      </span>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        aria-label={`Increase ${product.name} quantity`}
                        onClick={() =>
                          update(
                            product.slug,
                            quantity +
                              1,
                          )
                        }
                      >
                        <Plus size={14} />
                      </Button>
                    </div>
                  </article>
                ),
              )}
            </div>

            <aside className="h-fit rounded-sm border border-border bg-card p-6 lg:sticky lg:top-24">
              <h2 className="font-display text-3xl font-bold text-navy">
                Order Summary
              </h2>

              <div className="mt-5 space-y-3 border-b border-border pb-5 text-sm">
                <div className="flex justify-between">
                  <span>Items</span>
                  <span className="font-semibold">
                    {count}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Total MRP</span>
                  <span>
                    {priceText(
                      totals.mrp,
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-emerald-700">
                  <span>Total Discount</span>
                  <span className="font-bold">
                    -{' '}
                    {priceText(
                      discount,
                    )}
                  </span>
                </div>

                <div className="flex justify-between pt-2 text-base">
                  <span className="font-bold text-navy">
                    Total Amount
                  </span>

                  <span className="font-bold text-primary">
                    {allPriced
                      ? priceText(
                          totals.amount,
                        )
                      : 'To be confirmed'}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs leading-6 text-muted-foreground">
                The PDF contains your selected items, quantities, MRP,
                discount, total amount, customer name, mobile number,
                complete address, and AGS CRACKERS festive header.
              </p>

              <label
                htmlFor="customer-name"
                className="mt-6 block text-xs font-bold uppercase tracking-wider"
              >
                Customer Name <span className="text-primary">*</span>
              </label>

              <input
                id="customer-name"
                value={name}
                onChange={(e) => {
                  setName(
                    e.target.value,
                  );
                  setError('');
                }}
                placeholder="Your name"
                className="mt-2 h-11 w-full rounded-sm border border-input px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />

              <label
                htmlFor="customer-mobile"
                className="mt-4 block text-xs font-bold uppercase tracking-wider"
              >
                Mobile Number <span className="text-primary">*</span>
              </label>

              <input
                id="customer-mobile"
                type="tel"
                inputMode="numeric"
                maxLength={10}
                value={mobile}
                onChange={(e) => {
                  const value =
                    e.target.value
                      .replace(
                        /\D/g,
                        '',
                      )
                      .slice(
                        0,
                        10,
                      );

                  setMobile(value);
                  setError('');
                }}
                placeholder="10-digit mobile number"
                className="mt-2 h-11 w-full rounded-sm border border-input px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />

              <label
                htmlFor="customer-address"
                className="mt-4 block text-xs font-bold uppercase tracking-wider"
              >
                Address <span className="text-primary">*</span>
              </label>

              <textarea
                id="customer-address"
                value={address}
                maxLength={180}
                rows={4}
                onChange={(e) => {
                  setAddress(e.target.value);
                  setError('');
                }}
                placeholder="Door no., street, area, city, pincode"
                className="mt-2 min-h-28 w-full resize-y rounded-sm border border-input px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              />

              {error && (
                <p
                  role="alert"
                  className="mt-2 text-xs text-destructive"
                >
                  {error}
                </p>
              )}

              <Button
                variant="navy"
                size="lg"
                className="mt-4 w-full"
                onClick={downloadPdf}
                disabled={pdfBusy}
              >
                <Download />
                {pdfBusy
                  ? 'Creating PDF...'
                  : 'Download Order PDF'}
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="mt-3 w-full"
                onClick={order}
              >
                <MessageCircle />
                Order on WhatsApp
              </Button>

              <p className="mt-3 text-center text-xs text-muted-foreground">
                PDF is for order/enquiry reference. Final availability is
                confirmed by AGS CRACKERS.
              </p>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}
