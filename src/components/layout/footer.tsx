import Link from "next/link";
import { InstagramIcon, FacebookIcon, TiktokIcon } from "@/components/social-icons";
import { footerNav, siteConfig } from "@/config/site";
import { RibbonLogo } from "@/components/ribbon-logo";

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
  return (
    <footer className="border-t border-line bg-surface-0">
      <div className="mx-auto max-w-6xl container-px py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" className="focus-ring flex items-center gap-2.5">
              <RibbonLogo className="h-7 w-auto" />
              <span className="text-[15px] font-semibold tracking-tight text-ink">
                AG<span className="text-ink-subtle">·</span>SORA
              </span>
            </Link>
            <p className="mt-4 max-w-[15rem] text-[13px] leading-relaxed text-ink-muted">
              {siteConfig.tagline}
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

          <FooterColumn title="Services" links={footerNav.services.slice(0, 6)} />
          <FooterColumn title="Products" links={footerNav.products} />
          <FooterColumn title="Company" links={footerNav.company} />
          <FooterColumn title="Legal" links={footerNav.legal} />
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
