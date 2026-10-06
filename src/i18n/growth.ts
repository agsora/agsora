import type { Locale } from "./routing";

/** Strings for the lead-capture features (quote buttons, estimator, WhatsApp messages). */
type Growth = {
  waFloating: string;
  waLead: {
    intro: string;
    name: string;
    company: string;
    email: string;
    whatsapp: string;
    need: string;
    budget: string;
    plan: string;
    page: string;
    description: string;
  };
  requestQuote: string;
  selectedPlan: string;
  copyNumber: string;
  copied: string;
  estimator: {
    eyebrow: string;
    title: string;
    description: string;
    oneTime: string;
    monthly: string;
    note: string;
    empty: string;
    cta: string;
  };
};

export const growth: Record<Locale, Growth> = {
  id: {
    waFloating: "Halo AG·SORA, saya ingin berdiskusi tentang kebutuhan software bisnis saya. Saya melihat halaman ini:",
    waLead: {
      intro: "Halo AG·SORA, saya ingin berkonsultasi:",
      name: "Nama",
      company: "Perusahaan",
      email: "Email",
      whatsapp: "WhatsApp",
      need: "Jenis kebutuhan",
      budget: "Budget range",
      plan: "Paket diminati",
      page: "Halaman asal",
      description: "Deskripsi project",
    },
    requestQuote: "Minta penawaran",
    selectedPlan: "Paket dipilih",
    copyNumber: "Salin nomor",
    copied: "Tersalin",
    estimator: {
      eyebrow: "Estimasi Biaya",
      title: "Hitung perkiraan investasi Anda",
      description:
        "Pilih layanan yang Anda butuhkan. Total di bawah adalah harga mulai dari, bukan penawaran final.",
      oneTime: "Estimasi mulai dari",
      monthly: "Biaya bulanan",
      note: "Harga final menyesuaikan fitur, jumlah user, integrasi, dan timeline.",
      empty: "Pilih minimal satu layanan",
      cta: "Minta penawaran untuk pilihan ini",
    },
  },
  en: {
    waFloating: "Hi AG·SORA, I'd like to talk about my business software needs. I'm viewing this page:",
    waLead: {
      intro: "Hi AG·SORA, I'd like to book a consultation:",
      name: "Name",
      company: "Company",
      email: "Email",
      whatsapp: "WhatsApp",
      need: "Type of need",
      budget: "Budget range",
      plan: "Plan of interest",
      page: "Came from",
      description: "Project description",
    },
    requestQuote: "Request a quote",
    selectedPlan: "Selected plan",
    copyNumber: "Copy number",
    copied: "Copied",
    estimator: {
      eyebrow: "Cost Estimator",
      title: "Estimate your investment",
      description:
        "Pick the services you need. The total below is a starting price, not a final quote.",
      oneTime: "Estimated starting from",
      monthly: "Monthly cost",
      note: "Final pricing depends on features, number of users, integrations, and timeline.",
      empty: "Select at least one service",
      cta: "Request a quote for this selection",
    },
  },
  zh: {
    waFloating: "您好 AG·SORA，我想咨询企业软件需求。我正在浏览此页面：",
    waLead: {
      intro: "您好 AG·SORA，我想预约咨询：",
      name: "姓名",
      company: "公司",
      email: "邮箱",
      whatsapp: "WhatsApp",
      need: "需求类型",
      budget: "预算范围",
      plan: "感兴趣的方案",
      page: "来源页面",
      description: "项目描述",
    },
    requestQuote: "获取报价",
    selectedPlan: "已选方案",
    copyNumber: "复制号码",
    copied: "已复制",
    estimator: {
      eyebrow: "费用估算",
      title: "估算您的投入",
      description: "选择您需要的服务。下方总额为起步价，并非最终报价。",
      oneTime: "预计起步价",
      monthly: "每月费用",
      note: "最终价格取决于功能、用户数量、系统对接与时间安排。",
      empty: "请至少选择一项服务",
      cta: "为所选服务获取报价",
    },
  },
};
