import { i as require_jsx_runtime } from "../_libs/framer-motion.mjs";
import { c as motion, o as createLucideIcon } from "./button-C1X1bU2g.mjs";
import { n as Navbar, t as Footer } from "./footer-C5GqLapV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-layout-DF2o12wo.js
var import_jsx_runtime = require_jsx_runtime();
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Sparkles = createLucideIcon("sparkles", [
	["path", {
		d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
		key: "1s2grr"
	}],
	["path", {
		d: "M20 2v4",
		key: "1rf3ol"
	}],
	["path", {
		d: "M22 4h-4",
		key: "gwowj6"
	}],
	["circle", {
		cx: "4",
		cy: "20",
		r: "2",
		key: "6kqj1y"
	}]
]);
var leaves = [
	{
		left: "6%",
		delay: 0,
		dur: 18,
		size: 18
	},
	{
		left: "22%",
		delay: 4,
		dur: 24,
		size: 12
	},
	{
		left: "41%",
		delay: 9,
		dur: 20,
		size: 22
	},
	{
		left: "63%",
		delay: 2,
		dur: 26,
		size: 14
	},
	{
		left: "78%",
		delay: 12,
		dur: 22,
		size: 18
	},
	{
		left: "91%",
		delay: 6,
		dur: 28,
		size: 11
	}
];
function FloatingLeaves() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: leaves.map((leaf, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute top-0 text-primary/25",
			style: {
				left: leaf.left,
				animation: `leaf-fall ${leaf.dur}s linear ${leaf.delay}s infinite`
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				width: leaf.size,
				height: leaf.size,
				viewBox: "0 0 24 24",
				fill: "currentColor",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 3C10 3 3 9 3 17c0 1.5.3 2.9.9 4.1C6 15 11 11 17 10c-4.6 2-8.3 5.6-10.2 10.6C15 21 21 14 21 3Z" })
			})
		}, i))
	});
}
function DriftingClouds() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-x-0 top-0 h-64 overflow-hidden",
		children: [
			{
				top: "12%",
				dur: 90,
				delay: 0,
				scale: 1
			},
			{
				top: "34%",
				dur: 130,
				delay: 20,
				scale: .7
			},
			{
				top: "58%",
				dur: 110,
				delay: 45,
				scale: 1.3
			}
		].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute text-card/80",
			style: {
				top: c.top,
				transform: `scale(${c.scale})`,
				animation: `drift-cloud ${c.dur}s linear ${c.delay}s infinite`
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				width: "140",
				height: "52",
				viewBox: "0 0 140 52",
				fill: "currentColor",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "40",
						cy: "34",
						rx: "40",
						ry: "18"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "72",
						cy: "24",
						rx: "30",
						ry: "22"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "104",
						cy: "34",
						rx: "34",
						ry: "16"
					})
				]
			})
		}, i))
	});
}
function FlyingBirds() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: [
			0,
			1,
			2
		].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.svg, {
			width: "26",
			height: "12",
			viewBox: "0 0 26 12",
			className: "absolute text-foreground/25",
			style: { top: `${18 + i * 7}%` },
			initial: { x: "-10vw" },
			animate: {
				x: "110vw",
				y: [
					0,
					-14,
					6,
					0
				]
			},
			transition: {
				duration: 34 + i * 6,
				delay: i * 5,
				repeat: Infinity,
				ease: "linear",
				y: {
					duration: 6,
					repeat: Infinity,
					ease: "easeInOut"
				}
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M1 7c4-5 7-5 11 0 4-5 7-5 11 0",
				stroke: "currentColor",
				strokeWidth: "1.6",
				fill: "none",
				strokeLinecap: "round"
			})
		}, i))
	});
}
function AmbientGlow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 overflow-hidden -z-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			animate: {
				scale: [
					1,
					1.15,
					1
				],
				opacity: [
					.35,
					.5,
					.35
				],
				x: [
					0,
					20,
					0
				],
				y: [
					0,
					-15,
					0
				]
			},
			transition: {
				duration: 8,
				repeat: Infinity,
				ease: "easeInOut"
			},
			className: "absolute top-1/4 left-1/2 -translate-x-1/2 h-[350px] w-[500px] rounded-full bg-emerald-500/20 blur-[120px]"
		})
	});
}
function SiteLayout({ children, bare = false, noFooter = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: bare ? "flex-1" : "flex-1 pt-18",
				children
			}),
			!noFooter && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function PageHeader({ eyebrow, title, subtitle, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden border-b border-border/80 gradient-hero pt-12 pb-16 sm:pt-16 sm:pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmbientGlow, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-5 sm:px-8",
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .5 },
					className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary mb-3 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: eyebrow })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
					initial: {
						opacity: 0,
						y: 18,
						filter: "blur(8px)"
					},
					animate: {
						opacity: 1,
						y: 0,
						filter: "blur(0px)"
					},
					transition: {
						duration: .8,
						delay: .06,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl",
					children: title
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 14
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .8,
						delay: .16
					},
					className: "mt-3.5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base",
					children: subtitle
				}),
				children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children
				})
			]
		})]
	});
}
//#endregion
export { SiteLayout as a, PageHeader as i, FloatingLeaves as n, Sparkles as o, FlyingBirds as r, DriftingClouds as t };
