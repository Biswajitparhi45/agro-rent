import { C as __toESM } from "./createServerFn-BH-xKMvN.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/framer-motion.mjs";
import { c as motion, n as ShieldCheck, t as Button } from "./button-C1X1bU2g.mjs";
import { a as useAuth, n as Link, o as useNavigate } from "./context-DsbXeIon.mjs";
import { t as ArrowRight } from "./arrow-right-DvBwLEd0.mjs";
import { t as BadgeCheck } from "./badge-check-EIAM9Ghu.mjs";
import { t as CalendarCheck } from "./calendar-check-DuTmVx5a.mjs";
import { a as SiteLayout, n as FloatingLeaves, o as Sparkles, r as FlyingBirds, t as DriftingClouds } from "./site-layout-DF2o12wo.mjs";
import { t as Wallet } from "./wallet-B3Fl1oET.mjs";
import { t as CircleCheck } from "./circle-check-DGje9aGf.mjs";
import { a as getAllEquipment, n as categories } from "./equipment-data-BKbMCaY5.mjs";
import { t as LoaderCircle } from "./loader-circle-DPEzxXmD.mjs";
import { t as CategoryOrbits } from "./category-orbits-CKYGICkC.mjs";
import { t as Search } from "./search-CHxVW7Kl.mjs";
import { n as EquipmentCardSkeleton, t as EquipmentCard } from "./equipment-card-0mwWR5tK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-k6KXeWG8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_landscape_default = "/assets/hero-landscape-D2OGadrV.jpg";
function SearchCard({ delay = 0 }) {
	const navigate = useNavigate();
	const [query, setQuery] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const submit = (e) => {
		e.preventDefault();
		setBusy(true);
		setTimeout(() => {
			setBusy(false);
			navigate({
				to: "/equipment",
				search: query ? { category: query } : {}
			});
		}, 400);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 20
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .8,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "mx-auto w-full max-w-3xl space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "surface-card flex items-center gap-2 rounded-3xl p-2.5 shadow-float border border-border/80 bg-card/95 backdrop-blur-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 items-center gap-3 px-4 py-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-5 w-5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: query,
					onChange: (e) => setQuery(e.target.value),
					placeholder: "Search tractor, harvester, location, or brand...",
					className: "w-full bg-transparent text-sm sm:text-base font-semibold text-foreground outline-none placeholder:font-medium placeholder:text-muted-foreground/70"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
				type: "submit",
				whileTap: { scale: .97 },
				className: "gradient-primary flex h-12 items-center justify-center gap-2 rounded-2xl px-7 text-sm font-extrabold text-primary-foreground shadow-glow transition-all hover:shadow-float cursor-pointer shrink-0",
				children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Search Machinery" })] })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-center gap-2 text-xs font-semibold",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground text-[11px] uppercase tracking-wider font-extrabold mr-1",
				children: "Popular:"
			}), categories.slice(0, 5).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => navigate({
					to: "/equipment",
					search: { category: c.name }
				}),
				className: "rounded-full border border-border/80 bg-card/80 px-3.5 py-1 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:bg-accent cursor-pointer",
				children: c.name
			}, c.name))]
		})]
	});
}
function Landing() {
	const { user } = useAuth();
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [allEquipment, setAllEquipment] = (0, import_react.useState)(() => getAllEquipment());
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setLoading(false), 800);
		const sync = () => setAllEquipment(getAllEquipment());
		window.addEventListener("agrirent_equipment_updated", sync);
		window.addEventListener("storage", sync);
		return () => {
			clearTimeout(t);
			window.removeEventListener("agrirent_equipment_updated", sync);
			window.removeEventListener("storage", sync);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, {
		bare: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-5 py-20 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Browse by category",
					title: "Every machine your season needs",
					copy: "From 45HP compacts to 12-metre boom sprayers — listed, verified and ready within a day's ride."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryOrbits, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border bg-primary-soft/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-5 py-20 sm:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							{
								icon: BadgeCheck,
								label: "Verified owners",
								value: "2,400+"
							},
							{
								icon: CalendarCheck,
								label: "Bookings completed",
								value: "18,900"
							},
							{
								icon: ShieldCheck,
								label: "Insured rentals",
								value: "100%"
							},
							{
								icon: Wallet,
								label: "Saved vs. buying",
								value: "₹72 Cr"
							}
						].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 22
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .6,
								delay: i * .08,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "surface-card p-6 transition-transform duration-500 hover:-translate-y-1.5 hover:shadow-float",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display mt-5 text-3xl font-extrabold",
									children: s.value
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
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
					className: "grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						eyebrow: "Featured this week",
						title: "Premium machines near you",
						copy: "Hand-checked listings with service records, live availability and same-week delivery."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "soft",
						className: "hidden shrink-0 sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/equipment",
							children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: loading ? Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EquipmentCardSkeleton, {}, i)) : allEquipment.filter((e) => e.available).slice(0, 6).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EquipmentCard, {
						item,
						index: i
					}, item.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-5 pb-24 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gradient-primary relative overflow-hidden rounded-4xl px-8 py-16 text-center shadow-float sm:px-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingLeaves, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
							initial: {
								opacity: 0,
								y: 20,
								filter: "blur(8px)"
							},
							whileInView: {
								opacity: 1,
								y: 0,
								filter: "blur(0px)"
							},
							viewport: { once: true },
							transition: {
								duration: .9,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "relative mx-auto max-w-2xl text-3xl font-extrabold text-primary-foreground sm:text-4xl",
							children: "Own machinery? Let it earn between seasons."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85",
							children: "List once, set availability, and get paid within 24 hours of every completed rental."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative mt-8 flex flex-wrap justify-center gap-3",
							children: user ? user.role === "owner" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "glass",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/dashboard",
									children: "Open Owner Dashboard"
								})
							}) : user.role === "admin" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "glass",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/admin",
									children: "Open Admin Panel"
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "glass",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/auth",
									search: { mode: "register" },
									children: "Register as Owner"
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "glass",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/auth",
									search: { mode: "register" },
									children: "List Machinery as Owner"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/auth",
									children: "Sign In"
								})
							})] })
						})
					]
				})
			})
		]
	});
}
function SectionHead({ eyebrow, title, copy }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: {
					opacity: 0,
					y: 10
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { duration: .6 },
				className: "text-xs font-semibold tracking-[0.18em] text-primary uppercase",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
				initial: {
					opacity: 0,
					y: 18,
					filter: "blur(8px)"
				},
				whileInView: {
					opacity: 1,
					y: 0,
					filter: "blur(0px)"
				},
				viewport: { once: true },
				transition: {
					duration: .8,
					delay: .05,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "mt-3 text-3xl font-extrabold sm:text-4xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base",
				children: copy
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden pt-32 pb-24 sm:pt-40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					duration: 1.2,
					ease: "easeOut"
				},
				className: "gradient-hero absolute inset-0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: hero_landscape_default,
				alt: "Rolling farmland at sunrise",
				width: 1920,
				height: 1088,
				initial: {
					opacity: 0,
					scale: 1.06
				},
				animate: {
					opacity: .55,
					scale: 1
				},
				transition: {
					duration: 1.6,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "absolute inset-x-0 bottom-0 h-[62%] w-full object-cover [mask-image:linear-gradient(to_bottom,transparent,black_38%)]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DriftingClouds, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlyingBirds, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingLeaves, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 18
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .9,
							delay: .15,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "glass mx-auto flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex h-2 w-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "#1 Farm Machinery Sharing Marketplace" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-px bg-border" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground font-normal",
								children: "486+ Machines Available Today"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 28,
							filter: "blur(12px)"
						},
						animate: {
							opacity: 1,
							y: 0,
							filter: "blur(0px)"
						},
						transition: {
							duration: 1.1,
							delay: .25,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "mx-auto mt-6 max-w-4xl text-center text-4xl leading-[1.05] font-extrabold sm:text-6xl lg:text-7xl",
						children: [
							"Rent Agricultural ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Equipment"
							}),
							" Easily"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: .4,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "Helping farmers rent tractors, harvesters, seeders and tools directly from verified owners nearby. Transparent daily pricing & insured bookings."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchCard, { delay: .55 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: .9,
							delay: .9
						},
						className: "mt-8 flex flex-wrap items-center justify-center gap-3",
						children: [
							"Zero Booking Fees",
							"48h Free Cancellation",
							"100% Insured Rentals",
							"Verified Machinery"
						].map((text) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/80 px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-sm backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-primary shrink-0" }), text]
						}, text))
					})
				]
			})
		]
	});
}
//#endregion
export { Landing as component };
