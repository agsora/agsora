"use client";

import Link from "@/i18n/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { BrandLockup } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { useLocale } from "@/i18n/locale-context";
import { splitLocale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  const mainNav = [
    { label: t.nav.services, href: "/services" },
    { label: t.nav.industries, href: "/industries" },
    { label: t.nav.pricing, href: "/pricing" },
    { label: t.nav.blog, href: "/blog" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];
  // The desktop bar leaves out Contact — the CTA button already opens it.
  // The mobile drawer has room, so it lists everything.
  const primaryNav = mainNav.filter((link) => link.href !== "/contact");
  // Nav hrefs are unprefixed; compare against the path without /en or /zh.
  const { path } = splitLocale(pathname);
  const isActive = (href: string) => path === href || path.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled || open
          ? "border-line bg-surface-0/80 shadow-[0_6px_24px_-18px_rgba(11,18,32,0.35)] backdrop-blur-xl"
          : "border-transparent bg-surface-0/0"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between container-px">
        <Link href="/" className="tap focus-ring flex items-center" aria-label="AG·SORA">
          <BrandLockup />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-line bg-surface-0/70 p-1 lg:flex">
          {primaryNav.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "focus-ring rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors",
                  active ? "bg-ink text-surface-0" : "text-ink-muted hover:bg-surface-2 hover:text-ink"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <LanguageSwitcher />
          <Button href="/contact" size="sm" icon={<ArrowRight className="h-3.5 w-3.5" />}>
            {t.nav.cta}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-xl border border-line text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="animate-fade-in border-t border-line bg-surface-0 lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col container-px py-3">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "focus-ring rounded-xl px-3 py-3 text-[15px] font-medium transition-colors hover:bg-surface-1 hover:text-ink",
                  isActive(link.href) ? "bg-surface-1 text-ink" : "text-ink-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center justify-between gap-2">
              <LanguageSwitcher />
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <Button href="/contact" className="w-full justify-center">
                {t.nav.cta}
              </Button>
              <Button
                href={siteConfig.whatsapp.href}
                external
                variant="outline"
                className="w-full justify-center"
              >
                {t.nav.whatsapp}
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
