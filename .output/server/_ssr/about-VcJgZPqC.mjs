import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as slides, r as LOCATION, t as Button } from "./button-DrpbDoM0.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as HeartHandshake, a as Sparkles, f as PackageCheck, i as Tags, w as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as PageIntro } from "./site-CRzEUwD7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-VcJgZPqC.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			eyebrow: "Our story",
			title: "Bringing Joy to Your Celebrations",
			description: "Celebrations bring people together. We help you find the fireworks that make those moments memorable."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "page-container section-space grid items-center gap-10 md:grid-cols-2 lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-[4/3] overflow-hidden rounded-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: slides[0].image,
					alt: "Family celebrating Diwali with sparklers",
					className: "h-full w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold uppercase tracking-[0.2em] text-primary",
					children: "Welcome to AGS CRACKER"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-title mt-3 text-4xl text-navy sm:text-5xl",
					children: "A little more sparkle for every occasion."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-sm leading-8 text-muted-foreground",
					children: [
						"Based in ",
						LOCATION,
						", AGS CRACKER is a crackers and fireworks shop with a wide variety of choices for festive shopping. From sparklers and flower pots to sky shots and gift packs, we make it easier to explore what fits your celebration."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-8 text-muted-foreground",
					children: "We focus on quality selections, competitive prices and friendly service. Ask us for current product details, offers and availability before placing an order."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "navy",
					className: "mt-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products",
						children: ["Explore products ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page-container grid gap-7 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						icon: Sparkles,
						title: "Festive variety",
						text: "Something for all kinds of celebrations."
					},
					{
						icon: Tags,
						title: "Competitive prices",
						text: "Ask about our latest prices and offers."
					},
					{
						icon: PackageCheck,
						title: "Choice that matters",
						text: "Explore a broad range of cracker categories."
					},
					{
						icon: HeartHandshake,
						title: "Friendly service",
						text: "We are here to help you choose."
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
						className: "text-primary",
						size: 29
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-2xl font-bold text-navy",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-6 text-muted-foreground",
						children: item.text
					})
				] }, item.title))
			})
		})
	] });
}
//#endregion
export { About as component };
