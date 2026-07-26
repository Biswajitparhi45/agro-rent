import { r as lazyRouteComponent, t as createFileRoute } from "./lazyRouteComponent-B8dfhZ3u.mjs";
import { r as objectType, t as enumType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-De6aGf8v.js
var $$splitComponentImporter = () => import("./auth-Ckyomk3t.mjs");
var Route = createFileRoute("/auth")({
	validateSearch: objectType({ mode: enumType([
		"login",
		"register",
		"forgot"
	]).optional() }),
	head: () => ({ meta: [{ title: "Sign in to AgriRent — Farm Equipment Rental" }, {
		name: "description",
		content: "Log in or create an AgriRent account to book machinery or list your farm equipment."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
