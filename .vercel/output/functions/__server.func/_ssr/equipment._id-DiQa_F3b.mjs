import { r as lazyRouteComponent, t as createFileRoute } from "./lazyRouteComponent-B8dfhZ3u.mjs";
import { s as getEquipment, u as inr } from "./equipment-data-BKbMCaY5.mjs";
import { n as notFound } from "./not-found-8nHLrNYc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/equipment._id-DiQa_F3b.js
var $$splitComponentImporter = () => import("./equipment._id-CzMi8ZIn.mjs");
var Route = createFileRoute("/equipment/$id")({
	loader: ({ params }) => {
		const item = getEquipment(params.id);
		if (!item) throw notFound();
		return { item };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Equipment not found | AgriRent" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { item } = loaderData;
		const title = `${item.name} — ${inr(item.price)}/day | AgriRent`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: item.summary
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: item.summary
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
