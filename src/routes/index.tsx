import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  ShieldCheck,
  Wallet,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import heroLandscape from "@/assets/hero-landscape.jpg";
import { SiteLayout } from "@/components/site/site-layout";
import { SearchCard } from "@/components/site/search-card";
import { CategoryOrbits } from "@/components/site/category-orbits";
import { DriftingClouds, FloatingLeaves, FlyingBirds } from "@/components/site/ambient";
import {
  EquipmentCard,
  EquipmentCardSkeleton,
} from "@/components/equipment/equipment-card";
import { Button } from "@/components/ui/button";
import { equipment } from "@/lib/equipment-data";
import { useAuth } from "@/lib/auth/context";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AgriRent — Rent Agricultural Equipment Easily" },
      {
        name: "description",
        content:
          "Rent tractors, harvesters, rotavators, seeders and farming tools from trusted owners near you. Transparent daily pricing and insured bookings.",
      },
      { property: "og:title", content: "AgriRent — Rent Agricultural Equipment Easily" },
      {
        property: "og:description",
        content: "Browse, book and rent verified farm machinery from owners nearby.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <SiteLayout bare>
      <Hero />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHead
          eyebrow="Browse by category"
          title="Every machine your season needs"
          copy="From 45HP compacts to 12-metre boom sprayers — listed, verified and ready within a day's ride."
        />
        <div className="mt-12">
          <CategoryOrbits />
        </div>
      </section>

      <section className="border-y border-border bg-primary-soft/40">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: BadgeCheck, label: "Verified owners", value: "2,400+" },
              { icon: CalendarCheck, label: "Bookings completed", value: "18,900" },
              { icon: ShieldCheck, label: "Insured rentals", value: "100%" },
              { icon: Wallet, label: "Saved vs. buying", value: "₹72 Cr" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="surface-card p-6 transition-transform duration-500 hover:-translate-y-1.5 hover:shadow-float"
              >
                <s.icon className="h-5 w-5 text-primary" />
                <p className="font-display mt-5 text-3xl font-extrabold">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <SectionHead
            eyebrow="Featured this week"
            title="Premium machines near you"
            copy="Hand-checked listings with service records, live availability and same-week delivery."
          />
          <Button asChild variant="soft" className="hidden shrink-0 sm:inline-flex">
            <Link to="/equipment">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <EquipmentCardSkeleton key={i} />)
            : equipment.map((item, i) => (
                <EquipmentCard key={item.id} item={item} index={i} />
              ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="gradient-primary relative overflow-hidden rounded-4xl px-8 py-16 text-center shadow-float sm:px-16">
          <FloatingLeaves />
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-2xl text-3xl font-extrabold text-primary-foreground sm:text-4xl"
          >
            Own machinery? Let it earn between seasons.
          </motion.h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85">
            List once, set availability, and get paid within 24 hours of every completed rental.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            {user ? (
              user.role === "owner" ? (
                <Button asChild size="lg" variant="glass">
                  <Link to="/dashboard">Open Owner Dashboard</Link>
                </Button>
              ) : user.role === "admin" ? (
                <Button asChild size="lg" variant="glass">
                  <Link to="/admin">Open Admin Panel</Link>
                </Button>
              ) : (
                <Button asChild size="lg" variant="glass">
                  <Link to="/auth" search={{ mode: "register" }}>
                    Register as Owner
                  </Link>
                </Button>
              )
            ) : (
              <>
                <Button asChild size="lg" variant="glass">
                  <Link to="/auth" search={{ mode: "register" }}>
                    List Machinery as Owner
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Link to="/auth">Sign In</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function SectionHead({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-2xl">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-xs font-semibold tracking-[0.18em] text-primary uppercase"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="mt-3 text-3xl font-extrabold sm:text-4xl"
      >
        {title}
      </motion.h2>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{copy}</p>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="gradient-hero absolute inset-0"
      />
      <motion.img
        src={heroLandscape}
        alt="Rolling farmland at sunrise"
        width={1920}
        height={1088}
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 0.55, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 bottom-0 h-[62%] w-full object-cover [mask-image:linear-gradient(to_bottom,transparent,black_38%)]"
      />
      <DriftingClouds />
      <FlyingBirds />
      <FloatingLeaves />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="glass mx-auto flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-primary"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span>#1 Farm Machinery Sharing Marketplace</span>
          <span className="h-3 w-px bg-border" />
          <span className="text-muted-foreground font-normal">486+ Machines Available Today</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-4xl text-center text-4xl leading-[1.05] font-extrabold sm:text-6xl lg:text-7xl"
        >
          Rent Agricultural <span className="text-gradient">Equipment</span> Easily
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Helping farmers rent tractors, harvesters, seeders and tools directly from
          verified owners nearby. Transparent daily pricing & insured bookings.
        </motion.p>

        <div className="mt-12">
          <SearchCard delay={0.55} />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            "Zero Booking Fees",
            "48h Free Cancellation",
            "100% Insured Rentals",
            "Verified Machinery",
          ].map((text) => (
            <span
              key={text}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/80 px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-sm backdrop-blur-md"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
