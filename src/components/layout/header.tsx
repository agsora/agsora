"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { mainNav, siteConfig } from "@/config/site";
import { RibbonLogo } from "@/components/ribbon-logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

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
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-surface-border bg-white/85 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between container-px py-4">
        <Link href="/" className="focus-ring flex items-center gap-2.5">
          <RibbonLogo className="h-8 w-8" />
          <span className="text-lg font-bold tracking-tight text-navy">
            AG<span className="text-blue">·</span>SORA
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "focus-ring rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-blue"
                    : "text-navy-2 hover:text-blue"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/contact" size="sm" icon={<ArrowRight className="h-4 w-4" />}>
            Konsultasi Gratis
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-surface-border bg-white lg:hidden">
          <nav className="flex flex-col gap-1 px-5 py-4">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring rounded-lg px-3 py-2.5 text-base font-medium text-navy-2 hover:bg-bg-soft hover:text-blue"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-2 w-full justify-center">
              Konsultasi Gratis
            </Button>
            <a
              href={siteConfig.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-1 w-full rounded-full border border-surface-border px-5 py-3 text-center text-sm font-semibold text-navy"
            >
              Chat WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
