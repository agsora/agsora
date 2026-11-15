/**
 * Photo and closest live demo per industry (photos: Unsplash, self-hosted in /public/industries, see SOURCES.txt).
 */
export const industryVisuals: Record<string, { photo: string; demo: string }> = {
  ritel: { photo: "/industries/ritel.webp", demo: "kasir" },
  kuliner: { photo: "/industries/kuliner.webp", demo: "restoran" },
  distribusi: { photo: "/industries/distribusi.webp", demo: "dashboard" },
  transportasi: { photo: "/industries/transportasi.webp", demo: "dashboard" },
  sekolah: { photo: "/industries/sekolah.webp", demo: "sekolah" },
  klinik: { photo: "/industries/klinik.webp", demo: "klinik" },
  koperasi: { photo: "/industries/koperasi.webp", demo: "dashboard" },
  laundry: { photo: "/industries/laundry.webp", demo: "kasir" },
  manufaktur: { photo: "/industries/manufaktur.webp", demo: "dashboard" },
  "jasa-profesional": { photo: "/industries/jasa-profesional.webp", demo: "korporat" },
  umkm: { photo: "/industries/umkm.webp", demo: "toko-online" },
  korporasi: { photo: "/industries/korporasi.webp", demo: "korporat" },
};

/** Copy for the industries index and the hero of each industry page. */
export const industryUi = {
  id: {
    statIndustries: "industri dilayani",
    statClients: "klien",
    statModules: "modul siap dirangkai",
    jump: "Langsung ke:",
    modules: "Modul utama",
    solutions: "Lihat solusi",
    demo: "Coba demo",
    demosTitle: "Lihat dulu sistemnya, sebelum memutuskan.",
    demosLead: "Coba langsung contoh kasir, dashboard ERP, website klinik, sekolah, dan toko online di HP atau laptop Anda.",
    demosCta: "Buka halaman demo",
    weBuild: "Yang kami bangun",
    demoFor: "Coba demo terkait",
  },
  en: {
    statIndustries: "industries served",
    statClients: "clients",
    statModules: "ready-made modules",
    jump: "Jump to:",
    modules: "Core modules",
    solutions: "See solutions",
    demo: "Try the demo",
    demosTitle: "See the system before you decide.",
    demosLead: "Try live examples of a POS, ERP dashboard, clinic, school and online store on your phone or laptop.",
    demosCta: "Open the demos",
    weBuild: "What we build",
    demoFor: "Try a related demo",
  },
  zh: {
    statIndustries: "个服务行业",
    statClients: "客户",
    statModules: "个可组合模块",
    jump: "快速跳转：",
    modules: "核心模块",
    solutions: "查看方案",
    demo: "体验演示",
    demosTitle: "先看系统，再做决定。",
    demosLead: "在手机或电脑上直接体验收银、ERP 仪表盘、诊所、学校与网上商店示例。",
    demosCta: "打开演示页面",
    weBuild: "我们构建的系统",
    demoFor: "体验相关演示",
  },
} as const;
