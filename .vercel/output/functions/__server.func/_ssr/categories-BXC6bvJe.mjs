import { i as require_jsx_runtime } from "../_libs/framer-motion.mjs";
import { c as motion, t as Button } from "./button-C1X1bU2g.mjs";
import { n as Link } from "./context-DsbXeIon.mjs";
import { t as ArrowRight } from "./arrow-right-DvBwLEd0.mjs";
import { a as SiteLayout, i as PageHeader } from "./site-layout-DF2o12wo.mjs";
import { n as categories } from "./equipment-data-BKbMCaY5.mjs";
import { t as CategoryOrbits } from "./category-orbits-CKYGICkC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/categories-BXC6bvJe.js
var import_jsx_runtime = require_jsx_runtime();
function CategoriesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "EQUIPMENT FAMILY INDEX",
			title: "Seven Families of Farm Machinery",
			subtitle: "Explore machinery categories, check live availability counts, and filter equipment instantly for your seasonal farm needs."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-5 py-12 sm:px-8 border-b border-border/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryOrbits, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-5 py-16 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-extrabold font-display",
					children: "All Machinery Categories"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: "Select any category to view verified listings near you"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "soft",
					size: "sm",
					className: "hidden sm:inline-flex rounded-xl font-bold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/equipment",
						children: ["View All Equipment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 ml-1" })]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
				children: categories.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .5,
						delay: i * .06
					},
					className: "surface-card group p-6 rounded-3xl border border-border/80 hover:-translate-y-1.5 hover:shadow-float transition-all duration-300 flex flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary text-xl font-bold group-hover:scale-110 transition-transform",
								children: c.name.charAt(0)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "px-2.5 py-1 rounded-full bg-primary-soft text-primary text-[11px] font-bold",
								children: [c.count, " Listings"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold group-hover:text-primary transition-colors",
							children: c.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground mt-1.5 leading-relaxed",
							children: [
								"High efficiency ",
								c.name.toLowerCase(),
								" machinery verified for seasonal farming operations."
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 pt-4 border-t border-border/60 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-muted-foreground",
							children: "Verified listings across Punjab & Haryana"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							variant: "ghost",
							className: "h-8 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/equipment",
								search: { category: c.name },
								children: "Browse →"
							})
						})]
					})]
				}, c.name))
			})]
		})
	] });
}
//#endregion
export { CategoriesPage as component };
