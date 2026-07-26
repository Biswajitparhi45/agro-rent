import { r as lazyRouteComponent, t as createFileRoute } from "./lazyRouteComponent-B8dfhZ3u.mjs";
import { a as unionType, i as stringType, n as numberType, r as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booking-D78M_hih.js
var $$splitComponentImporter = () => import("./booking-fOzqExok.mjs");
var Route = createFileRoute("/booking")({
	validateSearch: objectType({
		equipment: stringType().optional(),
		from: stringType().optional(),
		to: stringType().optional(),
		days: unionType([numberType(), stringType()]).optional()
	}),
	head: () => ({ meta: [
		{ title: "Book Equipment in 4 Steps | AgriRent" },
		{
			name: "description",
			content: "Select your machine, choose rental dates, pay securely and get instant booking confirmation."
		},
		{
			property: "og:title",
			content: "Book Equipment in 4 Steps | AgriRent"
		},
		{
			property: "og:description",
			content: "A guided four-step booking flow for farm equipment rentals."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
