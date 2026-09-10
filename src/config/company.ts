/**
 * Editorial content about how AG·SORA works.
 *
 * Everything here describes capability, approach, and commitments —
 * things AG·SORA chooses to offer and stand behind. Deliberately absent:
 * client names, testimonials, project counts, founding year, team size,
 * certifications. Those are factual claims and must come from real data,
 * not be written here. See `companyFacts` below.
 */

export type CapabilityGroup = {
  title: string;
  description: string;
  items: string[];
};

/**
 * NOTE: confirm this list matches what AG·SORA can actually deliver today.
 * Remove anything the team cannot support yet — an integration listed here
 * reads as a promise to a prospective client.
 */
export const capabilities: CapabilityGroup[] = [
  {
    title: "Platform",
    description: "Bentuk sistem yang bisa kami bangun.",
    items: [
      "Web application & admin dashboard",
      "Mobile application (iOS & Android)",
      "Aplikasi kasir / POS terminal",
      "Portal pelanggan & vendor",
      "Landing page & company profile",
    ],
  },
  {
    title: "Integrasi",
    description: "Menghubungkan sistem baru dengan yang sudah berjalan.",
    items: [
      "Payment gateway & QRIS",
      "Marketplace & e-commerce",
      "WhatsApp Business API",
      "Software akuntansi",
      "Ekspedisi & logistik",
      "Single sign-on (SSO)",
    ],
  },
  {
    title: "Data & Pelaporan",
    description: "Mengubah data operasional jadi dasar keputusan.",
    items: [
      "Dashboard & laporan real-time",
      "Konsolidasi multi-cabang",
      "Migrasi data dari sistem lama",
      "Ekspor terjadwal & rekap otomatis",
    ],
  },
  {
    title: "Infrastruktur",
    description: "Menjalankan sistem secara stabil dan terkontrol.",
    items: [
      "Deployment cloud atau on-premise",
      "Backup & pemulihan data",
      "Monitoring & logging",
      "Manajemen hak akses pengguna",
    ],
  },
];

export type Principle = {
  title: string;
  description: string;
};

export const principles: Principle[] = [
  {
    title: "Proses dulu, baru software",
    description:
      "Kami memetakan alur kerja yang sebenarnya sebelum menulis kode. Sistem yang dibangun di atas proses yang keliru hanya akan mempercepat masalah yang sama.",
  },
  {
    title: "Bangun untuk tahun kedua",
    description:
      "Arsitektur dirancang untuk kondisi saat data sudah menumpuk dan pengguna bertambah — bukan hanya agar terlihat baik di hari peluncuran.",
  },
  {
    title: "Satu sumber data",
    description:
      "Setiap angka sebaiknya punya satu tempat tinggal. Input ganda antar divisi adalah sumber selisih laporan yang paling sering kami temui.",
  },
  {
    title: "Serah terima, bukan ketergantungan",
    description:
      "Dokumentasi dan pelatihan adalah bagian dari pekerjaan. Klien harus tetap bisa menjalankan sistemnya meski tidak lagi bekerja dengan kami.",
  },
  {
    title: "Rilis bertahap dan terukur",
    description:
      "Kami memilih rilis kecil yang bisa dievaluasi daripada satu peluncuran besar yang sulit dikoreksi ketika ada yang meleset.",
  },
];

export type Commitment = {
  title: string;
  description: string;
};

/**
 * NOTE: these are promises made to clients on the public site.
 * Confirm the team is willing to honour each one before launch.
 */
