import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion, useMotionValue, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  Area, AreaChart, CartesianGrid, ResponsiveContainer,
  Tooltip, XAxis, YAxis, Bar, BarChart,
} from "recharts";
import {
  BarChart3, CalendarCheck, Clock, LayoutDashboard,
  MessageSquare, Settings, Sprout, Tractor, Wallet,
  Plus, CheckCircle2, XCircle, Send, ShieldCheck,
  ArrowUpRight, TrendingUp, Bell, Upload, Image as ImageIcon,
  Star, MapPin, Zap, Fuel, ChevronRight, Check, LogOut,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { equipment as initialEquipment, inr, type Equipment } from "@/lib/equipment-data";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/auth/context";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Owner Dashboard | AgriRent" },
      { name: "description", content: "Track revenue, manage listings and approve booking requests." },
    ],
  }),
  component: Dashboard,
});

const nav = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "My Equipment", icon: Tractor },
  { label: "Bookings", icon: CalendarCheck },
  { label: "Messages", icon: MessageSquare },
  { label: "Payments", icon: Wallet },
  { label: "Analytics", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

const revenueData = [
  { m: "Jan", v: 82000 },
  { m: "Feb", v: 96000 },
  { m: "Mar", v: 128000 },
  { m: "Apr", v: 112000 },
  { m: "May", v: 164000 },
  { m: "Jun", v: 198000 },
];

const utilData = [
  { m: "Jan", rate: 68 },
  { m: "Feb", rate: 74 },
  { m: "Mar", rate: 88 },
  { m: "Apr", rate: 79 },
  { m: "May", rate: 92 },
  { m: "Jun", rate: 96 },
];

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [section, setSection] = useState("Dashboard");
  const [ownerEquipment, setOwnerEquipment] = useState<Equipment[]>(initialEquipment);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formPreview, setFormPreview] = useState({ name: "", category: "Tractor", price: "2800", location: "Amritsar, Punjab", power: "50 HP", fuel: "Diesel", year: String(new Date().getFullYear()) });

  const [activeChat, setActiveChat] = useState("Gurpreet Singh");
  const [chatMessages, setChatMessages] = useState<Record<string, { text: string; from: "user" | "owner"; time: string }[]>>({
    "Gurpreet Singh": [
      { text: "Hello! Is the Combine Harvester XL available for harvest next Monday?", from: "user", time: "10:30 AM" },
      { text: "Yes Gurpreet, it's fully serviced and ready for pickup.", from: "owner", time: "10:32 AM" },
    ],
    "Ravi Kumar": [{ text: "Can you confirm delivery location near Ludhiana?", from: "user", time: "09:15 AM" }],
    "Vikas Sharma": [{ text: "Thanks for approving the tractor booking!", from: "user", time: "Yesterday" }],
  });
  const [newMessage, setNewMessage] = useState("");

  const [bookingRequests, setBookingRequests] = useState([
    { id: "b1", machine: "Heavy Duty Rotavator", renter: "Ravi Kumar", dates: "3 Days (Oct 12 – Oct 15)", total: 2850, status: "pending" },
    { id: "b2", machine: "Compact Utility Tractor 45HP", renter: "Sunita Devi", dates: "5 Days (Oct 14 – Oct 19)", total: 12000, status: "pending" },
    { id: "b3", machine: "Combine Harvester XL", renter: "Co-op Anand", dates: "4 Days (Oct 18 – Oct 22)", total: 31200, status: "approved" },
    { id: "b4", machine: "Precision Seed Drill", renter: "Vikas Sharma", dates: "2 Days (Oct 20 – Oct 22)", total: 2700, status: "approved" },
  ]);

  const userName = user?.name || "Harpreet Singh";
  const userRole = user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : "Owner";

  const handleLogout = async () => {
    await logout();
    toast.success("Logged out successfully.");
    navigate({ to: "/auth", search: { mode: "login" } });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setChatMessages((prev) => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), { text: newMessage.trim(), from: "owner", time: "Just now" }],
    }));
    setNewMessage("");
  };

  const handleAddEquipment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const category = String(form.get("category") ?? "Tractor");
    const price = Number(form.get("price") ?? 2500);
    const location = String(form.get("location") ?? "Ludhiana, Punjab");
    const chassisNo = String(form.get("chassisNo") ?? "").trim();
    const power = String(form.get("power") ?? "50 HP").trim();
    const fuel = String(form.get("fuel") ?? "Diesel").trim();
    const year = Number(form.get("year") ?? new Date().getFullYear());
    if (!name) { toast.error("Please enter equipment name."); return; }
    if (!chassisNo) { toast.error("Please enter chassis number."); return; }
    const newItem: Equipment = {
      id: `eq_${Date.now()}`, name, category, price, location, rating: 4.9, reviews: 1,
      available: true, owner: userName, ownerSince: "2026", power: power || "50 HP",
      fuel: fuel || "Diesel", width: "2.1 m", year,
      summary: `Chassis: ${chassisNo} · High efficiency machinery for seasonal farm operations.`,
      image: imagePreview || "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?auto=format&fit=crop&q=80&w=800",
    };
    setOwnerEquipment((prev) => [newItem, ...prev]);
    setImagePreview(null);
    setFormPreview({ name: "", category: "Tractor", price: "2800", location: "Amritsar, Punjab", power: "50 HP", fuel: "Diesel", year: String(new Date().getFullYear()) });
    setSection("My Equipment");
    toast.success(`${name} listed successfully!`);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) { toast.error("Please upload a valid image file."); return; }
    if (file.size > 10 * 1024 * 1024) { toast.error("Image must be smaller than 10 MB."); return; }
    setImagePreview(URL.createObjectURL(file));
  };

  const toggleEquipmentAvailability = (id: string) => {
    setOwnerEquipment((prev) => prev.map((item) => item.id === id ? { ...item, available: !item.available } : item));
    toast.success("Equipment status updated.");
  };

  const updateBookingStatus = (id: string, status: "approved" | "rejected" | "completed") => {
    setBookingRequests((prev) => prev.map((b) => b.id === id ? { ...b, status } : b));
    toast.success(`Booking ${status}.`);
  };

  const pendingCount = bookingRequests.filter(b => b.status === "pending").length;

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">

      {/* ══ SIDEBAR ══ */}
      <aside
        className="hidden lg:flex h-full w-60 xl:w-64 shrink-0 flex-col overflow-hidden border-r border-white/10 relative z-20 gradient-primary"
      >
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, oklch(0.65 0.16 150) 0%, transparent 70%)" }} />

        {/* Logo */}
        <div className="relative z-10 px-5 py-5 border-b border-white/20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/20 border border-white/30 text-white shadow-sm transition-all group-hover:scale-105">
              <Sprout className="h-4.5 w-4.5 text-white" />
            </span>
            <span className="font-display text-lg font-extrabold text-white tracking-tight">
              Agri<span className="text-amber-300">Rent</span>
            </span>
          </Link>
        </div>

        {/* User Card */}
        <div className="relative z-10 px-4 py-4 border-b border-white/20">
          <div className="flex items-center gap-3 rounded-2xl bg-white/15 border border-white/25 p-3 backdrop-blur-md shadow-sm">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/25 border border-white/40 text-xs font-extrabold text-white">
              {userName.charAt(0)}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-extrabold text-white truncate">{userName.split(" ")[0]}</p>
              <p className="text-[10px] text-white/80 font-bold">{userRole} Account</p>
            </div>
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shrink-0 shadow-sm animate-pulse" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex-1 overflow-y-auto px-3 py-4 space-y-2">
          {nav.map((n) => {
            const active = section === n.label;
            return (
              <button
                key={n.label}
                onClick={() => setSection(n.label)}
                className={cn(
                  "relative flex w-full items-center gap-3 rounded-2xl px-3.5 py-2.5 text-xs transition-all cursor-pointer",
                  active
                    ? "bg-white text-primary font-extrabold shadow-float"
                    : "text-white hover:bg-white/15 font-bold border border-transparent",
                )}
              >
                <n.icon className={cn("relative h-4 w-4 shrink-0", active ? "text-primary" : "text-white")} />
                <span className="relative flex-1 text-left">{n.label}</span>
                {n.label === "Bookings" && pendingCount > 0 && (
                  <span className={cn("relative ml-auto grid h-4.5 w-4.5 place-items-center rounded-full text-[9px] font-extrabold shadow-sm", active ? "bg-primary text-white" : "bg-amber-400 text-black")}>
                    {pendingCount}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer & Logout */}
        <div className="relative z-10 px-4 py-4 border-t border-white/20 space-y-3">
          <button
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-2 rounded-2xl px-3.5 py-2.5 text-xs font-extrabold text-white bg-white/15 hover:bg-white/25 border border-white/30 transition-all cursor-pointer shadow-sm"
          >
            <LogOut className="h-4 w-4 shrink-0 text-white" />
            <span>Log Out</span>
          </button>
          <p className="text-[10px] text-white/80 text-center font-bold">© 2026 AgriRent Platform</p>
        </div>
      </aside>

      {/* ══ RIGHT PANEL (LIGHT THEME MATCHING LANDING PAGE) ══ */}
      <div className="flex flex-1 flex-col h-full overflow-hidden bg-background">

        {/* Top Header */}
        <header className="flex items-center justify-between px-6 xl:px-8 py-4 border-b border-border/70 bg-card/60 backdrop-blur-md shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Owner Workspace</span>
              <span className="text-[9px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-primary-soft text-primary">
                {userRole}
              </span>
            </div>
            <h1 className="text-xl xl:text-2xl font-extrabold mt-0.5 font-display text-foreground">{userName}</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative grid h-10 w-10 place-items-center rounded-2xl border border-border/80 bg-card hover:bg-muted/60 transition-colors cursor-pointer shadow-soft">
              <Bell className="h-4.5 w-4.5 text-muted-foreground" />
              {pendingCount > 0 && <span className="absolute -top-1 -right-1 h-4 w-4 grid place-items-center rounded-full bg-amber-400 text-[9px] font-bold text-black">{pendingCount}</span>}
            </button>
            <Button variant="hero" size="sm" onClick={() => setSection("Add Equipment")}
              className="cursor-pointer gap-1.5 shadow-glow h-10 px-5 rounded-2xl text-xs font-bold">
              <Plus className="h-4 w-4" /> Add Equipment
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}
              className="cursor-pointer gap-1.5 h-10 px-4 rounded-2xl text-xs font-bold text-destructive hover:bg-destructive/10 border-destructive/20">
              <LogOut className="h-4 w-4" /> Log Out
            </Button>
          </div>
        </header>

        {/* Main Workspace Content Area */}
        <main className="flex-1 overflow-y-auto px-6 xl:px-8 py-6">

          {/* ── Tab 1: Dashboard Overview ── */}
          {section === "Dashboard" && (
            <div className="space-y-6">
              {/* Quick Stat Cards */}
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  { label: "Total Equipment", value: ownerEquipment.length, prefix: "", icon: Tractor },
                  { label: "Revenue (6 mo)", value: 780000, prefix: "₹", icon: TrendingUp },
                  { label: "Active Rentals", value: 146, prefix: "", icon: CalendarCheck },
                  { label: "Pending Requests", value: pendingCount, prefix: "", icon: Bell },
                ].map((s, i) => (
                  <motion.div key={s.label}
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="surface-card p-6 rounded-3xl border border-border/80 shadow-soft hover:-translate-y-1 hover:shadow-float transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-muted-foreground">{s.label}</span>
                      <span className="grid h-9 w-9 place-items-center rounded-2xl bg-primary/10 text-primary">
                        <s.icon className="h-4 w-4" />
                      </span>
                    </div>
                    <p className="font-display mt-3 text-3xl font-extrabold text-foreground">
                      {s.prefix}<Counter to={s.value} />
                    </p>
                    <div className="mt-2.5 flex items-center gap-1 text-emerald-600">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                      <span className="text-[11px] font-bold">+12% vs last month</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Charts & Activity Grid */}
              <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
                {/* Revenue Chart */}
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                  className="surface-card p-6 rounded-3xl border border-border/80 shadow-soft">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h2 className="font-display text-base font-bold text-foreground">Revenue Trend</h2>
                      <p className="text-xs text-muted-foreground mt-0.5">Monthly earnings (Jan – Jun 2026)</p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-600">
                      <TrendingUp className="h-3.5 w-3.5" /> +141%
                    </span>
                  </div>
                  <div className="mt-6 h-56">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={revenueData} margin={{ top: 4, right: 4, left: -10, bottom: 0 }}>
                        <defs>
                          <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.35} />
                            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                        <XAxis dataKey="m" tickLine={false} axisLine={false} fontSize={11} tick={{ fill: "var(--color-muted-foreground)" }} />
                        <YAxis tickLine={false} axisLine={false} fontSize={11} width={52} tick={{ fill: "var(--color-muted-foreground)" }}
                          tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} />
                        <Tooltip
                          contentStyle={{ borderRadius: 16, border: "1px solid var(--color-border)", background: "var(--color-card)", boxShadow: "var(--shadow-soft)", fontSize: 12 }}
                          formatter={(v: number) => [`₹${v.toLocaleString("en-IN")}`, "Revenue"]}
                        />
                        <Area type="monotone" dataKey="v" stroke="var(--color-primary)" strokeWidth={2.5} fill="url(#rev)" dot={{ fill: "var(--color-primary)", r: 4 }} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>

                {/* Recent Rentals */}
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                  className="surface-card p-6 rounded-3xl border border-border/80 shadow-soft">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-display text-base font-bold text-foreground">Recent Rentals</h2>
                    <button onClick={() => setSection("My Equipment")}
                      className="text-xs text-primary font-bold hover:underline cursor-pointer">View all</button>
                  </div>
                  <ul className="space-y-3">
                    {ownerEquipment.slice(0, 4).map((e) => (
                      <li key={e.id} className="flex items-center gap-3 rounded-2xl border border-border/60 bg-muted/30 p-3 hover:bg-muted/60 transition-colors">
                        <img src={e.image} alt={e.name} className="h-11 w-14 rounded-xl object-cover shrink-0" />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs font-bold text-foreground">{e.name}</p>
                          <p className="flex items-center gap-1 text-[11px] text-muted-foreground mt-0.5">
                            <Clock className="h-3 w-3 text-primary" /> 3 days · <span className="text-primary font-bold">{inr(e.price * 3)}</span>
                          </p>
                        </div>
                        <span className={cn("h-2.5 w-2.5 rounded-full shrink-0", e.available ? "bg-emerald-500" : "bg-amber-400")} />
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Pending Requests Callout Card */}
              {pendingCount > 0 && (
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                  className="surface-card p-6 rounded-3xl border border-amber-500/30 bg-amber-500/8 shadow-soft">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-2xl bg-amber-500/20 text-amber-600">
                        <Bell className="h-4 w-4" />
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-foreground">{pendingCount} Booking Request{pendingCount > 1 ? "s" : ""} Awaiting Approval</h3>
                        <p className="text-xs text-muted-foreground">Action required — approve or reject farmers' requests</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" onClick={() => setSection("Bookings")}
                      className="text-xs h-9 px-4 rounded-xl font-bold cursor-pointer">Manage →</Button>
                  </div>
                  <div className="space-y-2.5">
                    {bookingRequests.filter(b => b.status === "pending").map(b => (
                      <div key={b.id} className="flex items-center justify-between rounded-2xl bg-card border border-border/80 p-3.5 shadow-sm">
                        <div>
                          <p className="text-xs font-bold text-foreground">{b.machine}</p>
                          <p className="text-[11px] text-muted-foreground">{b.renter} · {b.dates}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-bold text-primary">{inr(b.total)}</p>
                          <Button size="sm" variant="hero" onClick={() => updateBookingStatus(b.id, "approved")} className="h-8 text-xs px-3.5 rounded-xl cursor-pointer gap-1 font-bold">
                            <CheckCircle2 className="h-3.5 w-3.5" /> Accept
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => updateBookingStatus(b.id, "rejected")} className="h-8 text-xs px-3.5 rounded-xl cursor-pointer gap-1 font-bold">
                            <XCircle className="h-3.5 w-3.5" /> Reject
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {/* ── Tab 2: My Equipment Inventory ── */}
          {section === "My Equipment" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold font-display">Equipment Inventory</h2>
                  <p className="text-xs text-muted-foreground mt-0.5">{ownerEquipment.length} machines listed · Manage prices & live status</p>
                </div>
                <Button size="sm" variant="hero" onClick={() => setSection("Add Equipment")} className="gap-1.5 cursor-pointer rounded-2xl font-bold">
                  <Plus className="h-4 w-4" /> Add Machine
                </Button>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {ownerEquipment.map((item, i) => (
                  <motion.div key={item.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                    className="surface-card rounded-3xl border border-border/80 overflow-hidden hover:-translate-y-1 hover:shadow-float transition-all duration-300 group">
                    <div className="relative aspect-video overflow-hidden">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <span className={cn(
                        "absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase backdrop-blur-md shadow-sm",
                        item.available ? "bg-emerald-500/90 text-white" : "bg-muted/90 text-foreground"
                      )}>
                        {item.available ? "Available" : "In Use"}
                      </span>
                      <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-white">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> {item.rating}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-base leading-tight font-display">{item.name}</h3>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        <span className="flex items-center gap-1 text-[11px] text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-lg">
                          <MapPin className="h-3 w-3 text-primary" />{item.location}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-lg">
                          <Zap className="h-3 w-3 text-primary" />{item.power}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-lg">
                          <Fuel className="h-3 w-3 text-primary" />{item.fuel}
                        </span>
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3.5">
                        <div>
                          <p className="text-lg font-extrabold text-primary font-display">{inr(item.price)}</p>
                          <p className="text-[10px] text-muted-foreground font-medium">per day</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-muted-foreground">Active</span>
                          <Switch checked={item.available} onCheckedChange={() => toggleEquipmentAvailability(item.id)} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* ── Tab 3: Bookings ── */}
          {section === "Bookings" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold font-display">Booking Requests</h2>
                <p className="text-xs text-muted-foreground mt-0.5">Approve, reject or inspect rental orders from farmers.</p>
              </div>
              <div className="space-y-4">
                {bookingRequests.map((b, i) => (
                  <motion.div key={b.id} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
                    className="surface-card rounded-3xl border border-border/80 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-soft">
                    <div className="flex items-start gap-4">
                      <span className={cn(
                        "mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-2xl text-xs font-bold",
                        b.status === "pending" ? "bg-amber-500/15 text-amber-600"
                          : b.status === "approved" ? "bg-emerald-500/15 text-emerald-600"
                            : "bg-destructive/15 text-destructive"
                      )}>
                        {b.status === "pending" ? "⏳" : b.status === "approved" ? "✓" : "✕"}
                      </span>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={cn(
                            "text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full",
                            b.status === "pending" ? "bg-amber-500/15 text-amber-600 border border-amber-500/25"
                              : b.status === "approved" ? "bg-emerald-500/15 text-emerald-600 border border-emerald-500/25"
                                : "bg-destructive/15 text-destructive border border-destructive/25"
                          )}>{b.status}</span>
                          <span className="text-xs text-muted-foreground font-mono">#{b.id}</span>
                        </div>
                        <h3 className="text-base font-bold text-foreground">{b.machine}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Renter: <strong className="text-foreground">{b.renter}</strong> · {b.dates}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <div className="text-right">
                        <p className="text-xl font-extrabold text-primary font-display">{inr(b.total)}</p>
                        <p className="text-[10px] text-muted-foreground font-medium">Total Payout</p>
                      </div>
                      {b.status === "pending" && (
                        <div className="flex gap-2">
                          <Button size="sm" variant="hero" onClick={() => updateBookingStatus(b.id, "approved")}
                            className="h-9 px-4 text-xs gap-1.5 rounded-xl cursor-pointer font-bold">
                            <CheckCircle2 className="h-4 w-4" /> Accept
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => updateBookingStatus(b.id, "rejected")}
                            className="h-9 px-4 text-xs gap-1.5 rounded-xl cursor-pointer font-bold">
                            <XCircle className="h-4 w-4" /> Reject
                          </Button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* ── Tab 4: Messages ── */}
          {section === "Messages" && (
            <div className="surface-card rounded-3xl border border-border/80 shadow-soft overflow-hidden" style={{ height: "calc(100vh - 160px)" }}>
              <div className="grid lg:grid-cols-[280px_1fr] h-full">
                <div className="border-r border-border/60 flex flex-col bg-muted/20">
                  <div className="px-5 py-4 border-b border-border/60">
                    <h3 className="text-sm font-bold font-display">Farmer Messages</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{Object.keys(chatMessages).length} active chats</p>
                  </div>
                  <div className="flex-1 overflow-y-auto p-2 space-y-1">
                    {Object.keys(chatMessages).map((contact) => (
                      <button key={contact} onClick={() => setActiveChat(contact)}
                        className={cn(
                          "w-full text-left p-3.5 rounded-2xl transition-all cursor-pointer flex items-center gap-3",
                          activeChat === contact ? "bg-primary/10 border border-primary/20 text-primary font-bold shadow-sm" : "hover:bg-accent text-foreground border border-transparent",
                        )}>
                        <span className={cn(
                          "grid h-9 w-9 shrink-0 place-items-center rounded-full text-xs font-bold",
                          activeChat === contact ? "bg-primary text-primary-foreground" : "bg-primary/15 text-primary"
                        )}>
                          {contact.charAt(0)}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs truncate">{contact}</p>
                          <p className="text-[11px] text-muted-foreground truncate">{chatMessages[contact]?.slice(-1)[0]?.text}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col bg-card">
                  <div className="flex items-center gap-3 border-b border-border/60 px-6 py-4">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {activeChat.charAt(0)}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-foreground">{activeChat}</p>
                      <p className="text-[11px] text-emerald-600 font-semibold">● Online</p>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {chatMessages[activeChat]?.map((m, idx) => (
                      <div key={idx} className={cn("flex flex-col max-w-[70%]", m.from === "owner" ? "ml-auto items-end" : "mr-auto items-start")}>
                        <div className={cn("px-4 py-3 rounded-2xl text-xs leading-relaxed",
                          m.from === "owner"
                            ? "gradient-primary text-primary-foreground rounded-br-none shadow-sm"
                            : "bg-muted text-foreground rounded-bl-none border border-border/60"
                        )}>
                          {m.text}
                        </div>
                        <span className="text-[10px] text-muted-foreground mt-1 px-1">{m.time}</span>
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleSendMessage} className="flex items-center gap-3 border-t border-border/60 px-6 py-4">
                    <Input value={newMessage} onChange={(e) => setNewMessage(e.target.value)}
                      placeholder={`Reply to ${activeChat}...`}
                      className="h-11 text-xs rounded-xl flex-1" />
                    <Button type="submit" size="sm" variant="hero" className="h-11 px-5 rounded-xl gap-1.5 cursor-pointer font-bold shadow-glow">
                      <Send className="h-4 w-4" /> Send
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* ── Tab 5: Payments ── */}
          {section === "Payments" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold font-display">Earnings & Payouts</h2>
                <p className="text-xs text-muted-foreground mt-0.5">Track completed payouts and bank transfers.</p>
              </div>
              <div className="grid sm:grid-cols-3 gap-5">
                {[
                  { label: "Total Revenue Earned", value: "₹7,80,000", color: "text-primary" },
                  { label: "Pending Payout Balance", value: "₹34,200", color: "text-amber-600" },
                  { label: "Next Scheduled Payout", value: "Oct 28, 2026", color: "text-foreground" },
                ].map((s) => (
                  <div key={s.label} className="surface-card rounded-3xl p-6 border border-border/80 shadow-soft">
                    <p className="text-xs font-semibold text-muted-foreground">{s.label}</p>
                    <p className={cn("text-3xl font-extrabold mt-3 font-display", s.color)}>{s.value}</p>
                  </div>
                ))}
              </div>
              <div className="surface-card rounded-3xl border border-border/80 shadow-soft overflow-hidden">
                <div className="px-6 py-4 border-b border-border/60">
                  <h3 className="text-sm font-bold font-display">Payout History</h3>
                </div>
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-border/60 bg-muted/40 text-muted-foreground uppercase font-bold text-[10px]">
                      <th className="py-3.5 px-6">Date</th>
                      <th className="py-3.5 px-6">Reference</th>
                      <th className="py-3.5 px-6">Amount</th>
                      <th className="py-3.5 px-6">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {[
                      { date: "Oct 22, 2026", ref: "#BK-9842", amt: "₹23,400", status: "Transferred" },
                      { date: "Oct 15, 2026", ref: "#BK-9831", amt: "₹14,500", status: "Transferred" },
                      { date: "Oct 08, 2026", ref: "#BK-9805", amt: "₹8,200", status: "Transferred" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-muted/30 transition-colors">
                        <td className="py-4 px-6">{row.date}</td>
                        <td className="py-4 px-6 font-mono text-muted-foreground">{row.ref}</td>
                        <td className="py-4 px-6 font-bold text-primary text-sm">{row.amt}</td>
                        <td className="py-4 px-6">
                          <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 text-[11px] font-bold border border-emerald-500/25">{row.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ── Tab 6: Analytics ── */}
          {section === "Analytics" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold font-display">Machinery Utilization Analytics</h2>
                <p className="text-xs text-muted-foreground mt-0.5">Performance insights for your equipment portfolio.</p>
              </div>
              <div className="grid xl:grid-cols-2 gap-6">
                <div className="surface-card p-6 rounded-3xl border border-border/80 shadow-soft">
                  <h3 className="text-sm font-bold font-display mb-4">Utilization Rate (%)</h3>
                  <div className="h-56">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={utilData} margin={{ top: 4, right: 4, left: -16, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                        <XAxis dataKey="m" tickLine={false} axisLine={false} fontSize={11} tick={{ fill: "var(--color-muted-foreground)" }} />
                        <YAxis tickLine={false} axisLine={false} fontSize={11} tick={{ fill: "var(--color-muted-foreground)" }} domain={[0, 100]} />
                        <Tooltip contentStyle={{ borderRadius: 16, border: "1px solid var(--color-border)", background: "var(--color-card)", boxShadow: "var(--shadow-soft)", fontSize: 12 }}
                          formatter={(v: number) => [`${v}%`, "Utilization"]} />
                        <Bar dataKey="rate" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { rank: "1", name: "Combine Harvester XL", revenue: "₹2,84,000", util: "84%", color: "bg-primary/15 text-primary" },
                    { rank: "2", name: "Compact Utility Tractor 45HP", revenue: "₹1,92,000", util: "74%", color: "bg-amber-500/15 text-amber-600" },
                    { rank: "3", name: "Heavy Duty Rotavator", revenue: "₹68,500", util: "62%", color: "bg-sky-500/15 text-sky-600" },
                  ].map((m) => (
                    <div key={m.rank} className="surface-card rounded-3xl p-5 border border-border/80 shadow-soft flex items-center gap-4">
                      <span className={cn("grid h-10 w-10 shrink-0 place-items-center rounded-2xl text-sm font-extrabold", m.color)}>#{m.rank}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold truncate text-foreground">{m.name}</p>
                        <p className="text-xs text-muted-foreground">{m.revenue} · {m.util} utilization</p>
                      </div>
                      <div className="w-20 h-2 rounded-full bg-muted overflow-hidden shrink-0">
                        <div className="h-full rounded-full bg-primary" style={{ width: m.util }} />
                      </div>
                    </div>
                  ))}
                  <div className="surface-card rounded-3xl p-5 border border-border/80 shadow-soft flex items-center gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-600 text-xl font-bold">★</span>
                    <div>
                      <p className="text-sm font-bold text-foreground">Peak Season: Oct – Nov</p>
                      <p className="text-xs text-muted-foreground">3.2× average booking inquiry rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Tab 7: Settings ── */}
          {section === "Settings" && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h2 className="text-xl font-bold font-display">Profile & Payout Settings</h2>
                <p className="text-xs text-muted-foreground mt-0.5">Update your details and bank account for payouts.</p>
              </div>
              <form onSubmit={(e) => { e.preventDefault(); toast.success("Settings saved successfully."); }}
                className="surface-card rounded-3xl border border-border/80 p-8 shadow-soft space-y-5">
                <div className="flex items-center gap-4 pb-6 border-b border-border/60">
                  <span className="grid h-16 w-16 place-items-center rounded-3xl bg-primary/15 text-2xl font-extrabold text-primary shadow-sm">
                    {userName.charAt(0)}
                  </span>
                  <div>
                    <p className="font-bold text-lg text-foreground font-display">{userName}</p>
                    <p className="text-xs text-muted-foreground">{userRole} · {user?.email || "owner@agrirent.in"}</p>
                  </div>
                </div>
                {[
                  { label: "Full Name", defaultValue: userName },
                  { label: "Email Address", defaultValue: user?.email || "owner@agrirent.in" },
                  { label: "Payout Bank / UPI ID", defaultValue: "HDFC Bank · SB-98421094 (IFSC: HDFC0001294)" },
                ].map((f) => (
                  <div key={f.label}>
                    <Label className="text-xs font-semibold">{f.label}</Label>
                    <Input defaultValue={f.defaultValue} className="mt-1.5 h-11 text-sm rounded-xl" />
                  </div>
                ))}
                <div className="pt-3 flex items-center justify-between gap-4">
                  <Button type="submit" variant="hero" size="sm" className="rounded-xl font-bold cursor-pointer px-6 h-11 shadow-glow">
                    Save Changes
                  </Button>
                  <Button type="button" variant="destructive" size="sm" onClick={handleLogout} className="rounded-xl font-bold cursor-pointer px-6 h-11 gap-2 shadow-sm">
                    <LogOut className="h-4 w-4" /> Log Out
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* ── Tab 8: Add Equipment Full-Page Form ── */}
          {section === "Add Equipment" && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="space-y-6 max-w-5xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <button onClick={() => setSection("My Equipment")} className="hover:text-foreground transition-colors cursor-pointer">My Equipment</button>
                    <span>/</span>
                    <span className="text-foreground font-medium">List New Machine</span>
                  </div>
                  <h2 className="text-xl font-bold font-display">List New Machinery</h2>
                  <p className="text-xs text-muted-foreground mt-0.5">Fill in all details to publish your equipment listing on AgriRent</p>
                </div>
                <Button variant="outline" size="sm" onClick={() => { setSection("My Equipment"); setImagePreview(null); }}
                  className="rounded-xl cursor-pointer text-xs font-bold">✕ Cancel</Button>
              </div>

              <div className="grid xl:grid-cols-[1fr_340px] gap-6 items-start">
                <form id="add-equipment-form" onSubmit={handleAddEquipment} className="space-y-6">

                  {/* Photo Upload */}
                  <div className="surface-card p-6 rounded-3xl border border-border/80 shadow-soft">
                    <p className="text-sm font-bold font-display mb-3">Equipment Photo</p>
                    <div onClick={() => fileInputRef.current?.click()}
                      className="relative flex flex-col items-center justify-center w-full h-44 rounded-2xl border-2 border-dashed border-border/70 bg-muted/20 hover:bg-muted/40 cursor-pointer transition-all overflow-hidden group">
                      {imagePreview ? (
                        <>
                          <img src={imagePreview} alt="Preview" className="absolute inset-0 h-full w-full object-cover" />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                            <Upload className="h-6 w-6 text-white" />
                            <span className="text-xs text-white font-semibold">Change Photo</span>
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col items-center gap-3 text-muted-foreground">
                          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                            <ImageIcon className="h-7 w-7" />
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-semibold text-foreground">Click to upload photo</p>
                            <p className="text-xs text-muted-foreground mt-0.5">PNG, JPG, WEBP · Max 10 MB</p>
                          </div>
                        </div>
                      )}
                      <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="surface-card p-6 rounded-3xl border border-border/80 shadow-soft space-y-4">
                    <p className="text-sm font-bold font-display">Basic Information</p>
                    <div>
                      <Label className="text-xs font-semibold">Machine Name <span className="text-destructive">*</span></Label>
                      <Input name="name" placeholder="e.g. John Deere 5310 55HP"
                        className="mt-1.5 h-11 text-sm rounded-xl"
                        onChange={e => setFormPreview(p => ({ ...p, name: e.target.value }))}
                        required />
                    </div>
                    <div>
                      <Label className="text-xs font-semibold">Chassis / Frame Number <span className="text-destructive">*</span></Label>
                      <Input name="chassisNo" placeholder="e.g. MHCJD5310P0012345"
                        className="mt-1.5 h-11 text-sm rounded-xl font-mono tracking-wide" required />
                      <p className="text-[11px] text-muted-foreground mt-1">Enter exactly as on the RC/registration document.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-xs font-semibold">Category <span className="text-destructive">*</span></Label>
                        <Input name="category" defaultValue="Tractor"
                          className="mt-1.5 h-11 text-sm rounded-xl"
                          onChange={e => setFormPreview(p => ({ ...p, category: e.target.value }))}
                          required />
                      </div>
                      <div>
                        <Label className="text-xs font-semibold">Location <span className="text-destructive">*</span></Label>
                        <Input name="location" defaultValue="Amritsar, Punjab"
                          className="mt-1.5 h-11 text-sm rounded-xl"
                          onChange={e => setFormPreview(p => ({ ...p, location: e.target.value }))}
                          required />
                      </div>
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="surface-card p-6 rounded-3xl border border-border/80 shadow-soft space-y-4">
                    <p className="text-sm font-bold font-display">Technical Specifications</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-xs font-semibold">Engine Power</Label>
                        <Input name="power" placeholder="e.g. 55 HP" defaultValue="50 HP"
                          className="mt-1.5 h-11 text-sm rounded-xl"
                          onChange={e => setFormPreview(p => ({ ...p, power: e.target.value }))} />
                      </div>
                      <div>
                        <Label className="text-xs font-semibold">Fuel Type</Label>
                        <Input name="fuel" placeholder="Diesel / Petrol / Electric" defaultValue="Diesel"
                          className="mt-1.5 h-11 text-sm rounded-xl"
                          onChange={e => setFormPreview(p => ({ ...p, fuel: e.target.value }))} />
                      </div>
                      <div>
                        <Label className="text-xs font-semibold">Manufacture Year <span className="text-destructive">*</span></Label>
                        <Input name="year" type="number" defaultValue={new Date().getFullYear()} min="1990" max={new Date().getFullYear()}
                          className="mt-1.5 h-11 text-sm rounded-xl"
                          onChange={e => setFormPreview(p => ({ ...p, year: e.target.value }))}
                          required />
                      </div>
                      <div>
                        <Label className="text-xs font-semibold">Price / Day (₹) <span className="text-destructive">*</span></Label>
                        <Input name="price" type="number" defaultValue="2800" min="100"
                          className="mt-1.5 h-11 text-sm rounded-xl"
                          onChange={e => setFormPreview(p => ({ ...p, price: e.target.value }))}
                          required />
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <Button type="button" variant="outline" onClick={() => { setSection("My Equipment"); setImagePreview(null); }}
                      className="flex-1 h-11 rounded-xl cursor-pointer font-bold">Cancel</Button>
                    <Button type="submit" variant="hero" className="flex-[2] h-11 rounded-xl font-bold gap-2 cursor-pointer shadow-glow">
                      <Upload className="h-4 w-4" /> Publish Listing
                    </Button>
                  </div>
                </form>

                {/* Live Preview Card */}
                <div className="hidden xl:block sticky top-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Live Preview</p>
                  <div className="surface-card rounded-3xl border border-border/80 shadow-soft overflow-hidden">
                    <div className="relative aspect-video bg-muted overflow-hidden">
                      {imagePreview ? (
                        <img src={imagePreview} alt="Preview" className="h-full w-full object-cover" />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center">
                          <div className="text-center text-muted-foreground/40">
                            <ImageIcon className="h-12 w-12 mx-auto" />
                            <p className="text-xs mt-2 font-medium">No photo uploaded</p>
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-500/90 text-[10px] font-bold text-white shadow-sm">Available</span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-sm leading-tight font-display text-foreground">
                        {formPreview.name || <span className="text-muted-foreground/50 italic">Machine name...</span>}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">{formPreview.category} · {formPreview.location}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {formPreview.power && (
                          <span className="flex items-center gap-1 text-[11px] bg-muted/60 px-2.5 py-1 rounded-lg text-muted-foreground">
                            <Zap className="h-3 w-3 text-primary" />{formPreview.power}
                          </span>
                        )}
                        {formPreview.fuel && (
                          <span className="flex items-center gap-1 text-[11px] bg-muted/60 px-2.5 py-1 rounded-lg text-muted-foreground">
                            <Fuel className="h-3 w-3 text-primary" />{formPreview.fuel}
                          </span>
                        )}
                        {formPreview.year && (
                          <span className="flex items-center gap-1 text-[11px] bg-muted/60 px-2.5 py-1 rounded-lg text-muted-foreground">
                            <CalendarCheck className="h-3 w-3 text-primary" />{formPreview.year}
                          </span>
                        )}
                      </div>
                      <div className="mt-4 pt-3.5 border-t border-border/60 flex items-center justify-between">
                        <div>
                          <p className="text-lg font-extrabold text-primary font-display">
                            {formPreview.price ? `₹${Number(formPreview.price).toLocaleString("en-IN")}` : "₹—"}
                          </p>
                          <p className="text-[10px] text-muted-foreground font-medium">per day</p>
                        </div>
                        <span className="flex items-center gap-1 text-xs font-bold text-amber-500">
                          <Star className="h-3.5 w-3.5 fill-amber-400" /> New Listing
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-muted-foreground/60 text-center mt-3">Preview updates dynamically as you type</p>
                </div>
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}

function Counter({ to }: { to: number }) {
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    const controls = animate(mv, to, {
      duration: 1.4, ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString("en-IN")),
    });
    return () => controls.stop();
  }, [to, mv]);
  return <>{display}</>;
}
