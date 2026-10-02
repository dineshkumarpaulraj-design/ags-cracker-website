import { Link, useNavigate } from '@tanstack/react-router';

import { useEffect, useState, type FormEvent } from 'react';

import {

  ArrowRight,

  Instagram,

  MapPin,

  Menu,

  MessageCircle,

  Phone,

  Search,

  ShoppingBag,

  X,

  Sparkles,

  CheckCircle2,

  FileDown,

} from 'lucide-react';



import { Button } from '@/components/ui/button';

import { useCart } from '@/lib/cart';

import {

  LOCATION,

  PHONE,

  mapUrl,

  whatsapp,

} from '@/lib/catalogue';



const nav = [

  { to: '/', label: 'Home' },

  { to: '/about', label: 'About Us' },

  { to: '/products', label: 'Products' },

  { to: '/gallery', label: 'Gallery' },

  { to: '/contact', label: 'Contact Us' },

] as const;



/* ============================================================

   WELCOME POPUP

   ============================================================ */



function WelcomePopup({

  onClose,

}: {

  onClose: () => void;

}) {

  return (

    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-3 backdrop-blur-[2px] sm:p-5">

      <div className="relative w-[min(96vw,760px)] overflow-hidden rounded-2xl bg-card shadow-2xl">

        {/* Top decorative line */}

        <div className="h-1.5 bg-primary" />



        {/* Close */}

        <button

          type="button"

          onClick={onClose}

          aria-label="Close welcome message"

          className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-muted text-muted-foreground transition hover:bg-primary hover:text-primary-foreground sm:right-4 sm:top-4"

       >

          <X size={19} />

        </button>



        <div className="grid grid-cols-[0.72fr_1.28fr] gap-2.5 p-3 sm:gap-4 sm:p-5 md:grid-cols-[0.9fr_1.35fr] md:gap-6 md:p-6">

          {/* Left - Welcome */}

          <div className="flex min-w-0 flex-col justify-center border-r border-border pr-2 text-center sm:pr-4 md:pr-6">

            <div className="mx-auto grid size-9 place-items-center rounded-full bg-navy text-gold shadow-lg sm:size-12 md:size-14">

              <Sparkles className="size-5 sm:size-6 md:size-7" />

            </div>



            <div className="mt-2 sm:mt-3 md:mt-4">

              <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-primary sm:text-[10px] sm:tracking-[0.2em] md:text-[11px]">

                Welcome to

              </p>



              <h2 className="mt-1 font-display text-[15px] font-bold leading-tight text-navy sm:text-xl md:text-2xl">

                AGS <span className="text-primary">CRACKERS</span>

              </h2>



              <p className="mt-1 text-[10px] font-medium leading-4 text-muted-foreground sm:text-xs md:text-sm">

                Bringing Joy to Your Celebrations

              </p>

            </div>



            <div className="mt-2 rounded-lg border border-border bg-muted/40 p-2 sm:mt-3 sm:rounded-xl sm:p-3 md:mt-4">

              <p className="text-center text-[10px] leading-4 text-foreground sm:text-xs sm:leading-5 md:text-sm md:leading-6">

                Explore our crackers collection, check the prices, prepare your enquiry and send the PDF to us on WhatsApp.

              </p>

            </div>

          </div>



          {/* Right - Steps */}

          <div className="flex min-w-0 flex-col justify-center">

            <div className="space-y-1.5 sm:space-y-2.5">

              {[

                'Browse and select your favourite crackers.',

                'Add the products to your cart.',

                'Check the total price and discount.',

                'Enter your name and download the Order Enquiry PDF.',

                'Send the downloaded PDF to AGS CRACKERS via WhatsApp.',

              ].map((step, index) => (

                <div key={step} className="flex min-w-0 items-start gap-1.5 sm:gap-2.5 md:gap-3">

                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-navy text-[9px] font-bold text-gold sm:size-6 sm:text-[10px] md:size-7 md:text-xs">

                    {index + 1}

                  </span>

                  <p className="pt-0 text-[10px] leading-4 text-foreground/80 sm:text-xs sm:leading-5 md:pt-0.5 md:text-sm">

                    {step}

                  </p>

                </div>

              ))}

            </div>



            <div className="mt-2 rounded-lg border border-primary/30 bg-primary/5 p-2 sm:mt-3 sm:rounded-xl sm:p-3 md:mt-4">

              <p className="text-center text-[9px] leading-3.5 text-muted-foreground sm:text-[11px] sm:leading-4 md:text-xs md:leading-5">

                Our team will check your enquiry and contact you to confirm product availability, final price and order details.

              </p>

            </div>



            <Button

              type="button"

              variant="navy"

              className="mt-2 h-8 w-full text-[11px] sm:mt-3 sm:h-9 sm:text-xs md:h-10 md:text-sm"

              onClick={onClose}

           >

              Continue Shopping

              <ArrowRight className="size-3.5 sm:size-4" />

            </Button>

          </div>

        </div>

      </div>

    </div>

  );

}



