import { Link, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Heart, MapPin, Star, Zap, ShieldCheck, UserCheck, Check, Layers } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { inr, type Equipment } from "@/lib/equipment-data";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/auth/context";

export function EquipmentCard({
  item,
  index = 0,
  isCompared = false,
  onToggleCompare,
}: {
  item: Equipment;
  index?: number;
  isCompared?: boolean;
  onToggleCompare?: (item: Equipment) => void;
}) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [fav, setFav] = useState(false);

  const handleBookClick = (e: React.MouseEvent) => {
    if (!user) {
      e.preventDefault();
      navigate({ to: "/auth", search: { mode: "login" } });
    }
  };

  // Mock distance & hourly price for marketplace richness
  const distanceKm = Math.floor(4 + (index * 7) % 24);
  const hourlyRate = Math.round(item.price / 7);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.06, 0.4), ease: [0.22, 1, 0.36, 1] }}
      className="group surface-card relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-float"
    >
      {/* Top Image Section */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Status Pills Top Left */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span
            className={cn(
              "px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide backdrop-blur-md shadow-sm border",
              item.available
                ? "bg-emerald-500/90 text-white border-emerald-400/30"
                : "bg-black/70 text-white/80 border-white/20",
            )}
          >
            {item.available ? "⚡ Instant Book" : "Booked"}
          </span>

          <span className="bg-black/40 backdrop-blur-md text-white border border-white/20 px-2 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-1">
            <ShieldCheck className="h-3 w-3 text-emerald-400" /> Insured
          </span>
        </div>

        {/* Top Right Controls (Favorite + Compare) */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          {onToggleCompare && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleCompare(item);
              }}
              title="Compare specs"
              className={cn(
                "h-8 px-2 rounded-full text-[10px] font-bold flex items-center gap-1 backdrop-blur-md transition-all cursor-pointer border",
                isCompared
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-black/50 text-white border-white/20 hover:bg-black/70",
              )}
            >
              <Layers className="h-3 w-3" />
              {isCompared ? "Compared" : "Compare"}
            </button>
          )}

          <motion.button
            aria-label="Save to favourites"
            onClick={(e) => {
              e.stopPropagation();
              if (!user) {
                toast.error("Please sign in to save favourites.");
                navigate({ to: "/auth", search: { mode: "login" } });
                return;
              }
              setFav((f) => !f);
              toast.success(fav ? "Removed from wishlist" : "Saved to wishlist");
            }}
            whileTap={{ scale: 0.85 }}
            animate={fav ? { scale: [1, 1.3, 1] } : {}}
            className="h-8 w-8 grid place-items-center rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white cursor-pointer hover:bg-black/70 transition-colors"
          >
            <Heart
              className={cn(
                "h-3.5 w-3.5 transition-colors",
                fav ? "fill-red-500 text-red-500" : "text-white",
              )}
            />
          </motion.button>
        </div>

        {/* Rating Overlay Bottom Left */}
        <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 text-white z-10">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs font-bold">{item.rating}</span>
          <span className="text-[11px] text-white/70">({item.reviews} reviews)</span>
        </div>

        {/* Distance Badge Bottom Right */}
        <div className="absolute bottom-2.5 right-3 text-[10px] font-bold text-white/90 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-md">
          📍 {distanceKm} km away
        </div>
      </div>

      {/* Details Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display font-bold text-base leading-snug text-foreground group-hover:text-primary transition-colors">
              {item.name}
            </h3>
          </div>

          <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
            <span className="truncate">{item.location}</span>
          </p>

          {/* Quick Specs Chips */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            <span className="bg-muted px-2 py-0.5 rounded-md text-[10px] font-semibold text-muted-foreground">
              ⚡ {item.power}
            </span>
            <span className="bg-muted px-2 py-0.5 rounded-md text-[10px] font-semibold text-muted-foreground">
              ⛽ {item.fuel}
            </span>
            <span className="bg-muted px-2 py-0.5 rounded-md text-[10px] font-semibold text-muted-foreground">
              📅 {item.year} Model
            </span>
          </div>
        </div>

        {/* Footer Pricing & CTA */}
        <div className="pt-3 border-t border-border/60 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-lg font-extrabold text-primary">{inr(item.price)}</span>
              <span className="text-[10px] text-muted-foreground font-medium">/ day</span>
            </div>
            <p className="text-[10px] text-muted-foreground font-mono">or ₹{hourlyRate}/hr</p>
          </div>

          <Button asChild size="sm" variant="hero" className="rounded-xl px-4 text-xs font-bold shadow-glow">
            <Link to="/equipment/$id" params={{ id: item.id }} onClick={handleBookClick}>
              Rent Now
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

export function EquipmentCardSkeleton() {
  return (
    <div className="surface-card rounded-3xl overflow-hidden border border-border/80 p-4 space-y-3">
      <div className="shimmer aspect-[16/10] rounded-2xl bg-muted" />
      <div className="space-y-2">
        <div className="shimmer h-4 w-3/4 rounded-full bg-muted" />
        <div className="shimmer h-3 w-1/2 rounded-full bg-muted" />
        <div className="shimmer h-10 w-full rounded-xl bg-muted mt-4" />
      </div>
    </div>
  );
}
