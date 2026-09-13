import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { assurances } from "@/config/company";
import { products } from "@/config/products";

const paths = [
  {
    eyebrow: "Custom Development",
    title: "Sistem dibangun mengikuti proses kerja Anda",
    fit: "Cocok jika alur kerja Anda spesifik, butuh integrasi khusus, atau harus mengikuti aturan internal.",
    examples: "ERP, POS, HRIS, CRM, website, aplikasi mobile",
    href: "/services",
    cta: "Lihat layanan",
  },
  {
    eyebrow: "Produk SaaS",
    title: "Sistem siap pakai, bisa langsung berjalan",
    fit: "Cocok jika proses bisnis Anda relatif standar dan ingin segera memakai sistem tanpa development dari nol.",
    examples: products.map((p) => p.name).join(", "),
    href: "/products",
    cta: "Lihat produk",
  },
];

export function PathChooser() {
  return (
    <section className="border-b border-line py-12 md:py-16">
      <Container className="max-w-6xl">
        <Eyebrow>Mulai dari sini</Eyebrow>
        <h2 className="headline mt-3 text-[22px] font-semibold text-ink sm:text-[26px]">
          Dua cara bekerja dengan AG·SORA
        </h2>

        <div className="mt-6 grid grid-cols-1 border-l border-t border-line md:mt-8 md:grid-cols-2">
          {paths.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className="focus-ring group flex flex-col border-b border-r border-line p-5 transition-colors hover:bg-surface-1 md:p-8"
            >
              <span className="text-[11px] uppercase tracking-[0.18em] text-accent">
                {path.eyebrow}
              </span>
              <h3 className="mt-2.5 text-[16px] font-medium leading-snug text-ink md:mt-3 md:text-[17px]">
                {path.title}
              </h3>
              <p className="mt-2 flex-1 text-[13px] leading-relaxed text-ink-muted md:mt-2.5 md:flex-none">
                {path.fit}
              </p>
              {/* The sections right below list these in full; on phones that is a scroll away. */}
              <p className="mt-4 hidden flex-1 text-[12px] leading-relaxed text-ink-subtle md:block">
                {path.examples}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-[13px] text-ink md:mt-6">
                {path.cta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 md:flex md:flex-wrap md:gap-x-10">
          {assurances.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-[12px] text-ink-muted"
            >
              <Check className="h-3.5 w-3.5 shrink-0 text-accent" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
