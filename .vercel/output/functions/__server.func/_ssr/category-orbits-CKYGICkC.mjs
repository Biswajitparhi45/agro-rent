import { i as require_jsx_runtime } from "../_libs/framer-motion.mjs";
import { c as motion, i as Tractor, o as createLucideIcon, r as Sprout } from "./button-C1X1bU2g.mjs";
import { n as Link } from "./context-DsbXeIon.mjs";
import { t as Wheat } from "./wheat-BCw1x77I.mjs";
import { n as categories } from "./equipment-data-BKbMCaY5.mjs";
import { t as Wrench } from "./wrench-CVWynzJA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category-orbits-CKYGICkC.js
var import_jsx_runtime = require_jsx_runtime();
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Cog = createLucideIcon("cog", [
	["path", {
		d: "M11 10.27 7 3.34",
		key: "16pf9h"
	}],
	["path", {
		d: "m11 13.73-4 6.93",
		key: "794ttg"
	}],
	["path", {
		d: "M12 22v-2",
		key: "1osdcq"
	}],
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M14 12h8",
		key: "4f43i9"
	}],
	["path", {
		d: "m17 20.66-1-1.73",
		key: "eq3orb"
	}],
	["path", {
		d: "m17 3.34-1 1.73",
		key: "2wel8s"
	}],
	["path", {
		d: "M2 12h2",
		key: "1t8f8n"
	}],
	["path", {
		d: "m20.66 17-1.73-1",
		key: "sg0v6f"
	}],
	["path", {
		d: "m20.66 7-1.73 1",
		key: "1ow05n"
	}],
	["path", {
		d: "m3.34 17 1.73-1",
		key: "nuk764"
	}],
	["path", {
		d: "m3.34 7 1.73 1",
		key: "1ulond"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "8",
		key: "46899m"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Droplets = createLucideIcon("droplets", [["path", {
	d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
	key: "1ptgy4"
}], ["path", {
	d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
	key: "1sl1rz"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var icons = {
	Tractor,
	Wheat,
	Sprout,
	Cog,
	Shovel: createLucideIcon("shovel", [
		["path", {
			d: "M21.56 4.56a1.5 1.5 0 0 1 0 2.122l-.47.47a3 3 0 0 1-4.212-.03 3 3 0 0 1 0-4.243l.44-.44a1.5 1.5 0 0 1 2.121 0z",
			key: "1gcedi"
		}],
		["path", {
			d: "M3 22a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707l3.355-3.355a1.205 1.205 0 0 1 1.704 0l3.296 3.296a1.205 1.205 0 0 1 0 1.704l-3.355 3.355a1 1 0 0 1-.707.293z",
			key: "pg9kv3"
		}],
		["path", {
			d: "m9 15 7.879-7.878",
			key: "1o1zgh"
		}]
	]),
	Droplets,
	Wrench
};
function CategoryOrbits() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-7",
		children: categories.map((c, i) => {
			const Icon = icons[c.icon] ?? Tractor;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 24,
					scale: .94
				},
				whileInView: {
					opacity: 1,
					y: 0,
					scale: 1
				},
				viewport: {
					once: true,
					margin: "-60px"
				},
				transition: {
					duration: .6,
					delay: i * .07,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/equipment",
					search: { category: c.name },
					className: "group flex flex-col items-center gap-3 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative grid h-20 w-20 place-items-center rounded-full bg-card shadow-soft transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5 group-hover:rotate-6 group-hover:shadow-glow",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 scale-75 rounded-full bg-accent opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 gradient-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "relative h-7 w-7 text-primary transition-all duration-500 group-hover:scale-115 group-hover:text-primary-foreground" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "translate-y-1 text-sm font-semibold transition-transform duration-500 group-hover:translate-y-0",
							children: c.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "-mt-2 text-xs text-muted-foreground opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-100",
							children: [c.count, " listings"]
						})
					]
				})
			}, c.name);
		})
	});
}
//#endregion
export { CategoryOrbits as t };
