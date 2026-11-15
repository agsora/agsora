"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, BadgeCheck, Banknote, CalendarCheck, CheckCircle2, Clock, Handshake, MapPin, Target, TrendingUp, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useContact } from "@/components/site-data";
import { AGENT_PROGRAM, commissionFor } from "@/config/agent-program";
import { useLocale } from "@/i18n/locale-context";
import { readAttribution } from "@/lib/attribution";
import type { JobPost } from "@/lib/recruitment";
import { formatRupiah } from "@/lib/utils";

type Lang = "id" | "en" | "zh";
const target = AGENT_PROGRAM.monthlyTarget;

const COPY = {
  id: {
    eyebrow: "Karier & kemitraan",
    title: "Jadi Agen Sales AG·SORA",
    lead: `Jual website, aplikasi, dan sistem bisnis dari software house resmi. Komisi ${AGENT_PROGRAM.rateFull}% dari omzet bila mencapai ${formatRupiah(target, "id")} per bulan, dan tetap ${AGENT_PROGRAM.rateReduced}% bila di bawah target.`,
    apply: "Lamar sekarang",
    how: "Cara kerja komisi",
    howCards: [
      { t: `${AGENT_PROGRAM.rateFull}% saat target tercapai`, d: `Omzet klien Anda dalam sebulan ≥ ${formatRupiah(target, "id")}: komisi ${AGENT_PROGRAM.rateFull}% dari seluruh omzet bulan itu.` },
      { t: `${AGENT_PROGRAM.rateReduced}% di bawah target`, d: `Belum mencapai target tetap dibayar ${AGENT_PROGRAM.rateReduced}% dari omzet. Tidak ada bulan yang kosong selama klien membayar.` },
      { t: `Cair tanggal ${AGENT_PROGRAM.payoutDay}`, d: `Komisi dihitung per bulan dari pembayaran yang benar-benar diterima, dibayar paling lambat tanggal ${AGENT_PROGRAM.payoutDay} bulan berikutnya.` },
    ],
    simTitle: "Simulasi penghasilan per bulan",
    simCols: ["Omzet klien Anda", "Tarif", "Komisi"],
    simNote: "Omzet = pembayaran klien yang diterima perusahaan, sebelum PPN. Komisi dipotong PPh 21 sesuai ketentuan.",
    whyTitle: "Kenapa produk ini mudah dijual",
    why: ["Harga terbuka di website, klien bisa cek sendiri", "PT resmi dengan kontrak dwibahasa", "Garansi bug 90 hari dan source code milik klien", "54+ layanan: dari website Rp3,5 jt hingga ERP", "Tim kami yang presentasi teknis dan membuat proposal", "Dashboard progres untuk klien"],
    whoTitle: "Siapa yang cocok",
    who: ["Punya jaringan pemilik usaha, UMKM, atau perusahaan", "Terbiasa berjualan B2B atau jasa", "Bisa bekerja mandiri, dari kota mana pun", "Tidak perlu latar belakang teknis"],
    stepsTitle: "Proses bergabung",
    steps: ["Isi formulir lamaran", "Wawancara singkat online", "Tanda tangan perjanjian kemitraan", "Dapat kode agen, materi, dan daftar harga", "Mulai daftarkan calon klien"],
    jobsTitle: "Lowongan terbuka",
    noJobs: "Belum ada lowongan yang dibuka. Hubungi kami lewat WhatsApp bila tertarik menjadi agen.",
    formTitle: "Formulir lamaran",
    position: "Posisi",
    name: "Nama lengkap",
    phone: "WhatsApp",
    email: "Email (opsional)",
    city: "Kota",
    experience: "Pengalaman berjualan (singkat)",
    network: "Jaringan atau calon klien yang Anda miliki",
    cv: "Link CV / LinkedIn / Instagram (opsional)",
    submit: "Kirim lamaran",
    sending: "Mengirim…",
    done: "Lamaran terkirim. Tim kami akan menghubungi Anda lewat WhatsApp dalam 2 hari kerja.",
    error: "Lamaran gagal dikirim. Periksa nama dan nomor WhatsApp, atau hubungi kami lewat WhatsApp.",
    consent: "Data Anda hanya dipakai untuk proses rekrutmen.",
    faqTitle: "Pertanyaan umum",
    faq: [
      ["Apakah ini pekerjaan tetap bergaji?", "Bukan. Ini kemitraan independen berbasis komisi: tidak ada gaji tetap, tidak ada jam kerja, dan Anda boleh punya pekerjaan lain."],
      ["Bagaimana klien tercatat atas nama saya?", `Klien tercatat atas nama Anda bila Anda yang pertama mendaftarkannya ke kami dan klien menandatangani penawaran dalam ${AGENT_PROGRAM.attributionDays} hari.`],
      ["Proyek dibayar bertahap, kapan komisinya?", "Setiap kali termin dibayar klien, termin itu masuk omzet bulan tersebut. Jadi satu proyek bisa menghasilkan komisi beberapa bulan."],
      ["Apakah saya perlu menagih atau menerima uang klien?", "Tidak boleh. Semua pembayaran langsung ke rekening PT. Tugas Anda memperkenalkan dan mendampingi klien."],
    ],
  },
  en: {
    eyebrow: "Careers & partnership",
    title: "Become an AG·SORA Sales Agent",
    lead: `Sell websites, apps and business systems from a registered software house. Earn ${AGENT_PROGRAM.rateFull}% commission when your clients reach ${formatRupiah(target, "en")} a month, and ${AGENT_PROGRAM.rateReduced}% below target.`,
    apply: "Apply now",
    how: "How commission works",
    howCards: [
      { t: `${AGENT_PROGRAM.rateFull}% on target`, d: `When your clients' revenue in a month is ${formatRupiah(target, "en")} or more, you earn ${AGENT_PROGRAM.rateFull}% of that month's revenue.` },
      { t: `${AGENT_PROGRAM.rateReduced}% below target`, d: `Below target you still earn ${AGENT_PROGRAM.rateReduced}% of revenue. No empty months while clients pay.` },
      { t: `Paid by the ${AGENT_PROGRAM.payoutDay}th`, d: `Calculated monthly from payments actually received, paid by the ${AGENT_PROGRAM.payoutDay}th of the following month.` },
    ],
    simTitle: "Monthly earnings example",
    simCols: ["Your clients' revenue", "Rate", "Commission"],
    simNote: "Revenue = client payments received by the company, before VAT. Commission is subject to income tax withholding.",
    whyTitle: "Why it is easy to sell",
    why: ["Prices published on the website", "Registered company with bilingual contracts", "90-day bug warranty; clients own the source code", "54+ services, from websites to ERP", "Our team handles technical demos and proposals", "A progress dashboard for clients"],
    whoTitle: "Who it suits",
    who: ["You know business owners, SMEs or companies", "Experienced in B2B or service sales", "Able to work independently, from any city", "No technical background needed"],
    stepsTitle: "How to join",
    steps: ["Fill in the application", "Short online interview", "Sign the partnership agreement", "Receive your agent code, materials and price list", "Start registering prospects"],
    jobsTitle: "Open positions",
    noJobs: "No positions are open right now. Reach us on WhatsApp if you are interested in becoming an agent.",
    formTitle: "Application form",
    position: "Position",
    name: "Full name",
    phone: "WhatsApp",
    email: "Email (optional)",
    city: "City",
    experience: "Sales experience (brief)",
    network: "Your network or prospects",
    cv: "CV / LinkedIn / Instagram link (optional)",
    submit: "Send application",
    sending: "Sending…",
    done: "Application sent. Our team will contact you on WhatsApp within 2 working days.",
    error: "The application could not be sent. Check your name and WhatsApp number, or contact us on WhatsApp.",
    consent: "Your data is used only for recruitment.",
    faqTitle: "FAQ",
    faq: [
      ["Is this a salaried job?", "No. It is an independent, commission-only partnership: no fixed salary or hours, and you may keep other work."],
      ["How is a client credited to me?", `When you are the first to register the client with us and they sign a quotation within ${AGENT_PROGRAM.attributionDays} days.`],
      ["Projects are paid in instalments; when do I earn?", "Each instalment counts toward the month it is paid, so one project can earn commission over several months."],
      ["Do I collect money from clients?", "No. All payments go directly to the company account. Your role is to introduce and support the client."],
    ],
  },
  zh: {
    eyebrow: "职业与合作",
    title: "成为 AG·SORA 销售代理",
    lead: `销售正规软件公司的网站、应用与业务系统。月营收达到 ${formatRupiah(target, "zh")} 可获 ${AGENT_PROGRAM.rateFull}% 佣金，未达标亦可获 ${AGENT_PROGRAM.rateReduced}%。`,
    apply: "立即申请",
    how: "佣金规则",
    howCards: [
      { t: `达标 ${AGENT_PROGRAM.rateFull}%`, d: `当月客户营收达到 ${formatRupiah(target, "zh")} 或以上，获得当月营收 ${AGENT_PROGRAM.rateFull}% 佣金。` },
      { t: `未达标 ${AGENT_PROGRAM.rateReduced}%`, d: `未达标仍可获得营收的 ${AGENT_PROGRAM.rateReduced}%。` },
      { t: `每月 ${AGENT_PROGRAM.payoutDay} 日前发放`, d: `按实际收到的付款每月计算，于次月 ${AGENT_PROGRAM.payoutDay} 日前发放。` },
    ],
    simTitle: "月收入示例",
    simCols: ["客户营收", "比例", "佣金"],
    simNote: "营收指公司实际收到的客户付款（不含增值税）。佣金需依法代扣个人所得税。",
    whyTitle: "为什么容易销售",
    why: ["网站公开价格", "正规公司与双语合同", "90 天缺陷保修，源代码归客户", "54+ 项服务", "技术演示与方案由我们团队负责", "客户进度门户"],
    whoTitle: "适合人群",
    who: ["拥有企业主或公司人脉", "有 B2B 或服务销售经验", "可在任何城市独立工作", "无需技术背景"],
    stepsTitle: "加入流程",
    steps: ["填写申请", "简短线上面试", "签署合作协议", "获得代理编号、资料与价格表", "开始登记潜在客户"],
    jobsTitle: "开放职位",
    noJobs: "目前暂无开放职位，如有兴趣请通过 WhatsApp 联系我们。",
    formTitle: "申请表",
    position: "职位",
    name: "姓名",
    phone: "WhatsApp",
    email: "邮箱（可选）",
    city: "城市",
    experience: "销售经验（简述）",
    network: "您的人脉或潜在客户",
    cv: "简历 / LinkedIn / Instagram 链接（可选）",
    submit: "提交申请",
    sending: "提交中…",
    done: "申请已提交，我们将在 2 个工作日内通过 WhatsApp 联系您。",
    error: "提交失败，请检查姓名与 WhatsApp 号码，或通过 WhatsApp 联系我们。",
    consent: "您的资料仅用于招聘。",
    faqTitle: "常见问题",
    faq: [
      ["这是有固定工资的工作吗？", "不是。这是独立的纯佣金合作，没有固定工资和工作时间。"],
      ["客户如何算在我名下？", `由您首先向我们登记，且客户在 ${AGENT_PROGRAM.attributionDays} 天内签署报价。`],
      ["项目分期付款，佣金何时计算？", "每期付款计入付款当月营收。"],
      ["需要向客户收款吗？", "不可以，所有款项直接付至公司账户。"],
    ],
  },
} as const;

