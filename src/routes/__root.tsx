import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CartProvider } from "../lib/cart";
import {
  Header,
  Footer,
  FloatingWhatsApp,
} from "../components/store/site";

/* ============================================================
   1000 WALA LOADING SCREEN
   ============================================================ */

function FirecrackerLoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      onComplete();
    }, 3200);

    return () => window.clearTimeout(timer);
  }, [onComplete]);

  const crackers = Array.from({ length: 18 });

  return (
    <div className="fixed inset-0 z-[99999] overflow-hidden bg-[#050816]">
      <style>{`
        @keyframes ags-loading-fade {
          0% {
            opacity: 1;
            visibility: visible;
          }
          80% {
            opacity: 1;
            visibility: visible;
          }
          100% {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
          }
        }

        @keyframes ags-star-twinkle {
          0%, 100% {
            opacity: .25;
            transform: scale(.7);
          }
          50% {
            opacity: 1;
            transform: scale(1.25);
          }
        }

        @keyframes ags-firework-one {
          0%, 55%, 100% {
            opacity: 0;
            transform: scale(.15);
          }
          62% {
            opacity: 1;
            transform: scale(1);
          }
          72% {
            opacity: .85;
            transform: scale(1.15);
          }
          82% {
            opacity: 0;
            transform: scale(1.35);
          }
        }

        @keyframes ags-firework-two {
          0%, 25%, 100% {
            opacity: 0;
            transform: scale(.15);
          }
          32% {
            opacity: 1;
            transform: scale(1);
          }
          45% {
            opacity: .8;
            transform: scale(1.2);
          }
          55% {
            opacity: 0;
            transform: scale(1.4);
          }
        }

        @keyframes ags-fuse-fire {
          0% {
            left: 0%;
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 1;
          }
        }

        @keyframes ags-cracker-burst {
          0%, 35%, 100% {
            transform: scale(1);
            filter: brightness(1);
          }
          40% {
            transform: scale(1.18);
            filter: brightness(2);
          }
          46% {
            transform: scale(.92);
            filter: brightness(1.3);
          }
          52% {
            transform: scale(1);
            filter: brightness(1);
          }
        }

        @keyframes ags-spark {
          0%, 35%, 100% {
            opacity: 0;
            transform: scale(.2);
          }
          42% {
            opacity: 1;
            transform: scale(1.5);
          }
          52% {
            opacity: 0;
            transform: scale(2.2);
          }
        }

        @keyframes ags-loading-bar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes ags-glow-pulse {
          0%, 100% {
            opacity: .65;
            transform: scale(.95);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        .ags-loading-screen {
          animation: ags-loading-fade 3.6s ease forwards;
        }

        .ags-firework {
          position: absolute;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          opacity: 0;
        }

        .ags-firework::before,
        .ags-firework::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background:
            radial-gradient(circle at 50% 0%, #ffd54a 0 2px, transparent 3px),
            radial-gradient(circle at 100% 50%, #ff4d6d 0 2px, transparent 3px),
            radial-gradient(circle at 50% 100%, #00e5ff 0 2px, transparent 3px),
            radial-gradient(circle at 0% 50%, #ffd54a 0 2px, transparent 3px),
            radial-gradient(circle at 85% 15%, #ff8a00 0 2px, transparent 3px),
            radial-gradient(circle at 15% 85%, #00ff9d 0 2px, transparent 3px);
          transform: scale(2);
        }

        .ags-firework-one {
          top: 10%;
          left: 9%;
          animation: ags-firework-one 2.8s ease-in-out infinite;
        }

        .ags-firework-two {
          top: 16%;
          right: 10%;
          animation: ags-firework-two 3.2s ease-in-out infinite .7s;
        }

        .ags-firework-three {
          top: 28%;
          left: 48%;
          transform: scale(.65);
          animation: ags-firework-one 3s ease-in-out infinite 1.2s;
        }

        .ags-star {
          position: absolute;
          color: #ffd54a;
          font-size: 13px;
          animation: ags-star-twinkle 1.5s ease-in-out infinite;
        }

        .ags-1000wala {
          position: relative;
          width: min(900px, 90vw);
          height: 125px;
          margin: 0 auto;
        }

        .ags-fuse {
          position: absolute;
          left: 2%;
          right: 2%;
          top: 63px;
          height: 3px;
          border-radius: 99px;
          background: linear-gradient(
            90deg,
            #5b341d,
            #c98b43,
            #5b341d
          );
          box-shadow: 0 0 7px rgba(255, 180, 50, .5);
        }

        .ags-fuse-fire {
          position: absolute;
          top: 56px;
          left: 0;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: #fff7b0;
          box-shadow:
            0 0 5px #fff,
            0 0 12px #ffd000,
            0 0 25px #ff7b00,
            0 0 40px #ff3300;
          animation: ags-fuse-fire 2.5s linear infinite;
          z-index: 5;
        }

        .ags-cracker {
          position: absolute;
          top: 35px;
          left: calc(var(--i) * 5.45%);
          width: 38px;
          height: 56px;
          border-radius: 6px;
          background:
            repeating-linear-gradient(
              0deg,
              #9d1111 0px,
              #9d1111 10px,
              #e7bd45 10px,
              #e7bd45 13px
            );
          border: 2px solid #f2c85b;
          box-shadow:
            0 3px 7px rgba(0,0,0,.4),
            inset 0 0 8px rgba(255,255,255,.18);
          transform-origin: center bottom;
          animation:
            ags-cracker-burst 2.5s linear infinite;
          animation-delay: calc(var(--i) * .13s);
        }

        .ags-cracker::before {
          content: "";
          position: absolute;
          top: -7px;
          left: 50%;
          width: 3px;
          height: 9px;
          background: #4c301b;
          transform: translateX(-50%);
        }

        .ags-cracker::after {
          content: "✦";
          position: absolute;
          top: -28px;
          left: 50%;
          color: #ffd54a;
          font-size: 20px;
          opacity: 0;
          transform: translateX(-50%) scale(.2);
          animation:
            ags-spark 2.5s linear infinite;
          animation-delay: calc(var(--i) * .13s);
          text-shadow:
            0 0 7px #fff,
            0 0 15px #ffae00,
            0 0 25px #ff5e00;
        }

        .ags-loading-logo {
          animation: ags-glow-pulse 1.8s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .ags-1000wala {
            width: 94vw;
            height: 90px;
          }

          .ags-fuse {
            top: 45px;
          }

          .ags-fuse-fire {
            top: 38px;
          }

          .ags-cracker {
            top: 22px;
            width: 20px;
            height: 38px;
            border-width: 1px;
          }

          .ags-cracker::after {
            font-size: 14px;
            top: -22px;
          }

          .ags-firework {
            width: 60px;
            height: 60px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ags-loading-screen,
          .ags-firework,
          .ags-star,
          .ags-loading-logo,
          .ags-fuse-fire,
          .ags-cracker,
          .ags-cracker::after {
            animation: none !important;
          }

          .ags-loading-screen {
            opacity: 1;
          }
        }
      `}</style>

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(112,31,110,.35),transparent_45%),linear-gradient(180deg,#030617,#080d25_55%,#16091c)]" />

      {/* Fireworks */}
      <div className="ags-firework ags-firework-one" />
      <div className="ags-firework ags-firework-two" />
      <div className="ags-firework ags-firework-three" />

      {/* Stars */}
      <span className="ags-star left-[12%] top-[24%]">✦</span>
      <span className="ags-star left-[27%] top-[14%]" style={{ animationDelay: ".4s" }}>
        ✦
      </span>
      <span className="ags-star right-[25%] top-[23%]" style={{ animationDelay: ".8s" }}>
        ✦
      </span>
      <span className="ags-star right-[12%] top-[34%]" style={{ animationDelay: "1s" }}>
        ✦
      </span>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">

        {/* Logo */}
        <div className="ags-loading-logo text-center">
          <div className="mx-auto mb-3 grid size-20 overflow-hidden rounded-full border-2 border-[#f2c85b] bg-white shadow-[0_0_30px_rgba(255,190,40,.45)] sm:size-24">
            <img
              src="/logo.jpeg"
              alt="AGS CRACKERS"
              className="h-full w-full object-cover"
            />
          </div>

          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
            AGS{" "}
            <span className="text-[#f2c85b]">
              CRACKERS
            </span>
          </h1>

          <p className="mt-2 text-[10px] font-bold uppercase tracking-[.35em] text-[#f2c85b] sm:text-xs">
            Bringing Joy to Your Celebrations
          </p>
        </div>

        {/* 1000 Wala */}
        <div className="mt-12 w-full">
          <div className="ags-1000wala">
            <div className="ags-fuse" />
            <div className="ags-fuse-fire" />

            {crackers.map((_, index) => (
              <div
                key={index}
                className="ags-cracker"
                style={
                  {
                    "--i": index,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        </div>

        {/* Loading text */}
        <p className="mt-2 text-sm font-medium text-white/90 sm:text-base">
          Preparing your festive experience...
        </p>

        <div className="mt-5 w-[250px] max-w-[75vw]">
          <div className="h-1.5 overflow-hidden rounded-full bg-white/15">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#f2c85b] via-white to-[#f2c85b] shadow-[0_0_12px_rgba(242,200,91,.9)]"
              style={{
                animation: "ags-loading-bar 3s ease-out forwards",
              }}
            />
          </div>

          <div className="mt-2 flex justify-between text-[10px] font-semibold uppercase tracking-widest text-white/45">
            <span>Loading</span>
            <span>AGS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   NOT FOUND
   ============================================================ */

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>

        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   ERROR
   ============================================================ */

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, {
      boundary: "tanstack_root_error_component",
    });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   ROUTE
   ============================================================ */

export const Route =
  createRootRouteWithContext<{ queryClient: QueryClient }>()({
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          property: "og:type",
          content: "website",
        },
      ],

      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        {
          rel: "icon",
          href: "/logo.jpeg",
          type: "image/svg+xml",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap",
        },
      ],
    }),

    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  });

/* ============================================================
   ROOT SHELL
   ============================================================ */

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

/* ============================================================
   ROOT COMPONENT
   ============================================================ */

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  const [showLoading, setShowLoading] = useState(true);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>

        {/* Loading Screen */}
        {showLoading && (
          <FirecrackerLoadingScreen
            onComplete={handleLoadingComplete}
          />
        )}

        {/* Existing Website */}
        <Header />
        <Outlet />
        <Footer />
        <FloatingWhatsApp />

      </CartProvider>
    </QueryClientProvider>
  );
}