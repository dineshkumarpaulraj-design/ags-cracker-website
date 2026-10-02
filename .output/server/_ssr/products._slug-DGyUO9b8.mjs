import { u as products } from "./button-DrpbDoM0.mjs";
import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-DGyUO9b8.js
var $$splitComponentImporter = () => import("./products._slug-CjSlllWO.mjs");
var Route = createFileRoute("/products/$slug")({
	loader: ({ params }) => {
		const product = products.find((p) => p.slug === params.slug);
		if (!product) throw notFound();
		return product;
	},
	head: ({ loaderData }) => ({ meta: [
		{ title: loaderData ? `${loaderData.name} | AGS CRACKER` : "Product Not Found | AGS CRACKER" },
		{
			name: "description",
			content: loaderData ? `${loaderData.name} at AGS CRACKER, Virudhunagar. Enquire about current pricing and availability.` : "Explore fireworks at AGS CRACKER."
		},
		{
			property: "og:title",
			content: loaderData ? `${loaderData.name} | AGS CRACKER` : "Product Not Found | AGS CRACKER"
		},
		{
			property: "og:description",
			content: loaderData?.description ?? "Explore fireworks at AGS CRACKER."
		},
		{
			property: "og:type",
			content: "product"
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