/* ============================================================

   PDF SUCCESS POPUP

   ============================================================ */



function PdfSuccessPopup({

  orderNo,

  onClose,

}: {

  orderNo?: string;

  onClose: () => void;

}) {

  const whatsappUrl = whatsapp();



  return (

    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/25 p-3 sm:p-4">

      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-card shadow-2xl">

        <div className="h-1.5 bg-success" />



        <button

          type="button"

          onClick={onClose}

          aria-label="Close order success message"

          className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-muted text-muted-foreground transition hover:bg-primary hover:text-primary-foreground"

       >

          <X size={19} />

        </button>



        <div className="p-6 text-center sm:p-8">

          <div className="mx-auto grid size-16 place-items-center rounded-full bg-success/10 text-success">

            <CheckCircle2 size={36} />

          </div>



          <h2 className="mt-5 font-display text-2xl font-bold text-navy sm:text-3xl">

            Order Enquiry Downloaded!

          </h2>



          <p className="mt-3 text-sm leading-6 text-muted-foreground">

            Your Order Enquiry PDF has been downloaded successfully.

          </p>



          {orderNo && (

            <div className="mt-5 rounded-xl border border-border bg-muted/40 p-3">

              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">

                Order Number

              </p>



              <p className="mt-1 font-mono text-lg font-bold text-navy">

                {orderNo}

              </p>

            </div>

          )}



          <div className="mt-5 rounded-xl border border-primary/30 bg-primary/5 p-4">

            <div className="flex items-start gap-3 text-left">

              <FileDown

                size={20}

                className="mt-0.5 shrink-0 text-primary"

              />



              <p className="text-sm leading-6 text-foreground/80">

                Please send the downloaded PDF to

                <strong> AGS CRACKERS </strong>

                via WhatsApp. Our team will check your enquiry

                and contact you shortly.

              </p>

            </div>

          </div>



          <div className="mt-6 grid gap-3 sm:grid-cols-2">

            <Button

              type="button"

              className="h-12 bg-success text-white hover:bg-success/90"

              onClick={() => {

                window.open(

                  whatsappUrl,

                  '_blank',

                  'noopener,noreferrer',

                );

              }}

           >

              <MessageCircle size={18} />

              Send via WhatsApp

            </Button>



            <Button

              type="button"

              variant="outline"

              className="h-12"

              onClick={onClose}

           >

              Continue Shopping

            </Button>

          </div>

        </div>

      </div>

    </div>

  );

}







/* ============================================================

   HEADER

   ============================================================ */



