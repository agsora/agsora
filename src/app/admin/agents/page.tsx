import Link from "next/link";
import { Download } from "lucide-react";
import { AGENT_PROGRAM } from "@/config/agent-program";
import { agentMonth, periodOf, previousPeriod, type Agent } from "@/lib/agents";
import { idr, quoteNumber, type Quote } from "@/lib/quote";
import { sbSelect } from "@/lib/supabase";
import { AdminShell, adminGate } from "../shell";
import { assignQuote, recordPayout, updateAgent } from "./actions";

const monthName = (p: string) => new Date(`${p}-01T00:00:00+07:00`).toLocaleDateString("id-ID", { month: "long", year: "numeric", timeZone: "Asia/Jakarta" });

/** Sales agents: who they are, the deals credited to them, and this month's commission (full or reduced rate). */
export default async function AgentsPage({ searchParams }: { searchParams: Promise<{ period?: string; notice?: string; type?: string }> }) {
  const gate = await adminGate();
  if (gate) return gate;
  const { period: periodParam, notice, type } = await searchParams;
  const current = periodOf(new Date().toISOString());
  const period = /^\d{4}-\d{2}$/.test(periodParam ?? "") ? periodParam! : current;

  const [agents, openQuotes] = await Promise.all([
    sbSelect<Agent>("agents", "select=*&order=code.asc"),
    sbSelect<Quote & { agent_id: number | null }>("quotes", "select=id,client_name,client_company,created_at,status,agent_id&status=in.(approved,sent)&order=created_at.desc&limit=200"),
  ]);

  if (agents === null) {
    return (
      <AdminShell active="agents" title="Agen Sales" subtitle="Komisi dan perjanjian agen">
        <section className="sn-card" style={{ padding: "1.5rem" }}>
          <h3 style={{ marginBottom: "0.5rem" }}>Tabel agen belum ada</h3>
          <p className="sn-muted">
            Jalankan <code>supabase/migrations/20261118150000_sales_agents.sql</code> di Supabase → SQL Editor.
          </p>
        </section>
      </AdminShell>
    );
  }

  const rows = agents.length ? await agentMonth(agents, period) : [];
  const total = rows.reduce((a, r) => a + r.amount, 0);
  const revenue = rows.reduce((a, r) => a + r.revenue, 0);
  const unpaidPrev = period === current ? null : rows.filter((r) => r.amount > 0 && !r.payout).length;
  const name = new Map(agents.map((a) => [a.id, `${a.code} · ${a.name}`]));

  return (
    <AdminShell active="agents" title="Agen Sales" subtitle={`Komisi ${AGENT_PROGRAM.rateFull}% bila omzet bulanan ≥ ${idr(AGENT_PROGRAM.monthlyTarget)}, ${AGENT_PROGRAM.rateReduced}% bila di bawah target. Omzet = pembayaran klien yang diterima, tanpa PPN.`}>
      {notice ? <p className={`sn-notice ${type === "err" ? "err" : ""}`}>{notice}</p> : null}

      <div className="sn-toolbar">
        {[previousPeriod(previousPeriod(current)), previousPeriod(current), current].map((p) => (
          <Link key={p} href={`/admin/agents?period=${p}`} className={`sn-btn sn-btn-xs ${p === period ? "sn-btn-primary" : ""}`}>
            {monthName(p)}
          </Link>
        ))}
        <span className="spacer" />
        <Link href="/admin/recruitment" className="sn-btn sn-btn-xs">
          + Rekrut agen baru
        </Link>
      </div>

      <div className="sn-kpis">
        <div className="sn-kpi">
          <div className="sn-kpi-label">Agen aktif</div>
          <div className="sn-kpi-value">{agents.filter((a) => a.status === "active").length}</div>
          <div className="sn-kpi-hint">{agents.length} total</div>
        </div>
        <div className="sn-kpi good">
          <div className="sn-kpi-label">Omzet via agen</div>
          <div className="sn-kpi-value">{idr(revenue)}</div>
          <div className="sn-kpi-hint">{monthName(period)}</div>
        </div>
        <div className="sn-kpi warn">
          <div className="sn-kpi-label">Total komisi</div>
          <div className="sn-kpi-value">{idr(total)}</div>
          <div className="sn-kpi-hint">dibayar paling lambat tgl {AGENT_PROGRAM.payoutDay} bulan berikutnya</div>
        </div>
        <div className={`sn-kpi ${unpaidPrev ? "bad" : "muted"}`}>
          <div className="sn-kpi-label">Belum dibayar</div>
          <div className="sn-kpi-value">{unpaidPrev ?? "–"}</div>
          <div className="sn-kpi-hint">{period === current ? "bulan berjalan belum ditutup" : "agen dengan komisi tertunda"}</div>
        </div>
      </div>

      <section className="sn-card" style={{ marginBottom: "1rem" }}>
        <div className="sn-table-wrap">
          <table className="sn-table">
            <thead>
              <tr>
                <th>Agen</th>
                <th style={{ textAlign: "right" }}>Omzet {monthName(period)}</th>
                <th>Target</th>
                <th style={{ textAlign: "right" }}>Komisi</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={5} className="sn-muted" style={{ padding: "1.25rem" }}>
                    Belum ada agen. Buka lowongan Sales Agen di menu Rekrutmen, lalu klik &ldquo;Jadikan agen&rdquo; pada kandidat yang diterima.
                  </td>
                </tr>
              ) : null}
              {rows.map((r) => {
                const progress = Math.min(100, Math.round((r.revenue / Math.max(1, Number(r.agent.monthly_target))) * 100));
                return (
                  <tr key={r.agent.id} style={r.agent.status === "inactive" ? { opacity: 0.55 } : undefined}>
                    <td>
                      <strong>{r.agent.code}</strong> {r.agent.name}
                      <div className="sn-muted">
                        {[r.agent.city, r.agent.phone].filter(Boolean).join(" · ") || "–"} · {r.quotes.length} deal
                      </div>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      {idr(r.revenue)}
                      <div className="sn-muted">{r.payments} pembayaran</div>
                    </td>
                    <td style={{ minWidth: "9rem" }}>
                      <div style={{ height: 6, background: "var(--sn-row)", borderRadius: 3 }}>
                        <div style={{ width: `${progress}%`, height: 6, borderRadius: 3, background: r.hit ? "var(--sn-success)" : "var(--sn-warning)" }} />
                      </div>
                      <div className="sn-muted" style={{ fontSize: "0.75rem" }}>
                        {progress}% dari {idr(Number(r.agent.monthly_target))}
                      </div>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <strong>{idr(r.amount)}</strong>
                      <div className="sn-muted">tarif {r.rate}%{r.payout ? " · dibayar" : ""}</div>
                    </td>
                    <td>
                      <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                        <a className="sn-btn sn-btn-sm" href={`/admin/agents/${r.agent.id}/agreement`}>
                          <Download size={12} /> Perjanjian
                        </a>
                        {r.amount > 0 && !r.payout && period !== current ? (
                          <form action={recordPayout}>
                            <input type="hidden" name="id" value={r.agent.id} />
                            <input type="hidden" name="period" value={period} />
                            <button className="sn-btn sn-btn-primary sn-btn-sm">Tandai dibayar</button>
                          </form>
                        ) : null}
                      </div>
                      <details className="sn-edit">
                        <summary>Ubah</summary>
                        <form action={updateAgent} style={{ display: "grid", gap: "0.4rem" }}>
                          <input type="hidden" name="id" value={r.agent.id} />
                          <input type="hidden" name="period" value={period} />
                          <input name="phone" className="sn-input" defaultValue={r.agent.phone ?? ""} placeholder="WhatsApp" />
                          <input name="email" className="sn-input" defaultValue={r.agent.email ?? ""} placeholder="Email" />
                          <input name="city" className="sn-input" defaultValue={r.agent.city ?? ""} placeholder="Kota" />
                          <label className="sn-muted" style={{ fontSize: "0.75rem" }}>
                            Komisi capai target / di bawah target (%)
                            <span style={{ display: "flex", gap: "0.35rem" }}>
                              <input name="rate_full" className="sn-input" defaultValue={r.agent.rate_full} />
                              <input name="rate_reduced" className="sn-input" defaultValue={r.agent.rate_reduced} />
                            </span>
                          </label>
                          <label className="sn-muted" style={{ fontSize: "0.75rem" }}>
                            Target omzet per bulan (Rp)
                            <input name="monthly_target" className="sn-input" defaultValue={r.agent.monthly_target} />
                          </label>
                          <select name="status" className="sn-input" defaultValue={r.agent.status}>
                            <option value="active">Aktif</option>
                            <option value="inactive">Nonaktif</option>
                          </select>
                          <button className="sn-btn sn-btn-primary sn-btn-sm">Simpan</button>
                        </form>
                      </details>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {agents.length ? (
        <section className="sn-card" style={{ padding: "1rem 1.25rem" }}>
          <h3 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>Catat deal atas nama agen</h3>
          <p className="sn-muted" style={{ marginBottom: "0.75rem", fontSize: "0.85rem" }}>
            Pilih penawaran yang sudah disetujui dan agen yang membawanya. Komisi dihitung dari invoice penawaran itu yang sudah lunas.
          </p>
          <form action={assignQuote} style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <input type="hidden" name="period" value={period} />
            <select name="quote_id" className="sn-input" style={{ flex: 2, minWidth: "16rem" }} required>
              <option value="">Pilih penawaran…</option>
              {(openQuotes ?? []).map((q) => (
                <option key={q.id} value={q.id}>
                  {quoteNumber(q)} · {q.client_company || q.client_name}
                  {q.agent_id ? ` (sekarang: ${name.get(q.agent_id) ?? "agen lain"})` : ""}
                </option>
              ))}
            </select>
            <select name="agent_id" className="sn-input" style={{ flex: 1, minWidth: "12rem" }}>
              <option value="">Tanpa agen (lepas)</option>
              {agents
                .filter((a) => a.status === "active")
                .map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.code} · {a.name}
                  </option>
                ))}
            </select>
            <button className="sn-btn sn-btn-primary">Simpan</button>
          </form>
        </section>
      ) : null}
    </AdminShell>
  );
}
