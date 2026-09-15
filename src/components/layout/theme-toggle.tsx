"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useLocale } from "@/i18n/locale-context";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLocale();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? t.themeToggle.light : t.themeToggle.dark}
      className={cn(
        "focus-ring flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink-muted transition-colors hover:border-line-strong hover:text-ink",
        className
      )}
    >
      {theme === "dark" ? (
        <Sun className="h-3.5 w-3.5" />
      ) : (
        <Moon className="h-3.5 w-3.5" />
      )}
    </button>
  );
}
