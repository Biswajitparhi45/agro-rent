import { C as __toESM } from "./createServerFn-BH-xKMvN.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/framer-motion.mjs";
import { a as cn, c as motion, n as ShieldCheck, o as createLucideIcon, t as Button } from "./button-C1X1bU2g.mjs";
import { a as SiteLayout, i as PageHeader } from "./site-layout-3ro_qnq8.mjs";
import { t as Input } from "./dist-BG8VwwRv.mjs";
import { t as Label } from "./label-BzZpg6Ws.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Mail } from "./mail-4khZ_a06.mjs";
import { t as Clock } from "./clock-D9Km3r5r.mjs";
import { t as MapPin } from "./map-pin-BxVRd4HV.mjs";
import { n as Send, t as MessageSquare } from "./send-CWdpnj5-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-0i-TFasn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Phone = createLucideIcon("phone", [["path", {
	d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
	key: "9njp5v"
}]]);
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "24/7 SUPPORT HELPLINE",
		title: "We Answer Within One Hour",
		subtitle: "Support in 7 regional languages, 7 days a week — during peak harvest seasons, we operate around the clock."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-7xl px-5 py-16 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[1.3fr_1fr] items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
				initial: {
					opacity: 0,
					y: 24
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .7,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				onSubmit: (e) => {
					e.preventDefault();
					toast.success("Message sent! Our harvest support team will contact you shortly.");
				},
				className: "surface-card space-y-6 p-8 rounded-3xl border border-border/80 shadow-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 pb-2 border-b border-border/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-8 w-8 place-items-center rounded-xl bg-primary/15 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-base font-bold",
							children: "Send us a message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Fill in details and we'll reach back via phone or email."
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
							htmlFor: "n",
							className: "text-xs font-semibold",
							children: ["Your Full Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-destructive",
								children: "*"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "n",
							placeholder: "e.g. Gurpreet Singh",
							className: "mt-1.5 h-11 text-sm rounded-xl",
							required: true
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
							htmlFor: "e",
							className: "text-xs font-semibold",
							children: ["Phone Number / Email ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-destructive",
								children: "*"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "e",
							placeholder: "+91 98765 43210",
							className: "mt-1.5 h-11 text-sm rounded-xl",
							required: true
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
						htmlFor: "m",
						className: "text-xs font-semibold",
						children: ["Message / Inquiry ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-destructive",
							children: "*"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "m",
						rows: 5,
						placeholder: "Describe your rental question, machinery issue, or listing request...",
						className: "mt-1.5 text-sm rounded-xl",
						required: true
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						variant: "hero",
						size: "lg",
						className: "w-full rounded-xl font-bold gap-2 shadow-glow cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), " Send Message"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [[
					{
						icon: Phone,
						title: "Toll-Free Helpline",
						detail: "1800 200 4040",
						sub: "Toll free across India (6 AM – 10 PM)"
					},
					{
						icon: Mail,
						title: "Official Support Email",
						detail: "support@agrirent.in",
						sub: "Replies within 1 hour"
					},
					{
						icon: MapPin,
						title: "Headquarters",
						detail: "Sector 34-A, Chandigarh",
						sub: "AgriTech Innovation Hub, 160022"
					},
					{
						icon: Clock,
						title: "Harvest Season Hours",
						detail: "24/7 Active Dispatch",
						sub: "Oct–Nov & Mar–Apr harvest windows"
					}
				].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: 20
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: {
						duration: .5,
						delay: .08 * i
					},
					className: "surface-card flex items-start gap-4 p-5 rounded-2xl border border-border/80 hover:-translate-y-1 transition-all duration-300",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary mt-0.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium text-muted-foreground",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-bold text-sm text-foreground mt-0.5",
								children: c.detail
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground mt-0.5",
								children: c.sub
							})
						]
					})]
				}, c.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-emerald-500/25 bg-emerald-500/8 p-5 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-emerald-500/20 text-emerald-600",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold text-emerald-800 dark:text-emerald-300",
						children: "100% Insured & Verified"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-emerald-700/80 dark:text-emerald-400",
						children: "All support tickets regarding active bookings are escalated immediately."
					})] })]
				})]
			})]
		})
	})] });
}
//#endregion
export { Contact as component };
