"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
          {mainNav.map((link) => {
            const active = pathname === link.href;
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

        <div className="hidden lg:flex">
          <Button href="/contact" size="sm">
            Konsultasi Gratis
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring -mr-2 flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-surface-0 lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col container-px py-3">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring border-b border-line py-3 text-[15px] text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Button href="/contact" className="w-full justify-center">
                Konsultasi Gratis
              </Button>
              <Button
                href={siteConfig.whatsapp.href}
                external
                variant="outline"
                className="w-full justify-center"
              >
                Chat WhatsApp
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
