"use client";

import Link from "@/i18n/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { RibbonLogo } from "@/components/ribbon-logo";
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
        "sticky top-0 z-50 w-full border-b transition-colors duration-200",
        scrolled || open
          ? "border-line bg-surface-0/85 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between container-px">
        <Link href="/" className="focus-ring flex items-center gap-2.5">
          <RibbonLogo className="h-7 w-auto" />
          <span className="text-[15px] font-semibold tracking-tight text-ink">
            AG<span className="text-ink-subtle">·</span>SORA
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {primaryNav.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "focus-ring text-[13px] transition-colors",
                  active ? "text-ink" : "text-ink-muted hover:text-ink"
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
          <Button href="/contact" size="sm">
            {t.nav.cta}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-md text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-surface-0 lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col container-px py-3">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "focus-ring border-b border-line py-3 text-[15px] transition-colors hover:text-ink",
                  isActive(link.href) ? "text-ink" : "text-ink-muted"
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
