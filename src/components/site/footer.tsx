import { Link } from "@tanstack/react-router";
import { Sprout } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <span className="gradient-primary grid h-8 w-8 place-items-center rounded-lg text-primary-foreground">
              <Sprout className="h-4 w-4" />
            </span>
            <span className="font-display text-base font-extrabold">
              Agri<span className="text-primary">Rent</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Equipment sharing for the modern farm. Rent verified machinery from owners nearby,
            with transparent pricing and insured bookings.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Platform</p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link to="/equipment" className="link-underline">
                Browse equipment
              </Link>
            </li>
            <li>
              <Link to="/categories" className="link-underline">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="link-underline">
                Owner dashboard
              </Link>
            </li>
            <li>
              <Link to="/profile" className="link-underline">
                My profile
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Company</p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="link-underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link-underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/auth" className="link-underline">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} AgriRent. Built for farmers, owners and co-operatives.
      </div>
    </footer>
  );
}
