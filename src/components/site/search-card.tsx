import { useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { Loader2, Search, Tractor, Sparkles, MapPin } from "lucide-react";
import { categories } from "@/lib/equipment-data";

export function SearchCard({ delay = 0 }: { delay?: number }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      navigate({ to: "/equipment", search: query ? { category: query } : {} });
    }, 400);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto w-full max-w-3xl space-y-4"
    >
      <form
        onSubmit={submit}
        className="surface-card flex items-center gap-2 rounded-3xl p-2.5 shadow-float border border-border/80 bg-card/95 backdrop-blur-xl"
      >
        <div className="flex flex-1 items-center gap-3 px-4 py-1.5">
          <Search className="h-5 w-5 text-primary shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tractor, harvester, location, or brand..."
            className="w-full bg-transparent text-sm sm:text-base font-semibold text-foreground outline-none placeholder:font-medium placeholder:text-muted-foreground/70"
          />
        </div>

        <motion.button
          type="submit"
          whileTap={{ scale: 0.97 }}
          className="gradient-primary flex h-12 items-center justify-center gap-2 rounded-2xl px-7 text-sm font-extrabold text-primary-foreground shadow-glow transition-all hover:shadow-float cursor-pointer shrink-0"
        >
          {busy ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <Sparkles className="h-4 w-4" />
              <span>Search Machinery</span>
            </>
          )}
        </motion.button>
      </form>

      {/* Quick Category Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
        <span className="text-muted-foreground text-[11px] uppercase tracking-wider font-extrabold mr-1">Popular:</span>
        {categories.slice(0, 5).map((c) => (
          <button
            key={c.name}
            type="button"
            onClick={() => navigate({ to: "/equipment", search: { category: c.name } })}
            className="rounded-full border border-border/80 bg-card/80 px-3.5 py-1 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:bg-accent cursor-pointer"
          >
            {c.name}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
