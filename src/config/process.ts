export type ProcessStep = {
  step: string;
  title: string;
  description: { id: string; en: string; zh: string };
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description: {
      id: "Memahami proses bisnis, tantangan, dan tujuan jangka panjang Anda.",
      en: "Understanding your business process, challenges, and long-term goals.",
      zh: "了解您的业务流程、挑战与长期目标。",
    },
  },
  {
    step: "02",
    title: "Design",
    description: {
      id: "Merancang arsitektur sistem dan pengalaman pengguna yang tepat sasaran.",
      en: "Designing the system architecture and a user experience that hits the mark.",
      zh: "设计精准贴合需求的系统架构与用户体验。",
    },
  },
  {
    step: "03",
    title: "Build",
    description: {
      id: "Mengembangkan sistem secara iteratif dengan standar kualitas enterprise.",
      en: "Building the system iteratively to an enterprise-grade quality standard.",
      zh: "以企业级质量标准迭代开发系统。",
    },
  },
  {
    step: "04",
    title: "Launch",
    description: {
      id: "Deploy, migrasi data, dan pelatihan tim untuk adopsi yang mulus.",
      en: "Deployment, data migration, and team training for a smooth rollout.",
      zh: "部署上线、数据迁移与团队培训，确保顺利落地。",
    },
  },
  {
    step: "05",
    title: "Grow",
    description: {
      id: "Dukungan berkelanjutan, optimasi, dan pengembangan fitur baru.",
      en: "Ongoing support, optimization, and new feature development.",
      zh: "持续的支持、优化与新功能开发。",
    },
  },
];

export type ValueProp = {
  title: string;
  description: { id: string; en: string; zh: string };
};

export const valueProps: ValueProp[] = [
  {
    title: "Adaptive Technology",
    description: {
      id: "Sistem yang menyesuaikan cara kerja bisnis Anda, bukan sebaliknya.",
      en: "Systems that adapt to how your business works, not the other way around.",
      zh: "系统适应您的业务运作方式，而非反过来。",
    },
  },
  {
    title: "Integrated Systems",
    description: {
      id: "Setiap modul saling terhubung — data mengalir tanpa silo.",
      en: "Every module is connected — data flows without silos.",
      zh: "各模块相互连接，数据流转无孤岛。",
    },
  },
  {
    title: "Scalable Architecture",
    description: {
      id: "Dibangun untuk tumbuh dari satu cabang hingga skala enterprise.",
      en: "Built to grow from a single branch to enterprise scale.",
      zh: "架构设计支持从单一门店扩展至企业级规模。",
    },
  },
  {
    title: "Customizable Solutions",
    description: {
      id: "Fitur dan workflow disesuaikan dengan kebutuhan spesifik industri Anda.",
      en: "Features and workflows tailored to your industry's specific needs.",
      zh: "功能与工作流程根据您所在行业的具体需求定制。",
    },
  },
  {
    title: "Real Business Impact",
    description: {
      id: "Fokus pada efisiensi, visibilitas, dan pertumbuhan yang terukur.",
      en: "Focused on efficiency, visibility, and measurable growth.",
      zh: "专注于效率提升、可视化管理与可衡量的业务增长。",
    },
  },
];
