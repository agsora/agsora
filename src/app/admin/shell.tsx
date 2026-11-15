import Link from "next/link";
import { redirect } from "next/navigation";
import {
  BarChart3,
  Briefcase,
  CalendarDays,
  ClipboardList,
  ExternalLink,
  FileText,
  Inbox,
  LogOut,
  Megaphone,
  Repeat,
  Search,
  Settings,
  Users,
} from "lucide-react";
import { adminEnabled, getSession, type Session } from "@/lib/admin-auth";
import { AdminBrand } from "./brand";
import { logout } from "./leads/actions";
import { LoginForm } from "./leads/login-form";

type Role = Session["role"];

/** Where each role lands after login. */
export const homeFor = (role: Role) => (role === "owner" ? "/admin" : "/admin/worksheet");

/**
 * Disabled notice or login form when the visitor may not see the page; null when they may.
 * A signed-in visitor of the wrong role is sent to their own home page.
 */
export async function adminGate(roles: Role[] = ["owner"]) {
  if (!adminEnabled()) {
    return (
      <div className="sn-auth">
        <div className="sn-card sn-auth-card">
          <div style={{ marginBottom: "1.5rem" }}>
            <AdminBrand center />
          </div>
          <h2 className="sn-auth-title">Admin nonaktif</h2>
          <p>
            Isi <code>ADMIN_PASSWORD</code> di environment untuk mengaktifkan halaman ini.
          </p>
        </div>
      </div>
    );
  }
  const session = await getSession();
  if (!session) return <LoginForm />;
  if (!roles.includes(session.role)) redirect(homeFor(session.role));
  return null;
}

const NAV = [
  { href: "/admin", key: "overview", label: "Ringkasan", icon: BarChart3, roles: ["owner"] },
  { href: "/admin/worksheet", key: "worksheet", label: "Lembar Kerja", icon: ClipboardList, roles: ["sales"] },
  { href: "/admin/leads", key: "leads", label: "Leads", icon: Inbox, roles: ["owner"] },
  { href: "/admin/followup", key: "followup", label: "Follow Up Customer", icon: Repeat, roles: ["owner"] },
  { href: "/admin/quotes", key: "quotes", label: "Proposal Penawaran", icon: FileText, roles: ["owner", "sales"] },
  { href: "/admin/content", key: "content", label: "Kalender Konten", icon: CalendarDays, roles: ["owner"] },
  { href: "/admin/ads", key: "ads", label: "Analisa Iklan", icon: Megaphone, roles: ["owner"] },
  { href: "/admin/recruitment", key: "recruitment", label: "Rekrutmen", icon: Briefcase, roles: ["owner"] },
  { href: "/admin/website", key: "website", label: "Atur Website", icon: Settings, roles: ["owner"] },
  { href: "/admin/sales", key: "sales", label: "Tim Sales", icon: Users, roles: ["owner"] },
] as const;

export type NavKey = (typeof NAV)[number]["key"];

export async function AdminShell({
  active,
  title,
  subtitle,
  children,
}: {
  active: NavKey;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const session = await getSession();
  const role: Role = session?.role ?? "owner";
  const name = session?.role === "sales" ? session.name : "Owner";
  const items = NAV.filter((n) => (n.roles as readonly Role[]).includes(role));

  return (
    <div className="sn-layout">
      <aside className="sn-menu">
        <div className="sn-brand">
          <AdminBrand />
        </div>
        <div className="sn-menu-header">Menu</div>
        {items.map(({ href, key, label, icon: Icon }) => (
          <Link key={key} href={href} className={`sn-menu-item ${active === key ? "active" : ""}`}>
            <Icon size={18} /> {label}
          </Link>
        ))}
        {role === "owner" ? (
          <>
            <div className="sn-menu-header">Lainnya</div>
            <a href="https://www.agsora.tech" target="_blank" rel="noopener noreferrer" className="sn-menu-item">
              <ExternalLink size={18} /> Lihat website
            </a>
          </>
        ) : null}
        <form action={logout} style={{ marginTop: "auto", paddingBottom: "1rem" }}>
          <button className="sn-menu-item">
            <LogOut size={18} /> Keluar
          </button>
        </form>
      </aside>
      <main className="sn-main">
        <div className="sn-navbar">
          {role === "owner" ? (
            <form action="/admin/leads" className="sn-search" role="search">
              <Search size={18} />
              <input name="q" placeholder="Cari lead: nama, email, perusahaan…" aria-label="Cari lead" maxLength={60} />
            </form>
          ) : (
            <strong>{title}</strong>
          )}
          <div className="sn-user">
            <div className="sn-user-text">
              <strong>{name}</strong>
              <span className="sn-muted">{role === "owner" ? title : "Sales"}</span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/admin/avatar.png" alt="" width={40} height={40} className="sn-avatar" />
          </div>
        </div>
        {subtitle ? <p className="sn-muted" style={{ margin: "-0.5rem 0 1.25rem" }}>{subtitle}</p> : null}
        {children}
      </main>
    </div>
  );
}
