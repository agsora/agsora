import Link from "next/link";
import { BarChart3, Briefcase, ExternalLink, Inbox, LogOut, Megaphone, Repeat, Search } from "lucide-react";
import { adminEnabled, isAdmin } from "@/lib/admin-auth";
import { AdminBrand } from "./brand";
import { logout } from "./leads/actions";
import { LoginForm } from "./leads/login-form";

/** Disabled notice or login form when the visitor may not see the admin; null when they may. */
export async function adminGate() {
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
  if (!(await isAdmin())) return <LoginForm />;
  return null;
}

const NAV = [
  { href: "/admin", key: "overview", label: "Ringkasan", icon: BarChart3 },
  { href: "/admin/leads", key: "leads", label: "Leads", icon: Inbox },
  { href: "/admin/followup", key: "followup", label: "Follow Up Customer", icon: Repeat },
  { href: "/admin/ads", key: "ads", label: "Analisa Iklan", icon: Megaphone },
  { href: "/admin/recruitment", key: "recruitment", label: "Rekrutmen", icon: Briefcase },
] as const;

export function AdminShell({
  active,
  title,
  subtitle,
  children,
}: {
  active: (typeof NAV)[number]["key"];
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="sn-layout">
      <aside className="sn-menu">
        <div className="sn-brand">
          <AdminBrand />
        </div>
        <div className="sn-menu-header">Menu</div>
        {NAV.map(({ href, key, label, icon: Icon }) => (
          <Link key={key} href={href} className={`sn-menu-item ${active === key ? "active" : ""}`}>
            <Icon size={18} /> {label}
          </Link>
        ))}
        <div className="sn-menu-header">Lainnya</div>
        <a href="https://www.agsora.tech" target="_blank" rel="noopener noreferrer" className="sn-menu-item">
          <ExternalLink size={18} /> Lihat website
        </a>
        <form action={logout} style={{ marginTop: "auto", paddingBottom: "1rem" }}>
          <button className="sn-menu-item">
            <LogOut size={18} /> Keluar
          </button>
        </form>
      </aside>
      <main className="sn-main">
        <div className="sn-navbar">
          <form action="/admin/leads" className="sn-search" role="search">
            <Search size={18} />
            <input name="q" placeholder="Cari lead: nama, email, perusahaan…" aria-label="Cari lead" maxLength={60} />
          </form>
          <div className="sn-user">
            <div className="sn-user-text">
              <strong>Admin</strong>
              <span className="sn-muted">{title}</span>
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
