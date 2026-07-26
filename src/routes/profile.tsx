import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  MapPin, Star, CalendarCheck, Heart, ShieldCheck, User, Settings,
  CheckCircle2, Clock, FileText, Phone, MessageSquare, AlertCircle,
  Download, LogOut, Tractor, ChevronRight, Filter, Search
} from "lucide-react";
import { SiteLayout } from "@/components/site/site-layout";
import { Button } from "@/components/ui/button";
import { EquipmentCard } from "@/components/equipment/equipment-card";
import { equipment, inr } from "@/lib/equipment-data";
import { useAuth } from "@/lib/auth/context";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Farmer Portal — My Bookings & Rentals | AgriRent" },
      {
        name: "description",
        content: "Track your machinery rentals, booking status, invoices and saved equipment on AgriRent.",
      },
      { property: "og:title", content: "Farmer Portal — My Bookings | AgriRent" },
      { property: "og:description", content: "Complete rental history and active booking tracking." },
    ],
  }),
  component: Profile,
});

// Mock Booking History for Farmer Portal
const mockFarmerBookings = [
  {
    id: "AR-984201",
    equipmentId: "combine-harvester-xl",
    name: "Combine Harvester XL",
    image: equipment[1].image,
    owner: "Meera Patel",
    phone: "+91 98765 43210",
    location: "Anand, Gujarat",
    dates: "Oct 24 – Oct 27, 2026",
    days: 3,
    dailyRate: 7800,
    total: 23400,
    status: "active",
    paymentStatus: "Paid in Full (UPI)",
    bookedOn: "Oct 22, 2026",
  },
  {
    id: "AR-983190",
    equipmentId: "compact-utility-tractor",
    name: "Compact Utility Tractor 45HP",
    image: equipment[0].image,
    owner: "Harpreet Singh",
    phone: "+91 98123 55678",
    location: "Ludhiana, Punjab",
    dates: "Oct 10 – Oct 13, 2026",
    days: 3,
    dailyRate: 2400,
    total: 7200,
    status: "completed",
    paymentStatus: "Paid in Full (Card)",
    bookedOn: "Oct 08, 2026",
  },
  {
    id: "AR-981044",
    equipmentId: "heavy-duty-rotavator",
    name: "Heavy Duty Rotavator",
    image: equipment[2].image,
    owner: "Kisan Agro Hub",
    phone: "+91 98990 11223",
    location: "Nashik, Maharashtra",
    dates: "Sep 28 – Sep 30, 2026",
    days: 2,
    dailyRate: 950,
    total: 1900,
    status: "completed",
    paymentStatus: "Paid in Full (NetBanking)",
    bookedOn: "Sep 25, 2026",
  },
  {
    id: "AR-978802",
    equipmentId: "boom-crop-sprayer",
    name: "Boom Crop Sprayer 800L",
    image: equipment[4].image,
    owner: "Green Fields Co-op",
    phone: "+91 97700 88990",
    location: "Indore, Madhya Pradesh",
    dates: "Sep 15 – Sep 17, 2026",
    days: 2,
    dailyRate: 1750,
    total: 3500,
    status: "completed",
    paymentStatus: "Paid in Full (UPI)",
    bookedOn: "Sep 12, 2026",
  },
];

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<"history" | "saved">("history");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "completed">("all");
  const [selectedInvoice, setSelectedInvoice] = useState<typeof mockFarmerBookings[0] | null>(null);

  const userName = user?.name || "Rajesh Kumar";
  const userEmail = user?.email || "farmer@agrirent.in";
  const userRole = user?.role ? user.role.toUpperCase() : "FARMER";

  const handleLogout = async () => {
    await logout();
    toast.success("Logged out successfully.");
    navigate({ to: "/" });
  };

  const filteredBookings = mockFarmerBookings.filter((b) => {
    if (statusFilter === "all") return true;
    return b.status === statusFilter;
  });

  const totalSpent = mockFarmerBookings.reduce((sum, b) => sum + b.total, 0);

  return (
    <SiteLayout>
      {/* ══ HEADER SECTION ══ */}
      <div className="gradient-hero border-b border-border/80 pt-8 pb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="gradient-primary grid h-20 w-20 shrink-0 place-items-center rounded-3xl text-2xl font-extrabold text-primary-foreground shadow-glow"
              >
                {userName.charAt(0)}
              </motion.span>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-extrabold sm:text-3xl font-display text-foreground">{userName}</h1>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 border border-emerald-500/25">
                    {userRole}
                  </span>
                </div>
                <p className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary" /> Ludhiana, Punjab
                  <span>·</span>
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> 4.9 Renter Score
                  <span>·</span>
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" /> Verified Farmer
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{userEmail}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Button variant="hero" size="sm" onClick={() => setExpanded((e) => !e)} className="rounded-xl font-bold cursor-pointer h-10 px-4 shadow-glow">
                <Settings className="h-4 w-4 mr-1.5" /> {expanded ? "Close Editor" : "Edit Profile"}
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout} className="rounded-xl font-bold cursor-pointer h-10 px-4 text-destructive hover:bg-destructive/10 border-destructive/20">
                <LogOut className="h-4 w-4 mr-1.5" /> Log Out
              </Button>
            </div>
          </div>

          {/* Profile Edit Drawer */}
          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <form onSubmit={(e) => { e.preventDefault(); setExpanded(false); toast.success("Profile updated successfully."); }}
              className="surface-card mt-6 grid gap-4 p-6 rounded-3xl border border-border/80 sm:grid-cols-3">
              <div>
                <Label className="text-xs font-semibold">Full Name</Label>
                <Input defaultValue={userName} className="mt-1.5 h-10 text-xs rounded-xl" />
              </div>
              <div>
                <Label className="text-xs font-semibold">Email Address</Label>
                <Input defaultValue={userEmail} className="mt-1.5 h-10 text-xs rounded-xl" />
              </div>
              <div>
                <Label className="text-xs font-semibold">District / State</Label>
                <Input defaultValue="Ludhiana, Punjab" className="mt-1.5 h-10 text-xs rounded-xl" />
              </div>
              <div className="sm:col-span-3 flex justify-end">
                <Button type="submit" variant="hero" size="sm" className="rounded-xl font-bold">Save Changes</Button>
              </div>
            </form>
          </motion.div>

          {/* Farmer Stats Overview Strip */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Total Bookings", value: mockFarmerBookings.length, icon: CalendarCheck },
              { label: "Active Rentals", value: mockFarmerBookings.filter(b => b.status === "active").length, icon: Tractor },
              { label: "Total Investment", value: inr(totalSpent), icon: ShieldCheck },
              { label: "Saved vs Purchasing", value: "₹4.8 Lakhs", icon: Star },
            ].map((s) => (
              <div key={s.label} className="surface-card p-4 rounded-2xl border border-border/70 shadow-sm flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-base font-extrabold font-display text-foreground">{s.value}</p>
                  <p className="text-[10px] text-muted-foreground font-medium">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ FARMER PORTAL CONTENT ══ */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        
        {/* Navigation Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-4 mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab("history")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
                activeTab === "history"
                  ? "border-primary bg-primary text-primary-foreground shadow-glow"
                  : "border-border/80 bg-card/80 text-foreground hover:bg-accent"
              }`}
            >
              <CalendarCheck className="h-4 w-4" />
              <span>Rental Booking History</span>
              <span className="text-[10px] font-mono opacity-80">({mockFarmerBookings.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
                activeTab === "saved"
                  ? "border-primary bg-primary text-primary-foreground shadow-glow"
                  : "border-border/80 bg-card/80 text-foreground hover:bg-accent"
              }`}
            >
              <Heart className="h-4 w-4" />
              <span>Saved Equipment</span>
              <span className="text-[10px] font-mono opacity-80">(3)</span>
            </button>
          </div>

          {/* Status Filter for Booking History */}
          {activeTab === "history" && (
            <div className="flex items-center gap-1.5 rounded-xl bg-muted/60 p-1 border border-border/60">
              {[
                { id: "all", label: "All Orders" },
                { id: "active", label: "Active" },
                { id: "completed", label: "Completed" },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setStatusFilter(f.id as any)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    statusFilter === f.id ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── TAB 1: RENTAL BOOKING HISTORY ── */}
        {activeTab === "history" ? (
          <div className="space-y-4 max-w-5xl">
            {filteredBookings.length === 0 ? (
              <div className="surface-card p-12 text-center rounded-3xl border border-border/80 space-y-3">
                <CalendarCheck className="h-10 w-10 text-muted-foreground mx-auto" />
                <h3 className="text-base font-bold">No bookings found for this filter</h3>
                <Button variant="hero" size="sm" onClick={() => setStatusFilter("all")} className="rounded-xl font-bold cursor-pointer">View All Orders</Button>
              </div>
            ) : (
              filteredBookings.map((b, i) => (
                <motion.div
                  key={b.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="surface-card rounded-3xl border border-border/80 p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-soft hover:shadow-float transition-all"
                >
                  {/* Left: Machine Info */}
                  <div className="flex items-start sm:items-center gap-5 min-w-0">
                    <img src={b.image} alt={b.name} className="h-20 w-24 rounded-2xl object-cover shrink-0 shadow-sm" />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase border flex items-center gap-1 ${
                          b.status === "active"
                            ? "bg-emerald-500/15 text-emerald-600 border-emerald-500/25"
                            : "bg-blue-500/15 text-blue-600 border-blue-500/25"
                        }`}>
                          {b.status === "active" ? <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> : <CheckCircle2 className="h-3 w-3" />}
                          {b.status === "active" ? "Active Rental" : "Completed"}
                        </span>
                        <span className="text-xs font-mono text-muted-foreground font-semibold">Order #{b.id}</span>
                        <span className="text-[11px] text-muted-foreground">· Booked on {b.bookedOn}</span>
                      </div>

                      <h3 className="font-display font-bold text-base text-foreground truncate">{b.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Owner: <strong className="text-foreground">{b.owner}</strong> ({b.phone}) · Location: {b.location}
                      </p>
                      <p className="text-xs font-semibold text-primary mt-1">
                        🗓️ {b.dates} ({b.days} Days)
                      </p>
                    </div>
                  </div>

                  {/* Right: Payment & Action Buttons */}
                  <div className="flex items-center justify-between lg:justify-end gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-border/60 shrink-0">
                    <div className="text-left lg:text-right">
                      <p className="text-xl font-extrabold text-primary font-display">{inr(b.total)}</p>
                      <p className="text-[10px] text-muted-foreground font-medium">{b.paymentStatus}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedInvoice(b)}
                        className="rounded-xl text-xs font-bold gap-1 cursor-pointer h-9 px-3"
                      >
                        <FileText className="h-3.5 w-3.5" /> Receipt
                      </Button>

                      <Button asChild size="sm" variant="hero" className="rounded-xl text-xs font-bold gap-1 cursor-pointer h-9 px-4 shadow-glow">
                        <Link to="/equipment/$id" params={{ id: b.equipmentId }}>
                          Rent Again
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        ) : (
          /* ── TAB 2: SAVED EQUIPMENT ── */
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.slice(2, 5).map((e, i) => (
              <EquipmentCard key={e.id} item={e} index={i} />
            ))}
          </div>
        )}
      </section>

      {/* ══ INVOICE RECEIPT MODAL ══ */}
      {selectedInvoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setSelectedInvoice(null)} className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-md rounded-3xl border border-border/80 bg-card shadow-float overflow-hidden p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">AgriRent Official Invoice</span>
                <h3 className="text-lg font-bold font-display text-foreground">{selectedInvoice.id}</h3>
              </div>
              <button onClick={() => setSelectedInvoice(null)} className="grid h-8 w-8 place-items-center rounded-xl bg-muted text-muted-foreground hover:text-foreground">✕</button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-border/40">
                <span className="text-muted-foreground">Renter Name:</span>
                <span className="font-bold text-foreground">{userName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/40">
                <span className="text-muted-foreground">Machine:</span>
                <span className="font-bold text-foreground">{selectedInvoice.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/40">
                <span className="text-muted-foreground">Owner:</span>
                <span className="font-bold text-foreground">{selectedInvoice.owner}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/40">
                <span className="text-muted-foreground">Rental Duration:</span>
                <span className="font-bold text-foreground">{selectedInvoice.days} Days ({selectedInvoice.dates})</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/40">
                <span className="text-muted-foreground">Daily Rate:</span>
                <span className="font-bold text-foreground">{inr(selectedInvoice.dailyRate)} / day</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/40">
                <span className="text-muted-foreground">Payment Method:</span>
                <span className="font-bold text-emerald-600">{selectedInvoice.paymentStatus}</span>
              </div>
              <div className="flex justify-between pt-2 text-sm font-extrabold">
                <span>Total Amount Paid:</span>
                <span className="text-primary">{inr(selectedInvoice.total)}</span>
              </div>
            </div>

            <Button onClick={() => { toast.success("Invoice downloaded as PDF."); setSelectedInvoice(null); }} variant="hero" className="w-full rounded-xl font-bold gap-2">
              <Download className="h-4 w-4" /> Download Official PDF
            </Button>
          </motion.div>
        </div>
      )}
    </SiteLayout>
  );
}
