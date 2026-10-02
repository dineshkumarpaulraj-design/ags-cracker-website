import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { s as gallery, t as Button } from "./button-DrpbDoM0.mjs";
import { t as X } from "../_libs/lucide-react.mjs";
import { i as PageIntro } from "./site-CRzEUwD7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-CSpQngKb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Gallery() {
	const [open, setOpen] = (0, import_react.useState)(null);
	const selected = open === null ? null : gallery[open] ?? null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			eyebrow: "A glimpse of the festivities",
			title: "The Gallery",
			description: "Explore the colours and moments that make celebrations unforgettable."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "page-container section-space",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: gallery.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					className: `group relative h-auto overflow-hidden rounded-sm p-0 text-left ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`,
					onClick: () => setOpen(i),
					"aria-label": `View ${item.label}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image,
							alt: item.label,
							loading: "lazy",
							className: `w-full object-cover transition-transform duration-500 group-hover:scale-105 ${i === 0 ? "aspect-[1.3] h-full" : "aspect-[1.3]"}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "image-shade absolute inset-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "absolute bottom-5 left-5 text-secondary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[10px] font-bold uppercase tracking-widest text-gold",
								children: item.kind
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block font-display text-2xl font-bold",
								children: item.label
							})]
						})
					]
				}, item.label))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm text-muted-foreground",
				children: "Images are festive illustrations. Shop and product photos can be added when supplied."
			})]
		}),
		selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-5",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": selected.label,
			onClick: () => setOpen(null),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "iconLg",
				className: "absolute right-5 top-5 text-secondary-foreground",
				"aria-label": "Close image",
				onClick: () => setOpen(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: selected.image,
				alt: selected.label,
				className: "max-h-[85vh] max-w-full object-contain",
				onClick: (e) => e.stopPropagation()
			})]
		})
	] });
}
//#endregion
export { Gallery as component };
