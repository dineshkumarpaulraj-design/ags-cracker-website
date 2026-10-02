import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as categories, o as discount, t as Button, u as products } from "./button-DrpbDoM0.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as Search, o as SlidersHorizontal, t as X } from "../_libs/lucide-react.mjs";
import { i as PageIntro } from "./site-CRzEUwD7.mjs";
import { t as ProductCard } from "./product-card-Do9bmgRl.mjs";
import { t as Route } from "./products.index-Gy3mZ7c-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products.index-DhPuH1ik.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductsPage() {
	const { q, category } = Route.useSearch();
	const [search, setSearch] = (0, import_react.useState)(q ?? "");
	const [selected, setSelected] = (0, import_react.useState)(category ?? "");
	const [sort, setSort] = (0, import_react.useState)("featured");
	const [discountOnly, setDiscountOnly] = (0, import_react.useState)(false);
	const [availableOnly, setAvailableOnly] = (0, import_react.useState)(false);
	const filtered = (0, import_react.useMemo)(() => {
		return products.filter((product) => {
			const matchesCategory = !selected || product.category === selected;
			const searchValue = search.trim().toLowerCase();
			const matchesSearch = !searchValue || product.name.toLowerCase().includes(searchValue) || product.category.toLowerCase().includes(searchValue);
			const matchesDiscount = !discountOnly || discount(product) !== null;
			const matchesAvailability = !availableOnly || product.available === true;
			return matchesCategory && matchesSearch && matchesDiscount && matchesAvailability;
		}).sort((a, b) => {
			if (sort === "name-asc") return a.name.localeCompare(b.name);
			if (sort === "name-desc") return b.name.localeCompare(a.name);
			if (sort === "price-asc") return (a.price ?? Infinity) - (b.price ?? Infinity);
			if (sort === "price-desc") return (b.price ?? -Infinity) - (a.price ?? -Infinity);
			return 0;
		});
	}, [
		search,
		selected,
		sort,
		discountOnly,
		availableOnly
	]);
	const clearFilters = () => {
		setSelected("");
		setSearch("");
		setDiscountOnly(false);
		setAvailableOnly(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "w-full min-w-0 overflow-x-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			eyebrow: "Our collection",
			title: "Explore Fireworks",
			description: "From little sparks to grand celebrations, discover what brings your festivities to life."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "\r\n          page-container\r\n          section-space\r\n          w-full\r\n          min-w-0\r\n          max-w-full\r\n          overflow-x-hidden\r\n        ",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "\r\n            grid\r\n            w-full\r\n            min-w-0\r\n            gap-6\r\n            lg:grid-cols-[230px_minmax(0,1fr)]\r\n            lg:gap-8\r\n          ",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "\r\n              w-full\r\n              min-w-0\r\n              max-w-full\r\n            ",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "\r\n                flex\r\n                w-full\r\n                min-w-0\r\n                items-center\r\n                justify-between\r\n              ",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "\r\n                  flex\r\n                  min-w-0\r\n                  items-center\r\n                  gap-2\r\n                  text-sm\r\n                  font-bold\r\n                  uppercase\r\n                  tracking-widest\r\n                ",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, {
									size: 16,
									className: "shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Filters" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "link",
								size: "sm",
								className: "shrink-0",
								onClick: clearFilters,
								children: "Clear"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "\r\n                mt-5\r\n                w-full\r\n                min-w-0\r\n                border-t\r\n                border-border\r\n                pt-5\r\n              ",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "\r\n                  mb-3\r\n                  text-xs\r\n                  font-bold\r\n                  uppercase\r\n                  tracking-widest\r\n                  text-muted-foreground\r\n                ",
								children: "Categories"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "\r\n                  flex\r\n                  w-full\r\n                  min-w-0\r\n                  max-w-full\r\n                  gap-2\r\n                  overflow-x-auto\r\n                  overscroll-x-contain\r\n                  pb-2\r\n                  [scrollbar-width:none]\r\n                  [&::-webkit-scrollbar]:hidden\r\n                  lg:flex-col\r\n                  lg:overflow-visible\r\n                  lg:pb-0\r\n                ",
								children: ["All Categories", ...categories].map((name) => {
									const value = name === "All Categories" ? "" : name;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: selected === value ? "navy" : "ghost",
										size: "sm",
										className: "\r\n                        shrink-0\r\n                        justify-start\r\n                        whitespace-nowrap\r\n                        text-left\r\n                        lg:w-full\r\n                      ",
										onClick: () => setSelected(value),
										children: name
									}, name);
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "\r\n                mt-5\r\n                w-full\r\n                border-t\r\n                border-border\r\n                pt-5\r\n              ",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "\r\n                  flex\r\n                  min-w-0\r\n                  items-center\r\n                  gap-2\r\n                  text-sm\r\n                ",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: discountOnly,
									onChange: (e) => setDiscountOnly(e.target.checked),
									className: "shrink-0 accent-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Discounted items" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "\r\n                  mt-3\r\n                  flex\r\n                  min-w-0\r\n                  items-center\r\n                  gap-2\r\n                  text-sm\r\n                ",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: availableOnly,
									onChange: (e) => setAvailableOnly(e.target.checked),
									className: "shrink-0 accent-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Confirmed available" })]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "\r\n              w-full\r\n              min-w-0\r\n              max-w-full\r\n              overflow-hidden\r\n            ",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "\r\n                flex\r\n                w-full\r\n                min-w-0\r\n                flex-col\r\n                gap-3\r\n                border-b\r\n                border-border\r\n                pb-5\r\n                sm:flex-row\r\n                sm:items-center\r\n                sm:justify-between\r\n              ",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "\r\n                  flex\r\n                  h-11\r\n                  w-full\r\n                  min-w-0\r\n                  items-center\r\n                  gap-2\r\n                  rounded-sm\r\n                  border\r\n                  border-input\r\n                  bg-card\r\n                  px-3\r\n                  sm:w-72\r\n                ",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
										size: 17,
										className: "\r\n                    shrink-0\r\n                    text-muted-foreground\r\n                  "
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: search,
										onChange: (e) => setSearch(e.target.value),
										placeholder: "Search products",
										"aria-label": "Search products",
										className: "\r\n                    min-w-0\r\n                    w-full\r\n                    flex-1\r\n                    bg-transparent\r\n                    text-sm\r\n                    outline-none\r\n                  "
									}),
									search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon",
										className: "\r\n                      h-7\r\n                      w-7\r\n                      shrink-0\r\n                    ",
										onClick: () => setSearch(""),
										"aria-label": "Clear search",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 14 })
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "\r\n                  flex\r\n                  w-full\r\n                  min-w-0\r\n                  items-center\r\n                  justify-between\r\n                  gap-3\r\n                  sm:w-auto\r\n                  sm:justify-end\r\n                ",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "\r\n                    shrink-0\r\n                    text-xs\r\n                    text-muted-foreground\r\n                  ",
									children: [filtered.length, " products"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: sort,
									onChange: (e) => setSort(e.target.value),
									"aria-label": "Sort products",
									className: "\r\n                    h-10\r\n                    min-w-0\r\n                    max-w-[170px]\r\n                    flex-1\r\n                    rounded-sm\r\n                    border\r\n                    border-input\r\n                    bg-card\r\n                    px-2\r\n                    text-xs\r\n                    outline-none\r\n                    sm:h-11\r\n                    sm:w-auto\r\n                    sm:flex-none\r\n                    sm:px-3\r\n                  ",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "featured",
											children: "Featured"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "name-asc",
											children: "Name: A to Z"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "name-desc",
											children: "Name: Z to A"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "price-asc",
											children: "Price: Low to High"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "price-desc",
											children: "Price: High to Low"
										})
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "\r\n                mt-6\r\n                grid\r\n                w-full\r\n                min-w-0\r\n                max-w-full\r\n                grid-cols-1\r\n                gap-4\r\n                overflow-hidden\r\n                sm:grid-cols-2\r\n                sm:gap-5\r\n                lg:grid-cols-3\r\n              ",
							children: filtered.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "\r\n                    min-w-0\r\n                    w-full\r\n                    max-w-full\r\n                  ",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product })
							}, product.slug))
						}),
						filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "\r\n                  py-20\r\n                  text-center\r\n                ",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "\r\n                    font-display\r\n                    text-3xl\r\n                  ",
									children: "No matching products"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "\r\n                    mt-3\r\n                    text-sm\r\n                    text-muted-foreground\r\n                  ",
									children: "Try another search or category. Prices and availability are confirmed on enquiry."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "navy",
									className: "mt-5",
									onClick: clearFilters,
									children: "Show all products"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "\r\n                mt-10\r\n                w-full\r\n                min-w-0\r\n                border-t\r\n                border-border\r\n                pt-5\r\n                text-sm\r\n                text-muted-foreground\r\n              ",
							children: [
								"Looking for something else?",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "\r\n                  font-semibold\r\n                  text-primary\r\n                  underline\r\n                ",
									children: "Contact us"
								}),
								" ",
								"for the full catalogue."
							]
						})
					]
				})]
			})
		})]
	});
}
//#endregion
export { ProductsPage as component };
