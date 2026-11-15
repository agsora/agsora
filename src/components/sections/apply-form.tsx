"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, FileText, Upload, X } from "lucide-react";
import { APPLY_OPTIONS, type Choice } from "@/config/application-form";
import { readAttribution } from "@/lib/attribution";
import type { JobPost } from "@/lib/recruitment";

type Lang = "id" | "en" | "zh";

const T = {
  id: {
    title: "Formulir lamaran",
    lead: "Isi sekitar 3 menit. Kolom bertanda * wajib diisi.",
    s1: "1. Data diri",
    s2: "2. Pengalaman & jaringan",
    s3: "3. Kesiapan",
    position: "Posisi yang dilamar",
    name: "Nama lengkap *",
    phone: "Nomor WhatsApp aktif *",
    email: "Email",
    city: "Kota domisili *",
    education: "Pendidikan terakhir",
    status: "Kesibukan saat ini",
    salesYears: "Pengalaman berjualan *",
    products: "Produk/jasa yang pernah Anda jual",
    productsPh: "Contoh: asuransi, properti, software kasir",
    experience: "Pencapaian penjualan terbaik Anda",
    experiencePh: "Ceritakan singkat: apa yang dijual, ke siapa, dan hasilnya",
    segments: "Segmen yang bisa Anda jangkau",
    contacts: "Perkiraan jumlah kontak pemilik usaha / pengambil keputusan",
    network: "Calon klien yang sudah terbayang",
    networkPh: "Contoh: 3 klinik di Medan butuh sistem antrian; kenalan pemilik 2 restoran",
    hours: "Waktu yang bisa dialokasikan *",
    npwp: "NPWP",
    heardFrom: "Tahu lowongan ini dari",
    motivation: "Mengapa Anda tertarik menjadi agen AG·SORA?",
    cv: "Link LinkedIn / Instagram / portofolio",
    files: "Unggah dokumen (CV, sertifikat, portofolio)",
    filesHint: "PDF, Word, JPG, atau PNG. Maksimal 3 file, total 4 MB.",
    filesPick: "Pilih file",
    remove: "Hapus",
    fileErr: "File harus PDF, Word, JPG, atau PNG, maksimal 3 file dengan total 4 MB.",
    choose: "Pilih…",
    commissionOk: "Saya memahami ini kemitraan berbasis komisi tanpa gaji tetap, dan semua pembayaran klien langsung ke rekening PT. *",
    consent: "Saya menyetujui data ini dipakai AG·SORA hanya untuk proses rekrutmen. *",
    submit: "Kirim lamaran",
    sending: "Mengirim…",
    done: "Lamaran terkirim. Tim kami akan menghubungi Anda lewat WhatsApp dalam 2 hari kerja untuk wawancara singkat.",
    error: "Lamaran gagal dikirim. Periksa kolom wajib dan nomor WhatsApp, atau hubungi kami lewat WhatsApp.",
  },
  en: {
    title: "Application form",
    lead: "Takes about 3 minutes. Fields marked * are required.",
    s1: "1. About you",
    s2: "2. Experience & network",
    s3: "3. Availability",
    position: "Position",
    name: "Full name *",
    phone: "Active WhatsApp number *",
    email: "Email",
    city: "City you live in *",
    education: "Highest education",
    status: "Current occupation",
    salesYears: "Sales experience *",
    products: "Products or services you have sold",
    productsPh: "E.g. insurance, property, POS software",
    experience: "Your best sales achievement",
    experiencePh: "Briefly: what you sold, to whom, and the result",
    segments: "Segments you can reach",
    contacts: "Approximate number of business owners / decision makers you know",
    network: "Prospects you already have in mind",
    networkPh: "E.g. 3 clinics in Medan needing a queue system",
    hours: "Time you can commit *",
    npwp: "Tax ID (NPWP, for commission tax)",
    heardFrom: "Where did you hear about this role",
    motivation: "Why do you want to be an AG·SORA agent?",
    cv: "LinkedIn / Instagram / portfolio link",
    files: "Upload documents (CV, certificates, portfolio)",
    filesHint: "PDF, Word, JPG or PNG. Up to 3 files, 4 MB in total.",
    filesPick: "Choose files",
    remove: "Remove",
    fileErr: "Files must be PDF, Word, JPG or PNG, up to 3 files and 4 MB in total.",
    choose: "Choose…",
    commissionOk: "I understand this is a commission-only partnership with no fixed salary, and all client payments go directly to the company. *",
    consent: "I agree that AG·SORA uses this data only for recruitment. *",
    submit: "Send application",
    sending: "Sending…",
    done: "Application sent. Our team will contact you on WhatsApp within 2 working days for a short interview.",
    error: "The application could not be sent. Check the required fields and your WhatsApp number, or contact us on WhatsApp.",
  },
  zh: {
    title: "申请表",
    lead: "约需 3 分钟，标 * 为必填。",
    s1: "1. 个人资料",
    s2: "2. 经验与人脉",
    s3: "3. 时间安排",
    position: "申请职位",
    name: "姓名 *",
    phone: "WhatsApp 号码 *",
    email: "邮箱",
    city: "所在城市 *",
    education: "最高学历",
    status: "目前状况",
    salesYears: "销售经验 *",
    products: "曾销售的产品或服务",
    productsPh: "例如：保险、房产、收银软件",
    experience: "最佳销售业绩",
    experiencePh: "简述：卖什么、卖给谁、结果如何",
    segments: "可接触的客户类型",
    contacts: "认识的企业主 / 决策者数量",
    network: "已有的潜在客户",
    networkPh: "例如：棉兰 3 家诊所需要排队系统",
    hours: "可投入时间 *",
    npwp: "税号（NPWP）",
    heardFrom: "从何得知此职位",
    motivation: "为什么想成为 AG·SORA 代理？",
    cv: "LinkedIn / Instagram / 作品集链接",
    files: "上传文件（简历、证书、作品集）",
    filesHint: "PDF、Word、JPG 或 PNG，最多 3 个文件，合计 4 MB。",
    filesPick: "选择文件",
    remove: "删除",
    fileErr: "文件须为 PDF、Word、JPG 或 PNG，最多 3 个，合计 4 MB。",
    choose: "请选择…",
    commissionOk: "我理解这是纯佣金合作，没有固定工资，客户款项直接付至公司账户。*",
    consent: "我同意 AG·SORA 仅将资料用于招聘。*",
    submit: "提交申请",
    sending: "提交中…",
    done: "申请已提交，我们将在 2 个工作日内通过 WhatsApp 联系您安排简短面试。",
    error: "提交失败，请检查必填项与 WhatsApp 号码，或通过 WhatsApp 联系我们。",
  },
} as const;

