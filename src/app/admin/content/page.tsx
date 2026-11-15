import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  CONTENT_CHANNELS,
  CONTENT_FORMATS,
  CONTENT_STATUSES,
  contentStatusLabel,
  monthGrid,
  type ContentItem,
} from "@/lib/content";
import { nowMs } from "@/lib/lead-status";
import { sbSelect } from "@/lib/supabase";
import { AdminShell, adminGate } from "../shell";
import { addContent, deleteContent, updateContent } from "./actions";

const MONTHS = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const DAYS = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

function ItemFields({ item, today }: { item?: ContentItem; today: string }) {
  return (
    <div className="sn-form-grid" style={{ marginTop: 0 }}>
      <input name="title" required maxLength={200} className="sn-input" placeholder="Judul / topik *" defaultValue={item?.title} />
      <input name="publish_date" type="date" required className="sn-input" defaultValue={item?.publish_date ?? today} aria-label="Tanggal tayang" />
      <input name="channel" required list="content-channels" maxLength={60} className="sn-input" placeholder="Channel *" defaultValue={item?.channel} />
      <input name="format" list="content-formats" maxLength={60} className="sn-input" placeholder="Format" defaultValue={item?.format ?? ""} />
      <select name="status" className="sn-input" defaultValue={item?.status ?? "idea"} aria-label="Status">
        {CONTENT_STATUSES.map((s) => (
          <option key={s} value={s}>
            {contentStatusLabel[s]}
          </option>
        ))}
      </select>
      <input name="pic" maxLength={120} className="sn-input" placeholder="PIC" defaultValue={item?.pic ?? ""} />
      <input name="link" maxLength={500} className="sn-input" placeholder="Link desain / postingan (https://…)" defaultValue={item?.link ?? ""} />
      <textarea name="caption" rows={3} maxLength={4000} className="sn-input" placeholder="Caption / brief" defaultValue={item?.caption ?? ""} style={{ gridColumn: "1 / -1" }} />
    </div>
  );
}

