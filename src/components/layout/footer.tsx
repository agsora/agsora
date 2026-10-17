"use client";

import { checklistStrings } from "@/config/checklist";
import Link from "@/i18n/link";
import { InstagramIcon, FacebookIcon, TiktokIcon } from "@/components/social-icons";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { BrandLockup } from "@/components/brand-logo";
import { Mail, MessageCircle } from "lucide-react";
import { useLocale } from "@/i18n/locale-context";

const socialClass =
  "focus-ring flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-0 text-ink-muted transition-all hover:-translate-y-0.5 hover:border-ink hover:text-ink";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-[13px] font-bold text-ink">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="focus-ring text-[14px] text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const { t, locale } = useLocale();
  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface-1">
      <div className="relative mx-auto max-w-6xl container-px pb-10 pt-16 md:pt-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:pr-8">
            <Link href="/" className="focus-ring flex items-center" aria-label="AG·SORA">
              <BrandLockup />
            </Link>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-ink-muted">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex flex-col gap-2.5 text-[14px]">
              <a
                href={siteConfig.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2.5 text-ink-muted transition-colors hover:text-ink"
              >
                <MessageCircle className="h-4 w-4 text-accent" />
                {siteConfig.whatsapp.number}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="focus-ring inline-flex items-center gap-2.5 text-ink-muted transition-colors hover:text-ink"
              >
                <Mail className="h-4 w-4 text-accent" />
                {siteConfig.email}
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram AGSORA"
                className={socialClass}
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook AGSORA"
                className={socialClass}
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok AGSORA"
                className={socialClass}
              >
                <TiktokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterColumn title={t.footer.services} links={services.map((s) => ({ label: s.title[locale], href: s.href }))} />
          <FooterColumn
            title={t.footer.company}
            links={[
              { label: t.nav.industries, href: "/industries" },
              { label: t.nav.pricing, href: "/pricing" },
              { label: t.nav.blog, href: "/blog" },
              { label: checklistStrings[locale].navLabel, href: "/checklist" },
              { label: t.nav.about, href: "/about" },
              { label: t.nav.contact, href: "/contact" },
            ]}
          />
          <FooterColumn
            title={t.footer.legal}
            links={[
              { label: t.footer.privacy, href: "/privacy-policy" },
              { label: t.footer.terms, href: "/terms-conditions" },
            ]}
          />
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-8 text-[13px] text-ink-subtle md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}
          </p>
          <p>{siteConfig.domain.replace(/^www./, "")}</p>
        </div>
      </div>
      {/* Oversized wordmark, cut off at the bottom edge */}
      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[0.22em] select-none text-center font-brand text-[22vw] font-semibold leading-none tracking-[-0.04em] text-ink/[0.045] md:text-[17vw]"
      >
        AG·SORA
      </p>
    </footer>
  );
}
