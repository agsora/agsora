"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Clock, MonitorSmartphone, Palette, Rocket } from "lucide-react";
import Link from "@/i18n/link";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useSiteData } from "@/components/site-data";
import { TEMPLATE_CATEGORIES, TEMPLATES, type Template } from "@/config/templates";
import { useLocale } from "@/i18n/locale-context";
import { formatRupiah } from "@/lib/utils";

type Lang = "id" | "en" | "zh";

export const TEMPLATE_COPY = {
  id: {
    eyebrow: "Contoh & demo",
    title: "Contoh website & aplikasi bisnis yang bisa Anda coba langsung.",
    lead: "Coba gratis contoh website company profile, toko online, restoran, klinik, sekolah, aplikasi kasir, dan dashboard ERP di laptop, tablet, atau HP. Pilih yang paling dekat dengan bisnis Anda, lalu tim AG·SORA membuatnya dengan logo, warna, konten, dan fitur Anda.",
    crumb: "Contoh & Demo",
    from: "Mulai",
    days: "hari kerja",
    demo: "Coba demo",
    perks: [
      { t: "Desain bisa diubah", d: "Logo, warna, foto, dan teks mengikuti merek Anda." },
      { t: "Rapi di semua layar", d: "Setiap template responsif di HP, tablet, dan desktop." },
      { t: "Cepat tayang", d: "Mulai dari contoh yang sudah jadi memangkas waktu pengerjaan." },
    ],
    customTitle: "Tidak menemukan yang cocok?",
    customLead: "Kami juga mendesain dari nol sesuai alur kerja bisnis Anda. Konsultasi gratis.",
    customCta: "Konsultasi gratis",
    faqTitle: "Pertanyaan seputar harga & pemesanan",
  },
  en: {
    eyebrow: "Examples & demos",
    title: "Website and business app examples you can try right now.",
    lead: "Click through live examples of our websites and apps on a laptop, tablet or phone. Pick the one closest to your business and we tailor the logo, colours, content and features.",
    crumb: "Examples & Demos",
    from: "From",
    days: "working days",
    demo: "Try the demo",
    perks: [
      { t: "Fully customisable", d: "Logo, colours, photos and copy follow your brand." },
      { t: "Looks right on every screen", d: "Every template is responsive on phone, tablet and desktop." },
      { t: "Live sooner", d: "Starting from a finished example shortens delivery." },
    ],
    customTitle: "Nothing quite fits?",
    customLead: "We also design from scratch around how your business works. Free consultation.",
    customCta: "Free consultation",
    faqTitle: "Questions about pricing & ordering",
  },
  zh: {
    eyebrow: "示例与演示",
    title: "可直接体验的网站与业务应用示例。",
    lead: "在电脑、平板或手机上直接体验我们的网站与应用示例。选择最接近您业务的一款，我们再按您的标志、颜色、内容与功能定制。",
    crumb: "示例与演示",
    from: "起价",
    days: "个工作日",
    demo: "体验演示",
    perks: [
      { t: "可完全定制", d: "标志、颜色、图片与文字都按您的品牌调整。" },
      { t: "各种屏幕都美观", d: "所有模板均适配手机、平板与电脑。" },
      { t: "更快上线", d: "基于现成示例开发，缩短交付时间。" },
    ],
    customTitle: "没有合适的？",
    customLead: "我们也可按您的业务流程从零设计，免费咨询。",
    customCta: "免费咨询",
    faqTitle: "价格与下单常见问题",
  },
} as const;

/** A live, non-interactive thumbnail: the demo rendered at desktop size and scaled to the card. */
export function DemoThumb({ slug, title }: { slug: string; title: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.25);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / 1280));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div ref={box} className="relative aspect-[16/10] overflow-hidden bg-surface-2">
      <iframe
        src={`/demo/${slug}`}
        title={title}
        loading="lazy"
        tabIndex={-1}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 origin-top-left border-0"
        style={{ width: 1280, height: 800, transform: `scale(${scale})` }}
      />
    </div>
  );
}

