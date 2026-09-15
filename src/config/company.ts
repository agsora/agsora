/**
 * Editorial content about how AG·SORA works.
 *
 * Everything here describes capability, approach, and commitments —
 * things AG·SORA chooses to offer and stand behind. Deliberately absent:
 * client names, testimonials, project counts, founding year, team size,
 * certifications. Those are factual claims and must come from real data,
 * not be written here. See `companyFacts` below.
 */

type Localized = { id: string; en: string; zh: string };
type LocalizedList = { id: string[]; en: string[]; zh: string[] };

export type CapabilityGroup = {
  title: Localized;
  description: Localized;
  items: LocalizedList;
};

/**
 * NOTE: confirm this list matches what AG·SORA can actually deliver today.
 * Remove anything the team cannot support yet — an integration listed here
 * reads as a promise to a prospective client.
 */
export const capabilities: CapabilityGroup[] = [
  {
    title: { id: "Platform", en: "Platform", zh: "平台" },
    description: {
      id: "Bentuk sistem yang bisa kami bangun.",
      en: "The kinds of systems we can build.",
      zh: "我们能够构建的系统类型。",
    },
    items: {
      id: [
        "Web application & admin dashboard",
        "Mobile application (iOS & Android)",
        "Aplikasi kasir / POS terminal",
        "Portal pelanggan & vendor",
        "Landing page & company profile",
      ],
      en: [
        "Web application & admin dashboard",
        "Mobile application (iOS & Android)",
        "POS / cashier terminal app",
        "Customer & vendor portal",
        "Landing page & company profile site",
      ],
      zh: [
        "Web 应用与管理后台",
        "移动应用（iOS 与 Android）",
        "收银/POS 终端应用",
        "客户与供应商门户",
        "落地页与企业官网",
      ],
    },
  },
  {
    title: { id: "Integrasi", en: "Integration", zh: "系统对接" },
    description: {
      id: "Menghubungkan sistem baru dengan yang sudah berjalan.",
      en: "Connecting new systems with the ones already running.",
      zh: "将新系统与现有运行中的系统连接。",
    },
    items: {
      id: [
        "Payment gateway & QRIS",
        "Marketplace & e-commerce",
        "WhatsApp Business API",
        "Software akuntansi",
        "Ekspedisi & logistik",
        "Single sign-on (SSO)",
      ],
      en: [
        "Payment gateway & QRIS",
        "Marketplace & e-commerce",
        "WhatsApp Business API",
        "Accounting software",
        "Shipping & logistics",
        "Single sign-on (SSO)",
      ],
      zh: [
        "支付网关与 QRIS",
        "电商平台对接",
        "WhatsApp Business API",
        "会计软件",
        "物流与配送",
        "单点登录（SSO）",
      ],
    },
  },
  {
    title: { id: "Data & Pelaporan", en: "Data & Reporting", zh: "数据与报表" },
    description: {
      id: "Mengubah data operasional jadi dasar keputusan.",
      en: "Turning operational data into the basis for decisions.",
      zh: "将运营数据转化为决策依据。",
    },
    items: {
      id: [
        "Dashboard & laporan real-time",
        "Konsolidasi multi-cabang",
        "Migrasi data dari sistem lama",
        "Ekspor terjadwal & rekap otomatis",
      ],
      en: [
        "Real-time dashboards & reports",
        "Multi-branch consolidation",
        "Data migration from legacy systems",
        "Scheduled exports & automated recaps",
      ],
      zh: [
        "实时仪表盘与报表",
        "多分店数据合并",
        "旧系统数据迁移",
        "定时导出与自动汇总",
      ],
    },
  },
  {
    title: { id: "Infrastruktur", en: "Infrastructure", zh: "基础设施" },
    description: {
      id: "Menjalankan sistem secara stabil dan terkontrol.",
      en: "Running systems reliably and under control.",
      zh: "稳定且可控地运行系统。",
    },
    items: {
      id: [
        "Deployment cloud atau on-premise",
        "Backup & pemulihan data",
        "Monitoring & logging",
        "Manajemen hak akses pengguna",
      ],
      en: [
        "Cloud or on-premise deployment",
        "Backup & data recovery",
        "Monitoring & logging",
        "User access management",
      ],
      zh: [
        "云端或本地部署",
        "数据备份与恢复",
        "监控与日志记录",
        "用户权限管理",
      ],
    },
  },
];

export type Principle = {
  title: Localized;
  description: Localized;
};

