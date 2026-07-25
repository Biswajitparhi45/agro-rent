import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { SiteLayout, PageHeader } from "@/components/site/site-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AgriRent Support" },
      {
        name: "description",
        content: "Talk to the AgriRent team about rentals, listings, payouts or partnerships.",
      },
      { property: "og:title", content: "Contact AgriRent Support" },
      { property: "og:description", content: "Support in seven languages, seven days a week." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="We answer within one hour"
        subtitle="Support in seven languages, seven days a week — during harvest season, around the clock."
      />
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <motion.form
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Message sent — we'll reply shortly.");
          }}
          className="surface-card space-y-5 p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="n">Name</Label>
              <Input id="n" placeholder="Your name" className="mt-2" required />
            </div>
            <div>
              <Label htmlFor="e">Email</Label>
              <Input id="e" type="email" placeholder="you@farm.in" className="mt-2" required />
            </div>
          </div>
          <div>
            <Label htmlFor="m">How can we help?</Label>
            <Textarea id="m" rows={6} placeholder="Tell us about your rental" className="mt-2" />
          </div>
          <Button type="submit" variant="hero" size="lg">
            Send message
          </Button>
        </motion.form>

        <div className="space-y-4">
          {[
            { icon: Phone, t: "Helpline", d: "1800 200 4040" },
            { icon: Mail, t: "Email", d: "support@agrirent.in" },
            { icon: MapPin, t: "Office", d: "Sector 34, Chandigarh" },
          ].map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="surface-card flex items-center gap-4 p-6"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
                <c.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{c.t}</p>
                <p className="truncate font-semibold">{c.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
