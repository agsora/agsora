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
  /** Also shown on the homepage — the doubts that most often stop a prospect. */
  featured?: boolean;
};

export type FaqTranslated = {
  id: { question: string; answer: string };
  en: { question: string; answer: string };
  zh: { question: string; answer: string };
  featured?: boolean;
};

/**
 * Low-risk assurances shown directly under the homepage hero, in the slot
 * where sites usually put a client-logo bar. AG·SORA has no client logos to
 * show, so this uses things a prospect can verify or hold AG·SORA to instead.
 * Each one is already stated elsewhere on the site — keep them in sync with
 * `commitments` and the pricing page.
 */
export const assurances: string[] = [
  "Konsultasi gratis",
  "Harga dipublikasikan",
  "Ruang lingkup tertulis",
  "Dokumentasi & pelatihan",
];

export const faqsTranslated: FaqTranslated[] = [
  {
    featured: true,
    id: {
      question: "Berapa lama waktu pengerjaan sebuah project?",
      answer:
        "Bergantung pada ruang lingkupnya. Yang paling memengaruhi timeline adalah jumlah modul, kompleksitas alur approval, banyaknya integrasi ke sistem lain, dan kesiapan data yang akan dimigrasi. Estimasi timeline yang spesifik kami sampaikan dalam proposal setelah kebutuhan dipetakan.",
    },
    en: {
      question: "How long does a project take to build?",
      answer:
        "It depends on the scope. The biggest factors are the number of modules, how complex the approval workflow is, how many integrations are involved, and how ready the data is for migration. We share a specific timeline estimate in the proposal once the requirements are mapped out.",
    },
    zh: {
      question: "一个项目通常需要多长时间完成？",
      answer:
        "这取决于项目范围。影响工期最大的因素是模块数量、审批流程的复杂度、需要对接的系统数量，以及待迁移数据的准备程度。在需求梳理完成后，我们会在提案中给出具体的工期预估。",
    },
  },
  {
    featured: true,
    id: {
      question: "Apakah source code menjadi milik kami?",
      answer:
        "Untuk project custom development, skema kepemilikan source code mengikuti kesepakatan tertulis di kontrak masing-masing project. Untuk produk SaaS AG·SORA, source code tetap milik AG·SORA dan Anda memperoleh hak penggunaan sesuai paket langganan.",
    },
    en: {
      question: "Do we own the source code?",
      answer:
        "For custom development projects, source code ownership follows the written agreement in each project's contract. For AG·SORA's SaaS products, the source code remains AG·SORA's property and you receive usage rights under your subscription plan.",
    },
    zh: {
      question: "源代码归我们所有吗？",
      answer:
        "对于定制开发项目，源代码归属方案以每个项目合同中的书面约定为准。对于 AG·SORA 的 SaaS 产品，源代码归 AG·SORA 所有，您根据订阅套餐获得使用权。",
    },
  },
  {
    id: {
      question: "Bagaimana jika kebutuhan berubah di tengah project?",
      answer:
        "Perubahan adalah hal wajar. Perubahan kecil biasanya kami akomodasi dalam ruang lingkup berjalan. Perubahan yang menambah modul atau mengubah alur inti akan kami hitung ulang dampaknya terhadap timeline dan biaya, lalu disepakati tertulis sebelum dikerjakan.",
    },
    en: {
      question: "What if requirements change mid-project?",
      answer:
        "Changes are normal. Small changes are usually accommodated within the running scope. Changes that add modules or alter core workflows are re-estimated for their impact on timeline and cost, then agreed in writing before we proceed.",
    },
    zh: {
      question: "如果项目中途需求发生变化怎么办？",
      answer:
        "需求变化是正常的。小幅调整通常可以在现有范围内容纳。若变更涉及新增模块或改变核心流程，我们会重新评估对工期和成本的影响，并在书面确认后再执行。",
    },
  },
  {
    id: {
      question: "Bisakah sistem baru terhubung dengan software yang sudah kami pakai?",
      answer:
        "Dalam banyak kasus bisa, selama sistem tersebut menyediakan API atau jalur ekspor data. Pada tahap Discover kami memeriksa dokumentasi teknis sistem Anda dan menyampaikan apakah integrasinya memungkinkan sebelum masuk ke proposal.",
    },
    en: {
      question: "Can the new system connect with software we already use?",
      answer:
        "In most cases, yes — as long as that system offers an API or a data export path. During the Discover phase we review your system's technical documentation and let you know whether integration is feasible before it goes into the proposal.",
    },
    zh: {
      question: "新系统能与我们现有的软件对接吗？",
      answer:
        "在大多数情况下可以，只要该系统提供 API 或数据导出接口。在 Discover 阶段，我们会检查您系统的技术文档，并在提案前告知对接是否可行。",
    },
  },
  {
    featured: true,
    id: {
      question: "Lebih baik pakai produk SaaS atau custom development?",
      answer:
        "Jika proses bisnis Anda relatif standar dan ingin segera berjalan, produk SaaS AG·SORA lebih cepat dan lebih ringan biayanya. Custom development lebih tepat ketika alur kerja Anda spesifik, butuh integrasi khusus, atau sistem harus mengikuti aturan internal yang tidak umum.",
    },
    en: {
      question: "Should we use a SaaS product or go with custom development?",
      answer:
        "If your business process is fairly standard and you want to get running quickly, AG·SORA's SaaS products are faster and lighter on cost. Custom development fits better when your workflow is specific, needs special integrations, or has to follow uncommon internal rules.",
    },
    zh: {
      question: "应该选择 SaaS 产品还是定制开发？",
      answer:
        "如果您的业务流程相对标准，希望尽快上线，AG·SORA 的 SaaS 产品速度更快、成本更低。若您的工作流程较为特殊、需要特殊对接，或系统必须遵循非通用的内部规则，定制开发会更合适。",
    },
  },
  {
    featured: true,
    id: {
      question: "Apakah ada biaya setelah sistem selesai?",
      answer:
        "Sistem yang sudah berjalan tetap membutuhkan pemeliharaan. Paket maintenance mulai dari Rp750.000 per bulan, mencakup perbaikan bug dan dukungan teknis. Biaya pihak ketiga seperti domain, hosting, atau lisensi API berada di luar itu kecuali dinyatakan lain.",
    },
    en: {
      question: "Are there costs after the system is delivered?",
      answer:
        "A running system still needs upkeep. Maintenance packages start from Rp750,000/month, covering bug fixes and technical support. Third-party costs like domain, hosting, or API licensing sit outside that unless stated otherwise.",
    },
    zh: {
      question: "系统交付后还需要付费吗？",
      answer:
        "系统上线后仍需要维护。维护套餐起价为每月 Rp750,000，涵盖错误修复与技术支持。域名、主机、API 授权等第三方费用不包含在内，除非另有说明。",
    },
  },
  {
    featured: true,
    id: {
      question: "Apakah AG·SORA menangani bisnis kecil?",
      answer:
        "Ya. Kebutuhan sederhana bisa dimulai dari ruang lingkup kecil — landing page atau sistem kasir — lalu dikembangkan bertahap. Kami tidak mengharuskan sebuah project dimulai dari paket besar.",
    },
    en: {
      question: "Does AG·SORA work with small businesses?",
      answer:
        "Yes. Simple needs can start small — a landing page or a POS system — and grow from there. We don't require every project to start with a large package.",
    },
    zh: {
      question: "AG·SORA 也服务小型企业吗？",
      answer:
        "是的。简单的需求可以从小范围开始——例如落地页或收银系统——之后再逐步扩展。我们不要求每个项目都从大套餐开始。",
    },
  },
  {
    featured: true,
    id: {
      question: "Bagaimana proses memulai kerja sama?",
      answer:
        "Dimulai dari sesi konsultasi gratis untuk memahami kebutuhan dan kendala Anda. Setelah itu kami menyusun proposal berisi ruang lingkup, estimasi timeline, dan biaya. Pengerjaan baru dimulai setelah proposal disepakati.",
    },
    en: {
      question: "How does the process of working together start?",
      answer:
        "It starts with a free consultation to understand your needs and constraints. We then put together a proposal covering scope, timeline estimate, and cost. Work only begins once the proposal is agreed.",
    },
    zh: {
      question: "合作流程是怎样的？",
      answer:
        "首先是一次免费咨询，用于了解您的需求与限制。随后我们会制定包含范围、工期预估和费用的提案。方案确认后才正式开始执行。",
    },
  },
];

/** Indonesian-only shape, kept for the FAQPage JSON-LD schema. */
export const faqs: Faq[] = faqsTranslated.map((f) => ({
  question: f.id.question,
  answer: f.id.answer,
  featured: f.featured,
}));

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
