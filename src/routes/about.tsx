import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  BadgeCheck, CalendarCheck, ShieldCheck, Wallet,
  Sprout, Tractor, Users, HeartHandshake, ArrowRight, Sparkles,
} from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/site-layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AgriRent — Equipment Sharing for Farms" },
      {
        name: "description",
        content: "AgriRent connects farmers with nearby machine owners so expensive equipment never sits idle.",
      },
      { property: "og:title", content: "About AgriRent — Equipment Sharing for Farms" },
      { property: "og:description", content: "Our mission: make modern machinery affordable for every farm size." },
    ],
  }),
  component: About,
});

function About() {
  const stats = [
    { icon: BadgeCheck, label: "Verified Owners", value: "2,400+" },
    { icon: CalendarCheck, label: "Rentals Completed", value: "18,900+" },
    { icon: ShieldCheck, label: "Insured Machinery", value: "100%" },
    { icon: Wallet, label: "Saved by Farmers", value: "₹72 Cr+" },
  ];

  const values = [
    {
      icon: Tractor,
      title: "Put Idle Machinery to Work",
      desc: "A tractor sits unused up to 280 days a year. AgriRent unlocks new earnings for machine owners while helping smallholder farmers access heavy equipment without capital burden.",
    },
    {
      icon: HeartHandshake,
      title: "Fair & Transparent Pricing",
      desc: "Daily rates set directly by machine owners. Zero hidden booking fees, transparent delivery quotes, and automated payout transfers within 24 hours of job completion.",
    },
    {
      icon: ShieldCheck,
      title: "Multi-Step Verification & Insurance",
      desc: "Every listing is vetted against government RC records, chassis numbers, and physical inspection. Every rental includes comprehensive machinery insurance coverage.",
    },
  ];

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="OUR MISSION & VISION"
        title="Modern Agricultural Equipment for Every Acre"
        subtitle="AgriRent connects smallholder farmers with machine owners across 14 states, turning idle equipment into high-yield seasonal revenue while lowering costs for everyone."
      />

      {/* Stats Section */}
      <section className="border-b border-border/80 bg-primary-soft/30 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="surface-card p-6 rounded-3xl border border-border/80 hover:-translate-y-1.5 transition-all duration-300"
              >
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary/10 text-primary mb-4">
                  <s.icon className="h-5 w-5" />
                </span>
                <p className="font-display text-3xl font-extrabold">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.18em] text-primary uppercase">Why AgriRent</span>
          <h2 className="text-3xl font-extrabold mt-2 sm:text-4xl font-display">Built for Real Farmers & Real Seasons</h2>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
            Designed for low-bandwidth rural connectivity, tight harvest windows, and total peace of mind for both owners and hirers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="surface-card p-8 rounded-3xl border border-border/80 hover:shadow-float transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary mb-6">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-xl font-bold">{v.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="gradient-primary relative overflow-hidden rounded-4xl px-8 py-16 text-center shadow-float sm:px-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-primary-foreground sm:text-4xl font-display"
          >
            Ready to rent or list farm equipment?
          </motion.h2>
          <p className="mt-3 text-sm text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
            Join thousands of verified owners and farmers across India today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="glass" className="rounded-2xl font-bold">
              <Link to="/equipment">Explore Marketplace <ArrowRight className="h-4 w-4 ml-1" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-2xl border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/auth" search={{ mode: "register" }}>List Your Machine</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
