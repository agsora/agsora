import type { Locale } from "@/i18n/routing";

type L = Record<Locale, string>;

/** Lead magnet: a vendor-selection checklist, gated behind a short form. */
export type ChecklistSection = { title: L; items: L[] };

export const checklistSections: ChecklistSection[] = [
  {
    title: {
      id: "Pemahaman kebutuhan",
      en: "Understanding your needs",
      zh: "对需求的理解",
    },
    items: [
      {
        id: "Vendor bertanya tentang proses bisnis dan masalah Anda sebelum menyebut harga",
        en: "The vendor asked about your business process and problems before naming a price",
        zh: "供应商在报价之前先询问了您的业务流程与问题",
      },
      {
        id: "Mereka menanyakan siapa pengguna harian sistem dan cara kerja mereka sekarang",
        en: "They asked who will use the system daily and how those people work today",
        zh: "他们询问了系统的日常使用者以及这些人目前的工作方式",
      },
      {
        id: "Mereka menanyakan kasus tidak normal, sistem lama, dan integrasi yang dibutuhkan",
        en: "They asked about edge cases, existing systems, and the integrations you need",
        zh: "他们询问了特殊情况、现有系统以及所需的系统对接",
      },
      {
        id: "Ada kesepakatan tentang ukuran keberhasilan project",
        en: "There is agreement on how the project's success will be measured",
        zh: "对项目成功的衡量标准已达成一致",
      },
    ],
  },
  {
    title: {
      id: "Ruang lingkup dan proposal",
      en: "Scope and proposal",
      zh: "范围与提案",
    },
    items: [
      {
        id: "Proposal menyatakan tertulis apa yang termasuk dan apa yang tidak termasuk",
        en: "The proposal states in writing what is and is not included",
        zh: "提案以书面形式说明了包含和不包含的内容",
      },
      {
        id: "Cara menghitung perubahan kebutuhan di tengah jalan dijelaskan",
        en: "How mid-project changes are priced is explained",
        zh: "已说明项目中途需求变更的计价方式",
      },
      {
        id: "Setiap tahap punya definisi selesai yang jelas",
        en: "Each phase has a clear definition of done",
        zh: "每个阶段都有明确的完成标准",
      },
      {
        id: "Migrasi data, integrasi, dan pelatihan disebut jelas: termasuk atau tidak",
        en: "Data migration, integrations, and training are clearly stated as included or not",
        zh: "数据迁移、系统对接和培训均明确标注是否包含",
      },
    ],
  },
  {
    title: {
      id: "Proses dan komunikasi",
      en: "Process and communication",
      zh: "流程与沟通",
    },
    items: [
      {
        id: "Anda bisa mencoba hasil secara bertahap, bukan baru melihatnya di akhir",
        en: "You can try results step by step instead of seeing them only at the end",
        zh: "您可以分阶段试用成果，而不是到最后才看到",
      },
      {
        id: "Ada satu penanggung jawab dan jadwal komunikasi yang jelas",
        en: "There is a single point of contact and a clear communication rhythm",
        zh: "有唯一的负责人和明确的沟通节奏",
      },
      {
        id: "Pesan Anda dibalas dalam waktu wajar sejak pertemuan pertama",
        en: "They have replied in a reasonable time since the very first meeting",
        zh: "从第一次会面起，他们的回复速度就在合理范围内",
      },
      {
        id: "Mereka jujur tentang batasan dan risiko, bukan hanya menjanjikan yang manis",
        en: "They are honest about limits and risks, not just promising the best case",
        zh: "他们坦诚说明限制与风险，而不只是描绘美好前景",
      },
    ],
  },
  {
    title: {
      id: "Kepemilikan dan keamanan",
      en: "Ownership and security",
      zh: "所有权与安全",
    },
    items: [
      {
        id: "Kepemilikan source code dan data tertulis di kontrak",
        en: "Ownership of source code and data is written in the contract",
        zh: "源代码与数据的所有权已写入合同",
      },
      {
        id: "Akses ke server, domain, dan akun penting tetap atas nama Anda",
        en: "Access to servers, domains, and key accounts stays in your name",
        zh: "服务器、域名和重要账号的权限保留在您名下",
      },
      {
        id: "Ada penjelasan tentang backup, kontrol akses, dan penanganan data pribadi",
        en: "Backups, access control, and handling of personal data are explained",
        zh: "已说明备份、访问控制及个人数据的处理方式",
      },
      {
        id: "Ada dokumentasi sehingga sistem tidak bergantung pada satu orang",
        en: "There is documentation so the system does not depend on one person",
        zh: "提供文档，使系统不依赖于某一个人",
      },
    ],
  },
  {
    title: {
      id: "Dukungan setelah rilis",
      en: "Support after launch",
      zh: "上线后的支持",
    },
    items: [
      {
        id: "Masa garansi dan cakupannya dijelaskan",
        en: "The warranty period and what it covers are explained",
        zh: "已说明保修期及其涵盖范围",
      },
      {
        id: "Ada paket pemeliharaan dengan waktu respons yang jelas",
        en: "A maintenance plan with clear response times is available",
        zh: "提供维护方案，并有明确的响应时间",
      },
      {
        id: "Biaya pengembangan lanjutan dan hosting dijelaskan sejak awal",
        en: "Costs for further development and hosting are explained upfront",
        zh: "后续开发与托管的费用在一开始就已说明",
      },
      {
        id: "Cara melaporkan masalah dan alur eskalasi saat sistem bermasalah dijelaskan",
        en: "How to report problems, and the escalation path when the system fails, is explained",
        zh: "已说明如何报告问题，以及系统出故障时的升级处理流程",
      },
    ],
  },
  {
    title: {
      id: "Bukti dan reputasi",
      en: "Proof and reputation",
      zh: "实绩与口碑",
    },
    items: [
      {
        id: "Portofolio relevan dengan jenis sistem dan skala bisnis Anda",
        en: "The portfolio is relevant to your type of system and business scale",
        zh: "作品集与您的系统类型及业务规模相关",
      },
      {
        id: "Anda bisa berbicara dengan klien sebelumnya",
        en: "You can speak with a previous client",
        zh: "您可以与过往客户交流",
      },
      {
        id: "Identitas perusahaan dan alamat legal jelas dan dapat diverifikasi",
        en: "The company identity and legal address are clear and verifiable",
        zh: "公司身份与法定地址清晰且可核实",
      },
      {
        id: "Estimasi biaya dan waktu masuk akal dibanding vendor lain, dan selisih besar bisa dijelaskan",
        en: "Cost and time estimates are reasonable compared with other vendors, and large gaps can be explained",
        zh: "费用与工期估算相对其他供应商合理，且差距较大时能给出解释",
      },
    ],
  },
];

