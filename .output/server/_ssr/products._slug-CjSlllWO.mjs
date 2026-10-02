import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as useCart, l as priceText, o as discount, p as whatsapp, t as Button, u as products } from "./button-DrpbDoM0.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as ArrowLeft, m as MessageCircle, p as Minus, s as ShoppingBag, u as Plus } from "../_libs/lucide-react.mjs";
import { t as Route } from "./products._slug-DGyUO9b8.mjs";
import { t as ProductCard } from "./product-card-Do9bmgRl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-CjSlllWO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductDetail() {
	const product = Route.useLoaderData();
	const [quantity, setQuantity] = (0, import_react.useState)(1);
	const { add } = useCart();
	const off = discount(product);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-container py-9 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/products",
				className: "inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), " Back to products"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 lg:grid-cols-2 lg:gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-square overflow-hidden rounded-sm bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: `${product.name} fireworks product`,
						className: "h-full w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-widest text-primary",
							children: product.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "display-title mt-3 text-5xl text-navy sm:text-6xl",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 border-y border-border py-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold uppercase tracking-widest text-muted-foreground",
									children: "Offer price"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 flex flex-wrap items-baseline gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-3xl font-bold text-primary",
											children: priceText(product.price)
										}),
										product.mrp != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-base text-muted-foreground line-through",
											children: ["MRP ", priceText(product.mrp)]
										}),
										off !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "rounded-sm bg-muted px-2 py-1 text-xs font-bold text-primary",
											children: [off, "% OFF"]
										})
									]
								}),
								product.unit && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: ["Unit: ", product.unit]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted-foreground",
									children: "Contact us for current price and availability."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-7 text-sm font-bold uppercase tracking-wider",
							children: "Description"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-lg text-sm leading-7 text-muted-foreground",
							children: product.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold",
								children: "Quantity"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex h-11 items-center border border-input",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon",
										"aria-label": "Decrease quantity",
										onClick: () => setQuantity((q) => Math.max(1, q - 1)),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { size: 15 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-10 text-center text-sm font-semibold",
										children: quantity
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon",
										"aria-label": "Increase quantity",
										onClick: () => setQuantity((q) => q + 1),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 15 })
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "navy",
								size: "lg",
								onClick: () => add(product.slug, quantity),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {}), " Add to Cart"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "light",
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: whatsapp(`Hi AGS CRACKER, I am interested in ${product.name}. Please share the details.`),
									target: "_blank",
									rel: "noopener noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), " WhatsApp Enquiry"]
								})
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-20 border-t border-border pt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-title text-4xl text-navy",
					children: "You may also like"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
					children: products.filter((p) => p.slug !== product.slug).slice(0, 4).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
				})]
			})
		]
	});
}
//#endregion
export { ProductDetail as component };
