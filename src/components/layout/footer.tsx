"use client";

import Link from "@/i18n/link";
import { InstagramIcon, FacebookIcon, TiktokIcon } from "@/components/social-icons";
import { siteConfig } from "@/config/site";
import { featuredServices } from "@/config/services";
import { RibbonLogo } from "@/components/ribbon-logo";
import { useLocale } from "@/i18n/locale-context";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-subtle">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="focus-ring text-[13px] text-ink-muted transition-colors hover:text-ink"
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
    <footer className="border-t border-line bg-surface-0">
      <div className="mx-auto max-w-6xl container-px py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="focus-ring flex items-center gap-2.5">
              <RibbonLogo className="h-7 w-auto" />
              <span className="text-[15px] font-semibold tracking-tight text-ink">
                AG<span className="text-ink-subtle">·</span>SORA
              </span>
            </Link>
            <p className="mt-4 max-w-[15rem] text-[13px] leading-relaxed text-ink-muted">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram AGSORA"
                className="focus-ring flex h-8 w-8 items-center justify-center rounded-md border border-line text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
              >
                <InstagramIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook AGSORA"
                className="focus-ring flex h-8 w-8 items-center justify-center rounded-md border border-line text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
              >
                <FacebookIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok AGSORA"
                className="focus-ring flex h-8 w-8 items-center justify-center rounded-md border border-line text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
              >
                <TiktokIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <FooterColumn title={t.footer.services} links={featuredServices.map((s) => ({ label: s.title[locale], href: s.href }))} />
          <FooterColumn
            title={t.footer.company}
            links={[
              { label: t.nav.industries, href: "/industries" },
              { label: t.nav.pricing, href: "/pricing" },
              { label: t.nav.blog, href: "/blog" },
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

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-8 text-[12px] text-ink-subtle md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}
          </p>
          <p>{siteConfig.domain}</p>
        </div>
      </div>
    </footer>
  );
}
