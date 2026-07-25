import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { MapPin, Star } from "lucide-react";
import { SiteLayout } from "@/components/site/site-layout";
import { Button } from "@/components/ui/button";
import { EquipmentCard } from "@/components/equipment/equipment-card";
import { equipment, inr } from "@/lib/equipment-data";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "My Profile & Rentals | AgriRent" },
      {
        name: "description",
        content: "View your rental history, saved machines and account settings on AgriRent.",
      },
      { property: "og:title", content: "My Profile & Rentals | AgriRent" },
      { property: "og:description", content: "Rental history and favourites in one place." },
    ],
  }),
  component: Profile,
});

function Profile() {
  const [expanded, setExpanded] = useState(false);

  return (
    <SiteLayout>
      <div className="gradient-hero border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-5 px-5 py-14 sm:px-8">
          <div className="flex min-w-0 items-center gap-5">
            <motion.span
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="gradient-primary grid h-20 w-20 shrink-0 place-items-center rounded-3xl text-2xl font-extrabold text-primary-foreground shadow-glow"
            >
              S
            </motion.span>
            <div className="min-w-0">
              <h1 className="truncate text-2xl font-extrabold sm:text-3xl">Suresh Mahajan</h1>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> Kolhapur, Maharashtra
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Star className="h-4 w-4 fill-harvest text-harvest" /> 4.9 renter rating · 23
                rentals
              </p>
            </div>
          </div>
          <motion.div layout>
            <Button variant="hero" onClick={() => setExpanded((e) => !e)}>
              {expanded ? "Close editor" : "Edit profile"}
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8">
            <div className="surface-card grid gap-4 p-6 sm:grid-cols-3">
              {["Full name", "Phone", "District"].map((f) => (
                <label key={f} className="text-sm">
                  <span className="text-xs text-muted-foreground">{f}</span>
                  <input className="mt-2 h-10 w-full rounded-xl border border-border bg-card px-3 outline-none focus:ring-2 focus:ring-ring/40" />
                </label>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-xl font-bold">Rental history</h2>
        <div className="mt-5 space-y-3">
          {equipment.slice(0, 3).map((e, i) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              className="surface-card grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-4"
            >
              <div className="flex min-w-0 items-center gap-4">
                <img src={e.image} alt="" loading="lazy" className="h-14 w-18 shrink-0 rounded-xl object-cover" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{e.name}</p>
                  <p className="text-xs text-muted-foreground">Completed · 3 days</p>
                </div>
              </div>
              <span className="shrink-0 text-sm font-bold text-primary">{inr(e.price * 3)}</span>
            </motion.div>
          ))}
        </div>

        <h2 className="font-display mt-14 text-xl font-bold">Favourite equipment</h2>
        <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {equipment.slice(2, 5).map((e, i) => (
            <EquipmentCard key={e.id} item={e} index={i} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