export function TemplateCard({ tpl, lang }: { tpl: Template; lang: Lang }) {
  const c = TEMPLATE_COPY[lang];
  const price = useSiteData().servicePrices[tpl.serviceId] ?? tpl.priceFrom;
  return (
    <Link href={`/contoh/${tpl.slug}`} className="group focus-ring flex flex-col overflow-hidden rounded-3xl border border-line bg-surface-0 transition-all hover:-translate-y-1 hover:shadow-elev">
      <div className="border-b border-line">
        <div className="flex items-center gap-1.5 px-4 py-2.5" style={{ background: tpl.accent }}>
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
        </div>
        <DemoThumb slug={tpl.slug} title={tpl.name[lang]} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h2 className="text-[19px] font-bold text-ink">{tpl.name[lang]}</h2>
        <p className="mt-1 text-[13px] text-ink-subtle">{tpl.forWho[lang]}</p>
        <p className="mt-3 line-clamp-3 text-[14px] leading-relaxed text-ink-muted">{tpl.summary[lang]}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div>
            <div className="text-[12px] text-ink-subtle">{c.from}</div>
            <div className="text-[17px] font-bold text-ink">{formatRupiah(price, lang)}</div>
            <div className="mt-0.5 flex items-center gap-1 text-[12px] text-ink-subtle">
              <Clock className="h-3.5 w-3.5" /> {tpl.days} {c.days}
            </div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-ink px-4 py-2 text-[13px] font-semibold text-surface-0 transition-transform group-hover:-translate-y-0.5">
            {c.demo} <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function TemplatesBody({ faq }: { faq: [string, string][] }) {
  const { locale } = useLocale();
  const lang = (["id", "en", "zh"].includes(locale) ? locale : "id") as Lang;
  const c = TEMPLATE_COPY[lang];
  const [cat, setCat] = useState<string>("all");
  const shown = TEMPLATES.filter((t) => cat === "all" || t.category === cat);
  const PERK_ICONS = [Palette, MonitorSmartphone, Rocket];

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} description={c.lead} breadcrumb={{ name: c.crumb, href: "/contoh" }}>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {c.perks.map((p, i) => {
            const Icon = PERK_ICONS[i];
            return (
              <div key={p.t} className="flex gap-3 rounded-2xl border border-line bg-surface-0/70 p-4">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <div className="text-[14px] font-semibold text-ink">{p.t}</div>
                  <div className="text-[13px] text-ink-muted">{p.d}</div>
                </div>
              </div>
            );
          })}
        </div>
      </PageHero>

      <section className="pb-24 pt-10">
        <Container className="max-w-6xl">
          <div className="flex gap-2 overflow-x-auto pb-2" role="tablist">
            {TEMPLATE_CATEGORIES.map((k) => (
              <button
                key={k.key}
                role="tab"
                aria-selected={cat === k.key}
                onClick={() => setCat(k.key)}
                className={`focus-ring shrink-0 rounded-full px-4 py-2 text-[14px] font-semibold transition-colors ${cat === k.key ? "bg-ink text-surface-0" : "border border-line text-ink-muted hover:text-ink"}`}
              >
                {k.label[lang]}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((t) => (
              <TemplateCard key={t.slug} tpl={t} lang={lang} />
            ))}
          </div>

          <div className="mt-20">
            <h2 className="text-[26px] font-extrabold tracking-tight text-ink md:text-[30px]">{c.faqTitle}</h2>
            <div className="mt-6 divide-y divide-line rounded-3xl border border-line">
              {faq.map(([q, a]) => (
                <details key={q} className="group px-6 py-5">
                  <summary className="cursor-pointer list-none text-[16px] font-semibold text-ink">{q}</summary>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl bg-navy p-8 text-white md:flex-row md:items-center md:p-10">
            <div>
              <h2 className="text-[24px] font-bold">{c.customTitle}</h2>
              <p className="mt-2 max-w-xl text-white/75">{c.customLead}</p>
            </div>
            <Button href="/contact" variant="outline" size="lg">
              {c.customCta}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
