import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { invoicesOf, quoteByToken } from "@/lib/client-portal";
import { notifyOwner } from "@/lib/mail";
import { PROJECT_STAGES, billableParts, computeTotals, idr, invoiceNumber, quoteNumber, splitTotals } from "@/lib/quote";
import { docKindLabel, documentsOf } from "@/lib/storage";
import { getSiteData } from "@/lib/site-content";
import { sbUpdate } from "@/lib/supabase";
import { acceptQuote, requestRevision, uploadClientDocument } from "./actions";

const dateId = (iso: string) => new Date(iso).toLocaleDateString("id-ID", { timeZone: "Asia/Jakarta", day: "numeric", month: "long", year: "numeric" });

const isExpired = (date: string | null) => Boolean(date && new Date(`${date}T23:59:59+07:00`).getTime() < Date.now());

const card: React.CSSProperties = { background: "#fff", border: "1px solid #e4e6f0", borderRadius: 14, padding: "1.25rem 1.5rem", marginBottom: "1rem" };
const btn: React.CSSProperties = { display: "inline-block", padding: "0.6rem 1.1rem", borderRadius: 10, border: "1px solid #cfd3e6", background: "#fff", color: "#1e2536", fontWeight: 600, fontSize: 14, textDecoration: "none", cursor: "pointer" };
const btnPrimary: React.CSSProperties = { ...btn, background: "#5b5cf0", borderColor: "#5b5cf0", color: "#fff" };
const input: React.CSSProperties = { width: "100%", boxSizing: "border-box", padding: "0.6rem 0.75rem", borderRadius: 10, border: "1px solid #cfd3e6", fontSize: 15, font: "inherit" };

const invoiceBadge = { unpaid: ["Belum dibayar", "#b45309", "#fef3c7"], paid: ["Lunas", "#15803d", "#dcfce7"], void: ["Dibatalkan", "#6b7280", "#f3f4f6"] } as const;

