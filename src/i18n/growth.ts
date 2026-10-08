import type { Locale } from "./routing";

/** Strings for the lead-capture features (quote buttons, estimator, WhatsApp messages). */
type Growth = {
  waFloating: string;
  waChat: {
    title: string;
    status: string;
    greeting: string;
    close: string;
    humanCta: string;
    back: string;
    handoffAsk: string;
    purposePlaceholder: string;
    handoffSend: string;
    privacy: string;
    /** Stored with the lead so the team knows where it came from. */
    leadNote: string;
  };
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
  toc: string;
  byline: string;
  proof: { clients: string; services: string; languages: string; pricing: string };
  industryCta: string;
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
    waChat: {
      title: "AG·SORA",
      status: "Cari solusi yang pas",
      greeting: "Halo! 👋 Jawab 2 pertanyaan singkat, kami rekomendasikan solusi yang pas untuk bisnis Anda.",
      close: "Tutup chat",
      humanCta: "Bicara dengan tim via WhatsApp",
      back: "Kembali ke chat",
      handoffAsk: "Tinggalkan kontak Anda, lalu tim kami lanjut ngobrol di WhatsApp.",
      purposePlaceholder: "Pilih keperluan",
      handoffSend: "Lanjut ke WhatsApp",
      privacy: "Data Anda hanya dipakai untuk menghubungi Anda.",
      leadNote: "Pengunjung memulai chat lewat widget chat di situs.",
    },
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
    toc: "Isi artikel",
    byline: "Ditulis oleh tim AG·SORA",
    proof: { clients: "klien dipercaya", services: "layanan", languages: "bahasa", pricing: "harga mulai dari tertera" },
    industryCta: "Diskusikan untuk industri Anda",
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
    waChat: {
      title: "AG·SORA",
      status: "Find the right solution",
      greeting: "Hi! 👋 Answer 2 quick questions and we'll recommend the right solution for your business.",
      close: "Close chat",
      humanCta: "Talk to the team on WhatsApp",
      back: "Back to chat",
      handoffAsk: "Leave your contact details and our team will continue on WhatsApp.",
      purposePlaceholder: "Select purpose",
      handoffSend: "Continue to WhatsApp",
      privacy: "Your details are only used to get back to you.",
      leadNote: "Visitor started a chat from the chat widget on the site.",
    },
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
    toc: "In this article",
    byline: "Written by the AG·SORA team",
    proof: { clients: "trusted clients", services: "services", languages: "languages", pricing: "starting prices listed" },
    industryCta: "Discuss it for your industry",
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
    waChat: {
      title: "AG·SORA",
      status: "找到合适的方案",
      greeting: "您好！👋 回答 2 个简单问题，我们将为您的业务推荐合适的方案。",
      close: "关闭聊天",
      humanCta: "通过 WhatsApp 联系团队",
      back: "返回聊天",
      handoffAsk: "请留下联系方式，团队将通过 WhatsApp 与您沟通。",
      purposePlaceholder: "选择需求",
      handoffSend: "前往 WhatsApp",
      privacy: "您的信息仅用于与您联系。",
      leadNote: "访客通过网站上的聊天窗口发起对话。",
    },
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
    toc: "本文目录",
    byline: "AG·SORA 团队撰写",
    proof: { clients: "位受信赖的客户", services: "项服务", languages: "种语言", pricing: "公开起步价" },
    industryCta: "为您的行业洽谈",
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
