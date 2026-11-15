/**
 * The careers application questions. Answers are stored by key (e.g. "s1") so the dashboard can show them in Indonesian
 * whatever language the applicant used. Shared by the form, the /api/apply validation and the candidate card.
 */
type L = { id: string; en: string; zh: string };
export type Choice = { key: string; label: L };

const c = (key: string, id: string, en: string, zh: string): Choice => ({ key, label: { id, en, zh } });

export const APPLY_OPTIONS = {
  education: [
    c("sma", "SMA / SMK", "High school", "高中"),
    c("d3", "Diploma (D1–D3)", "Diploma", "大专"),
    c("s1", "Sarjana (S1)", "Bachelor's degree", "本科"),
    c("s2", "Pascasarjana (S2/S3)", "Postgraduate", "研究生"),
  ],
  status: [
    c("employed", "Bekerja penuh waktu", "Employed full-time", "全职工作"),
    c("business", "Punya usaha sendiri", "Running my own business", "自营业务"),
    c("freelance", "Freelance / agen produk lain", "Freelance / agent for other products", "自由职业 / 其他产品代理"),
    c("student", "Mahasiswa", "Student", "学生"),
    c("seeking", "Sedang mencari pekerjaan", "Looking for work", "求职中"),
  ],
  hours: [
    c("lt10", "Kurang dari 10 jam per minggu", "Under 10 hours a week", "每周少于 10 小时"),
    c("10-20", "10–20 jam per minggu", "10–20 hours a week", "每周 10–20 小时"),
    c("20-40", "20–40 jam per minggu", "20–40 hours a week", "每周 20–40 小时"),
    c("full", "Penuh waktu", "Full time", "全职"),
  ],
  salesYears: [
    c("none", "Belum pernah", "None yet", "暂无"),
    c("lt1", "Kurang dari 1 tahun", "Under 1 year", "不到 1 年"),
    c("1-3", "1–3 tahun", "1–3 years", "1–3 年"),
    c("3-5", "3–5 tahun", "3–5 years", "3–5 年"),
    c("gt5", "Lebih dari 5 tahun", "Over 5 years", "5 年以上"),
  ],
  segments: [
    c("umkm", "UMKM / toko", "Small businesses / shops", "小微企业 / 商店"),
    c("fnb", "Restoran & F&B", "Restaurants & F&B", "餐饮"),
    c("health", "Klinik & kesehatan", "Clinics & healthcare", "诊所与医疗"),
    c("education", "Sekolah & kursus", "Schools & courses", "学校与培训"),
    c("distribution", "Distributor & manufaktur", "Distributors & manufacturers", "分销与制造"),
    c("corporate", "Perusahaan / korporat", "Corporates", "企业"),
    c("government", "Instansi / BUMN", "Government / state-owned", "政府 / 国企"),
    c("property", "Properti & konstruksi", "Property & construction", "房地产与建筑"),
  ],
  contacts: [
    c("lt20", "Kurang dari 20", "Fewer than 20", "少于 20"),
    c("20-50", "20–50", "20–50", "20–50"),
    c("50-100", "50–100", "50–100", "50–100"),
    c("gt100", "Lebih dari 100", "More than 100", "100 以上"),
  ],
  heardFrom: [
    c("instagram", "Instagram", "Instagram", "Instagram"),
    c("facebook", "Facebook", "Facebook", "Facebook"),
    c("linkedin", "LinkedIn", "LinkedIn", "LinkedIn"),
    c("tiktok", "TikTok", "TikTok", "TikTok"),
    c("google", "Google / website", "Google / website", "Google / 网站"),
    c("referral", "Teman / referral", "Friend / referral", "朋友推荐"),
    c("whatsapp", "Grup WhatsApp", "WhatsApp group", "WhatsApp 群"),
    c("other", "Lainnya", "Other", "其他"),
  ],
  npwp: [c("yes", "Punya NPWP", "I have a tax ID (NPWP)", "有税号"), c("no", "Belum punya", "Not yet", "暂无")],
} as const;

export type ApplyAnswers = {
  education?: string;
  status?: string;
  hours?: string;
  salesYears?: string;
  products?: string;
  segments?: string[];
  contacts?: string;
  motivation?: string;
  heardFrom?: string;
  npwp?: string;
  commissionOk?: boolean;
};

type OptionKey = keyof typeof APPLY_OPTIONS;
const valid = (k: OptionKey, v: unknown) => typeof v === "string" && APPLY_OPTIONS[k].some((o) => o.key === v);

/** Keep only known option keys and short free text. */
export function cleanAnswers(raw: unknown): ApplyAnswers {
  const o = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const pick = (k: OptionKey) => (valid(k, o[k]) ? (o[k] as string) : undefined);
  const text = (k: string, max: number) => (typeof o[k] === "string" && (o[k] as string).trim() ? (o[k] as string).trim().slice(0, max) : undefined);
  return {
    education: pick("education"),
    status: pick("status"),
    hours: pick("hours"),
    salesYears: pick("salesYears"),
    products: text("products", 300),
    segments: Array.isArray(o.segments) ? (o.segments as unknown[]).filter((s) => valid("segments", s)).slice(0, 8) as string[] : undefined,
    contacts: pick("contacts"),
    motivation: text("motivation", 800),
    heardFrom: pick("heardFrom"),
    npwp: pick("npwp"),
    commissionOk: o.commissionOk === true,
  };
}

/** Indonesian label of an answer, for the dashboard. */
export const answerLabel = (k: OptionKey, v: string | undefined) => (v ? (APPLY_OPTIONS[k].find((x) => x.key === v)?.label.id ?? v) : undefined);

/** One plain-text summary of the answers (used for notes when the answers column does not exist yet). */
export function answersSummary(a: ApplyAnswers) {
  return [
    a.education && `Pendidikan: ${answerLabel("education", a.education)}`,
    a.status && `Status: ${answerLabel("status", a.status)}`,
    a.hours && `Waktu: ${answerLabel("hours", a.hours)}`,
    a.salesYears && `Pengalaman jualan: ${answerLabel("salesYears", a.salesYears)}`,
    a.products && `Pernah menjual: ${a.products}`,
    a.segments?.length && `Segmen: ${a.segments.map((s) => answerLabel("segments", s)).join(", ")}`,
    a.contacts && `Kontak pemilik usaha: ${answerLabel("contacts", a.contacts)}`,
    a.npwp && `NPWP: ${answerLabel("npwp", a.npwp)}`,
    a.heardFrom && `Tahu dari: ${answerLabel("heardFrom", a.heardFrom)}`,
    a.motivation && `Motivasi: ${a.motivation}`,
  ]
    .filter(Boolean)
    .join("\n");
}
