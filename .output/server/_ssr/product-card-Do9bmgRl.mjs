import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as useCart, l as priceText, o as discount, p as whatsapp, t as Button } from "./button-DrpbDoM0.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as ArrowUpRight, m as MessageCircle, s as ShoppingBag } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-Do9bmgRl.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product }) {
	const { add } = useCart();
	const off = discount(product);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "\r\n        group flex w-full min-w-0 flex-col\r\n        overflow-hidden\r\n        rounded-md\r\n        border border-border\r\n        bg-card\r\n        transition-all duration-300\r\n        hover:-translate-y-1\r\n        hover:shadow-lg\r\n      ",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/products/$slug",
			params: { slug: product.slug },
			className: "\r\n          relative\r\n          flex\r\n          h-[155px]\r\n          w-full\r\n          items-center\r\n          justify-center\r\n          overflow-hidden\r\n          bg-white\r\n          sm:h-[205px]\r\n          md:h-[230px]\r\n          lg:h-[245px]\r\n        ",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.image,
					alt: `${product.name} fireworks`,
					loading: "lazy",
					className: "\r\n            block\r\n            h-full\r\n            w-full\r\n            object-contain\r\n            p-1\r\n            transition-transform\r\n            duration-500\r\n            group-hover:scale-[1.08]\r\n          "
				}),
				off !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "\r\n              absolute\r\n              left-2\r\n              top-2\r\n              z-10\r\n              rounded-sm\r\n              bg-primary\r\n              px-1.5\r\n              py-1\r\n              text-[8px]\r\n              font-bold\r\n              uppercase\r\n              leading-none\r\n              text-primary-foreground\r\n              shadow-sm\r\n              sm:left-3\r\n              sm:top-3\r\n              sm:px-2\r\n              sm:py-1\r\n              sm:text-[10px]\r\n            ",
					children: [off, "% OFF"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "\r\n            absolute\r\n            bottom-2\r\n            right-2\r\n            z-10\r\n            grid\r\n            size-7\r\n            place-items-center\r\n            rounded-full\r\n            bg-white\r\n            text-foreground\r\n            shadow-md\r\n            opacity-0\r\n            transition-opacity\r\n            sm:bottom-3\r\n            sm:right-3\r\n            sm:size-8\r\n            sm:group-hover:opacity-100\r\n          ",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "\r\n          flex\r\n          min-w-0\r\n          flex-1\r\n          flex-col\r\n          p-3\r\n          sm:p-4\r\n          md:p-5\r\n        ",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "\r\n            truncate\r\n            text-[8px]\r\n            font-bold\r\n            uppercase\r\n            tracking-[0.12em]\r\n            text-primary\r\n            sm:text-[10px]\r\n            sm:tracking-[0.13em]\r\n          ",
					children: product.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products/$slug",
					params: { slug: product.slug },
					className: "\r\n            mt-1\r\n            min-w-0\r\n          ",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "\r\n              line-clamp-2\r\n              min-h-[36px]\r\n              break-words\r\n              font-display\r\n              text-[15px]\r\n              font-bold\r\n              leading-tight\r\n              text-navy\r\n              transition-colors\r\n              hover:text-primary\r\n              sm:min-h-[44px]\r\n              sm:text-xl\r\n              md:text-2xl\r\n            ",
						children: product.name
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "\r\n            mt-2\r\n            min-h-[48px]\r\n            sm:mt-3\r\n            sm:min-h-[52px]\r\n          ",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "\r\n              text-[8px]\r\n              uppercase\r\n              tracking-[0.14em]\r\n              text-muted-foreground\r\n              sm:text-[10px]\r\n              sm:tracking-widest\r\n            ",
							children: "Offer price"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "\r\n              mt-0.5\r\n              flex\r\n              min-w-0\r\n              flex-wrap\r\n              items-baseline\r\n              gap-x-2\r\n              gap-y-0.5\r\n            ",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "\r\n                text-base\r\n                font-bold\r\n                text-primary\r\n                sm:text-xl\r\n              ",
								children: priceText(product.price)
							}), product.mrp != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "\r\n                  text-[9px]\r\n                  text-muted-foreground\r\n                  line-through\r\n                  sm:text-xs\r\n                ",
								children: ["MRP ", priceText(product.mrp)]
							})]
						}),
						product.unit && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "\r\n                text-[9px]\r\n                text-muted-foreground\r\n                sm:text-xs\r\n              ",
							children: ["/ ", product.unit]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "\r\n            mt-auto\r\n            grid\r\n            w-full\r\n            gap-1.5\r\n            pt-3\r\n            sm:gap-2\r\n            sm:pt-4\r\n          ",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "navy",
						size: "sm",
						className: "\r\n              w-full\r\n              min-w-0\r\n              px-2\r\n              text-[11px]\r\n              sm:text-sm\r\n            ",
						onClick: () => add(product.slug),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
							size: 14,
							className: "shrink-0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate",
							children: "Add to Cart"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "light",
						size: "sm",
						className: "\r\n              w-full\r\n              min-w-0\r\n              px-2\r\n              text-[11px]\r\n              sm:text-sm\r\n            ",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsapp(`Hi AGS CRACKER, I am interested in ${product.name}. Please share the details.`),
							target: "_blank",
							rel: "noopener noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
								size: 14,
								className: "shrink-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: "Enquire"
							})]
						})
					})]
				})
			]
		})]
	});
}
//#endregion
export { ProductCard as t };
