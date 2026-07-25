import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteLayout, PageHeader } from "@/components/site/site-layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AgriRent — Equipment Sharing for Farms" },
      {
        name: "description",
        content:
          "AgriRent connects farmers with nearby machine owners so expensive equipment never sits idle.",
      },
      { property: "og:title", content: "About AgriRent — Equipment Sharing for Farms" },
      {
        property: "og:description",
        content: "Our mission: make modern machinery affordable for every farm size.",
      },
    ],
  }),
  component: About,
});

function About() {
  const values = [
    { t: "Idle machines, working again", d: "A tractor sits unused 280 days a year. We put those days back to work for owners and farmers alike." },
    { t: "Fair, transparent pricing", d: "Daily rates set by owners, no hidden commissions, and payouts within 24 hours of completion." },
    { t: "Verified on both sides", d: "Identity, land records and service history are checked before a listing goes live." },
  ];
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About"
        title="Machinery access shouldn't depend on farm size"
        subtitle="AgriRent is a rental marketplace built with co-operatives across fourteen states, designed for low-bandwidth villages and high-stakes harvest windows."
      />
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 md:grid-cols-3">
        {values.map((v, i) => (
          <motion.div
            key={v.t}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="surface-card p-7 transition-transform duration-500 hover:-translate-y-1.5 hover:shadow-float"
          >
            <h2 className="font-display text-lg font-bold">{v.t}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
          </motion.div>
        ))}
      </div>
    </SiteLayout>
  );
}