/** Private page a client opens from the emailed link: proposal, approval, agreement and invoices. */
export default async function ClientPage({ params, searchParams }: { params: Promise<{ token: string }>; searchParams: Promise<{ notice?: string }> }) {
  const { token } = await params;
  const { notice } = await searchParams;
  const q = await quoteByToken(token);
  if (!q) notFound();

  if (!q.viewed_at) {
    const first = await sbUpdate("quotes", { viewed_at: new Date().toISOString() }, `share_token=eq.${token}&viewed_at=is.null`);
    if (first?.length) await notifyOwner(`Klien membuka penawaran ${quoteNumber(q)}`, `${q.client_company || q.client_name} baru saja membuka proposal ${quoteNumber(q)}. Saat yang baik untuk follow up.`);
  }

  const site = await getSiteData();
  const totals = computeTotals(q.items, Number(q.discount_pct), Number(q.tax_pct));
  const split = splitTotals(q);
  const parts = billableParts(q);
  const invoices = (await invoicesOf(q.id)).filter((i) => i.status !== "void");
  const accepted = Boolean(q.accepted_at);
  const docs = accepted ? await documentsOf(q.id) : [];
  const stageIndex = q.project_stage ? PROJECT_STAGES.findIndex((x) => x.key === q.project_stage) : -1;
  const log = [...(q.project_log ?? [])].reverse().slice(0, 5);
  const expired = isExpired(q.valid_until);

  return (
    <div style={{ maxWidth: 820, margin: "0 auto", padding: "1.5rem 1rem 3rem" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
        <strong style={{ fontSize: 20, letterSpacing: 0.5 }}>{siteConfig.brandMark}</strong>
        <span style={{ color: "#6b7280", fontSize: 14 }}>{quoteNumber(q)}</span>
      </header>

      {notice ? <p style={{ ...card, borderLeft: "4px solid #5b5cf0" }}>{notice}</p> : null}

      <section style={{ ...card, background: "#0f172a", color: "#fff", border: "none" }}>
        <p style={{ margin: 0, color: "#a5b4fc", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>PROPOSAL PENAWARAN</p>
        <h1 style={{ margin: "0.4rem 0 0.2rem", fontSize: 26 }}>{q.client_company || q.client_name}</h1>
        <p style={{ margin: 0, color: "#cbd5e1" }}>
          Disiapkan oleh {siteConfig.legalName}
          {q.valid_until ? ` · berlaku sampai ${dateId(q.valid_until)}` : ""}
        </p>
        <p style={{ margin: "1rem 0 0", fontSize: 30, fontWeight: 700 }}>{idr(totals.total)}</p>
        <p style={{ margin: 0, color: "#cbd5e1", fontSize: 13 }}>{Number(q.tax_pct) > 0 ? `Sudah termasuk PPN ${Number(q.tax_pct)}%` : "Belum dikenakan PPN"}</p>
      </section>

      <section style={card}>
        <h2 style={{ margin: "0 0 0.75rem", fontSize: 17 }}>Status</h2>
        <ol style={{ display: "grid", gap: 6, margin: 0, padding: 0, listStyle: "none", fontSize: 15 }}>
          <li>✅ Proposal diterima{q.sent_at ? ` (${dateId(q.sent_at)})` : ""}</li>
          <li>{accepted ? "✅" : "⬜"} Disetujui{q.accepted_at ? ` oleh ${q.accepted_name} pada ${dateId(q.accepted_at)}` : ""}</li>
          <li>{accepted ? "✅" : "⬜"} Perjanjian kerja sama {accepted ? "tersedia di bawah" : "(tersedia setelah Anda menyetujui)"}</li>
          <li>
            {invoices.length && invoices.every((i) => i.status === "paid") ? "✅" : "⬜"} Pembayaran ({invoices.filter((i) => i.status === "paid").length}/{invoices.length || parts.length} termin)
          </li>
        </ol>
      </section>

      <section style={card}>
        <h2 style={{ margin: "0 0 0.75rem", fontSize: 17 }}>Rincian penawaran</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ textAlign: "left", color: "#6b7280" }}>
              <th style={{ padding: "6px 0" }}>Deskripsi</th>
              <th style={{ padding: "6px 8px", textAlign: "right" }}>Qty</th>
              <th style={{ padding: "6px 0", textAlign: "right" }}>Jumlah</th>
            </tr>
          </thead>
          <tbody>
            {q.items.map((it, i) => (
              <tr key={i} style={{ borderTop: "1px solid #eef0f6" }}>
                <td style={{ padding: "8px 0" }}>
                  <strong>{it.name}</strong>
                  {it.note ? <div style={{ color: "#6b7280", fontSize: 13 }}>{it.note}</div> : null}
                </td>
                <td style={{ padding: "8px", textAlign: "right" }}>{it.qty}</td>
                <td style={{ padding: "8px 0", textAlign: "right" }}>{idr(it.qty * it.unit_price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ textAlign: "right", marginTop: 10, fontSize: 14, color: "#4b5563" }}>
          <div>Subtotal {idr(totals.subtotal)}</div>
          {totals.discount ? <div>Diskon {Number(q.discount_pct)}% -{idr(totals.discount)}</div> : null}
          {totals.tax ? <div>PPN {Number(q.tax_pct)}% {idr(totals.tax)}</div> : null}
          <div style={{ fontSize: 18, color: "#111827", fontWeight: 700 }}>Total {idr(totals.total)}</div>
        </div>
        {parts.length ? (
          <div style={{ marginTop: 14, fontSize: 14 }}>
            <strong>Termin pembayaran</strong>
            <ul style={{ margin: "6px 0 0", paddingLeft: 18, color: "#374151" }}>
              {parts.map((p) => (
                <li key={p.seq}>
                  {p.label}: <strong>{idr(p.amount)}</strong>
                </li>
              ))}
            </ul>
            {split.recurringItems.length ? <p style={{ color: "#6b7280", fontSize: 13, margin: "6px 0 0" }}>Layanan berlangganan ditagih di muka per periode.</p> : null}
          </div>
        ) : null}
        <p style={{ marginTop: 14 }}>
          <a href={`/p/${token}/proposal`} style={btn}>
            Unduh proposal lengkap (PDF)
          </a>
        </p>
      </section>

      {accepted ? (
        <section style={card}>
          <h2 style={{ margin: "0 0 0.5rem", fontSize: 17 }}>Perjanjian kerja sama</h2>
          <p style={{ margin: "0 0 0.75rem", color: "#4b5563", fontSize: 14 }}>Mohon tinjau, tandatangani dengan meterai, lalu kirim kembali salinannya ke {site.contact.email}. Pekerjaan dimulai setelah perjanjian ditandatangani dan termin pertama dibayar.</p>
          <a href={`/p/${token}/contract`} style={btnPrimary}>
            {q.parent_id ? "Unduh addendum (Indonesia / English)" : "Unduh perjanjian (Indonesia / English)"}
          </a>
        </section>
      ) : expired ? (
        <section style={{ ...card, borderLeft: "4px solid #dc2626" }}>Masa berlaku penawaran ini sudah berakhir. Silakan hubungi kami untuk pembaruan.</section>
      ) : (
        <section style={card}>
          <h2 style={{ margin: "0 0 0.75rem", fontSize: 17 }}>Setujui penawaran</h2>
          <form action={acceptQuote} style={{ display: "grid", gap: 10 }}>
            <input type="hidden" name="token" value={token} />
            <input name="name" required minLength={2} maxLength={160} placeholder="Nama lengkap Anda" style={input} />
            <label style={{ display: "flex", gap: 8, fontSize: 14, alignItems: "flex-start" }}>
              <input type="checkbox" name="agree" style={{ marginTop: 3 }} />
              <span>Saya mewakili {q.client_company || q.client_name} dan menyetujui ruang lingkup serta harga pada penawaran ini. Perjanjian tertulis akan menyusul untuk ditandatangani.</span>
            </label>
            <div>
              <button style={btnPrimary}>Ya, saya setuju</button>
            </div>
          </form>
          <hr style={{ border: 0, borderTop: "1px solid #eef0f6", margin: "1.25rem 0" }} />
          <h3 style={{ margin: "0 0 0.5rem", fontSize: 15 }}>Ada yang ingin diubah?</h3>
          {q.client_note ? <p style={{ margin: "0 0 8px", color: "#6b7280", fontSize: 14 }}>Catatan terakhir Anda: {q.client_note}</p> : null}
          <form action={requestRevision} style={{ display: "grid", gap: 10 }}>
            <input type="hidden" name="token" value={token} />
            <textarea name="note" rows={3} maxLength={1500} placeholder="Tuliskan bagian yang ingin disesuaikan" style={input} />
            <div>
              <button style={btn}>Kirim permintaan perubahan</button>
            </div>
          </form>
        </section>
      )}

      {accepted && stageIndex >= 0 ? (
        <section style={card}>
          <h2 style={{ margin: "0 0 0.75rem", fontSize: 17 }}>Progres proyek</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
            {PROJECT_STAGES.map((st, i) => (
              <span
                key={st.key}
                style={{ padding: "4px 10px", borderRadius: 999, fontSize: 13, fontWeight: 600, background: i < stageIndex ? "#dcfce7" : i === stageIndex ? "#5b5cf0" : "#f1f2f7", color: i < stageIndex ? "#15803d" : i === stageIndex ? "#fff" : "#6b7280" }}
              >
                {st.label}
              </span>
            ))}
          </div>
          {log.length ? (
            <ul style={{ margin: 0, paddingLeft: 18, color: "#374151", fontSize: 14 }}>
              {log.map((e, i) => (
                <li key={i}>
                  {dateId(e.at)} · {PROJECT_STAGES.find((x) => x.key === e.stage)?.label}
                  {e.note ? `: ${e.note}` : ""}
                </li>
              ))}
            </ul>
          ) : null}
          {q.bast_at ? (
            <p style={{ marginTop: 12 }}>
              <a href={`/p/${token}/bast`} style={btnPrimary}>
                Unduh Berita Acara Serah Terima (BAST)
              </a>
            </p>
          ) : null}
        </section>
      ) : null}

      {accepted ? (
        <section style={card}>
          <h2 style={{ margin: "0 0 0.75rem", fontSize: 17 }}>Dokumen</h2>
          {docs.length ? (
            <ul style={{ margin: "0 0 12px", paddingLeft: 18, fontSize: 14 }}>
              {docs.map((d) => (
                <li key={d.id}>
                  <a href={`/p/${token}/doc/${d.id}`} style={{ color: "#4f46e5" }}>
                    {d.filename}
                  </a>{" "}
                  <span style={{ color: "#6b7280" }}>
                    · {docKindLabel[d.kind]} · {d.uploaded_by === "client" ? "dari Anda" : "dari kami"} · {dateId(d.created_at)}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
          <form action={uploadClientDocument} style={{ display: "grid", gap: 10 }}>
            <input type="hidden" name="token" value={token} />
            <select name="kind" style={input} defaultValue="contract">
              <option value="contract">Perjanjian yang sudah ditandatangani</option>
              <option value="bast">BAST yang sudah ditandatangani</option>
              <option value="other">Dokumen lain (bukti transfer, materi, dsb.)</option>
            </select>
            <input type="file" name="file" accept="application/pdf,image/png,image/jpeg" required style={input} />
            <div>
              <button style={btn}>Unggah dokumen (PDF/JPG/PNG, maks 4 MB)</button>
            </div>
          </form>
        </section>
      ) : null}

      {invoices.length ? (
        <section style={card}>
          <h2 style={{ margin: "0 0 0.75rem", fontSize: 17 }}>Invoice</h2>
          <div style={{ display: "grid", gap: 10 }}>
            {invoices.map((inv) => {
              const [label, color, bg] = invoiceBadge[inv.status];
              return (
                <div key={inv.id} style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center", borderTop: "1px solid #eef0f6", paddingTop: 10 }}>
                  <div>
                    <strong>{invoiceNumber(inv)}</strong>
                    <div style={{ color: "#6b7280", fontSize: 13 }}>
                      {inv.label} · jatuh tempo {dateId(inv.due_date)}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <strong>{idr(inv.amount)}</strong>
                    <span style={{ background: bg, color, borderRadius: 999, padding: "2px 10px", fontSize: 12, fontWeight: 700 }}>{label}</span>
                    <a href={`/p/${token}/invoice/${inv.id}`} style={btn}>
                      PDF
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          {site.tax.bankInfo ? <p style={{ whiteSpace: "pre-wrap", fontSize: 14, color: "#374151", marginTop: 14 }}>Pembayaran ke:{"\n"}{site.tax.bankInfo}</p> : null}
        </section>
      ) : null}

      <p style={{ textAlign: "center", color: "#9ca3af", fontSize: 13, marginTop: 24 }}>
        Pertanyaan? Hubungi {site.contact.email} · WhatsApp {site.contact.whatsappNumber}
      </p>
    </div>
  );
}
