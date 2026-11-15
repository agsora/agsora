import type { Quote } from "@/lib/quote";

/** Indonesian and English text side by side. */
export type B = { id: string; en: string };
export type ServiceCategory = { key: string; re: RegExp; label: B; text: B };

/** Extra proposal copy per category: why it matters, what the client must provide, and typical build days [min, max]. */
export const CATEGORY_EXTRAS: Record<string, { benefit: string; needs: string[]; days: [number, number] }> = {
  "web": {
    "benefit": "Website menjadi etalase digital yang selalu aktif: calon klien menemukan Anda, memahami layanan, dan menghubungi Anda dengan mudah.",
    "needs": [
      "Logo, foto, dan teks konten",
      "Akses domain dan hosting (atau kami bantu daftarkan)",
      "Referensi desain yang Anda sukai"
    ],
    "days": [3, 7]
  },
  "mobile": {
    "benefit": "Aplikasi membuka kanal langsung ke pelanggan atau tim lapangan, dengan pengalaman yang cepat dan nyaman di ponsel.",
    "needs": [
      "Alur fitur dan contoh aplikasi sejenis",
      "Akun developer Google Play / App Store",
      "Materi merek (logo, warna)"
    ],
    "days": [10, 20]
  },
  "system": {
    "benefit": "Mengganti proses manual dan spreadsheet dengan satu sistem terintegrasi: data lebih rapi, laporan lebih cepat, kontrol operasional lebih baik.",
    "needs": [
      "Penjelasan alur kerja dan contoh dokumen/laporan saat ini",
      "Data awal (produk, pelanggan, karyawan) dalam Excel",
      "Satu PIC yang dapat memutuskan saat tahap uji"
    ],
    "days": [7, 15]
  },
  "ai": {
    "benefit": "Mengotomatiskan pekerjaan berulang dan melayani pelanggan sepanjang waktu sehingga tim fokus pada pekerjaan bernilai tinggi.",
    "needs": [
      "Daftar pertanyaan umum dan skenario percakapan",
      "Akses akun WhatsApp Business atau layanan terkait",
      "Contoh data atau dokumen untuk pengujian"
    ],
    "days": [3, 7]
  },
  "integration": {
    "benefit": "Menyambungkan sistem Anda dengan layanan lain agar data mengalir otomatis tanpa input ulang.",
    "needs": [
      "Dokumentasi API dan kredensial dari penyedia layanan",
      "Akun merchant atau layanan atas nama perusahaan Anda",
      "Data sumber untuk migrasi (jika ada)"
    ],
    "days": [2, 5]
  },
  "design": {
    "benefit": "Tampilan dan alur penggunaan yang konsisten dan mudah dipahami meningkatkan kepercayaan serta konversi.",
    "needs": [
      "Materi merek dan referensi gaya",
      "Daftar halaman atau fitur yang akan didesain"
    ],
    "days": [2, 5]
  },
  "hosting": {
    "benefit": "Infrastruktur yang aman dan terkelola membuat sistem Anda cepat diakses dan minim gangguan.",
    "needs": [
      "Informasi domain yang sudah ada (jika ada)",
      "Persetujuan biaya perpanjangan tahunan"
    ],
    "days": [1, 2]
  },
  "seo": {
    "benefit": "Meningkatkan peluang ditemukan di mesin pencari secara berkelanjutan lewat perbaikan teknis dan konten.",
    "needs": [
      "Akses website, Google Search Console, dan Analytics",
      "Daftar produk, layanan, dan area target"
    ],
    "days": [0, 0]
  },
  "security": {
    "benefit": "Menemukan celah keamanan lebih dulu sebelum dimanfaatkan pihak lain, lengkap dengan rekomendasi perbaikannya.",
    "needs": [
      "Izin tertulis untuk menguji sistem",
      "Daftar sistem dan lingkup yang diuji",
      "Jadwal pengujian yang aman"
    ],
    "days": [3, 7]
  },
  "consulting": {
    "benefit": "Rekomendasi teknologi yang tepat sasaran sehingga investasi IT Anda tidak salah arah.",
    "needs": [
      "Gambaran kondisi sistem dan kebutuhan saat ini",
      "Akses ke pihak yang memahami proses bisnis"
    ],
    "days": [1, 3]
  },
  "training": {
    "benefit": "Tim Anda mampu memakai sistem secara mandiri sehingga adopsi cepat dan ketergantungan berkurang.",
    "needs": [
      "Daftar peserta dan jadwal",
      "Ruang atau tautan pertemuan daring"
    ],
    "days": [1, 1]
  },
  "maintenance": {
    "benefit": "Sistem tetap sehat dan aman setelah rilis, dengan dukungan teknis yang cepat saat ada kendala.",
    "needs": [
      "Akses admin dan repositori/server",
      "Satu PIC untuk pelaporan kendala"
    ],
    "days": [0, 0]
  }
};

