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
  MessageSquare,
  Send,
} from "lucide-react";
import { SiteLayout } from "@/components/site/site-layout";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { equipment, getEquipment, inr, saveOwnerMessage, isEquipmentBookedForDates, getOverlappingBooking } from "@/lib/equipment-data";
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
  const [fromDate, setFromDate] = useState(() => new Date().toISOString().split("T")[0]);
  const [toDate, setToDate] = useState(() => new Date(Date.now() + 3 * 86400000).toISOString().split("T")[0]);
  const [messageModalOpen, setMessageModalOpen] = useState(false);
  const [messageText, setMessageText] = useState("");

  const fromTime = new Date(fromDate).getTime();
  const toTime = new Date(toDate).getTime();
  const diffMs = toTime - fromTime;
  const rawDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  const rentalDays = isNaN(rawDays) || rawDays < 1 ? 1 : rawDays;

  const overlapping = getOverlappingBooking(item.id, fromDate, toDate);
  const isDateBooked = overlapping !== null;

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
    <SiteLayout noFooter>
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <nav className="text-xs text-muted-foreground">
          <Link to="/equipment" className="hover:text-foreground">
            Equipment
          </Link>
          <span className="px-2">/</span>
          <span className="text-foreground">{item.name}</span>
        </nav>

        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] items-start">
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

          <div className="space-y-4 lg:sticky lg:top-22 lg:self-start">
            {/* Booking Card */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="surface-card p-5 shadow-float rounded-3xl border border-border/80"
            >
              <div className="flex items-baseline justify-between border-b border-border/60 pb-3">
                <div>
                  <span className="font-display text-2xl xl:text-3xl font-extrabold text-primary">
                    {inr(item.price)}
                  </span>
                  <span className="text-xs text-muted-foreground ml-1">/ day</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 text-[10px] font-extrabold uppercase border border-emerald-500/25">
                  Available Now
                </span>
              </div>

              {/* FROM DATE TO TO DATE SELECTOR */}
              <div className="mt-4 space-y-2">
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="rounded-xl border border-border bg-card p-2.5 shadow-sm hover:border-primary transition-all">
                    <label className="text-[9px] font-extrabold uppercase tracking-wider text-muted-foreground block mb-0.5">
                      From Date (Pickup)
                    </label>
                    <input
                      type="date"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      className="w-full bg-transparent text-xs font-bold text-foreground focus:outline-none"
                    />
                  </div>

                  <div className="rounded-xl border border-border bg-card p-2.5 shadow-sm hover:border-primary transition-all">
                    <label className="text-[9px] font-extrabold uppercase tracking-wider text-muted-foreground block mb-0.5">
                      To Date (Return)
                    </label>
                    <input
                      type="date"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                      className="w-full bg-transparent text-xs font-bold text-foreground focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Overlap Warning Box if dates are already booked */}
              {overlapping ? (
                <div className="mt-3.5 p-3 rounded-xl bg-destructive/10 border border-destructive/25 text-center space-y-1">
                  <p className="text-xs font-extrabold text-destructive">⚠️ Already Booked for Selected Dates</p>
                  <p className="text-[10px] text-muted-foreground">
                    This machine is already reserved from {overlapping.fromDate} to {overlapping.toDate}. Please select different dates.
                  </p>
                </div>
              ) : null}

              {/* Price Calculation Summary Box */}
              <div className="mt-3.5 rounded-xl bg-muted/40 border border-border/70 p-3 space-y-1.5 text-xs">
                <div className="flex justify-between text-muted-foreground text-[11px]">
                  <span>Rental Rate ({inr(item.price)} × {rentalDays}d)</span>
                  <span className="font-semibold text-foreground">{inr(item.price * rentalDays)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground text-[11px]">
                  <span>Insurance & Guarantee</span>
                  <span className="font-semibold text-foreground">₹350</span>
                </div>
                <div className="flex justify-between text-muted-foreground text-[11px]">
                  <span>Delivery & Inspection</span>
                  <span className="font-semibold text-emerald-600">FREE</span>
                </div>
                <div className="pt-1.5 border-t border-border/60 flex justify-between text-xs font-extrabold">
                  <span>Total Payable</span>
                  <span className="text-primary font-display text-sm">{inr(item.price * rentalDays + 350)}</span>
                </div>
              </div>

              {isDateBooked ? (
                <Button disabled className="mt-4 w-full rounded-xl font-bold h-11 text-xs bg-muted text-muted-foreground border border-border/80 opacity-70 cursor-not-allowed">
                  Unavailable for Selected Dates
                </Button>
              ) : (
                <Button asChild variant="hero" size="sm" className="mt-4 w-full rounded-xl font-bold shadow-glow h-11 text-xs">
                  <Link to="/booking" search={{ equipment: item.id, from: fromDate, to: toDate, days: rentalDays }} onClick={handleBookingClick}>
                    <CalendarDays className="h-4 w-4 mr-1" /> Reserve Machinery ({inr(item.price * rentalDays + 350)})
                  </Link>
                </Button>
              )}
              <p className="mt-2 text-center text-[10px] text-muted-foreground font-medium">
                Free cancellation up to 48 hours before pickup
              </p>
            </motion.div>

            {/* Compact Owner Box */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="surface-card p-4 rounded-3xl border border-border/80 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="gradient-primary grid h-10 w-10 shrink-0 place-items-center rounded-xl text-base font-bold text-primary-foreground shadow-sm">
                    {item.owner.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-bold text-xs text-foreground">{item.owner}</p>
                    <p className="text-[10px] text-muted-foreground">Hosting since {item.ownerSince} · Verified</p>
                  </div>
                </div>
                <Button
                  variant="soft"
                  size="sm"
                  onClick={() => {
                    if (!user) {
                      toast.error("Please sign in to send a message to the owner.");
                      navigate({ to: "/auth", search: { mode: "login" } });
                      return;
                    }
                    setMessageModalOpen(true);
                  }}
                  className="rounded-xl text-xs font-bold gap-1 cursor-pointer h-9 px-3 shrink-0"
                >
                  <MessageSquare className="h-3.5 w-3.5 text-primary" /> Message
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══ INTERACTIVE MESSAGE OWNER MODAL (HIGH Z-INDEX & VIEWPORT CENTERED) ══ */}
      {messageModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop Blur */}
          <div
            onClick={() => setMessageModalOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative z-[10000] w-full max-w-lg rounded-3xl border-2 border-primary/20 bg-card p-6 sm:p-7 shadow-2xl space-y-5 text-foreground"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-3">
                <span className="gradient-primary grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-lg font-extrabold text-primary-foreground shadow-glow">
                  {item.owner.charAt(0)}
                </span>
                <div>
                  <h3 className="font-extrabold text-base font-display text-foreground">Message {item.owner}</h3>
                  <p className="text-xs text-muted-foreground">Inquiring about: <strong className="text-foreground">{item.name}</strong></p>
                </div>
              </div>
              <button
                onClick={() => setMessageModalOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-xl bg-muted/80 text-foreground hover:bg-destructive/10 hover:text-destructive transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Quick Preset Prompts */}
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-primary mb-2">Quick Inquiries</p>
              <div className="flex flex-wrap gap-2">
                {[
                  `Is this available for pickup tomorrow?`,
                  `Can you deliver to ${item.location}?`,
                  `Does this include an operator?`,
                ].map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => setMessageText(q)}
                    className="text-xs font-bold px-3 py-1.5 rounded-xl border border-border bg-muted/40 hover:bg-primary-soft hover:text-primary transition-all text-left cursor-pointer shadow-sm"
                  >
                    💬 {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label className="text-xs font-bold text-foreground block mb-1.5">Your Message to {item.owner.split(" ")[0]}</label>
              <textarea
                rows={4}
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder={`Hi ${item.owner.split(" ")[0]}, I am interested in renting your ${item.name}...`}
                className="w-full rounded-2xl border-2 border-border bg-background p-3.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none shadow-inner"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setMessageModalOpen(false)}
                className="rounded-xl font-bold h-11 px-5 cursor-pointer"
              >
                Cancel
              </Button>
              <Button
                variant="hero"
                size="sm"
                onClick={() => {
                  if (!messageText.trim()) {
                    toast.error("Please enter a message before sending.");
                    return;
                  }
                  saveOwnerMessage({
                    id: `msg_${Date.now()}`,
                    farmerName: user?.name || "Rajesh Kumar",
                    farmerRole: "Farmer",
                    equipmentId: item.id,
                    equipmentName: item.name,
                    ownerName: item.owner,
                    message: messageText.trim(),
                    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                    timestamp: Date.now(),
                  });
                  toast.success(`Message sent to ${item.owner}! Opening your conversation thread...`);
                  setMessageModalOpen(false);
                  setMessageText("");
                  navigate({ to: "/profile", search: { tab: "messages" } });
                }}
                className="rounded-xl font-bold h-11 px-6 gap-2 shadow-glow cursor-pointer"
              >
                <Send className="h-4 w-4" /> Send Message
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </SiteLayout>
  );
}
