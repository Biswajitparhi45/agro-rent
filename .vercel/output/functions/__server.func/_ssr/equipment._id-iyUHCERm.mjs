import { C as __toESM } from "./createServerFn-BH-xKMvN.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/framer-motion.mjs";
import { a as cn, c as motion, l as react_exports, n as ShieldCheck, o as createLucideIcon, t as Button } from "./button-C1X1bU2g.mjs";
import { a as useAuth, n as Link, o as useNavigate } from "./context-DsbXeIon.mjs";
import { a as SiteLayout } from "./site-layout-3ro_qnq8.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Star } from "./star-C_nxsulQ.mjs";
import { c as getOverlappingBooking, i as equipment, p as saveOwnerMessage, u as inr } from "./equipment-data-BKbMCaY5.mjs";
import { t as Wrench } from "./wrench-CVWynzJA.mjs";
import { t as MapPin } from "./map-pin-BxVRd4HV.mjs";
import { n as Send, t as MessageSquare } from "./send-CWdpnj5-.mjs";
import { t as Fuel } from "./fuel-B6Akxpwf.mjs";
import { t as Route } from "./equipment._id-jxrolWla.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/equipment._id-iyUHCERm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CalendarDays = createLucideIcon("calendar-days", [
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "4",
		rx: "2",
		key: "1hopcy"
	}],
	["path", {
		d: "M3 10h18",
		key: "8toen8"
	}],
	["path", {
		d: "M8 14h.01",
		key: "6423bh"
	}],
	["path", {
		d: "M12 14h.01",
		key: "1etili"
	}],
	["path", {
		d: "M16 14h.01",
		key: "1gbofw"
	}],
	["path", {
		d: "M8 18h.01",
		key: "lrp35t"
	}],
	["path", {
		d: "M12 18h.01",
		key: "mhygvu"
	}],
	["path", {
		d: "M16 18h.01",
		key: "kzsmim"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Gauge = createLucideIcon("gauge", [["path", {
	d: "m12 14 4-4",
	key: "9kzdfg"
}], ["path", {
	d: "M3.34 19a10 10 0 1 1 17.32 0",
	key: "19p75a"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Ruler = createLucideIcon("ruler", [
	["path", {
		d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
		key: "icamh8"
	}],
	["path", {
		d: "m14.5 12.5 2-2",
		key: "inckbg"
	}],
	["path", {
		d: "m11.5 9.5 2-2",
		key: "fmmyf7"
	}],
	["path", {
		d: "m8.5 6.5 2-2",
		key: "vc6u1g"
	}],
	["path", {
		d: "m17.5 15.5 2-2",
		key: "wo5hmg"
	}]
]);
function EquipmentDetails() {
	const { item } = Route.useLoaderData();
	const { user } = useAuth();
	const navigate = useNavigate();
	const gallery = [item.image, ...equipment.filter((e) => e.id !== item.id).map((e) => e.image)].slice(0, 4);
	const [active, setActive] = (0, import_react.useState)(0);
	const [fromDate, setFromDate] = (0, import_react.useState)(() => (/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
	const [toDate, setToDate] = (0, import_react.useState)(() => new Date(Date.now() + 3 * 864e5).toISOString().split("T")[0]);
	const [messageModalOpen, setMessageModalOpen] = (0, import_react.useState)(false);
	const [messageText, setMessageText] = (0, import_react.useState)("");
	const fromTime = new Date(fromDate).getTime();
	const diffMs = new Date(toDate).getTime() - fromTime;
	const rawDays = Math.ceil(diffMs / (1e3 * 60 * 60 * 24));
	const rentalDays = isNaN(rawDays) || rawDays < 1 ? 1 : rawDays;
	const overlapping = getOverlappingBooking(item.id, fromDate, toDate);
	const isDateBooked = overlapping !== null;
	const handleBookingClick = (e) => {
		if (!user) {
			e.preventDefault();
			toast.error("Please sign in or create an account to book equipment.");
			navigate({
				to: "/auth",
				search: { mode: "login" }
			});
		}
	};
	const specs = [
		{
			icon: Gauge,
			label: "Power",
			value: item.power
		},
		{
			icon: Fuel,
			label: "Drive",
			value: item.fuel
		},
		{
			icon: Ruler,
			label: "Working width",
			value: item.width
		},
		{
			icon: Wrench,
			label: "Model year",
			value: String(item.year)
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, {
		noFooter: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-10 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/equipment",
						className: "hover:text-foreground",
						children: "Equipment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "px-2",
						children: "/"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: item.name
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "group surface-card relative aspect-16/10 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(react_exports.AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
								src: gallery[active],
								alt: item.name,
								initial: {
									opacity: 0,
									scale: 1.04
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								exit: { opacity: 0 },
								transition: {
									duration: .6,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
							}, active)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-4 gap-3",
						children: gallery.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActive(i),
							className: cn("aspect-4/3 overflow-hidden rounded-xl border-2 transition-all duration-400", active === i ? "border-primary shadow-glow" : "border-transparent opacity-70 hover:opacity-100"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src,
								alt: "",
								loading: "lazy",
								className: "h-full w-full object-cover"
							})
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 22
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .1,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "mt-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground",
								children: item.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 text-3xl font-extrabold sm:text-4xl",
								children: item.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }),
											" ",
											item.location
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-harvest text-harvest" }),
											" ",
											item.rating,
											" ·",
											" ",
											item.reviews,
											" reviews"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-primary" }), " Insured rental"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base",
								children: item.summary
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: specs.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 18
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .5,
								delay: i * .07
							},
							className: "surface-card p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs text-muted-foreground",
									children: s.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: s.value
								})
							]
						}, s.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-bold",
							children: "Reviews"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 space-y-4",
							children: [{
								n: "Suresh M.",
								t: "Arrived on time and fully fuelled. Owner walked me through the controls."
							}, {
								n: "Lakshmi R.",
								t: "Machine was spotless and the daily rate was fair. Booking took two minutes."
							}].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									x: -18
								},
								whileInView: {
									opacity: 1,
									x: 0
								},
								viewport: { once: true },
								transition: {
									duration: .6,
									delay: i * .1
								},
								className: "surface-card p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-9 w-9 place-items-center rounded-full bg-accent text-sm font-bold text-accent-foreground",
										children: r.n.charAt(0)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold",
										children: r.n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex gap-0.5",
										children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-harvest text-harvest" }, k))
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: r.t
								})]
							}, r.n))
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 lg:sticky lg:top-22 lg:self-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 22
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
						className: "surface-card p-5 shadow-float rounded-3xl border border-border/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between border-b border-border/60 pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl xl:text-3xl font-extrabold text-primary",
									children: inr(item.price)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground ml-1",
									children: "/ day"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 text-[10px] font-extrabold uppercase border border-emerald-500/25",
									children: "Available Now"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 space-y-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-border bg-card p-2.5 shadow-sm hover:border-primary transition-all",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-[9px] font-extrabold uppercase tracking-wider text-muted-foreground block mb-0.5",
											children: "From Date (Pickup)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "date",
											value: fromDate,
											onChange: (e) => setFromDate(e.target.value),
											className: "w-full bg-transparent text-xs font-bold text-foreground focus:outline-none"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-border bg-card p-2.5 shadow-sm hover:border-primary transition-all",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-[9px] font-extrabold uppercase tracking-wider text-muted-foreground block mb-0.5",
											children: "To Date (Return)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "date",
											value: toDate,
											onChange: (e) => setToDate(e.target.value),
											className: "w-full bg-transparent text-xs font-bold text-foreground focus:outline-none"
										})]
									})]
								})
							}),
							overlapping ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3.5 p-3 rounded-xl bg-destructive/10 border border-destructive/25 text-center space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-extrabold text-destructive",
									children: "⚠️ Already Booked for Selected Dates"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[10px] text-muted-foreground",
									children: [
										"This machine is already reserved from ",
										overlapping.fromDate,
										" to ",
										overlapping.toDate,
										". Please select different dates."
									]
								})]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3.5 rounded-xl bg-muted/40 border border-border/70 p-3 space-y-1.5 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-muted-foreground text-[11px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"Rental Rate (",
											inr(item.price),
											" × ",
											rentalDays,
											"d)"
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-foreground",
											children: inr(item.price * rentalDays)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-muted-foreground text-[11px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Insurance & Guarantee" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-foreground",
											children: "₹350"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-muted-foreground text-[11px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Delivery & Inspection" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-emerald-600",
											children: "FREE"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-1.5 border-t border-border/60 flex justify-between text-xs font-extrabold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total Payable" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary font-display text-sm",
											children: inr(item.price * rentalDays + 350)
										})]
									})
								]
							}),
							isDateBooked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								disabled: true,
								className: "mt-4 w-full rounded-xl font-bold h-11 text-xs bg-muted text-muted-foreground border border-border/80 opacity-70 cursor-not-allowed",
								children: "Unavailable for Selected Dates"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "hero",
								size: "sm",
								className: "mt-4 w-full rounded-xl font-bold shadow-glow h-11 text-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/booking",
									search: {
										equipment: item.id,
										from: fromDate,
										to: toDate,
										days: rentalDays
									},
									onClick: handleBookingClick,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-4 w-4 mr-1" }),
										" Reserve Machinery (",
										inr(item.price * rentalDays + 350),
										")"
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-center text-[10px] text-muted-foreground font-medium",
								children: "Free cancellation up to 48 hours before pickup"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 22
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .1,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "surface-card p-4 rounded-3xl border border-border/80 shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gradient-primary grid h-10 w-10 shrink-0 place-items-center rounded-xl text-base font-bold text-primary-foreground shadow-sm",
									children: item.owner.charAt(0)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate font-bold text-xs text-foreground",
										children: item.owner
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[10px] text-muted-foreground",
										children: [
											"Hosting since ",
											item.ownerSince,
											" · Verified"
										]
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "soft",
								size: "sm",
								onClick: () => {
									if (!user) {
										toast.error("Please sign in to send a message to the owner.");
										navigate({
											to: "/auth",
											search: { mode: "login" }
										});
										return;
									}
									setMessageModalOpen(true);
								},
								className: "rounded-xl text-xs font-bold gap-1 cursor-pointer h-9 px-3 shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-3.5 w-3.5 text-primary" }), " Message"]
							})]
						})
					})]
				})]
			})]
		}), messageModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				onClick: () => setMessageModalOpen(false),
				className: "fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					scale: .92,
					y: 20
				},
				animate: {
					opacity: 1,
					scale: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					scale: .92
				},
				transition: {
					type: "spring",
					stiffness: 350,
					damping: 25
				},
				className: "relative z-[10000] w-full max-w-lg rounded-3xl border-2 border-primary/20 bg-card p-6 sm:p-7 shadow-2xl space-y-5 text-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-primary grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-lg font-extrabold text-primary-foreground shadow-glow",
								children: item.owner.charAt(0)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-extrabold text-base font-display text-foreground",
								children: ["Message ", item.owner]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: ["Inquiring about: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: item.name
								})]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setMessageModalOpen(false),
							className: "grid h-9 w-9 place-items-center rounded-xl bg-muted/80 text-foreground hover:bg-destructive/10 hover:text-destructive transition-colors cursor-pointer",
							children: "✕"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-extrabold uppercase tracking-wider text-primary mb-2",
						children: "Quick Inquiries"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							`Is this available for pickup tomorrow?`,
							`Can you deliver to ${item.location}?`,
							`Does this include an operator?`
						].map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setMessageText(q),
							className: "text-xs font-bold px-3 py-1.5 rounded-xl border border-border bg-muted/40 hover:bg-primary-soft hover:text-primary transition-all text-left cursor-pointer shadow-sm",
							children: ["💬 ", q]
						}, q))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-bold text-foreground block mb-1.5",
						children: ["Your Message to ", item.owner.split(" ")[0]]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 4,
						value: messageText,
						onChange: (e) => setMessageText(e.target.value),
						placeholder: `Hi ${item.owner.split(" ")[0]}, I am interested in renting your ${item.name}...`,
						className: "w-full rounded-2xl border-2 border-border bg-background p-3.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none shadow-inner"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-end gap-3 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => setMessageModalOpen(false),
							className: "rounded-xl font-bold h-11 px-5 cursor-pointer",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "hero",
							size: "sm",
							onClick: () => {
								if (!messageText.trim()) {
									toast.error("Please enter a message before sending.");
									return;
								}
								saveOwnerMessage({
									id: `msg_${Date.now()}`,
									farmerName: user?.name || "Rajesh Kumar",
									farmerRole: "Farmer",
									equipmentId: item.id,
									equipmentName: item.name,
									ownerName: item.owner,
									message: messageText.trim(),
									time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
										hour: "2-digit",
										minute: "2-digit"
									}),
									timestamp: Date.now()
								});
								toast.success(`Message sent to ${item.owner}! They usually reply within 1 hour.`);
								setMessageModalOpen(false);
								setMessageText("");
							},
							className: "rounded-xl font-bold h-11 px-6 gap-2 shadow-glow cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), " Send Message"]
						})]
					})
				]
			})]
		})]
	});
}
//#endregion
export { EquipmentDetails as component };
