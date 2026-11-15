"use client";

import { BadgeCheck, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { DarkHero } from "@/components/sections/dark-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CopyNumber } from "@/components/sections/copy-number";
import { ContactForm } from "@/components/sections/contact-form";
import { useLocale } from "@/i18n/locale-context";
import { useContact } from "@/components/site-data";

const UI = {
  id: {
    hours: "Konsultasi",
    hoursValue: "Gratis & tanpa komitmen",
    private: "Data Anda tidak dibagikan ke pihak lain.",
    nextTitle: "Setelah Anda mengirim pesan",
    next: [
      { t: "Kami pelajari kebutuhan Anda", d: "Tim membaca detail yang Anda isi dan menyiapkan pertanyaan yang relevan." },
      { t: "Diskusi gratis 30 menit", d: "Lewat WhatsApp, telepon, atau video call untuk memahami alur kerja bisnis Anda." },
      { t: "Proposal & estimasi tertulis", d: "Ruang lingkup, harga, jadwal, dan skema pembayaran 50/50 atau 30/50/20." },
    ],
    formTitle: "Ceritakan kebutuhan Anda",
  },
  en: {
    hours: "Consultation",
    hoursValue: "Free, no commitment",
    private: "We never share your details with third parties.",
    nextTitle: "After you send a message",
    next: [
      { t: "We study your needs", d: "The team reads your details and prepares the right questions." },
      { t: "A free 30-minute call", d: "On WhatsApp, phone or video, to understand how your business works." },
      { t: "Written proposal & estimate", d: "Scope, price, timeline and a 50/50 or 30/50/20 payment plan." },
    ],
    formTitle: "Tell us what you need",
  },
  zh: {
    hours: "咨询",
    hoursValue: "免费，无需承诺",
    private: "您的资料不会提供给任何第三方。",
    nextTitle: "提交信息之后",
    next: [
      { t: "我们研究您的需求", d: "团队阅读您填写的内容并准备相关问题。" },
      { t: "30 分钟免费沟通", d: "通过 WhatsApp、电话或视频了解您的业务流程。" },
      { t: "书面方案与报价", d: "范围、价格、进度，以及 50/50 或 30/50/20 付款方式。" },
    ],
    formTitle: "告诉我们您的需求",
  },
} as const;

export function ContactBody() {
  const { t, locale } = useLocale();
  const ui = UI[locale];
  const contact = useContact();
  const card = "flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur";

  return (
    <>
      <DarkHero trail={[{ name: t.nav.contact, href: "/contact" }]} eyebrow={t.pageEyebrows.contact} title={t.contactPage.heroTitle} description={t.contactPage.heroDescription} className="pb-24 md:pb-32">
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <div className={card}>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#25d366]/20 text-[#4ade80]">
              <MessageCircle className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-white/50">{t.contactPage.whatsapp}</p>
              <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="tap focus-ring text-[15px] font-semibold text-white hover:text-gold">
                {t.contactPage.whatsappCta}
              </a>
              <div className="[&_*]:!text-white/70">
                <CopyNumber />
              </div>
            </div>
          </div>
          <div className={card}>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
              <Mail className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-white/50">{t.contactPage.email}</p>
              <a href={`mailto:${contact.email}`} className="tap focus-ring break-all text-[15px] font-semibold text-white hover:text-gold">
                {contact.email}
              </a>
            </div>
          </div>
          <div className={card}>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold">
              <BadgeCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-white/50">{ui.hours}</p>
              <p className="text-[15px] font-semibold text-white">{ui.hoursValue}</p>
            </div>
          </div>
        </div>
      </DarkHero>

      <Section className="relative z-10 !pt-0 [display:flow-root]">
        <Container className="relative -mt-16 max-w-6xl md:-mt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <div className="rounded-[2rem] border border-line bg-surface-0 p-6 shadow-elev md:p-9 lg:col-span-3">
              <h2 className="text-[22px] font-bold text-ink">{ui.formTitle}</h2>
              <p className="mb-6 mt-1 flex items-center gap-2 text-[13px] text-ink-subtle">
                <ShieldCheck className="h-4 w-4 text-accent" /> {ui.private}
              </p>
              <ContactForm />
            </div>
            <aside className="h-fit rounded-[2rem] border border-line bg-surface-1 p-6 md:p-8 lg:col-span-2 lg:mt-24">
              <h2 className="text-[13px] font-bold uppercase tracking-[0.14em] text-accent">{ui.nextTitle}</h2>
              <ol className="mt-6 space-y-6">
                {ui.next.map((s, i) => (
                  <li key={s.t} className="relative flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-[14px] font-bold text-surface-0">{i + 1}</span>
                    <div>
                      <h3 className="text-[16px] font-bold text-ink">{s.t}</h3>
                      <p className="mt-1 text-[14px] leading-relaxed text-ink-muted">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-8 rounded-2xl bg-surface-0 p-4 text-[13px] leading-relaxed text-ink-muted">{t.contactPage.enterpriseNote}</p>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