export default async function ContentCalendarPage({ searchParams }: { searchParams: Promise<{ m?: string }> }) {
  const gate = await adminGate();
  if (gate) return gate;

  const today = new Date(nowMs() + 7 * 3_600_000).toISOString().slice(0, 10); // WIB date
  const { m } = await searchParams;
  const match = /^(\d{4})-(\d{2})$/.exec(m ?? "");
  const year = match ? Number(match[1]) : Number(today.slice(0, 4));
  const month = match && Number(match[2]) >= 1 && Number(match[2]) <= 12 ? Number(match[2]) : Number(today.slice(5, 7));

  const grid = monthGrid(year, month);
  const items = await sbSelect<ContentItem>(
    "content_items",
    `select=*&publish_date=gte.${grid[0].date}&publish_date=lte.${grid[grid.length - 1].date}&order=publish_date.asc,id.asc&limit=1000`
  );

  const shift = (delta: number) => {
    const d = new Date(Date.UTC(year, month - 1 + delta, 1));
    return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
  };
  const byDate = new Map<string, ContentItem[]>();
  for (const it of items ?? []) byDate.set(it.publish_date, [...(byDate.get(it.publish_date) ?? []), it]);
  const inMonth = (items ?? []).filter((it) => it.publish_date.startsWith(`${year}-${String(month).padStart(2, "0")}`));

  return (
    <AdminShell active="content" title="Kalender Konten" subtitle="Rencana posting per channel">
      <datalist id="content-channels">
        {CONTENT_CHANNELS.map((c) => (
          <option key={c} value={c} />
        ))}
      </datalist>
      <datalist id="content-formats">
        {CONTENT_FORMATS.map((c) => (
          <option key={c} value={c} />
        ))}
      </datalist>

      {items === null ? (
        <section className="sn-card">
          <p className="sn-empty">
            Tabel <code>content_items</code> belum bisa dibaca. Jalankan migrasi <code>20261116120000_sales_quotes_content.sql</code>.
          </p>
        </section>
      ) : (
        <>
          <div className="sn-card-header" style={{ padding: "0 0 1rem" }}>
            <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Link href={`/admin/content?m=${shift(-1)}`} className="sn-btn sn-btn-sm" aria-label="Bulan sebelumnya">
                <ChevronLeft size={14} />
              </Link>
              <strong style={{ minWidth: "9rem", textAlign: "center", fontSize: "1.05rem" }}>
                {MONTHS[month - 1]} {year}
              </strong>
              <Link href={`/admin/content?m=${shift(1)}`} className="sn-btn sn-btn-sm" aria-label="Bulan berikutnya">
                <ChevronRight size={14} />
              </Link>
              <Link href="/admin/content" className="sn-pill">
                Hari ini
              </Link>
            </nav>
            <span className="sn-muted">{inMonth.length} konten bulan ini</span>
          </div>

          <div className="sn-cal">
            {DAYS.map((d) => (
              <div key={d} className="sn-cal-head">
                {d}
              </div>
            ))}
            {grid.map((cell) => (
              <div key={cell.date} className={`sn-cal-day ${cell.inMonth ? "" : "out"} ${cell.date === today ? "today" : ""}`}>
                <span className="sn-cal-num">{Number(cell.date.slice(8))}</span>
                {(byDate.get(cell.date) ?? []).map((it) => (
                  <a key={it.id} href={`#item-${it.id}`} className={`sn-chip s-${it.status}`} title={`${it.channel}: ${it.title}`}>
                    {it.channel.slice(0, 2)} · {it.title}
                  </a>
                ))}
              </div>
            ))}
          </div>

          <details className="sn-card sn-edit" style={{ padding: "1rem 1.25rem", margin: "1.5rem 0" }}>
            <summary>+ Tambah konten</summary>
            <form action={addContent} style={{ marginTop: "0.75rem" }}>
              <ItemFields today={today} />
              <button className="sn-btn sn-btn-primary" style={{ marginTop: "0.75rem" }}>
                Simpan konten
              </button>
            </form>
          </details>

          <section className="sn-card">
            <div className="sn-card-header">
              <h3 className="sn-card-title">Daftar konten {MONTHS[month - 1]}</h3>
            </div>
            {inMonth.length === 0 ? (
              <p className="sn-empty">Belum ada konten bulan ini.</p>
            ) : (
              <div className="sn-table-wrap">
                <table className="sn-table">
                  <thead>
                    <tr>
                      <th>Tanggal</th>
                      <th>Konten</th>
                      <th>Channel</th>
                      <th>PIC</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inMonth.map((it) => (
                      <tr key={it.id} id={`item-${it.id}`}>
                        <td style={{ whiteSpace: "nowrap" }}>{new Date(it.publish_date).toLocaleDateString("id-ID", { timeZone: "UTC", day: "numeric", month: "short" })}</td>
                        <td style={{ minWidth: "16rem" }}>
                          <strong>{it.title}</strong>
                          {it.format ? <span className="sn-muted"> · {it.format}</span> : null}
                          {it.caption ? <div className="sn-note">{it.caption}</div> : null}
                          {it.link ? (
                            <a className="sn-link" href={it.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.8125rem" }}>
                              Buka link
                            </a>
                          ) : null}
                          <details className="sn-edit">
                            <summary>Ubah</summary>
                            <form action={updateContent} style={{ marginTop: "0.5rem" }}>
                              <input type="hidden" name="id" value={it.id} />
                              <ItemFields item={it} today={today} />
                              <button className="sn-btn sn-btn-primary sn-btn-sm" style={{ marginTop: "0.5rem" }}>
                                Simpan
                              </button>
                            </form>
                            <form action={deleteContent} style={{ marginTop: "0.5rem" }}>
                              <input type="hidden" name="id" value={it.id} />
                              <button className="sn-btn sn-btn-sm" style={{ color: "var(--sn-danger)" }}>
                                Hapus
                              </button>
                            </form>
                          </details>
                        </td>
                        <td>{it.channel}</td>
                        <td>{it.pic ?? "–"}</td>
                        <td>
                          <span className={`sn-badge sn-chip s-${it.status}`} style={{ display: "inline-block" }}>
                            {contentStatusLabel[it.status]}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </>
      )}
    </AdminShell>
  );
}