export const commitments: Commitment[] = [
  {
    title: "Kepemilikan source code",
    description:
      "Skema kepemilikan source code untuk project custom dinyatakan tertulis dalam kontrak sejak awal — tidak disamarkan di belakang jargon lisensi.",
  },
  {
    title: "Dokumentasi & pelatihan",
    description:
      "Setiap serah terima disertai dokumentasi teknis dan sesi pelatihan untuk tim yang akan menggunakan sistem sehari-hari.",
  },
  {
    title: "Estimasi yang jujur",
    description:
      "Jika sebuah kebutuhan di luar keahlian kami atau tidak realistis dengan anggaran yang ada, kami sampaikan di awal — bukan setelah kontrak berjalan.",
  },
  {
    title: "Kerahasiaan data",
    description:
      "Data dan proses bisnis klien tidak digunakan untuk keperluan lain. NDA dapat disiapkan sebelum diskusi teknis dimulai.",
  },
  {
    title: "Ruang lingkup tertulis",
    description:
      "Fitur, timeline, dan batasan project dituangkan dalam proposal sebelum pengerjaan, sehingga tidak ada tafsir ganda di tengah jalan.",
  },
  {
    title: "Dukungan setelah rilis",
    description:
      "Perbaikan bug dan dukungan teknis pascarilis tersedia melalui paket maintenance, dengan cakupan yang dijelaskan sejak awal.",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Berapa lama waktu pengerjaan sebuah project?",
    answer:
      "Bergantung pada ruang lingkupnya. Yang paling memengaruhi timeline adalah jumlah modul, kompleksitas alur approval, banyaknya integrasi ke sistem lain, dan kesiapan data yang akan dimigrasi. Estimasi timeline yang spesifik kami sampaikan dalam proposal setelah kebutuhan dipetakan.",
  },
  {
    question: "Apakah source code menjadi milik kami?",
    answer:
      "Untuk project custom development, skema kepemilikan source code mengikuti kesepakatan tertulis di kontrak masing-masing project. Untuk produk SaaS AG·SORA, source code tetap milik AG·SORA dan Anda memperoleh hak penggunaan sesuai paket langganan.",
  },
  {
    question: "Bagaimana jika kebutuhan berubah di tengah project?",
    answer:
      "Perubahan adalah hal wajar. Perubahan kecil biasanya kami akomodasi dalam ruang lingkup berjalan. Perubahan yang menambah modul atau mengubah alur inti akan kami hitung ulang dampaknya terhadap timeline dan biaya, lalu disepakati tertulis sebelum dikerjakan.",
  },
  {
    question: "Bisakah sistem baru terhubung dengan software yang sudah kami pakai?",
    answer:
      "Dalam banyak kasus bisa, selama sistem tersebut menyediakan API atau jalur ekspor data. Pada tahap Discover kami memeriksa dokumentasi teknis sistem Anda dan menyampaikan apakah integrasinya memungkinkan sebelum masuk ke proposal.",
  },
  {
    question: "Lebih baik pakai produk SaaS atau custom development?",
    answer:
      "Jika proses bisnis Anda relatif standar dan ingin segera berjalan, produk SaaS AG·SORA lebih cepat dan lebih ringan biayanya. Custom development lebih tepat ketika alur kerja Anda spesifik, butuh integrasi khusus, atau sistem harus mengikuti aturan internal yang tidak umum.",
  },
  {
    question: "Apakah ada biaya setelah sistem selesai?",
    answer:
      "Sistem yang sudah berjalan tetap membutuhkan pemeliharaan. Paket maintenance mulai dari Rp750.000 per bulan, mencakup perbaikan bug dan dukungan teknis. Biaya pihak ketiga seperti domain, hosting, atau lisensi API berada di luar itu kecuali dinyatakan lain.",
  },
  {
    question: "Apakah AG·SORA menangani bisnis kecil?",
    answer:
      "Ya. Kebutuhan sederhana bisa dimulai dari ruang lingkup kecil — landing page atau sistem kasir — lalu dikembangkan bertahap. Kami tidak mengharuskan sebuah project dimulai dari paket besar.",
  },
  {
    question: "Bagaimana proses memulai kerja sama?",
    answer:
      "Dimulai dari sesi konsultasi gratis untuk memahami kebutuhan dan kendala Anda. Setelah itu kami menyusun proposal berisi ruang lingkup, estimasi timeline, dan biaya. Pengerjaan baru dimulai setelah proposal disepakati.",
  },
];

/**
 * Verifiable facts only.
 *
 * `foundedYear`, team size, project counts, and client names are intentionally
 * NOT here — AG·SORA has not supplied them, and inventing business credentials
 * for a real legal entity on a public site is not acceptable. Add them here
 * once the real values are known, then surface them in the About page.
 */
export const companyFacts = {
  legalName: "PT Agsora Teknologi Indonesia",
  businessLines: ["Custom Development", "Proprietary SaaS Products"],
};