export function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [showMinimumOrderToast, setShowMinimumOrderToast] = useState(true);

  const [searchOpen, setSearchOpen] = useState(false);

  const [query, setQuery] = useState('');



  const [showWelcome, setShowWelcome] =

    useState(false);



  const [showPdfSuccess, setShowPdfSuccess] =

    useState(false);



  const [downloadedOrderNo, setDownloadedOrderNo] =

    useState<string>();



  const { count } = useCart();

  const navigate = useNavigate();



  /* ----------------------------------------------------------

     SHOW WELCOME POPUP

     ---------------------------------------------------------- */



  useEffect(() => {

    const alreadyShown =

      sessionStorage.getItem(

        'ags-welcome-popup-shown',

      );



    if (!alreadyShown) {

      setShowWelcome(true);



      sessionStorage.setItem(

        'ags-welcome-popup-shown',

        'true',

      );

    }

  }, []);



  /* ----------------------------------------------------------

     PDF DOWNLOAD SUCCESS EVENT

     ---------------------------------------------------------- */



  useEffect(() => {

    const handlePdfDownload = (

      event: Event,

    ) => {

      const customEvent =

        event as CustomEvent<{

          orderNo?: string;

        }>;



      setDownloadedOrderNo(

        customEvent.detail?.orderNo,

      );



      setShowPdfSuccess(true);

    };



    window.addEventListener(

      'ags-order-pdf-downloaded',

      handlePdfDownload,

    );



    return () => {

      window.removeEventListener(

        'ags-order-pdf-downloaded',

        handlePdfDownload,

      );

    };

  }, []);



  const search = (

    event: FormEvent,

  ) => {

    event.preventDefault();



    navigate({

      to: '/products',

      search: {

        q: query.trim(),

      },

    });



    setSearchOpen(false);

    setMenuOpen(false);

  };



  return (

    <>

      {/* Grandpa photo watermark - subtle background across the website */}
      <img
        src="/images/grandpa-watermark.jpeg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[5] h-full w-full object-cover object-center opacity-[0.055] grayscale saturate-0"
      />

      <style>{`

        @keyframes ags-min-order-scroll {

          from {

            transform: translateX(0);

          }

          to {

            transform: translateX(-25%);

          }

        }



        @keyframes ags-min-order-blink {

          0%, 100% {

            opacity: 1;

          }

          50% {

            opacity: 0.45;

          }

        }



        .ags-min-order-marquee {

          animation:

            ags-min-order-scroll 18s linear infinite,

            ags-min-order-blink 1.2s ease-in-out infinite;

          will-change: transform, opacity;

        }



        @media (prefers-reduced-motion: reduce) {

          .ags-min-order-marquee {

            animation: none;

          }

        }

      `}</style>



      <header className="sticky top-0 z-50 bg-card shadow-sm">

        <div className="bg-navy text-secondary-foreground">

          <div className="page-container flex min-h-8 items-center justify-between gap-2 text-[10px] font-medium tracking-wide sm:min-h-9 sm:gap-3 sm:text-xs">

            <a

              href={mapUrl}

              target="_blank"

              rel="noopener noreferrer"

              className="flex min-w-0 items-center gap-2 hover:text-gold"

           >

              <MapPin

                size={13}

                className="shrink-0 text-gold"

              />



              <span className="truncate">

                {LOCATION}

              </span>

            </a>



            <div className="flex shrink-0 items-center gap-2 sm:gap-4">

              <a

                href={`tel:+91${PHONE}`}

                className="hidden items-center gap-1.5 hover:text-gold sm:flex"

             >

                <Phone size={13} />

                {PHONE}

              </a>



              <a

                href={whatsapp()}

                target="_blank"

                rel="noopener noreferrer"

                className="flex items-center gap-1.5 hover:text-gold"

             >

                <MessageCircle size={13} />



                <span className="hidden sm:inline">

                  WhatsApp:

                </span>



                <span className="hidden sm:inline">

                  {PHONE}

                </span>

              </a>

            </div>

          </div>

        </div>



        {/* Minimum Order Marquee */}

        <div className="overflow-hidden bg-primary text-primary-foreground">

          <div className="ags-min-order-marquee flex min-w-max items-center whitespace-nowrap py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] sm:py-2 sm:text-xs">

            <span className="px-8">⚠️ ALERT: MINIMUM ORDER VALUE ₹5,000 ⚠️</span>

            <span className="px-8">⚠️ ALERT: MINIMUM ORDER VALUE ₹5,000 ⚠️</span>

            <span className="px-8">⚠️ ALERT: MINIMUM ORDER VALUE ₹5,000 ⚠️</span>

            <span className="px-8">⚠️ ALERT: MINIMUM ORDER VALUE ₹5,000 ⚠️</span>

            <span className="px-8">⚠️ ALERT: MINIMUM ORDER VALUE ₹5,000 ⚠️</span>

            <span className="px-8">⚠️ ALERT: MINIMUM ORDER VALUE ₹5,000 ⚠️</span>

            <span className="px-8">⚠️ ALERT: MINIMUM ORDER VALUE ₹5,000 ⚠️</span>

            <span className="px-8">⚠️ ALERT: MINIMUM ORDER VALUE ₹5,000 ⚠️</span>

          </div>

        </div>



        <div className="page-container grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 sm:h-[74px] sm:gap-4 lg:h-[86px] lg:grid-cols-[auto_minmax(0,1fr)_auto]">

          <Link

            to="/"

            className="flex min-w-0 items-center gap-2 sm:gap-3"

            onClick={() =>

              setMenuOpen(false)

            }

            aria-label="AGS CRACKER home"

         >

            <span className="relative size-9 shrink-0 overflow-hidden rounded-full bg-navy shadow-md ring-2 ring-navy/10 sm:size-12">

              <img

                src="/logo.jpeg"

                alt="AGS CRACKER"

                className="h-full w-full object-cover"

              />

            </span>



            <span className="min-w-0">

              <span className="block whitespace-nowrap font-display text-[18px] font-bold leading-none tracking-tight text-navy sm:text-[30px]">

                AGS{' '}

                <span className="text-primary">

                  CRACKER

                </span>

              </span>



              <span className="mt-1 hidden truncate text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground sm:block sm:text-[10px]">

                Bringing Joy to Your Celebrations

              </span>

            </span>

          </Link>



          <nav

            className="hidden items-center justify-center gap-5 xl:gap-7 lg:flex"

            aria-label="Main navigation"

         >

            {nav.map(item => (

              <Link

                key={item.to}

                to={item.to}

                activeOptions={{

                  exact: true,

                }}

                className="whitespace-nowrap text-[13px] font-semibold text-foreground transition-colors hover:text-primary"

                activeProps={{

                  className: 'text-primary',

                }}

             >

                {item.label}

              </Link>

            ))}

          </nav>



          <div className="flex shrink-0 items-center gap-1 sm:gap-2">

            <Button

              variant="ghost"

              size="iconLg"

              className="max-sm:h-8 max-sm:w-8 sm:h-10 sm:w-10"

              aria-label="Search products"

              title="Search products"

              onClick={() =>

                setSearchOpen(!searchOpen)

              }

           >

              <Search />

            </Button>



            <Button

              asChild

              variant="ghost"

              size="iconLg"

              className="max-sm:h-9 max-sm:w-9"

              aria-label={`Cart with ${count} items`}

              title="Shopping cart"

           >

              <Link

                to="/cart"

                className="relative"

             >

                <ShoppingBag />



                <span className="absolute right-0 top-0 grid size-4 place-items-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">

                  {count}

                </span>

              </Link>

            </Button>



            <Button

              variant="ghost"

              size="iconLg"

              className="max-sm:h-9 max-sm:w-9 lg:hidden"

              aria-label={

                menuOpen

                  ? 'Close menu'

                  : 'Open menu'

              }

              onClick={() =>

                setMenuOpen(!menuOpen)

              }

           >

              {menuOpen ? (

                <X />

              ) : (

                <Menu />

              )}

            </Button>

          </div>

        </div>



        {searchOpen && (

          <form

            onSubmit={search}

            className="border-t border-border bg-card"

         >

            <div className="page-container flex items-center gap-2 py-2.5 sm:gap-3 sm:py-3">

              <Search

                className="text-muted-foreground"

                size={19}

              />



              <input

                aria-label="Search products"

                autoFocus

                className="h-10 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"

                placeholder="Search crackers, sparklers, gift packs..."

                value={query}

                onChange={e =>

                  setQuery(e.target.value)

                }

              />



              <Button

                type="submit"

                variant="navy"

                className="shrink-0 px-3 sm:px-4"

             >

                <span className="sm:hidden">Go</span>

                <span className="hidden sm:inline">Search</span>

              </Button>

            </div>

          </form>

        )}



        {menuOpen && (

          <nav

            className="border-t border-border bg-card px-4 py-2 shadow-lg lg:hidden"

            aria-label="Mobile navigation"

         >

            {nav.map(item => (

              <Link

                key={item.to}

                to={item.to}

                className="block border-b border-border py-3 text-sm font-semibold last:border-0"

                onClick={() =>

                  setMenuOpen(false)

                }

             >

                {item.label}

              </Link>

            ))}

          </nav>

        )}



        <div className="h-[3px] shimmer-line" />

      </header>



      {/* =====================================================

          MINIMUM ORDER TOAST

      ====================================================== */}

      {showMinimumOrderToast && (

        <div

          className="

            fixed

            bottom-24

            right-4

            z-[9999]

            w-[calc(100%-2rem)]

            max-w-[360px]

            rounded-2xl

            border

            border-primary/20

            bg-white

            p-4

            shadow-2xl

            ring-1

            ring-black/5

            sm:right-6

            sm:bottom-28

          "

          role="alert"

          aria-live="polite"

       >

          <div className="flex items-start gap-3">

            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-lg">

              🧨

            </span>



            <div className="min-w-0 flex-1">

              <p className="text-sm font-extrabold uppercase tracking-wide text-navy">

                Minimum Order Value

              </p>



              <p className="mt-1 text-xl font-black text-primary">

                ₹5,000

              </p>



              <p className="mt-1 text-xs leading-5 text-muted-foreground">

                Minimum order value is ₹5,000. You can still

                download the PDF and send your enquiry via WhatsApp.

              </p>

            </div>



            <button

              type="button"

              onClick={() => setShowMinimumOrderToast(false)}

              className="

                grid

                size-7

                shrink-0

                place-items-center

                rounded-full

                bg-muted

                text-muted-foreground

                transition

                hover:bg-primary

                hover:text-primary-foreground

              "

              aria-label="Close minimum order notification"

           >

              <X size={15} />

            </button>

          </div>

        </div>

      )}



      {/* Welcome Popup */}

      {showWelcome && (

        <WelcomePopup

          onClose={() =>

            setShowWelcome(false)

          }

        />

      )}



      {/* PDF Download Success Popup */}

      {showPdfSuccess && (

        <PdfSuccessPopup

          orderNo={downloadedOrderNo}

          onClose={() =>

            setShowPdfSuccess(false)

          }

        />

      )}

    </>

  );

}



