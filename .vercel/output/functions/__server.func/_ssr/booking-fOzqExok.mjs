import { C as __toESM } from "./createServerFn-BH-xKMvN.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/framer-motion.mjs";
import { a as cn, c as motion, l as react_exports, o as createLucideIcon, t as Button } from "./button-C1X1bU2g.mjs";
import { a as useAuth, n as Link, o as useNavigate } from "./context-DsbXeIon.mjs";
import { t as ArrowRight } from "./arrow-right-DvBwLEd0.mjs";
import { a as SiteLayout } from "./site-layout-DF2o12wo.mjs";
import { t as Input } from "./dist-BG8VwwRv.mjs";
import { t as Label } from "./label-BzZpg6Ws.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as ArrowLeft } from "./arrow-left-BqR_SGpP.mjs";
import { t as Route } from "./booking-D78M_hih.mjs";
import { d as saveBookingRecord, i as equipment, s as getEquipment, u as inr } from "./equipment-data-BKbMCaY5.mjs";
import { t as Check } from "./check-BbiQd_PR.mjs";
import { t as LoaderCircle } from "./loader-circle-DPEzxXmD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booking-fOzqExok.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CreditCard = createLucideIcon("credit-card", [["rect", {
	width: "20",
	height: "14",
	x: "2",
	y: "5",
	rx: "2",
	key: "ynyp8z"
}], ["line", {
	x1: "2",
	x2: "22",
	y1: "10",
	y2: "10",
	key: "1b3vmo"
}]]);
var steps = [
	"Select Equipment",
	"Payment & Details",
	"Confirmation"
];
function BookingFlow() {
	const { user, loading } = useAuth();
	const navigate = useNavigate();
	const search = Route.useSearch();
	(0, import_react.useEffect)(() => {
		if (!loading && !user) {
			toast.error("Please sign in or create an account to book equipment.");
			navigate({
				to: "/auth",
				search: { mode: "login" }
			});
		}
	}, [
		user,
		loading,
		navigate
	]);
	const parsedDays = search.days ? Number(search.days) : 3;
	const [step, setStep] = (0, import_react.useState)(search.equipment ? 1 : 0);
	const [selected, setSelected] = (0, import_react.useState)(search.equipment ?? equipment[0].id);
	const [days, setDays] = (0, import_react.useState)(isNaN(parsedDays) || parsedDays < 1 ? 3 : parsedDays);
	const [paying, setPaying] = (0, import_react.useState)(false);
	const [location, setLocation] = (0, import_react.useState)("");
	const [cardNumber, setCardNumber] = (0, import_react.useState)("");
	const [expiry, setExpiry] = (0, import_react.useState)("");
	const [cvc, setCvc] = (0, import_react.useState)("");
	const [cardName, setCardName] = (0, import_react.useState)(user?.name || "");
	const [fieldErrors, setFieldErrors] = (0, import_react.useState)({});
	const item = getEquipment(selected);
	const subtotal = item ? item.price * days : 0;
	const fees = Math.round(subtotal * .05);
	const next = () => setStep((s) => Math.min(s + 1, 2));
	const back = () => setStep((s) => Math.max(s - 1, 0));
	const pay = () => {
		const errs = {};
		if (!location.trim()) errs.location = true;
		if (!cardNumber.trim()) errs.cardNumber = true;
		if (!expiry.trim()) errs.expiry = true;
		if (!cvc.trim()) errs.cvc = true;
		if (!cardName.trim()) errs.cardName = true;
		if (Object.keys(errs).length > 0) {
			setFieldErrors(errs);
			toast.error("Please fill in all required fields before proceeding.", { description: "Delivery address and payment details are mandatory." });
			return;
		}
		setFieldErrors({});
		setPaying(true);
		const today = /* @__PURE__ */ new Date();
		const format = (d) => d.toISOString().split("T")[0];
		const fromStr = search.from || format(new Date(today.getTime() + 864e5));
		const toStr = search.to || format(new Date(today.getTime() + 864e5 * (days + 1)));
		if (item) saveBookingRecord({
			id: `bk_${Date.now()}`,
			equipmentId: item.id,
			equipmentName: item.name,
			renterName: user?.name || cardName.trim() || "Rajesh Kumar",
			renterEmail: user?.email || "farmer@agrirent.in",
			fromDate: fromStr,
			toDate: toStr,
			status: "confirmed",
			totalPaid: subtotal + fees + 350,
			timestamp: Date.now()
		});
		setTimeout(() => {
			setPaying(false);
			setStep(2);
		}, 1400);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-5 py-14 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-center text-3xl font-extrabold sm:text-4xl",
				children: "Complete your booking"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative h-1.5 overflow-hidden rounded-full bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "gradient-primary absolute inset-y-0 left-0 rounded-full",
						animate: { width: `${(step + 1) / 3 * 100}%` },
						transition: {
							duration: .7,
							ease: [
								.22,
								1,
								.36,
								1
							]
						}
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 grid grid-cols-3 gap-2",
					children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "min-w-0 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("mx-auto grid h-8 w-8 place-items-center rounded-full text-xs font-bold transition-all duration-500", i <= step ? "gradient-primary text-primary-foreground shadow-glow" : "bg-muted text-muted-foreground"),
							children: i < step ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) : i + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("mt-2 block truncate text-[11px] font-medium sm:text-xs", i <= step ? "text-foreground" : "text-muted-foreground"),
							children: s
						})]
					}, s))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(react_exports.AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: 60
						},
						animate: {
							opacity: 1,
							x: 0
						},
						exit: {
							opacity: 0,
							x: -60
						},
						transition: {
							duration: .55,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						children: [
							step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: equipment.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setSelected(e.id),
									className: cn("surface-card flex items-center gap-4 p-4 text-left transition-all duration-400 hover:-translate-y-1 hover:shadow-float", selected === e.id && "ring-2 ring-primary shadow-glow"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: e.image,
										alt: e.name,
										loading: "lazy",
										className: "h-16 w-20 shrink-0 rounded-xl object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block truncate text-sm font-semibold",
												children: e.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs text-muted-foreground",
												children: e.location
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "mt-1 block text-sm font-bold text-primary",
												children: [inr(e.price), "/day"]
											})
										]
									})]
								}, e.id))
							}),
							step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "surface-card space-y-4 p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-lg font-bold",
											children: "Payment & Delivery Details"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												htmlFor: "site",
												children: ["Field / Delivery Location ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-destructive",
													children: "*"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "site",
												value: location,
												onChange: (e) => {
													setLocation(e.target.value);
													setFieldErrors((p) => ({
														...p,
														location: false
													}));
												},
												placeholder: "Plot no., Village or Tehsil address",
												className: cn("mt-2", fieldErrors.location && "border-destructive ring-2 ring-destructive/20"),
												required: true
											}),
											fieldErrors.location && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] font-semibold text-destructive mt-1",
												children: "Delivery location is required."
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pt-2 border-t border-border/60",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "card",
													children: ["Card number ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "card",
													value: cardNumber,
													onChange: (e) => {
														setCardNumber(e.target.value);
														setFieldErrors((p) => ({
															...p,
															cardNumber: false
														}));
													},
													placeholder: "4242 4242 4242 4242",
													className: cn("mt-2", fieldErrors.cardNumber && "border-destructive ring-2 ring-destructive/20"),
													required: true
												}),
												fieldErrors.cardNumber && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] font-semibold text-destructive mt-1",
													children: "Card number is required."
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "exp",
													children: ["Expiry ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "exp",
													value: expiry,
													onChange: (e) => {
														setExpiry(e.target.value);
														setFieldErrors((p) => ({
															...p,
															expiry: false
														}));
													},
													placeholder: "09/29",
													className: cn("mt-2", fieldErrors.expiry && "border-destructive ring-2 ring-destructive/20"),
													required: true
												}),
												fieldErrors.expiry && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] font-semibold text-destructive mt-1",
													children: "Expiry date is required."
												})
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "cvc",
													children: ["CVC ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "cvc",
													value: cvc,
													onChange: (e) => {
														setCvc(e.target.value);
														setFieldErrors((p) => ({
															...p,
															cvc: false
														}));
													},
													placeholder: "123",
													className: cn("mt-2", fieldErrors.cvc && "border-destructive ring-2 ring-destructive/20"),
													required: true
												}),
												fieldErrors.cvc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] font-semibold text-destructive mt-1",
													children: "CVC is required."
												})
											] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												htmlFor: "name",
												children: ["Name on card ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-destructive",
													children: "*"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "name",
												value: cardName,
												onChange: (e) => {
													setCardName(e.target.value);
													setFieldErrors((p) => ({
														...p,
														cardName: false
													}));
												},
												placeholder: "Full name",
												className: cn("mt-2", fieldErrors.cardName && "border-destructive ring-2 ring-destructive/20"),
												required: true
											}),
											fieldErrors.cardName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] font-semibold text-destructive mt-1",
												children: "Name on card is required."
											})
										] })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Summary, {
									item,
									days,
									subtotal,
									fees,
									from: search.from,
									to: search.to
								})]
							}),
							step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confirmation, {
								item,
								days,
								total: subtotal + fees
							})
						]
					}, step)
				})
			}),
			step < 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					onClick: back,
					disabled: step === 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back"]
				}), step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					layout: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "hero",
						size: "lg",
						onClick: pay,
						disabled: paying,
						children: paying ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), " Processing"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4" }),
							" Pay ",
							inr(subtotal + fees + 350)
						] })
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "hero",
					size: "lg",
					onClick: next,
					children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			})
		]
	}) });
}
function Summary({ item, days, subtotal, fees, from, to }) {
	if (!item) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "surface-card h-fit p-6 space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: item.image,
				alt: item.name,
				loading: "lazy",
				className: "h-32 w-full rounded-2xl object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold",
				children: item.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: item.location
			})] }),
			from && to ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-muted/60 p-2.5 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-bold text-foreground",
					children: "Selected Rental Period:"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"📅 ",
					from,
					" → ",
					to,
					" (",
					days,
					" ",
					days === 1 ? "day" : "days",
					")"
				] })]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "space-y-2.5 border-t border-border pt-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: `${inr(item.price)} × ${days} ${days === 1 ? "day" : "days"}`,
						value: inr(subtotal)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Service & Insurance fee",
						value: inr(fees + 350)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between border-t border-border pt-3 text-base font-bold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total Payable" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: inr(subtotal + fees + 350)
						})]
					})
				]
			})
		]
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "font-medium text-foreground",
			children: value
		})]
	});
}
function Confirmation({ item, days, total }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confetti, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { scale: 0 },
				animate: { scale: 1 },
				transition: {
					type: "spring",
					stiffness: 180,
					damping: 14
				},
				className: "gradient-primary relative mx-auto grid h-24 w-24 place-items-center rounded-full shadow-glow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					initial: {
						scale: 1,
						opacity: .6
					},
					animate: {
						scale: 2.2,
						opacity: 0
					},
					transition: {
						duration: 1.6,
						repeat: Infinity
					},
					className: "absolute inset-0 rounded-full bg-primary/40"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.svg, {
					width: "44",
					height: "44",
					viewBox: "0 0 24 24",
					fill: "none",
					className: "relative text-primary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
						d: "M4 12.5 10 18.5 20 6.5",
						stroke: "currentColor",
						strokeWidth: "2.6",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						initial: { pathLength: 0 },
						animate: { pathLength: 1 },
						transition: {
							duration: .7,
							delay: .25,
							ease: [
								.22,
								1,
								.36,
								1
							]
						}
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
				initial: {
					opacity: 0,
					y: 14
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: .3,
					duration: .6
				},
				className: "mt-7 text-2xl font-extrabold sm:text-3xl",
				children: "Booking confirmed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: [
					"Reference #AR-",
					Math.floor(1e5 + Math.random() * 899999),
					" · The owner has been notified."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 40,
					scale: .94
				},
				animate: {
					opacity: 1,
					y: 0,
					scale: 1
				},
				transition: {
					delay: .45,
					duration: .8,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "surface-card mx-auto mt-9 max-w-md p-6 text-left shadow-float",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image,
						alt: item.name,
						loading: "lazy",
						className: "h-16 w-20 rounded-xl object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-semibold",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								days,
								" days · ",
								item.location
							]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex justify-between border-t border-border pt-4 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "Amount paid"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold text-primary",
						children: inr(total)
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "hero",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/profile",
						children: "View my rentals"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "soft",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/equipment",
						children: "Keep browsing"
					})
				})]
			})
		]
	});
}
function Confetti() {
	const pieces = Array.from({ length: 26 });
	const tones = [
		"bg-primary",
		"bg-primary-glow",
		"bg-harvest",
		"bg-accent-foreground"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0",
		children: pieces.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			className: cn("absolute top-8 h-2 w-2 rounded-[2px]", tones[i % tones.length]),
			style: { left: `${i * 3.8 % 100}%` },
			initial: {
				y: 0,
				opacity: 1,
				rotate: 0
			},
			animate: {
				y: 420 + i % 5 * 40,
				opacity: 0,
				rotate: 420
			},
			transition: {
				duration: 2.2 + i % 4 * .4,
				delay: i % 8 * .06,
				ease: "easeOut"
			}
		}, i))
	});
}
//#endregion
export { BookingFlow as component };
