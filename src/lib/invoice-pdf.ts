import "server-only";
import { PDFDocument, StandardFonts, degrees, rgb } from "pdf-lib";
import { siteConfig } from "@/config/site";
import type { SiteData } from "@/config/site-data";
import { idr, invoiceNumber, quoteNumber, type Invoice, type Quote } from "@/lib/quote";

const safe = (s: string) => s.replace(/[\r\t]/g, " ").replace(/[^\n -~ -ÿ]/g, "?");
const dateId = (iso: string) =>
  new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Jakarta" });

const W = 595.28;
const H = 841.89;
const M = 56;
const NAVY = rgb(0.06, 0.09, 0.18);
const INK = rgb(0.16, 0.2, 0.29);
const MUTED = rgb(0.45, 0.5, 0.58);
const ACCENT = rgb(0.41, 0.42, 1);
const LINE = rgb(0.88, 0.89, 0.93);
const WHITE = rgb(1, 1, 1);

function wrap(text: string, font: { widthOfTextAtSize(t: string, s: number): number }, size: number, width: number) {
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

/** One-page A4 invoice for a single instalment of a quote. */
export async function buildInvoicePdf(inv: Invoice, q: Quote, site: SiteData): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const page = pdf.addPage([W, H]);
  const { tax, contact } = site;
  let y = H - M;

  const text = (s: string, x: number, size = 10, f = font, color = INK) => page.drawText(safe(s), { x, y, size, font: f, color });
  const right = (s: string, xr: number, size = 10, f = font, color = INK) =>
    page.drawText(safe(s), { x: xr - f.widthOfTextAtSize(safe(s), size), y, size, font: f, color });

  page.drawRectangle({ x: 0, y: H - 6, width: W, height: 6, color: ACCENT });
  y = H - 70;
  text(siteConfig.brandMark, M, 20, bold, NAVY);
  right("INVOICE", W - M, 22, bold, ACCENT);
  y -= 18;
  text(siteConfig.legalName, M, 9.5, font, MUTED);
  right(invoiceNumber(inv), W - M, 11, bold, NAVY);
  y -= 13;
  if (tax.npwp) text(`NPWP ${tax.npwp}${tax.nib ? `  |  NIB ${tax.nib}` : ""}`, M, 9, font, MUTED);
  right(`Tanggal ${dateId(inv.created_at)}`, W - M, 9.5, font, MUTED);
  y -= 13;
  right(`Jatuh tempo ${dateId(inv.due_date)}`, W - M, 9.5, bold, INK);
  y -= 40;

  text("DITAGIHKAN KEPADA", M, 8.5, bold, ACCENT);
  y -= 16;
  text(q.client_name, M, 12, bold, NAVY);
  y -= 15;
  if (q.client_company) {
    text(q.client_company, M, 10.5, font, INK);
    y -= 14;
  }
  if (q.client_email) {
    text(q.client_email, M, 9.5, font, MUTED);
    y -= 14;
  }
  y -= 18;

  page.drawRectangle({ x: M, y: y - 7, width: W - 2 * M, height: 24, color: NAVY });
  text("Deskripsi", M + 10, 9, bold, WHITE);
  right("Jumlah", W - M - 10, 9, bold, WHITE);
  y -= 32;
  for (const l of wrap(inv.label, font, 10.5, W - 2 * M - 130)) {
    text(l, M + 10, 10.5, bold, NAVY);
    y -= 14;
  }
  text(`Proyek ${q.client_company || q.client_name}, penawaran ${quoteNumber(q)}`, M + 10, 9, font, MUTED);
  right(idr(inv.amount), W - M - 10, 11, bold);
  y -= 22;
  page.drawLine({ start: { x: M, y }, end: { x: W - M, y }, thickness: 0.5, color: LINE });
  y -= 26;

  page.drawRectangle({ x: W - M - 250, y: y - 12, width: 250, height: 38, color: NAVY });
  text("TOTAL TAGIHAN", W - M - 238, 9, bold, rgb(0.72, 0.75, 0.86));
  right(idr(inv.amount), W - M - 12, 16, bold, WHITE);
  y -= 50;
  const taxLine = Number(q.tax_pct) > 0 ? `Jumlah sudah termasuk PPN ${Number(q.tax_pct)}%.` : "Belum dikenakan PPN (penerbit bukan Pengusaha Kena Pajak).";
  text(taxLine, M, 9, font, MUTED);
  y -= 13;
  if (tax.pph23Note) {
    for (const l of wrap("Jika Anda memotong PPh Pasal 23, mohon kirimkan bukti potongnya kepada kami.", font, 9, W - 2 * M)) {
      text(l, M, 9, font, MUTED);
      y -= 12;
    }
  }
  y -= 18;

  text("CARA PEMBAYARAN", M, 8.5, bold, ACCENT);
  y -= 16;
  const bank = tax.bankInfo?.trim() || "Rekening pembayaran akan diinformasikan oleh tim kami.";
  for (const l of wrap(bank, font, 10.5, W - 2 * M)) {
    text(l, M, 10.5, bold, INK);
    y -= 15;
  }
  y -= 4;
  for (const l of wrap(`Mohon cantumkan nomor invoice ${invoiceNumber(inv)} pada berita transfer dan kirim bukti transfer ke ${contact.email}.`, font, 9.5, W - 2 * M)) {
    text(l, M, 9.5, font, MUTED);
    y -= 13;
  }

  if (inv.status === "paid") {
    page.drawText("LUNAS", { x: W - M - 190, y: 300, size: 40, font: bold, color: rgb(0.2, 0.65, 0.4), rotate: degrees(12) });
  }

  page.drawLine({ start: { x: M, y: 50 }, end: { x: W - M, y: 50 }, thickness: 0.5, color: LINE });
  page.drawText(safe(`${siteConfig.legalName}  |  ${contact.email}  |  ${siteConfig.domain}`), { x: M, y: 36, size: 8, font, color: MUTED });
  return pdf.save();
}
