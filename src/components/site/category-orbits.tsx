import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  Cog,
  Droplets,
  Shovel,
  Sprout,
  Tractor,
  Wheat,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { categories } from "@/lib/equipment-data";

const icons: Record<string, LucideIcon> = {
  Tractor,
  Wheat,
  Sprout,
  Cog,
  Shovel,
  Droplets,
  Wrench,
};

export function CategoryOrbits() {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-7">
      {categories.map((c, i) => {
        const Icon = icons[c.icon] ?? Tractor;
        return (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/equipment"
              search={{ category: c.name }}
              className="group flex flex-col items-center gap-3 text-center"
            >
              <span className="relative grid h-20 w-20 place-items-center rounded-full bg-card shadow-soft transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5 group-hover:rotate-6 group-hover:shadow-glow">
                <span className="absolute inset-0 scale-75 rounded-full bg-accent opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />
                <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 gradient-primary" />
                <Icon className="relative h-7 w-7 text-primary transition-all duration-500 group-hover:scale-115 group-hover:text-primary-foreground" />
              </span>
              <span className="translate-y-1 text-sm font-semibold transition-transform duration-500 group-hover:translate-y-0">
                {c.name}
              </span>
              <span className="-mt-2 text-xs text-muted-foreground opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-100">
                {c.count} listings
              </span>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
