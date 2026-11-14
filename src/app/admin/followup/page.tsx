import Link from "next/link";
import { MessageCircle } from "lucide-react";
import {
  FOLLOWUP_STAGES,
  FOLLOWUP_TEMPLATES,
  daysSince,
  fillTemplate,
  followupDue,
  followupStage,
  isOpen,
  nowMs,
  segmentLabel,
  waLink,
} from "@/lib/lead-status";
import { queryLeads } from "@/lib/leads-db";
import { logFollowup } from "../leads/actions";
import { AdminShell, adminGate } from "../shell";

export default async function FollowUpPage({ searchParams }: { searchParams: Promise<{ due?: string }> }) {
  const gate = await adminGate();
  if (gate) return gate;

  const { due } = await searchParams;
  const onlyDue = due === "1";
  const now = nowMs();
  const since = new Date(now - 90 * 86_400_000).toISOString();
  const all = await queryLeads(`select=*&order=created_at.asc&limit=500&created_at=gte.${since}&status=in.(new,contacted)`);

  const open = (all ?? [])
    .filter(isOpen)
    .map((lead) => ({ lead, stage: followupStage(lead), isDue: followupDue(lead, now), age: daysSince(lead.created_at, now) }))
    .filter((x) => !onlyDue || x.isDue)
    // Overdue first, then HOT, then the oldest.
    .sort(
      (a, b) =>
        Number(b.isDue) - Number(a.isDue) ||
        Number(b.lead.segment === "hot") - Number(a.lead.segment === "hot") ||
        b.age - a.age
    );

  return (
    <AdminShell active="followup" title="Papan Follow Up" subtitle="Lead terbuka 90 hari terakhir per tahap">
      <div className="sn-card-header" style={{ padding: "0 0 1rem" }}>
        <p className="sn-muted" style={{ maxWidth: "46rem" }}>
          Kartu merah sudah jatuh tempo (H+3, H+7, H+14 sejak lead masuk). Kirim pesan lewat WhatsApp, lalu catat hasilnya agar lead
          pindah ke tahap berikutnya.
        </p>
        <nav style={{ display: "flex", gap: "0.25rem" }}>
          <Link href="/admin/followup" className={`sn-pill ${!onlyDue ? "active" : ""}`}>
            Semua
          </Link>
          <Link href="/admin/followup?due=1" className={`sn-pill ${onlyDue ? "active" : ""}`}>
            Jatuh tempo
          </Link>
        </nav>
      </div>

      {all === null ? (
        <section className="sn-card">
          <p className="sn-empty">
            Tidak bisa memuat leads. Pastikan Supabase terhubung dan migrasi <code>20261115120000_leads_crm.sql</code> sudah dijalankan.
          </p>
        </section>
      ) : (
        <div className="sn-board">
          {FOLLOWUP_STAGES.map((col) => {
            const items = open.filter((x) => x.stage === col.stage);
            return (
              <div key={col.stage} className="sn-column">
                <div className="sn-column-head">
                  <div>
                    <strong>{col.title}</strong>
                    <div className="sn-muted">{col.hint}</div>
                  </div>
                  <span className="sn-badge sn-new">
                    {items.length} · {items.filter((x) => x.isDue).length} tempo
                  </span>
                </div>
                {items.length === 0 ? <p className="sn-muted" style={{ padding: "0.5rem" }}>Kosong.</p> : null}
                {items.slice(0, 60).map(({ lead, stage, isDue, age }) => {
                  const template = stage <= 3 ? fillTemplate(FOLLOWUP_TEMPLATES[stage as 1 | 2 | 3], lead) : undefined;
                  const last = lead.followups[lead.followups.length - 1];
                  return (
                    <div key={lead.id} className={`sn-card sn-kcard ${isDue ? "due" : ""}`}>
                      <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
                        {lead.segment ? <span className={`sn-badge sn-seg-${lead.segment}`}>{segmentLabel[lead.segment]}</span> : null}
                        <strong style={{ flex: 1 }}>{lead.name}</strong>
                      </div>
                      <div className="sn-muted">
                        {lead.company ? `${lead.company} · ` : ""}
                        <span style={isDue ? { color: "var(--sn-danger)", fontWeight: 600 } : undefined}>{age} hari</span>
                        {lead.source_page ? ` · ${lead.source_page}` : ""}
                      </div>
                      {lead.need ? <div style={{ marginTop: "0.35rem" }}>{lead.need}</div> : null}
                      {last ? (
                        <div className="sn-note">
                          Terakhir ({new Date(last.at).toLocaleDateString("id-ID", { timeZone: "Asia/Jakarta" })}): {last.note}
                        </div>
                      ) : null}
                      <a
                        className="sn-btn sn-btn-sm"
                        style={{ marginTop: "0.6rem", width: "100%", justifyContent: "center" }}
                        href={waLink(lead.phone, template)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle size={14} /> Chat WhatsApp
                      </a>
                      {stage <= 3 ? (
                        <form action={logFollowup} style={{ marginTop: "0.5rem", display: "flex", gap: "0.35rem" }}>
                          <input type="hidden" name="id" value={lead.id} />
                          <input name="note" required maxLength={500} className="sn-input" placeholder={`Hasil follow up ${stage}…`} />
                          <button className="sn-btn sn-btn-primary sn-btn-sm">Catat</button>
                        </form>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </AdminShell>
  );
}
