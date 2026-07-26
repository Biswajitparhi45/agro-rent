import { Link, useNavigate } from "@tanstack/react-router";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Menu, Sprout, X, LogOut, ShieldCheck, Tractor, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/auth/context";

const baseLinks = [
  { to: "/", label: "Home" },
  { to: "/equipment", label: "Equipment" },
  { to: "/categories", label: "Categories" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  const handleLogout = async () => {
    await logout();
    navigate({ to: "/" });
  };

  const roleBadgeColor =
    user?.role === "admin"
      ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30"
      : user?.role === "owner"
        ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
        : "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30";

  const RoleIcon =
    user?.role === "admin" ? ShieldCheck : user?.role === "owner" ? Tractor : UserIcon;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "transition-all duration-500",
          scrolled ? "glass shadow-soft" : "border-b border-transparent bg-transparent",
        )}
      >
        <nav className="mx-auto flex h-18 max-w-7xl items-center gap-6 px-5 py-3.5 sm:px-8">
          <Link to="/" className="group flex min-w-0 items-center gap-2.5">
            <span className="gradient-primary grid h-9 w-9 shrink-0 place-items-center rounded-xl text-primary-foreground shadow-glow transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
              <Sprout className="h-5 w-5" />
            </span>
            <span className="font-display truncate text-lg font-extrabold tracking-tight">
              Agri<span className="text-primary">Rent</span>
            </span>
          </Link>

          <ul className="ml-4 hidden items-center gap-7 lg:flex">
            {baseLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="link-underline text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            {user?.role === "admin" && (
              <li>
                <Link
                  to="/admin"
                  className="text-sm font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1"
                >
                  <ShieldCheck className="h-4 w-4" /> Admin Panel
                </Link>
              </li>
            )}
          </ul>

          <div className="ml-auto hidden items-center gap-3 md:flex">
            {user ? (
              <>
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-border bg-card/60">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-primary/10 text-primary font-bold text-xs">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-semibold leading-none">{user.name}</span>
                    <span
                      className={cn(
                        "mt-0.5 inline-flex items-center gap-0.5 text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded-full border",
                        roleBadgeColor,
                      )}
                    >
                      <RoleIcon className="h-2.5 w-2.5" />
                      {user.role}
                    </span>
                  </div>
                </div>

                {user.role === "owner" && (
                  <Button asChild variant="hero" size="sm" className="press">
                    <Link to="/dashboard">Owner Dashboard</Link>
                  </Button>
                )}

                {user.role === "admin" && (
                  <Button asChild variant="hero" size="sm" className="press">
                    <Link to="/admin">Admin Panel</Link>
                  </Button>
                )}

                {user.role === "farmer" && (
                  <>
                    <Button asChild variant="hero" size="sm" className="press rounded-xl text-xs font-bold gap-1 shadow-glow">
                      <Link to="/profile" search={{ tab: "messages" }}>
                        💬 My Messages
                      </Link>
                    </Button>
                    <Button asChild variant="soft" size="sm" className="press rounded-xl">
                      <Link to="/profile">My Profile</Link>
                    </Button>
                  </>
                )}

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-muted-foreground hover:text-destructive"
                  title="Logout"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <>
                <Button asChild variant="ghost" size="sm" className="press">
                  <Link to="/auth">Login</Link>
                </Button>
                <Button asChild variant="hero" size="sm" className="press">
                  <Link to="/auth" search={{ mode: "register" }}>
                    Register
                  </Link>
                </Button>
              </>
            )}
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="press ml-auto grid h-10 w-10 place-items-center rounded-xl border border-border bg-card/70 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="glass overflow-hidden md:hidden"
      >
        <div className="space-y-1 px-5 py-4">
          {baseLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              {l.label}
            </Link>
          ))}
          {user?.role === "admin" && (
            <Link
              to="/admin"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-amber-600 hover:bg-amber-500/10"
            >
              Admin Panel
            </Link>
          )}
          <div className="flex gap-2 pt-2">
            {user ? (
              <Button variant="destructive" size="sm" onClick={handleLogout} className="w-full">
                Logout ({user.name})
              </Button>
            ) : (
              <>
                <Button asChild variant="soft" size="sm" className="flex-1">
                  <Link to="/auth">Login</Link>
                </Button>
                <Button asChild variant="hero" size="sm" className="flex-1">
                  <Link to="/auth" search={{ mode: "register" }}>
                    Register
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
