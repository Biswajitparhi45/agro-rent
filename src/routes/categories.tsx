import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Tractor } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/site-layout";
import { CategoryOrbits } from "@/components/site/category-orbits";
import { categories, inr } from "@/lib/equipment-data";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Equipment Categories | AgriRent" },
      {
        name: "description",
        content: "Explore tractors, harvesters, seeders, rotavators, cultivators, sprayers and mini tools available for rent.",
      },
      { property: "og:title", content: "Equipment Categories | AgriRent" },
      { property: "og:description", content: "Seven machine families, hundreds of verified listings." },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="EQUIPMENT FAMILY INDEX"
        title="Seven Families of Farm Machinery"
        subtitle="Explore machinery categories, check live availability counts, and filter equipment instantly for your seasonal farm needs."
      />

      {/* Orbit Visualization */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 border-b border-border/60">
        <CategoryOrbits />
      </section>

      {/* Category Grid Cards */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-extrabold font-display">All Machinery Categories</h2>
            <p className="text-xs text-muted-foreground mt-1">Select any category to view verified listings near you</p>
          </div>
          <Button asChild variant="soft" size="sm" className="hidden sm:inline-flex rounded-xl font-bold">
            <Link to="/equipment">View All Equipment <ArrowRight className="h-4 w-4 ml-1" /></Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="surface-card group p-6 rounded-3xl border border-border/80 hover:-translate-y-1.5 hover:shadow-float transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary text-xl font-bold group-hover:scale-110 transition-transform">
                    {c.name.charAt(0)}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-primary-soft text-primary text-[11px] font-bold">
                    {c.count} Listings
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">{c.name}</h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  High efficiency {c.name.toLowerCase()} machinery verified for seasonal farming operations.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-muted-foreground">
                  Verified listings across Punjab & Haryana
                </span>
                <Button asChild size="sm" variant="ghost" className="h-8 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                  <Link to="/equipment" search={{ category: c.name }}>
                    Browse →
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
