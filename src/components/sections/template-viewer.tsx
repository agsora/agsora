"use client";

import { useState } from "react";
import { CheckCircle2, Clock, ExternalLink, Monitor, Smartphone, Tablet } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useContact, useSiteData } from "@/components/site-data";
import { TemplateCard } from "@/components/sections/templates-body";
import { TEMPLATES, type Template } from "@/config/templates";
import { useLocale } from "@/i18n/locale-context";
import { formatRupiah } from "@/lib/utils";
import { whatsappLink } from "@/lib/whatsapp";

type Lang = "id" | "en" | "zh";

const COPY = {
  id: {
    crumb: "Template",
    hint: "Demo ini bisa diklik dan dicoba. Data di dalamnya hanya contoh.",
    full: "Layar penuh",
    devices: { desktop: "Desktop", tablet: "Tablet", phone: "HP" },
    forWho: "Cocok untuk",
    includes: "Yang ada di template ini",
    from: "Mulai dari",
    note: "Belum termasuk PPN. Harga akhir mengikuti fitur yang Anda pilih.",
    days: "hari kerja",
    use: "Pakai template ini",
    quote: "Minta penawaran",
    custom: ["Logo, warna, dan foto diganti sesuai merek Anda", "Konten dan menu disesuaikan", "Fitur bisa ditambah (pembayaran, login, laporan)", "Source code menjadi milik Anda"],
    customTitle: "Bisa disesuaikan",
    more: "Template lain",
    wa: (n: string) => `Halo AG·SORA, saya tertarik dengan template "${n}". Bisa dibantu penawarannya?`,
  },
  en: {
    crumb: "Templates",
    hint: "This demo is clickable. The data in it is sample data.",
    full: "Full screen",
    devices: { desktop: "Desktop", tablet: "Tablet", phone: "Phone" },
    forWho: "Good for",
    includes: "What this template includes",
    from: "From",
    note: "Excludes VAT. The final price depends on the features you choose.",
    days: "working days",
    use: "Use this template",
    quote: "Request a quote",
    custom: ["Your logo, colours and photos", "Content and menus tailored", "Add features (payments, login, reports)", "You own the source code"],
    customTitle: "Customisable",
    more: "More templates",
    wa: (n: string) => `Hello AG·SORA, I'm interested in the "${n}" template. Could you send me a quote?`,
  },
  zh: {
    crumb: "模板",
    hint: "此演示可直接点击体验，其中数据仅为示例。",
    full: "全屏",
    devices: { desktop: "电脑", tablet: "平板", phone: "手机" },
    forWho: "适合",
    includes: "模板包含",
    from: "起价",
    note: "不含增值税，最终价格取决于所选功能。",
    days: "个工作日",
    use: "使用此模板",
    quote: "获取报价",
    custom: ["替换为您的标志、颜色与图片", "内容与菜单按需调整", "可增加功能（支付、登录、报表）", "源代码归您所有"],
    customTitle: "可定制",
    more: "更多模板",
    wa: (n: string) => `您好 AG·SORA，我对"${n}"模板感兴趣，可以提供报价吗？`,
  },
} as const;

const WIDTH = { desktop: "100%", tablet: "820px", phone: "390px" } as const;
type Device = keyof typeof WIDTH;

