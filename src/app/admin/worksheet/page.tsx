import Link from "next/link";
import { FileText, MessageCircle } from "lucide-react";
import { getSession } from "@/lib/admin-auth";
import {
  FOLLOWUP_STAGES,
  FOLLOWUP_TEMPLATES,
  LEAD_SEGMENTS,
  LEAD_STATUSES,
  daysSince,
  fillTemplate,
  followupDue,
  followupStage,
  isOpen,
  nowMs,
  segmentLabel,
  statusLabel,
  waLink,
} from "@/lib/lead-status";
import { queryLeads } from "@/lib/leads-db";
import { AdminShell, adminGate } from "../shell";
import { salesLogFollowup, salesUpdateLead } from "./actions";

const dateId = (iso: string) => new Date(iso).toLocaleDateString("id-ID", { timeZone: "Asia/Jakarta", day: "numeric", month: "short" });

/** The sales agent's worksheet: their assigned leads, follow-up, client wishes and quotes. */
export default async function WorksheetPage({ searchParams }: { searchParams: Promise<{ view?: string }> }) {
  const gate = await adminGate(["sales"]);
  if (gate) return gate;
  const session = await getSession();
  if (session?.role !== "sales") return null;

  const { view } = await searchParams;
  const done = view === "done";
  const leads = await queryLeads(
    `select=*&assigned_to=eq.${session.id}&status=in.(${done ? "won,lost" : "new,contacted"})&order=created_at.asc&limit=300`
  );
  const now = nowMs();

  const items = (leads ?? [])
    .map((lead) => ({ lead, stage: followupStage(lead), due: isOpen(lead) && followupDue(lead, now), age: daysSince(lead.created_at, now) }))
    .sort((a, b) => Number(b.due) - Number(a.due) || Number(b.lead.segment === "hot") - Number(a.lead.segment === "hot") || b.age - a.age);

  return (
    <AdminShell active="worksheet" title="Lembar Kerja" subtitle={`Halo ${session.name}, ini lead yang kamu pegang`}>
      <div className="sn-card-header" style={{ padding: "0 0 1rem" }}>
        <nav style={{ display: "flex", gap: "0.25rem" }}>
          <Link href="/admin/worksheet" className={`sn-pill ${!done ? "active" : ""}`}>
            Aktif
          </Link>
          <Link href="/admin/worksheet?view=done" className={`sn-pill ${done ? "active" : ""}`}>
            Selesai
          </Link>
        </nav>
        <span className="sn-muted">
          {items.length} lead · {items.filter((x) => x.due).length} jatuh tempo follow up
        </span>
      </div>

      {leads === null ? (
        <section className="sn-card">
          <p className="sn-empty">Tidak bisa memuat data. Hubungi owner untuk memastikan database sudah siap.</p>
        </section>
      ) : items.length === 0 ? (
        <section className="sn-card">
          <p className="sn-empty">{done ? "Belum ada lead selesai." : "Belum ada lead yang ditugaskan ke kamu."}</p>
        </section>
      ) : (
        <div className="sn-grid-2">
          {items.map(({ lead, stage, due, age }) => {
            const template = stage <= 3 && isOpen(lead) ? fillTemplate(FOLLOWUP_TEMPLATES[stage as 1 | 2 | 3], lead) : undefined;
            return (
              <section key={lead.id} className={`sn-card sn-kcard ${due ? "due" : ""}`} style={{ padding: "1.25rem" }}>
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
                  <strong style={{ fontSize: "1.05rem" }}>{lead.name}</strong>
                  {lead.segment ? <span className={`sn-badge sn-seg-${lead.segment}`}>{segmentLabel[lead.segment]}</span> : null}
                  <span className={`sn-badge sn-${lead.status}`} style={{ marginLeft: "auto" }}>
                    {statusLabel[lead.status]}
                  </span>
                </div>
                <div className="sn-muted">
                  {lead.company ? `${lead.company} · ` : ""}
                  <span style={due ? { color: "var(--sn-danger)", fontWeight: 600 } : undefined}>{age} hari</span>
                  {isOpen(lead) ? ` · ${FOLLOWUP_STAGES[stage - 1].title}` : ""}
                </div>

                <p style={{ margin: "0.7rem 0 0.3rem", whiteSpace: "pre-wrap" }}>{lead.description}</p>
                <div className="sn-muted">
                  {[lead.need && `Kebutuhan: ${lead.need}`, lead.budget && `Budget: ${lead.budget}`, lead.plan && `Paket: ${lead.plan}`]
                    .filter(Boolean)
                    .join(" · ")}
                </div>
                <div style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>
                  <a className="sn-link" href={`mailto:${lead.email}`}>
                    {lead.email}
                  </a>{" "}
                  ·{" "}
                  <a className="sn-link" href={waLink(lead.phone, template)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={13} style={{ display: "inline" }} /> {lead.phone}
                  </a>
                </div>

                {lead.followups.length > 0 ? (
                  <ul className="sn-fu-log">
                    {lead.followups.map((f) => (
                      <li key={f.at}>
                        <span className="sn-muted">{dateId(f.at)}</span> {f.note}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {isOpen(lead) && stage <= 3 ? (
                  <form action={salesLogFollowup} style={{ display: "flex", gap: "0.35rem", marginTop: "0.75rem" }}>
                    <input type="hidden" name="id" value={lead.id} />
                    <input name="note" required maxLength={500} className="sn-input" placeholder={`Hasil follow up ${stage}…`} />
                    <button className="sn-btn sn-btn-primary sn-btn-sm">Catat</button>
                  </form>
                ) : null}

                {/* Keyed so the form remounts with fresh defaults after a follow-up changes the status. */}
                <details key={`${lead.status}-${lead.followups.length}-${lead.segment}`} className="sn-edit" open={!lead.wishes && isOpen(lead)}>
                  <summary>Keinginan klien &amp; status</summary>
                  <form action={salesUpdateLead}>
                    <input type="hidden" name="id" value={lead.id} />
                    <label>
                      Catatan keinginan klien
                      <textarea name="wishes" rows={4} maxLength={3000} className="sn-input" defaultValue={lead.wishes ?? ""} placeholder="Fitur yang diminta, budget, tenggat, kendala, keputusan siapa…" />
                    </label>
                    <div className="sn-form-grid" style={{ marginTop: 0 }}>
                      <label>
                        Segmen
                        <select name="segment" className="sn-input" defaultValue={lead.segment ?? ""}>
                          <option value="">–</option>
                          {LEAD_SEGMENTS.map((s) => (
                            <option key={s} value={s}>
                              {segmentLabel[s]}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label>
                        Status
                        <select name="status" className="sn-input" defaultValue={lead.status}>
                          {LEAD_STATUSES.map((s) => (
                            <option key={s} value={s}>
                              {statusLabel[s]}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label>
                        Nilai deal (Rp)
                        <input name="deal_value" inputMode="numeric" className="sn-input" defaultValue={lead.deal_value ?? ""} />
                      </label>
                      <label>
                        Alasan batal
                        <input name="lost_reason" maxLength={300} className="sn-input" defaultValue={lead.lost_reason ?? ""} />
                      </label>
                    </div>
                    <button className="sn-btn sn-btn-primary sn-btn-sm">Simpan</button>
                  </form>
                </details>

                <Link
                  href={`/admin/quotes/new?lead=${lead.id}`}
                  className="sn-btn sn-btn-sm"
                  style={{ marginTop: "0.75rem", justifyContent: "center", width: "100%" }}
                >
                  <FileText size={14} /> Buat penawaran harga
                </Link>
              </section>
            );
          })}
        </div>
      )}
    </AdminShell>
  );
}
