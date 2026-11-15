import "server-only";
import { PDFDocument, StandardFonts, rgb, type PDFFont } from "pdf-lib";
import { siteConfig } from "@/config/site";
import { computeTotals, idr, quoteNumber, type Quote } from "@/lib/quote";

/** Standard PDF fonts only cover Latin-1; anything else is replaced so drawText cannot throw. */
const safe = (s: string) => s.replace(/[\r\t]/g, " ").replace(/[^\n -~ -ÿ]/g, "?");

function wrap(text: string, font: PDFFont, size: number, width: number): string[] {
  const lines: string[] = [];
  for (const para of safe(text).split("\n")) {
    let line = "";
    for (const word of para.split(" ")) {
      const next = line ? `${line} ${word}` : word;
      if (font.widthOfTextAtSize(next, size) <= width) line = next;
      else {
        if (line) lines.push(line);
        line = word;
      }
    }
    lines.push(line);
  }
  return lines;
}

const dateId = (iso: string) =>
  new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Jakarta" });

/** A4 price offer. Only call for approved quotes. */
export async function buildQuotePdf(q: Quote): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const ink = rgb(0.2, 0.25, 0.32);
  const muted = rgb(0.5, 0.55, 0.62);
  const accent = rgb(0.41, 0.42, 1);

  const W = 595.28;
  const H = 841.89;
  const M = 48;
  let page = pdf.addPage([W, H]);
  let y = H - M;

  const text = (s: string, x: number, size = 10, f = font, color = ink) =>
    page.drawText(safe(s), { x, y, size, font: f, color });
  const right = (s: string, xr: number, size = 10, f = font, color = ink) =>
    page.drawText(safe(s), { x: xr - f.widthOfTextAtSize(safe(s), size), y, size, font: f, color });
  const ensure = (need: number) => {
    if (y - need < M + 40) {
      page = pdf.addPage([W, H]);
      y = H - M;
    }
  };

  // Header
  text("AG·SORA", M, 22, bold, accent);
  right("PENAWARAN HARGA", W - M, 14, bold);
  y -= 16;
  text(siteConfig.legalName, M, 9, font, muted);
  right(quoteNumber(q), W - M, 10, font, muted);
  y -= 12;
  text(`${siteConfig.email} · WhatsApp ${siteConfig.whatsapp.number}`, M, 9, font, muted);
  right(`Tanggal ${dateId(q.approved_at ?? q.created_at)}`, W - M, 9, font, muted);
  y -= 12;
  if (q.valid_until) right(`Berlaku sampai ${dateId(q.valid_until)}`, W - M, 9, font, muted);
  y -= 28;

  // Client
  text("Kepada", M, 9, font, muted);
  y -= 14;
  text(q.client_name, M, 12, bold);
  y -= 14;
  if (q.client_company) {
    text(q.client_company, M, 10);
    y -= 13;
  }
  if (q.client_email) {
    text(q.client_email, M, 10, font, muted);
    y -= 13;
  }
  y -= 14;

  // Items table
  const cols = { no: M, name: M + 24, qty: 340, price: 430, total: W - M };
  page.drawRectangle({ x: M, y: y - 6, width: W - 2 * M, height: 22, color: rgb(0.95, 0.95, 0.98) });
  text("No", cols.no + 4, 9, bold);
  text("Deskripsi", cols.name, 9, bold);
  right("Qty", cols.qty + 20, 9, bold);
  right("Harga satuan", cols.price + 50, 9, bold);
  right("Jumlah", cols.total - 4, 9, bold);
  y -= 24;

  q.items.forEach((item, i) => {
    const nameLines = wrap(item.name, font, 10, cols.qty - cols.name - 30);
    const noteLines = item.note ? wrap(item.note, font, 8.5, cols.qty - cols.name - 30) : [];
    ensure((nameLines.length + noteLines.length) * 12 + 10);
    text(String(i + 1), cols.no + 4, 10);
    right(String(item.qty), cols.qty + 20, 10);
    right(idr(item.unit_price), cols.price + 50, 10);
    right(idr(item.qty * item.unit_price), cols.total - 4, 10);
    for (const l of nameLines) {
      text(l, cols.name, 10);
      y -= 12;
    }
    for (const l of noteLines) {
      text(l, cols.name, 8.5, font, muted);
      y -= 11;
    }
    page.drawLine({ start: { x: M, y: y - 3 }, end: { x: W - M, y: y - 3 }, thickness: 0.5, color: rgb(0.88, 0.9, 0.93) });
    y -= 10;
  });

  // Totals
  const t = computeTotals(q.items, Number(q.discount_pct), Number(q.tax_pct));
  ensure(110);
  y -= 6;
  const row = (label: string, value: string, strong = false) => {
    right(label, W - M - 120, 10, strong ? bold : font, strong ? ink : muted);
    right(value, W - M - 4, strong ? 12 : 10, strong ? bold : font);
    y -= strong ? 20 : 15;
  };
  row("Subtotal", idr(t.subtotal));
  if (t.discount) row(`Diskon ${Number(q.discount_pct)}%`, `-${idr(t.discount)}`);
  if (t.tax) row(`PPN ${Number(q.tax_pct)}%`, idr(t.tax));
  row("TOTAL", idr(t.total), true);
  y -= 14;

  // Terms
  if (q.terms) {
    const lines = wrap(q.terms, font, 9, W - 2 * M);
    ensure(lines.length * 12 + 30);
    text("Syarat & ketentuan", M, 10, bold);
    y -= 14;
    for (const l of lines) {
      text(l, M, 9, font, muted);
      y -= 12;
    }
    y -= 10;
  }

  // Approval line
  ensure(60);
  text(`Disetujui oleh ${siteConfig.legalName}`, M, 9, font, muted);
  y -= 12;
  if (q.approved_at) text(dateId(q.approved_at), M, 9, font, muted);

  return pdf.save();
}
