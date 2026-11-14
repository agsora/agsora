import Link from "next/link";
import { ExternalLink, Inbox, LogOut, MessageCircle, Sparkles, Trophy, Users, XCircle } from "lucide-react";
import { adminEnabled, isAdmin } from "@/lib/admin-auth";
import { LEAD_STATUSES, type LeadStatus } from "@/lib/lead-status";
import { logout, setStatus } from "./actions";
import { LoginForm } from "./login-form";

type Lead = {
  id: number;
  name: string;
  company: string | null;
  email: string;
  phone: string;
  need: string | null;
  budget: string | null;
  description: string;
  plan: string | null;
  source_page: string | null;
  locale: string;
  status: LeadStatus;
  created_at: string;
};

function supabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  return url && key ? { url, key } : null;
}

async function fetchLeads(status?: string): Promise<Lead[] | null> {
  const db = supabase();
  if (!db) return null;
  const filter = status && LEAD_STATUSES.includes(status as LeadStatus) ? `&status=eq.${status}` : "";
  const res = await fetch(`${db.url}/rest/v1/leads?select=*&order=created_at.desc&limit=200${filter}`, {
    headers: { apikey: db.key },
    cache: "no-store",
  });
  return res.ok ? ((await res.json()) as Lead[]) : null;
}

async function fetchCounts(): Promise<Record<LeadStatus, number> | null> {
  const db = supabase();
  if (!db) return null;
  const res = await fetch(`${db.url}/rest/v1/leads?select=status&limit=10000`, {
    headers: { apikey: db.key },
    cache: "no-store",
  });
  if (!res.ok) return null;
  const counts = { new: 0, contacted: 0, won: 0, lost: 0 };
  for (const row of (await res.json()) as { status: LeadStatus }[]) counts[row.status] += 1;
  return counts;
}

function waLink(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const intl = digits.startsWith("0") ? `62${digits.slice(1)}` : digits;
  return `https://wa.me/${intl}`;
}

const statusLabel: Record<LeadStatus, string> = {
  new: "Baru",
  contacted: "Dihubungi",
  won: "Menang",
  lost: "Batal",
};

const actionLabel: Record<LeadStatus, string> = {
  new: "Tandai baru",
  contacted: "Sudah dihubungi",
  won: "Menang",
  lost: "Batal",
};

export default async function LeadsPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
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

  const { status } = await searchParams;
  const active = status && LEAD_STATUSES.includes(status as LeadStatus) ? (status as LeadStatus) : undefined;
  const [leads, counts] = await Promise.all([fetchLeads(active), fetchCounts()]);
  const total = counts ? Object.values(counts).reduce((a, b) => a + b, 0) : 0;

  const stats = [
    { label: "Total leads", value: total, icon: Users, color: "var(--sn-primary)", bg: "var(--sn-primary-soft)" },
    { label: "Baru", value: counts?.new ?? 0, icon: Sparkles, color: "var(--sn-info)", bg: "rgba(3,195,236,.16)" },
    { label: "Dihubungi", value: counts?.contacted ?? 0, icon: MessageCircle, color: "var(--sn-warning)", bg: "rgba(255,171,0,.16)" },
    { label: "Menang", value: counts?.won ?? 0, icon: Trophy, color: "#5fc22d", bg: "rgba(113,221,55,.16)" },
    { label: "Batal", value: counts?.lost ?? 0, icon: XCircle, color: "var(--sn-secondary)", bg: "rgba(133,146,163,.16)" },
  ];

  return (
    <div className="sn-layout">
      <aside className="sn-menu">
        <div className="sn-brand">
          <span className="sn-brand-mark">A</span> AG·SORA
        </div>
        <div className="sn-menu-header">Menu</div>
        <Link href="/admin/leads" className="sn-menu-item active">
          <Inbox size={18} /> Leads
        </Link>
        <a href="/" target="_blank" rel="noopener noreferrer" className="sn-menu-item">
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
          <strong>Leads</strong>
          <span className="sn-muted">Pesan masuk dari form kontak</span>
        </div>

        <section className="sn-stats">
          {stats.map(({ label, value, icon: Icon, color, bg }) => (
            <div key={label} className="sn-card sn-stat">
              <div className="sn-stat-icon" style={{ background: bg, color }}>
                <Icon size={20} />
              </div>
              <div className="sn-stat-label">{label}</div>
              <div className="sn-stat-value">{value}</div>
            </div>
          ))}
        </section>

        <section className="sn-card">
          <div className="sn-card-header">
            <h3 className="sn-card-title">Daftar leads</h3>
            <nav style={{ display: "flex", gap: "0.25rem", flexWrap: "wrap" }}>
              <Link href="/admin/leads" className={`sn-pill ${!active ? "active" : ""}`}>
                Semua
              </Link>
              {LEAD_STATUSES.map((s) => (
                <Link key={s} href={`/admin/leads?status=${s}`} className={`sn-pill ${active === s ? "active" : ""}`}>
                  {statusLabel[s]}
                </Link>
              ))}
            </nav>
          </div>

          {leads === null ? (
            <p className="sn-empty">
              Tidak bisa memuat leads. Pastikan <code>SUPABASE_URL</code> dan <code>SUPABASE_SECRET_KEY</code> sudah diisi dan
              migrasi <code>leads</code> sudah dijalankan.
            </p>
          ) : leads.length === 0 ? (
            <p className="sn-empty">Belum ada lead{active ? ` dengan status ${statusLabel[active].toLowerCase()}` : ""}.</p>
          ) : (
            <div className="sn-table-wrap">
              <table className="sn-table">
                <thead>
                  <tr>
                    <th>Kontak</th>
                    <th>Pesan</th>
                    <th>Detail</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id}>
                      <td style={{ minWidth: "13rem" }}>
                        <strong>{lead.name}</strong>
                        {lead.company ? <div>{lead.company}</div> : null}
                        <div>
                          <a className="sn-link" href={`mailto:${lead.email}`}>
                            {lead.email}
                          </a>
                        </div>
                        <div>
                          <a className="sn-link" href={waLink(lead.phone)} target="_blank" rel="noopener noreferrer">
                            {lead.phone}
                          </a>
                        </div>
                      </td>
                      <td style={{ minWidth: "16rem", maxWidth: "26rem", whiteSpace: "pre-wrap" }}>{lead.description}</td>
                      <td style={{ minWidth: "11rem" }}>
                        {lead.need ? <div>Kebutuhan: {lead.need}</div> : null}
                        {lead.budget ? <div>Budget: {lead.budget}</div> : null}
                        {lead.plan ? <div>Paket: {lead.plan}</div> : null}
                        <div className="sn-muted">
                          {new Date(lead.created_at).toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })} · {lead.locale}
                          {lead.source_page ? ` · ${lead.source_page}` : ""}
                        </div>
                      </td>
                      <td>
                        <span className={`sn-badge sn-${lead.status}`}>{statusLabel[lead.status]}</span>
                      </td>
                      <td>
                        <form action={setStatus} style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                          <input type="hidden" name="id" value={lead.id} />
                          {LEAD_STATUSES.filter((s) => s !== lead.status).map((s) => (
                            <button key={s} name="status" value={s} className="sn-btn sn-btn-sm">
                              {actionLabel[s]}
                            </button>
                          ))}
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
