import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useMemo, useState, useEffect } from "react";
import {
  Search, SlidersHorizontal, RotateCcw, CheckCircle2, Star,
  MapPin, ShieldCheck, Zap, Fuel, ArrowRight, Phone, Mail,
  Facebook, Twitter, Youtube, Globe, Sparkles, Filter, X
} from "lucide-react";
import { z } from "zod";
import { SiteLayout } from "@/components/site/site-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { categories, getAllEquipment, inr, type Equipment } from "@/lib/equipment-data";
import fallbackImage from "@/assets/eq-tractor.jpg";
import { useAuth } from "@/lib/auth/context";

export const Route = createFileRoute("/equipment/")({
  validateSearch: z.object({ category: z.string().optional() }),
  head: () => ({
    meta: [
      { title: "Equipment Rentals — Rent Verified Farm Machinery | AgriRent" },
      {
        name: "description",
        content: "Browse, filter and rent tractors, harvesters, seeders and heavy farm machinery from verified owners.",
      },
      { property: "og:title", content: "Equipment Rentals | AgriRent" },
      { property: "og:description", content: "Find the best farm equipment for your season." },
    ],
  }),
  component: EquipmentListing,
});

function EquipmentListing() {
  const { category } = Route.useSearch();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(category || "All");
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sort, setSort] = useState("recommended");
  const [allEquipment, setAllEquipment] = useState<Equipment[]>(() => getAllEquipment());

  useEffect(() => {
    const sync = () => setAllEquipment(getAllEquipment());
    window.addEventListener("agrirent_equipment_updated", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("agrirent_equipment_updated", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const results = useMemo(() => {
    let list = allEquipment.filter(
      (e) =>
        e.available &&
        e.price <= maxPrice &&
        (selectedCategory === "All" || e.category.toLowerCase() === selectedCategory.toLowerCase()) &&
        (searchQuery === "" ||
          e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          e.location.toLowerCase().includes(searchQuery.toLowerCase())),
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [allEquipment, maxPrice, selectedCategory, sort, searchQuery]);

  const handleRentClick = (e: React.MouseEvent, itemId: string) => {
    if (!user) {
      e.preventDefault();
      navigate({ to: "/auth", search: { mode: "login" } });
    }
  };

  return (
    <SiteLayout bare>
      {/* ══ SPLIT HERO SECTION (MATCHING STRUCTURE FROM REFERENCE IMAGE) ══ */}
      <section className="relative bg-background overflow-hidden border-b border-border/80 pt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch min-h-[460px]">
            
            {/* Left Hero Content & Socials (7 Cols) */}
            <div className="lg:col-span-7 flex items-center py-8 relative">
              


              {/* Main Left Headline & Search */}
              <div className="space-y-6 max-w-xl">
                {/* Yellow Brand Badge */}
                <div className="inline-flex items-center gap-2 bg-amber-400 text-neutral-950 font-extrabold px-3.5 py-1.5 rounded-xl text-xs shadow-sm">
                  <Sparkles className="h-3.5 w-3.5" /> Equipment Rentals Marketplace
                </div>

                <h1 className="text-4xl sm:text-5xl font-extrabold font-display leading-[1.1] text-foreground tracking-tight">
                  Trying To Find The <br />
                  <span className="text-primary underline decoration-primary/40 decoration-wavy decoration-2">Best Equipment</span>
                </h1>

                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Rent high-performance tractors, combine harvesters, rotavators, seeders and field machinery directly from verified local equipment owners.
                </p>

                {/* Compact Search Console */}
                <div className="flex items-center gap-2 bg-card p-2 rounded-2xl border-2 border-border/80 shadow-soft max-w-md">
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search tractor, location, brand..."
                    className="border-0 focus-visible:ring-0 text-xs h-10 bg-transparent"
                  />
                  <Button
                    onClick={() => {}}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-10 px-5 shrink-0 font-bold shadow-glow"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Hero Panel (Golden Emerald Backdrop + Cutout Image) */}
            <div className="lg:col-span-5 relative flex items-center justify-center bg-gradient-to-br from-amber-400 via-amber-500 to-emerald-700 rounded-3xl lg:rounded-l-3xl overflow-hidden p-8 shadow-float my-4">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_70%)]" />
              
              {/* Featured Machinery Image */}
              <motion.img
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                src={fallbackImage}
                alt="Featured Farm Equipment"
                className="relative z-10 w-full max-h-[360px] object-cover rounded-2xl shadow-2xl border-4 border-white/30"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ══ FEATURE EQUIPMENT SECTION (4-COLUMN CARD GRID STRUCTURE) ══ */}
      <section className="py-16 mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border/60 pb-6 mb-10">
          <div>
            <h2 className="text-3xl font-extrabold font-display text-foreground tracking-tight">Feature Equipment</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Hand-checked listings with service records, live availability and same-week delivery.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Sort Selector */}
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="h-10 w-44 rounded-xl text-xs font-bold bg-card border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="rating">Top Rated (★)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
          {["All", ...categories.map((c) => c.name)].map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-extrabold transition-all cursor-pointer border shrink-0 ${
                  active
                    ? "bg-primary text-primary-foreground border-primary shadow-glow"
                    : "bg-card text-foreground border-border/80 hover:border-primary/60"
                }`}
              >
                {cat === "All" ? "⚡ All Machinery" : cat}
              </button>
            );
          })}
        </div>

        {/* Equipment Grid (Matching Reference Card Structure) */}
        {results.length === 0 ? (
          <div className="surface-card rounded-3xl p-16 text-center border border-border space-y-3">
            <Search className="h-10 w-10 text-muted-foreground mx-auto" />
            <h3 className="text-lg font-bold">No Machinery Found</h3>
            <p className="text-xs text-muted-foreground">Try selecting "All Machinery" or clear search keywords.</p>
            <Button onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }} variant="hero" size="sm" className="rounded-xl font-bold">
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((item, i) => {
              const brandName = item.name.split(" ")[0] || "AgriRent";
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group bg-card rounded-2xl border border-border/80 overflow-hidden shadow-sm hover:shadow-float transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                      <img
                        src={item.image || fallbackImage}
                        alt={item.name}
                        loading="lazy"
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackImage; }}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md bg-neutral-950/80 backdrop-blur-md text-[10px] font-extrabold text-amber-400">
                        {item.available ? "AVAILABLE" : "RENTED"}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 space-y-2">
                      <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">{brandName}</p>
                      <h3 className="font-extrabold text-base text-foreground font-display leading-tight truncate">
                        {item.name}
                      </h3>
                      
                      <div className="space-y-1 text-xs text-muted-foreground pt-1">
                        <p className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span className="truncate">{item.location}</span>
                        </p>
                        <p className="flex items-center gap-1.5 text-[11px]">
                          ⚙️ {item.power || "Standard"} · {item.year} Model
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Row: Rent Now Link & Daily Rate */}
                  <div className="p-4 pt-0 flex items-center justify-between border-t border-border/40 mt-3">
                    <Link
                      to="/equipment/$id"
                      params={{ id: item.id }}
                      onClick={(e) => handleRentClick(e, item.id)}
                      className="text-xs font-extrabold text-primary underline decoration-primary/40 hover:text-primary/80 transition-colors"
                    >
                      Rent Now
                    </Link>
                    <div className="text-right">
                      <span className="text-base font-extrabold text-primary font-display">{inr(item.price)}</span>
                      <span className="text-[10px] text-muted-foreground ml-1">/ Day</span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
