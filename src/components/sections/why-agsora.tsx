"use client";

import { BadgeCheck, CalendarCheck, Code2, Eye, Gauge, ReceiptText, ShieldCheck, Wallet } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { useLocale } from "@/i18n/locale-context";

import { WARRANTY_DAYS } from "@/config/guarantees";

type Lang = "id" | "en" | "zh";
type Row = { label: string; us: string; freelancer: string; agency: string; saas: string };

const COPY: Record<
  Lang,
  { eyebrow: string; title: string; intro: string; points: { title: string; text: string }[]; tableTitle: string; cols: [string, string, string, string, string]; rows: Row[]; note: string }
> = {
  id: {
    eyebrow: "Kenapa AG·SORA",
    title: "Kualitas software house, harga yang masuk akal",
    intro: "Kami bersaing bukan dengan jadi yang termurah, tetapi dengan memberi jaminan yang jarang diberikan pihak lain.",
    points: [
      { title: "PT resmi & kontrak tertulis", text: "Berbadan hukum (NIB & NPWP), perjanjian dwibahasa Indonesia-Inggris, invoice resmi dan administrasi pajak yang tertib." },
      { title: "Harga terbuka di website", text: "Harga mulai dari setiap layanan tercantum jelas, plus kalkulator estimasi. Tanpa biaya tersembunyi." },
      { title: "Source code jadi milik Anda", text: "Setelah lunas, kode sumber dan dokumentasi diserahkan. Anda tidak terkunci pada kami." },
      { title: `Garansi bug ${WARRANTY_DAYS} hari`, text: `Perbaikan bug gratis ${WARRANTY_DAYS} hari setelah serah terima, tiga kali lebih lama dari yang umum di pasar.` },
      { title: "Tanpa biaya per outlet", text: "Sistem kasir, HR, atau CRM milik sendiri. Tidak ada tagihan bulanan per cabang atau per pengguna seperti aplikasi langganan; cukup biaya server yang transparan." },
      { title: "Cepat & teruji", text: "Website 1-2 minggu, sistem bisnis 2-5 minggu. Proses kerja modern dan otomatis, setiap fitur diuji tim sebelum diserahkan." },
      { title: "DP mulai 30%", text: "Bayar 30% - 50% - 20% atau 50% - 50%. Termin ringan mengikuti tahap pekerjaan." },
      { title: "Pantau progres online", text: "Portal klien untuk menyetujui penawaran, melihat tahap proyek, dokumen, dan invoice kapan saja." },
    ],
    tableTitle: "Perbandingan umum di pasar",
    cols: ["", "AG·SORA", "Freelancer", "Software house besar", "Aplikasi langganan"],
    rows: [
      { label: "Badan hukum & kontrak", us: "PT + kontrak dwibahasa", freelancer: "Umumnya tanpa kontrak", agency: "Ada", saas: "Syarat baku" },
      { label: "Harga terlihat sebelum konsultasi", us: "Ya, di website", freelancer: "Bervariasi", agency: "Jarang (by quotation)", saas: "Ya" },
      { label: "Sesuai alur bisnis Anda", us: "Ya, custom", freelancer: "Ya", agency: "Ya, biaya tinggi", saas: "Ikut aplikasi" },
      { label: "Source code milik klien", us: "Ya, setelah lunas", freelancer: "Tergantung", agency: "Sering lisensi", saas: "Tidak" },
      { label: "Biaya bulanan per outlet/pengguna", us: "Tidak ada", freelancer: "Tidak ada", agency: "Tergantung", saas: "Selama dipakai" },
      { label: "Garansi bug", us: `${WARRANTY_DAYS} hari`, freelancer: "Jarang", agency: "Umumnya 30 hari", saas: "-" },
      { label: "Uang muka", us: "Mulai 30%", freelancer: "50-100%", agency: "30-50%", saas: "Bayar di muka" },
      { label: "Pantau progres online", us: "Portal klien", freelancer: "Lewat chat", agency: "Bervariasi", saas: "-" },
    ],
    note: "Perbandingan bersifat umum berdasarkan praktik yang lazim di pasar Indonesia; tiap penyedia bisa berbeda.",
  },
  en: {
    eyebrow: "Why AG·SORA",
    title: "Software-house quality at a sensible price",
    intro: "We don't compete by being the cheapest. We compete with guarantees few others give.",
    points: [
      { title: "Registered company, written contract", text: "A registered Indonesian PT (NIB & tax ID), a bilingual Indonesian-English agreement, formal invoices and orderly tax records." },
      { title: "Prices published on the site", text: "Every service shows its starting price, with an estimate calculator. No hidden costs." },
      { title: "You own the source code", text: "Once paid, the source code and documentation are handed over. You are never locked in." },
      { title: `${WARRANTY_DAYS}-day bug warranty`, text: `Free bug fixes for ${WARRANTY_DAYS} days after handover, three times the market norm.` },
      { title: "No per-outlet fees", text: "Your own POS, HR or CRM system. No monthly bill per branch or per user like subscription apps; only transparent server costs." },
      { title: "Fast & tested", text: "Websites in 1-2 weeks, business systems in 2-5 weeks. A modern, automated workflow, with every feature tested by the team before handover." },
      { title: "From 30% down payment", text: "Pay 30% - 50% - 20% or 50% - 50%, following the project stages." },
      { title: "Track progress online", text: "A client portal to approve the proposal and see project stage, documents and invoices any time." },
    ],
    tableTitle: "How the market usually compares",
    cols: ["", "AG·SORA", "Freelancer", "Large agency", "Subscription app"],
    rows: [
      { label: "Legal entity & contract", us: "PT + bilingual contract", freelancer: "Usually none", agency: "Yes", saas: "Standard terms" },
      { label: "Price visible before a call", us: "Yes, on the site", freelancer: "Varies", agency: "Rarely (by quotation)", saas: "Yes" },
      { label: "Fits your business process", us: "Yes, custom", freelancer: "Yes", agency: "Yes, costly", saas: "You adapt to it" },
      { label: "Client owns the source code", us: "Yes, once paid", freelancer: "Depends", agency: "Often licensed", saas: "No" },
      { label: "Monthly fee per outlet/user", us: "None", freelancer: "None", agency: "Depends", saas: "For as long as you use it" },
      { label: "Bug warranty", us: `${WARRANTY_DAYS} days`, freelancer: "Rare", agency: "Usually 30 days", saas: "-" },
      { label: "Down payment", us: "From 30%", freelancer: "50-100%", agency: "30-50%", saas: "Paid upfront" },
      { label: "Online progress tracking", us: "Client portal", freelancer: "Via chat", agency: "Varies", saas: "-" },
    ],
    note: "A general comparison based on common practice in the Indonesian market; individual providers differ.",
  },
  zh: {
    eyebrow: "为什么选择 AG·SORA",
    title: "软件公司的品质，合理的价格",
    intro: "我们不靠最低价竞争，而是提供少有的保障。",
    points: [
      { title: "正规公司与书面合同", text: "印尼注册 PT（NIB 与税号），印尼语-英语双语合同，正式发票与规范的税务记录。" },
      { title: "网站公开价格", text: "每项服务均标明起步价，并提供估价计算器，无隐藏费用。" },
      { title: "源代码归您所有", text: "付清款项后移交源代码与文档，不会被供应商锁定。" },
      { title: `${WARRANTY_DAYS} 天缺陷保修`, text: `交付后 ${WARRANTY_DAYS} 天免费修复缺陷，是市场常见期限的三倍。` },
      { title: "无按门店收费", text: "自有收银、人事或 CRM 系统，不像订阅应用那样按门店或用户按月收费，只需透明的服务器费用。" },
      { title: "快速且经过测试", text: "网站 1-2 周，业务系统 2-5 周。现代化、自动化的工作流程，每项功能交付前均由团队测试。" },
      { title: "首付低至 30%", text: "按 30%-50%-20% 或 50%-50% 分期，随项目阶段付款。" },
      { title: "在线查看进度", text: "客户门户可随时确认报价、查看项目阶段、文件和发票。" },
    ],
    tableTitle: "市场常见情况对比",
    cols: ["", "AG·SORA", "自由职业者", "大型软件公司", "订阅类应用"],
    rows: [
      { label: "法人与合同", us: "PT + 双语合同", freelancer: "通常没有", agency: "有", saas: "标准条款" },
      { label: "咨询前可见价格", us: "是，网站公开", freelancer: "不一", agency: "很少（需报价）", saas: "是" },
      { label: "贴合业务流程", us: "是，定制", freelancer: "是", agency: "是，费用高", saas: "需适应应用" },
      { label: "源代码归客户", us: "是，付清后", freelancer: "视情况", agency: "多为授权", saas: "否" },
      { label: "按门店/用户月费", us: "无", freelancer: "无", agency: "视情况", saas: "使用期间持续" },
      { label: "缺陷保修", us: `${WARRANTY_DAYS} 天`, freelancer: "很少", agency: "通常 30 天", saas: "-" },
      { label: "首付", us: "30% 起", freelancer: "50-100%", agency: "30-50%", saas: "预付" },
      { label: "在线跟踪进度", us: "客户门户", freelancer: "通过聊天", agency: "不一", saas: "-" },
    ],
    note: "以上为基于印尼市场常见做法的一般性对比，具体供应商可能不同。",
  },
};

