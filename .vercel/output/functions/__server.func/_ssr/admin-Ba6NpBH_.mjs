import { C as __toESM } from "./createServerFn-BH-xKMvN.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/framer-motion.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as cn, i as Tractor, n as ShieldCheck, o as createLucideIcon, t as Button } from "./button-C1X1bU2g.mjs";
import { a as useAuth, n as Link } from "./context-DsbXeIon.mjs";
import { n as Navbar, t as Footer } from "./footer-C5GqLapV.mjs";
import { n as LayoutDashboard, t as ChartColumn } from "./layout-dashboard-nQ89xW8h.mjs";
import { t as CircleCheck } from "./circle-check-DGje9aGf.mjs";
import { t as Settings } from "./settings-LdF4sC8P.mjs";
import { t as Input } from "./dist-BG8VwwRv.mjs";
import { t as Label } from "./label-BzZpg6Ws.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-Ba6NpBH_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var DollarSign = createLucideIcon("dollar-sign", [["line", {
	x1: "12",
	x2: "12",
	y1: "2",
	y2: "22",
	key: "7eqyqh"
}], ["path", {
	d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
	key: "1b0p4s"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var KeyRound = createLucideIcon("key-round", [["path", {
	d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
	key: "1s6t7t"
}], ["circle", {
	cx: "16.5",
	cy: "7.5",
	r: ".5",
	fill: "currentColor",
	key: "w0ekpg"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var TriangleAlert = createLucideIcon("triangle-alert", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
		key: "wmoenq"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Users = createLucideIcon("users", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["path", {
		d: "M16 3.128a4 4 0 0 1 0 7.744",
		key: "16gr8j"
	}],
	["path", {
		d: "M22 21v-2a4 4 0 0 0-3-3.87",
		key: "kshegd"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}]
]);
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function AdminDashboard() {
	const { user, loading } = useAuth();
	const [activeTab, setActiveTab] = (0, import_react.useState)("Overview");
	const [usersList, setUsersList] = (0, import_react.useState)([
		{
			id: "u1",
			name: "Anil Parhi (Admin)",
			email: "admin@agrirent.in",
			role: "admin",
			status: "Active (Current)"
		},
		{
			id: "u2",
			name: "Harpreet Singh (Owner)",
			email: "owner@agrirent.in",
			role: "owner",
			status: "Active"
		},
		{
			id: "u3",
			name: "Rajesh Kumar (Farmer)",
			email: "farmer@agrirent.in",
			role: "farmer",
			status: "Active"
		},
		{
			id: "u4",
			name: "Sunita Patel",
			email: "sunita@agri.org",
			role: "owner",
			status: "Active"
		},
		{
			id: "u5",
			name: "Vikas Sharma",
			email: "vikas@farm.in",
			role: "farmer",
			status: "Active"
		}
	]);
	const [pendingListings, setPendingListings] = (0, import_react.useState)([{
		id: "p1",
		name: "Mahindra Yuvo Tech+ 575 4WD",
		owner: "Harpreet Singh",
		price: 3200,
		status: "Pending Inspection"
	}, {
		id: "p2",
		name: "Swaraj 855 FE Tractor",
		owner: "Sunita Patel",
		price: 2900,
		status: "Pending Inspection"
	}]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium text-muted-foreground animate-pulse",
			children: "Loading Admin Portal..."
		})
	});
	if (!user || user.role !== "admin") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "gradient-hero min-h-screen flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-1 items-center justify-center px-4 py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass max-w-md w-full rounded-3xl p-8 text-center shadow-float",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-destructive/15 text-destructive",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-6 w-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 text-xl font-extrabold",
						children: "Access Denied"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: [
							"You need ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground",
								children: "Admin RBAC privileges"
							}),
							" to access this dashboard."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "hero",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/auth",
								children: "Sign in as Admin"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								children: "Back to Home"
							})
						})]
					})
				]
			})
		})]
	});
	const handleRoleChange = (id, newRole) => {
		setUsersList((prev) => prev.map((u) => u.id === id ? {
			...u,
			role: newRole
		} : u));
		toast.success(`User role updated to ${newRole.toUpperCase()}.`);
	};
	const handleApproveListing = (id) => {
		setPendingListings((prev) => prev.filter((p) => p.id !== id));
		toast.success("Machinery listing approved and published to marketplace!");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "gradient-hero min-h-screen flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-7xl px-5 pt-28 pb-16 sm:px-8 flex-1 w-full space-y-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-border pb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									className: "bg-amber-500/15 text-amber-600 border-amber-500/30 gap-1 font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5" }), "RBAC Level: ADMIN"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: "System Governance"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-2 text-3xl font-extrabold tracking-tight",
								children: "System Admin Console"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Manage platform users, verify equipment listings, and inspect RBAC role assignments."
							})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-center gap-2 border-b border-border/60 pb-3",
						children: [
							{
								id: "Overview",
								icon: LayoutDashboard
							},
							{
								id: "Users",
								icon: Users
							},
							{
								id: "Listings",
								icon: Tractor
							},
							{
								id: "Financials",
								icon: DollarSign
							},
							{
								id: "Settings",
								icon: Settings
							}
						].map((t) => {
							const IconComp = t.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActiveTab(t.id),
								className: cn("flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer", activeTab === t.id ? "bg-primary text-primary-foreground shadow-glow" : "bg-card/60 text-muted-foreground hover:bg-accent"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComp, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.id })]
							}, t.id);
						})
					}),
					activeTab === "Overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
							children: [
								{
									label: "Registered Users",
									val: usersList.length.toString(),
									sub: "Farmers, Owners, Admins",
									icon: Users
								},
								{
									label: "Active Listings",
									val: "486",
									sub: "Verified Machinery",
									icon: Tractor
								},
								{
									label: "System Roles",
									val: "3 Active",
									sub: "Farmer, Owner, Admin",
									icon: KeyRound
								},
								{
									label: "Platform Commission",
									val: "5%",
									sub: "Net Platform Margin",
									icon: ChartColumn
								}
							].map((s) => {
								const Icon = s.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "glass rounded-3xl p-5 shadow-soft border border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-semibold text-muted-foreground uppercase",
												children: s.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-primary" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-2xl font-extrabold",
											children: s.val
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: s.sub
										})
									]
								}, s.label);
							})
						})
					}),
					(activeTab === "Overview" || activeTab === "Users") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-3xl p-6 shadow-soft border border-border space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-bold",
								children: "RBAC Role Audit & User Management"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Manage user accounts and change role permissions."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "outline",
								className: "gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-500" }), " Active Session Sync"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-x-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full text-left text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-border text-muted-foreground uppercase font-bold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-3 px-4",
											children: "User"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-3 px-4",
											children: "Email"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-3 px-4",
											children: "Assigned Role (RBAC)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-3 px-4",
											children: "Change Role"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-3 px-4",
											children: "Status"
										})
									]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
									className: "divide-y divide-border/60",
									children: usersList.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "hover:bg-accent/40 transition-colors",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 px-4 font-bold",
												children: u.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 px-4 text-muted-foreground",
												children: u.email
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 px-4",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: cn("inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase", u.role === "admin" ? "bg-amber-500/15 text-amber-600" : u.role === "owner" ? "bg-emerald-500/15 text-emerald-600" : "bg-blue-500/15 text-blue-600"),
													children: u.role
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 px-4",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-center gap-1",
													children: [
														"farmer",
														"owner",
														"admin"
													].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => handleRoleChange(u.id, r),
														className: cn("px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase cursor-pointer transition-colors", u.role === r ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"),
														children: r
													}, r))
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 px-4 text-xs font-semibold text-emerald-600",
												children: u.status
											})
										]
									}, u.id))
								})]
							})
						})]
					}),
					activeTab === "Listings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-3xl p-6 shadow-soft border border-border space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-bold",
								children: "Pending Machinery Verification"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Approve new owner listings before they appear on the public marketplace."
							}),
							pendingListings.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground py-6 text-center",
								children: "No pending machinery verification requests."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: pendingListings.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "surface-card rounded-2xl p-4 border border-border/80 flex items-center justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-bold text-sm",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground",
										children: [
											"Owner: ",
											p.owner,
											" · ₹",
											p.price,
											"/day"
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "hero",
										onClick: () => handleApproveListing(p.id),
										className: "gap-1 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" }), " Approve Listing"]
									})]
								}, p.id))
							})
						]
					}),
					activeTab === "Financials" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-3xl p-6 shadow-soft border border-border space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-bold",
								children: "Platform Financial Governance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Commission split logs and transactional audits."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "surface-card p-5 rounded-2xl border border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Total Platform Volume"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-2xl font-extrabold text-primary mt-1",
										children: "₹72,40,000"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "surface-card p-5 rounded-2xl border border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Net Platform Revenue (5%)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-2xl font-extrabold text-emerald-600 mt-1",
										children: "₹3,62,000"
									})]
								})]
							})
						]
					}),
					activeTab === "Settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-3xl p-6 shadow-soft border border-border space-y-4 max-w-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-bold",
							children: "System Configuration"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs",
									children: "Platform Commission Rate (%)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									defaultValue: "5",
									className: "mt-1 h-9 text-xs rounded-xl"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs",
									children: "MongoDB Atlas Cluster URI"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									defaultValue: "agrirent.vwhemnq.mongodb.net",
									disabled: true,
									className: "mt-1 h-9 text-xs rounded-xl opacity-70"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "hero",
									onClick: () => toast.success("System configurations saved."),
									children: "Save Platform Settings"
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { AdminDashboard as component };
