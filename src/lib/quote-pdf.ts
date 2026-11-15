import "server-only";
import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFPage } from "pdf-lib";
import { siteConfig } from "@/config/site";
import type { SiteData } from "@/config/site-data";
import { computeTotals, idr, quoteNumber, type Quote } from "@/lib/quote";

/** Standard PDF fonts only cover Latin-1; anything else is replaced so drawText cannot throw. */
const safe = (s: string) => s.replace(/[\r\t]/g, " ").replace(/[^\n -~ -ÿ]/g, "?");

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

const W = 595.28;
const H = 841.89;
const M = 56;

const NAVY = rgb(0.06, 0.09, 0.18);
const INK = rgb(0.16, 0.2, 0.29);
const MUTED = rgb(0.45, 0.5, 0.58);
const ACCENT = rgb(0.41, 0.42, 1);
const SOFT = rgb(0.95, 0.95, 0.99);
const LINE = rgb(0.88, 0.89, 0.93);
const WHITE = rgb(1, 1, 1);

/** The AG·SORA mark: two interlocked diamonds. */
function drawMark(page: PDFPage, cx: number, cy: number, r: number, color = ACCENT) {
  const diamond = (x: number) => {
    const pts = [
      [x, cy + r],
      [x + r, cy],
      [x, cy - r],
      [x - r, cy],
    ];
    pts.forEach((p, i) => {
      const n = pts[(i + 1) % pts.length];
      page.drawLine({ start: { x: p[0], y: p[1] }, end: { x: n[0], y: n[1] }, thickness: r * 0.28, color });
    });
  };
  diamond(cx - r * 0.55);
  diamond(cx + r * 0.55);
}

/**
 * A4 proposal: cover, the AG·SORA philosophy, how we work, then the investment (items, totals, terms).
 * The philosophy text, process and contact details come from the dashboard (site data). Only call for approved quotes.
 */
