import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import {
  SlidersHorizontal,
  Sprout,
  X,
  Search,
  RotateCcw,
  CheckCircle2,
  Star,
  Filter,
  Tractor,
  Wheat,
  Sparkles,
  Zap,
} from "lucide-react";
import { z } from "zod";
import { SiteLayout, PageHeader } from "@/components/site/site-layout";
import { EquipmentCard } from "@/components/equipment/equipment-card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories, equipment, inr } from "@/lib/equipment-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/equipment/")({
  validateSearch: z.object({ category: z.string().optional() }),
  head: () => ({
    meta: [
      { title: "Browse Farm Equipment for Rent | AgriRent" },
      {
        name: "description",
        content:
          "Filter tractors, harvesters, sprayers and tillage equipment by price, location, rating and availability.",
      },
      { property: "og:title", content: "Browse Farm Equipment for Rent | AgriRent" },
      {
        property: "og:description",
        content: "Live availability and daily pricing on verified farm machinery.",
      },
    ],
  }),
  component: EquipmentListing,
});

function EquipmentListing() {
  const { category } = Route.useSearch();
  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(8000);
  const [types, setTypes] = useState<string[]>(category ? [category] : []);
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [minRating, setMinRating] = useState("0");
  const [sort, setSort] = useState("recommended");
  const [panelOpen, setPanelOpen] = useState(false);

  const results = useMemo(() => {
    let list = equipment.filter(
      (e) =>
        e.price <= maxPrice &&
        (types.length === 0 || types.includes(e.category)) &&
        (!onlyAvailable || e.available) &&
        e.rating >= Number(minRating) &&
        (searchQuery === "" ||
          e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          e.location.toLowerCase().includes(searchQuery.toLowerCase())),
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [maxPrice, types, onlyAvailable, minRating, sort, searchQuery]);

  const toggleType = (name: string) =>
    setTypes((t) => (t.includes(name) ? t.filter((x) => x !== name) : [...t, name]));

  const resetFilters = () => {
    setTypes([]);
    setMaxPrice(8000);
    setOnlyAvailable(false);
    setMinRating("0");
    setSearchQuery("");
  };

  const filterSidebar = (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="glass surface-card space-y-6 p-6 rounded-3xl border border-border/80 backdrop-blur-xl bg-card/90 shadow-soft"
    >
      <div className="flex items-center justify-between border-b border-border/60 pb-4">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-xl bg-primary/15 text-primary font-bold">
            <Filter className="h-4 w-4" />
          </span>
          <h2 className="font-display text-base font-bold">Filter Machinery</h2>
        </div>
        {(types.length > 0 || onlyAvailable || minRating !== "0" || searchQuery || maxPrice < 8000) && (
          <button
            onClick={resetFilters}
            className="text-xs font-bold text-primary hover:underline flex items-center gap-1 cursor-pointer bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20"
          >
            <RotateCcw className="h-3 w-3" /> Reset
          </button>
        )}
      </div>

      {/* Keyword Search */}
      <div>
        <Label className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-wider">
          Search Keyword / Location
        </Label>
        <div className="relative mt-2">
          <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tractor, Punjab..."
            className="pl-10 pr-8 h-9 text-xs rounded-xl border-border/80 bg-background/50 focus:bg-background"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-2.5 text-muted-foreground hover:text-foreground cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Equipment Category Grid Chips */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <Label className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-wider">
            Categories
          </Label>
          {types.length > 0 && (
            <button onClick={() => setTypes([])} className="text-[10px] font-semibold text-primary hover:underline cursor-pointer">
              Clear ({types.length})
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {categories.map((c) => {
            const active = types.includes(c.name);
            return (
              <button
                type="button"
                key={c.name}
                onClick={() => toggleType(c.name)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border",
                  active
                    ? "border-primary bg-primary text-primary-foreground shadow-glow font-bold"
                    : "border-border/70 bg-card/60 text-foreground hover:border-primary/50 hover:bg-accent",
                )}
              >
                <span>{c.name}</span>
                <span className={cn("text-[10px] px-1.5 py-0.2 rounded-full font-mono", active ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground")}>
                  {c.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Slider */}
      <div className="space-y-2 border-t border-border/60 pt-4">
        <div className="flex items-center justify-between">
          <Label className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-wider">
            Max Daily Rate
          </Label>
          <span className="text-xs font-extrabold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
            {inr(maxPrice)}
          </span>
        </div>
        <Slider
          value={[maxPrice]}
          onValueChange={(v) => setMaxPrice(v[0])}
          min={500}
          max={8000}
          step={100}
          className="mt-3 cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
          <span>₹500</span>
          <span>₹8,000+</span>
        </div>
      </div>

      {/* Rating Pill Selector */}
      <div className="space-y-2 border-t border-border/60 pt-4">
        <Label className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-wider">
          Minimum Rating
        </Label>
        <div className="grid grid-cols-4 gap-1">
          {[
            { val: "0", label: "Any" },
            { val: "4.5", label: "4.5★" },
            { val: "4.7", label: "4.7★" },
            { val: "4.8", label: "4.8★" },
          ].map((r) => {
            const active = minRating === r.val;
            return (
              <button
                type="button"
                key={r.val}
                onClick={() => setMinRating(r.val)}
                className={cn(
                  "py-1.5 rounded-xl text-xs font-bold transition-all text-center cursor-pointer border",
                  active
                    ? "border-primary bg-primary/15 text-primary shadow-sm"
                    : "border-border/70 bg-card/50 text-muted-foreground hover:border-primary/40 hover:bg-accent",
                )}
              >
                {r.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Availability Toggle */}
      <div className="flex items-center justify-between rounded-2xl border border-border/80 bg-card/60 p-3.5 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-500/15 text-emerald-600">
            <CheckCircle2 className="h-3.5 w-3.5" />
          </span>
          <span className="text-xs font-bold">Available Now Only</span>
        </div>
        <Switch checked={onlyAvailable} onCheckedChange={setOnlyAvailable} />
      </div>

      <Button
        variant="hero"
        size="default"
        className="w-full rounded-xl font-bold shadow-glow lg:hidden"
        onClick={() => setPanelOpen(false)}
      >
        Show {results.length} Machines
      </Button>
    </motion.aside>
  );

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="LIVE EQUIPMENT MARKETPLACE"
        title="Find the Right Machine for Every Job"
        subtitle="Browse verified tractors, harvesters, tillers, and sprayers from certified owners across 14 states with instant booking."
      />

      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        {/* Horizontal Top Category Pill Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-border/60 mb-6">
          <button
            onClick={() => setTypes([])}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold shrink-0 transition-all cursor-pointer border",
              types.length === 0
                ? "border-primary bg-primary text-primary-foreground shadow-glow"
                : "border-border/80 bg-card/80 text-foreground hover:bg-accent",
            )}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>All Machines</span>
            <span className="text-[10px] opacity-80 font-mono">({equipment.length})</span>
          </button>

          {categories.map((c) => {
            const active = types.includes(c.name);
            return (
              <button
                key={c.name}
                onClick={() => toggleType(c.name)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold shrink-0 transition-all cursor-pointer border",
                  active
                    ? "border-primary bg-primary text-primary-foreground shadow-glow"
                    : "border-border/80 bg-card/80 text-foreground hover:bg-accent",
                )}
              >
                <span>{c.name}</span>
                <span className={cn("text-[10px] px-1.5 py-0.2 rounded-full font-mono", active ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground")}>
                  {c.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] items-start">
          {/* Desktop Static Filter Sidebar */}
          <div className="hidden lg:block sticky top-24 self-start z-20">{filterSidebar}</div>

          {/* Results Main Section */}
          <div>
            {/* Top Results Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-4">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Showing <span className="text-primary font-extrabold">{results.length}</span> verified machines
                </p>

                {/* Active Filter Pills */}
                {(types.length > 0 || onlyAvailable || minRating !== "0" || searchQuery) && (
                  <div className="flex flex-wrap items-center gap-1.5 mt-2">
                    {types.map((t) => (
                      <Badge key={t} variant="secondary" className="text-[11px] gap-1 cursor-pointer hover:bg-destructive/15 hover:text-destructive transition-colors" onClick={() => toggleType(t)}>
                        {t} <X className="h-3 w-3" />
                      </Badge>
                    ))}
                    {onlyAvailable && (
                      <Badge variant="secondary" className="text-[11px] gap-1 cursor-pointer hover:bg-destructive/15 hover:text-destructive transition-colors" onClick={() => setOnlyAvailable(false)}>
                        Available Now <X className="h-3 w-3" />
                      </Badge>
                    )}
                    {minRating !== "0" && (
                      <Badge variant="secondary" className="text-[11px] gap-1 cursor-pointer hover:bg-destructive/15 hover:text-destructive transition-colors" onClick={() => setMinRating("0")}>
                        {minRating}+ ★ <X className="h-3 w-3" />
                      </Badge>
                    )}
                    {searchQuery && (
                      <Badge variant="secondary" className="text-[11px] gap-1 cursor-pointer hover:bg-destructive/15 hover:text-destructive transition-colors" onClick={() => setSearchQuery("")}>
                        "{searchQuery}" <X className="h-3 w-3" />
                      </Badge>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden gap-1.5 rounded-xl font-bold"
                  onClick={() => setPanelOpen(true)}
                >
                  <SlidersHorizontal className="h-4 w-4 text-primary" /> Filter
                </Button>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-muted-foreground hidden sm:inline">Sort:</span>
                  <Select value={sort} onValueChange={setSort}>
                    <SelectTrigger className="h-9 w-44 rounded-xl text-xs font-medium">
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
            </div>

            {/* Results Grid */}
            {results.length === 0 ? (
              <EmptyState resetFilters={resetFilters} />
            ) : (
              <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {results.map((item, i) => (
                  <EquipmentCard key={item.id} item={item} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {panelOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setPanelOpen(false)}
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-y-0 left-0 w-[90%] max-w-sm overflow-y-auto bg-background p-4 shadow-float"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-sm">Filter Equipment</span>
              <button
                onClick={() => setPanelOpen(false)}
                className="grid h-8 w-8 place-items-center rounded-xl border border-border"
                aria-label="Close filters"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            {filterSidebar}
          </motion.div>
        </div>
      )}
    </SiteLayout>
  );
}

function EmptyState({ resetFilters }: { resetFilters: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="surface-card mt-8 grid place-items-center gap-4 px-6 py-20 text-center rounded-3xl border border-border/80"
    >
      <motion.div
        animate={{ rotate: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="grid h-16 w-16 place-items-center rounded-2xl bg-primary/10 text-primary"
      >
        <Sprout className="h-8 w-8" />
      </motion.div>
      <h3 className="font-display text-xl font-extrabold">No Matching Equipment Found</h3>
      <p className="max-w-sm text-xs text-muted-foreground leading-relaxed">
        We couldn't find any machines matching your selected filters. Try widening your price slider or clearing category selections.
      </p>
      <Button variant="hero" size="sm" onClick={resetFilters} className="mt-2">
        <RotateCcw className="h-3.5 w-3.5 mr-1" /> Reset All Filters
      </Button>
    </motion.div>
  );
}