export function TemplateViewer({ tpl }: { tpl: Template }) {
  const { locale, t } = useLocale();
  const lang = (["id", "en", "zh"].includes(locale) ? locale : "id") as Lang;
  const c = COPY[lang];
  const contact = useContact();
  const price = useSiteData().servicePrices[tpl.serviceId] ?? tpl.priceFrom;
  const [device, setDevice] = useState<Device>("desktop");
  const ICONS = { desktop: Monitor, tablet: Tablet, phone: Smartphone };
  const others = TEMPLATES.filter((x) => x.slug !== tpl.slug).slice(0, 3);
  const wa = whatsappLink(c.wa(tpl.name[lang]), contact.whatsappHref);

  return (
    <>
      <section className="border-b border-line pb-10 pt-8">
        <Container className="max-w-7xl">
          <Breadcrumbs
            label={t.breadcrumbLabel}
            items={[
              { name: t.breadcrumbHome, href: "/" },
              { name: c.crumb, href: "/template" },
              { name: tpl.name[lang], href: `/template/${tpl.slug}` },
            ]}
          />
          <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-[30px] font-extrabold tracking-tight text-ink md:text-[40px]">{tpl.name[lang]}</h1>
              <p className="mt-2 max-w-2xl text-[16px] text-ink-muted">{tpl.summary[lang]}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden rounded-full border border-line p-1 sm:flex" role="group">
                {(Object.keys(WIDTH) as Device[]).map((d) => {
                  const Icon = ICONS[d];
                  return (
                    <button
                      key={d}
                      onClick={() => setDevice(d)}
                      aria-pressed={device === d}
                      className={`focus-ring flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-semibold ${device === d ? "bg-ink text-surface-0" : "text-ink-muted"}`}
                    >
                      <Icon className="h-4 w-4" /> {c.devices[d]}
                    </button>
                  );
                })}
              </div>
              <a href={`/demo/${tpl.slug}`} target="_blank" rel="noopener" className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-2 text-[13px] font-semibold text-ink">
                <ExternalLink className="h-4 w-4" /> {c.full}
              </a>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-surface-2 p-2 md:p-4">
            <div className="mx-auto overflow-hidden rounded-xl bg-white shadow-elev transition-[width] duration-300" style={{ width: WIDTH[device], maxWidth: "100%" }}>
              <div className="flex items-center gap-1.5 border-b border-black/5 px-4 py-2.5" style={{ background: tpl.accent }}>
                <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
              </div>
              <iframe src={`/demo/${tpl.slug}`} title={tpl.name[lang]} className="block h-[70vh] min-h-[520px] w-full border-0" />
            </div>
          </div>
          <p className="mt-3 text-center text-[13px] text-ink-subtle">{c.hint}</p>
        </Container>
      </section>

      <section className="py-14">
        <Container className="grid max-w-6xl gap-8 lg:grid-cols-[1fr_380px]">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-[13px] font-bold uppercase tracking-[0.14em] text-accent">{c.forWho}</h2>
              <p className="mt-3 text-[16px] text-ink">{tpl.forWho[lang]}</p>
              <h2 className="mt-8 text-[13px] font-bold uppercase tracking-[0.14em] text-accent">{c.includes}</h2>
              <ul className="mt-3 grid gap-2">
                {tpl.includes.map((i) => (
                  <li key={i.id} className="flex gap-2 text-[15px] text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {i[lang]}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-[13px] font-bold uppercase tracking-[0.14em] text-accent">{c.customTitle}</h2>
              <ul className="mt-3 grid gap-2">
                {c.custom.map((x) => (
                  <li key={x} className="flex gap-2 text-[15px] text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="h-fit rounded-3xl border border-line bg-surface-0 p-7 shadow-elev lg:sticky lg:top-24">
            <div className="text-[13px] text-ink-subtle">{c.from}</div>
            <div className="text-[30px] font-extrabold text-ink">{formatRupiah(price, lang)}</div>
            <div className="mt-1 flex items-center gap-1.5 text-[14px] text-ink-muted">
              <Clock className="h-4 w-4" /> {tpl.days} {c.days}
            </div>
            <p className="mt-3 text-[12px] text-ink-subtle">{c.note}</p>
            <div className="mt-6 grid gap-2">
              <Button href={wa} external size="lg">
                {c.use}
              </Button>
              <Button href={`/contact?template=${tpl.slug}`} variant="outline" size="lg">
                {c.quote}
              </Button>
            </div>
          </aside>
        </Container>
      </section>

      <section className="border-t border-line pb-24 pt-14">
        <Container className="max-w-6xl">
          <h2 className="text-[24px] font-bold text-ink">{c.more}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <TemplateCard key={o.slug} tpl={o} lang={lang} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
