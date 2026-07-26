import { C as __toESM } from "./createServerFn-BH-xKMvN.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/framer-motion.mjs";
import { a as cn, c as motion, i as Tractor, l as react_exports, n as ShieldCheck, o as createLucideIcon, r as Sprout, t as Button } from "./button-C1X1bU2g.mjs";
import { a as useAuth, i as registerServerFn, n as Link, o as useNavigate, r as loginServerFn } from "./context-DsbXeIon.mjs";
import { t as User } from "./user-ClfHIXH9.mjs";
import { t as CircleCheck } from "./circle-check-DGje9aGf.mjs";
import { t as Input } from "./dist-BG8VwwRv.mjs";
import { t as Label } from "./label-BzZpg6Ws.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Route } from "./auth-De6aGf8v.mjs";
import { t as ArrowLeft } from "./arrow-left-BqR_SGpP.mjs";
import { t as Mail } from "./mail-4khZ_a06.mjs";
import { t as Star } from "./star-C_nxsulQ.mjs";
import { t as TrendingUp } from "./trending-up-BxSsjIbe.mjs";
import { t as Wheat } from "./wheat-BCw1x77I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-Ckyomk3t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var EyeOff = createLucideIcon("eye-off", [
	["path", {
		d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
		key: "ct8e1f"
	}],
	["path", {
		d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
		key: "151rxh"
	}],
	["path", {
		d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
		key: "13bj9a"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Eye = createLucideIcon("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Lock = createLucideIcon("lock", [["rect", {
	width: "18",
	height: "11",
	x: "3",
	y: "11",
	rx: "2",
	ry: "2",
	key: "1w4ew1"
}], ["path", {
	d: "M7 11V7a5 5 0 0 1 10 0v4",
	key: "fwvmzm"
}]]);
var REGISTERED_USERS_KEY = "agrirent_registered_users_v1";
function getRegisteredLocalUsers() {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(REGISTERED_USERS_KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}
function saveRegisteredLocalUser(acc) {
	if (typeof window === "undefined") return;
	try {
		const updated = [...getRegisteredLocalUsers().filter((u) => u.email.toLowerCase() !== acc.email.toLowerCase()), acc];
		localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(updated));
	} catch (e) {
		console.error("Error saving local registered user:", e);
	}
}
function Auth() {
	const search = Route.useSearch();
	const navigate = useNavigate();
	const { setUser, refreshUser } = useAuth();
	const [mode, setMode] = (0, import_react.useState)(search.mode ?? "login");
	const [role, setRole] = (0, import_react.useState)("farmer");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [shake, setShake] = (0, import_react.useState)(false);
	const [emailExists, setEmailExists] = (0, import_react.useState)(false);
	const [emailError, setEmailError] = (0, import_react.useState)("");
	const [passwordError, setPasswordError] = (0, import_react.useState)("");
	const resetErrors = () => {
		setEmailExists(false);
		setEmailError("");
		setPasswordError("");
	};
	const submit = async (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const email = String(form.get("email") ?? "").trim().toLowerCase();
		const password = String(form.get("password") ?? "");
		const name = String(form.get("name") ?? "").trim();
		resetErrors();
		if (!email.includes("@") || mode !== "forgot" && !password) {
			setShake(true);
			setTimeout(() => setShake(false), 500);
			toast.error("Please fill in all required fields accurately.");
			return;
		}
		try {
			setLoading(true);
			if (mode === "login") {
				const localMatch = getRegisteredLocalUsers().find((u) => u.email.toLowerCase() === email);
				if (localMatch) {
					if (localMatch.password !== password) {
						setPasswordError("password");
						toast.error("Incorrect password", { description: "The password you entered is wrong. Please try again." });
						setLoading(false);
						return;
					}
					const userPayload = {
						userId: localMatch.userId,
						name: localMatch.name,
						email: localMatch.email,
						role: localMatch.role
					};
					setUser(userPayload);
					toast.success(`Welcome back, ${userPayload.name}!`);
					if (userPayload.role === "admin") navigate({ to: "/admin" });
					else if (userPayload.role === "owner") navigate({ to: "/dashboard" });
					else navigate({ to: "/" });
					setLoading(false);
					return;
				}
				const res = await loginServerFn({ data: {
					email,
					password
				} });
				if (res.success && res.user) {
					setUser(res.user);
					await refreshUser();
					toast.success(`Welcome back, ${res.user.name}!`);
					if (res.user.role === "admin") navigate({ to: "/admin" });
					else if (res.user.role === "owner") navigate({ to: "/dashboard" });
					else navigate({ to: "/" });
				}
			} else if (mode === "register") {
				if (!name) {
					toast.error("Please enter your full name.");
					setLoading(false);
					return;
				}
				const res = await registerServerFn({ data: {
					name,
					email,
					password,
					role
				} });
				if (res.success && res.user) {
					saveRegisteredLocalUser({
						name: res.user.name,
						email: res.user.email.toLowerCase(),
						password,
						role: res.user.role,
						userId: res.user.userId
					});
					setUser(res.user);
					await refreshUser();
					toast.success("Account created! Welcome to AgriRent.");
					if (role === "owner") navigate({ to: "/dashboard" });
					else navigate({ to: "/" });
				}
			} else toast.success("Password reset email sent (if account exists).");
		} catch (err) {
			setShake(true);
			setTimeout(() => setShake(false), 500);
			const msg = err instanceof Error ? err.message : "Authentication failed.";
			const isDuplicate = [
				"already exists",
				"already registered",
				"try a different email",
				"duplicate"
			].some((k) => msg.toLowerCase().includes(k));
			const isEmailNotFound = msg.includes("__EMAIL_NOT_FOUND__");
			const isWrongPassword = msg.includes("__WRONG_PASSWORD__");
			if (isDuplicate && mode === "register") {
				setEmailExists(true);
				toast.error("Email already registered", { description: "An account with this email already exists. Try signing in instead." });
			} else if (isEmailNotFound && mode === "login") {
				setEmailError("email");
				toast.error("Account not found", { description: "No account found with this email address. Check the email or create a new account." });
			} else if (isWrongPassword && mode === "login") {
				setPasswordError("password");
				toast.error("Incorrect password", { description: "The password you entered is wrong. Please try again or reset your password." });
			} else if (!isEmailNotFound && !isWrongPassword) toast.error("Authentication failed", { description: msg.startsWith("__") ? "Something went wrong. Please try again." : msg });
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-screen w-full overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
			initial: {
				opacity: 0,
				x: -24
			},
			animate: {
				opacity: 1,
				x: 0
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
			className: "relative hidden lg:flex w-[48%] h-full flex-col justify-between overflow-hidden shrink-0 gradient-primary",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full opacity-20",
					style: { background: "radial-gradient(circle, oklch(0.65 0.16 150) 0%, transparent 70%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full opacity-15",
					style: { background: "radial-gradient(circle, oklch(0.75 0.14 80) 0%, transparent 70%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 px-8 pt-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex items-center gap-2.5 group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 place-items-center rounded-xl bg-white/10 border border-white/20 text-white shadow-sm transition-all group-hover:bg-white/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, { className: "h-4.5 w-4.5 text-emerald-400" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-xl font-extrabold tracking-tight text-white",
							children: ["Agri", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-emerald-400",
								children: "Rent"
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex-1 flex flex-col justify-center px-8 py-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3.5 py-1 w-fit shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wheat, { className: "h-3.5 w-3.5 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold text-emerald-300",
								children: "India's #1 AgriTech Platform"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-3xl xl:text-4xl font-extrabold text-white leading-[1.15] tracking-tight",
							children: [
								"Farm smarter.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-emerald-400",
									children: "Earn more."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3.5 text-sm text-white/70 font-medium leading-relaxed max-w-xs",
							children: "Rent verified tractors & harvesters, or list your machinery to generate income between seasons."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 space-y-3.5",
							children: [
								{
									icon: ShieldCheck,
									text: "Verified machinery with service logs"
								},
								{
									icon: CircleCheck,
									text: "100% insured bookings, zero hidden fees"
								},
								{
									icon: TrendingUp,
									text: "Real-time availability & transparent pricing"
								}
							].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-7 w-7 shrink-0 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-500/15 text-emerald-400",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-white/90",
									children: f.text
								})]
							}, f.text))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid grid-cols-3 gap-3",
							children: [
								{
									value: "12K+",
									label: "Machines"
								},
								{
									value: "₹4.2Cr",
									label: "Saved"
								},
								{
									value: "98%",
									label: "Success"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-3 text-center shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl font-extrabold text-white",
									children: s.value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-medium text-white/60 mt-0.5",
									children: s.label
								})]
							}, s.label))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 mx-8 mb-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-0.5 mb-2",
							children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-amber-400 text-amber-400" }, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium italic text-white/80 leading-relaxed",
							children: "\"AgriRent saved ₹45,000 in one harvest season — seamless & transparent!\""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-7 w-7 place-items-center rounded-full bg-emerald-500/20 border border-emerald-500/30 text-xs font-bold text-emerald-300",
								children: "G"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold text-white",
								children: "Gurpreet Singh"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-medium text-white/50",
								children: "Farmer · Amritsar, Punjab"
							})] })]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 h-full flex-col bg-background overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-8 py-5 shrink-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2 lg:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gradient-primary grid h-8 w-8 place-items-center rounded-lg text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-lg font-extrabold",
							children: ["Agri", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Rent"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden lg:block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), "Back to marketplace"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 flex items-center justify-center px-8 xl:px-16 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 18
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "w-full max-w-[460px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl xl:text-3xl font-extrabold tracking-tight text-foreground",
								children: mode === "login" ? "Welcome back 👋" : mode === "register" ? "Create your account" : "Reset your password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm text-muted-foreground",
								children: mode === "login" ? "Sign in to manage your bookings & machinery." : mode === "register" ? "Join AgriRent — it's free to get started." : "We'll send a password reset link to your email."
							})]
						}),
						mode !== "forgot" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-5 flex rounded-xl bg-muted/70 p-1 border border-border/50 gap-1",
							children: ["login", "register"].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								id: `auth-tab-${m}`,
								onClick: () => {
									setMode(m);
									resetErrors();
								},
								className: cn("relative flex-1 rounded-lg py-2 text-sm font-semibold transition-all cursor-pointer", mode === m ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"),
								children: [mode === m && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									layoutId: "auth-pill",
									className: "gradient-primary absolute inset-0 rounded-lg shadow-sm",
									transition: {
										type: "spring",
										stiffness: 420,
										damping: 34
									}
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative z-10",
									children: m === "login" ? "Sign In" : "Register"
								})]
							}, m))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(react_exports.AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
								id: "auth-form",
								onSubmit: submit,
								initial: {
									opacity: 0,
									y: 8
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -6
								},
								transition: { duration: .2 },
								className: cn("space-y-4", shake && "animate-[soft-pulse_0.45s]"),
								children: [
									mode === "register" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "name",
										className: "text-sm font-semibold mb-1.5 block",
										children: "Full Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "name",
											name: "name",
											placeholder: "e.g. Harpreet Singh",
											className: "pl-10 h-11 rounded-xl text-sm",
											required: true
										})]
									})] }),
									mode === "register" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-sm font-semibold mb-1.5 block",
										children: "I want to"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-3",
										children: [{
											id: "farmer",
											label: "Rent Equipment",
											sub: "as Farmer",
											icon: User
										}, {
											id: "owner",
											label: "List Machinery",
											sub: "as Owner",
											icon: Tractor
										}].map((item) => {
											const active = role === item.id;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												id: `role-${item.id}`,
												onClick: () => setRole(item.id),
												className: cn("flex items-center gap-3 rounded-xl border-2 p-3.5 text-left transition-all cursor-pointer", active ? "border-primary bg-primary/8 shadow-sm" : "border-border/60 bg-card hover:border-primary/40 hover:bg-muted/30"),
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: cn("grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-colors", active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"),
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex-1 min-w-0",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: cn("text-sm font-bold leading-none", active ? "text-primary" : "text-foreground"),
															children: item.label
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs text-muted-foreground mt-0.5",
															children: item.sub
														})]
													}),
													active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 shrink-0 text-primary" })
												]
											}, item.id);
										})
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "email",
										className: "text-sm font-semibold mb-1.5 block",
										children: "Email Address"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "email",
											name: "email",
											type: "email",
											placeholder: "you@example.com",
											className: cn("pl-10 h-11 rounded-xl text-sm transition-all", emailExists && mode === "register" && "border-destructive ring-2 ring-destructive/20", emailError && mode === "login" && "border-destructive ring-2 ring-destructive/20"),
											onChange: () => {
												setEmailExists(false);
												setEmailError("");
											},
											required: true
										})]
									})] }),
									mode !== "forgot" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "password",
											className: "text-sm font-semibold",
											children: "Password"
										}), mode === "login" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setMode("forgot"),
											className: "text-xs text-primary font-semibold hover:underline cursor-pointer",
											children: "Forgot password?"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "password",
												name: "password",
												type: showPassword ? "text" : "password",
												placeholder: "••••••••",
												className: cn("pl-10 pr-11 h-11 rounded-xl text-sm transition-all", passwordError && mode === "login" && "border-destructive ring-2 ring-destructive/20"),
												onChange: () => setPasswordError(""),
												required: true
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setShowPassword((s) => !s),
												className: "absolute right-3.5 top-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
												"aria-label": "Toggle password visibility",
												children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
											})
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										variant: "hero",
										id: "auth-submit",
										className: "w-full h-11 rounded-xl text-sm font-bold shadow-glow mt-1 cursor-pointer",
										disabled: loading,
										children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" }), "Processing..."]
										}) : mode === "login" ? "Sign In to AgriRent" : mode === "register" ? `Create ${role === "owner" ? "Owner" : "Farmer"} Account` : "Send Reset Link"
									}),
									mode === "forgot" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setMode("login"),
										className: "w-full text-center text-sm text-primary font-semibold hover:underline cursor-pointer",
										children: "← Back to Sign In"
									})
								]
							}, mode)
						}),
						mode !== "forgot" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-center text-sm text-muted-foreground",
							children: [mode === "login" ? "Don't have an account? " : "Already have an account? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setMode(mode === "login" ? "register" : "login");
									resetErrors();
								},
								className: "text-primary font-semibold hover:underline cursor-pointer",
								children: mode === "login" ? "Create one →" : "Sign in →"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-center text-[11px] text-muted-foreground/50",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" AgriRent · Verified Agricultural Equipment Sharing"
							]
						})
					]
				})
			})]
		})]
	});
}
//#endregion
export { Auth as component };
