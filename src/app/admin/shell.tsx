import Link from "next/link";
import { BarChart3, ExternalLink, Inbox, LogOut, Repeat } from "lucide-react";
import { adminEnabled, isAdmin } from "@/lib/admin-auth";
import { logout } from "./leads/actions";
import { LoginForm } from "./leads/login-form";

/** Disabled notice or login form when the visitor may not see the admin; null when they may. */
export async function adminGate() {
  if (!adminEnabled()) {
    return (
      <div className="sn-auth">
        <div className="sn-card">
          <h2 style={{ fontSize: "1.125rem", marginBottom: "0.5rem" }}>Admin nonaktif</h2>
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
  { href: "/admin/followup", key: "followup", label: "Follow Up", icon: Repeat },
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
          <span className="sn-brand-mark">A</span> AG·SORA
        </div>
        <div className="sn-menu-header">Menu</div>
        {NAV.map(({ href, key, label, icon: Icon }) => (
          <Link key={key} href={href} className={`sn-menu-item ${active === key ? "active" : ""}`}>
            <Icon size={18} /> {label}
          </Link>
        ))}
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
          <strong>{title}</strong>
          {subtitle ? <span className="sn-muted">{subtitle}</span> : null}
        </div>
        {children}
      </main>
    </div>
  );
}