export const checklistTotal = checklistSections.reduce((n, s) => n + s.items.length, 0);

export type ChecklistStrings = {
  metaTitle: string;
  metaDescription: string;
  navLabel: string;
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  formTitle: string;
  formDescription: string;
  name: string;
  company: string;
  companyOptional: string;
  email: string;
  whatsapp: string;
  submit: string;
  privacy: string;
  privacyLink: string;
  unlockedTitle: string;
  unlockedHint: string;
  progress: (done: number, total: number) => string;
  print: string;
  verdict: { low: string; mid: string; high: string };
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  banner: { title: string; description: string; button: string };
  leadDescription: string;
  leadNeed: string;
};

export const checklistStrings: Record<Locale, ChecklistStrings> = {
  id: {
    metaTitle: "Checklist Memilih Software House (Gratis)",
    metaDescription:
      "Checklist gratis 24 poin untuk menilai software house sebelum menandatangani kontrak: kebutuhan, ruang lingkup, proses, kepemilikan source code, dan dukungan.",
    navLabel: "Checklist",
    eyebrow: "Checklist Gratis",
    heroTitle: "Checklist memilih software house",
    heroDescription:
      "24 pertanyaan praktis untuk menilai calon mitra pengembangan software, dari pertemuan pertama sampai sebelum tanda tangan kontrak.",
    formTitle: "Dapatkan checklist-nya",
    formDescription:
      "Isi data singkat di bawah, lalu checklist langsung terbuka di halaman ini. Anda juga bisa menyimpannya sebagai PDF.",
    name: "Nama",
    company: "Perusahaan",
    companyOptional: "(opsional)",
    email: "Email",
    whatsapp: "Nomor WhatsApp",
    submit: "Buka checklist",
    privacy: "Data Anda hanya dipakai untuk menghubungi Anda soal kebutuhan software. Lihat",
    privacyLink: "Kebijakan Privasi",
    unlockedTitle: "Checklist Anda",
    unlockedHint: "Centang poin yang sudah dipenuhi calon vendor Anda.",
    progress: (done, total) => `${done} dari ${total} poin terpenuhi`,
    print: "Simpan sebagai PDF / cetak",
    verdict: {
      low: "Masih banyak poin yang belum jelas. Tanyakan langsung ke vendor sebelum melangkah lebih jauh.",
      mid: "Cukup baik, tetapi tutup dulu poin yang belum terpenuhi sebelum menandatangani kontrak.",
      high: "Vendor ini memenuhi hampir semua kriteria. Pastikan semuanya tertulis di kontrak.",
    },
    ctaTitle: "Ingin kami yang dinilai?",
    ctaText:
      "Kami bersedia dinilai memakai checklist ini. Ceritakan kebutuhan Anda dan kami jawab setiap poinnya.",
    ctaButton: "Konsultasi gratis",
    banner: {
      title: "Checklist gratis: memilih software house",
      description:
        "24 poin untuk menilai calon vendor sebelum menandatangani kontrak. Bisa disimpan sebagai PDF.",
      button: "Ambil checklist",
    },
    leadDescription: "Mengunduh checklist memilih software house.",
    leadNeed: "Lead magnet: Checklist",
  },
  en: {
    metaTitle: "Checklist: How to Choose a Software House (Free)",
    metaDescription:
      "A free 24-point checklist to evaluate a software house before you sign: needs, scope, process, source code ownership, and support.",
    navLabel: "Checklist",
    eyebrow: "Free Checklist",
    heroTitle: "How to choose a software house: a checklist",
    heroDescription:
      "24 practical questions to evaluate a software development partner, from the first meeting to just before you sign the contract.",
    formTitle: "Get the checklist",
    formDescription:
      "Fill in the short details below and the checklist opens right on this page. You can also save it as a PDF.",
    name: "Name",
    company: "Company",
    companyOptional: "(optional)",
    email: "Email",
    whatsapp: "WhatsApp number",
    submit: "Open the checklist",
    privacy: "Your details are only used to contact you about your software needs. See our",
    privacyLink: "Privacy Policy",
    unlockedTitle: "Your checklist",
    unlockedHint: "Tick the points your candidate vendor already meets.",
    progress: (done, total) => `${done} of ${total} points met`,
    print: "Save as PDF / print",
    verdict: {
      low: "Many points are still unclear. Ask the vendor directly before going further.",
      mid: "Reasonably good, but close the remaining points before you sign.",
      high: "This vendor meets almost every criterion. Make sure it is all written into the contract.",
    },
    ctaTitle: "Want us to be the one you score?",
    ctaText:
      "We are happy to be assessed with this checklist. Tell us what you need and we will answer every point.",
    ctaButton: "Free consultation",
    banner: {
      title: "Free checklist: choosing a software house",
      description:
        "24 points to evaluate a vendor before you sign. Can be saved as a PDF.",
      button: "Get the checklist",
    },
    leadDescription: "Downloaded the software house selection checklist.",
    leadNeed: "Lead magnet: Checklist",
  },
  zh: {
    metaTitle: "如何选择软件公司：免费清单",
    metaDescription:
      "签约前评估软件公司的 24 项免费清单：需求理解、范围、流程、源代码所有权与售后支持。",
    navLabel: "清单",
    eyebrow: "免费清单",
    heroTitle: "如何选择软件公司：评估清单",
    heroDescription:
      "24 个实用问题，帮助您从第一次会面到签约之前评估软件开发合作伙伴。",
    formTitle: "获取清单",
    formDescription:
      "填写下方简单信息，清单将立即在本页打开。您也可以将其保存为 PDF。",
    name: "姓名",
    company: "公司",
    companyOptional: "（选填）",
    email: "邮箱",
    whatsapp: "WhatsApp 号码",
    submit: "打开清单",
    privacy: "您的信息仅用于就您的软件需求与您联系。请见",
    privacyLink: "隐私政策",
    unlockedTitle: "您的清单",
    unlockedHint: "勾选候选供应商已满足的项目。",
    progress: (done, total) => `已满足 ${done} / ${total} 项`,
    print: "保存为 PDF / 打印",
    verdict: {
      low: "仍有许多项目不明确。请先向供应商直接询问，再继续推进。",
      mid: "总体不错，但请在签约前补齐尚未满足的项目。",
      high: "该供应商几乎满足所有标准。请确保一切都写入合同。",
    },
    ctaTitle: "想让我们接受评估吗？",
    ctaText: "我们乐于接受这份清单的评估。告诉我们您的需求，我们会逐项回答。",
    ctaButton: "免费咨询",
    banner: {
      title: "免费清单：如何选择软件公司",
      description: "签约前评估供应商的 24 个要点，可保存为 PDF。",
      button: "获取清单",
    },
    leadDescription: "下载了软件公司选择清单。",
    leadNeed: "Lead magnet: Checklist",
  },
};
