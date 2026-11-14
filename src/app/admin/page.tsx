import Link from "next/link";
import { followupDue, isOpen, nowMs, statusLabel, type Lead, type LeadStatus } from "@/lib/lead-status";
import { queryLeads } from "@/lib/leads-db";
import { sbSelect } from "@/lib/supabase";
import { AdminShell, adminGate } from "./shell";

const DAY = 86_400_000;
const idr = (n: number) => `Rp${Math.round(n).toLocaleString("id-ID")}`;

function delta(cur: number, prev: number) {
  if (prev === 0) return cur === 0 ? null : { text: "baru", up: true };
  const pct = Math.round(((cur - prev) / prev) * 100);
  return { text: `${pct > 0 ? "+" : ""}${pct}%`, up: pct >= 0 };
}

function topCounts(items: string[], limit = 5) {
  const map = new Map<string, number>();
  for (const key of items) map.set(key, (map.get(key) ?? 0) + 1);
  return [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, limit);
}

const STATUS_COLOR: Record<LeadStatus, string> = {
  new: "var(--sn-primary)",
  contacted: "var(--sn-warning)",
  won: "var(--sn-success)",
  lost: "var(--sn-secondary)",
};

type Candidate = { stage: string; interview_at: string | null };
type AdRow = { spend: number; conversations: number; day: string };

