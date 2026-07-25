import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useMotionValue, animate } from "motion/react";
import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  BarChart3,
  CalendarCheck,
  Clock,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Sprout,
  Tractor,
  Wallet,
  Plus,
  CheckCircle2,
  XCircle,
  Send,
  Trash2,
  Edit,
  ShieldCheck,
  User,
  ArrowUpRight,
  TrendingUp,
  Sliders,
  Bell,
  Building,
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
      {
        name: "description",
        content: "Track revenue, manage listings and approve booking requests from a single owner dashboard.",
      },
      { property: "og:title", content: "Owner Dashboard | AgriRent" },
      { property: "og:description", content: "Revenue, listings and booking requests at a glance." },
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

function Dashboard() {
  const { user } = useAuth();
  const [section, setSection] = useState("Dashboard");
  const [ownerEquipment, setOwnerEquipment] = useState<Equipment[]>(initialEquipment);
  const [showAddModal, setShowAddModal] = useState(false);

  // Messages state
  const [activeChat, setActiveChat] = useState("Gurpreet Singh");
  const [chatMessages, setChatMessages] = useState<Record<string, { text: string; from: "user" | "owner"; time: string }[]>>({
    "Gurpreet Singh": [
      { text: "Hello! Is the Combine Harvester XL available for harvest next Monday?", from: "user", time: "10:30 AM" },
      { text: "Yes Gurpreet, it's fully serviced and ready for pickup.", from: "owner", time: "10:32 AM" },
    ],
    "Ravi Kumar": [
      { text: "Can you confirm delivery location near Ludhiana?", from: "user", time: "09:15 AM" },
    ],
    "Vikas Sharma": [
      { text: "Thanks for approving the tractor booking!", from: "user", time: "Yesterday" },
    ],
  });
  const [newMessage, setNewMessage] = useState("");

  // Booking Requests state
  const [bookingRequests, setBookingRequests] = useState([
    { id: "b1", machine: "Heavy Duty Rotavator", renter: "Ravi Kumar", dates: "3 Days (Oct 12 - Oct 15)", total: 2850, status: "pending" },
    { id: "b2", machine: "Compact Utility Tractor 45HP", renter: "Sunita Devi", dates: "5 Days (Oct 14 - Oct 19)", total: 12000, status: "pending" },
    { id: "b3", machine: "Combine Harvester XL", renter: "Co-op Anand", dates: "4 Days (Oct 18 - Oct 22)", total: 31200, status: "approved" },
    { id: "b4", machine: "Precision Seed Drill", renter: "Vikas Sharma", dates: "2 Days (Oct 20 - Oct 22)", total: 2700, status: "approved" },
  ]);

  const userName = user?.name || "Harpreet Singh (Owner)";
  const userRole = user?.role ? user.role.toUpperCase() : "OWNER";

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setChatMessages((prev) => ({
      ...prev,
      [activeChat]: [
        ...(prev[activeChat] || []),
        { text: newMessage.trim(), from: "owner", time: "Just now" },
      ],
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

    if (!name) {
      toast.error("Please enter equipment name.");
      return;
    }

    const newItem: Equipment = {
      id: `eq_${Date.now()}`,
      name,
      category,
      price,
      location,
      rating: 4.9,
      reviews: 1,
      available: true,
      owner: userName,
      ownerSince: "2026",
      power: "50 HP",
      fuel: "Diesel",
      width: "2.1 m",
      year: 2025,
      summary: "High efficiency machinery listed for seasonal farm operations.",
      image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?auto=format&fit=crop&q=80&w=800",
    };

    setOwnerEquipment((prev) => [newItem, ...prev]);
    setShowAddModal(false);
    toast.success(`${name} listed successfully on AgriRent!`);
  };

  const toggleEquipmentAvailability = (id: string) => {
    setOwnerEquipment((prev) =>
      prev.map((item) => (item.id === id ? { ...item, available: !item.available } : item)),
    );
    toast.success("Equipment status updated.");
  };

  const updateBookingStatus = (id: string, status: "approved" | "rejected" | "completed") => {
    setBookingRequests((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status } : b)),
    );
    toast.success(`Booking request marked as ${status.toUpperCase()}.`);
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar p-4 lg:flex">
        <Link to="/" className="flex items-center gap-2.5 px-2 py-3">
          <span className="gradient-primary grid h-9 w-9 place-items-center rounded-xl text-primary-foreground shadow-glow">
            <Sprout className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-extrabold">
            Agri<span className="text-primary">Rent</span>
          </span>
        </Link>
        <nav className="mt-6 space-y-1">
          {nav.map((n) => (
            <button
              key={n.label}
              onClick={() => setSection(n.label)}
              className={cn(
                "press relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors cursor-pointer",
                section === n.label
                  ? "text-sidebar-accent-foreground font-bold"
                  : "text-muted-foreground hover:bg-sidebar-accent/60",
              )}
            >
              {section === n.label && (
                <motion.span
                  layoutId="side-active"
                  className="absolute inset-0 rounded-xl bg-sidebar-accent"
                  transition={{ type: "spring", stiffness: 340, damping: 32 }}
                />
              )}
              <n.icon className="relative h-4 w-4" />
              <span className="relative">{n.label}</span>
            </button>
          ))}
        </nav>
        <Button asChild variant="soft" size="sm" className="mt-auto">
          <Link to="/equipment">Back to marketplace</Link>
        </Button>
      </aside>

      {/* Main Workspace Area */}
      <main className="min-w-0 flex-1 px-5 py-8 sm:px-8">
        {/* Workspace Top Header */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-6">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <p className="text-xs tracking-[0.18em] text-primary uppercase font-bold">Owner Workspace</p>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 border border-emerald-500/30">
                RBAC: {userRole}
              </span>
            </div>
            <h1 className="truncate text-2xl font-extrabold sm:text-3xl mt-1">{userName}</h1>
          </div>
          <Button
            variant="hero"
            size="sm"
            onClick={() => setShowAddModal(true)}
            className="cursor-pointer shadow-glow gap-1.5 shrink-0"
          >
            <Plus className="h-4 w-4" /> Add Equipment
          </Button>
        </header>

        {/* Tab 1: Dashboard Overview */}
        {section === "Dashboard" && (
          <div className="mt-6 space-y-6">
            {/* Quick Stats Grid */}
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { label: "Total Equipment", value: ownerEquipment.length, prefix: "" },
                { label: "Revenue (6 mo)", value: 780000, prefix: "₹" },
                { label: "Active Rentals", value: 146, prefix: "" },
                { label: "Pending Requests", value: bookingRequests.filter((b) => b.status === "pending").length, prefix: "" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="surface-card p-6 rounded-3xl border border-border/80"
                >
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="font-display mt-3 text-3xl font-extrabold">
                    {s.prefix}
                    <Counter to={s.value} />
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Revenue Graph & Bookings List */}
            <div className="grid gap-6 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="surface-card p-6 rounded-3xl border border-border/80">
                <h2 className="font-display text-base font-bold">Revenue Trend</h2>
                <div className="mt-6 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.45} />
                          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="4 4" stroke="var(--color-border)" vertical={false} />
                      <XAxis dataKey="m" tickLine={false} axisLine={false} fontSize={12} />
                      <YAxis tickLine={false} axisLine={false} fontSize={12} width={55} />
                      <Tooltip contentStyle={{ borderRadius: 16, border: "1px solid var(--color-border)", background: "var(--color-card)" }} />
                      <Area type="monotone" dataKey="v" stroke="var(--color-primary)" strokeWidth={2.5} fill="url(#rev)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.section>

              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="surface-card p-6 rounded-3xl border border-border/80">
                <h2 className="font-display text-base font-bold">Recent Rental Activity</h2>
                <ul className="mt-5 space-y-3">
                  {ownerEquipment.slice(0, 4).map((e) => (
                    <li key={e.id} className="flex items-center gap-3 rounded-2xl bg-muted/60 p-3">
                      <img src={e.image} alt={e.name} className="h-11 w-14 rounded-lg object-cover" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold">{e.name}</p>
                        <p className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" /> 3 days · {inr(e.price * 3)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.section>
            </div>
          </div>
        )}

        {/* Tab 2: My Equipment Inventory */}
        {section === "My Equipment" && (
          <div className="mt-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Equipment Inventory</h2>
                <p className="text-xs text-muted-foreground">Manage your machinery listings, rental prices, and status.</p>
              </div>
              <Button size="sm" variant="hero" onClick={() => setShowAddModal(true)} className="gap-1.5">
                <Plus className="h-4 w-4" /> Add Machine
              </Button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ownerEquipment.map((item) => (
                <div key={item.id} className="surface-card rounded-3xl overflow-hidden border border-border/80 p-5 space-y-4">
                  <div className="relative aspect-video rounded-2xl overflow-hidden">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    <span className={cn("absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase", item.available ? "bg-emerald-500/90 text-white" : "bg-muted/90 text-muted-foreground")}>
                      {item.available ? "Available" : "In Use"}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-base">{item.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.location} · {item.power}</p>
                  </div>

                  <div className="flex items-center justify-between border-t border-border/60 pt-3">
                    <div>
                      <p className="text-sm font-extrabold text-primary">{inr(item.price)}</p>
                      <p className="text-[10px] text-muted-foreground">per day</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Availability</span>
                      <Switch checked={item.available} onCheckedChange={() => toggleEquipmentAvailability(item.id)} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Bookings Management */}
        {section === "Bookings" && (
          <div className="mt-6 space-y-6">
            <div>
              <h2 className="text-xl font-bold">Booking Requests & Approval</h2>
              <p className="text-xs text-muted-foreground">Approve, reject or inspect rental orders from farmers.</p>
            </div>

            <div className="space-y-4">
              {bookingRequests.map((b) => (
                <div key={b.id} className="surface-card rounded-2xl p-5 border border-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={cn("px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase", b.status === "pending" ? "bg-amber-500/15 text-amber-600" : b.status === "approved" ? "bg-emerald-500/15 text-emerald-600" : "bg-destructive/15 text-destructive")}>
                        {b.status}
                      </span>
                      <span className="text-xs text-muted-foreground">Booking ID: #{b.id}</span>
                    </div>
                    <h3 className="text-base font-bold">{b.machine}</h3>
                    <p className="text-xs text-muted-foreground">Renter: <strong className="text-foreground">{b.renter}</strong> · {b.dates}</p>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-right">
                      <p className="text-base font-extrabold text-primary">{inr(b.total)}</p>
                      <p className="text-[10px] text-muted-foreground">Total Payout</p>
                    </div>

                    {b.status === "pending" && (
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="hero" onClick={() => updateBookingStatus(b.id, "approved")} className="h-8 text-xs gap-1">
                          <CheckCircle2 className="h-3.5 w-3.5" /> Accept
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => updateBookingStatus(b.id, "rejected")} className="h-8 text-xs gap-1">
                          <XCircle className="h-3.5 w-3.5" /> Reject
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Direct Messages */}
        {section === "Messages" && (
          <div className="mt-6 grid lg:grid-cols-12 gap-6 surface-card rounded-3xl border border-border/80 overflow-hidden min-h-[500px]">
            {/* Contacts Sidebar */}
            <div className="lg:col-span-4 border-r border-border/60 p-4 space-y-3 bg-muted/30">
              <h3 className="font-bold text-sm">Farmer Messages</h3>
              <div className="space-y-1">
                {Object.keys(chatMessages).map((contact) => (
                  <button
                    key={contact}
                    onClick={() => setActiveChat(contact)}
                    className={cn(
                      "w-full text-left p-3 rounded-2xl transition-colors cursor-pointer flex items-center gap-3",
                      activeChat === contact ? "bg-primary/10 text-primary font-bold" : "hover:bg-accent text-foreground",
                    )}
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                      {contact.charAt(0)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs truncate">{contact}</p>
                      <p className="text-[10px] text-muted-foreground truncate">{chatMessages[contact]?.slice(-1)[0]?.text}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Chat Area */}
            <div className="lg:col-span-8 p-5 flex flex-col justify-between">
              <div className="border-b border-border/60 pb-3 flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                  {activeChat.charAt(0)}
                </span>
                <span className="font-bold text-sm">{activeChat}</span>
              </div>

              <div className="flex-1 overflow-y-auto my-4 space-y-3 pr-2">
                {chatMessages[activeChat]?.map((m, idx) => (
                  <div key={idx} className={cn("flex flex-col max-w-[75%]", m.from === "owner" ? "ml-auto items-end" : "mr-auto items-start")}>
                    <div className={cn("p-3 rounded-2xl text-xs", m.from === "owner" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground")}>
                      {m.text}
                    </div>
                    <span className="text-[9px] text-muted-foreground mt-1 px-1">{m.time}</span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="flex items-center gap-2 border-t border-border/60 pt-3">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder={`Reply to ${activeChat}...`}
                  className="h-10 text-xs rounded-xl flex-1"
                />
                <Button type="submit" size="sm" variant="hero" className="h-10 px-4 rounded-xl gap-1">
                  <Send className="h-4 w-4" /> Send
                </Button>
              </form>
            </div>
          </div>
        )}

        {/* Tab 5: Payments & Earnings */}
        {section === "Payments" && (
          <div className="mt-6 space-y-6">
            <div>
              <h2 className="text-xl font-bold">Earnings & Payouts</h2>
              <p className="text-xs text-muted-foreground">Track completed payouts and bank transfers.</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              <div className="surface-card p-5 rounded-3xl border border-border/80">
                <p className="text-xs text-muted-foreground">Total Revenue Earned</p>
                <p className="text-2xl font-extrabold text-primary mt-2">₹7,80,000</p>
              </div>
              <div className="surface-card p-5 rounded-3xl border border-border/80">
                <p className="text-xs text-muted-foreground">Pending Payout Balance</p>
                <p className="text-2xl font-extrabold mt-2">₹34,200</p>
              </div>
              <div className="surface-card p-5 rounded-3xl border border-border/80">
                <p className="text-xs text-muted-foreground">Next Scheduled Payout</p>
                <p className="text-2xl font-extrabold mt-2">Oct 28, 2026</p>
              </div>
            </div>

            <div className="surface-card rounded-3xl p-6 border border-border/80 space-y-4">
              <h3 className="font-bold text-sm">Payout History</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-border/60 text-muted-foreground uppercase">
                      <th className="py-2.5 px-3">Date</th>
                      <th className="py-2.5 px-3">Booking Reference</th>
                      <th className="py-2.5 px-3">Amount</th>
                      <th className="py-2.5 px-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {[
                      { date: "Oct 22, 2026", ref: "#BK-9842", amt: "₹23,400", status: "Transferred" },
                      { date: "Oct 15, 2026", ref: "#BK-9831", amt: "₹14,500", status: "Transferred" },
                      { date: "Oct 08, 2026", ref: "#BK-9805", amt: "₹8,200", status: "Transferred" },
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="py-3 px-3">{row.date}</td>
                        <td className="py-3 px-3 font-mono">{row.ref}</td>
                        <td className="py-3 px-3 font-bold text-primary">{row.amt}</td>
                        <td className="py-3 px-3 text-emerald-600 font-semibold">{row.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 6: Analytics */}
        {section === "Analytics" && (
          <div className="mt-6 space-y-6">
            <div>
              <h2 className="text-xl font-bold">Machinery Utilization Analytics</h2>
              <p className="text-xs text-muted-foreground">Performance insights for your equipment portfolio.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="surface-card p-6 rounded-3xl border border-border/80 space-y-4">
                <h3 className="font-bold text-sm">Top Performing Machine</h3>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary/20 text-primary font-bold">
                    1
                  </span>
                  <div>
                    <p className="font-bold text-sm">Combine Harvester XL</p>
                    <p className="text-xs text-muted-foreground">₹2,84,000 total revenue (84% utilization)</p>
                  </div>
                </div>
              </div>

              <div className="surface-card p-6 rounded-3xl border border-border/80 space-y-4">
                <h3 className="font-bold text-sm">Peak Seasonal Demand</h3>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-500/20 text-emerald-600 font-bold">
                    ★
                  </span>
                  <div>
                    <p className="font-bold text-sm">Oct — Nov Harvest Window</p>
                    <p className="text-xs text-muted-foreground">3.2x average booking inquiry rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 7: Settings */}
        {section === "Settings" && (
          <div className="mt-6 space-y-6 max-w-2xl">
            <div>
              <h2 className="text-xl font-bold">Owner Profile & Payout Settings</h2>
              <p className="text-xs text-muted-foreground">Update your details and bank account for payouts.</p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); toast.success("Settings saved successfully."); }} className="surface-card p-6 rounded-3xl border border-border/80 space-y-4">
              <div>
                <Label className="text-xs">Full Name</Label>
                <Input defaultValue={userName} className="mt-1.5 h-10 text-xs rounded-xl" />
              </div>

              <div>
                <Label className="text-xs">Email Address</Label>
                <Input defaultValue={user?.email || "owner@agrirent.in"} className="mt-1.5 h-10 text-xs rounded-xl" />
              </div>

              <div>
                <Label className="text-xs">Payout Bank Account / UPI ID</Label>
                <Input defaultValue="HDFC Bank · SB-98421094 (IFSC: HDFC0001294)" className="mt-1.5 h-10 text-xs rounded-xl" />
              </div>

              <Button type="submit" variant="hero" size="sm" className="rounded-xl font-bold">
                Save Changes
              </Button>
            </form>
          </div>
        )}
      </main>

      {/* Add Equipment Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setShowAddModal(false)} className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative glass w-full max-w-md rounded-3xl p-6 shadow-float border border-border/80 bg-card"
          >
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <h3 className="font-bold text-base">List New Machinery</h3>
              <button onClick={() => setShowAddModal(false)} className="text-muted-foreground hover:text-foreground text-xs cursor-pointer">
                ✕
              </button>
            </div>

            <form onSubmit={handleAddEquipment} className="mt-4 space-y-3">
              <div>
                <Label className="text-xs">Machine Name</Label>
                <Input name="name" placeholder="John Deere 5310 55HP" className="mt-1 h-9 text-xs rounded-xl" required />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-xs">Category</Label>
                  <Input name="category" defaultValue="Tractor" className="mt-1 h-9 text-xs rounded-xl" required />
                </div>
                <div>
                  <Label className="text-xs">Price / Day (₹)</Label>
                  <Input name="price" type="number" defaultValue="2800" className="mt-1 h-9 text-xs rounded-xl" required />
                </div>
              </div>

              <div>
                <Label className="text-xs">Location / District</Label>
                <Input name="location" defaultValue="Amritsar, Punjab" className="mt-1 h-9 text-xs rounded-xl" required />
              </div>

              <Button type="submit" variant="hero" className="w-full h-10 rounded-xl font-bold mt-2">
                Publish Listing
              </Button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}

function Counter({ to }: { to: number }) {
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    const controls = animate(mv, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString("en-IN")),
    });
    return () => controls.stop();
  }, [to, mv]);
  return <>{display}</>;
}
