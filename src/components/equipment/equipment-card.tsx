import { Link, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Heart, MapPin, Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { inr, type Equipment } from "@/lib/equipment-data";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/auth/context";

export function EquipmentCard({ item, index = 0 }: { item: Equipment; index?: number }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [fav, setFav] = useState(false);

  const handleBookClick = (e: React.MouseEvent) => {
    if (!user) {
      e.preventDefault();
      navigate({ to: "/auth", search: { mode: "login" } });
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: Math.min(index * 0.08, 0.5), ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group surface-card relative overflow-hidden transition-shadow duration-500 hover:shadow-float"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-108"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-foreground/45 to-transparent" />

        <span
          className={cn(
            "glass absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide uppercase",
            item.available ? "text-primary" : "text-destructive",
          )}
        >
          {item.available ? "Available now" : "Booked"}
        </span>

        <motion.button
          aria-label="Save to favourites"
          onClick={() => {
            if (!user) {
              toast.error("Please sign in to save favourites.");
              navigate({ to: "/auth", search: { mode: "login" } });
              return;
            }
            setFav((f) => !f);
            toast.success(fav ? "Removed from favourites" : "Saved to favourites");
          }}
          whileTap={{ scale: 0.85 }}
          animate={fav ? { scale: [1, 1.35, 0.92, 1.1, 1] } : {}}
          transition={{ duration: 0.5 }}
          className="glass absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full cursor-pointer"
        >
          <Heart
            className={cn(
              "h-4 w-4 transition-colors",
              fav ? "fill-destructive text-destructive" : "text-foreground",
            )}
          />
        </motion.button>

        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-primary-foreground">
          <Star className="h-3.5 w-3.5 fill-harvest text-harvest" />
          <span className="text-xs font-semibold">{item.rating}</span>
          <span className="text-xs opacity-80">({item.reviews})</span>
        </div>
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display truncate text-base font-bold">{item.name}</h3>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{item.location}</span>
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="font-display text-lg font-extrabold text-primary transition-[text-shadow] duration-500 group-hover:[text-shadow:0_0_18px_color-mix(in_oklab,var(--color-primary)_55%,transparent)]">
              {inr(item.price)}
            </p>
            <p className="text-[11px] text-muted-foreground">per day</p>
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-border pt-3">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground">
            {item.owner.charAt(0)}
          </span>
          <span className="min-w-0 flex-1 truncate text-xs text-muted-foreground">
            {item.owner}
          </span>
          <Button asChild size="sm" variant="soft" className="hover:gradient-primary hover:text-primary-foreground">
            <Link to="/equipment/$id" params={{ id: item.id }} onClick={handleBookClick}>
              Book now
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

export function EquipmentCardSkeleton() {
  return (
    <div className="surface-card overflow-hidden">
      <div className="shimmer aspect-[4/3] bg-muted" />
      <div className="space-y-3 p-5">
        <div className="shimmer h-4 w-3/4 rounded-full bg-muted" />
        <div className="shimmer h-3 w-1/2 rounded-full bg-muted" />
        <div className="shimmer h-9 w-full rounded-xl bg-muted" />
      </div>
    </div>
  );
}
