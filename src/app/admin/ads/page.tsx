import Link from "next/link";
import { AlertTriangle, CheckCircle2, MousePointerClick, Wallet, XCircle, MessagesSquare } from "lucide-react";
import { byCampaign, recommendations, totals, type InsightRow } from "@/lib/ads-analysis";
import { metaConfig } from "@/lib/meta-ads";
import { nowMs } from "@/lib/lead-status";
import { queryLeads } from "@/lib/leads-db";
import { sbSelect } from "@/lib/supabase";
import { AdminShell, adminGate } from "../shell";
import { SyncButton } from "./sync-button";

export const maxDuration = 60;

const DAY = 86_400_000;
const idr = (n: number | null) => (n === null ? "–" : `Rp${Math.round(n).toLocaleString("id-ID")}`);
const int = (n: number) => Math.round(n).toLocaleString("id-ID");
const pct = (n: number | null) => (n === null ? "–" : `${n.toFixed(2)}%`);

export default async function AdsPage({ searchParams }: { searchParams: Promise<{ days?: string }> }) {
  const gate = await adminGate();
  if (gate) return gate;

  const { days: daysParam } = await searchParams;
  const days = daysParam === "90" ? 90 : daysParam === "7" ? 7 : 30;
  const now = nowMs();
  const since = new Date(now - 2 * days * DAY).toISOString().slice(0, 10);
  const rows = await sbSelect<InsightRow & { updated_at: string }>(
    "ad_insights",
    `select=*&day=gte.${since}&order=day.asc&limit=20000`
  );

  const periods = [7, 30, 90];
  const configured = metaConfig() !== null;

  const toolbar = (
    <div className="sn-card-header" style={{ padding: "0 0 1rem" }}>
      <nav style={{ display: "flex", gap: "0.25rem" }}>
        {periods.map((p) => (
          <Link key={p} href={`/admin/ads?days=${p}`} className={`sn-pill ${days === p ? "active" : ""}`}>
            {p} hari
          </Link>
        ))}
      </nav>
      {configured ? <SyncButton /> : null}
    </div>
  );

  if (!configured || rows === null || rows.length === 0) {
    return (
      <AdminShell active="ads" title="Analisa Iklan" subtitle="Meta Ads">
        {toolbar}
        <section className="sn-card">
          <div className="sn-empty" style={{ textAlign: "left", maxWidth: "40rem", margin: "0 auto" }}>
            {rows === null ? (
              <p>
                Tabel <code>ad_insights</code> belum bisa dibaca. Jalankan migrasi <code>20261115130000_ads_recruitment.sql</code> di
                Supabase.
              </p>
            ) : !configured ? (
              <>
                <p>
                  <strong>Hubungkan Meta Ads.</strong> Tambahkan dua environment variable di Vercel lalu redeploy:
                </p>
                <ul style={{ margin: "0.75rem 0 0 1.25rem", listStyle: "disc" }}>
                  <li>
                    <code>META_ADS_TOKEN</code>: token system user dengan izin <code>ads_read</code> (Business Settings → System Users).
                  </li>
                  <li>
                    <code>META_AD_ACCOUNT_ID</code>: ID akun iklan, mis. <code>act_1234567890</code>.
                  </li>
                  <li>
                    <code>CRON_SECRET</code> (opsional): agar data ditarik otomatis tiap pagi 08.00 WIB.
                  </li>
                </ul>
              </>
            ) : (
              <p>Belum ada data. Klik &quot;Tarik data Meta&quot; untuk mengambil 30 hari terakhir.</p>
            )}
          </div>
        </section>
      </AdminShell>
    );
  }

  const cutoff = new Date(now - days * DAY).toISOString().slice(0, 10);
  const cur = rows.filter((r) => r.day >= cutoff);
  const prev = rows.filter((r) => r.day < cutoff);
  const t = totals(cur);
  const p = totals(prev);
  const campaigns = byCampaign(cur);
  const recs = recommendations(cur, prev);
  const lastSync = rows.reduce((m, r) => (r.updated_at > m ? r.updated_at : m), "");

  // Cost per website lead: ad spend over leads that arrived in the same period.
  const leads = await queryLeads(`select=id&created_at=gte.${new Date(now - days * DAY).toISOString()}&limit=10000`);
  const cpl = leads && leads.length ? t.spend / leads.length : null;

  const daily = Array.from(
    cur.reduce((m, r) => m.set(r.day, (m.get(r.day) ?? 0) + Number(r.spend)), new Map<string, number>())
  );
  const maxDaily = Math.max(1, ...daily.map(([, v]) => v));

  const change = (a: number | null, b: number | null, lowerIsBetter = false) => {
    if (a === null || b === null || b === 0) return null;
    const d = Math.round(((a - b) / b) * 100);
    return { text: `${d > 0 ? "+" : ""}${d}%`, good: lowerIsBetter ? d <= 0 : d >= 0 };
  };

  const cards = [
    { label: "Belanja iklan", value: idr(t.spend), d: change(t.spend, p.spend), icon: Wallet, color: "var(--sn-primary)", bg: "var(--sn-primary-soft)" },
    { label: "Klik & CTR", value: `${int(t.clicks)} · ${pct(t.ctr)}`, d: change(t.ctr, p.ctr), icon: MousePointerClick, color: "var(--sn-info)", bg: "rgba(3,195,236,.16)" },
    { label: "Percakapan", value: int(t.conversations), d: change(t.conversations, p.conversations), icon: MessagesSquare, color: "#5fc22d", bg: "rgba(113,221,55,.16)" },
    { label: "Biaya / percakapan", value: idr(t.costPerConv), d: change(t.costPerConv, p.costPerConv, true), icon: Wallet, color: "var(--sn-warning)", bg: "rgba(255,171,0,.16)" },
  ];

  const levelIcon = { bad: XCircle, warn: AlertTriangle, good: CheckCircle2 } as const;
  const levelColor = { bad: "var(--sn-danger)", warn: "var(--sn-warning)", good: "#5fc22d" } as const;

  return (
    <AdminShell
      active="ads"
      title="Analisa Iklan"
      subtitle={`Meta Ads · data diperbarui ${new Date(lastSync).toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })}`}
    >
      {toolbar}

      <section className="sn-stats">
        {cards.map(({ label, value, d, icon: Icon, color, bg }) => (
          <div key={label} className="sn-card sn-stat">
            <div className="sn-stat-icon" style={{ background: bg, color }}>
              <Icon size={20} />
            </div>
            <div className="sn-stat-label">{label}</div>
            <div className="sn-stat-value">{value}</div>
            {d ? (
              <div className="sn-muted" style={{ color: d.good ? "#5fc22d" : "var(--sn-danger)" }}>
                {d.text} <span style={{ color: "var(--sn-muted)" }}>vs {days} hari sebelumnya</span>
              </div>
            ) : null}
          </div>
        ))}
      </section>

      <div className="sn-grid-2">
        <section className="sn-card">
          <div className="sn-card-header">
            <h3 className="sn-card-title">Rekomendasi</h3>
          </div>
          <ul className="sn-recs">
            {recs.map((r) => {
              const Icon = levelIcon[r.level];
              return (
                <li key={r.text}>
                  <Icon size={18} style={{ color: levelColor[r.level], flexShrink: 0 }} />
                  <span>{r.text}</span>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="sn-card">
          <div className="sn-card-header">
            <h3 className="sn-card-title">Belanja harian</h3>
            <span className="sn-muted">
              CPM {idr(t.cpm)} · CPC {idr(t.cpc)} · Biaya per lead website {idr(cpl)}
            </span>
          </div>
          <div className="sn-columns" role="img" aria-label="Belanja iklan per hari">
            {daily.map(([day, v]) => (
              <div key={day} className="sn-col" title={`${day}: ${idr(v)}`}>
                <div className="sn-col-bar" style={{ height: `${(v / maxDaily) * 100}%` }} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="sn-card" style={{ marginTop: "1.5rem" }}>
        <div className="sn-card-header">
          <h3 className="sn-card-title">Per campaign</h3>
        </div>
        <div className="sn-table-wrap">
          <table className="sn-table">
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Belanja</th>
                <th>Impresi</th>
                <th>Klik</th>
                <th>CTR</th>
                <th>Frekuensi</th>
                <th>Percakapan</th>
                <th>Biaya / percakapan</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((c) => (
                <tr key={c.id}>
                  <td style={{ minWidth: "14rem" }}>
                    <strong>{c.name}</strong>
                  </td>
                  <td>{idr(c.spend)}</td>
                  <td>{int(c.impressions)}</td>
                  <td>{int(c.clicks)}</td>
                  <td>{pct(c.ctr)}</td>
                  <td>{c.frequency === null ? "–" : `${c.frequency.toFixed(1)}x`}</td>
                  <td>{int(c.conversations)}</td>
                  <td>{idr(c.costPerConv)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AdminShell>
  );
}
