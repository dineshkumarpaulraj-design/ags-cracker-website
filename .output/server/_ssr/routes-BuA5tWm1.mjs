import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as categories, d as slides, i as PHONE, p as whatsapp, r as LOCATION, t as Button, u as products } from "./button-DrpbDoM0.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ChevronRight, T as ArrowLeft, a as Sparkles, d as Phone, g as MapPin, m as MessageCircle, n as Truck, w as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as ProductCard } from "./product-card-Do9bmgRl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BuA5tWm1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const [slide, setSlide] = (0, import_react.useState)(0);
	const touchStart = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const timer = window.setInterval(() => setSlide((s) => (s + 1) % slides.length), 6e3);
		return () => window.clearInterval(timer);
	}, []);
	const move = (step) => setSlide((s) => (s + step + slides.length) % slides.length);
	const active = slides[slide] ?? slides[0];
	const categoryImages = [
		slides[1].image,
		slides[2].image,
		slides[3].image
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes ags-firework-burst {
          0%, 40% {
            transform: scale(0.05);
            opacity: 0;
          }
          48% {
            transform: scale(0.35);
            opacity: 1;
          }
          62% {
            transform: scale(1);
            opacity: 0.9;
          }
          82% {
            transform: scale(1.2);
            opacity: 0.25;
          }
          100% {
            transform: scale(1.35);
            opacity: 0;
          }
        }

        @keyframes ags-rocket-rise {
          0%, 12% {
            transform: translateY(90px);
            opacity: 0;
          }
          18% {
            opacity: 0.95;
          }
          45% {
            transform: translateY(-190px);
            opacity: 1;
          }
          50%, 100% {
            transform: translateY(-190px);
            opacity: 0;
          }
        }

        .ags-firework {
          position: absolute;
          width: 92px;
          height: 92px;
          border-radius: 50%;
          opacity: 0;
          animation: ags-firework-burst 4.8s ease-out infinite;
          filter: drop-shadow(0 0 9px rgba(255, 214, 74, .75));
        }

        .ags-firework::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background:
            radial-gradient(
              circle,
              rgba(255,255,255,.95) 0 2px,
              transparent 3px
            ),
            repeating-conic-gradient(
              from 0deg,
              rgba(255,214,74,.95) 0deg 3deg,
              transparent 3deg 15deg
            );
        }

        .ags-firework-1 {
          top: 17%;
          left: 22%;
        }

        .ags-firework-2 {
          top: 13%;
          right: 20%;
          animation-delay: 1.5s;
          filter: drop-shadow(0 0 9px rgba(255,90,110,.75));
        }

        .ags-firework-2::before {
          background:
            radial-gradient(
              circle,
              rgba(255,255,255,.95) 0 2px,
              transparent 3px
            ),
            repeating-conic-gradient(
              from 12deg,
              rgba(255,100,125,.95) 0deg 3deg,
              transparent 3deg 15deg
            );
        }

        .ags-firework-3 {
          top: 34%;
          right: 8%;
          width: 72px;
          height: 72px;
          animation-delay: 3s;
          filter: drop-shadow(0 0 9px rgba(80,190,255,.75));
        }

        .ags-firework-3::before {
          background:
            radial-gradient(
              circle,
              rgba(255,255,255,.95) 0 2px,
              transparent 3px
            ),
            repeating-conic-gradient(
              from 4deg,
              rgba(90,205,255,.95) 0deg 3deg,
              transparent 3deg 14deg
            );
        }

        .ags-firework-4 {
          top: 27%;
          left: 52%;
          width: 64px;
          height: 64px;
          animation-delay: 3.8s;
          filter: drop-shadow(0 0 9px rgba(130,255,120,.75));
        }

        .ags-firework-4::before {
          background:
            radial-gradient(
              circle,
              rgba(255,255,255,.95) 0 2px,
              transparent 3px
            ),
            repeating-conic-gradient(
              from 8deg,
              rgba(150,255,120,.95) 0deg 3deg,
              transparent 3deg 14deg
            );
        }

        .ags-rocket {
          position: absolute;
          bottom: 2%;
          width: 3px;
          height: 44px;
          border-radius: 999px;
          opacity: 0;
          background: linear-gradient(
            to top,
            transparent,
            rgba(255,255,255,.95),
            rgba(255,214,74,1)
          );
          box-shadow: 0 0 9px rgba(255,214,74,.8);
          animation: ags-rocket-rise 4.8s ease-in infinite;
        }

        .ags-rocket-1 {
          left: 27%;
          animation-delay: .2s;
        }

        .ags-rocket-2 {
          right: 24%;
          animation-delay: 2s;
        }

        @media (max-width: 640px) {
          .ags-firework {
            width: 58px;
            height: 58px;
          }

          .ags-firework-3,
          .ags-firework-4 {
            width: 48px;
            height: 48px;
          }

          .ags-firework-1 {
            left: 10%;
          }

          .ags-firework-2 {
            right: 7%;
          }

          .ags-rocket-1 {
            left: 18%;
          }

          .ags-rocket-2 {
            right: 14%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ags-firework,
          .ags-rocket {
            animation: none;
            opacity: 0;
          }
        }
      ` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative h-[520px] overflow-hidden bg-navy sm:h-[590px] lg:h-[625px]",
			"aria-label": "Featured celebrations",
			onTouchStart: (e) => {
				touchStart.current = e.touches[0]?.clientX ?? null;
			},
			onTouchEnd: (e) => {
				if (touchStart.current !== null && e.changedTouches[0] && Math.abs(e.changedTouches[0].clientX - touchStart.current) > 55) move(e.changedTouches[0].clientX < touchStart.current ? 1 : -1);
				touchStart.current = null;
			},
			children: [
				slides.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.image,
					alt: item.title,
					loading: i === 0 ? "eager" : "lazy",
					fetchPriority: i === 0 ? "high" : void 0,
					className: `absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${i === slide ? "opacity-100" : "opacity-0"}`
				}, item.title)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-shade absolute inset-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none absolute inset-0 overflow-hidden",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ags-firework ags-firework-1" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ags-firework ags-firework-2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ags-firework ags-firework-3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ags-firework ags-firework-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ags-rocket ags-rocket-1" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ags-rocket ags-rocket-2" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "page-container relative flex h-full flex-col justify-center pb-12 text-secondary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-[580px] animate-in fade-in slide-in-from-bottom-3 duration-500",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-gold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), "The season of celebration"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "display-title max-w-[540px] text-[clamp(3.4rem,6vw,6.5rem)]",
								children: active.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-md text-sm leading-7 text-secondary-foreground/85 sm:text-lg",
								children: active.subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "gold",
								size: "lg",
								className: "mt-8 h-12 px-7 text-sm font-bold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: active.url,
									children: [active.cta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
								})
							})
						]
					}, slide)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2",
					children: slides.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "h-7 w-7 p-0 hover:bg-transparent",
						"aria-label": `Go to slide ${i + 1}`,
						onClick: () => setSlide(i),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block h-1.5 rounded-full transition-all ${i === slide ? "w-7 bg-gold" : "w-1.5 bg-secondary-foreground/60"}` })
					}, item.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-5 right-5 hidden gap-2 sm:flex lg:right-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "light",
						size: "iconLg",
						"aria-label": "Previous slide",
						onClick: () => move(-1),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "gold",
						size: "iconLg",
						"aria-label": "Next slide",
						onClick: () => move(1),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page-container grid grid-cols-2 gap-y-5 py-6 lg:grid-cols-4 lg:gap-y-0",
				children: [
					{
						icon: MapPin,
						label: "Visit us",
						value: LOCATION,
						href: "https://www.google.com/maps/search/?api=1&query=Virudhunagar%2C+Tamil+Nadu+626005"
					},
					{
						icon: Phone,
						label: "Call us",
						value: PHONE,
						href: `tel:+91${PHONE}`
					},
					{
						icon: MessageCircle,
						label: "WhatsApp",
						value: PHONE,
						href: whatsapp()
					},
					{
						icon: Truck,
						label: "Service",
						value: "Fast & Reliable Service",
						href: "/contact"
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: item.href,
					className: "flex min-w-0 items-center gap-3 pr-3 hover:text-primary sm:gap-4 lg:border-l lg:border-border lg:pl-7 first:lg:border-0 first:lg:pl-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-10 shrink-0 place-items-center rounded-sm bg-muted text-primary sm:size-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { size: 20 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
							children: item.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs font-bold leading-5 sm:text-sm",
							children: item.value
						})]
					})]
				}, item.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-space overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary",
						children: "Find your spark"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-title text-4xl text-navy sm:text-5xl",
						children: "Shop by Category"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "link",
						className: "shrink-0 text-xs sm:text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/products",
							children: ["View all", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-5 sm:gap-5",
					children: categories.map((name, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products",
						search: { category: name },
						className: "group relative aspect-[0.85] w-[150px] shrink-0 snap-start overflow-hidden rounded-sm bg-navy sm:w-[205px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: categoryImages[i % categoryImages.length] ?? categoryImages[0],
								alt: `${name} category`,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "image-shade absolute inset-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "absolute bottom-4 left-4 right-3 flex items-end justify-between gap-2 font-display text-xl font-bold leading-none text-secondary-foreground sm:text-2xl",
								children: [name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
									size: 17,
									className: "shrink-0 text-gold"
								})]
							})
						]
					}, name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-space bg-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary",
							children: "Made for memorable moments"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-title text-4xl text-navy sm:text-5xl",
							children: "Featured Fireworks"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Explore a selection of favourites. Contact us for current prices and availability."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "link",
						className: "hidden shrink-0 sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/products",
							children: ["Explore all", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-9 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-6",
					children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-navy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: slides[1].image,
					alt: "Festive fireworks gift selection",
					loading: "lazy",
					className: "absolute inset-0 h-full w-full object-cover opacity-60"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-shade absolute inset-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-container relative py-16 text-secondary-foreground sm:py-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-[0.2em] text-gold",
							children: "Celebrate together"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-title mt-3 max-w-xl text-5xl sm:text-6xl",
							children: "A celebration for everyone"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-sm leading-7 text-secondary-foreground/80",
							children: "Looking for a festive assortment? Ask us about our Family, Kids, Premium, Budget and Festival combos."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "gold",
							className: "mt-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/combo-offers",
								children: ["Explore combo offers", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-card py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-12 shrink-0 place-items-center rounded-sm bg-muted text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-title text-3xl text-navy sm:text-4xl",
						children: "Bulk Orders Available"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "For Weddings | Functions | Corporate Gifting"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "navy",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: whatsapp("Hi AGS CRACKER, I would like to enquire about a bulk order for a celebration. Please share the details."),
						target: "_blank",
						rel: "noopener noreferrer",
						children: ["Contact Now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				})]
			})
		})
	] })] });
}
//#endregion
export { Home as component };