const ICONS = [BadgeCheck, Eye, Code2, ShieldCheck, Wallet, Gauge, ReceiptText, CalendarCheck];

/** What sets AG·SORA apart, with a plain comparison table. Shown on the home and pricing pages. */
export function WhyAgsora({ className = "border-t border-line py-20 md:py-28" }: { className?: string }) {
  const { locale } = useLocale();
  const t = COPY[locale as Lang] ?? COPY.id;
  return (
    <Section className={className} id="kenapa-agsora">
      <Container className="max-w-6xl">
        <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">{t.eyebrow}</p>
        <h2 className="mt-3 text-[32px] font-extrabold leading-tight tracking-tight text-ink md:text-[44px]">{t.title}</h2>
        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-ink-muted">{t.intro}</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.points.map((pt, i) => {
            const Icon = ICONS[i];
            return (
              <div key={pt.title} className="rounded-3xl border border-line bg-surface-0 p-6 shadow-card">
                <Icon className="h-5 w-5 text-accent" aria-hidden />
                <h3 className="mt-4 text-[17px] font-bold text-ink">{pt.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{pt.text}</p>
              </div>
            );
          })}
        </div>

        <h3 className="mt-14 text-[22px] font-bold text-ink">{t.tableTitle}</h3>
        <div className="mt-5 overflow-x-auto rounded-3xl border border-line">
          <table className="w-full min-w-[720px] border-collapse text-left text-[14px]">
            <thead>
              <tr className="bg-surface-1 text-ink">
                {t.cols.map((c, i) => (
                  <th key={i} scope="col" className={`px-4 py-3 font-semibold ${i === 1 ? "bg-accent text-white" : ""}`}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.rows.map((r) => (
                <tr key={r.label} className="border-t border-line">
                  <th scope="row" className="px-4 py-3 font-medium text-ink">
                    {r.label}
                  </th>
                  <td className="bg-accent/5 px-4 py-3 font-semibold text-ink">{r.us}</td>
                  <td className="px-4 py-3 text-ink-muted">{r.freelancer}</td>
                  <td className="px-4 py-3 text-ink-muted">{r.agency}</td>
                  <td className="px-4 py-3 text-ink-muted">{r.saas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[12px] text-ink-muted">{t.note}</p>
      </Container>
    </Section>
  );
}
