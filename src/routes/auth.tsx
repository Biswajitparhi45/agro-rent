import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { z } from "zod";
import {
  Eye, EyeOff, Sprout, Tractor, User,
  CheckCircle2, Lock, Mail, ArrowLeft,
  Wheat, ShieldCheck, TrendingUp, Star,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { loginServerFn, registerServerFn } from "@/lib/auth/server";
import { useAuth } from "@/lib/auth/context";
import { UserRole } from "@/lib/db/models/user.model";

export const Route = createFileRoute("/auth")({
  validateSearch: z.object({ mode: z.enum(["login", "register", "forgot"]).optional() }),
  head: () => ({
    meta: [
      { title: "Sign in to AgriRent — Farm Equipment Rental" },
      { name: "description", content: "Log in or create an AgriRent account to book machinery or list your farm equipment." },
    ],
  }),
  component: Auth,
});

type Mode = "login" | "register" | "forgot";

function Auth() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const { setUser, refreshUser } = useAuth();

  const [mode, setMode] = useState<Mode>(search.mode ?? "login");
  const [role, setRole] = useState<UserRole>("farmer");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const resetErrors = () => { setEmailExists(false); setEmailError(""); setPasswordError(""); };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") ?? "").trim();
    const password = String(form.get("password") ?? "");
    const name = String(form.get("name") ?? "").trim();

    resetErrors();
    if (!email.includes("@") || (mode !== "forgot" && !password)) {
      setShake(true); setTimeout(() => setShake(false), 500);
      toast.error("Please fill in all required fields accurately.");
      return;
    }

    try {
      setLoading(true);
      if (mode === "login") {
        const res = await loginServerFn({ data: { email, password } });
        if (res.success && res.user) {
          setUser(res.user); await refreshUser();
          toast.success(`Welcome back, ${res.user.name}!`);
          if (res.user.role === "admin") navigate({ to: "/admin" });
          else if (res.user.role === "owner") navigate({ to: "/dashboard" });
          else navigate({ to: "/" });
        }
      } else if (mode === "register") {
        if (!name) { toast.error("Please enter your full name."); setLoading(false); return; }
        const res = await registerServerFn({ data: { name, email, password, role } });
        if (res.success && res.user) {
          setUser(res.user); await refreshUser();
          toast.success("Account created! Welcome to AgriRent.");
          if (role === "owner") navigate({ to: "/dashboard" }); else navigate({ to: "/" });
        }
      } else {
        toast.success("Password reset email sent (if account exists).");
      }
    } catch (err: unknown) {
      setShake(true); setTimeout(() => setShake(false), 500);
      const msg = err instanceof Error ? err.message : "Authentication failed.";
      const isDuplicate = ["already exists","already registered","try a different email","duplicate"].some(k => msg.toLowerCase().includes(k));
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
      } else if (!isEmailNotFound && !isWrongPassword) {
        toast.error("Authentication failed", { description: msg.startsWith("__") ? "Something went wrong. Please try again." : msg });
      }
    } finally { setLoading(false); }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">

      {/* ══ LEFT PANEL ══ */}
      <motion.aside
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative hidden lg:flex w-[48%] h-full flex-col justify-between overflow-hidden shrink-0 gradient-primary"
      >
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, oklch(0.65 0.16 150) 0%, transparent 70%)" }} />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, oklch(0.75 0.14 80) 0%, transparent 70%)" }} />

        {/* Logo */}
        <div className="relative z-10 px-8 pt-7">
          <Link to="/" className="inline-flex items-center gap-2.5 group">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 border border-white/20 text-white shadow-sm transition-all group-hover:bg-white/20">
              <Sprout className="h-4.5 w-4.5 text-emerald-400" />
            </span>
            <span className="font-display text-xl font-extrabold tracking-tight text-white">
              Agri<span className="text-emerald-400">Rent</span>
            </span>
          </Link>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 py-6">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3.5 py-1 w-fit shadow-sm">
            <Wheat className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-xs font-bold text-emerald-300">India's #1 AgriTech Platform</span>
          </div>

          <h1 className="font-display text-3xl xl:text-4xl font-extrabold text-white leading-[1.15] tracking-tight">
            Farm smarter.<br />
            <span className="text-emerald-400">Earn more.</span>
          </h1>

          <p className="mt-3.5 text-sm text-white/70 font-medium leading-relaxed max-w-xs">
            Rent verified tractors & harvesters, or list your machinery to generate income between seasons.
          </p>

          <div className="mt-6 space-y-3.5">
            {[
              { icon: ShieldCheck, text: "Verified machinery with service logs" },
              { icon: CheckCircle2, text: "100% insured bookings, zero hidden fees" },
              { icon: TrendingUp, text: "Real-time availability & transparent pricing" },
            ].map((f) => (
              <div key={f.text} className="flex items-center gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-500/15 text-emerald-400">
                  <f.icon className="h-4 w-4" />
                </span>
                <p className="text-sm font-medium text-white/90">{f.text}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { value: "12K+", label: "Machines" },
              { value: "₹4.2Cr", label: "Saved" },
              { value: "98%", label: "Success" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-3 text-center shadow-sm">
                <p className="font-display text-xl font-extrabold text-white">{s.value}</p>
                <p className="text-[11px] font-medium text-white/60 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="relative z-10 mx-8 mb-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 shadow-sm">
          <div className="flex gap-0.5 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-xs font-medium italic text-white/80 leading-relaxed">
            "AgriRent saved ₹45,000 in one harvest season — seamless & transparent!"
          </p>
          <div className="mt-3 flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-500/20 border border-emerald-500/30 text-xs font-bold text-emerald-300">G</span>
            <div>
              <p className="text-xs font-bold text-white">Gurpreet Singh</p>
              <p className="text-[10px] font-medium text-white/50">Farmer · Amritsar, Punjab</p>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* ══ RIGHT PANEL ══ */}
      <div className="flex flex-1 h-full flex-col bg-background overflow-hidden">

        {/* Top bar */}
        <div className="flex items-center justify-between px-8 py-5 shrink-0">
          <Link to="/" className="flex items-center gap-2 lg:hidden">
            <span className="gradient-primary grid h-8 w-8 place-items-center rounded-lg text-primary-foreground">
              <Sprout className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-extrabold">Agri<span className="text-primary">Rent</span></span>
          </Link>
          <div className="hidden lg:block" />
          <Link to="/" className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to marketplace
          </Link>
        </div>

        {/* Centered form */}
        <div className="flex-1 flex items-center justify-center px-8 xl:px-16 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[460px]"
          >
            {/* Title */}
            <div className="mb-6">
              <h2 className="font-display text-2xl xl:text-3xl font-extrabold tracking-tight text-foreground">
                {mode === "login" ? "Welcome back 👋" : mode === "register" ? "Create your account" : "Reset your password"}
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {mode === "login"
                  ? "Sign in to manage your bookings & machinery."
                  : mode === "register"
                    ? "Join AgriRent — it's free to get started."
                    : "We'll send a password reset link to your email."}
              </p>
            </div>

            {/* Tabs */}
            {mode !== "forgot" && (
              <div className="mb-5 flex rounded-xl bg-muted/70 p-1 border border-border/50 gap-1">
                {(["login", "register"] as const).map((m) => (
                  <button key={m} type="button" id={`auth-tab-${m}`}
                    onClick={() => { setMode(m); resetErrors(); }}
                    className={cn(
                      "relative flex-1 rounded-lg py-2 text-sm font-semibold transition-all cursor-pointer",
                      mode === m ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {mode === m && (
                      <motion.span layoutId="auth-pill"
                        className="gradient-primary absolute inset-0 rounded-lg shadow-sm"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                    <span className="relative z-10">{m === "login" ? "Sign In" : "Register"}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Form */}
            <AnimatePresence mode="wait">
              <motion.form key={mode} id="auth-form" onSubmit={submit}
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}
                className={cn("space-y-4", shake && "animate-[soft-pulse_0.45s]")}
              >
                {/* Full name */}
                {mode === "register" && (
                  <div>
                    <Label htmlFor="name" className="text-sm font-semibold mb-1.5 block">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="name" name="name" placeholder="e.g. Harpreet Singh"
                        className="pl-10 h-11 rounded-xl text-sm" required />
                    </div>
                  </div>
                )}

                {/* Role */}
                {mode === "register" && (
                  <div>
                    <Label className="text-sm font-semibold mb-1.5 block">I want to</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: "farmer", label: "Rent Equipment", sub: "as Farmer", icon: User },
                        { id: "owner", label: "List Machinery", sub: "as Owner", icon: Tractor },
                      ].map((item) => {
                        const active = role === item.id;
                        return (
                          <button type="button" key={item.id} id={`role-${item.id}`}
                            onClick={() => setRole(item.id as UserRole)}
                            className={cn(
                              "flex items-center gap-3 rounded-xl border-2 p-3.5 text-left transition-all cursor-pointer",
                              active ? "border-primary bg-primary/8 shadow-sm" : "border-border/60 bg-card hover:border-primary/40 hover:bg-muted/30",
                            )}
                          >
                            <span className={cn(
                              "grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-colors",
                              active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                            )}>
                              <item.icon className="h-4 w-4" />
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className={cn("text-sm font-bold leading-none", active ? "text-primary" : "text-foreground")}>{item.label}</p>
                              <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                            </div>
                            {active && <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold mb-1.5 block">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="email" name="email" type="email" placeholder="you@example.com"
                      className={cn(
                        "pl-10 h-11 rounded-xl text-sm transition-all",
                        emailExists && mode === "register" && "border-destructive ring-2 ring-destructive/20",
                        emailError && mode === "login" && "border-destructive ring-2 ring-destructive/20",
                      )}
                      onChange={() => { setEmailExists(false); setEmailError(""); }} required
                    />
                  </div>
                </div>

                {/* Password */}
                {mode !== "forgot" && (
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <Label htmlFor="password" className="text-sm font-semibold">Password</Label>
                      {mode === "login" && (
                        <button type="button" onClick={() => setMode("forgot")}
                          className="text-xs text-primary font-semibold hover:underline cursor-pointer">Forgot password?</button>
                      )}
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="password" name="password"
                        type={showPassword ? "text" : "password"} placeholder="••••••••"
                        className={cn(
                          "pl-10 pr-11 h-11 rounded-xl text-sm transition-all",
                          passwordError && mode === "login" && "border-destructive ring-2 ring-destructive/20",
                        )}
                        onChange={() => setPasswordError("")} required
                      />
                      <button type="button" onClick={() => setShowPassword((s) => !s)}
                        className="absolute right-3.5 top-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                        aria-label="Toggle password visibility">
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                )}

                {/* Submit */}
                <Button type="submit" variant="hero" id="auth-submit"
                  className="w-full h-11 rounded-xl text-sm font-bold shadow-glow mt-1 cursor-pointer" disabled={loading}>
                  {loading
                    ? <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Processing...
                      </span>
                    : mode === "login" ? "Sign In to AgriRent"
                      : mode === "register" ? `Create ${role === "owner" ? "Owner" : "Farmer"} Account`
                        : "Send Reset Link"}
                </Button>

                {mode === "forgot" && (
                  <button type="button" onClick={() => setMode("login")}
                    className="w-full text-center text-sm text-primary font-semibold hover:underline cursor-pointer">
                    ← Back to Sign In
                  </button>
                )}
              </motion.form>
            </AnimatePresence>

            {/* Switch mode */}
            {mode !== "forgot" && (
              <p className="mt-5 text-center text-sm text-muted-foreground">
                {mode === "login" ? "Don't have an account? " : "Already have an account? "}
                <button type="button"
                  onClick={() => { setMode(mode === "login" ? "register" : "login"); resetErrors(); }}
                  className="text-primary font-semibold hover:underline cursor-pointer">
                  {mode === "login" ? "Create one →" : "Sign in →"}
                </button>
              </p>
            )}

            <p className="mt-5 text-center text-[11px] text-muted-foreground/50">
              © {new Date().getFullYear()} AgriRent · Verified Agricultural Equipment Sharing
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
