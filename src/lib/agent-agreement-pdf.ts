import "server-only";
import { siteConfig } from "@/config/site";
import { AGENT_PROGRAM } from "@/config/agent-program";
import type { SiteData } from "@/config/site-data";
import type { Agent } from "@/lib/agents";
import { frame } from "@/lib/handover-pdf";
import { idr } from "@/lib/quote";

const ADDRESS = "Jl. Sei Tj No. 42, Sendang Sari, Kecamatan Kisaran Barat, Kabupaten Asahan, Sumatera Utara 21211";
const dateId = (iso: string) => new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Jakarta" });
const dateEn = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Jakarta" });

/**
 * Sales agency (partnership) agreement for a commission-only agent, Indonesian with English below each clause.
 * The agent's ID number, address and bank account are left blank to be filled by hand, so they are never stored.
 */
export async function buildAgentAgreementPdf(agent: Agent, site: SiteData): Promise<Uint8Array> {
  const no = `PKA/${new Date(agent.created_at).getUTCFullYear()}/${agent.code}`;
  const d = await frame(no);
  const when = agent.joined_at;
  const full = Number(agent.rate_full);
  const reduced = Number(agent.rate_reduced);
  const target = idr(Number(agent.monthly_target));
  const blank = "..............................................";

  d.y = 841.89 - 80;
  d.center("PERJANJIAN KEMITRAAN AGEN PENJUALAN", 14);
  d.y -= 18;
  d.center("SALES AGENCY PARTNERSHIP AGREEMENT", 11, d.bold);
  d.y -= 16;
  d.center(`No.: ${no}`, 10, d.font);
  d.y -= 28;

  d.bi(
    `Perjanjian ini dibuat pada tanggal ${dateId(when)} antara: (1) ${siteConfig.legalName}, beralamat di ${ADDRESS}, NPWP ${site.tax.npwp}, NIB ${site.tax.nib}, diwakili oleh Hendrik selaku Direktur ("PERUSAHAAN"); dan (2) ${agent.name}, NIK ${blank}, alamat ${blank}, kode agen ${agent.code} ("AGEN").`,
    `This Agreement is made on ${dateEn(when)} between: (1) ${siteConfig.legalName}, of ${ADDRESS}, tax ID ${site.tax.npwp}, business ID ${site.tax.nib}, represented by Hendrik as Director (the "COMPANY"); and (2) ${agent.name}, ID number ${blank}, address ${blank}, agent code ${agent.code} (the "AGENT").`,
  );

  const clauses: [string, string][] = [
    [
      "Pasal 1. Sifat hubungan. AGEN adalah mitra independen, bukan pegawai PERUSAHAAN. Tidak ada gaji tetap, jam kerja, atau hubungan kerja menurut undang-undang ketenagakerjaan. Kemitraan ini tidak eksklusif: AGEN boleh memiliki pekerjaan lain sepanjang tidak menjual produk pesaing langsung tanpa persetujuan tertulis.",
      "Article 1. Nature of the relationship. The AGENT is an independent partner, not an employee of the COMPANY. There is no fixed salary, working hours or employment relationship under labour law. The partnership is non-exclusive: the AGENT may have other work as long as they do not sell directly competing products without written consent.",
    ],
    [
      "Pasal 2. Ruang lingkup. AGEN mencari dan memperkenalkan calon klien untuk produk dan layanan PERUSAHAAN (website, aplikasi, sistem bisnis, otomasi, dan layanan lain pada daftar harga resmi di agsora.tech). Penawaran harga, kontrak, dan penagihan dibuat oleh PERUSAHAAN atas nama PERUSAHAAN.",
      "Article 2. Scope. The AGENT finds and introduces prospective clients for the COMPANY's products and services (websites, apps, business systems, automation and the other services on the official price list at agsora.tech). Quotations, contracts and invoices are issued by the COMPANY in its own name.",
    ],
    [
      `Pasal 3. Klien atas nama AGEN. Seorang klien tercatat sebagai klien AGEN apabila AGEN yang pertama mendaftarkannya kepada PERUSAHAAN (melalui formulir, WhatsApp resmi, atau dashboard) dan klien tersebut menandatangani penawaran dalam ${AGENT_PROGRAM.attributionDays} hari sejak didaftarkan. Bila ada lebih dari satu klaim, yang tercatat pertama yang berlaku.`,
      `Article 3. Clients credited to the AGENT. A client is credited to the AGENT when the AGENT was the first to register the client with the COMPANY (via the form, official WhatsApp or the dashboard) and the client signs a quotation within ${AGENT_PROGRAM.attributionDays} days of registration. Where there is more than one claim, the earliest record prevails.`,
    ],
    [
      `Pasal 4. Komisi. (a) Omzet AGEN adalah jumlah pembayaran yang benar-benar diterima PERUSAHAAN dari klien AGEN dalam satu bulan kalender, tidak termasuk PPN. (b) Bila omzet satu bulan mencapai target ${target} atau lebih, AGEN menerima komisi ${full}% dari omzet bulan tersebut. (c) Bila omzet di bawah target, AGEN menerima komisi ${reduced}% dari omzet bulan tersebut. (d) Komisi dihitung per bulan dan dibayarkan paling lambat tanggal ${AGENT_PROGRAM.payoutDay} bulan berikutnya ke rekening atas nama AGEN.`,
      `Article 4. Commission. (a) The AGENT's revenue is the total of payments actually received by the COMPANY from the AGENT's clients in one calendar month, excluding VAT. (b) If a month's revenue reaches the target of ${target} or more, the AGENT earns ${full}% of that month's revenue. (c) If revenue is below the target, the AGENT earns ${reduced}% of that month's revenue. (d) Commission is calculated monthly and paid by the ${AGENT_PROGRAM.payoutDay}th of the following month to an account in the AGENT's name.`,
    ],
    [
      "Pasal 5. Ketentuan komisi lainnya. Komisi hanya timbul dari pembayaran yang sudah diterima; proyek yang dibayar bertahap menghasilkan komisi setiap kali termin dibayar. Bila pembayaran dikembalikan kepada klien (refund) atau dibatalkan, komisi atas pembayaran tersebut dikurangkan dari komisi berikutnya. Tidak ada uang muka komisi, biaya operasional, atau penggantian biaya kecuali disepakati tertulis.",
      "Article 5. Other commission terms. Commission arises only from payments already received; projects paid in instalments earn commission each time an instalment is paid. If a payment is refunded or cancelled, the commission on it is deducted from the next commission. There are no commission advances, operating allowances or expense reimbursements unless agreed in writing.",
    ],
    [
      "Pasal 6. Pajak. Komisi merupakan penghasilan AGEN sebagai bukan pegawai. PERUSAHAAN memotong PPh Pasal 21 sesuai ketentuan yang berlaku dan memberikan bukti potongnya. AGEN wajib menyerahkan NIK/NPWP untuk keperluan tersebut.",
      "Article 6. Tax. Commission is the AGENT's income as a non-employee. The COMPANY withholds Article 21 income tax as required by law and provides the withholding slip. The AGENT must provide their ID/tax number for this purpose.",
    ],
    [
      "Pasal 7. Kewajiban AGEN. AGEN wajib: memakai harga dan materi resmi PERUSAHAAN; tidak menjanjikan harga, diskon, fitur, jadwal, atau garansi di luar yang tertulis dalam penawaran resmi; tidak menerima pembayaran dari klien atas nama PERUSAHAAN (semua pembayaran langsung ke rekening PERUSAHAAN); tidak memberi atau menerima suap; serta menjaga nama baik PERUSAHAAN.",
      "Article 7. The AGENT's obligations. The AGENT must: use the COMPANY's official prices and materials; not promise prices, discounts, features, timelines or warranties beyond those written in the official quotation; not accept payments from clients on the COMPANY's behalf (all payments go directly to the COMPANY's account); not give or accept bribes; and protect the COMPANY's reputation.",
    ],
    [
      "Pasal 8. Kerahasiaan dan data pribadi. AGEN menjaga kerahasiaan harga khusus, data klien, dan informasi internal PERUSAHAAN selama dan 2 (dua) tahun setelah Perjanjian berakhir, serta memproses data pribadi calon klien hanya untuk keperluan Perjanjian ini sesuai UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi.",
      "Article 8. Confidentiality and personal data. The AGENT keeps special prices, client data and the COMPANY's internal information confidential during and for 2 (two) years after this Agreement, and processes prospects' personal data only for this Agreement in line with Law No. 27 of 2022 on Personal Data Protection.",
    ],
    [
      "Pasal 9. Jangka waktu dan pengakhiran. Perjanjian berlaku 1 (satu) tahun dan diperpanjang otomatis untuk periode yang sama. Masing-masing pihak dapat mengakhirinya dengan pemberitahuan tertulis 14 (empat belas) hari, atau seketika bila AGEN melanggar Pasal 7. Komisi atas pembayaran yang diterima sebelum pengakhiran tetap dibayarkan, termasuk termin yang dibayar dalam 90 hari setelah pengakhiran dari klien yang tercatat atas nama AGEN, kecuali pengakhiran karena pelanggaran Pasal 7.",
      "Article 9. Term and termination. This Agreement runs for 1 (one) year and renews automatically for the same period. Either party may end it with 14 (fourteen) days' written notice, or immediately if the AGENT breaches Article 7. Commission on payments received before termination is still paid, including instalments paid within 90 days after termination by clients credited to the AGENT, except where termination is for breach of Article 7.",
    ],
    [
      "Pasal 10. Hukum dan sengketa. Perjanjian ini tunduk pada hukum Republik Indonesia. Sengketa diselesaikan secara musyawarah; bila tidak berhasil dalam 30 (tiga puluh) hari, melalui Pengadilan Negeri Kisaran. Perjanjian dibuat dalam bahasa Indonesia dan Inggris; bila berbeda, versi bahasa Indonesia yang berlaku.",
      "Article 10. Law and disputes. This Agreement is governed by Indonesian law. Disputes are settled amicably; failing that within 30 (thirty) days, through the Kisaran District Court. It is made in Indonesian and English; if they differ, the Indonesian version prevails.",
    ],
  ];
  for (const [id, en] of clauses) d.bi(id, en);

  d.bi(
    `Rekening pembayaran komisi atas nama AGEN: Bank ${blank} No. ${blank}.`,
    `Commission bank account in the AGENT's name: Bank ${blank} No. ${blank}.`,
  );
  d.signatures(agent.name, agent.name, "Agen / Agent");
  return d.finish();
}