/* ============================================================

   FOOTER

   ============================================================ */



export function Footer() {

  return (

    <footer className="bg-navy text-secondary-foreground">

      <div className="page-container grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1.3fr] lg:gap-24">

        <div>

          <Link

            to="/"

            className="font-display text-4xl font-bold"

         >

            AGS{' '}

            <span className="text-gold">

              CRACKER

            </span>

          </Link>



          <p className="mt-2 text-sm text-gold">

            Bringing Joy to Your Celebrations

          </p>



          <p className="mt-6 max-w-sm text-sm leading-7 text-secondary-foreground/70">

            A festive selection of fireworks and

            crackers for the moments that bring us

            together.

          </p>



          <div className="mt-6 flex gap-2">

            <a

              href={whatsapp()}

              target="_blank"

              rel="noopener noreferrer"

              title="WhatsApp"

              aria-label="WhatsApp"

              className="grid size-9 place-items-center border border-secondary-foreground/20 hover:text-gold"

           >

              <MessageCircle size={17} />

            </a>



            <a

              href={`tel:+91${PHONE}`}

              title="Call AGS CRACKER"

              aria-label="Call AGS CRACKER"

              className="grid size-9 place-items-center border border-secondary-foreground/20 hover:text-gold"

           >

              <Phone size={17} />

            </a>

          </div>

        </div>



        <div>

          <h2 className="text-sm font-bold uppercase tracking-widest text-gold">

            Quick Links

          </h2>



          <div className="mt-5 grid gap-3">

            {nav.map(item => (

              <Link

                key={item.to}

                to={item.to}

                className="w-fit text-sm text-secondary-foreground/75 hover:text-gold"

             >

                {item.label}

              </Link>

            ))}

          </div>

        </div>



        <div>

          <h2 className="text-sm font-bold uppercase tracking-widest text-gold">

            Get in touch

          </h2>



          <div className="mt-5 grid gap-4 text-sm text-secondary-foreground/75">

            <a

              href={mapUrl}

              target="_blank"

              rel="noopener noreferrer"

              className="flex gap-3 hover:text-gold"

           >

              <MapPin

                size={18}

                className="shrink-0 text-gold"

              />

              {LOCATION}

            </a>



            <a

              href={`tel:+91${PHONE}`}

              className="flex gap-3 hover:text-gold"

           >

              <Phone

                size={18}

                className="shrink-0 text-gold"

              />

              {PHONE}

            </a>



            <a

              href={whatsapp()}

              target="_blank"

              rel="noopener noreferrer"

              className="flex gap-3 hover:text-gold"

           >

              <MessageCircle

                size={18}

                className="shrink-0 text-gold"

              />

              WhatsApp: {PHONE}

            </a>



            <a

              href={mapUrl}

              target="_blank"

              rel="noopener noreferrer"

              className="flex items-center gap-2 font-semibold text-gold"

           >

              Find us on Google Maps

              <ArrowRight size={15} />

            </a>

          </div>

        </div>

      </div>



      <div className="border-t border-secondary-foreground/15">

        <div className="page-container flex flex-wrap items-center justify-between gap-2 py-5 text-xs text-secondary-foreground/55">

          <span>

            © 2026 AGS CRACKER. All Rights Reserved.

          </span>



          <span>

            Celebrate responsibly.

          </span>

        </div>

      </div>

    </footer>

  );

}



/* ============================================================

   FLOATING WHATSAPP

   ============================================================ */



export function FloatingWhatsApp() {

  return (

    <a

      href={whatsapp()}

      target="_blank"

      rel="noopener noreferrer"

      title="Chat with AGS CRACKER on WhatsApp"

      aria-label="Chat on WhatsApp"

      className="fixed bottom-4 right-4 z-40 grid size-12 place-items-center rounded-full bg-success text-primary-foreground shadow-xl transition-transform hover:scale-105 sm:bottom-7 sm:right-7 sm:size-13"

   >

      <MessageCircle size={26} />

    </a>

  );

}



/* ============================================================

   PAGE INTRO

   ============================================================ */



export function PageIntro({

  eyebrow,

  title,

  description,

}: {

  eyebrow: string;

  title: string;

  description?: string;

}) {

  return (

    <div className="festive-panel text-secondary-foreground">

      <div className="page-container py-10 sm:py-14 lg:py-20">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">

          {eyebrow}

        </p>



        <h1 className="display-title max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">

          {title}

        </h1>



        {description && (

          <p className="mt-5 max-w-xl text-sm leading-7 text-secondary-foreground/75 sm:text-base">

            {description}

          </p>

        )}

      </div>

    </div>

  );

}