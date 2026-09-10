import Link from "next/link";
import { InstagramIcon, LinkedinIcon } from "@/components/social-icons";
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
      <h3 className="text-sm font-semibold text-navy">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="focus-ring text-sm text-muted transition-colors hover:text-blue"
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
    <footer className="border-t border-surface-border bg-bg-alt">
      <div className="mx-auto max-w-7xl container-px py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="focus-ring flex items-center gap-2.5">
              <RibbonLogo className="h-8 w-8" />
              <span className="text-lg font-bold tracking-tight text-navy">
                AG<span className="text-blue">·</span>SORA
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.tagline}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram AGSORA"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-navy transition-colors hover:border-blue/40 hover:text-blue"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn AGSORA"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-navy transition-colors hover:border-blue/40 hover:text-blue"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterColumn title="Services" links={footerNav.services.slice(0, 6)} />
          <FooterColumn title="Products" links={footerNav.products} />
          <FooterColumn title="Company" links={footerNav.company} />
          <FooterColumn title="Legal" links={footerNav.legal} />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-surface-border pt-8 text-xs text-muted-2 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <p>{siteConfig.domain}</p>
        </div>
      </div>
    </footer>
  );
}