/** What each kind of product in the quote adds to the agreement (deliverables and special terms). */
export const CATEGORIES: ServiceCategory[] = [
  {
    key: "web",
    re: /website|landing|company profile|toko online|e-?commerce|laman/i,
    label: { id: "Website", en: "Website" },
    text: {
      id: "Website dibangun responsif (tampil baik di ponsel, tablet, dan komputer) dengan struktur halaman, desain, dan konten sesuai persetujuan PIHAK KEDUA, termasuk pengaturan dasar SEO teknis dan formulir kontak. Konten teks, foto, dan logo disediakan PIHAK KEDUA kecuali disepakati lain. Serah terima mencakup penayangan di domain PIHAK KEDUA dan panduan singkat penggunaan panel admin (jika ada).",
      en: "The website is built responsive (displays well on phones, tablets and computers) with page structure, design and content as approved by the SECOND PARTY, including basic technical SEO setup and a contact form. Text, photos and logos are provided by the SECOND PARTY unless agreed otherwise. Handover covers publishing on the SECOND PARTY's domain and a short guide for the admin panel (if any).",
    },
  },
  {
    key: "mobile",
    re: /mobile|android|\bios\b|aplikasi (hp|ponsel)/i,
    label: { id: "Aplikasi Mobile", en: "Mobile App" },
    text: {
      id: "Aplikasi mobile dikembangkan untuk platform yang tercantum pada Lampiran II. Pembuatan akun developer (Google Play / Apple App Store), biaya pendaftaran, dan kepatuhan terhadap kebijakan toko aplikasi menjadi tanggung jawab PIHAK KEDUA; PIHAK PERTAMA membantu proses pengajuan. Keputusan persetujuan atau penolakan di toko aplikasi berada pada pengelola toko, dan PIHAK PERTAMA memperbaiki temuan yang sesuai lingkup tanpa biaya tambahan.",
      en: "The mobile app is developed for the platforms listed in Appendix II. Creating developer accounts (Google Play / Apple App Store), registration fees and compliance with app store policies are the SECOND PARTY's responsibility; the FIRST PARTY assists with submission. Approval or rejection decisions rest with the store operator, and the FIRST PARTY fixes findings within scope at no extra cost.",
    },
  },
  {
    key: "system",
    re: /\bpos\b|kasir|hris|\bcrm\b|\berp\b|software|sistem|dashboard|laporan|custom|inventori|inventory|e-learning|lms|booking|reservasi|absensi|payroll|gaji|akuntansi|klinik|properti|helpdesk|member|loyalty|\bpwa\b/i,
    label: { id: "Sistem Bisnis & Perangkat Lunak", en: "Business Systems & Software" },
    text: {
      id: "Sistem dikembangkan berdasarkan kebutuhan dan alur kerja yang disepakati pada tahap pemetaan; daftar modul dan fitur pada Lampiran II menjadi acuan uji penerimaan. Hak akses pengguna, peran, dan data awal disiapkan bersama PIHAK KEDUA. Perubahan alur bisnis setelah tahap perancangan disetujui dianggap pekerjaan tambahan. Pelatihan dasar penggunaan sistem diberikan sesuai Lampiran II.",
      en: "The system is developed from the requirements and workflows agreed in the discovery stage; the list of modules and features in Appendix II is the reference for acceptance testing. User access, roles and initial data are prepared together with the SECOND PARTY. Business workflow changes after design approval are treated as additional work. Basic user training is provided as set out in Appendix II.",
    },
  },
  {
    key: "ai",
    re: /\bai\b|chatbot|otomasi|automation|whatsapp|bot\b/i,
    label: { id: "Otomasi, AI & Chatbot", en: "Automation, AI & Chatbot" },
    text: {
      id: "Otomasi dan fitur berbasis kecerdasan buatan dikonfigurasi sesuai skenario yang disepakati. Keluaran model AI bersifat probabilistik sehingga PIHAK PERTAMA tidak menjamin akurasi mutlak atau bebas dari kesalahan; PIHAK KEDUA tetap memeriksa keputusan penting. Biaya pemakaian layanan pihak ketiga (misalnya API model AI, WhatsApp Business API) ditanggung PIHAK KEDUA sesuai tarif penyedia, dan data tidak dipakai untuk melatih model milik PIHAK PERTAMA.",
      en: "Automation and AI-based features are configured according to the agreed scenarios. AI model output is probabilistic, so the FIRST PARTY does not guarantee absolute accuracy or freedom from errors; the SECOND PARTY continues to review important decisions. Usage costs of third-party services (for example AI model APIs, WhatsApp Business API) are borne by the SECOND PARTY at the provider's rates, and data is not used to train any model owned by the FIRST PARTY.",
    },
  },
  {
    key: "integration",
    re: /integrasi|\bapi\b|payment|qris|marketplace|logistik|migrasi|e-faktur|coretax|\biot\b|sensor/i,
    label: { id: "Integrasi & Migrasi Data", en: "Integration & Data Migration" },
    text: {
      id: "Integrasi mengikuti dokumentasi dan kredensial yang disediakan pemilik layanan terkait. Keterlambatan atau perubahan dari pihak tersebut dapat menggeser jadwal tanpa menjadi kesalahan PIHAK PERTAMA. Untuk migrasi data, PIHAK KEDUA menyediakan data sumber yang dapat dibaca dan menjamin haknya atas data tersebut; PIHAK PERTAMA membuat salinan cadangan sebelum migrasi dan memverifikasi hasilnya bersama PIHAK KEDUA.",
      en: "Integrations follow the documentation and credentials provided by the owner of the relevant service. Delays or changes on that side may move the schedule without being the FIRST PARTY's fault. For data migration, the SECOND PARTY provides readable source data and warrants its rights to that data; the FIRST PARTY takes a backup before migration and verifies the result together with the SECOND PARTY.",
    },
  },
  {
    key: "design",
    re: /ui\/?ux|desain|design|logo|branding/i,
    label: { id: "Desain UI/UX", en: "UI/UX Design" },
    text: {
      id: "Desain diserahkan dalam format yang disepakati (misalnya berkas desain dan aset ekspor). Revisi dilakukan dalam batas putaran yang tercantum; setelah desain disetujui secara tertulis, perubahan besar dianggap pekerjaan tambahan. Font, ikon, dan gambar berlisensi pihak ketiga mengikuti lisensi masing-masing.",
      en: "Designs are delivered in the agreed formats (for example design files and exported assets). Revisions are made within the stated number of rounds; once a design is approved in writing, major changes are treated as additional work. Third-party licensed fonts, icons and images follow their respective licences.",
    },
  },
  {
    key: "hosting",
    re: /hosting|domain|cloud|server|ssl|backup|disaster|email bisnis|workspace/i,
    label: { id: "Domain, Hosting & Cloud", en: "Domain, Hosting & Cloud" },
    text: {
      id: "Domain, hosting, dan server disediakan melalui penyedia pihak ketiga dan didaftarkan atas nama PIHAK KEDUA. Biaya perpanjangan tahunan ditagih sesuai Lampiran II dan wajib dibayar sebelum jatuh tempo; kelalaian memperpanjang dapat mengakibatkan layanan atau domain berhenti dan bukan tanggung jawab PIHAK PERTAMA. Ketersediaan mengikuti tingkat layanan penyedia.",
      en: "Domains, hosting and servers are provided through third-party vendors and registered in the SECOND PARTY's name. Annual renewal fees are billed as set out in Appendix II and must be paid before the due date; failure to renew may cause the service or domain to stop and is not the FIRST PARTY's responsibility. Availability follows the vendor's service level.",
    },
  },
  {
    key: "seo",
    re: /seo|konten|content|marketing|iklan|ads\b|media sosial/i,
    label: { id: "SEO & Konten", en: "SEO & Content" },
    text: {
      id: "Layanan SEO dan konten dilakukan secara berkelanjutan sesuai rencana kerja yang disepakati. Peringkat mesin pencari ditentukan algoritma pihak ketiga sehingga PIHAK PERTAMA tidak menjamin posisi, jumlah kunjungan, atau penjualan tertentu; PIHAK PERTAMA melaporkan kegiatan dan indikator kemajuan secara berkala.",
      en: "SEO and content services are performed on an ongoing basis under the agreed work plan. Search engine rankings are determined by third-party algorithms, so the FIRST PARTY does not guarantee any position, traffic level or sales; the FIRST PARTY reports activities and progress indicators periodically.",
    },
  },
  {
    key: "security",
    re: /keamanan|security|audit|pentest/i,
    label: { id: "Audit & Keamanan", en: "Audit & Security" },
    text: {
      id: "Audit keamanan dilakukan hanya pada sistem dan lingkup yang diizinkan tertulis oleh PIHAK KEDUA, yang menjamin memiliki hak untuk memberi izin tersebut. Laporan memuat temuan dan rekomendasi; PIHAK PERTAMA tidak menjamin sistem bebas dari celah keamanan di masa depan. Pengujian dapat menimbulkan gangguan sementara dan dijadwalkan bersama PIHAK KEDUA.",
      en: "Security audits are performed only on the systems and scope authorised in writing by the SECOND PARTY, who warrants having the right to grant that authorisation. The report contains findings and recommendations; the FIRST PARTY does not guarantee that the system will be free of security gaps in future. Testing may cause temporary disruption and is scheduled together with the SECOND PARTY.",
    },
  },
  {
    key: "consulting",
    re: /konsultasi|consult|audit sistem|roadmap/i,
    label: { id: "Konsultasi IT", en: "IT Consulting" },
    text: {
      id: "Konsultasi memberikan rekomendasi profesional berdasarkan informasi yang diberikan PIHAK KEDUA. Keputusan bisnis dan penerapan rekomendasi sepenuhnya menjadi tanggung jawab PIHAK KEDUA.",
      en: "Consulting provides professional recommendations based on information supplied by the SECOND PARTY. Business decisions and the implementation of recommendations remain entirely the SECOND PARTY's responsibility.",
    },
  },
  {
    key: "training",
    re: /pelatihan|training|workshop/i,
    label: { id: "Pelatihan", en: "Training" },
    text: {
      id: "Pelatihan dijadwalkan bersama PIHAK KEDUA dengan jumlah sesi dan peserta sesuai Lampiran II. Sesi yang dibatalkan kurang dari 2 (dua) Hari Kerja sebelum pelaksanaan dianggap telah dilaksanakan. Materi tetap menjadi milik PIHAK PERTAMA dan hanya untuk penggunaan internal PIHAK KEDUA.",
      en: "Training is scheduled together with the SECOND PARTY, with the number of sessions and participants as set out in Appendix II. Sessions cancelled less than 2 (two) Business Days beforehand are treated as delivered. Materials remain the property of the FIRST PARTY and are for the SECOND PARTY's internal use only.",
    },
  },
  {
    key: "maintenance",
    re: /pemeliharaan|maintenance|support|dukungan/i,
    label: { id: "Pemeliharaan & Dukungan", en: "Maintenance & Support" },
    text: {
      id: "Pemeliharaan berlangganan mencakup perbaikan kesalahan, pembaruan keamanan, pemantauan dasar, dan dukungan teknis pada Hari Kerja dengan target respons 1 (satu) Hari Kerja untuk permintaan biasa. Fitur baru dan perubahan besar tidak termasuk dan ditawarkan terpisah. Layanan ditagih di muka per periode; jika tidak diperpanjang, dukungan berakhir pada akhir periode terakhir.",
      en: "Subscription maintenance covers bug fixes, security updates, basic monitoring and technical support on Business Days, with a target response of 1 (one) Business Day for regular requests. New features and major changes are not included and are quoted separately. The service is billed in advance per period; if not renewed, support ends at the end of the last period.",
    },
  },
];