export const principles: Principle[] = [
  {
    title: {
      id: "Proses dulu, baru software",
      en: "Process first, software second",
      zh: "先理清流程，再谈软件",
    },
    description: {
      id: "Kami memetakan alur kerja yang sebenarnya sebelum menulis kode. Sistem yang dibangun di atas proses yang keliru hanya akan mempercepat masalah yang sama.",
      en: "We map out the real workflow before writing any code. A system built on top of a flawed process just makes the same problem happen faster.",
      zh: "我们会先梳理真实的工作流程，再开始编写代码。建立在错误流程之上的系统，只会让同样的问题更快地发生。",
    },
  },
  {
    title: {
      id: "Bangun untuk tahun kedua",
      en: "Built for year two",
      zh: "为第二年而建",
    },
    description: {
      id: "Arsitektur dirancang untuk kondisi saat data sudah menumpuk dan pengguna bertambah — bukan hanya agar terlihat baik di hari peluncuran.",
      en: "Architecture is designed for the point when data has piled up and users have grown — not just to look good on launch day.",
      zh: "架构设计着眼于数据累积、用户增长后的状态，而不仅仅是为了上线当天看起来光鲜。",
    },
  },
  {
    title: {
      id: "Satu sumber data",
      en: "One source of truth",
      zh: "单一数据来源",
    },
    description: {
      id: "Setiap angka sebaiknya punya satu tempat tinggal. Input ganda antar divisi adalah sumber selisih laporan yang paling sering kami temui.",
      en: "Every number should have one home. Duplicate input across departments is the most common source of report discrepancies we see.",
      zh: "每个数字都应该只有一个归属之地。跨部门的重复录入，是我们最常见到的报表差异来源。",
    },
  },
  {
    title: {
      id: "Serah terima, bukan ketergantungan",
      en: "Handover, not dependency",
      zh: "交接而非依赖",
    },
    description: {
      id: "Dokumentasi dan pelatihan adalah bagian dari pekerjaan. Klien harus tetap bisa menjalankan sistemnya meski tidak lagi bekerja dengan kami.",
      en: "Documentation and training are part of the job. Clients should be able to keep running their system even if they stop working with us.",
      zh: "文档与培训是工作的一部分。即使不再与我们合作，客户也应该能够独立运行其系统。",
    },
  },
  {
    title: {
      id: "Rilis bertahap dan terukur",
      en: "Phased, measured releases",
      zh: "分阶段、可衡量的发布",
    },
    description: {
      id: "Kami memilih rilis kecil yang bisa dievaluasi daripada satu peluncuran besar yang sulit dikoreksi ketika ada yang meleset.",
      en: "We prefer small, evaluable releases over one big launch that's hard to correct when something goes wrong.",
      zh: "我们倾向于采用可评估的小规模发布，而非一次性大规模上线——后者一旦出错将难以修正。",
    },
  },
];

export type Commitment = {
  title: Localized;
  description: Localized;
};

/**
 * NOTE: these are promises made to clients on the public site.
 * Confirm the team is willing to honour each one before launch.
 */
export const commitments: Commitment[] = [
  {
    title: {
      id: "Kepemilikan source code",
      en: "Source code ownership",
      zh: "源代码归属",
    },
    description: {
      id: "Skema kepemilikan source code untuk project custom dinyatakan tertulis dalam kontrak sejak awal — tidak disamarkan di belakang jargon lisensi.",
      en: "The source code ownership arrangement for custom projects is stated in writing in the contract from the start — never disguised behind licensing jargon.",
      zh: "定制项目的源代码归属方案会在合同中从一开始就以书面形式明确约定，绝不会被授权术语所掩盖。",
    },
  },
  {
    title: {
      id: "Dokumentasi & pelatihan",
      en: "Documentation & training",
      zh: "文档与培训",
    },
    description: {
      id: "Setiap serah terima disertai dokumentasi teknis dan sesi pelatihan untuk tim yang akan menggunakan sistem sehari-hari.",
      en: "Every handover includes technical documentation and a training session for the team that will use the system day to day.",
      zh: "每次交付都包含技术文档，以及为日常使用系统的团队提供的培训。",
    },
  },
  {
    title: {
      id: "Estimasi yang jujur",
      en: "Honest estimates",
      zh: "诚实的报价",
    },
    description: {
      id: "Jika sebuah kebutuhan di luar keahlian kami atau tidak realistis dengan anggaran yang ada, kami sampaikan di awal — bukan setelah kontrak berjalan.",
      en: "If a requirement is outside our expertise or unrealistic for the available budget, we say so upfront — not after the contract is underway.",
      zh: "如果某项需求超出我们的专业能力，或与预算不符，我们会提前告知——而不是等合同开始执行后才说。",
    },
  },
  {
    title: {
      id: "Kerahasiaan data",
      en: "Data confidentiality",
      zh: "数据保密",
    },
    description: {
      id: "Data dan proses bisnis klien tidak digunakan untuk keperluan lain. NDA dapat disiapkan sebelum diskusi teknis dimulai.",
      en: "Client data and business processes are never used for other purposes. An NDA can be arranged before technical discussions begin.",
      zh: "客户的数据与业务流程绝不会被用于其他用途。技术讨论开始前可签署保密协议（NDA）。",
    },
  },
  {
    title: {
      id: "Ruang lingkup tertulis",
      en: "Written scope",
      zh: "书面范围界定",
    },
    description: {
      id: "Fitur, timeline, dan batasan project dituangkan dalam proposal sebelum pengerjaan, sehingga tidak ada tafsir ganda di tengah jalan.",
      en: "Features, timeline, and project boundaries are set out in a proposal before work begins, so there's no room for conflicting interpretations mid-project.",
      zh: "功能、工期与项目边界会在开工前写入提案，避免项目中途出现理解分歧。",
    },
  },
  {
    title: {
      id: "Dukungan setelah rilis",
      en: "Post-launch support",
      zh: "上线后支持",
    },
    description: {
      id: "Perbaikan bug dan dukungan teknis pascarilis tersedia melalui paket maintenance, dengan cakupan yang dijelaskan sejak awal.",
      en: "Bug fixes and post-launch technical support are available through maintenance packages, with coverage explained upfront.",
      zh: "上线后的错误修复与技术支持可通过维护套餐获得，服务范围会提前说明清楚。",
    },
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
