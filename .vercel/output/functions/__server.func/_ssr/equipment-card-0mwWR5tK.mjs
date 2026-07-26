import { C as __toESM } from "./createServerFn-BH-xKMvN.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/framer-motion.mjs";
import { a as cn, c as motion, n as ShieldCheck, o as createLucideIcon, t as Button } from "./button-C1X1bU2g.mjs";
import { a as useAuth, n as Link, o as useNavigate } from "./context-DsbXeIon.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Star } from "./star-C_nxsulQ.mjs";
import { r as eq_tractor_default, u as inr } from "./equipment-data-BKbMCaY5.mjs";
import { t as MapPin } from "./map-pin-BxVRd4HV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/equipment-card-0mwWR5tK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Heart = createLucideIcon("heart", [["path", {
	d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
	key: "mvr1a0"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Layers = createLucideIcon("layers", [
	["path", {
		d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
		key: "zw3jo"
	}],
	["path", {
		d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
		key: "1wduqc"
	}],
	["path", {
		d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
		key: "kqbvx6"
	}]
]);
function EquipmentCard({ item, index = 0, isCompared = false, onToggleCompare }) {
	const { user } = useAuth();
	const navigate = useNavigate();
	const [fav, setFav] = (0, import_react.useState)(false);
	const handleBookClick = (e) => {
		if (!user) {
			e.preventDefault();
			navigate({
				to: "/auth",
				search: { mode: "login" }
			});
		}
	};
	const distanceKm = Math.floor(4 + index * 7 % 24);
	const hourlyRate = Math.round(item.price / 7);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-40px"
		},
		transition: {
			duration: .6,
			delay: Math.min(index * .06, .4),
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "group surface-card relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-float",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[16/10] overflow-hidden bg-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.image || "/assets/eq-tractor-CU9rUTdL.jpg",
					alt: item.name,
					loading: "lazy",
					onError: (e) => {
						e.currentTarget.onerror = null;
						e.currentTarget.src = eq_tractor_default;
					},
					className: "h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 via-black/20 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-3 left-3 flex flex-wrap gap-1.5 z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide backdrop-blur-md shadow-sm border", item.available ? "bg-emerald-500/90 text-white border-emerald-400/30" : "bg-black/70 text-white/80 border-white/20"),
						children: item.available ? "⚡ Instant Book" : "Booked"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "bg-black/40 backdrop-blur-md text-white border border-white/20 px-2 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3 w-3 text-emerald-400" }), " Insured"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-3 right-3 flex items-center gap-1.5 z-10",
					children: [onToggleCompare && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: (e) => {
							e.stopPropagation();
							onToggleCompare(item);
						},
						title: "Compare specs",
						className: cn("h-8 px-2 rounded-full text-[10px] font-bold flex items-center gap-1 backdrop-blur-md transition-all cursor-pointer border", isCompared ? "bg-primary text-primary-foreground border-primary" : "bg-black/50 text-white border-white/20 hover:bg-black/70"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-3 w-3" }), isCompared ? "Compared" : "Compare"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
						"aria-label": "Save to favourites",
						onClick: (e) => {
							e.stopPropagation();
							if (!user) {
								toast.error("Please sign in to save favourites.");
								navigate({
									to: "/auth",
									search: { mode: "login" }
								});
								return;
							}
							setFav((f) => !f);
							toast.success(fav ? "Removed from wishlist" : "Saved to wishlist");
						},
						whileTap: { scale: .85 },
						animate: fav ? { scale: [
							1,
							1.3,
							1
						] } : {},
						className: "h-8 w-8 grid place-items-center rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white cursor-pointer hover:bg-black/70 transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("h-3.5 w-3.5 transition-colors", fav ? "fill-red-500 text-red-500" : "text-white") })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-2.5 left-3 flex items-center gap-1.5 text-white z-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-amber-400 text-amber-400" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold",
							children: item.rating
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[11px] text-white/70",
							children: [
								"(",
								item.reviews,
								" reviews)"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-2.5 right-3 text-[10px] font-bold text-white/90 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-md",
					children: [
						"📍 ",
						distanceKm,
						" km away"
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5 flex-1 flex flex-col justify-between space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-start justify-between gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display font-bold text-base leading-snug text-foreground group-hover:text-primary transition-colors",
						children: item.name
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-muted-foreground flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: item.location
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "bg-muted px-2 py-0.5 rounded-md text-[10px] font-semibold text-muted-foreground",
							children: ["⚡ ", item.power]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "bg-muted px-2 py-0.5 rounded-md text-[10px] font-semibold text-muted-foreground",
							children: ["⛽ ", item.fuel]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "bg-muted px-2 py-0.5 rounded-md text-[10px] font-semibold text-muted-foreground",
							children: [
								"📅 ",
								item.year,
								" Model"
							]
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-3 border-t border-border/60 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg font-extrabold text-primary",
						children: inr(item.price)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] text-muted-foreground font-medium",
						children: "/ day"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[10px] text-muted-foreground font-mono",
					children: [
						"or ₹",
						hourlyRate,
						"/hr"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "sm",
					variant: "hero",
					className: "rounded-xl px-4 text-xs font-bold shadow-glow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/equipment/$id",
						params: { id: item.id },
						onClick: handleBookClick,
						children: "Rent Now"
					})
				})]
			})]
		})]
	});
}
function EquipmentCardSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "surface-card rounded-3xl overflow-hidden border border-border/80 p-4 space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "shimmer aspect-[16/10] rounded-2xl bg-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "shimmer h-4 w-3/4 rounded-full bg-muted" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "shimmer h-3 w-1/2 rounded-full bg-muted" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "shimmer h-10 w-full rounded-xl bg-muted mt-4" })
			]
		})]
	});
}
//#endregion
export { EquipmentCardSkeleton as n, Heart as r, EquipmentCard as t };
