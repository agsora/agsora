export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description: "Memahami proses bisnis, tantangan, dan tujuan jangka panjang Anda.",
  },
  {
    step: "02",
    title: "Design",
    description: "Merancang arsitektur sistem dan pengalaman pengguna yang tepat sasaran.",
  },
  {
    step: "03",
    title: "Build",
    description: "Mengembangkan sistem secara iteratif dengan standar kualitas enterprise.",
  },
  {
    step: "04",
    title: "Launch",
    description: "Deploy, migrasi data, dan pelatihan tim untuk adopsi yang mulus.",
  },
  {
    step: "05",
    title: "Grow",
    description: "Dukungan berkelanjutan, optimasi, dan pengembangan fitur baru.",
  },
];

export type ValueProp = {
  title: string;
  description: string;
};

export const valueProps: ValueProp[] = [
  {
    title: "Adaptive Technology",
    description: "Sistem yang menyesuaikan cara kerja bisnis Anda, bukan sebaliknya.",
  },
  {
    title: "Integrated Systems",
    description: "Setiap modul saling terhubung — data mengalir tanpa silo.",
  },
  {
    title: "Scalable Architecture",
    description: "Dibangun untuk tumbuh dari satu cabang hingga skala enterprise.",
  },
  {
    title: "Customizable Solutions",
    description: "Fitur dan workflow disesuaikan dengan kebutuhan spesifik industri Anda.",
  },
  {
    title: "Real Business Impact",
    description: "Fokus pada efisiensi, visibilitas, dan pertumbuhan yang terukur.",
  },
];