export const detect = (q: Pick<Quote, "items">) => CATEGORIES.filter((c) => q.items.some((i) => c.re.test(`${i.name} ${i.note ?? ""}`)));

/** Typical delivery stages for the one-time work on a quote, with day ranges that follow the product mix. Null when nothing is built. */
export function proposalTimeline(q: Pick<Quote, "items">) {
  const cats = detect(q).filter((c) => (CATEGORY_EXTRAS[c.key]?.days[1] ?? 0) > 0);
  if (!cats.length) return null;
  const sum = (i: 0 | 1) => {
    const v = cats.map((c) => CATEGORY_EXTRAS[c.key].days[i]);
    return Math.max(...v) + 0.4 * (v.reduce((a, b) => a + b, 0) - Math.max(...v));
  };
  // Work on several products overlaps: the longest item sets the pace and each other item adds 40%.
  const dev: [number, number] = [Math.max(3, Math.round(sum(0))), Math.max(5, Math.round(sum(1)))];
  const stages: { stage: string; activity: string; output: string; range: [number, number] }[] = [
    { stage: "1. Kickoff", activity: "Konfirmasi ruang lingkup, prioritas, akses, dan alur final.", output: "Dokumen lingkup final dan daftar kebutuhan.", range: [1, 1] },
    { stage: "2. Analisis & desain", activity: "Pemetaan kebutuhan, struktur sistem, dan desain tampilan.", output: "Rancangan yang disetujui.", range: [1, 2] },
    { stage: "3. Pengembangan", activity: "Pembuatan fitur sesuai penawaran.", output: "Versi uji (staging/demo) siap dicoba.", range: dev },
    { stage: "4. Pengujian internal", activity: "Uji fungsi utama, perhitungan, dan skenario transaksi.", output: "Daftar hasil uji dan perbaikan.", range: [1, 2] },
    { stage: "5. UAT klien", activity: "Klien mencoba dan memberi masukan sesuai lingkup.", output: "Persetujuan atau daftar revisi minor.", range: [2, 3] },
    { stage: "6. Go-live", activity: "Peluncuran ke produksi setelah persetujuan.", output: "Sistem aktif digunakan.", range: [1, 1] },
  ];
  const total: [number, number] = [stages.reduce((s, x) => s + x.range[0], 0), stages.reduce((s, x) => s + x.range[1], 0)];
  return { stages, total };
}
