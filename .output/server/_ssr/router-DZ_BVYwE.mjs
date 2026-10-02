import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { n as CartProvider } from "./button-DrpbDoM0.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Footer, r as Header, t as FloatingWhatsApp } from "./site-CRzEUwD7.mjs";
import { t as Route$7 } from "./products._slug-DGyUO9b8.mjs";
import { t as Route$8 } from "./products.index-Gy3mZ7c-.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DZ_BVYwE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Lm9MoTXi.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function FirecrackerLoadingScreen({ onComplete }) {
	(0, import_react.useEffect)(() => {
		const timer = window.setTimeout(() => {
			onComplete();
		}, 3200);
		return () => window.clearTimeout(timer);
	}, [onComplete]);
	const crackers = Array.from({ length: 18 });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[99999] overflow-hidden bg-[#050816]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
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
      ` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(112,31,110,.35),transparent_45%),linear-gradient(180deg,#030617,#080d25_55%,#16091c)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ags-firework ags-firework-one" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ags-firework ags-firework-two" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ags-firework ags-firework-three" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ags-star left-[12%] top-[24%]",
				children: "✦"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ags-star left-[27%] top-[14%]",
				style: { animationDelay: ".4s" },
				children: "✦"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ags-star right-[25%] top-[23%]",
				style: { animationDelay: ".8s" },
				children: "✦"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ags-star right-[12%] top-[34%]",
				style: { animationDelay: "1s" },
				children: "✦"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex min-h-screen flex-col items-center justify-center px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ags-loading-logo text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto mb-3 grid size-20 overflow-hidden rounded-full border-2 border-[#f2c85b] bg-white shadow-[0_0_30px_rgba(255,190,40,.45)] sm:size-24",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/logo.jpeg",
									alt: "AGS CRACKERS",
									className: "h-full w-full object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-4xl font-bold tracking-tight text-white sm:text-6xl",
								children: [
									"AGS",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#f2c85b]",
										children: "CRACKERS"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[10px] font-bold uppercase tracking-[.35em] text-[#f2c85b] sm:text-xs",
								children: "Bringing Joy to Your Celebrations"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ags-1000wala",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ags-fuse" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ags-fuse-fire" }),
								crackers.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "ags-cracker",
									style: { "--i": index }
								}, index))
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm font-medium text-white/90 sm:text-base",
						children: "Preparing your festive experience..."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 w-[250px] max-w-[75vw]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-1.5 overflow-hidden rounded-full bg-white/15",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-gradient-to-r from-[#f2c85b] via-white to-[#f2c85b] shadow-[0_0_12px_rgba(242,200,91,.9)]",
								style: { animation: "ags-loading-bar 3s ease-out forwards" }
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex justify-between text-[10px] font-semibold uppercase tracking-widest text-white/45",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Loading" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AGS" })]
						})]
					})
				]
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/logo.jpeg",
				type: "image/svg+xml"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	const [showLoading, setShowLoading] = (0, import_react.useState)(true);
	const handleLoadingComplete = () => {
		setShowLoading(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CartProvider, { children: [
			showLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FirecrackerLoadingScreen, { onComplete: handleLoadingComplete }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWhatsApp, {})
		] })
	});
}
var $$splitComponentImporter$5 = () => import("./routes-BuA5tWm1.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "AGS CRACKER | Crackers & Fireworks | Virudhunagar" },
		{
			name: "description",
			content: "AGS CRACKER – Explore a wide range of crackers, fireworks, festive offers and gift boxes in Virudhunagar."
		},
		{
			property: "og:title",
			content: "AGS CRACKER | Crackers & Fireworks | Virudhunagar"
		},
		{
			property: "og:description",
			content: "Explore crackers, fireworks, festive offers and gift boxes at AGS CRACKER in Virudhunagar."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./about-VcJgZPqC.mjs");
var Route$4 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Us | AGS CRACKER Virudhunagar" },
		{
			name: "description",
			content: "Get to know AGS CRACKER, a fireworks and crackers shop in Virudhunagar focused on festive variety and customer-friendly service."
		},
		{
			property: "og:title",
			content: "About AGS CRACKER"
		},
		{
			property: "og:description",
			content: "Bringing Joy to Your Celebrations in Virudhunagar, Tamil Nadu."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./cart-BReaDPgL.mjs");
var Route$3 = createFileRoute("/cart")({
	head: () => ({ meta: [
		{ title: "Your Cart | AGS CRACKER" },
		{
			name: "description",
			content: "Review your AGS CRACKER selection, download an order PDF, and send your enquiry through WhatsApp."
		},
		{
			property: "og:title",
			content: "Your Cart | AGS CRACKER"
		},
		{
			property: "og:description",
			content: "Review your fireworks selection, download a branded order PDF, and enquire with AGS CRACKER on WhatsApp."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-DnlZHSNK.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact AGS CRACKER | Virudhunagar" },
		{
			name: "description",
			content: "Contact AGS CRACKER in Virudhunagar, Tamil Nadu at 9840023543 or 9629131619, or send an enquiry on WhatsApp."
		},
		{
			property: "og:title",
			content: "Contact AGS CRACKER"
		},
		{
			property: "og:description",
			content: "Call or WhatsApp AGS CRACKER in Virudhunagar for fireworks enquiries."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./gallery-CSpQngKb.mjs");
var Route$1 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery | AGS CRACKER" },
		{
			name: "description",
			content: "See festive fireworks and cracker selections from AGS CRACKER, Virudhunagar."
		},
		{
			property: "og:title",
			content: "Gallery | AGS CRACKER"
		},
		{
			property: "og:description",
			content: "A look at the celebrations and fireworks that inspire AGS CRACKER."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./products-C7F03LXy.mjs");
var Route = createFileRoute("/products")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var AboutRoute = Route$4.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$6
});
var CartRoute = Route$3.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$6
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$6
});
var GalleryRoute = Route$1.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$6
});
var ProductsRoute = Route.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$6
});
var ProductsIndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => ProductsRoute
});
var ProductsRouteChildren = {
	ProductsSlugRoute: Route$7.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => ProductsRoute
	}),
	ProductsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	CartRoute,
	ContactRoute,
	GalleryRoute,
	ProductsRoute: ProductsRoute._addFileChildren(ProductsRouteChildren)
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
