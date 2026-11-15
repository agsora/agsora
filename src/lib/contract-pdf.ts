import "server-only";
import { PDFDocument, StandardFonts, rgb, type PDFFont } from "pdf-lib";
import { siteConfig } from "@/config/site";
import type { SiteData } from "@/config/site-data";
import { detect, type B } from "@/lib/service-categories";
import { idr, paymentSchedule, planOf, quoteNumber, splitTotals, type Quote } from "@/lib/quote";

/** Indonesian and English text side by side, like a bilingual commercial agreement. Indonesian prevails. */
type Article = { title: B; clauses: B[] };

const COMPANY = {
  director: "Hendrik",
  title: { id: "Direktur", en: "Director" },
  address: "Jl. Sei Tj No. 42, Sendang Sari, Kecamatan Kisaran Barat, Kabupaten Asahan, Sumatera Utara 21211",
  court: { id: "Pengadilan Negeri Kisaran", en: "the Kisaran District Court" },
};

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
const dateEn = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Jakarta" });

const W = 595.28;
const H = 841.89;
const M = 48;
const GAP = 18;
const COL = (W - 2 * M - GAP) / 2;
const XR = M + COL + GAP;
const NAVY = rgb(0.06, 0.09, 0.18);
const INK = rgb(0.16, 0.2, 0.29);
const MUTED = rgb(0.45, 0.5, 0.58);
const ACCENT = rgb(0.41, 0.42, 1);
const LINE = rgb(0.88, 0.89, 0.93);
const WHITE = rgb(1, 1, 1);


