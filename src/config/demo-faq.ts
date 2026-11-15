import { TEMPLATES } from "@/config/templates";
import type { Locale } from "@/i18n/routing";
import { formatRupiah } from "@/lib/utils";

/**
 * Questions people (and AI assistants) ask before ordering a website or app, answered with the live "from" prices.
 * Shown on /contoh and emitted there once as FAQPage data.
 */
export function demoFaq(locale: Locale, prices: Record<string, number>) {
  const p = (slug: string) => {
    const t = TEMPLATES.find((x) => x.slug === slug)!;
    return { price: formatRupiah(prices[t.serviceId] ?? t.priceFrom, locale), days: t.days };
  };
  const cp = p("korporat");
  const shop = p("toko-online");
  const pos = p("kasir");
  const clinic = p("klinik");
  const landing = p("landing");

  const FAQ: Record<Locale, [string, string][]> = {
    id: [
      [
        "Berapa biaya membuat website company profile?",
        `Website company profile di AG·SORA mulai ${cp.price} (belum PPN) dan selesai dalam ${cp.days} hari kerja, termasuk desain responsif, form kontak, SEO dasar, garansi bug 90 hari, dan source code milik Anda.`,
      ],
      [
        "Berapa biaya website toko online atau aplikasi kasir?",
        `Website toko online mulai ${shop.price} (${shop.days} hari kerja). Aplikasi kasir (POS) mulai ${pos.price} (${pos.days} hari kerja). Website klinik dengan booking dokter online mulai ${clinic.price}. Landing page promosi mulai ${landing.price}.`,
      ],
      [
        "Apakah demo ini template yang dipakai banyak orang?",
        "Bukan. Demo ini contoh titik awal. Setiap proyek dibuat ulang dengan logo, warna, foto, konten, dan alur kerja bisnis Anda, lalu fitur bisa ditambah seperti pembayaran QRIS, login pelanggan, atau laporan.",
      ],
      [
        "Apakah website dan aplikasinya bisa dibuka di HP?",
        "Bisa. Semua contoh responsif. Gunakan tombol Desktop, Tablet, dan HP di setiap halaman demo untuk melihat tampilannya di masing-masing layar.",
      ],
      [
        "Bagaimana cara memesan?",
        "Pilih contoh yang paling dekat dengan kebutuhan Anda, klik 'Buat yang seperti ini' untuk chat WhatsApp, atau minta penawaran tertulis. Konsultasi gratis, dan pembayaran bisa 50/50 atau 30/50/20.",
      ],
    ],
    en: [
      ["How much does a company profile website cost?", `A company profile website from AG·SORA starts at ${cp.price} (excluding VAT) and takes ${cp.days} working days, including responsive design, a contact form, basic SEO, a 90-day bug warranty and source code you own.`],
      ["How much is an online store or a POS app?", `An online store starts at ${shop.price} (${shop.days} working days). A point-of-sale app starts at ${pos.price} (${pos.days} working days). A clinic website with online booking starts at ${clinic.price}. A promo landing page starts at ${landing.price}.`],
      ["Are these demos templates many people use?", "No. They are starting points. Each project is rebuilt with your logo, colours, photos, content and workflow, and features such as QRIS payments, customer login or reports can be added."],
      ["Do the websites and apps work on phones?", "Yes. Every example is responsive. Use the Desktop, Tablet and Phone buttons on each demo page to see it on each screen."],
      ["How do I order?", "Pick the example closest to what you need, click 'Build one like this' to chat on WhatsApp, or request a written quote. Consultation is free, and payment can be split 50/50 or 30/50/20."],
    ],
    zh: [
      ["企业官网的费用是多少？", `AG·SORA 企业官网起价 ${cp.price}（不含增值税），${cp.days} 个工作日完成，包含响应式设计、联系表单、基础 SEO、90 天缺陷保修，源代码归您所有。`],
      ["网上商店或收银系统多少钱？", `网上商店起价 ${shop.price}（${shop.days} 个工作日）；收银系统 (POS) 起价 ${pos.price}（${pos.days} 个工作日）；带在线预约的诊所网站起价 ${clinic.price}；推广落地页起价 ${landing.price}。`],
      ["这些演示是大家共用的模板吗？", "不是。演示只是起点，每个项目都会按您的标志、颜色、图片、内容与业务流程重新制作，并可增加 QRIS 支付、会员登录或报表等功能。"],
      ["网站和应用能在手机上使用吗？", "可以。所有示例均为响应式，可在每个演示页面用电脑、平板、手机按钮查看效果。"],
      ["如何下单？", "选择最接近需求的示例，点击“做一个类似的”通过 WhatsApp 联系，或索取书面报价。咨询免费，可按 50/50 或 30/50/20 分期付款。"],
    ],
  };
  return FAQ[locale];
}
