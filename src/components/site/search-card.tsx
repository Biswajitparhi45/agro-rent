import { useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { CalendarDays, Loader2, MapPin, Search, Tractor } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/lib/equipment-data";

export function SearchCard({ delay = 0 }: { delay?: number }) {
  const navigate = useNavigate();
  const [type, setType] = useState<string>("");
  const [busy, setBusy] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      navigate({ to: "/equipment", search: type ? { category: type } : {} });
    }, 500);
  };

  return (
    <motion.form
      onSubmit={submit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="glass mx-auto w-full max-w-4xl rounded-3xl p-3 shadow-float border border-border/80"
    >
      <div className="grid gap-2 md:grid-cols-[1.1fr_1.1fr_1fr_auto]">
        <Field icon={Tractor} label="Equipment type">
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="h-8 w-full border-0 bg-transparent px-0 text-sm font-semibold shadow-none focus:ring-0">
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((c) => (
                <SelectItem key={c.name} value={c.name}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field icon={MapPin} label="Location">
          <input
            placeholder="Village, district or state"
            className="h-8 w-full bg-transparent text-sm font-semibold outline-none placeholder:font-medium placeholder:text-muted-foreground/70"
          />
        </Field>

        <Field icon={CalendarDays} label="Rental date">
          <input
            type="date"
            className="h-8 w-full bg-transparent text-sm font-semibold outline-none text-foreground"
          />
        </Field>

        <motion.button
          type="submit"
          whileTap={{ scale: 0.97 }}
          className="gradient-primary flex h-full min-h-13 items-center justify-center gap-2 rounded-2xl px-8 text-sm font-bold text-primary-foreground shadow-glow transition-all hover:shadow-float cursor-pointer"
        >
          {busy ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <Search className="h-4 w-4" />
              <span>Search</span>
            </>
          )}
        </motion.button>
      </div>
    </motion.form>
  );
}

function Field({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Tractor;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="group flex min-w-0 items-center gap-3 rounded-2xl bg-card/90 border border-border/60 px-4 py-2.5 transition-all duration-300 focus-within:border-primary/50 focus-within:shadow-glow">
      <Icon className="h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-focus-within:scale-110" />
      <span className="min-w-0 flex-1">
        <span className="block text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
          {label}
        </span>
        {children}
      </span>
    </label>
  );
}
