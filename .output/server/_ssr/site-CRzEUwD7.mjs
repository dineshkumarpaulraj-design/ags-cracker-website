import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as mapUrl, f as useCart, i as PHONE, p as whatsapp, r as LOCATION, t as Button } from "./button-DrpbDoM0.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Sparkles, d as Phone, g as MapPin, h as Menu, l as Search, m as MessageCircle, s as ShoppingBag, t as X, v as FileDown, w as ArrowRight, x as CircleCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-CRzEUwD7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About Us"
	},
	{
		to: "/products",
		label: "Products"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/contact",
		label: "Contact Us"
	}
];
function WelcomePopup({ onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-3 backdrop-blur-[2px] sm:p-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-[min(96vw,760px)] overflow-hidden rounded-2xl bg-card shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 bg-primary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					"aria-label": "Close welcome message",
					className: "absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-muted text-muted-foreground transition hover:bg-primary hover:text-primary-foreground sm:right-4 sm:top-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 19 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[0.72fr_1.28fr] gap-2.5 p-3 sm:gap-4 sm:p-5 md:grid-cols-[0.9fr_1.35fr] md:gap-6 md:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 flex-col justify-center border-r border-border pr-2 text-center sm:pr-4 md:pr-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto grid size-9 place-items-center rounded-full bg-navy text-gold shadow-lg sm:size-12 md:size-14",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5 sm:size-6 md:size-7" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 sm:mt-3 md:mt-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[8px] font-bold uppercase tracking-[0.14em] text-primary sm:text-[10px] sm:tracking-[0.2em] md:text-[11px]",
										children: "Welcome to"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "mt-1 font-display text-[15px] font-bold leading-tight text-navy sm:text-xl md:text-2xl",
										children: ["AGS ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "CRACKERS"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[10px] font-medium leading-4 text-muted-foreground sm:text-xs md:text-sm",
										children: "Bringing Joy to Your Celebrations"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 rounded-lg border border-border bg-muted/40 p-2 sm:mt-3 sm:rounded-xl sm:p-3 md:mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-center text-[10px] leading-4 text-foreground sm:text-xs sm:leading-5 md:text-sm md:leading-6",
									children: "Explore our crackers collection, check the prices, prepare your enquiry and send the PDF to us on WhatsApp."
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 flex-col justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-1.5 sm:space-y-2.5",
								children: [
									"Browse and select your favourite crackers.",
									"Add the products to your cart.",
									"Check the total price and discount.",
									"Enter your name and download the Order Enquiry PDF.",
									"Send the downloaded PDF to AGS CRACKERS via WhatsApp."
								].map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-w-0 items-start gap-1.5 sm:gap-2.5 md:gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-5 shrink-0 place-items-center rounded-full bg-navy text-[9px] font-bold text-gold sm:size-6 sm:text-[10px] md:size-7 md:text-xs",
										children: index + 1
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "pt-0 text-[10px] leading-4 text-foreground/80 sm:text-xs sm:leading-5 md:pt-0.5 md:text-sm",
										children: step
									})]
								}, step))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 rounded-lg border border-primary/30 bg-primary/5 p-2 sm:mt-3 sm:rounded-xl sm:p-3 md:mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-center text-[9px] leading-3.5 text-muted-foreground sm:text-[11px] sm:leading-4 md:text-xs md:leading-5",
									children: "Our team will check your enquiry and contact you to confirm product availability, final price and order details."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "navy",
								className: "mt-2 h-8 w-full text-[11px] sm:mt-3 sm:h-9 sm:text-xs md:h-10 md:text-sm",
								onClick: onClose,
								children: ["Continue Shopping", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 sm:size-4" })]
							})
						]
					})]
				})
			]
		})
	});
}
function PdfSuccessPopup({ orderNo, onClose }) {
	const whatsappUrl = whatsapp();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/25 p-3 sm:p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-md overflow-hidden rounded-2xl bg-card shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 bg-success" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					"aria-label": "Close order success message",
					className: "absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-muted text-muted-foreground transition hover:bg-primary hover:text-primary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 19 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 text-center sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid size-16 place-items-center rounded-full bg-success/10 text-success",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 36 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-2xl font-bold text-navy sm:text-3xl",
							children: "Order Enquiry Downloaded!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-6 text-muted-foreground",
							children: "Your Order Enquiry PDF has been downloaded successfully."
						}),
						orderNo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 rounded-xl border border-border bg-muted/40 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Order Number"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-mono text-lg font-bold text-navy",
								children: orderNo
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 rounded-xl border border-primary/30 bg-primary/5 p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, {
									size: 20,
									className: "mt-0.5 shrink-0 text-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm leading-6 text-foreground/80",
									children: [
										"Please send the downloaded PDF to",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: " AGS CRACKERS " }),
										"via WhatsApp. Our team will check your enquiry and contact you shortly."
									]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								className: "h-12 bg-success text-white hover:bg-success/90",
								onClick: () => {
									window.open(whatsappUrl, "_blank", "noopener,noreferrer");
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 18 }), "Send via WhatsApp"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								className: "h-12",
								onClick: onClose,
								children: "Continue Shopping"
							})]
						})
					]
				})
			]
		})
	});
}
function Header() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [showMinimumOrderToast, setShowMinimumOrderToast] = (0, import_react.useState)(true);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const [showWelcome, setShowWelcome] = (0, import_react.useState)(false);
	const [showPdfSuccess, setShowPdfSuccess] = (0, import_react.useState)(false);
	const [downloadedOrderNo, setDownloadedOrderNo] = (0, import_react.useState)();
	const { count } = useCart();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!sessionStorage.getItem("ags-welcome-popup-shown")) {
			setShowWelcome(true);
			sessionStorage.setItem("ags-welcome-popup-shown", "true");
		}
	}, []);
	(0, import_react.useEffect)(() => {
		const handlePdfDownload = (event) => {
			setDownloadedOrderNo(event.detail?.orderNo);
			setShowPdfSuccess(true);
		};
		window.addEventListener("ags-order-pdf-downloaded", handlePdfDownload);
		return () => {
			window.removeEventListener("ags-order-pdf-downloaded", handlePdfDownload);
		};
	}, []);
	const search = (event) => {
		event.preventDefault();
		navigate({
			to: "/products",
			search: { q: query.trim() }
		});
		setSearchOpen(false);
		setMenuOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/images/grandpa-watermark.jpeg",
			alt: "",
			"aria-hidden": "true",
			className: "pointer-events-none fixed inset-0 z-[5] h-full w-full object-cover object-center opacity-[0.055] grayscale saturate-0"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `

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

      ` }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "sticky top-0 z-50 bg-card shadow-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-navy text-secondary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "page-container flex min-h-8 items-center justify-between gap-2 text-[10px] font-medium tracking-wide sm:min-h-9 sm:gap-3 sm:text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: mapUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex min-w-0 items-center gap-2 hover:text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								size: 13,
								className: "shrink-0 text-gold"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: LOCATION
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex shrink-0 items-center gap-2 sm:gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:+91${PHONE}`,
								className: "hidden items-center gap-1.5 hover:text-gold sm:flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 13 }), PHONE]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: whatsapp(),
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center gap-1.5 hover:text-gold",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 13 }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: "WhatsApp:"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: PHONE
									})
								]
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden bg-primary text-primary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ags-min-order-marquee flex min-w-max items-center whitespace-nowrap py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] sm:py-2 sm:text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-8",
								children: "⚠️ ALERT: MINIMUM ORDER VALUE ₹5,000 ⚠️"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-8",
								children: "⚠️ ALERT: MINIMUM ORDER VALUE ₹5,000 ⚠️"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-8",
								children: "⚠️ ALERT: MINIMUM ORDER VALUE ₹5,000 ⚠️"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-8",
								children: "⚠️ ALERT: MINIMUM ORDER VALUE ₹5,000 ⚠️"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-8",
								children: "⚠️ ALERT: MINIMUM ORDER VALUE ₹5,000 ⚠️"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-8",
								children: "⚠️ ALERT: MINIMUM ORDER VALUE ₹5,000 ⚠️"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-8",
								children: "⚠️ ALERT: MINIMUM ORDER VALUE ₹5,000 ⚠️"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-8",
								children: "⚠️ ALERT: MINIMUM ORDER VALUE ₹5,000 ⚠️"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-container grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 sm:h-[74px] sm:gap-4 lg:h-[86px] lg:grid-cols-[auto_minmax(0,1fr)_auto]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex min-w-0 items-center gap-2 sm:gap-3",
							onClick: () => setMenuOpen(false),
							"aria-label": "AGS CRACKER home",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative size-9 shrink-0 overflow-hidden rounded-full bg-navy shadow-md ring-2 ring-navy/10 sm:size-12",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/logo.jpeg",
									alt: "AGS CRACKER",
									className: "h-full w-full object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block whitespace-nowrap font-display text-[18px] font-bold leading-none tracking-tight text-navy sm:text-[30px]",
									children: [
										"AGS",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "CRACKER"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 hidden truncate text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground sm:block sm:text-[10px]",
									children: "Bringing Joy to Your Celebrations"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center justify-center gap-5 xl:gap-7 lg:flex",
							"aria-label": "Main navigation",
							children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								activeOptions: { exact: true },
								className: "whitespace-nowrap text-[13px] font-semibold text-foreground transition-colors hover:text-primary",
								activeProps: { className: "text-primary" },
								children: item.label
							}, item.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex shrink-0 items-center gap-1 sm:gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "iconLg",
									className: "max-sm:h-8 max-sm:w-8 sm:h-10 sm:w-10",
									"aria-label": "Search products",
									title: "Search products",
									onClick: () => setSearchOpen(!searchOpen),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "ghost",
									size: "iconLg",
									className: "max-sm:h-9 max-sm:w-9",
									"aria-label": `Cart with ${count} items`,
									title: "Shopping cart",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/cart",
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute right-0 top-0 grid size-4 place-items-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground",
											children: count
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "iconLg",
									className: "max-sm:h-9 max-sm:w-9 lg:hidden",
									"aria-label": menuOpen ? "Close menu" : "Open menu",
									onClick: () => setMenuOpen(!menuOpen),
									children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
								})
							]
						})
					]
				}),
				searchOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
					onSubmit: search,
					className: "border-t border-border bg-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "page-container flex items-center gap-2 py-2.5 sm:gap-3 sm:py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
								className: "text-muted-foreground",
								size: 19
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								"aria-label": "Search products",
								autoFocus: true,
								className: "h-10 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground",
								placeholder: "Search crackers, sparklers, gift packs...",
								value: query,
								onChange: (e) => setQuery(e.target.value)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								variant: "navy",
								className: "shrink-0 px-3 sm:px-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sm:hidden",
									children: "Go"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "Search"
								})]
							})
						]
					})
				}),
				menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "border-t border-border bg-card px-4 py-2 shadow-lg lg:hidden",
					"aria-label": "Mobile navigation",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "block border-b border-border py-3 text-sm font-semibold last:border-0",
						onClick: () => setMenuOpen(false),
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[3px] shimmer-line" })
			]
		}),
		showMinimumOrderToast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "\r\n\r\n            fixed\r\n\r\n            bottom-24\r\n\r\n            right-4\r\n\r\n            z-[9999]\r\n\r\n            w-[calc(100%-2rem)]\r\n\r\n            max-w-[360px]\r\n\r\n            rounded-2xl\r\n\r\n            border\r\n\r\n            border-primary/20\r\n\r\n            bg-white\r\n\r\n            p-4\r\n\r\n            shadow-2xl\r\n\r\n            ring-1\r\n\r\n            ring-black/5\r\n\r\n            sm:right-6\r\n\r\n            sm:bottom-28\r\n\r\n          ",
			role: "alert",
			"aria-live": "polite",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-10 shrink-0 place-items-center rounded-full bg-primary text-lg",
						children: "🧨"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-extrabold uppercase tracking-wide text-navy",
								children: "Minimum Order Value"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xl font-black text-primary",
								children: "₹5,000"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs leading-5 text-muted-foreground",
								children: "Minimum order value is ₹5,000. You can still download the PDF and send your enquiry via WhatsApp."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setShowMinimumOrderToast(false),
						className: "\r\n\r\n                grid\r\n\r\n                size-7\r\n\r\n                shrink-0\r\n\r\n                place-items-center\r\n\r\n                rounded-full\r\n\r\n                bg-muted\r\n\r\n                text-muted-foreground\r\n\r\n                transition\r\n\r\n                hover:bg-primary\r\n\r\n                hover:text-primary-foreground\r\n\r\n              ",
						"aria-label": "Close minimum order notification",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 15 })
					})
				]
			})
		}),
		showWelcome && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WelcomePopup, { onClose: () => setShowWelcome(false) }),
		showPdfSuccess && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfSuccessPopup, {
			orderNo: downloadedOrderNo,
			onClose: () => setShowPdfSuccess(false)
		})
	] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-navy text-secondary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-container grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1.3fr] lg:gap-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "font-display text-4xl font-bold",
						children: [
							"AGS",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "CRACKER"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-gold",
						children: "Bringing Joy to Your Celebrations"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-sm text-sm leading-7 text-secondary-foreground/70",
						children: "A festive selection of fireworks and crackers for the moments that bring us together."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: whatsapp(),
							target: "_blank",
							rel: "noopener noreferrer",
							title: "WhatsApp",
							"aria-label": "WhatsApp",
							className: "grid size-9 place-items-center border border-secondary-foreground/20 hover:text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 17 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:+91${PHONE}`,
							title: "Call AGS CRACKER",
							"aria-label": "Call AGS CRACKER",
							className: "grid size-9 place-items-center border border-secondary-foreground/20 hover:text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 17 })
						})]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-bold uppercase tracking-widest text-gold",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid gap-3",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "w-fit text-sm text-secondary-foreground/75 hover:text-gold",
						children: item.label
					}, item.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-bold uppercase tracking-widest text-gold",
					children: "Get in touch"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-4 text-sm text-secondary-foreground/75",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: mapUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex gap-3 hover:text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								size: 18,
								className: "shrink-0 text-gold"
							}), LOCATION]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:+91${PHONE}`,
							className: "flex gap-3 hover:text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								size: 18,
								className: "shrink-0 text-gold"
							}), PHONE]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsapp(),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex gap-3 hover:text-gold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
									size: 18,
									className: "shrink-0 text-gold"
								}),
								"WhatsApp: ",
								PHONE
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: mapUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex items-center gap-2 font-semibold text-gold",
							children: ["Find us on Google Maps", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-secondary-foreground/15",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-container flex flex-wrap items-center justify-between gap-2 py-5 text-xs text-secondary-foreground/55",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 AGS CRACKER. All Rights Reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Celebrate responsibly." })]
			})
		})]
	});
}
function FloatingWhatsApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: whatsapp(),
		target: "_blank",
		rel: "noopener noreferrer",
		title: "Chat with AGS CRACKER on WhatsApp",
		"aria-label": "Chat on WhatsApp",
		className: "fixed bottom-4 right-4 z-40 grid size-12 place-items-center rounded-full bg-success text-primary-foreground shadow-xl transition-transform hover:scale-105 sm:bottom-7 sm:right-7 sm:size-13",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 26 })
	});
}
function PageIntro({ eyebrow, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "festive-panel text-secondary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-container py-10 sm:py-14 lg:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs font-bold uppercase tracking-[0.22em] text-gold",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-title max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl",
					children: title
				}),
				description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-sm leading-7 text-secondary-foreground/75 sm:text-base",
					children: description
				})
			]
		})
	});
}
//#endregion
export { PageIntro as i, Footer as n, Header as r, FloatingWhatsApp as t };