function articles(q: Quote, ppn: number, pph23: boolean): Article[] {
  const quote = quoteNumber(q);
  const plan = planOf(q);
  const split = splitTotals(q);
  const schedule = paymentSchedule(plan, split.oneTime.total);
  const cats = detect(q);
  const hasOneTime = split.oneTimeItems.length > 0;
  const hasRecurring = split.recurringItems.length > 0;
  const letters = "abcde";

  const paymentClauses: B[] = [
    {
      id: `Total nilai Penawaran adalah ${idr(split.all.total)}, dengan rincian pada Lampiran II.`,
      en: `The total value of the Quotation is ${idr(split.all.total)}, as detailed in Appendix II.`,
    },
  ];
  if (hasOneTime) {
    paymentClauses.push({
      id: `Biaya pengerjaan proyek sebesar ${idr(split.oneTime.total)} dibayar dalam ${schedule.length} (${schedule.length === 2 ? "dua" : "tiga"}) termin: ${schedule
        .map((s, i) => `(${letters[i]}) ${s.pct}% = ${idr(s.amount)}, ${s.id.charAt(0).toLowerCase()}${s.id.slice(1)}`)
        .join("; ")}.`,
      en: `The project fee of ${idr(split.oneTime.total)} is paid in ${schedule.length} (${schedule.length === 2 ? "two" : "three"}) instalments: ${schedule
        .map((s, i) => `(${letters[i]}) ${s.pct}% = ${idr(s.amount)}, ${s.en.charAt(0).toLowerCase()}${s.en.slice(1)}`)
        .join("; ")}.`,
    });
  }
  if (hasRecurring) {
    paymentClauses.push({
      id: `Layanan berlangganan (pemeliharaan, hosting/domain, SEO) senilai ${idr(split.recurring.total)} ditagih di muka per periode berlangganan dan dibayar paling lambat 7 (tujuh) hari kalender sejak faktur, terpisah dari termin proyek.`,
      en: `Subscription services (maintenance, hosting/domain, SEO) worth ${idr(split.recurring.total)} are billed in advance per subscription period and paid within 7 (seven) calendar days of the invoice, separately from the project instalments.`,
    });
  }
  paymentClauses.push(
    {
      id: "Pembayaran ditransfer ke rekening atas nama PT Agsora Teknologi Indonesia yang tercantum pada faktur. PIHAK PERTAMA tidak bertanggung jawab atas pembayaran ke rekening lain.",
      en: "Payment is transferred to the account in the name of PT Agsora Teknologi Indonesia stated on the invoice. The FIRST PARTY is not responsible for payments to any other account.",
    },
    {
      id: "Keterlambatan pembayaran dikenakan denda 0,1% (nol koma satu persen) per hari dari jumlah terlambat, paling banyak 5% (lima persen) dari jumlah tersebut. PIHAK PERTAMA berhak menunda pekerjaan atau menahan akses produksi sampai pembayaran dilunasi.",
      en: "Late payment incurs a penalty of 0.1% (zero point one percent) per day of the overdue amount, up to a maximum of 5% (five percent) of that amount. The FIRST PARTY may suspend work or withhold production access until payment is made in full.",
    },
    {
      id: "Pembayaran yang telah diterima tidak dapat dikembalikan untuk pekerjaan yang sudah dikerjakan, kecuali PIHAK PERTAMA tidak dapat melanjutkan pekerjaan karena kesalahannya.",
      en: "Payments received are non-refundable for work already performed, unless the FIRST PARTY cannot continue the work due to its own fault.",
    },
    {
      id: "Biaya layanan pihak ketiga (domain, hosting, lisensi, API, pesan WhatsApp, dan sejenisnya) tidak termasuk dalam harga kecuali tercantum tegas pada Lampiran II.",
      en: "Third-party service costs (domains, hosting, licences, APIs, WhatsApp messages and the like) are not included in the price unless expressly stated in Appendix II.",
    },
  );

  const taxClauses: B[] = [
    ppn > 0
      ? {
          id: `Harga pada Lampiran II sudah memperhitungkan PPN sebesar ${ppn}% (efektif) yang dipungut PIHAK PERTAMA sebagai Pengusaha Kena Pajak; faktur pajak diterbitkan sesuai ketentuan.`,
          en: `The prices in Appendix II include VAT (PPN) at ${ppn}% (effective) collected by the FIRST PARTY as a taxable entrepreneur; a tax invoice is issued as required.`,
        }
      : {
          id: "Pada tanggal Perjanjian ini PIHAK PERTAMA belum dikukuhkan sebagai Pengusaha Kena Pajak sehingga tidak memungut PPN. Apabila PIHAK PERTAMA dikukuhkan selama masa Perjanjian, PPN hanya dikenakan atas tagihan yang terbit setelah pengukuhan dan dituangkan dalam addendum.",
          en: "As of the date of this Agreement the FIRST PARTY has not been confirmed as a taxable entrepreneur and therefore does not collect VAT (PPN). If the FIRST PARTY is confirmed during the term, VAT applies only to invoices issued after confirmation and is documented in an addendum.",
        },
  ];
  if (pph23)
    taxClauses.push({
      id: "Apabila PIHAK KEDUA adalah badan yang wajib memotong pajak, PPh Pasal 23 atas jasa dipotong dari nilai sebelum PPN dan PIHAK KEDUA menyerahkan bukti potong kepada PIHAK PERTAMA paling lambat 30 (tiga puluh) hari sejak pemotongan. Pemotongan tidak mengurangi kewajiban pembayaran sisa harga.",
      en: "If the SECOND PARTY is an entity required to withhold tax, Article 23 income tax on the services is withheld from the amount before VAT and the SECOND PARTY delivers the withholding slip to the FIRST PARTY within 30 (thirty) days of withholding. Withholding does not reduce the obligation to pay the remaining price.",
    });
  taxClauses.push({
    id: "Pajak lainnya ditanggung masing-masing Pihak sesuai peraturan perpajakan di Indonesia. Bea meterai atas Perjanjian ini dibagi sama besar kecuali disepakati lain.",
    en: "Other taxes are borne by each Party in accordance with Indonesian tax regulations. Stamp duty on this Agreement is shared equally unless agreed otherwise.",
  });

  const list: Article[] = [
    {
      title: { id: "Definisi", en: "Definitions" },
      clauses: [
        { id: `"Penawaran" adalah Proposal Penawaran Nomor ${quote} yang disetujui PIHAK KEDUA dan menjadi bagian tidak terpisahkan dari Perjanjian ini.`, en: `"Quotation" means Proposal No. ${quote} approved by the SECOND PARTY, which forms an integral part of this Agreement.` },
        { id: '"Hasil Pekerjaan" adalah perangkat lunak, website, aplikasi, desain, integrasi, dan/atau layanan digital lain sebagaimana dirinci pada Lampiran II.', en: '"Deliverables" means the software, website, application, design, integration and/or other digital services as detailed in Appendix II.' },
        { id: '"Hari Kerja" adalah hari selain Sabtu, Minggu, dan hari libur nasional. "Serah Terima" adalah penyerahan Hasil Pekerjaan yang lulus uji penerimaan (UAT) oleh PIHAK KEDUA.', en: '"Business Day" means any day other than Saturday, Sunday and national holidays. "Handover" means delivery of Deliverables that have passed user acceptance testing (UAT) by the SECOND PARTY.' },
        { id: '"Layanan Pihak Ketiga" adalah domain, hosting, server, lisensi, API, payment gateway, dan layanan lain milik pihak ketiga yang dipakai Hasil Pekerjaan.', en: '"Third-Party Services" means domains, hosting, servers, licences, APIs, payment gateways and other services owned by third parties that the Deliverables use.' },
        { id: '"Data Klien" adalah data, konten, merek, dan materi yang diberikan PIHAK KEDUA, termasuk Data Pribadi pelanggan PIHAK KEDUA.', en: '"Client Data" means the data, content, brands and materials supplied by the SECOND PARTY, including its customers\' Personal Data.' },
      ],
    },
    {
      title: { id: "Ruang Lingkup Pekerjaan", en: "Scope of Work" },
      clauses: [
        { id: "PIHAK PERTAMA mengerjakan Hasil Pekerjaan sebagaimana dirinci pada Lampiran II sesuai standar profesional yang wajar di bidang pengembangan perangkat lunak.", en: "The FIRST PARTY performs the Deliverables as detailed in Appendix II in accordance with reasonable professional standards in software development." },
        { id: "Pekerjaan di luar Lampiran II, termasuk fitur tambahan, perubahan desain setelah disetujui, integrasi baru, dan migrasi data tambahan, adalah pekerjaan tambahan yang harganya disepakati tertulis sebelum dikerjakan.", en: "Work outside Appendix II, including additional features, design changes after approval, new integrations and additional data migration, is additional work whose price is agreed in writing before it begins." },
        { id: "Perubahan lingkup diajukan tertulis (termasuk melalui email atau WhatsApp resmi) dan baru berlaku setelah disetujui kedua Pihak.", en: "Scope changes are requested in writing (including via official email or WhatsApp) and take effect only once approved by both Parties." },
        { id: "PIHAK PERTAMA boleh memakai tenaga ahli atau subkontraktor dan tetap bertanggung jawab atas hasil kerja serta kerahasiaan sesuai Perjanjian ini.", en: "The FIRST PARTY may use specialists or subcontractors and remains responsible for the work and for confidentiality under this Agreement." },
      ],
    },
  ];

  if (cats.length) {
    list.push({
      title: { id: "Spesifikasi Layanan Sesuai Penawaran", en: "Service Specifications per Quotation" },
      clauses: cats.map((c) => ({ id: `${c.label.id}. ${c.text.id}`, en: `${c.label.en}. ${c.text.en}` })),
    });
  }

  list.push(
    {
      title: { id: "Jadwal dan Tahapan Pengerjaan", en: "Schedule and Stages" },
      clauses: [
        { id: "Pekerjaan dimulai setelah Perjanjian ditandatangani, pembayaran termin pertama diterima, dan PIHAK KEDUA menyerahkan data serta akses yang dibutuhkan (kick-off).", en: "Work starts once this Agreement is signed, the first instalment is received and the SECOND PARTY provides the required data and access (kick-off)." },
        { id: "Estimasi jadwal disepakati pada Lampiran II. Jadwal bergeser sebanding dengan keterlambatan PIHAK KEDUA dalam memberi data, akses, umpan balik, atau persetujuan.", en: "The estimated schedule is set out in Appendix II. The schedule moves in proportion to any delay by the SECOND PARTY in providing data, access, feedback or approvals." },
        { id: "Tahapan kerja mengikuti proses AG·SORA: pemetaan kebutuhan, perancangan, pengembangan, uji penerimaan (UAT), peluncuran, dan pendampingan.", en: "Work follows the AG·SORA process: discovery, design, development, user acceptance testing (UAT), launch and support." },
        { id: "PIHAK KEDUA memberi umpan balik atas hasil tiap tahap dalam 5 (lima) Hari Kerja. Bila tidak ada tanggapan, tahap tersebut dianggap disetujui.", en: "The SECOND PARTY gives feedback on each stage within 5 (five) Business Days. If there is no response, the stage is deemed approved." },
        { id: "Revisi dalam lingkup disediakan sampai 2 (dua) putaran per tahap, kecuali Lampiran II menyatakan lain.", en: "In-scope revisions are provided up to 2 (two) rounds per stage unless Appendix II states otherwise." },
      ],
    },
    { title: { id: "Harga dan Pembayaran", en: "Price and Payment" }, clauses: paymentClauses },
    { title: { id: "Perpajakan", en: "Taxation" }, clauses: taxClauses },
    {
      title: { id: "Serah Terima dan Uji Penerimaan", en: "Handover and Acceptance Testing" },
      clauses: [
        { id: "Setelah pekerjaan selesai, PIHAK PERTAMA menyampaikan Hasil Pekerjaan untuk diuji PIHAK KEDUA dalam 7 (tujuh) Hari Kerja (UAT).", en: "When the work is complete, the FIRST PARTY submits the Deliverables for testing by the SECOND PARTY within 7 (seven) Business Days (UAT)." },
        { id: "Kekurangan yang sesuai Lampiran II diperbaiki PIHAK PERTAMA tanpa biaya tambahan. Bila tidak ada temuan tertulis dalam jangka UAT, Hasil Pekerjaan dianggap diterima.", en: "Defects relating to Appendix II are fixed by the FIRST PARTY at no extra cost. If no written findings are raised within the UAT period, the Deliverables are deemed accepted." },
        { id: "Pemakaian Hasil Pekerjaan untuk operasional produksi dianggap sebagai Serah Terima.", en: "Use of the Deliverables in production operations is deemed Handover." },
      ],
    },
    {
      title: { id: "Garansi dan Pemeliharaan", en: "Warranty and Maintenance" },
      clauses: [
        { id: "PIHAK PERTAMA memberi garansi perbaikan kesalahan (bug) selama 30 (tiga puluh) hari kalender sejak Serah Terima, kecuali Lampiran II menyatakan masa lain.", en: "The FIRST PARTY warrants the fixing of errors (bugs) for 30 (thirty) calendar days from Handover unless Appendix II states another period." },
        { id: "Garansi tidak mencakup kerusakan akibat perubahan oleh pihak lain, penyalahgunaan, serangan siber di luar kendali wajar, gangguan Layanan Pihak Ketiga, atau kebutuhan baru.", en: "The warranty excludes damage caused by changes made by others, misuse, cyber attacks beyond reasonable control, Third-Party Service disruption or new requirements." },
        { id: "Setelah masa garansi, pemeliharaan dan dukungan dapat dilanjutkan melalui paket berlangganan yang disepakati terpisah.", en: "After the warranty period, maintenance and support can continue through a subscription package agreed separately." },
      ],
    },
    {
      title: { id: "Kewajiban PIHAK KEDUA", en: "Obligations of the SECOND PARTY" },
      clauses: [
        { id: "Menyediakan data, konten, materi merek, akses, dan keputusan tepat waktu serta menunjuk satu penanggung jawab (PIC) yang berwenang memberi persetujuan.", en: "Provide data, content, brand materials, access and decisions on time and appoint one person in charge (PIC) authorised to give approvals." },
        { id: "Menjamin Data Klien dan materi yang diserahkan adalah milik sah atau dipakai dengan izin serta tidak melanggar hak pihak ketiga; PIHAK KEDUA membebaskan PIHAK PERTAMA dari tuntutan pihak ketiga atas hal tersebut.", en: "Warrant that Client Data and supplied materials are lawfully owned or used with permission and do not infringe third-party rights; the SECOND PARTY indemnifies the FIRST PARTY against third-party claims in this regard." },
        { id: "Bertanggung jawab atas legalitas usaha, produk, dan transaksi yang dijalankan melalui Hasil Pekerjaan, termasuk perizinan dan kewajiban pajaknya sendiri.", en: "Be responsible for the legality of its business, products and transactions run through the Deliverables, including its own permits and tax obligations." },
        { id: "Tidak memakai Hasil Pekerjaan untuk kegiatan yang dilarang hukum Indonesia, termasuk perjudian, pornografi, penipuan, pinjaman tidak berizin, pencucian uang, dan pendanaan terorisme.", en: "Not use the Deliverables for activities prohibited by Indonesian law, including gambling, pornography, fraud, unlicensed lending, money laundering and terrorism financing." },
        { id: "Menjaga kerahasiaan kredensial akses dan tidak membagikannya kepada pihak yang tidak berwenang.", en: "Keep access credentials confidential and not share them with unauthorised parties." },
      ],
    },
    {
      title: { id: "Layanan Pihak Ketiga dan Pembayaran Digital", en: "Third-Party Services and Digital Payments" },
      clauses: [
        { id: "Apabila pekerjaan mencakup payment gateway, QRIS, atau layanan pihak ketiga lain, PIHAK KEDUA sendiri yang menjadi pihak dalam perjanjian dengan penyedia layanan tersebut (termasuk onboarding, dokumen legalitas, tarif, dan settlement). PIHAK PERTAMA hanya mengerjakan integrasi teknis.", en: "If the work includes a payment gateway, QRIS or another third-party service, the SECOND PARTY itself is the contracting party with that provider (including onboarding, legal documents, fees and settlement). The FIRST PARTY performs the technical integration only." },
        { id: "PIHAK PERTAMA tidak menerima, menahan, atau mengelola dana transaksi PIHAK KEDUA dan tidak bertanggung jawab atas biaya, penahanan dana, chargeback, denda, atau penghentian layanan yang ditetapkan penyedia.", en: "The FIRST PARTY does not receive, hold or manage the SECOND PARTY's transaction funds and is not responsible for fees, fund holds, chargebacks, penalties or service suspension imposed by the provider." },
        { id: "Kunci API dan kredensial milik PIHAK KEDUA disimpan di lingkungan yang dikendalikan PIHAK KEDUA atau disimpan aman oleh PIHAK PERTAMA hanya untuk keperluan integrasi.", en: "API keys and credentials owned by the SECOND PARTY are kept in an environment controlled by the SECOND PARTY or stored securely by the FIRST PARTY solely for integration purposes." },
        { id: "PIHAK PERTAMA tidak menjamin ketersediaan terus-menerus Layanan Pihak Ketiga dan tidak bertanggung jawab atas gangguan atau perubahan kebijakan, API, atau tarif penyedia.", en: "The FIRST PARTY does not guarantee uninterrupted availability of Third-Party Services and is not responsible for provider outages or changes to policies, APIs or fees." },
      ],
    },
    {
      title: { id: "Hak Kekayaan Intelektual", en: "Intellectual Property" },
      clauses: [
        { id: "Setelah PIHAK KEDUA melunasi seluruh pembayaran proyek, hak penggunaan atas Hasil Pekerjaan khusus yang dibuat untuk PIHAK KEDUA diberikan kepadanya secara permanen untuk keperluan usahanya.", en: "Once the SECOND PARTY has paid the project fee in full, the right to use the bespoke Deliverables created for it is granted to it permanently for its business." },
        { id: "Pustaka, kerangka kerja, komponen, alat, metode, dan pengetahuan umum milik PIHAK PERTAMA atau pihak ketiga (termasuk perangkat lunak sumber terbuka) tetap milik pemiliknya; PIHAK KEDUA mendapat lisensi tidak eksklusif untuk memakainya sebagai bagian Hasil Pekerjaan.", en: "Libraries, frameworks, components, tools, methods and general know-how owned by the FIRST PARTY or third parties (including open-source software) remain with their owners; the SECOND PARTY receives a non-exclusive licence to use them as part of the Deliverables." },
        { id: "Data Klien, merek, dan logo tetap milik PIHAK KEDUA.", en: "Client Data, brands and logos remain the property of the SECOND PARTY." },
        { id: "PIHAK PERTAMA boleh mencantumkan nama, logo PIHAK KEDUA, dan tampilan umum Hasil Pekerjaan sebagai portofolio, kecuali PIHAK KEDUA menyatakan keberatan tertulis sebelum peluncuran.", en: "The FIRST PARTY may show the SECOND PARTY's name, logo and the general appearance of the Deliverables in its portfolio unless the SECOND PARTY objects in writing before launch." },
        { id: "Sebelum pelunasan, seluruh hak atas Hasil Pekerjaan tetap pada PIHAK PERTAMA dan PIHAK KEDUA tidak boleh memakainya untuk produksi.", en: "Before full payment, all rights in the Deliverables remain with the FIRST PARTY and the SECOND PARTY may not use them in production." },
      ],
    },
    {
      title: { id: "Kerahasiaan dan Pelindungan Data Pribadi", en: "Confidentiality and Personal Data Protection" },
      clauses: [
        { id: "Kedua Pihak menjaga kerahasiaan informasi nonpublik yang diterima dari Pihak lain, tidak memakainya selain untuk Perjanjian ini, dan tidak mengungkapkannya kecuali kepada pegawai atau penasihat yang perlu tahu dan terikat kerahasiaan, atau diwajibkan peraturan atau putusan berwenang.", en: "Each Party keeps non-public information received from the other confidential, uses it only for this Agreement and does not disclose it except to employees or advisers who need to know and are bound by confidentiality, or as required by law or an authority's order." },
        { id: "Kewajiban kerahasiaan berlaku selama Perjanjian dan 2 (dua) tahun sesudahnya. NDA terpisah (jika ada) berlaku tambahan atas pasal ini.", en: "The confidentiality obligation applies during the Agreement and for 2 (two) years afterwards. A separate NDA (if any) applies in addition to this article." },
        { id: "Dalam hal Hasil Pekerjaan memproses Data Pribadi, PIHAK KEDUA bertindak sebagai pengendali data dan PIHAK PERTAMA sebagai prosesor menurut UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi; PIHAK PERTAMA hanya memproses data atas instruksi PIHAK KEDUA dan menerapkan pengamanan yang wajar.", en: "Where the Deliverables process Personal Data, the SECOND PARTY acts as data controller and the FIRST PARTY as processor under Law No. 27 of 2022 on Personal Data Protection; the FIRST PARTY processes data only on the SECOND PARTY's instructions and applies reasonable safeguards." },
        { id: "Kedua Pihak saling memberitahu tanpa penundaan yang tidak wajar bila mengetahui insiden kebocoran data yang berkaitan dengan Hasil Pekerjaan.", en: "Each Party notifies the other without undue delay on becoming aware of a data breach relating to the Deliverables." },
        { id: "PIHAK KEDUA bertanggung jawab memperoleh persetujuan pelanggannya dan menyediakan kebijakan privasi yang sesuai hukum.", en: "The SECOND PARTY is responsible for obtaining its customers' consent and providing a privacy policy compliant with the law." },
      ],
    },
    {
      title: { id: "Wanprestasi, Ganti Rugi, dan Batas Tanggung Jawab", en: "Default, Indemnity and Limitation of Liability" },
      clauses: [
        { id: "Suatu Pihak wanprestasi bila melanggar Perjanjian dan tidak memperbaikinya dalam 14 (empat belas) hari kalender sejak pemberitahuan tertulis dari Pihak lain.", en: "A Party is in default if it breaches this Agreement and does not remedy the breach within 14 (fourteen) calendar days of written notice from the other Party." },
        { id: "Pihak yang wanprestasi bertanggung jawab atas kerugian langsung yang nyata diderita Pihak lain. Tanggung jawab PIHAK PERTAMA seluruhnya dibatasi paling banyak sebesar pembayaran yang telah diterimanya berdasarkan Perjanjian ini.", en: "The defaulting Party is liable for the actual direct losses suffered by the other Party. The FIRST PARTY's total liability is limited to the maximum of the payments it has received under this Agreement." },
        { id: "PIHAK PERTAMA tidak bertanggung jawab atas kerugian tidak langsung, kehilangan keuntungan, pendapatan, atau data akibat hal di luar kendalinya, atau kerugian konsekuensial, kecuali akibat kesengajaan atau kelalaian berat.", en: "The FIRST PARTY is not liable for indirect loss, loss of profit, revenue or data caused by matters beyond its control, or consequential loss, except in cases of intent or gross negligence." },
        { id: "Pembatasan di atas tidak berlaku untuk kewajiban pembayaran, pelanggaran kerahasiaan, atau pelanggaran hak kekayaan intelektual yang disengaja.", en: "The above limitation does not apply to payment obligations, breach of confidentiality or intentional infringement of intellectual property." },
      ],
    },
    {
      title: { id: "Keadaan Memaksa (Force Majeure)", en: "Force Majeure" },
      clauses: [
        { id: "Keadaan memaksa adalah peristiwa di luar kendali wajar suatu Pihak, termasuk bencana alam, kebakaran, perang, kerusuhan, wabah, pemogokan, gangguan listrik, jaringan, atau telekomunikasi yang meluas, gangguan penyedia cloud atau hosting, serta tindakan atau perubahan kebijakan pemerintah.", en: "Force majeure is an event beyond a Party's reasonable control, including natural disasters, fire, war, riots, epidemics, strikes, widespread electricity, network or telecommunications failure, cloud or hosting provider outages, and government action or policy changes." },
        { id: "Pihak yang mengalaminya memberitahu Pihak lain secara tertulis dalam 7 (tujuh) hari kalender beserta bukti yang wajar, dan tidak dianggap wanprestasi selama keadaan itu berlangsung.", en: "The affected Party notifies the other in writing within 7 (seven) calendar days with reasonable evidence and is not in default while the event continues." },
        { id: "Jika berlangsung lebih dari 60 (enam puluh) hari kalender, salah satu Pihak dapat mengakhiri Perjanjian; pembayaran untuk pekerjaan yang telah dilaksanakan tetap harus dibayar.", en: "If it lasts more than 60 (sixty) calendar days, either Party may terminate this Agreement; payment for work already performed remains due." },
      ],
    },
    {
      title: { id: "Jangka Waktu dan Pengakhiran", en: "Term and Termination" },
      clauses: [
        { id: "Perjanjian berlaku sejak ditandatangani sampai Serah Terima, pelunasan, dan berakhirnya garansi; layanan berlangganan berlaku selama periode yang ditagih.", en: "This Agreement runs from signing until Handover, full payment and the end of the warranty; subscription services run for the billed periods." },
        { id: "Salah satu Pihak dapat mengakhiri Perjanjian dengan pemberitahuan tertulis 14 (empat belas) hari kalender bila Pihak lain wanprestasi dan tidak memperbaikinya dalam jangka itu.", en: "Either Party may terminate this Agreement by 14 (fourteen) calendar days' written notice if the other Party is in default and does not remedy it within that period." },
        { id: "Jika PIHAK KEDUA mengakhiri Perjanjian bukan karena wanprestasi PIHAK PERTAMA, PIHAK KEDUA membayar pekerjaan yang telah dikerjakan sampai tanggal pengakhiran, tidak kurang dari termin yang telah dibayar.", en: "If the SECOND PARTY terminates other than for the FIRST PARTY's default, the SECOND PARTY pays for work performed up to the termination date, not less than the instalments already paid." },
        { id: "Pasal Hak Kekayaan Intelektual, Kerahasiaan, Batas Tanggung Jawab, Perpajakan, dan Penyelesaian Sengketa tetap berlaku setelah Perjanjian berakhir.", en: "The articles on Intellectual Property, Confidentiality, Limitation of Liability, Taxation and Dispute Resolution survive termination." },
      ],
    },
    {
      title: { id: "Hukum yang Berlaku dan Penyelesaian Sengketa", en: "Governing Law and Dispute Resolution" },
      clauses: [
        { id: "Perjanjian ini tunduk pada hukum Republik Indonesia.", en: "This Agreement is governed by the laws of the Republic of Indonesia." },
        { id: "Sengketa diselesaikan lebih dahulu secara musyawarah untuk mufakat dalam 30 (tiga puluh) hari kalender sejak pemberitahuan tertulis.", en: "Disputes are first resolved amicably through deliberation within 30 (thirty) calendar days of written notice." },
        { id: `Bila musyawarah tidak berhasil, sengketa diselesaikan melalui ${COMPANY.court.id}, tanpa mengurangi hak Pihak mana pun mengajukan upaya hukum sementara.`, en: `If deliberation fails, the dispute is settled through ${COMPANY.court.en}, without prejudice to either Party's right to seek interim relief.` },
      ],
    },
    {
      title: { id: "Ketentuan Umum", en: "General Provisions" },
      clauses: [
        { id: "Pemberitahuan dilakukan tertulis dan dianggap diterima bila dikirim ke alamat atau email pada Lampiran I. Perubahan alamat atau PIC diberitahukan tertulis.", en: "Notices are given in writing and deemed received when sent to the address or email in Appendix I. Changes of address or PIC are notified in writing." },
        { id: "Perjanjian ini, Penawaran, dan lampirannya adalah seluruh kesepakatan Para Pihak. Bila bertentangan, urutan berlaku: Perjanjian, Lampiran, Penawaran.", en: "This Agreement, the Quotation and the appendices are the Parties' entire agreement. In case of conflict the order of precedence is: Agreement, Appendices, Quotation." },
        { id: "Perubahan Perjanjian hanya sah dalam bentuk addendum tertulis yang ditandatangani kedua Pihak. Ketentuan yang tidak sah tidak mempengaruhi ketentuan lain.", en: "Amendments are valid only as a written addendum signed by both Parties. An invalid provision does not affect the other provisions." },
        { id: "Tidak ada Pihak yang boleh mengalihkan hak atau kewajibannya tanpa persetujuan tertulis Pihak lain.", en: "Neither Party may assign its rights or obligations without the other Party's written consent." },
        { id: "Perjanjian ini dibuat dalam bahasa Indonesia dan Inggris. Jika terdapat perbedaan penafsiran, versi bahasa Indonesia yang berlaku.", en: "This Agreement is made in Indonesian and English. If there is any difference in interpretation, the Indonesian version prevails." },
        { id: "Perjanjian dapat ditandatangani secara elektronik atau dalam beberapa rangkap; masing-masing sah sebagai asli dan mengikat sama seperti tanda tangan basah.", en: "This Agreement may be signed electronically or in counterparts; each is an original and binds as a wet-ink signature would." },
      ],
    },
  );
  return list;
}

