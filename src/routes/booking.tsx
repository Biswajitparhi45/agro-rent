import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowLeft, ArrowRight, Check, CreditCard, Loader2 } from "lucide-react";
import { SiteLayout } from "@/components/site/site-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { equipment, getEquipment, inr, saveBookingRecord } from "@/lib/equipment-data";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/auth/context";

export const Route = createFileRoute("/booking")({
  validateSearch: z.object({
    equipment: z.string().optional(),
    from: z.string().optional(),
    to: z.string().optional(),
    days: z.union([z.number(), z.string()]).optional(),
  }),
  head: () => ({
    meta: [
      { title: "Book Equipment in 4 Steps | AgriRent" },
      {
        name: "description",
        content:
          "Select your machine, choose rental dates, pay securely and get instant booking confirmation.",
      },
      { property: "og:title", content: "Book Equipment in 4 Steps | AgriRent" },
      {
        property: "og:description",
        content: "A guided four-step booking flow for farm equipment rentals.",
      },
    ],
  }),
  component: BookingFlow,
});

const steps = ["Select Equipment", "Payment & Details", "Confirmation"];

function BookingFlow() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const search = Route.useSearch();

  useEffect(() => {
    if (!loading && !user) {
      toast.error("Please sign in or create an account to book equipment.");
      navigate({ to: "/auth", search: { mode: "login" } });
    }
  }, [user, loading, navigate]);

  const parsedDays = search.days ? Number(search.days) : 3;
  const [step, setStep] = useState(search.equipment ? 1 : 0);
  const [selected, setSelected] = useState(search.equipment ?? equipment[0].id);
  const [days, setDays] = useState(isNaN(parsedDays) || parsedDays < 1 ? 3 : parsedDays);
  const [paying, setPaying] = useState(false);

  const [location, setLocation] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardName, setCardName] = useState(user?.name || "");
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});

  const item = getEquipment(selected)!;
  const subtotal = item ? item.price * days : 0;
  const fees = Math.round(subtotal * 0.05);

  const next = () => setStep((s) => Math.min(s + 1, 2));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const pay = () => {
    const errs: Record<string, boolean> = {};
    if (!location.trim()) errs.location = true;
    if (!cardNumber.trim()) errs.cardNumber = true;
    if (!expiry.trim()) errs.expiry = true;
    if (!cvc.trim()) errs.cvc = true;
    if (!cardName.trim()) errs.cardName = true;

    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      toast.error("Please fill in all required fields before proceeding.", {
        description: "Delivery address and payment details are mandatory.",
      });
      return;
    }
    setFieldErrors({});

    setPaying(true);
    const today = new Date();
    const format = (d: Date) => d.toISOString().split("T")[0];
    const fromStr = search.from || format(new Date(today.getTime() + 86400000));
    const toStr = search.to || format(new Date(today.getTime() + 86400000 * (days + 1)));

    if (item) {
      saveBookingRecord({
        id: `bk_${Date.now()}`,
        equipmentId: item.id,
        equipmentName: item.name,
        renterName: user?.name || cardName.trim() || "Rajesh Kumar",
        renterEmail: user?.email || "farmer@agrirent.in",
        fromDate: fromStr,
        toDate: toStr,
        status: "confirmed",
        totalPaid: subtotal + fees + 350,
        timestamp: Date.now(),
      });
    }

    setTimeout(() => {
      setPaying(false);
      setStep(2);
    }, 1400);
  };

  return (
    <SiteLayout>
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
        <h1 className="text-center text-3xl font-extrabold sm:text-4xl">Complete your booking</h1>

        <div className="mt-10">
          <div className="relative h-1.5 overflow-hidden rounded-full bg-muted">
            <motion.div
              className="gradient-primary absolute inset-y-0 left-0 rounded-full"
              animate={{ width: `${((step + 1) / 3) * 100}%` }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <ol className="mt-4 grid grid-cols-3 gap-2">
            {steps.map((s, i) => (
              <li key={s} className="min-w-0 text-center">
                <span
                  className={cn(
                    "mx-auto grid h-8 w-8 place-items-center rounded-full text-xs font-bold transition-all duration-500",
                    i <= step
                      ? "gradient-primary text-primary-foreground shadow-glow"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  {i < step ? <Check className="h-4 w-4" /> : i + 1}
                </span>
                <span
                  className={cn(
                    "mt-2 block truncate text-[11px] font-medium sm:text-xs",
                    i <= step ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {s}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {step === 0 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {equipment.map((e) => (
                    <button
                      key={e.id}
                      onClick={() => setSelected(e.id)}
                      className={cn(
                        "surface-card flex items-center gap-4 p-4 text-left transition-all duration-400 hover:-translate-y-1 hover:shadow-float",
                        selected === e.id && "ring-2 ring-primary shadow-glow",
                      )}
                    >
                      <img
                        src={e.image}
                        alt={e.name}
                        loading="lazy"
                        className="h-16 w-20 shrink-0 rounded-xl object-cover"
                      />
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold">{e.name}</span>
                        <span className="block text-xs text-muted-foreground">{e.location}</span>
                        <span className="mt-1 block text-sm font-bold text-primary">
                          {inr(e.price)}/day
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {step === 1 && (
                <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
                  <div className="surface-card space-y-4 p-6">
                    <h2 className="font-display text-lg font-bold">Payment & Delivery Details</h2>
                    <div>
                      <Label htmlFor="site">Field / Delivery Location <span className="text-destructive">*</span></Label>
                      <Input
                        id="site"
                        value={location}
                        onChange={(e) => { setLocation(e.target.value); setFieldErrors((p) => ({ ...p, location: false })); }}
                        placeholder="Plot no., Village or Tehsil address"
                        className={cn("mt-2", fieldErrors.location && "border-destructive ring-2 ring-destructive/20")}
                        required
                      />
                      {fieldErrors.location && <p className="text-[11px] font-semibold text-destructive mt-1">Delivery location is required.</p>}
                    </div>
                    <div className="pt-2 border-t border-border/60">
                      <Label htmlFor="card">Card number <span className="text-destructive">*</span></Label>
                      <Input
                        id="card"
                        value={cardNumber}
                        onChange={(e) => { setCardNumber(e.target.value); setFieldErrors((p) => ({ ...p, cardNumber: false })); }}
                        placeholder="4242 4242 4242 4242"
                        className={cn("mt-2", fieldErrors.cardNumber && "border-destructive ring-2 ring-destructive/20")}
                        required
                      />
                      {fieldErrors.cardNumber && <p className="text-[11px] font-semibold text-destructive mt-1">Card number is required.</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="exp">Expiry <span className="text-destructive">*</span></Label>
                        <Input
                          id="exp"
                          value={expiry}
                          onChange={(e) => { setExpiry(e.target.value); setFieldErrors((p) => ({ ...p, expiry: false })); }}
                          placeholder="09/29"
                          className={cn("mt-2", fieldErrors.expiry && "border-destructive ring-2 ring-destructive/20")}
                          required
                        />
                        {fieldErrors.expiry && <p className="text-[11px] font-semibold text-destructive mt-1">Expiry date is required.</p>}
                      </div>
                      <div>
                        <Label htmlFor="cvc">CVC <span className="text-destructive">*</span></Label>
                        <Input
                          id="cvc"
                          value={cvc}
                          onChange={(e) => { setCvc(e.target.value); setFieldErrors((p) => ({ ...p, cvc: false })); }}
                          placeholder="123"
                          className={cn("mt-2", fieldErrors.cvc && "border-destructive ring-2 ring-destructive/20")}
                          required
                        />
                        {fieldErrors.cvc && <p className="text-[11px] font-semibold text-destructive mt-1">CVC is required.</p>}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="name">Name on card <span className="text-destructive">*</span></Label>
                      <Input
                        id="name"
                        value={cardName}
                        onChange={(e) => { setCardName(e.target.value); setFieldErrors((p) => ({ ...p, cardName: false })); }}
                        placeholder="Full name"
                        className={cn("mt-2", fieldErrors.cardName && "border-destructive ring-2 ring-destructive/20")}
                        required
                      />
                      {fieldErrors.cardName && <p className="text-[11px] font-semibold text-destructive mt-1">Name on card is required.</p>}
                    </div>
                  </div>
                  <Summary item={item} days={days} subtotal={subtotal} fees={fees} from={search.from} to={search.to} />
                </div>
              )}

              {step === 2 && <Confirmation item={item} days={days} total={subtotal + fees} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {step < 2 && (
          <div className="mt-10 flex items-center justify-between gap-3">
            <Button variant="ghost" onClick={back} disabled={step === 0}>
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
            {step === 1 ? (
              <motion.div layout>
                <Button variant="hero" size="lg" onClick={pay} disabled={paying}>
                  {paying ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Processing
                    </>
                  ) : (
                    <>
                      <CreditCard className="h-4 w-4" /> Pay {inr(subtotal + fees + 350)}
                    </>
                  )}
                </Button>
              </motion.div>
            ) : (
              <Button variant="hero" size="lg" onClick={next}>
                Continue <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        )}
      </div>
    </SiteLayout>
  );
}

function Summary({
  item,
  days,
  subtotal,
  fees,
  from,
  to,
}: {
  item: ReturnType<typeof getEquipment>;
  days: number;
  subtotal: number;
  fees: number;
  from?: string;
  to?: string;
}) {
  if (!item) return null;
  return (
    <div className="surface-card h-fit p-6 space-y-3">
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        className="h-32 w-full rounded-2xl object-cover"
      />
      <div>
        <p className="font-semibold">{item.name}</p>
        <p className="text-xs text-muted-foreground">{item.location}</p>
      </div>
      {from && to ? (
        <div className="rounded-xl bg-muted/60 p-2.5 text-xs text-muted-foreground">
          <span className="block font-bold text-foreground">Selected Rental Period:</span>
          <span>📅 {from} → {to} ({days} {days === 1 ? "day" : "days"})</span>
        </div>
      ) : null}
      <dl className="space-y-2.5 border-t border-border pt-3 text-sm">
        <Row label={`${inr(item.price)} × ${days} ${days === 1 ? "day" : "days"}`} value={inr(subtotal)} />
        <Row label="Service & Insurance fee" value={inr(fees + 350)} />
        <div className="flex justify-between border-t border-border pt-3 text-base font-bold">
          <span>Total Payable</span>
          <span className="text-primary">{inr(subtotal + fees + 350)}</span>
        </div>
      </dl>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-muted-foreground">
      <dt>{label}</dt>
      <dd className="font-medium text-foreground">{value}</dd>
    </div>
  );
}

function Confirmation({
  item,
  days,
  total,
}: {
  item: NonNullable<ReturnType<typeof getEquipment>>;
  days: number;
  total: number;
}) {
  return (
    <div className="relative overflow-hidden text-center">
      <Confetti />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
        className="gradient-primary relative mx-auto grid h-24 w-24 place-items-center rounded-full shadow-glow"
      >
        <motion.span
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-primary/40"
        />
        <motion.svg
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          className="relative text-primary-foreground"
        >
          <motion.path
            d="M4 12.5 10 18.5 20 6.5"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.svg>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-7 text-2xl font-extrabold sm:text-3xl"
      >
        Booking confirmed
      </motion.h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Reference #AR-{Math.floor(100000 + Math.random() * 899999)} · The owner has been notified.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="surface-card mx-auto mt-9 max-w-md p-6 text-left shadow-float"
      >
        <div className="flex items-center gap-4">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="h-16 w-20 rounded-xl object-cover"
          />
          <div className="min-w-0">
            <p className="truncate font-semibold">{item.name}</p>
            <p className="text-xs text-muted-foreground">
              {days} days · {item.location}
            </p>
          </div>
        </div>
        <div className="mt-5 flex justify-between border-t border-border pt-4 text-sm">
          <span className="text-muted-foreground">Amount paid</span>
          <span className="font-bold text-primary">{inr(total)}</span>
        </div>
      </motion.div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild variant="hero">
          <Link to="/profile">View my rentals</Link>
        </Button>
        <Button asChild variant="soft">
          <Link to="/equipment">Keep browsing</Link>
        </Button>
      </div>
    </div>
  );
}

function Confetti() {
  const pieces = Array.from({ length: 26 });
  const tones = ["bg-primary", "bg-primary-glow", "bg-harvest", "bg-accent-foreground"];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {pieces.map((_, i) => (
        <motion.span
          key={i}
          className={cn("absolute top-8 h-2 w-2 rounded-[2px]", tones[i % tones.length])}
          style={{ left: `${(i * 3.8) % 100}%` }}
          initial={{ y: 0, opacity: 1, rotate: 0 }}
          animate={{ y: 420 + (i % 5) * 40, opacity: 0, rotate: 420 }}
          transition={{ duration: 2.2 + (i % 4) * 0.4, delay: (i % 8) * 0.06, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
