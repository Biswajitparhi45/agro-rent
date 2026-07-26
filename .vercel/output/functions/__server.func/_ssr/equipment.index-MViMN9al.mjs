import { r as lazyRouteComponent, t as createFileRoute } from "./lazyRouteComponent-B8dfhZ3u.mjs";
import { i as stringType, r as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/equipment.index-MViMN9al.js
var $$splitComponentImporter = () => import("./equipment.index-Xi7tWWKN.mjs");
var Route = createFileRoute("/equipment/")({
	validateSearch: objectType({ category: stringType().optional() }),
	head: () => ({ meta: [
		{ title: "Equipment Rentals — Rent Verified Farm Machinery | AgriRent" },
		{
			name: "description",
			content: "Browse, filter and rent tractors, harvesters, seeders and heavy farm machinery from verified owners."
		},
		{
			property: "og:title",
			content: "Equipment Rentals | AgriRent"
		},
		{
			property: "og:description",
			content: "Find the best farm equipment for your season."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
