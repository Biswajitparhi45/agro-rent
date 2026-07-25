import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck,
  Users,
  Tractor,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
  KeyRound,
  LayoutDashboard,
  DollarSign,
  Settings,
  XCircle,
  Plus,
} from "lucide-react";
import { toast } from "sonner";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { useAuth } from "@/lib/auth/context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { UserRole } from "@/lib/db/models/user.model";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Portal — AgriRent RBAC Management" },
      { name: "description", content: "Platform governance, user management, and equipment verification." },
    ],
  }),
  component: AdminDashboard,
});

function AdminDashboard() {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState("Overview");

  // Admin users list state
  const [usersList, setUsersList] = useState([
    { id: "u1", name: "Anil Parhi (Admin)", email: "admin@agrirent.in", role: "admin" as UserRole, status: "Active (Current)" },
    { id: "u2", name: "Harpreet Singh (Owner)", email: "owner@agrirent.in", role: "owner" as UserRole, status: "Active" },
    { id: "u3", name: "Rajesh Kumar (Farmer)", email: "farmer@agrirent.in", role: "farmer" as UserRole, status: "Active" },
    { id: "u4", name: "Sunita Patel", email: "sunita@agri.org", role: "owner" as UserRole, status: "Active" },
    { id: "u5", name: "Vikas Sharma", email: "vikas@farm.in", role: "farmer" as UserRole, status: "Active" },
  ]);

  // Equipment verification list
  const [pendingListings, setPendingListings] = useState([
    { id: "p1", name: "Mahindra Yuvo Tech+ 575 4WD", owner: "Harpreet Singh", price: 3200, status: "Pending Inspection" },
    { id: "p2", name: "Swaraj 855 FE Tractor", owner: "Sunita Patel", price: 2900, status: "Pending Inspection" },
  ]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-sm font-medium text-muted-foreground animate-pulse">Loading Admin Portal...</p>
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    return (
      <div className="gradient-hero min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-1 items-center justify-center px-4 py-28">
          <div className="glass max-w-md w-full rounded-3xl p-8 text-center shadow-float">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-destructive/15 text-destructive">
              <AlertTriangle className="h-6 w-6" />
            </span>
            <h1 className="mt-6 text-xl font-extrabold">Access Denied</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              You need <strong className="text-foreground">Admin RBAC privileges</strong> to access this dashboard.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <Button asChild variant="hero">
                <Link to="/auth">Sign in as Admin</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleRoleChange = (id: string, newRole: UserRole) => {
    setUsersList((prev) =>
      prev.map((u) => (u.id === id ? { ...u, role: newRole } : u)),
    );
    toast.success(`User role updated to ${newRole.toUpperCase()}.`);
  };

  const handleApproveListing = (id: string) => {
    setPendingListings((prev) => prev.filter((p) => p.id !== id));
    toast.success("Machinery listing approved and published to marketplace!");
  };

  return (
    <div className="gradient-hero min-h-screen flex flex-col">
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 pt-28 pb-16 sm:px-8 flex-1 w-full space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-border pb-6">
          <div>
            <div className="flex items-center gap-2">
              <Badge className="bg-amber-500/15 text-amber-600 border-amber-500/30 gap-1 font-bold">
                <ShieldCheck className="h-3.5 w-3.5" />
                RBAC Level: ADMIN
              </Badge>
              <span className="text-xs text-muted-foreground">System Governance</span>
            </div>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight">System Admin Console</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage platform users, verify equipment listings, and inspect RBAC role assignments.
            </p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-2 border-b border-border/60 pb-3">
          {[
            { id: "Overview", icon: LayoutDashboard },
            { id: "Users", icon: Users },
            { id: "Listings", icon: Tractor },
            { id: "Financials", icon: DollarSign },
            { id: "Settings", icon: Settings },
          ].map((t) => {
            const IconComp = t.icon;
            const active = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer",
                  active ? "bg-primary text-primary-foreground shadow-glow" : "bg-card/60 text-muted-foreground hover:bg-accent",
                )}
              >
                <IconComp className="h-4 w-4" />
                <span>{t.id}</span>
              </button>
            );
          })}
        </div>

        {/* Overview Tab */}
        {activeTab === "Overview" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Registered Users", val: usersList.length.toString(), sub: "Farmers, Owners, Admins", icon: Users },
                { label: "Active Listings", val: "486", sub: "Verified Machinery", icon: Tractor },
                { label: "System Roles", val: "3 Active", sub: "Farmer, Owner, Admin", icon: KeyRound },
                { label: "Platform Commission", val: "5%", sub: "Net Platform Margin", icon: BarChart3 },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="glass rounded-3xl p-5 shadow-soft border border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-muted-foreground uppercase">{s.label}</span>
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="mt-3 text-2xl font-extrabold">{s.val}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.sub}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* User Management & RBAC Tab */}
        {(activeTab === "Overview" || activeTab === "Users") && (
          <div className="glass rounded-3xl p-6 shadow-soft border border-border space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold">RBAC Role Audit & User Management</h2>
                <p className="text-xs text-muted-foreground">Manage user accounts and change role permissions.</p>
              </div>
              <Badge variant="outline" className="gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> Active Session Sync
              </Badge>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-border text-muted-foreground uppercase font-bold">
                    <th className="py-3 px-4">User</th>
                    <th className="py-3 px-4">Email</th>
                    <th className="py-3 px-4">Assigned Role (RBAC)</th>
                    <th className="py-3 px-4">Change Role</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {usersList.map((u) => (
                    <tr key={u.id} className="hover:bg-accent/40 transition-colors">
                      <td className="py-3 px-4 font-bold">{u.name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{u.email}</td>
                      <td className="py-3 px-4">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase",
                            u.role === "admin"
                              ? "bg-amber-500/15 text-amber-600"
                              : u.role === "owner"
                                ? "bg-emerald-500/15 text-emerald-600"
                                : "bg-blue-500/15 text-blue-600",
                          )}
                        >
                          {u.role}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1">
                          {(["farmer", "owner", "admin"] as UserRole[]).map((r) => (
                            <button
                              key={r}
                              onClick={() => handleRoleChange(u.id, r)}
                              className={cn(
                                "px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase cursor-pointer transition-colors",
                                u.role === r ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent",
                              )}
                            >
                              {r}
                            </button>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-xs font-semibold text-emerald-600">{u.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Listings Approval Tab */}
        {(activeTab === "Listings") && (
          <div className="glass rounded-3xl p-6 shadow-soft border border-border space-y-4">
            <h2 className="text-lg font-bold">Pending Machinery Verification</h2>
            <p className="text-xs text-muted-foreground">Approve new owner listings before they appear on the public marketplace.</p>

            {pendingListings.length === 0 ? (
              <p className="text-xs text-muted-foreground py-6 text-center">No pending machinery verification requests.</p>
            ) : (
              <div className="space-y-3">
                {pendingListings.map((p) => (
                  <div key={p.id} className="surface-card rounded-2xl p-4 border border-border/80 flex items-center justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-sm">{p.name}</h4>
                      <p className="text-xs text-muted-foreground">Owner: {p.owner} · ₹{p.price}/day</p>
                    </div>
                    <Button size="sm" variant="hero" onClick={() => handleApproveListing(p.id)} className="gap-1 text-xs">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Approve Listing
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Financial Oversight Tab */}
        {activeTab === "Financials" && (
          <div className="glass rounded-3xl p-6 shadow-soft border border-border space-y-4">
            <h2 className="text-lg font-bold">Platform Financial Governance</h2>
            <p className="text-xs text-muted-foreground">Commission split logs and transactional audits.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="surface-card p-5 rounded-2xl border border-border">
                <p className="text-xs text-muted-foreground">Total Platform Volume</p>
                <p className="text-2xl font-extrabold text-primary mt-1">₹72,40,000</p>
              </div>
              <div className="surface-card p-5 rounded-2xl border border-border">
                <p className="text-xs text-muted-foreground">Net Platform Revenue (5%)</p>
                <p className="text-2xl font-extrabold text-emerald-600 mt-1">₹3,62,000</p>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "Settings" && (
          <div className="glass rounded-3xl p-6 shadow-soft border border-border space-y-4 max-w-xl">
            <h2 className="text-lg font-bold">System Configuration</h2>
            <div className="space-y-3">
              <div>
                <Label className="text-xs">Platform Commission Rate (%)</Label>
                <Input defaultValue="5" className="mt-1 h-9 text-xs rounded-xl" />
              </div>
              <div>
                <Label className="text-xs">MongoDB Atlas Cluster URI</Label>
                <Input defaultValue="agrirent.vwhemnq.mongodb.net" disabled className="mt-1 h-9 text-xs rounded-xl opacity-70" />
              </div>
              <Button size="sm" variant="hero" onClick={() => toast.success("System configurations saved.")}>
                Save Platform Settings
              </Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