const MAX_FILES = 3;
const MAX_BYTES = 4 * 1024 * 1024;
const ACCEPT = ".pdf,.doc,.docx,.jpg,.jpeg,.png,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/png";
const ALLOWED = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png"];
const kb = (n: number) => (n >= 1024 * 1024 ? `${(n / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(n / 1024))} KB`);

const field = "w-full rounded-xl border border-line bg-surface-0 px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-accent";
const labelCls = "grid gap-1 text-[13px] font-semibold text-ink-muted";

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className="grid gap-3 rounded-2xl border border-line p-4 md:p-5">
      <legend className="px-1 text-[13px] font-bold uppercase tracking-[0.12em] text-accent">{title}</legend>
      {children}
    </fieldset>
  );
}

function Select({ name, label, options, lang, choose, required }: { name: string; label: string; options: readonly Choice[]; lang: Lang; choose: string; required?: boolean }) {
  return (
    <label className={labelCls}>
      {label}
      <select name={name} required={required} defaultValue="" className={field}>
        <option value="" disabled>
          {choose}
        </option>
        {options.map((o) => (
          <option key={o.key} value={o.key}>
            {o.label[lang]}
          </option>
        ))}
      </select>
    </label>
  );
}

export function ApplyForm({ jobs, jobId, setJobId, lang }: { jobs: JobPost[]; jobId: number | null; setJobId: (id: number) => void; lang: Lang }) {
  const t = T[lang];
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [segments, setSegments] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState(false);
  const isAgent = jobs.find((j) => j.id === jobId)?.kind === "agent";

  function pick(list: FileList | null) {
    const next = [...files, ...Array.from(list ?? [])];
    const ok = next.length <= MAX_FILES && next.every((x) => ALLOWED.includes(x.type)) && next.reduce((n, x) => n + x.size, 0) <= MAX_BYTES;
    setFileError(!ok);
    if (ok) setFiles(next);
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    setState("sending");
    const attr = readAttribution();
    const payload = {
        jobId,
        name: get("name"),
        phone: get("phone"),
        email: get("email"),
        city: get("city"),
        experience: get("experience"),
        network: get("network"),
        cvUrl: get("cv"),
        website: get("website"),
        consent: f.get("consent") === "on",
        source: attr?.source ? `Website (${attr.source})` : "Website",
        answers: {
          education: get("education"),
          status: get("status"),
          hours: get("hours"),
          salesYears: get("salesYears"),
          products: get("products"),
          segments,
          contacts: get("contacts"),
          motivation: get("motivation"),
          heardFrom: get("heardFrom"),
          npwp: get("npwp"),
          commissionOk: f.get("commissionOk") === "on",
        },
    };
    const body = new FormData();
    body.set("data", JSON.stringify(payload));
    for (const file of files) body.append("files", file);
    const res = await fetch("/api/apply", { method: "POST", body }).catch(() => null);
    if (res && !res.ok) {
      const err = String(((await res.json().catch(() => ({}))) as { error?: string }).error ?? "");
      setFileError(err.startsWith("file"));
    }
    setState(res?.ok ? "done" : "error");
  }

  if (state === "done") return <p className="mt-6 rounded-2xl bg-gold/10 p-5 text-[15px] text-ink">{t.done}</p>;

  return (
    <form onSubmit={submit} className="mt-4 grid gap-4">
      <p className="text-[13px] text-ink-subtle">{t.lead}</p>

      <Group title={t.s1}>
        <label className={labelCls}>
          {t.position}
          <select value={jobId ?? ""} onChange={(e) => setJobId(Number(e.target.value))} className={field}>
            {jobs.map((j) => (
              <option key={j.id} value={j.id}>
                {j.title}
              </option>
            ))}
          </select>
        </label>
        <label className={labelCls}>
          {t.name}
          <input name="name" required minLength={2} maxLength={160} autoComplete="name" className={field} />
        </label>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className={labelCls}>
            {t.phone}
            <input name="phone" required inputMode="tel" autoComplete="tel" maxLength={40} placeholder="08…" className={field} />
          </label>
          <label className={labelCls}>
            {t.email}
            <input name="email" type="email" autoComplete="email" maxLength={200} className={field} />
          </label>
        </div>
        <label className={labelCls}>
          {t.city}
          <input name="city" required minLength={2} maxLength={120} autoComplete="address-level2" className={field} />
        </label>
        <div className="grid gap-3 sm:grid-cols-2">
          <Select name="education" label={t.education} options={APPLY_OPTIONS.education} lang={lang} choose={t.choose} />
          <Select name="status" label={t.status} options={APPLY_OPTIONS.status} lang={lang} choose={t.choose} />
        </div>
      </Group>

      <Group title={t.s2}>
        <Select name="salesYears" label={t.salesYears} options={APPLY_OPTIONS.salesYears} lang={lang} choose={t.choose} required />
        <label className={labelCls}>
          {t.products}
          <input name="products" maxLength={300} placeholder={t.productsPh} className={field} />
        </label>
        <label className={labelCls}>
          {t.experience}
          <textarea name="experience" rows={3} maxLength={2000} placeholder={t.experiencePh} className={field} />
        </label>
        <div className={labelCls}>
          {t.segments}
          <div className="flex flex-wrap gap-2">
            {APPLY_OPTIONS.segments.map((o) => {
              const on = segments.includes(o.key);
              return (
                <button
                  key={o.key}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setSegments((s) => (on ? s.filter((x) => x !== o.key) : [...s, o.key]))}
                  className={`rounded-full border px-3 py-1.5 text-[13px] font-medium transition-colors ${on ? "border-accent bg-accent text-white" : "border-line text-ink-muted hover:border-accent"}`}
                >
                  {o.label[lang]}
                </button>
              );
            })}
          </div>
        </div>
        <Select name="contacts" label={t.contacts} options={APPLY_OPTIONS.contacts} lang={lang} choose={t.choose} />
        <label className={labelCls}>
          {t.network}
          <textarea name="network" rows={3} maxLength={2000} placeholder={t.networkPh} className={field} />
        </label>
      </Group>

      <Group title={t.s3}>
        <div className="grid gap-3 sm:grid-cols-2">
          <Select name="hours" label={t.hours} options={APPLY_OPTIONS.hours} lang={lang} choose={t.choose} required />
          <Select name="npwp" label={t.npwp} options={APPLY_OPTIONS.npwp} lang={lang} choose={t.choose} />
        </div>
        <Select name="heardFrom" label={t.heardFrom} options={APPLY_OPTIONS.heardFrom} lang={lang} choose={t.choose} />
        <label className={labelCls}>
          {t.motivation}
          <textarea name="motivation" rows={3} maxLength={800} className={field} />
        </label>
        <label className={labelCls}>
          {t.cv}
          <input name="cv" type="url" maxLength={500} placeholder="https://" className={field} />
        </label>
        <div className={labelCls}>
          {t.files}
          <label className="flex cursor-pointer flex-col items-center gap-1 rounded-xl border border-dashed border-line px-4 py-5 text-center transition-colors hover:border-accent">
            <Upload className="h-5 w-5 text-accent" aria-hidden />
            <span className="text-[14px] font-semibold text-ink">{t.filesPick}</span>
            <span className="text-[12px] font-normal text-ink-subtle">{t.filesHint}</span>
            <input
              type="file"
              multiple
              accept={ACCEPT}
              className="sr-only"
              onChange={(e) => {
                pick(e.target.files);
                e.target.value = "";
              }}
            />
          </label>
          {files.length ? (
            <ul className="grid gap-1.5">
              {files.map((x, i) => (
                <li key={`${x.name}-${i}`} className="flex items-center gap-2 rounded-lg bg-surface-1 px-3 py-2 text-[13px] font-normal text-ink">
                  <FileText className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <span className="min-w-0 flex-1 truncate">{x.name}</span>
                  <span className="text-ink-subtle">{kb(x.size)}</span>
                  <button type="button" onClick={() => setFiles(files.filter((_, j) => j !== i))} aria-label={`${t.remove} ${x.name}`} className="rounded p-0.5 text-ink-subtle hover:text-red-600">
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
          {fileError ? <p className="text-[12px] font-normal text-red-600">{t.fileErr}</p> : null}
        </div>
      </Group>

      <div className="grid gap-2 text-[14px] text-ink">
        {isAgent ? (
          <label className="flex items-start gap-3">
            <input type="checkbox" name="commissionOk" required className="mt-1 h-4 w-4 accent-[var(--color-accent,#1d4ed8)]" />
            <span>{t.commissionOk}</span>
          </label>
        ) : null}
        <label className="flex items-start gap-3">
          <input type="checkbox" name="consent" required className="mt-1 h-4 w-4" />
          <span>{t.consent}</span>
        </label>
      </div>

      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0" />
      {state === "error" ? <p className="text-[13px] text-red-600">{t.error}</p> : null}
      <button disabled={state === "sending" || !jobId} className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-[15px] font-bold text-surface-0 disabled:opacity-60">
        {state === "sending" ? t.sending : t.submit}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
