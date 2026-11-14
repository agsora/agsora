import Link from "next/link";
import { Banknote, Repeat, Target, Trophy, Users } from "lucide-react";
import { followupDue, isOpen, nowMs, type Lead } from "@/lib/lead-status";
import { queryLeads } from "@/lib/leads-db";
import { AdminShell, adminGate } from "./shell";

const idr = (n: number) => `Rp${n.toLocaleString("id-ID")}`;
const DAY = 86_400_000;

function delta(cur: number, prev: number) {
  if (prev === 0) return cur === 0 ? null : { text: "baru", up: true };
  const pct = Math.round(((cur - prev) / prev) * 100);
  return { text: `${pct > 0 ? "+" : ""}${pct}%`, up: pct >= 0 };
}

function topCounts(items: { key: string; won: boolean }[], limit = 8) {
  const map = new Map<string, { count: number; won: number }>();
  for (const { key, won } of items) {
    const row = map.get(key) ?? { count: 0, won: 0 };
    row.count += 1;
    if (won) row.won += 1;
    map.set(key, row);
  }
  return [...map.entries()].sort((a, b) => b[1].count - a[1].count).slice(0, limit);
}

export default async function OverviewPage({ searchParams }: { searchParams: Promise<{ days?: string }> }) {
  const gate = await adminGate();
  if (gate) return gate;

  const { days: daysParam } = await searchParams;
  const days = daysParam === "90" ? 90 : daysParam === "7" ? 7 : 30;
  const now = nowMs();
  const since = new Date(now - 2 * days * DAY).toISOString();
  const rows = await queryLeads(
    `select=id,status,created_at,source_page,plan,deal_value,segment,followups&order=created_at.desc&limit=10000&created_at=gte.${since}`
  );

  const periods = [7, 30, 90];
  const header = (
    <nav style={{ display: "flex", gap: "0.25rem", marginBottom: "1.25rem" }}>
      {periods.map((p) => (
        <Link key={p} href={`/admin?days=${p}`} className={`sn-pill ${days === p ? "active" : ""}`}>
          {p} hari
        </Link>
      ))}
    </nav>
  );

  if (rows === null) {
    return (
      <AdminShell active="overview" title="Ringkasan" subtitle="KPI leads dan sumbernya">
        <section className="sn-card">
          <p className="sn-empty">
            Tidak bisa memuat leads. Pastikan <code>SUPABASE_URL</code> dan <code>SUPABASE_SECRET_KEY</code> sudah diisi dan
            migrasi di <code>supabase/migrations</code> sudah dijalankan.
          </p>
        </section>
      </AdminShell>
    );
  }

  const cutoff = now - days * DAY;
  const cur = rows.filter((l) => new Date(l.created_at).getTime() >= cutoff);
  const prev = rows.filter((l) => new Date(l.created_at).getTime() < cutoff);

  const stats = (list: Lead[]) => {
    const won = list.filter((l) => l.status === "won");
    const lost = list.filter((l) => l.status === "lost");
    return {
      total: list.length,
      processed: list.filter((l) => l.status !== "new").length,
      won: won.length,
      lost: lost.length,
      wonValue: won.reduce((sum, l) => sum + (l.deal_value ?? 0), 0),
      winRate: won.length + lost.length ? Math.round((won.length / (won.length + lost.length)) * 100) : null,
    };
  };
  const c = stats(cur);
  const p = stats(prev);
  const pipeline = cur.filter(isOpen).reduce((sum, l) => sum + (l.deal_value ?? 0), 0);
  const dueCount = rows.filter((l) => isOpen(l) && followupDue(l, now)).length;

  const cards = [
    { label: "Leads masuk", value: String(c.total), d: delta(c.total, p.total), icon: Users, color: "var(--sn-primary)", bg: "var(--sn-primary-soft)" },
    { label: "Deal menang", value: String(c.won), d: delta(c.won, p.won), icon: Trophy, color: "#5fc22d", bg: "rgba(113,221,55,.16)" },
    { label: "Win rate", value: c.winRate === null ? "–" : `${c.winRate}%`, d: null, icon: Target, color: "var(--sn-info)", bg: "rgba(3,195,236,.16)" },
    { label: "Nilai deal menang", value: idr(c.wonValue), d: delta(c.wonValue, p.wonValue), icon: Banknote, color: "var(--sn-warning)", bg: "rgba(255,171,0,.16)" },
  ];

  const funnel = [
    { label: "Leads masuk", value: c.total },
    { label: "Sudah diproses", value: c.processed },
    { label: "Menang", value: c.won },
  ];

  const sources = topCounts(
    cur.map((l) => ({ key: (l.source_page ?? "").split("?")[0] || "(langsung)", won: l.status === "won" }))
  );
  const plans = topCounts(
    cur.flatMap((l) =>
      (l.plan ?? "")
        .split(/[,;]/)
        .map((s) => s.trim())
        .filter(Boolean)
        .map((key) => ({ key, won: l.status === "won" }))
    )
  );

  const weeks = Array.from({ length: 8 }, (_, i) => 7 - i).map((w) => ({
    label: w === 0 ? "Minggu ini" : `${w} mgg lalu`,
    count: rows.filter((l) => Math.floor((now - new Date(l.created_at).getTime()) / (7 * DAY)) === w).length,
  }));
  const maxWeek = Math.max(1, ...weeks.map((w) => w.count));

  return (
    <AdminShell active="overview" title="Ringkasan" subtitle="KPI leads dan sumbernya">
      {header}

      <section className="sn-stats">
        {cards.map(({ label, value, d, icon: Icon, color, bg }) => (
          <div key={label} className="sn-card sn-stat">
            <div className="sn-stat-icon" style={{ background: bg, color }}>
              <Icon size={20} />
            </div>
            <div className="sn-stat-label">{label}</div>
            <div className="sn-stat-value">{value}</div>
            {d ? (
              <div className="sn-muted" style={{ color: d.up ? "#5fc22d" : "var(--sn-danger)" }}>
                {d.text} <span style={{ color: "var(--sn-muted)" }}>vs {days} hari sebelumnya</span>
              </div>
            ) : null}
          </div>
        ))}
      </section>

      {dueCount > 0 ? (
        <Link href="/admin/followup?due=1" className="sn-card sn-alert">
          <Repeat size={18} /> <strong>{dueCount} lead jatuh tempo follow up</strong>
          <span className="sn-link" style={{ marginLeft: "auto" }}>
            Buka papan follow up →
          </span>
        </Link>
      ) : null}

      <div className="sn-grid-2">
        <section className="sn-card">
          <div className="sn-card-header">
            <h3 className="sn-card-title">Funnel {days} hari</h3>
            <span className="sn-muted">Pipeline terbuka: {idr(pipeline)}</span>
          </div>
          <div className="sn-bars">
            {funnel.map((f) => (
              <div key={f.label} className="sn-bar-row">
                <span>{f.label}</span>
                <div className="sn-bar-track">
                  <div className="sn-bar" style={{ width: `${funnel[0].value ? (f.value / funnel[0].value) * 100 : 0}%` }} />
                </div>
                <strong>{f.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="sn-card">
          <div className="sn-card-header">
            <h3 className="sn-card-title">Tren mingguan</h3>
            <span className="sn-muted">8 minggu terakhir</span>
          </div>
          <div className="sn-columns" role="img" aria-label="Leads per minggu">
            {weeks.map((w) => (
              <div key={w.label} className="sn-col" title={`${w.label}: ${w.count}`}>
                <span className="sn-col-count">{w.count}</span>
                <div className="sn-col-bar" style={{ height: `${(w.count / maxWeek) * 100}%` }} />
                <span className="sn-col-label">{w.label.replace(" mgg lalu", "m")}</span>
              </div>
            ))}
          </div>
        </section>

        <RankCard title="Sumber lead (halaman)" rows={sources} />
        <RankCard title="Paket yang diminati" rows={plans} />
      </div>
    </AdminShell>
  );
}

function RankCard({ title, rows }: { title: string; rows: [string, { count: number; won: number }][] }) {
  return (
    <section className="sn-card">
      <div className="sn-card-header">
        <h3 className="sn-card-title">{title}</h3>
      </div>
      {rows.length === 0 ? (
        <p className="sn-empty">Belum ada data.</p>
      ) : (
        <table className="sn-table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Lead</th>
              <th>Menang</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([key, v]) => (
              <tr key={key}>
                <td style={{ wordBreak: "break-all" }}>{key}</td>
                <td>{v.count}</td>
                <td>{v.won}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