export async function buildQuotePdf(q: Quote, site: SiteData): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const { proposal, contact, tax } = site;
  const number = quoteNumber(q);
  const issued = dateId(q.approved_at ?? q.created_at);

  let page = pdf.addPage([W, H]);
  let y = H - M;

  const text = (s: string, x: number, size = 10, f = font, color = INK) => page.drawText(safe(s), { x, y, size, font: f, color });
  const right = (s: string, xr: number, size = 10, f = font, color = INK) =>
    page.drawText(safe(s), { x: xr - f.widthOfTextAtSize(safe(s), size), y, size, font: f, color });
  const paragraph = (s: string, x: number, width: number, size = 10.5, lead = 16, color = INK, f = font) => {
    for (const l of wrap(s, f, size, width)) {
      text(l, x, size, f, color);
      y -= lead;
    }
  };
  const footer = (p: PDFPage, n: number) => {
    p.drawLine({ start: { x: M, y: 42 }, end: { x: W - M, y: 42 }, thickness: 0.5, color: LINE });
    p.drawText(safe(`${siteConfig.brandMark} · ${number}`), { x: M, y: 28, size: 8, font, color: MUTED });
    p.drawText(String(n), { x: W - M - 6, y: 28, size: 8, font, color: MUTED });
  };
  const sectionTitle = (eyebrow: string, title: string) => {
    text(eyebrow.toUpperCase(), M, 9, bold, ACCENT);
    y -= 26;
    text(title, M, 24, bold, NAVY);
    y -= 14;
    page.drawRectangle({ x: M, y: y - 2, width: 36, height: 3, color: ACCENT });
    y -= 34;
  };
  const newPage = () => {
    page = pdf.addPage([W, H]);
    y = H - M;
  };
  const ensure = (need: number) => {
    if (y - need < 70) newPage();
  };

  // ── 1. Cover
  page.drawRectangle({ x: 0, y: 0, width: W, height: H, color: NAVY });
  page.drawRectangle({ x: 0, y: H - 6, width: W, height: 6, color: ACCENT });
  drawMark(page, M + 14, H - 96, 14);
  y = H - 102;
  text(siteConfig.brandMark, M + 40, 20, bold, WHITE);

  y = H - 300;
  text("PROPOSAL PENAWARAN", M, 11, bold, ACCENT);
  y -= 44;
  const titleLines = wrap("Sistem yang tumbuh bersama bisnis Anda", bold, 34, W - 2 * M);
  for (const l of titleLines) {
    text(l, M, 34, bold, WHITE);
    y -= 42;
  }
  y -= 4;
  paragraph(proposal.tagline, M, W - 2 * M, 12, 18, rgb(0.72, 0.75, 0.86));

  y = 250;
  page.drawLine({ start: { x: M, y: y + 28 }, end: { x: W - M, y: y + 28 }, thickness: 0.5, color: rgb(0.25, 0.29, 0.42) });
  text("DISIAPKAN UNTUK", M, 8.5, bold, rgb(0.6, 0.64, 0.78));
  text("NOMOR", 330, 8.5, bold, rgb(0.6, 0.64, 0.78));
  y -= 20;
  text(q.client_name, M, 15, bold, WHITE);
  text(number, 330, 11, font, WHITE);
  y -= 18;
  if (q.client_company) text(q.client_company, M, 11, font, rgb(0.8, 0.83, 0.92));
  text(`Tanggal ${issued}`, 330, 10, font, rgb(0.8, 0.83, 0.92));
  y -= 15;
  if (q.valid_until) text(`Berlaku sampai ${dateId(q.valid_until)}`, 330, 10, font, rgb(0.8, 0.83, 0.92));
  y = 92;
  text(siteConfig.legalName, M, 10, bold, WHITE);
  y -= 14;
  if (tax.npwp) {
    text(`NPWP ${tax.npwp}`, M, 9, font, rgb(0.72, 0.75, 0.86));
    y -= 14;
  }
  text(`${contact.email}  ·  WhatsApp ${contact.whatsappNumber}  ·  ${siteConfig.domain}`, M, 9, font, rgb(0.72, 0.75, 0.86));

  // ── 2. Philosophy
  newPage();
  sectionTitle("Tentang kami", proposal.philosophyTitle);
  paragraph(proposal.philosophy, M, W - 2 * M, 12, 19);
  y -= 22;
  proposal.pillars.forEach((p, i) => {
    const bodyLines = wrap(p.text, font, 10.5, W - 2 * M - 90);
    const h = 42 + bodyLines.length * 15;
    ensure(h + 14);
    page.drawRectangle({ x: M, y: y - h + 18, width: W - 2 * M, height: h, color: SOFT });
    page.drawRectangle({ x: M, y: y - h + 18, width: 4, height: h, color: ACCENT });
    y -= 8;
    text(String(i + 1).padStart(2, "0"), M + 20, 22, bold, ACCENT);
    text(p.title, M + 70, 13, bold, NAVY);
    y -= 22;
    for (const l of bodyLines) {
      text(l, M + 70, 10.5, font, INK);
      y -= 15;
    }
    y -= 20;
  });
  footer(page, 2);

  // ── 3. How we work
  newPage();
  sectionTitle("Cara kerja", "Dari pemetaan hingga pertumbuhan");
  proposal.process.forEach((s, i) => {
    const lines = wrap(s.text, font, 10.5, W - 2 * M - 70);
    ensure(lines.length * 15 + 40);
    const top = y;
    page.drawCircle({ x: M + 14, y: top + 4, size: 13, color: i === 0 ? ACCENT : NAVY });
    page.drawText(String(i + 1), { x: M + 14 - (i + 1 > 9 ? 5 : 3), y: top, size: 10, font: bold, color: WHITE });
    text(s.title, M + 46, 13, bold, NAVY);
    y -= 17;
    for (const l of lines) {
      text(l, M + 46, 10.5, font, INK);
      y -= 15;
    }
    if (i < proposal.process.length - 1) page.drawLine({ start: { x: M + 14, y: top - 12 }, end: { x: M + 14, y: y + 2 }, thickness: 1, color: LINE });
    y -= 14;
  });
  y -= 6;
  ensure(40 + proposal.commitments.length * 18);
  text("Komitmen kami", M, 13, bold, NAVY);
  y -= 22;
  for (const c of proposal.commitments) {
    const lines = wrap(c, font, 10.5, W - 2 * M - 22);
    page.drawCircle({ x: M + 5, y: y + 3.5, size: 3, color: ACCENT });
    for (const l of lines) {
      text(l, M + 20, 10.5, font, INK);
      y -= 16;
    }
  }
  footer(page, 3);

  // ── 4. Investment
  newPage();
  sectionTitle("Investasi", "Rincian penawaran");
  // Right edges of the number columns; the name column wraps before the quantity column.
  const cols = { no: M, name: M + 26, qty: 345, price: 445, total: W - M };
  page.drawRectangle({ x: M, y: y - 7, width: W - 2 * M, height: 24, color: NAVY });
  text("No", cols.no + 8, 9, bold, WHITE);
  text("Deskripsi", cols.name, 9, bold, WHITE);
  right("Qty", cols.qty, 9, bold, WHITE);
  right("Harga satuan", cols.price, 9, bold, WHITE);
  right("Jumlah", cols.total - 8, 9, bold, WHITE);
  y -= 28;

  q.items.forEach((item, i) => {
    const nameLines = wrap(item.name, font, 10, 235);
    const noteLines = item.note ? wrap(item.note, font, 8.5, 235) : [];
    ensure((nameLines.length + noteLines.length) * 12 + 14);
    text(String(i + 1), cols.no + 8, 10);
    right(String(item.qty), cols.qty, 10);
    right(idr(item.unit_price), cols.price, 10);
    right(idr(item.qty * item.unit_price), cols.total - 8, 10, bold);
    for (const l of nameLines) {
      text(l, cols.name, 10, bold, NAVY);
      y -= 12;
    }
    for (const l of noteLines) {
      text(l, cols.name, 8.5, font, MUTED);
      y -= 11;
    }
    page.drawLine({ start: { x: M, y: y - 4 }, end: { x: W - M, y: y - 4 }, thickness: 0.5, color: LINE });
    y -= 14;
  });

  const t = computeTotals(q.items, Number(q.discount_pct), Number(q.tax_pct));
  ensure(120);
  y -= 6;
  const taxNotes: string[] = [];
  const row = (label: string, value: string) => {
    right(label, W - M - 130, 10, font, MUTED);
    right(value, W - M - 8, 10);
    y -= 16;
  };
  row("Subtotal", idr(t.subtotal));
  if (t.discount) row(`Diskon ${Number(q.discount_pct)}%`, `-${idr(t.discount)}`);
  if (t.tax) {
    row(`PPN ${Number(q.tax_pct)}%`, idr(t.tax));
    taxNotes.push(`PPN dihitung 12% atas Dasar Pengenaan Pajak Nilai Lain (11/12 dari harga), setara ${Number(q.tax_pct)}% efektif, sesuai PMK 131/2024.`);
  }
  if (tax.pph23Note) taxNotes.push("Jika klien merupakan pemotong pajak, PPh Pasal 23 dipotong atas jasa ini dari nilai sebelum PPN, dan bukti potong mohon diserahkan kepada kami.");
  y -= 30;
  page.drawRectangle({ x: W - M - 250, y: y - 10, width: 250, height: 34, color: NAVY });
  text("TOTAL INVESTASI", W - M - 238, 9, bold, rgb(0.72, 0.75, 0.86));
  right(idr(t.total), W - M - 12, 15, bold, WHITE);
  y -= 46;

  if (taxNotes.length) {
    const lines = taxNotes.flatMap((n) => wrap(n, font, 8.5, W - 2 * M));
    ensure(lines.length * 11 + 24);
    text("Catatan perpajakan", M, 10, bold, NAVY);
    y -= 14;
    for (const l of lines) {
      text(l, M, 8.5, font, MUTED);
      y -= 11;
    }
    y -= 12;
  }

  if (q.terms) {
    const lines = wrap(q.terms, font, 9.5, W - 2 * M);
    ensure(lines.length * 13 + 36);
    text("Syarat & ketentuan", M, 11, bold, NAVY);
    y -= 16;
    for (const l of lines) {
      text(l, M, 9.5, font, MUTED);
      y -= 13;
    }
    y -= 14;
  }

  const closingLines = wrap(proposal.closing, font, 10.5, W - 2 * M);
  ensure(closingLines.length * 15 + 110);
  for (const l of closingLines) {
    text(l, M, 10.5, font, INK);
    y -= 15;
  }
  y -= 26;
  const half = (W - 2 * M - 30) / 2;
  text("Disetujui oleh", M, 9, font, MUTED);
  text("Disetujui oleh klien", M + half + 30, 9, font, MUTED);
  y -= 50;
  page.drawLine({ start: { x: M, y }, end: { x: M + half, y }, thickness: 0.6, color: INK });
  page.drawLine({ start: { x: M + half + 30, y }, end: { x: W - M, y }, thickness: 0.6, color: INK });
  y -= 14;
  text(siteConfig.legalName, M, 9.5, bold, NAVY);
  text(q.client_company || q.client_name, M + half + 30, 9.5, bold, NAVY);
  y -= 12;
  if (q.approved_at) text(dateId(q.approved_at), M, 8.5, font, MUTED);
  text("Tanggal", M + half + 30, 8.5, font, MUTED);

  // Footers for every page after the cover; page numbers follow the final order.
  pdf.getPages().forEach((p, i) => {
    if (i >= 3) footer(p, i + 1);
  });

  return pdf.save();
}
