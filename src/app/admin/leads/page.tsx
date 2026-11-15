import Link from "next/link";
import {
  LEAD_SEGMENTS,
  LEAD_STATUSES,
  segmentLabel,
  statusLabel,
  waLink,
  type LeadStatus,
} from "@/lib/lead-status";
import { queryLeads } from "@/lib/leads-db";
import { AdminShell, adminGate } from "../shell";
import { sbSelect } from "@/lib/supabase";
import { assignLead } from "../sales/actions";
import { setStatus, updateLead } from "./actions";

const actionLabel: Record<LeadStatus, string> = {
  new: "Tandai baru",
  contacted: "Sudah dihubungi",
  won: "Menang",
  lost: "Batal",
};

const idr = (n: number) => `Rp${n.toLocaleString("id-ID")}`;

export default async function LeadsPage({ searchParams }: { searchParams: Promise<{ status?: string; q?: string }> }) {
  const gate = await adminGate();
  if (gate) return gate;

  const { status, q: qParam } = await searchParams;
  // Only plain characters reach the PostgREST filter, so a search can never inject filter syntax.
  const q = (qParam ?? "").replace(/[^\p{L}\p{N}@. +-]/gu, "").trim().slice(0, 60);
  const search = q ? `&or=(${["name", "email", "company", "phone", "need"].map((c) => `${c}.ilike.*${encodeURIComponent(q)}*`).join(",")})` : "";
  const active = status && LEAD_STATUSES.includes(status as LeadStatus) ? (status as LeadStatus) : undefined;
  const [salesRaw, leads] = await Promise.all([
    sbSelect<{ id: number; name: string; active: boolean }>("sales_users", "select=id,name,active&order=name.asc"),
    queryLeads(`select=*&order=created_at.desc&limit=200${active ? `&status=eq.${active}` : ""}${search}`),
  ]);
  const salesList = salesRaw ?? [];
  const salesName = new Map(salesList.map((u) => [u.id, u.name]));

  return (
    <AdminShell active="leads" title="Leads" subtitle="Pesan masuk dari form kontak">
      <section className="sn-card">
        <div className="sn-card-header">
          <h3 className="sn-card-title">{q ? `Hasil pencarian "${q}"` : "Daftar leads"}</h3>
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
            semua migrasi di <code>supabase/migrations</code> sudah dijalankan.
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
                      <strong>{lead.name}</strong>{" "}
                      {lead.segment ? <span className={`sn-badge sn-seg-${lead.segment}`}>{segmentLabel[lead.segment]}</span> : null}
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
                    <td style={{ minWidth: "16rem", maxWidth: "26rem", whiteSpace: "pre-wrap" }}>
                      {lead.description}
                      {lead.notes ? <div className="sn-note">Catatan: {lead.notes}</div> : null}
                      {lead.wishes ? <div className="sn-note">Keinginan klien: {lead.wishes}</div> : null}
                    </td>
                    <td style={{ minWidth: "11rem" }}>
                      {lead.need ? <div>Kebutuhan: {lead.need}</div> : null}
                      {lead.budget ? <div>Budget: {lead.budget}</div> : null}
                      {lead.plan ? <div>Paket: {lead.plan}</div> : null}
                      {lead.deal_value ? <div>Nilai deal: {idr(lead.deal_value)}</div> : null}
                      {lead.assigned_to ? <div>Sales: {salesName.get(lead.assigned_to) ?? `#${lead.assigned_to}`}</div> : null}
                      {lead.status === "lost" && lead.lost_reason ? <div>Alasan batal: {lead.lost_reason}</div> : null}
                      <div className="sn-muted">
                        {new Date(lead.created_at).toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })} · {lead.locale}
                        {lead.source_page ? ` · ${lead.source_page}` : ""}
                      </div>
                    </td>
                    <td>
                      <span className={`sn-badge sn-${lead.status}`}>{statusLabel[lead.status]}</span>
                    </td>
                    <td style={{ minWidth: "12rem" }}>
                      <form action={setStatus} style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                        <input type="hidden" name="id" value={lead.id} />
                        {LEAD_STATUSES.filter((s) => s !== lead.status).map((s) => (
                          <button key={s} name="status" value={s} className="sn-btn sn-btn-sm">
                            {actionLabel[s]}
                          </button>
                        ))}
                      </form>
                      <form action={assignLead} style={{ display: "flex", gap: "0.35rem", marginTop: "0.5rem" }}>
                        <input type="hidden" name="id" value={lead.id} />
                        <select name="sales_id" className="sn-input" defaultValue={lead.assigned_to ?? ""} aria-label="Tugaskan ke sales">
                          <option value="">Belum ditugaskan</option>
                          {salesList.filter((u) => u.active || u.id === lead.assigned_to).map((u) => (
                            <option key={u.id} value={u.id}>
                              {u.name}
                            </option>
                          ))}
                        </select>
                        <button className="sn-btn sn-btn-sm">Tugaskan</button>
                      </form>
                      <details className="sn-edit">
                        <summary>Segmen, nilai &amp; catatan</summary>
                        <form action={updateLead}>
                          <input type="hidden" name="id" value={lead.id} />
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
                            Nilai deal (Rp)
                            <input name="deal_value" inputMode="numeric" className="sn-input" defaultValue={lead.deal_value ?? ""} />
                          </label>
                          <label>
                            Alasan batal
                            <input name="lost_reason" className="sn-input" defaultValue={lead.lost_reason ?? ""} />
                          </label>
                          <label>
                            Catatan
                            <textarea name="notes" rows={3} className="sn-input" defaultValue={lead.notes ?? ""} />
                          </label>
                          <button className="sn-btn sn-btn-primary sn-btn-sm">Simpan</button>
                        </form>
                      </details>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </AdminShell>
  );
}
