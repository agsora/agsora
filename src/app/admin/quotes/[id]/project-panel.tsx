import Link from "next/link";
import { Download } from "lucide-react";
import { WARRANTY_DAYS } from "@/config/guarantees";
import { PROJECT_STAGES, idr, type Quote } from "@/lib/quote";
import { docKindLabel, type DocumentRow } from "@/lib/storage";
import { periodLabel, type Subscription } from "@/lib/subscriptions";
import { createSubscription, issueBast, setContractActive, toggleSubscription, updateProject, uploadOwnerDocument } from "../project-actions";

const dateId = (iso: string) => new Date(iso).toLocaleDateString("id-ID", { timeZone: "Asia/Jakarta", day: "numeric", month: "short", year: "numeric" });
const today = () => new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Jakarta" });

/** Everything after the client accepted: agreement status, project progress, documents, handover and subscriptions. */
export function ProjectPanel({ q, owner, docs, subs }: { q: Quote; owner: boolean; docs: DocumentRow[]; subs: Subscription[] }) {
  const hidden = <input type="hidden" name="quote_id" value={q.id} />;
  const log = [...(q.project_log ?? [])].reverse();
  const stageLabel = (k: string) => PROJECT_STAGES.find((s) => s.key === k)?.label ?? k;

  return (
    <section className="sn-card" style={{ padding: "1.25rem", marginBottom: "1.5rem", display: "grid", gap: "1.25rem" }}>
      <div>
        <h3 style={{ marginBottom: "0.4rem" }}>Perjanjian {q.parent_id ? "(addendum)" : ""}</h3>
        <p className="sn-muted" style={{ marginBottom: "0.6rem" }}>
          {q.contract_active_at ? `Aktif sejak ${dateId(q.contract_active_at)}.` : "Belum aktif. Tandai aktif setelah kedua pihak menandatangani."}
        </p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {owner ? (
            <form action={setContractActive}>
              {hidden}
              <button className={`sn-btn ${q.contract_active_at ? "" : "sn-btn-primary"}`}>{q.contract_active_at ? "Batalkan status aktif" : "Tandai perjanjian aktif"}</button>
            </form>
          ) : null}
          {!q.parent_id ? (
            <Link className="sn-btn" href={`/admin/quotes/new?parent=${q.id}`}>
              Buat addendum (pekerjaan tambahan)
            </Link>
          ) : null}
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: "0.4rem" }}>Status proyek</h3>
        <p className="sn-muted" style={{ marginBottom: "0.6rem" }}>
          Tahap sekarang: <strong>{q.project_stage ? stageLabel(q.project_stage) : "belum dimulai"}</strong>. Klien melihat tahap dan catatan ini di halamannya.
        </p>
        <form action={updateProject} style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
          {hidden}
          <select name="stage" className="sn-input" style={{ maxWidth: "13rem" }} defaultValue={q.project_stage ?? "kickoff"}>
            {PROJECT_STAGES.map((s) => (
              <option key={s.key} value={s.key}>
                {s.label}
              </option>
            ))}
          </select>
          <input name="note" maxLength={400} className="sn-input" style={{ flex: 1, minWidth: "14rem" }} placeholder="Catatan untuk klien (opsional)" />
          <button className="sn-btn sn-btn-primary">Perbarui</button>
        </form>
        {log.length ? (
          <ul style={{ margin: "0.6rem 0 0", paddingLeft: "1.1rem" }}>
            {log.slice(0, 6).map((e, i) => (
              <li key={i} className="sn-muted">
                {dateId(e.at)} · {stageLabel(e.stage)}
                {e.note ? `: ${e.note}` : ""}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div>
        <h3 style={{ marginBottom: "0.4rem" }}>Serah terima (BAST)</h3>
        {q.bast_at ? (
          <p style={{ marginBottom: "0.6rem" }}>
            Diterbitkan {dateId(q.bast_at)}.{" "}
            <a className="sn-link" href={`/admin/quotes/${q.id}/bast`}>
              Unduh BAST
            </a>
          </p>
        ) : owner ? (
          <form action={issueBast}>
            {hidden}
            <p className="sn-muted" style={{ marginBottom: "0.5rem" }}>
              Terbitkan setelah UAT selesai. Tahap proyek otomatis menjadi &quot;Selesai&quot; dan garansi {WARRANTY_DAYS} hari dimulai.
            </p>
            <button className="sn-btn">Terbitkan BAST</button>
          </form>
        ) : (
          <p className="sn-muted">Belum diterbitkan.</p>
        )}
      </div>

      <div>
        <h3 style={{ marginBottom: "0.4rem" }}>Dokumen</h3>
        {docs.length ? (
          <ul style={{ margin: "0 0 0.6rem", paddingLeft: "1.1rem" }}>
            {docs.map((d) => (
              <li key={d.id}>
                <a className="sn-link" href={`/admin/documents/${d.id}`}>
                  <Download size={12} /> {d.filename}
                </a>{" "}
                <span className="sn-muted">
                  · {docKindLabel[d.kind]} · dari {d.uploaded_by === "client" ? "klien" : "kita"} · {dateId(d.created_at)}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="sn-muted" style={{ marginBottom: "0.6rem" }}>
            Belum ada dokumen. Klien juga bisa mengunggah dari halamannya.
          </p>
        )}
        <form action={uploadOwnerDocument} style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
          {hidden}
          <select name="kind" className="sn-input" style={{ maxWidth: "15rem" }}>
            <option value="contract">Perjanjian bertanda tangan</option>
            <option value="bast">BAST bertanda tangan</option>
            <option value="other">Dokumen lain</option>
          </select>
          <input type="file" name="file" accept="application/pdf,image/png,image/jpeg" className="sn-input" style={{ maxWidth: "18rem" }} required />
          <button className="sn-btn">Unggah (maks 4 MB)</button>
        </form>
      </div>

      {owner ? (
        <div>
          <h3 style={{ marginBottom: "0.4rem" }}>Tagihan berulang</h3>
          {subs.length ? (
            <ul style={{ margin: "0 0 0.6rem", paddingLeft: "1.1rem" }}>
              {subs.map((s) => (
                <li key={s.id} style={{ marginBottom: "0.3rem" }}>
                  <strong>{s.label}</strong> · {idr(Number(s.amount))} {periodLabel[s.period]} · {s.active ? `tagihan berikutnya ${dateId(s.next_bill)}` : "berhenti"}{" "}
                  <form action={toggleSubscription} style={{ display: "inline" }}>
                    {hidden}
                    <input type="hidden" name="id" value={s.id} />
                    <input type="hidden" name="active" value={s.active ? "1" : "0"} />
                    <button className="sn-btn sn-btn-sm">{s.active ? "Hentikan" : "Aktifkan"}</button>
                  </form>
                </li>
              ))}
            </ul>
          ) : (
            <p className="sn-muted" style={{ marginBottom: "0.6rem" }}>
              Untuk pemeliharaan, hosting, atau SEO. Invoice terbit dan terkirim otomatis 3 hari sebelum tanggal tagihan.
            </p>
          )}
          <form action={createSubscription} style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
            {hidden}
            <input name="label" required maxLength={200} className="sn-input" style={{ flex: 1, minWidth: "12rem" }} placeholder="Pemeliharaan Basic" />
            <input name="amount" required inputMode="numeric" className="sn-input" style={{ maxWidth: "9rem" }} placeholder="1500000" />
            <select name="period" className="sn-input" style={{ maxWidth: "8rem" }}>
              <option value="monthly">Bulanan</option>
              <option value="yearly">Tahunan</option>
            </select>
            <input name="next_bill" type="date" required className="sn-input" style={{ maxWidth: "10rem" }} defaultValue={today()} />
            <button className="sn-btn">Aktifkan langganan</button>
          </form>
        </div>
      ) : null}
    </section>
  );
}
