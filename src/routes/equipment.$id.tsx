import { createFileRoute, Link, useNavigate, notFound } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "@/lib/auth/context";

import {
  CalendarDays,
  Check,
  Fuel,
  Gauge,
  MapPin,
  Ruler,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";
import { SiteLayout } from "@/components/site/site-layout";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { equipment, getEquipment, inr } from "@/lib/equipment-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/equipment/$id")({
  loader: ({ params }) => {
    const item = getEquipment(params.id);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Equipment not found | AgriRent" }, { name: "robots", content: "noindex" }],
      };
    }
    const { item } = loaderData;
    const title = `${item.name} — ${inr(item.price)}/day | AgriRent`;
    return {
      meta: [
        { title },
        { name: "description", content: item.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: item.summary },
      ],
    };
  },
  component: EquipmentDetails,
});

function EquipmentDetails() {
  const { item } = Route.useLoaderData();
  const { user } = useAuth();
  const navigate = useNavigate();
  const gallery = [item.image, ...equipment.filter((e) => e.id !== item.id).map((e) => e.image)].slice(0, 4);
  const [active, setActive] = useState(0);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleBookingClick = (e: React.MouseEvent) => {
    if (!user) {
      e.preventDefault();
      toast.error("Please sign in or create an account to book equipment.");
      navigate({ to: "/auth", search: { mode: "login" } });
    }
  };


  const specs = [
    { icon: Gauge, label: "Power", value: item.power },
    { icon: Fuel, label: "Drive", value: item.fuel },
    { icon: Ruler, label: "Working width", value: item.width },
    { icon: Wrench, label: "Model year", value: String(item.year) },
  ];

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <nav className="text-xs text-muted-foreground">
          <Link to="/equipment" className="hover:text-foreground">
            Equipment
          </Link>
          <span className="px-2">/</span>
          <span className="text-foreground">{item.name}</span>
        </nav>

        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
          <div>
            <div className="group surface-card relative aspect-16/10 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={gallery[active]}
                  alt={item.name}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
              </AnimatePresence>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {gallery.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "aspect-4/3 overflow-hidden rounded-xl border-2 transition-all duration-400",
                    active === i
                      ? "border-primary shadow-glow"
                      : "border-transparent opacity-70 hover:opacity-100",
                  )}
                >
                  <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10"
            >
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                {item.category}
              </span>
              <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">{item.name}</h1>
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" /> {item.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-harvest text-harvest" /> {item.rating} ·{" "}
                  {item.reviews} reviews
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-primary" /> Insured rental
                </span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.summary}
              </p>
            </motion.div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {specs.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="surface-card p-4"
                >
                  <s.icon className="h-4 w-4 text-primary" />
                  <p className="mt-3 text-xs text-muted-foreground">{s.label}</p>
                  <p className="text-sm font-semibold">{s.value}</p>
                </motion.div>
              ))}
            </div>

            <section className="mt-12">
              <h2 className="font-display text-xl font-bold">Reviews</h2>
              <div className="mt-5 space-y-4">
                {[
                  {
                    n: "Suresh M.",
                    t: "Arrived on time and fully fuelled. Owner walked me through the controls.",
                  },
                  {
                    n: "Lakshmi R.",
                    t: "Machine was spotless and the daily rate was fair. Booking took two minutes.",
                  },
                ].map((r, i) => (
                  <motion.div
                    key={r.n}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="surface-card p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                        {r.n.charAt(0)}
                      </span>
                      <div>
                        <p className="text-sm font-semibold">{r.n}</p>
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, k) => (
                            <Star key={k} className="h-3 w-3 fill-harvest text-harvest" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.t}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="surface-card p-6 shadow-float"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-extrabold text-primary">
                  {inr(item.price)}
                </span>
                <span className="text-sm text-muted-foreground">/ day</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Delivery within 40 km included · Fuel billed at actuals
              </p>

              <div className="mt-5 rounded-2xl border border-border p-2">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="pointer-events-auto"
                />
              </div>

              <Button asChild variant="hero" size="lg" className="mt-5 w-full">
                <Link to="/booking" search={{ equipment: item.id }} onClick={handleBookingClick}>
                  <CalendarDays className="h-4 w-4" /> Book now
                </Link>
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Free cancellation up to 48 hours before pickup
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="surface-card p-6"
            >
              <p className="text-xs tracking-wide text-muted-foreground uppercase">Owner</p>
              <div className="mt-4 flex items-center gap-3">
                <span className="gradient-primary grid h-12 w-12 place-items-center rounded-2xl text-lg font-bold text-primary-foreground">
                  {item.owner.charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-semibold">{item.owner}</p>
                  <p className="text-xs text-muted-foreground">Hosting since {item.ownerSince}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {["ID and land records verified", "Responds within 1 hour", "98% approval rate"].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" /> {t}
                    </li>
                  ),
                )}
              </ul>
              <Button variant="soft" className="mt-5 w-full">
                Message owner
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
