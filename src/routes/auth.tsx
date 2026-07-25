import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { z } from "zod";
import {
  Eye,
  EyeOff,
  Sprout,
  Tractor,
  User,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Mail,
  ArrowRight,
  Sparkles,
  Star,
  Quote,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AmbientGlow } from "@/components/site/ambient";
import { cn } from "@/lib/utils";
import { loginServerFn, registerServerFn } from "@/lib/auth/server";
import { useAuth } from "@/lib/auth/context";
import { UserRole } from "@/lib/db/models/user.model";

export const Route = createFileRoute("/auth")({
  validateSearch: z.object({ mode: z.enum(["login", "register", "forgot"]).optional() }),
  head: () => ({
    meta: [
      { title: "Sign in to AgriRent — Role-Based Access" },
      {
        name: "description",
        content: "Log in or create an AgriRent account to book machinery or list your farm equipment.",
      },
      { property: "og:title", content: "Sign in to AgriRent" },
      { property: "og:description", content: "Role-based authentication with MongoDB Atlas." },
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

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") ?? "").trim();
    const password = String(form.get("password") ?? "");
    const name = String(form.get("name") ?? "").trim();

    if (!email.includes("@") || (mode !== "forgot" && !password)) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      toast.error("Please fill in all required fields accurately.");
      return;
    }

    try {
      setLoading(true);

      if (mode === "login") {
        const res = await loginServerFn({ data: { email, password } });
        if (res.success && res.user) {
          setUser(res.user);
          await refreshUser();
          toast.success(`Welcome back, ${res.user.name}! (${res.user.role.toUpperCase()})`);
          if (res.user.role === "admin") {
            navigate({ to: "/admin" });
          } else if (res.user.role === "owner") {
            navigate({ to: "/dashboard" });
          } else {
            navigate({ to: "/" });
          }
        }
      } else if (mode === "register") {
        if (!name) {
          toast.error("Please enter your full name.");
          setLoading(false);
          return;
        }
        const res = await registerServerFn({ data: { name, email, password, role } });
        if (res.success && res.user) {
          setUser(res.user);
          await refreshUser();
          toast.success(`Account created successfully as ${role.toUpperCase()}!`);
          if (role === "admin") {
            navigate({ to: "/admin" });
          } else if (role === "owner") {
            navigate({ to: "/dashboard" });
          } else {
            navigate({ to: "/" });
          }
        }
      } else {
        toast.success("Password reset email sent (if account exists).");
      }
    } catch (err: unknown) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      const msg = err instanceof Error ? err.message : "Authentication failed.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-background text-foreground flex flex-col justify-between px-4 sm:px-8 py-3">
      <AmbientGlow />

      {/* Top Header */}
      <header className="relative z-20 mx-auto w-full max-w-7xl flex items-center justify-between py-1 shrink-0">
        <Link to="/" className="group flex items-center gap-2">
          <span className="gradient-primary grid h-9 w-9 place-items-center rounded-xl text-primary-foreground shadow-glow transition-transform duration-300 group-hover:scale-105">
            <Sprout className="h-4.5 w-4.5" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight">
            Agri<span className="text-primary">Rent</span>
          </span>
        </Link>
        <Link
          to="/"
          className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
        >
          Back to marketplace <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </header>

      {/* Main Fit-to-Screen Grid */}
      <main className="relative z-10 mx-auto w-full max-w-7xl flex-1 grid lg:grid-cols-12 items-center gap-8 min-h-0 py-2">
        {/* Left Side: Brand Showcase Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex lg:col-span-6 flex-col justify-center space-y-5 pr-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary w-fit">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Trusted Farm Equipment Platform</span>
          </div>

          <h1 className="font-display text-3xl xl:text-4xl font-extrabold tracking-tight leading-tight">
            Empowering Farmers & Machinery Owners.
          </h1>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-lg">
            Rent high-efficiency tractors, harvesters, and implements or list your own machinery to generate steady income between harvest seasons.
          </p>

          {/* Compact Feature Bullets */}
          <div className="space-y-3 pt-1">
            {[
              { title: "Verified Machinery & Owners", desc: "Service logs and field inspection checked." },
              { title: "100% Insured Bookings", desc: "Full insurance coverage for peace of mind." },
              { title: "Transparent Daily Rates", desc: "No hidden charges, zero booking fees." },
            ].map((f, i) => (
              <div key={f.title} className="flex items-start gap-3">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary mt-0.5">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </span>
                <div>
                  <h3 className="text-xs font-bold text-foreground leading-none">{f.title}</h3>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Card */}
          <div className="surface-card rounded-2xl p-4 shadow-soft border border-border/80 relative overflow-hidden">
            <Quote className="absolute top-2 right-3 h-8 w-8 text-primary/10" />
            <div className="flex items-center gap-1 text-harvest mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-harvest text-harvest" />
              ))}
            </div>
            <p className="text-xs italic text-muted-foreground leading-snug">
              "AgriRent made renting a combine harvester seamless. Saved over ₹45,000 in one harvest season!"
            </p>
            <div className="mt-2 flex items-center gap-2">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/20 text-[10px] font-bold text-primary">
                G
              </span>
              <span className="text-xs font-bold">Gurpreet Singh</span>
              <span className="text-[10px] text-muted-foreground">· Punjab</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Compact Fit Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 w-full max-w-md mx-auto"
        >
          <div
            className={cn(
              "glass w-full rounded-3xl p-6 shadow-float border border-border/80 backdrop-blur-xl bg-card/85",
              shake && "animate-[soft-pulse_0.5s]",
            )}
          >
            {/* Header Text */}
            <div className="text-left">
              <div className="flex items-center justify-between">
                <span className="gradient-primary inline-grid h-9 w-9 place-items-center rounded-xl text-primary-foreground shadow-glow">
                  <Sprout className="h-4.5 w-4.5" />
                </span>
                <span className="text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                  MongoDB Auth
                </span>
              </div>

              <h2 className="mt-3 text-xl font-extrabold tracking-tight">
                {mode === "login"
                  ? "Welcome Back"
                  : mode === "register"
                    ? "Create Account"
                    : "Reset Password"}
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                {mode === "login"
                  ? "Sign in to manage bookings & machinery."
                  : mode === "register"
                    ? "Join AgriRent to rent tools or list machinery."
                    : "Enter your email for password reset."}
              </p>
            </div>

            {/* Mode Switcher Tabs */}
            {mode !== "forgot" && (
              <div className="mt-4 grid grid-cols-2 gap-1 rounded-xl bg-muted/80 p-1 border border-border/50">
                {(["login", "register"] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMode(m)}
                    className={cn(
                      "relative rounded-lg px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer capitalize",
                      mode === m ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {mode === m && (
                      <motion.span
                        layoutId="auth-tab-pill"
                        className="gradient-primary absolute inset-0 rounded-lg"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{m === "login" ? "Sign In" : "Register"}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Auth Form */}
            <AnimatePresence mode="wait">
              <motion.form
                key={mode}
                onSubmit={submit}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="mt-4 space-y-3"
              >
                {/* Registration Fields */}
                {mode === "register" && (
                  <>
                    <div>
                      <Label htmlFor="name" className="text-xs font-semibold">
                        Full Name
                      </Label>
                      <div className="relative mt-1">
                        <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="name"
                          name="name"
                          placeholder="Harpreet Singh"
                          className="pl-9 h-9 rounded-lg text-xs"
                          required
                        />
                      </div>
                    </div>

                    {/* Compact RBAC Role Selector Cards */}
                    <div>
                      <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                        Select Account Type (RBAC)
                      </Label>
                      <div className="mt-1 grid grid-cols-3 gap-1.5">
                        {[
                          { id: "farmer", label: "Farmer", icon: User, desc: "Rent" },
                          { id: "owner", label: "Owner", icon: Tractor, desc: "List" },
                          { id: "admin", label: "Admin", icon: ShieldCheck, desc: "Manage" },
                        ].map((item) => {
                          const IconComp = item.icon;
                          const active = role === item.id;
                          return (
                            <button
                              type="button"
                              key={item.id}
                              onClick={() => setRole(item.id as UserRole)}
                              className={cn(
                                "flex flex-col items-center justify-center rounded-xl border p-1.5 text-center transition-all cursor-pointer",
                                active
                                  ? "border-primary bg-primary/15 text-primary font-bold shadow-sm"
                                  : "border-border/70 bg-card/60 text-muted-foreground hover:border-primary/40 hover:bg-accent",
                              )}
                            >
                              <IconComp className="h-3.5 w-3.5 mb-0.5" />
                              <span className="text-[11px] leading-none">{item.label}</span>
                              <span className="text-[8px] opacity-70 mt-0.5">{item.desc}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}

                {/* Email Field */}
                <div>
                  <Label htmlFor="email" className="text-xs font-semibold">
                    Email Address
                  </Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@farm.in"
                      className="pl-9 h-9 rounded-lg text-xs"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                {mode !== "forgot" && (
                  <div>
                    <Label htmlFor="password" className="text-xs font-semibold">
                      Password
                    </Label>
                    <div className="relative mt-1">
                      <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pl-9 pr-9 h-9 rounded-lg text-xs"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((s) => !s)}
                        className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                        aria-label="Toggle password visibility"
                      >
                        {showPassword ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="hero"
                  size="default"
                  className="w-full h-9 rounded-lg text-xs font-bold shadow-glow mt-1 cursor-pointer"
                  disabled={loading}
                >
                  {loading
                    ? "Processing..."
                    : mode === "login"
                      ? "Sign In to AgriRent"
                      : mode === "register"
                        ? `Create ${role.toUpperCase()} Account`
                        : "Send Reset Link"}
                </Button>
              </motion.form>
            </AnimatePresence>

            {/* Bottom Links */}
            <div className="mt-3 text-center text-xs text-muted-foreground border-t border-border/50 pt-2.5">
              <button
                type="button"
                onClick={() => setMode(mode === "forgot" ? "login" : "forgot")}
                className="text-primary font-semibold text-[11px] hover:underline cursor-pointer"
              >
                {mode === "forgot" ? "Back to Sign In" : "Forgot your password?"}
              </button>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer copyright line */}
      <footer className="relative z-10 text-center text-[10px] text-muted-foreground py-1 shrink-0">
        © {new Date().getFullYear()} AgriRent. Verified Agricultural Equipment Sharing.
      </footer>
    </div>
  );
}
