import { C as __toESM } from "./createServerFn-BH-xKMvN.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/framer-motion.mjs";
import { c as motion, i as Tractor, n as ShieldCheck, o as createLucideIcon, t as Button } from "./button-C1X1bU2g.mjs";
import { a as useAuth, n as Link, o as useNavigate } from "./context-DsbXeIon.mjs";
import { t as CalendarCheck } from "./calendar-check-DuTmVx5a.mjs";
import { t as LogOut } from "./x-DcgK__gH.mjs";
import { a as SiteLayout } from "./site-layout-3ro_qnq8.mjs";
import { t as CircleCheck } from "./circle-check-DGje9aGf.mjs";
import { t as Settings } from "./settings-LdF4sC8P.mjs";
import { t as Input } from "./dist-BG8VwwRv.mjs";
import { t as Label } from "./label-BzZpg6Ws.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Star } from "./star-C_nxsulQ.mjs";
import { i as equipment, l as getOwnerMessages, t as addReplyToMessage, u as inr } from "./equipment-data-BKbMCaY5.mjs";
import { t as MapPin } from "./map-pin-BxVRd4HV.mjs";
import { n as Send, t as MessageSquare } from "./send-CWdpnj5-.mjs";
import { r as Heart, t as EquipmentCard } from "./equipment-card-0mwWR5tK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-BnPrOzFU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Download = createLucideIcon("download", [
	["path", {
		d: "M12 15V3",
		key: "m9g1x1"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["path", {
		d: "m7 10 5 5 5-5",
		key: "brsn70"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FileText = createLucideIcon("file-text", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M10 9H8",
		key: "b1mrlr"
	}],
	["path", {
		d: "M16 13H8",
		key: "t4e002"
	}],
	["path", {
		d: "M16 17H8",
		key: "z1uh3a"
	}]
]);
var mockFarmerBookings = [
	{
		id: "AR-984201",
		equipmentId: "combine-harvester-xl",
		name: "Combine Harvester XL",
		image: equipment[1].image,
		owner: "Meera Patel",
		phone: "+91 98765 43210",
		location: "Anand, Gujarat",
		dates: "Oct 24 – Oct 27, 2026",
		days: 3,
		dailyRate: 7800,
		total: 23400,
		status: "active",
		paymentStatus: "Paid in Full (UPI)",
		bookedOn: "Oct 22, 2026"
	},
	{
		id: "AR-983190",
		equipmentId: "compact-utility-tractor",
		name: "Compact Utility Tractor 45HP",
		image: equipment[0].image,
		owner: "Harpreet Singh",
		phone: "+91 98123 55678",
		location: "Ludhiana, Punjab",
		dates: "Oct 10 – Oct 13, 2026",
		days: 3,
		dailyRate: 2400,
		total: 7200,
		status: "completed",
		paymentStatus: "Paid in Full (Card)",
		bookedOn: "Oct 08, 2026"
	},
	{
		id: "AR-981044",
		equipmentId: "heavy-duty-rotavator",
		name: "Heavy Duty Rotavator",
		image: equipment[2].image,
		owner: "Kisan Agro Hub",
		phone: "+91 98990 11223",
		location: "Nashik, Maharashtra",
		dates: "Sep 28 – Sep 30, 2026",
		days: 2,
		dailyRate: 950,
		total: 1900,
		status: "completed",
		paymentStatus: "Paid in Full (NetBanking)",
		bookedOn: "Sep 25, 2026"
	},
	{
		id: "AR-978802",
		equipmentId: "boom-crop-sprayer",
		name: "Boom Crop Sprayer 800L",
		image: equipment[4].image,
		owner: "Green Fields Co-op",
		phone: "+91 97700 88990",
		location: "Indore, Madhya Pradesh",
		dates: "Sep 15 – Sep 17, 2026",
		days: 2,
		dailyRate: 1750,
		total: 3500,
		status: "completed",
		paymentStatus: "Paid in Full (UPI)",
		bookedOn: "Sep 12, 2026"
	}
];
function Profile() {
	const { user, logout } = useAuth();
	const navigate = useNavigate();
	const [expanded, setExpanded] = (0, import_react.useState)(false);
	const [activeTab, setActiveTab] = (0, import_react.useState)("history");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [selectedInvoice, setSelectedInvoice] = (0, import_react.useState)(null);
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [activeMessageId, setActiveMessageId] = (0, import_react.useState)(null);
	const [farmerReplyText, setFarmerReplyText] = (0, import_react.useState)("");
	const userName = user?.name || "Rajesh Kumar";
	const userEmail = user?.email || "farmer@agrirent.in";
	const userRole = user?.role ? user.role.toUpperCase() : "FARMER";
	(0, import_react.useEffect)(() => {
		const sync = () => {
			const allMsgs = getOwnerMessages();
			setMessages(allMsgs);
			if (allMsgs.length > 0) setActiveMessageId((prev) => prev || allMsgs[0].id);
		};
		sync();
		window.addEventListener("agrirent_messages_updated", sync);
		window.addEventListener("storage", sync);
		return () => {
			window.removeEventListener("agrirent_messages_updated", sync);
			window.removeEventListener("storage", sync);
		};
	}, []);
	const handleSendFarmerReply = (e) => {
		e.preventDefault();
		if (!activeMessageId || !farmerReplyText.trim()) return;
		addReplyToMessage(activeMessageId, farmerReplyText.trim(), userName);
		toast.success("Reply sent to equipment owner!");
		setFarmerReplyText("");
	};
	const handleLogout = async () => {
		await logout();
		toast.success("Logged out successfully.");
		navigate({ to: "/" });
	};
	const filteredBookings = mockFarmerBookings.filter((b) => {
		if (statusFilter === "all") return true;
		return b.status === statusFilter;
	});
	const totalSpent = mockFarmerBookings.reduce((sum, b) => sum + b.total, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "gradient-hero border-b border-border/80 pt-8 pb-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-center justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								initial: {
									scale: .8,
									opacity: 0
								},
								animate: {
									scale: 1,
									opacity: 1
								},
								whileHover: { scale: 1.05 },
								transition: {
									duration: .6,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								className: "gradient-primary grid h-20 w-20 shrink-0 place-items-center rounded-3xl text-2xl font-extrabold text-primary-foreground shadow-glow",
								children: userName.charAt(0)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "text-2xl font-extrabold sm:text-3xl font-display text-foreground",
										children: userName
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 border border-emerald-500/25",
										children: userRole
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 flex items-center gap-2 text-xs text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-primary" }),
										" Ludhiana, Punjab",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-amber-400 text-amber-400" }),
										" 4.9 Renter Score",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-emerald-600" }),
										" Verified Farmer"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: userEmail
								})
							] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "hero",
								size: "sm",
								onClick: () => setExpanded((e) => !e),
								className: "rounded-xl font-bold cursor-pointer h-10 px-4 shadow-glow",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "h-4 w-4 mr-1.5" }),
									" ",
									expanded ? "Close Editor" : "Edit Profile"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								onClick: handleLogout,
								className: "rounded-xl font-bold cursor-pointer h-10 px-4 text-destructive hover:bg-destructive/10 border-destructive/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4 mr-1.5" }), " Log Out"]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: false,
						animate: {
							height: expanded ? "auto" : 0,
							opacity: expanded ? 1 : 0
						},
						transition: {
							duration: .4,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								setExpanded(false);
								toast.success("Profile updated successfully.");
							},
							className: "surface-card mt-6 grid gap-4 p-6 rounded-3xl border border-border/80 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold",
									children: "Full Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									defaultValue: userName,
									className: "mt-1.5 h-10 text-xs rounded-xl"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold",
									children: "Email Address"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									defaultValue: userEmail,
									className: "mt-1.5 h-10 text-xs rounded-xl"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold",
									children: "District / State"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									defaultValue: "Ludhiana, Punjab",
									className: "mt-1.5 h-10 text-xs rounded-xl"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "sm:col-span-3 flex justify-end",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										variant: "hero",
										size: "sm",
										className: "rounded-xl font-bold",
										children: "Save Changes"
									})
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4",
						children: [
							{
								label: "Total Bookings",
								value: mockFarmerBookings.length,
								icon: CalendarCheck
							},
							{
								label: "Active Rentals",
								value: mockFarmerBookings.filter((b) => b.status === "active").length,
								icon: Tractor
							},
							{
								label: "Total Investment",
								value: inr(totalSpent),
								icon: ShieldCheck
							},
							{
								label: "Saved vs Purchasing",
								value: "₹4.8 Lakhs",
								icon: Star
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card p-4 rounded-2xl border border-border/70 shadow-sm flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base font-extrabold font-display text-foreground",
								children: s.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-muted-foreground font-medium",
								children: s.label
							})] })]
						}, s.label))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-5 py-12 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-4 mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveTab("history"),
							className: `flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${activeTab === "history" ? "border-primary bg-primary text-primary-foreground shadow-glow" : "border-border/80 bg-card/80 text-foreground hover:bg-accent"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, { className: "h-4 w-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rental Booking History" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] font-mono opacity-80",
									children: [
										"(",
										mockFarmerBookings.length,
										")"
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveTab("messages"),
							className: `flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${activeTab === "messages" ? "border-primary bg-primary text-primary-foreground shadow-glow" : "border-border/80 bg-card/80 text-foreground hover:bg-accent"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-4 w-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Messages & Inquiries" }),
								messages.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500 text-white font-extrabold shadow-sm",
									children: messages.length
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveTab("saved"),
							className: `flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${activeTab === "saved" ? "border-primary bg-primary text-primary-foreground shadow-glow" : "border-border/80 bg-card/80 text-foreground hover:bg-accent"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Saved Equipment" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-mono opacity-80",
									children: "(3)"
								})
							]
						})
					]
				}), activeTab === "history" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-1.5 rounded-xl bg-muted/60 p-1 border border-border/60",
					children: [
						{
							id: "all",
							label: "All Orders"
						},
						{
							id: "active",
							label: "Active"
						},
						{
							id: "completed",
							label: "Completed"
						}
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setStatusFilter(f.id),
						className: `px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${statusFilter === f.id ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
						children: f.label
					}, f.id))
				})]
			}), activeTab === "history" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4 max-w-5xl",
				children: filteredBookings.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card p-12 text-center rounded-3xl border border-border/80 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, { className: "h-10 w-10 text-muted-foreground mx-auto" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-bold",
							children: "No bookings found for this filter"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "hero",
							size: "sm",
							onClick: () => setStatusFilter("all"),
							className: "rounded-xl font-bold cursor-pointer",
							children: "View All Orders"
						})
					]
				}) : filteredBookings.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .5,
						delay: i * .08
					},
					className: "surface-card rounded-3xl border border-border/80 p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-soft hover:shadow-float transition-all",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start sm:items-center gap-5 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: b.image,
							alt: b.name,
							className: "h-20 w-24 rounded-2xl object-cover shrink-0 shadow-sm"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2 mb-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: `px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase border flex items-center gap-1 ${b.status === "active" ? "bg-emerald-500/15 text-emerald-600 border-emerald-500/25" : "bg-blue-500/15 text-blue-600 border-blue-500/25"}`,
											children: [b.status === "active" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3" }), b.status === "active" ? "Active Rental" : "Completed"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs font-mono text-muted-foreground font-semibold",
											children: ["Order #", b.id]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[11px] text-muted-foreground",
											children: ["· Booked on ", b.bookedOn]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display font-bold text-base text-foreground truncate",
									children: b.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: [
										"Owner: ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: b.owner
										}),
										" (",
										b.phone,
										") · Location: ",
										b.location
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-semibold text-primary mt-1",
									children: [
										"🗓️ ",
										b.dates,
										" (",
										b.days,
										" Days)"
									]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between lg:justify-end gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-border/60 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-left lg:text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xl font-extrabold text-primary font-display",
								children: inr(b.total)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-muted-foreground font-medium",
								children: b.paymentStatus
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => setSelectedInvoice(b),
								className: "rounded-xl text-xs font-bold gap-1 cursor-pointer h-9 px-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5" }), " Receipt"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								variant: "hero",
								className: "rounded-xl text-xs font-bold gap-1 cursor-pointer h-9 px-4 shadow-glow",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/equipment/$id",
									params: { id: b.equipmentId },
									children: "Rent Again"
								})
							})]
						})]
					})]
				}, b.id))
			}) : activeTab === "messages" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "surface-card rounded-3xl border border-border/80 p-6 min-h-[460px] flex flex-col md:flex-row gap-6 shadow-soft",
				children: messages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full flex flex-col items-center justify-center p-12 text-center space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-12 w-12 text-muted-foreground/50 mx-auto" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-bold font-display",
							children: "No Message Inquiries Yet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground max-w-sm",
							children: "When you send inquiries to equipment owners from the machinery detail pages, owner responses will appear here!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "hero",
							size: "sm",
							className: "rounded-xl font-bold mt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/equipment",
								children: "Browse Equipment & Message Owners"
							})
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full md:w-80 shrink-0 space-y-3 border-r border-border/60 pr-0 md:pr-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-xs font-extrabold uppercase tracking-wider text-muted-foreground mb-3",
						children: [
							"Your Conversations (",
							messages.length,
							")"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: messages.map((m) => {
							const active = m.id === activeMessageId;
							const hasReplies = (m.replies?.length ?? 0) > 0;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActiveMessageId(m.id),
								className: `w-full p-3.5 rounded-2xl text-left transition-all cursor-pointer border ${active ? "border-primary bg-primary/10 shadow-sm" : "border-border/60 bg-card hover:bg-muted/40"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2 mb-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-extrabold font-display truncate text-foreground",
											children: m.equipmentName
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-muted-foreground shrink-0",
											children: m.time
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground truncate",
										children: ["Owner: ", m.ownerName]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `text-[9px] font-bold uppercase px-2 py-0.5 rounded-full border ${hasReplies ? "bg-emerald-500/15 text-emerald-600 border-emerald-500/30" : "bg-amber-500/15 text-amber-600 border-amber-500/30"}`,
											children: hasReplies ? "✓ Owner Replied" : "⏳ Awaiting Owner"
										}), hasReplies && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[10px] font-bold text-primary",
											children: [m.replies.length, " replies"]
										})]
									})
								]
							}, m.id);
						})
					})]
				}), (() => {
					const activeMsg = messages.find((m) => m.id === activeMessageId) || messages[0];
					if (!activeMsg) return null;
					const allReplies = activeMsg.replies || [];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 flex flex-col justify-between min-h-[380px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pb-4 border-b border-border/60 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-extrabold uppercase tracking-wider text-primary",
										children: "Owner Conversation"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-extrabold font-display text-foreground",
										children: activeMsg.equipmentName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground",
										children: ["Owner: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-foreground",
											children: activeMsg.ownerName
										})]
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "sm",
									variant: "outline",
									className: "rounded-xl text-xs font-bold h-8 px-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/equipment/$id",
										params: { id: activeMsg.equipmentId },
										children: "View Machinery"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 py-4 space-y-3.5 overflow-y-auto max-h-[320px] pr-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-col items-end",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "max-w-md bg-primary text-primary-foreground p-3.5 rounded-2xl rounded-tr-xs text-xs shadow-sm space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[10px] font-bold opacity-80",
											children: [
												"You (",
												userName,
												") · ",
												activeMsg.time
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium leading-relaxed",
											children: activeMsg.message
										})]
									})
								}), allReplies.map((r, idx) => {
									const isMe = r.sender === userName;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `flex flex-col ${isMe ? "items-end" : "items-start"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: `max-w-md p-3.5 rounded-2xl text-xs shadow-sm space-y-1 ${isMe ? "bg-primary text-primary-foreground rounded-tr-xs" : "bg-muted border border-border/80 text-foreground rounded-tl-xs"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: `text-[10px] font-bold ${isMe ? "opacity-80" : "text-primary"}`,
												children: [
													r.sender,
													" · ",
													r.time
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-medium leading-relaxed",
												children: r.text
											})]
										})
									}, idx);
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSendFarmerReply,
								className: "pt-3 border-t border-border/60 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: farmerReplyText,
									onChange: (e) => setFarmerReplyText(e.target.value),
									placeholder: `Reply to ${activeMsg.ownerName}...`,
									className: "h-10 text-xs rounded-xl flex-1"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "submit",
									variant: "hero",
									size: "sm",
									className: "rounded-xl font-bold h-10 px-4 cursor-pointer gap-1.5 shadow-glow",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3.5 w-3.5" }), " Reply"]
								})]
							})
						]
					});
				})()] })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: equipment.slice(2, 5).map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EquipmentCard, {
					item: e,
					index: i
				}, e.id))
			})]
		}),
		selectedInvoice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-50 flex items-center justify-center p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				onClick: () => setSelectedInvoice(null),
				className: "absolute inset-0 bg-black/50 backdrop-blur-sm"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					scale: .95
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				className: "relative w-full max-w-md rounded-3xl border border-border/80 bg-card shadow-float overflow-hidden p-6 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border/60 pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-bold uppercase tracking-widest text-primary",
							children: "AgriRent Official Invoice"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold font-display text-foreground",
							children: selectedInvoice.id
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSelectedInvoice(null),
							className: "grid h-8 w-8 place-items-center rounded-xl bg-muted text-muted-foreground hover:text-foreground",
							children: "✕"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between py-1 border-b border-border/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Renter Name:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-foreground",
									children: userName
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between py-1 border-b border-border/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Machine:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-foreground",
									children: selectedInvoice.name
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between py-1 border-b border-border/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Owner:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-foreground",
									children: selectedInvoice.owner
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between py-1 border-b border-border/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Rental Duration:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-bold text-foreground",
									children: [
										selectedInvoice.days,
										" Days (",
										selectedInvoice.dates,
										")"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between py-1 border-b border-border/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Daily Rate:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-bold text-foreground",
									children: [inr(selectedInvoice.dailyRate), " / day"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between py-1 border-b border-border/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Payment Method:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-emerald-600",
									children: selectedInvoice.paymentStatus
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between pt-2 text-sm font-extrabold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total Amount Paid:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: inr(selectedInvoice.total)
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => {
							toast.success("Invoice downloaded as PDF.");
							setSelectedInvoice(null);
						},
						variant: "hero",
						className: "w-full rounded-xl font-bold gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download Official PDF"]
					})
				]
			})]
		})
	] });
}
//#endregion
export { Profile as component };
