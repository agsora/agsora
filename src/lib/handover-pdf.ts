import "server-only";
import { PDFDocument, StandardFonts, rgb, type PDFFont } from "pdf-lib";
import { siteConfig } from "@/config/site";
import type { SiteData } from "@/config/site-data";
import { WARRANTY_DAYS, WARRANTY_WORDS } from "@/config/guarantees";
import { PAYMENT_PLANS, idr, planOf, quoteNumber, splitTotals, type Quote } from "@/lib/quote";

/**
 * Two short bilingual documents that sit next to the main agreement:
 * - BAST (Berita Acara Serah Terima): the client confirms the work is delivered; the warranty starts that day.
 * - Addendum: extra work on an existing agreement, drawn from a quote whose parent is the original quote.
 */

const COMPANY = {
  director: "Hendrik",
  address: "Jl. Sei Tj No. 42, Sendang Sari, Kecamatan Kisaran Barat, Kabupaten Asahan, Sumatera Utara 21211",
};

const safe = (s: string) => s.replace(/[\r\t]/g, " ").replace(/[^\n -~ -ÿ]/g, "?");
const dateId = (iso: string) => new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Jakarta" });
const dateEn = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Jakarta" });

const W = 595.28;
const H = 841.89;
const M = 56;
const NAVY = rgb(0.06, 0.09, 0.18);
const INK = rgb(0.16, 0.2, 0.29);
const MUTED = rgb(0.45, 0.5, 0.58);
const ACCENT = rgb(0.41, 0.42, 1);
const LINE = rgb(0.88, 0.89, 0.93);
const WHITE = rgb(1, 1, 1);