const SIM = [50_000_000, 90_000_000, 100_000_000, 200_000_000, 500_000_000];
const WHY_ICONS = [BadgeCheck, Handshake, CheckCircle2, TrendingUp, Users, CalendarCheck];

export function CareersBody({ jobs }: { jobs: JobPost[] }) {
  const { locale } = useLocale();
  const lang = (["id", "en", "zh"].includes(locale) ? locale : "id") as Lang;
  const c = COPY[lang];
  const contact = useContact();
  const [jobId, setJobId] = useState<number | null>(jobs.find((j) => j.kind === "agent")?.id ?? jobs[0]?.id ?? null);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    setState("sending");
    const a = readAttribution();
    const res = await fetch("/api/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jobId,
        name: get("name"),
        phone: get("phone"),
        email: get("email"),
        city: get("city"),
        experience: get("experience"),
        network: get("network"),
        cvUrl: get("cv"),
        website: get("website"),
        source: a?.source ? `Website (${a.source})` : "Website",
      }),
    }).catch(() => null);
    setState(res?.ok ? "done" : "error");
  }

  const field = "w-full rounded-xl border border-line bg-surface-0 px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-accent";

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-gold/25 blur-[140px]" />
          <div className="absolute -left-40 bottom-[-12rem] h-[460px] w-[460px] rounded-full bg-[#3a5fb4]/30 blur-[140px]" />
        </div>
        <Container className="relative max-w-6xl pb-20 pt-16 md:pb-28 md:pt-24">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {c.eyebrow}
          </p>
          <h1 className="headline mt-6 max-w-3xl text-balance text-[38px] font-extrabold leading-[1.05] sm:text-[52px] md:text-[64px]">{c.title}</h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/75 md:text-[19px]">{c.lead}</p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a href="#lamar" className="focus-ring inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[15px] font-bold text-navy transition-transform hover:-translate-y-0.5">
              {c.apply}
              <ArrowRight className="h-4 w-4" />
            </a>
            <div className="flex gap-6 text-white/80">
              <span>
                <strong className="block text-[28px] text-white">{AGENT_PROGRAM.rateFull}%</strong>
                <span className="text-[12px]">≥ {formatRupiah(target, locale)}</span>
              </span>
              <span>
                <strong className="block text-[28px] text-white">{AGENT_PROGRAM.rateReduced}%</strong>
                <span className="text-[12px]">{"<"} target</span>
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="max-w-6xl">
          <h2 className="text-[30px] font-extrabold tracking-tight text-ink md:text-[40px]">{c.how}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {c.howCards.map((card, i) => {
              const Icon = [Target, TrendingUp, Banknote][i];
              return (
                <div key={card.t} className="rounded-3xl border border-line bg-surface-0 p-7 shadow-card">
                  <Icon className="h-5 w-5 text-accent" aria-hidden />
                  <h3 className="mt-4 text-[18px] font-bold text-ink">{card.t}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{card.d}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-line">
            <div className="bg-surface-1 px-6 py-4 text-[16px] font-bold text-ink">{c.simTitle}</div>
            <table className="w-full text-[15px]">
              <thead>
                <tr className="text-left text-[12px] uppercase tracking-wider text-ink-subtle">
                  {c.simCols.map((col, i) => (
                    <th key={col} className={`px-6 py-3 font-semibold ${i ? "text-right" : ""}`}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SIM.map((rev) => {
                  const r = commissionFor(rev);
                  return (
                    <tr key={rev} className={`border-t border-line ${r.hit ? "bg-gold/5" : ""}`}>
                      <td className="px-6 py-3 tabular-nums text-ink">{formatRupiah(rev, locale)}</td>
                      <td className="px-6 py-3 text-right tabular-nums text-ink-muted">{r.rate}%</td>
                      <td className="px-6 py-3 text-right font-bold tabular-nums text-ink">{formatRupiah(r.amount, locale)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className="border-t border-line px-6 py-3 text-[12px] text-ink-subtle">{c.simNote}</p>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface-1 py-20 md:py-24">
        <Container className="grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-[26px] font-extrabold tracking-tight text-ink md:text-[32px]">{c.whyTitle}</h2>
            <ul className="mt-6 space-y-3">
              {c.why.map((w, i) => {
                const Icon = WHY_ICONS[i];
                return (
                  <li key={w} className="flex items-start gap-3 text-[15px] text-ink-muted">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    {w}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 className="text-[26px] font-extrabold tracking-tight text-ink md:text-[32px]">{c.whoTitle}</h2>
            <ul className="mt-6 space-y-3">
              {c.who.map((w) => (
                <li key={w} className="flex items-start gap-3 text-[15px] text-ink-muted">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  {w}
                </li>
              ))}
            </ul>
            <h3 className="mt-10 text-[18px] font-bold text-ink">{c.stepsTitle}</h3>
            <ol className="mt-4 space-y-2">
              {c.steps.map((s, i) => (
                <li key={s} className="flex items-center gap-3 text-[15px] text-ink-muted">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-[12px] font-bold text-white">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section id="lamar" className="scroll-mt-20 py-20 md:py-24">
        <Container className="grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-[26px] font-extrabold tracking-tight text-ink md:text-[32px]">{c.jobsTitle}</h2>
            {jobs.length === 0 ? (
              <p className="mt-6 text-[15px] text-ink-muted">
                {c.noJobs}{" "}
                <a href={contact.whatsappHref} className="font-semibold text-accent underline">
                  WhatsApp {contact.whatsappNumber}
                </a>
              </p>
            ) : (
              <div className="mt-6 space-y-3">
                {jobs.map((j) => (
                  <button
                    key={j.id}
                    type="button"
                    onClick={() => setJobId(j.id)}
                    className={`w-full rounded-2xl border p-5 text-left transition-colors ${jobId === j.id ? "border-accent bg-gold/5" : "border-line bg-surface-0 hover:border-line-strong"}`}
                  >
                    <strong className="text-[17px] text-ink">{j.title}</strong>
                    <div className="mt-1 flex flex-wrap gap-x-4 text-[13px] text-ink-subtle">
                      {j.location ? (
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" /> {j.location}
                        </span>
                      ) : null}
                      {j.department ? (
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" /> {j.department}
                        </span>
                      ) : null}
                    </div>
                    {j.summary ? <p className="mt-2 text-[14px] text-ink-muted">{j.summary}</p> : null}
                    {jobId === j.id && j.description ? (
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-[14px] text-ink-muted">
                        {j.description
                          .split("\n")
                          .map((l) => l.replace(/^[-•*]\s*/, "").trim())
                          .filter(Boolean)
                          .map((l) => (
                            <li key={l}>{l}</li>
                          ))}
                      </ul>
                    ) : null}
                  </button>
                ))}
              </div>
            )}
          </div>

          {jobs.length ? (
            <div className="rounded-[28px] border border-line bg-surface-0 p-7 shadow-elev md:p-8">
              <h2 className="text-[22px] font-bold text-ink">{c.formTitle}</h2>
              {state === "done" ? (
                <p className="mt-6 rounded-2xl bg-gold/10 p-5 text-[15px] text-ink">{c.done}</p>
              ) : (
                <form onSubmit={submit} className="mt-6 grid gap-3">
                  <label className="text-[13px] font-semibold text-ink-muted">
                    {c.position}
                    <select value={jobId ?? ""} onChange={(e) => setJobId(Number(e.target.value))} className={`${field} mt-1`}>
                      {jobs.map((j) => (
                        <option key={j.id} value={j.id}>
                          {j.title}
                        </option>
                      ))}
                    </select>
                  </label>
                  <input name="name" required minLength={2} maxLength={160} placeholder={c.name} className={field} />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input name="phone" required inputMode="tel" maxLength={40} placeholder={c.phone} className={field} />
                    <input name="city" maxLength={120} placeholder={c.city} className={field} />
                  </div>
                  <input name="email" type="email" maxLength={200} placeholder={c.email} className={field} />
                  <textarea name="experience" rows={3} maxLength={2000} placeholder={c.experience} className={field} />
                  <textarea name="network" rows={3} maxLength={2000} placeholder={c.network} className={field} />
                  <input name="cv" maxLength={500} placeholder={c.cv} className={field} />
                  <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0" />
                  {state === "error" ? <p className="text-[13px] text-red-600">{c.error}</p> : null}
                  <button disabled={state === "sending" || !jobId} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-[15px] font-bold text-surface-0 disabled:opacity-60">
                    {state === "sending" ? c.sending : c.submit}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="text-[12px] text-ink-subtle">{c.consent}</p>
                </form>
              )}
            </div>
          ) : null}
        </Container>
      </section>

      <section className="border-t border-line pb-24 pt-20">
        <Container className="max-w-4xl">
          <h2 className="text-[26px] font-extrabold tracking-tight text-ink md:text-[32px]">{c.faqTitle}</h2>
          <div className="mt-6 divide-y divide-line rounded-3xl border border-line">
            {c.faq.map(([q, a]) => (
              <details key={q} className="group px-6 py-5">
                <summary className="cursor-pointer list-none text-[16px] font-semibold text-ink">{q}</summary>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