/** Overview modelled on Sneat's dashboard: welcome card, stat cards, chart, donut and lists. */
export default async function OverviewPage({ searchParams }: { searchParams: Promise<{ days?: string }> }) {
  const gate = await adminGate();
  if (gate) return gate;

  const { days: daysParam } = await searchParams;
  const days = daysParam === "90" ? 90 : daysParam === "7" ? 7 : 30;
  const now = nowMs();
  const sinceIso = new Date(now - 2 * days * DAY).toISOString();
  const cutoff = now - days * DAY;
  const cutoffDay = new Date(cutoff).toISOString().slice(0, 10);

  const [rows, ads, candidates] = await Promise.all([
    queryLeads(
      `select=id,name,company,need,status,created_at,source_page,deal_value,segment,followups&order=created_at.desc&limit=10000&created_at=gte.${sinceIso}`
    ),
    sbSelect<AdRow>("ad_insights", `select=spend,conversations,day&day=gte.${cutoffDay}&limit=20000`),
    sbSelect<Candidate>("candidates", "select=stage,interview_at&limit=5000"),
  ]);

  const periods = [7, 30, 90];
  const periodNav = (
    <nav style={{ display: "flex", gap: "0.25rem" }}>
      {periods.map((p) => (
        <Link key={p} href={`/admin?days=${p}`} className={`sn-pill ${days === p ? "active" : ""}`}>
          {p} hari
        </Link>
      ))}
    </nav>
  );

  if (rows === null) {
    return (
      <AdminShell active="overview" title="Ringkasan">
        <section className="sn-card">
          <p className="sn-empty">
            Tidak bisa memuat leads. Pastikan <code>SUPABASE_URL</code> dan <code>SUPABASE_SECRET_KEY</code> sudah diisi dan
            migrasi di <code>supabase/migrations</code> sudah dijalankan.
          </p>
        </section>
      </AdminShell>
    );
  }

  const cur = rows.filter((l) => new Date(l.created_at).getTime() >= cutoff);
  const prev = rows.filter((l) => new Date(l.created_at).getTime() < cutoff);

  const won = (list: Lead[]) => list.filter((l) => l.status === "won");
  const wonCur = won(cur);
  const wonValue = wonCur.reduce((s, l) => s + (l.deal_value ?? 0), 0);
  const lostCur = cur.filter((l) => l.status === "lost").length;
  const winRate = wonCur.length + lostCur ? Math.round((wonCur.length / (wonCur.length + lostCur)) * 100) : null;
  const dueCount = rows.filter((l) => isOpen(l) && followupDue(l, now)).length;
  const newThisWeek = rows.filter((l) => new Date(l.created_at).getTime() >= now - 7 * DAY).length;

  const adSpend = ads ? ads.reduce((s, r) => s + (Number(r.spend) || 0), 0) : null;
  const activeCandidates = candidates ? candidates.filter((c) => c.stage !== "hired" && c.stage !== "rejected").length : null;
  const interviews = candidates ? candidates.filter((c) => c.interview_at && new Date(c.interview_at).getTime() >= now).length : 0;

  const leadsDelta = delta(cur.length, prev.length);
  const wonDelta = delta(wonCur.length, won(prev).length);

  // Weekly bars (8 weeks), current vs the same week a quarter earlier is overkill: one series.
  const weeks = Array.from({ length: 8 }, (_, i) => 7 - i).map((w) => ({
    label: w === 0 ? "Ini" : `-${w}`,
    count: rows.filter((l) => Math.floor((now - new Date(l.created_at).getTime()) / (7 * DAY)) === w).length,
  }));
  const maxWeek = Math.max(1, ...weeks.map((w) => w.count));

  // Status donut.
  const statusCounts = (["new", "contacted", "won", "lost"] as LeadStatus[]).map((s) => ({
    status: s,
    count: cur.filter((l) => l.status === s).length,
  }));
  const donutTotal = statusCounts.reduce((s, x) => s + x.count, 0);
  let offset = 25; // start at 12 o'clock
  const segments = statusCounts.map((x) => {
    const pct = donutTotal ? (x.count / donutTotal) * 100 : 0;
    const seg = { ...x, pct, offset };
    offset -= pct;
    return seg;
  });

  const sources = topCounts(cur.map((l) => (l.source_page ?? "").split("?")[0] || "(langsung)"));
  const maxSource = Math.max(1, ...sources.map(([, n]) => n));
  const recent = rows.slice(0, 6);

  const statCard = (props: { icon: string; label: string; value: string; note?: string; d?: { text: string; up: boolean } | null }) => (
    <div className="sn-card sn-stat2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/admin/${props.icon}.png`} alt="" width={34} height={34} />
      <span className="sn-stat-label">{props.label}</span>
      <h3 className="sn-stat2-value">{props.value}</h3>
      {props.d ? (
        <small style={{ color: props.d.up ? "#5fc22d" : "var(--sn-danger)", fontWeight: 600 }}>
          {props.d.up ? "↑" : "↓"} {props.d.text}
        </small>
      ) : props.note ? (
        <small className="sn-muted">{props.note}</small>
      ) : null}
    </div>
  );

  return (
    <AdminShell active="overview" title="Ringkasan">
      <div className="sn-row">
        <section className="sn-card sn-welcome sn-c8">
          <div>
            <h3 style={{ color: "var(--sn-primary)", fontSize: "1.25rem", marginBottom: "0.6rem" }}>Selamat datang kembali! 🎉</h3>
            <p style={{ marginBottom: "1.1rem", maxWidth: "26rem" }}>
              Ada <strong>{newThisWeek} lead baru</strong> minggu ini
              {dueCount > 0 ? (
                <>
                  {" "}
                  dan <strong>{dueCount} lead</strong> menunggu follow up.
                </>
              ) : (
                ". Semua follow up sudah terkejar."
              )}
            </p>
            <Link href={dueCount > 0 ? "/admin/followup?due=1" : "/admin/leads"} className="sn-btn sn-btn-label">
              {dueCount > 0 ? "Buka follow up" : "Lihat leads"}
            </Link>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/admin/man-with-laptop-light.png" alt="" height={140} className="sn-welcome-img" />
        </section>

        <div className="sn-c4 sn-pair">
          {statCard({ icon: "chart-success", label: `Leads ${days} hari`, value: String(cur.length), d: leadsDelta })}
          {statCard({ icon: "wallet-info", label: "Deal menang", value: String(wonCur.length), d: wonDelta })}
        </div>
      </div>

      <div className="sn-row">
        <section className="sn-card sn-c8">
          <div className="sn-card-header">
            <h3 className="sn-card-title">Leads per minggu</h3>
            {periodNav}
          </div>
          <div className="sn-split">
            <div className="sn-columns" role="img" aria-label="Leads per minggu" style={{ flex: 1, padding: "0 0.5rem 1.25rem 1.5rem" }}>
              {weeks.map((w) => (
                <div key={w.label} className="sn-col" title={`${w.label} minggu: ${w.count}`}>
                  <span className="sn-col-count">{w.count}</span>
                  <div className="sn-col-bar" style={{ height: `${(w.count / maxWeek) * 100}%` }} />
                  <span className="sn-col-label">{w.label}</span>
                </div>
              ))}
            </div>
            <div className="sn-side-stat">
              <span className="sn-badge sn-new">Periode {days} hari</span>
              <h3>{cur.length} leads</h3>
              <small className="sn-muted">
                {leadsDelta ? `${leadsDelta.text} dibanding ${prev.length} lead sebelumnya` : "Belum ada pembanding"}
              </small>
              <div className="sn-divider" />
              <small className="sn-muted">Nilai deal menang</small>
              <h3>{idr(wonValue)}</h3>
              <small className="sn-muted">Win rate {winRate === null ? "–" : `${winRate}%`}</small>
            </div>
          </div>
        </section>

        <div className="sn-c4" style={{ display: "grid", gap: "1.5rem", alignContent: "start" }}>
          <div className="sn-pair">
            {statCard({
              icon: "paypal",
              label: "Belanja iklan",
              value: adSpend === null ? "–" : idr(adSpend),
              note: adSpend === null ? "Data Meta belum terhubung" : `${days} hari terakhir`,
            })}
            {statCard({
              icon: "cc-primary",
              label: "Kandidat aktif",
              value: activeCandidates === null ? "–" : String(activeCandidates),
              note: interviews ? `${interviews} interview terjadwal` : "Rekrutmen",
            })}
          </div>
          <section className="sn-card sn-stat2" style={{ gap: "0.4rem" }}>
            <h4 style={{ fontSize: "1rem" }}>Laporan singkat</h4>
            <small className="sn-muted">Win rate periode ini</small>
            <h3 style={{ fontSize: "1.75rem" }}>{winRate === null ? "–" : `${winRate}%`}</h3>
            <div className="sn-bar-track" style={{ marginTop: "0.25rem" }}>
              <div className="sn-bar" style={{ width: `${winRate ?? 0}%` }} />
            </div>
          </section>
        </div>
      </div>

      <div className="sn-row">
        <section className="sn-card sn-c4">
          <div className="sn-card-header">
            <div>
              <h3 className="sn-card-title">Status leads</h3>
              <small className="sn-muted">{donutTotal} lead dalam {days} hari</small>
            </div>
          </div>
          <div className="sn-donut-wrap">
            <div className="sn-donut">
              <svg viewBox="0 0 36 36" aria-hidden="true">
                <circle cx="18" cy="18" r="15.9155" fill="none" stroke="var(--sn-bg)" strokeWidth="4" />
                {segments
                  .filter((s) => s.pct > 0)
                  .map((s) => (
                    <circle
                      key={s.status}
                      cx="18"
                      cy="18"
                      r="15.9155"
                      fill="none"
                      stroke={STATUS_COLOR[s.status]}
                      strokeWidth="4"
                      strokeDasharray={`${s.pct} ${100 - s.pct}`}
                      strokeDashoffset={s.offset}
                    />
                  ))}
              </svg>
              <div className="sn-donut-center">
                <strong>{donutTotal}</strong>
                <span className="sn-muted">Total</span>
              </div>
            </div>
          </div>
          <ul className="sn-list">
            {statusCounts.map((s) => (
              <li key={s.status}>
                <span className="sn-dot" style={{ background: STATUS_COLOR[s.status] }} />
                <span style={{ flex: 1 }}>{statusLabel[s.status]}</span>
                <strong>{s.count}</strong>
              </li>
            ))}
          </ul>
        </section>

        <section className="sn-card sn-c4">
          <div className="sn-card-header">
            <h3 className="sn-card-title">Sumber lead</h3>
          </div>
          {sources.length === 0 ? (
            <p className="sn-empty">Belum ada data.</p>
          ) : (
            <ul className="sn-list">
              {sources.map(([key, n]) => (
                <li key={key} style={{ flexDirection: "column", alignItems: "stretch", gap: "0.35rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "0.5rem" }}>
                    <span style={{ wordBreak: "break-all" }}>{key}</span>
                    <strong>{n}</strong>
                  </div>
                  <div className="sn-bar-track">
                    <div className="sn-bar" style={{ width: `${(n / maxSource) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="sn-card sn-c4">
          <div className="sn-card-header">
            <h3 className="sn-card-title">Lead terbaru</h3>
            <Link href="/admin/leads" className="sn-link" style={{ fontSize: "0.8125rem" }}>
              Lihat semua
            </Link>
          </div>
          {recent.length === 0 ? (
            <p className="sn-empty">Belum ada lead.</p>
          ) : (
            <ul className="sn-list">
              {recent.map((l) => (
                <li key={l.id}>
                  <span className={`sn-avatar-initial sn-${l.status}`}>{l.name.slice(0, 1).toUpperCase()}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <small className="sn-muted" style={{ display: "block" }}>
                      {l.company ?? l.need ?? "Lead"}
                    </small>
                    <strong style={{ fontWeight: 500 }}>{l.name}</strong>
                  </div>
                  <span className={`sn-badge sn-${l.status}`}>{statusLabel[l.status]}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </AdminShell>
  );
}