function wrap(text: string, font: PDFFont, size: number, width: number) {
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

export async function frame(docNo: string) {
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const ital = await pdf.embedFont(StandardFonts.HelveticaOblique);
  let page = pdf.addPage([W, H]);
  let y = H - M;
  const text = (s: string, x: number, size = 10, f = font, color = INK) => page.drawText(safe(s), { x, y, size, font: f, color });
  const center = (s: string, size: number, f = bold, color = NAVY) => page.drawText(safe(s), { x: (W - f.widthOfTextAtSize(safe(s), size)) / 2, y, size, font: f, color });
  const right = (s: string, xr: number, size = 10, f = font, color = INK) => page.drawText(safe(s), { x: xr - f.widthOfTextAtSize(safe(s), size), y, size, font: f, color });
  const ensure = (need: number) => {
    if (y - need < 70) {
      page = pdf.addPage([W, H]);
      y = H - M;
    }
  };
  /** Indonesian line(s) followed by the English translation in italics. */
  const bi = (id: string, en: string, size = 10) => {
    const a = wrap(id, font, size, W - 2 * M);
    const b = wrap(en, ital, size - 0.8, W - 2 * M);
    ensure((a.length + b.length) * (size + 4) + 8);
    for (const l of a) {
      text(l, M, size, font, INK);
      y -= size + 4;
    }
    for (const l of b) {
      text(l, M, size - 0.8, ital, MUTED);
      y -= size + 3;
    }
    y -= 8;
  };
  const signatures = (client: string, clientRep: string, role = "Perwakilan / Representative") => {
    ensure(150);
    y -= 10;
    const half = (W - 2 * M - 40) / 2;
    const xB = M + half + 40;
    text("PIHAK PERTAMA / FIRST PARTY", M, 9, bold, NAVY);
    text("PIHAK KEDUA / SECOND PARTY", xB, 9, bold, NAVY);
    y -= 13;
    text(siteConfig.legalName, M, 9, font, MUTED);
    text(client, xB, 9, font, MUTED);
    y -= 56;
    text("(meterai / stamp duty)", M, 8, font, MUTED);
    text("(meterai / stamp duty)", xB, 8, font, MUTED);
    y -= 5;
    page.drawLine({ start: { x: M, y }, end: { x: M + half, y }, thickness: 0.6, color: INK });
    page.drawLine({ start: { x: xB, y }, end: { x: xB + half, y }, thickness: 0.6, color: INK });
    y -= 13;
    text(COMPANY.director, M, 10, bold, INK);
    text(clientRep, xB, 10, bold, INK);
    y -= 12;
    text("Direktur / Director", M, 8.5, font, MUTED);
    text(role, xB, 8.5, font, MUTED);
  };
  const finish = () => {
    const pages = pdf.getPages();
    pages.forEach((p, i) => {
      p.drawRectangle({ x: 0, y: H - 6, width: W, height: 6, color: ACCENT });
      p.drawLine({ start: { x: M, y: 44 }, end: { x: W - M, y: 44 }, thickness: 0.5, color: LINE });
      p.drawText(safe(`${docNo}  ·  ${siteConfig.legalName}`), { x: M, y: 30, size: 8, font, color: MUTED });
      const label = `${i + 1} / ${pages.length}`;
      p.drawText(label, { x: W - M - font.widthOfTextAtSize(label, 8), y: 30, size: 8, font, color: MUTED });
    });
    return pdf.save();
  };
  const table = (rows: { name: string; note?: string; amount?: number }[], withAmount: boolean) => {
    page.drawRectangle({ x: M, y: y - 7, width: W - 2 * M, height: 22, color: NAVY });
    text("No", M + 8, 9, bold, WHITE);
    text("Pekerjaan / Work item", M + 32, 9, bold, WHITE);
    if (withAmount) right("Jumlah / Amount", W - M - 8, 9, bold, WHITE);
    y -= 26;
    rows.forEach((r, i) => {
      const lines = wrap(r.name, font, 10, withAmount ? 330 : W - 2 * M - 50);
      ensure(lines.length * 13 + 16);
      text(String(i + 1), M + 8, 10);
      if (withAmount && r.amount !== undefined) right(idr(r.amount), W - M - 8, 10, bold);
      for (const l of lines) {
        text(l, M + 32, 10, bold, NAVY);
        y -= 13;
      }
      if (r.note) {
        text(r.note.slice(0, 110), M + 32, 8.5, font, MUTED);
        y -= 11;
      }
      page.drawLine({ start: { x: M, y: y - 3 }, end: { x: W - M, y: y - 3 }, thickness: 0.5, color: LINE });
      y -= 12;
    });
    y -= 6;
  };
  return { pdf, font, bold, text, center, right, bi, signatures, finish, table, get y() { return y; }, set y(v: number) { y = v; }, ensure };
}

const contractNo = (q: Pick<Quote, "id" | "created_at">) => quoteNumber(q).replace("AGS/", "PKS/");

/** Berita Acara Serah Terima for a delivered project. */
export async function buildBastPdf(q: Quote, site: SiteData): Promise<Uint8Array> {
  const no = quoteNumber(q).replace("AGS/", "BAST/");
  const d = await frame(no);
  const when = q.bast_at ?? new Date().toISOString();
  const client = q.client_company || q.client_name;
  const work = splitTotals(q).oneTimeItems;

  d.y = H - 80;
  d.center("BERITA ACARA SERAH TERIMA PEKERJAAN", 14);
  d.y -= 18;
  d.center("HANDOVER CERTIFICATE OF WORK", 11, d.bold, MUTED);
  d.y -= 16;
  d.center(`No.: ${no}`, 10, d.font, MUTED);
  d.y -= 30;

  d.bi(
    `Pada tanggal ${dateId(when)}, yang bertanda tangan di bawah ini: (1) ${siteConfig.legalName}, beralamat di ${COMPANY.address}, diwakili oleh ${COMPANY.director} selaku Direktur ("PIHAK PERTAMA"); dan (2) ${client}${q.client_company ? `, diwakili oleh ${q.client_name}` : ""} ("PIHAK KEDUA").`,
    `On ${dateEn(when)}, the undersigned: (1) ${siteConfig.legalName}, of ${COMPANY.address}, represented by ${COMPANY.director} as Director (the "FIRST PARTY"); and (2) ${client}${q.client_company ? `, represented by ${q.client_name}` : ""} (the "SECOND PARTY").`,
  );
  d.bi(
    `Berdasarkan Perjanjian Nomor ${contractNo(q)} dan Penawaran Nomor ${quoteNumber(q)}, PIHAK PERTAMA menyerahkan dan PIHAK KEDUA menerima hasil pekerjaan berikut dalam keadaan baik dan berfungsi sesuai lingkup yang disepakati:`,
    `Under Agreement No. ${contractNo(q)} and Quotation No. ${quoteNumber(q)}, the FIRST PARTY hands over and the SECOND PARTY accepts the following deliverables in good, working condition within the agreed scope:`,
  );
  d.table(work.length ? work.map((i) => ({ name: i.name, note: i.note })) : q.items.map((i) => ({ name: i.name, note: i.note })), false);
  d.bi(
    `Dengan ditandatanganinya berita acara ini: (a) pekerjaan dinyatakan selesai dan diterima; (b) masa garansi perbaikan bug tanpa biaya selama ${WARRANTY_DAYS} (${WARRANTY_WORDS.id}) hari kalender dimulai sejak tanggal tersebut di atas; (c) pembayaran termin terakhir jatuh tempo sesuai Perjanjian; dan (d) akses, kredensial, dan dokumentasi telah diserahkan kepada PIHAK KEDUA, serta kode sumber diserahkan setelah pelunasan sesuai Perjanjian.`,
    `By signing this certificate: (a) the work is declared complete and accepted; (b) the ${WARRANTY_DAYS} (${WARRANTY_WORDS.en}) calendar-day free bug-fix warranty starts on the date above; (c) the final instalment falls due under the Agreement; and (d) access, credentials and documentation have been handed to the SECOND PARTY, with the source code handed over after full payment under the Agreement.`,
  );
  d.bi("Demikian berita acara ini dibuat untuk dipergunakan sebagaimana mestinya.", "This certificate is made to be used as appropriate.");
  d.signatures(client, q.client_name);
  void site;
  return d.finish();
}

/** Addendum for extra work: `q` is the extra-work quote, `parent` the original one. */
export async function buildAddendumPdf(q: Quote, parent: Quote, site: SiteData): Promise<Uint8Array> {
  const no = quoteNumber(q).replace("AGS/", "ADD/");
  const d = await frame(no);
  const when = q.approved_at ?? q.created_at;
  const client = parent.client_company || parent.client_name;
  const split = splitTotals(q);
  const plan = PAYMENT_PLANS[planOf(q)];

  d.y = H - 80;
  d.center("ADDENDUM PERJANJIAN", 14);
  d.y -= 18;
  d.center("AMENDMENT TO THE AGREEMENT", 11, d.bold, MUTED);
  d.y -= 16;
  d.center(`No.: ${no}`, 10, d.font, MUTED);
  d.y -= 30;

  d.bi(
    `Addendum ini dibuat pada tanggal ${dateId(when)} oleh ${siteConfig.legalName} ("PIHAK PERTAMA") dan ${client} ("PIHAK KEDUA"), sebagai perubahan dan tambahan atas Perjanjian Nomor ${contractNo(parent)}.`,
    `This addendum is made on ${dateEn(when)} by ${siteConfig.legalName} (the "FIRST PARTY") and ${client} (the "SECOND PARTY") as an amendment and supplement to Agreement No. ${contractNo(parent)}.`,
  );
  d.bi("Pasal 1. Para Pihak sepakat menambah ruang lingkup pekerjaan sebagai berikut:", "Article 1. The Parties agree to add the following work to the scope:");
  d.table(q.items.map((i) => ({ name: `${i.name}${i.qty > 1 ? ` (x${i.qty})` : ""}`, note: i.note, amount: i.qty * i.unit_price })), true);
  d.ensure(40);
  d.right(`Total tambahan / Additional total: ${idr(split.all.total)}`, W - M - 8, 11, d.bold, NAVY);
  d.y -= 24;
  d.bi(
    `Pasal 2. Biaya tambahan dibayar ${plan.length} kali (${plan.map((s) => `${s.pct}%`).join(" - ")}) dengan ketentuan yang sama seperti termin pada Perjanjian. ${Number(q.tax_pct) > 0 ? `Nilai sudah termasuk PPN ${Number(q.tax_pct)}%.` : "PIHAK PERTAMA belum memungut PPN."}`,
    `Article 2. The additional fee is paid in ${plan.length} instalments (${plan.map((s) => `${s.pct}%`).join(" - ")}) on the same terms as the Agreement's instalments. ${Number(q.tax_pct) > 0 ? `The amount includes VAT at ${Number(q.tax_pct)}%.` : "The FIRST PARTY does not yet collect VAT."}`,
  );
  d.bi(
    `Pasal 3. Jadwal pekerjaan menyesuaikan dengan tambahan lingkup ini. Garansi untuk pekerjaan tambahan berlaku ${WARRANTY_DAYS} (${WARRANTY_WORDS.id}) hari kalender sejak serah terimanya.`,
    `Article 3. The schedule adjusts to this additional scope. The warranty for the additional work is ${WARRANTY_DAYS} (${WARRANTY_WORDS.en}) calendar days from its handover.`,
  );
  d.bi(
    "Pasal 4. Ketentuan lain dalam Perjanjian tetap berlaku dan tidak berubah. Addendum ini merupakan bagian tidak terpisahkan dari Perjanjian; jika terdapat perbedaan penafsiran, versi bahasa Indonesia yang berlaku.",
    "Article 4. All other terms of the Agreement remain in force and unchanged. This addendum forms an integral part of the Agreement; if there is any difference in interpretation, the Indonesian version prevails.",
  );
  d.signatures(client, parent.client_name);
  void site;
  return d.finish();
}
