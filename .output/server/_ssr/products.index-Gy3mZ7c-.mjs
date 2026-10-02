import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products.index-Gy3mZ7c-.js
var $$splitComponentImporter = () => import("./products.index-DhPuH1ik.mjs");
var Route = createFileRoute("/products/")({
	validateSearch: (search) => ({
		...typeof search["q"] === "string" ? { q: search["q"] } : {},
		...typeof search["category"] === "string" ? { category: search["category"] } : {}
	}),
	head: () => ({ meta: [
		{ title: "Shop Fireworks & Crackers | AGS CRACKER" },
		{
			name: "description",
			content: "Browse crackers, sparklers, flower pots, sky shots and more from AGS CRACKER in Virudhunagar."
		},
		{
			property: "og:title",
			content: "Shop Fireworks & Crackers | AGS CRACKER"
		},
		{
			property: "og:description",
			content: "Explore festive fireworks and enquire about current prices at AGS CRACKER."
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
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
