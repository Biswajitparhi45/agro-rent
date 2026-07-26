import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Clock, MessageSquare, ShieldCheck, Sparkles, Send } from "lucide-react";
import { toast } from "sonner";
import { SiteLayout, PageHeader } from "@/components/site/site-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AgriRent Support — 24/7 Harvest Support" },
      {
        name: "description",
        content: "Talk to the AgriRent team about rentals, listings, payouts or harvest season support.",
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
        eyebrow="24/7 SUPPORT HELPLINE"
        title="We Answer Within One Hour"
        subtitle="Support in 7 regional languages, 7 days a week — during peak harvest seasons, we operate around the clock."
      />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] items-start">

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Message sent! Our harvest support team will contact you shortly.");
            }}
            className="surface-card space-y-6 p-8 rounded-3xl border border-border/80 shadow-soft"
          >
            <div className="flex items-center gap-2.5 pb-2 border-b border-border/60">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/15 text-primary">
                <MessageSquare className="h-4 w-4" />
              </span>
              <div>
                <h2 className="font-display text-base font-bold">Send us a message</h2>
                <p className="text-xs text-muted-foreground">Fill in details and we'll reach back via phone or email.</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="n" className="text-xs font-semibold">Your Full Name <span className="text-destructive">*</span></Label>
                <Input id="n" placeholder="e.g. Gurpreet Singh" className="mt-1.5 h-11 text-sm rounded-xl" required />
              </div>
              <div>
                <Label htmlFor="e" className="text-xs font-semibold">Phone Number / Email <span className="text-destructive">*</span></Label>
                <Input id="e" placeholder="+91 98765 43210" className="mt-1.5 h-11 text-sm rounded-xl" required />
              </div>
            </div>

            <div>
              <Label htmlFor="m" className="text-xs font-semibold">Message / Inquiry <span className="text-destructive">*</span></Label>
              <Textarea id="m" rows={5} placeholder="Describe your rental question, machinery issue, or listing request..." className="mt-1.5 text-sm rounded-xl" required />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full rounded-xl font-bold gap-2 shadow-glow cursor-pointer">
              <Send className="h-4 w-4" /> Send Message
            </Button>
          </motion.form>

          {/* Contact Cards */}
          <div className="space-y-4">
            {[
              { icon: Phone, title: "Toll-Free Helpline", detail: "1800 200 4040", sub: "Toll free across India (6 AM – 10 PM)" },
              { icon: Mail, title: "Official Support Email", detail: "support@agrirent.in", sub: "Replies within 1 hour" },
              { icon: MapPin, title: "Headquarters", detail: "Sector 34-A, Chandigarh", sub: "AgriTech Innovation Hub, 160022" },
              { icon: Clock, title: "Harvest Season Hours", detail: "24/7 Active Dispatch", sub: "Oct–Nov & Mar–Apr harvest windows" },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.08 * i }}
                className="surface-card flex items-start gap-4 p-5 rounded-2xl border border-border/80 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary mt-0.5">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-muted-foreground">{c.title}</p>
                  <p className="truncate font-bold text-sm text-foreground mt-0.5">{c.detail}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{c.sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Quick Assurance Box */}
            <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/8 p-5 flex items-center gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-emerald-500/20 text-emerald-600">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">100% Insured & Verified</p>
                <p className="text-[11px] text-emerald-700/80 dark:text-emerald-400">All support tickets regarding active bookings are escalated immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