/**
 * Bilingual (Indonesian | English) A4 service agreement drawn from an approved quote. The clauses adapt to the products on the quote
 * and the chosen payment schedule. Have legal counsel review the wording before first use.
 */
export async function buildContractPdf(q: Quote, site: SiteData): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const ital = await pdf.embedFont(StandardFonts.HelveticaOblique);
  const { tax, contact } = site;
  const number = quoteNumber(q);
  const contractNo = number.replace("AGS/", "PKS/");
  const signIso = q.approved_at ?? q.created_at;
  const ppn = Number(q.tax_pct);
  const client = q.client_company || q.client_name;
  const split = splitTotals(q);
  const plan = planOf(q);

  let page = pdf.addPage([W, H]);
  let y = H - 52;
  let bodyPages = 0;
  const SZ = 8.6;
  const LEAD = 11.6;

  const text = (s: string, x: number, size = SZ, f = font, color = INK) => page.drawText(safe(s), { x, y, size, font: f, color });
  const center = (s: string, size: number, f = bold, color = NAVY) =>
    page.drawText(safe(s), { x: (W - f.widthOfTextAtSize(safe(s), size)) / 2, y, size, font: f, color });
  const right = (s: string, xr: number, size = SZ, f = font, color = INK) =>
    page.drawText(safe(s), { x: xr - f.widthOfTextAtSize(safe(s), size), y, size, font: f, color });
  const newPage = () => {
    page = pdf.addPage([W, H]);
    y = H - 52;
  };
  const ensure = (need: number) => {
    if (y - need < 66) newPage();
  };
  /** A row with Indonesian on the left and English on the right. */
  const pair = (b: B, label = "", f1 = font, f2 = ital, color2 = MUTED) => {
    const pad = label ? 14 : 0;
    const l = wrap(b.id, f1, SZ, COL - pad);
    const r = wrap(b.en, f2, SZ, COL - pad);
    const rows = Math.max(l.length, r.length);
    ensure(rows * LEAD + 6);
    if (label) {
      text(label, M, SZ, font, MUTED);
      text(label, XR, SZ, font, MUTED);
    }
    for (let i = 0; i < rows; i++) {
      if (l[i]) text(l[i], M + pad, SZ, f1, INK);
      if (r[i]) text(r[i], XR + pad, SZ, f2, color2);
      y -= LEAD;
    }
    y -= 4;
  };
  const heading = (n: number, a: B) => {
    ensure(110);
    y -= 6;
    center(`PASAL ${n} / ARTICLE ${n}`, 9.5, bold, ACCENT);
    y -= 13;
    center(`${a.id.toUpperCase()} / ${a.en.toUpperCase()}`, 9.5, bold, NAVY);
    y -= 16;
  };
  const kv = (k: B, v: string) => {
    const lines = wrap(v || "-", font, 10, W - 2 * M - 215);
    ensure(lines.length * 14 + 4);
    text(`${k.id} / ${k.en}`, M, 9, font, MUTED);
    text(":", M + 205, 9.5, font, MUTED);
    for (const l of lines) {
      text(l, M + 215, 10, font, INK);
      y -= 14;
    }
  };

  // ── Title block
  page.drawRectangle({ x: 0, y: H - 6, width: W, height: 6, color: ACCENT });
  center("PERJANJIAN PENGEMBANGAN PERANGKAT LUNAK DAN LAYANAN DIGITAL", 12.5);
  y -= 16;
  center("SOFTWARE DEVELOPMENT AND DIGITAL SERVICES AGREEMENT", 11, bold, MUTED);
  y -= 18;
  center(`No.: ${contractNo}`, 10, font, MUTED);
  y -= 22;
  // column captions
  text("BAHASA INDONESIA", M, 8, bold, ACCENT);
  text("ENGLISH", XR, 8, bold, ACCENT);
  y -= 14;

  pair({ id: `Perjanjian ini dibuat pada tanggal ${dateId(signIso)}, oleh dan antara:`, en: `This Agreement is made on ${dateEn(signIso)}, by and between:` });
  pair(
    {
      id: `${siteConfig.legalName}, perseroan terbatas berdasarkan hukum Republik Indonesia (Akta No. 147 tanggal 4 September 2026, notaris Nyak Raja, S.H., M.Kn.; SK Menteri Hukum No. AHU-0073253.AH.01.01.Tahun 2026), beralamat di ${COMPANY.address}, diwakili oleh ${COMPANY.director} selaku ${COMPANY.title.id}, selanjutnya disebut "PIHAK PERTAMA"; dan`,
      en: `${siteConfig.legalName}, a limited liability company under the laws of the Republic of Indonesia (Deed No. 147 dated 4 September 2026, notary Nyak Raja, S.H., M.Kn.; Minister of Law Decree No. AHU-0073253.AH.01.01.Tahun 2026), whose address is ${COMPANY.address}, represented by ${COMPANY.director} as ${COMPANY.title.en}, hereinafter the "FIRST PARTY"; and`,
    },
    "1.",
  );
  pair(
    {
      id: `${client}${q.client_company ? `, diwakili oleh ${q.client_name}` : ""}, selanjutnya disebut "PIHAK KEDUA".`,
      en: `${client}${q.client_company ? `, represented by ${q.client_name}` : ""}, hereinafter the "SECOND PARTY".`,
    },
    "2.",
  );
  pair({ id: 'PIHAK PERTAMA dan PIHAK KEDUA bersama-sama disebut "Para Pihak".', en: 'The FIRST PARTY and the SECOND PARTY are collectively the "Parties".' });
  pair({
    id: "Bahwa PIHAK PERTAMA menjalankan usaha pengembangan perangkat lunak, website, aplikasi, dan layanan teknologi informasi, dan PIHAK KEDUA bermaksud memakai jasa tersebut sebagaimana dalam Penawaran yang telah disetujui. Para Pihak sepakat dengan ketentuan berikut:",
    en: "Whereas the FIRST PARTY operates a business in software, website, application and information technology services, and the SECOND PARTY wishes to use those services as set out in the approved Quotation, the Parties agree as follows:",
  });

  const list = articles(q, ppn, tax.pph23Note);
  list.forEach((a, i) => {
    heading(i + 1, a.title);
    a.clauses.forEach((c, j) => pair(c, `${j + 1}.`));
  });

  // ── Signatures
  ensure(150);
  y -= 6;
  pair({ id: "Demikian Perjanjian ini dibuat dan ditandatangani Para Pihak pada tanggal tersebut di atas.", en: "Thus this Agreement is made and signed by the Parties on the date stated above." });
  y -= 6;
  text("PIHAK PERTAMA / FIRST PARTY", M, 9, bold, NAVY);
  text("PIHAK KEDUA / SECOND PARTY", XR, 9, bold, NAVY);
  y -= 13;
  text(siteConfig.legalName, M, 9, font, MUTED);
  text(client, XR, 9, font, MUTED);
  y -= 56;
  text("(meterai / stamp duty)", M, 8, font, MUTED);
  text("(meterai / stamp duty)", XR, 8, font, MUTED);
  y -= 5;
  page.drawLine({ start: { x: M, y }, end: { x: M + COL, y }, thickness: 0.6, color: INK });
  page.drawLine({ start: { x: XR, y }, end: { x: XR + COL, y }, thickness: 0.6, color: INK });
  y -= 13;
  text(COMPANY.director, M, 10, bold, INK);
  text(q.client_name, XR, 10, bold, INK);
  y -= 12;
  text(`${COMPANY.title.id} / ${COMPANY.title.en}`, M, 8.5, font, MUTED);
  text(q.client_company ? "Perwakilan / Representative" : "Pemberi kerja / Client", XR, 8.5, font, MUTED);
  bodyPages = pdf.getPageCount();

  // ── Appendix I
  newPage();
  center("LAMPIRAN I / APPENDIX I", 12);
  y -= 16;
  center("DATA PARA PIHAK / PARTY PARTICULARS", 10, bold, MUTED);
  y -= 26;
  text("PIHAK PERTAMA / FIRST PARTY", M, 10, bold, ACCENT);
  y -= 18;
  kv({ id: "Nama badan usaha", en: "Entity name" }, siteConfig.legalName);
  kv({ id: "Alamat terdaftar", en: "Registered address" }, COMPANY.address);
  kv({ id: "NPWP", en: "Tax ID (NPWP)" }, tax.npwp);
  kv({ id: "NIB", en: "Business ID (NIB)" }, tax.nib);
  kv({ id: "Status pajak", en: "Tax status" }, ppn > 0 ? "Pengusaha Kena Pajak (PKP) / Taxable entrepreneur" : "Non-PKP / Non-taxable entrepreneur");
  kv({ id: "Penanggung jawab", en: "Person in charge" }, `${COMPANY.director}, ${COMPANY.title.id} / ${COMPANY.title.en}`);
  kv({ id: "Email", en: "Email" }, contact.email);
  kv({ id: "WhatsApp", en: "WhatsApp" }, contact.whatsappNumber);
  y -= 14;
  text("PIHAK KEDUA / SECOND PARTY", M, 10, bold, ACCENT);
  y -= 18;
  kv({ id: "Nama / badan usaha", en: "Name / entity" }, client);
  kv({ id: "Penanggung jawab (PIC)", en: "Person in charge (PIC)" }, q.client_name);
  kv({ id: "Email", en: "Email" }, q.client_email ?? "");
  kv({ id: "NPWP / NIB", en: "Tax ID / Business ID" }, "........................................");
  kv({ id: "Alamat", en: "Address" }, "........................................");

  // ── Appendix II
  newPage();
  center("LAMPIRAN II / APPENDIX II", 12);
  y -= 16;
  center("LINGKUP PEKERJAAN DAN HARGA / SCOPE OF WORK AND PRICE", 10, bold, MUTED);
  y -= 14;
  center(`Penawaran / Quotation No. ${number}`, 9, font, MUTED);
  y -= 24;
  const cols = { no: M, name: M + 24, qty: 360, price: 450, total: W - M };
  page.drawRectangle({ x: M, y: y - 7, width: W - 2 * M, height: 22, color: NAVY });
  text("No", cols.no + 6, 9, bold, WHITE);
  text("Deskripsi / Description", cols.name, 9, bold, WHITE);
  right("Qty", cols.qty, 9, bold, WHITE);
  right("Harga / Price", cols.price, 9, bold, WHITE);
  right("Jumlah / Amount", cols.total - 6, 9, bold, WHITE);
  y -= 26;
  q.items.forEach((item, i) => {
    const nameLines = wrap(item.name, font, 9.5, 250);
    const noteLines = item.note ? wrap(item.note, font, 8.5, 250) : [];
    ensure((nameLines.length + noteLines.length) * 12 + 14);
    text(String(i + 1), cols.no + 6, 9.5);
    right(String(item.qty), cols.qty, 9.5);
    right(idr(item.unit_price), cols.price, 9.5);
    right(idr(item.qty * item.unit_price), cols.total - 6, 9.5, bold);
    for (const l of nameLines) {
      text(l, cols.name, 9.5, bold, NAVY);
      y -= 12;
    }
    for (const l of noteLines) {
      text(l, cols.name, 8.5, font, MUTED);
      y -= 11;
    }
    page.drawLine({ start: { x: M, y: y - 4 }, end: { x: W - M, y: y - 4 }, thickness: 0.5, color: LINE });
    y -= 14;
  });
  const t = split.all;
  ensure(150);
  y -= 6;
  const row = (label: string, value: string, f = font) => {
    right(label, W - M - 140, 9.5, font, MUTED);
    right(value, W - M - 6, 9.5, f);
    y -= 15;
  };
  row("Subtotal", idr(t.subtotal));
  if (t.discount) row(`Diskon / Discount ${Number(q.discount_pct)}%`, `-${idr(t.discount)}`);
  if (t.tax) row(`PPN / VAT ${ppn}%`, idr(t.tax));
  y -= 4;
  right("TOTAL", W - M - 140, 11, bold, NAVY);
  right(idr(t.total), W - M - 6, 12, bold, NAVY);
  y -= 28;

  const sub = (b: B) => {
    ensure(40);
    text(`${b.id} / ${b.en}`, M, 10, bold, NAVY);
    y -= 15;
  };
  const sched = paymentSchedule(plan, split.oneTime.total);
  if (split.oneTimeItems.length) {
    sub({ id: `Termin pembayaran proyek (${sched.map((s) => `${s.pct}%`).join(" - ")})`, en: `Project payment schedule (${sched.map((s) => `${s.pct}%`).join(" - ")})` });
    sched.forEach((s) => {
      ensure(30);
      text(`${s.pct}%`, M, 9, bold, NAVY);
      for (const [i, l] of wrap(s.id, font, 8.8, 290).entries()) {
        text(l, M + 34, 8.8, font, INK);
        if (i === 0) right(idr(s.amount), W - M - 6, 9.5, bold);
        y -= 11;
      }
      for (const l of wrap(s.en, ital, 8.3, 290)) {
        text(l, M + 34, 8.3, ital, MUTED);
        y -= 10.5;
      }
      y -= 4;
    });
  }
  if (split.recurringItems.length) {
    ensure(30);
    text("Layanan berlangganan / Subscription services", M, 9, bold, NAVY);
    right(idr(split.recurring.total), W - M - 6, 9.5, bold);
    y -= 11;
    text("Ditagih di muka per periode / Billed in advance per period", M, 8.3, ital, MUTED);
    y -= 16;
  }
  y -= 6;
  sub({ id: "Jadwal, garansi, dan ketentuan khusus", en: "Schedule, warranty and special terms" });
  kv({ id: "Estimasi pengerjaan", en: "Estimated duration" }, "........ hari kerja sejak kick-off / working days from kick-off");
  kv({ id: "Garansi perbaikan bug", en: "Bug-fix warranty" }, "30 hari kalender sejak Serah Terima / calendar days from Handover");
  kv({ id: "Putaran revisi", en: "Revision rounds" }, "2 putaran per tahap / 2 rounds per stage");
  if (q.terms) {
    y -= 8;
    sub({ id: "Syarat tambahan dari Penawaran", en: "Additional terms from the Quotation" });
    for (const l of wrap(q.terms, font, 9, W - 2 * M)) {
      ensure(14);
      text(l, M, 9, font, MUTED);
      y -= 12.5;
    }
  }

  // Page chrome: a divider between the language columns on body pages and a footer everywhere.
  const pages = pdf.getPages();
  pages.forEach((p, i) => {
    if (i < bodyPages)
      p.drawLine({ start: { x: M + COL + GAP / 2, y: H - 40 }, end: { x: M + COL + GAP / 2, y: 58 }, thickness: 0.4, color: LINE });
    p.drawLine({ start: { x: M, y: 44 }, end: { x: W - M, y: 44 }, thickness: 0.5, color: LINE });
    p.drawText(safe(`${contractNo}  ·  ${siteConfig.legalName}`), { x: M, y: 30, size: 8, font, color: MUTED });
    const label = `Halaman / Page ${i + 1} / ${pages.length}`;
    p.drawText(label, { x: W - M - font.widthOfTextAtSize(label, 8), y: 30, size: 8, font, color: MUTED });
  });

  return pdf.save();
}
