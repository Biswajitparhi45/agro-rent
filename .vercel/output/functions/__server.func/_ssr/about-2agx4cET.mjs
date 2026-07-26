import { i as require_jsx_runtime } from "../_libs/framer-motion.mjs";
import { c as motion, i as Tractor, n as ShieldCheck, o as createLucideIcon, t as Button } from "./button-C1X1bU2g.mjs";
import { n as Link } from "./context-DsbXeIon.mjs";
import { t as ArrowRight } from "./arrow-right-DvBwLEd0.mjs";
import { t as BadgeCheck } from "./badge-check-EIAM9Ghu.mjs";
import { t as CalendarCheck } from "./calendar-check-DuTmVx5a.mjs";
import { a as SiteLayout, i as PageHeader } from "./site-layout-DF2o12wo.mjs";
import { t as Wallet } from "./wallet-B3Fl1oET.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-2agx4cET.js
var import_jsx_runtime = require_jsx_runtime();
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var HeartHandshake = createLucideIcon("heart-handshake", [["path", {
	d: "M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",
	key: "17lmqv"
}]]);
function About() {
	const stats = [
		{
			icon: BadgeCheck,
			label: "Verified Owners",
			value: "2,400+"
		},
		{
			icon: CalendarCheck,
			label: "Rentals Completed",
			value: "18,900+"
		},
		{
			icon: ShieldCheck,
			label: "Insured Machinery",
			value: "100%"
		},
		{
			icon: Wallet,
			label: "Saved by Farmers",
			value: "₹72 Cr+"
		}
	];
	const values = [
		{
			icon: Tractor,
			title: "Put Idle Machinery to Work",
			desc: "A tractor sits unused up to 280 days a year. AgriRent unlocks new earnings for machine owners while helping smallholder farmers access heavy equipment without capital burden."
		},
		{
			icon: HeartHandshake,
			title: "Fair & Transparent Pricing",
			desc: "Daily rates set directly by machine owners. Zero hidden booking fees, transparent delivery quotes, and automated payout transfers within 24 hours of job completion."
		},
		{
			icon: ShieldCheck,
			title: "Multi-Step Verification & Insurance",
			desc: "Every listing is vetted against government RC records, chassis numbers, and physical inspection. Every rental includes comprehensive machinery insurance coverage."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "OUR MISSION & VISION",
			title: "Modern Agricultural Equipment for Every Acre",
			subtitle: "AgriRent connects smallholder farmers with machine owners across 14 states, turning idle equipment into high-yield seasonal revenue while lowering costs for everyone."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border/80 bg-primary-soft/30 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
							duration: .6,
							delay: i * .08
						},
						className: "surface-card p-6 rounded-3xl border border-border/80 hover:-translate-y-1.5 transition-all duration-300",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 place-items-center rounded-2xl bg-primary/10 text-primary mb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl font-extrabold",
								children: s.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground font-medium",
								children: s.label
							})
						]
					}, s.label))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-5 py-20 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold tracking-[0.18em] text-primary uppercase",
						children: "Why AgriRent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-extrabold mt-2 sm:text-4xl font-display",
						children: "Built for Real Farmers & Real Seasons"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-3 leading-relaxed",
						children: "Designed for low-bandwidth rural connectivity, tight harvest windows, and total peace of mind for both owners and hirers."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: values.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .6,
						delay: i * .1
					},
					className: "surface-card p-8 rounded-3xl border border-border/80 hover:shadow-float transition-all duration-500 flex flex-col justify-between",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary mb-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-bold",
							children: v.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs leading-relaxed text-muted-foreground",
							children: v.desc
						})
					] })
				}, v.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-5 pb-24 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gradient-primary relative overflow-hidden rounded-4xl px-8 py-16 text-center shadow-float sm:px-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
						initial: {
							opacity: 0,
							y: 16
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						className: "text-3xl font-extrabold text-primary-foreground sm:text-4xl font-display",
						children: "Ready to rent or list farm equipment?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-primary-foreground/80 max-w-xl mx-auto leading-relaxed",
						children: "Join thousands of verified owners and farmers across India today."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "glass",
							className: "rounded-2xl font-bold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/equipment",
								children: ["Explore Marketplace ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 ml-1" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							className: "rounded-2xl border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/auth",
								search: { mode: "register" },
								children: "List Your Machine"
							})
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { About as component };
