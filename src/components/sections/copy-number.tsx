"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { growth } from "@/i18n/growth";
import { useLocale } from "@/i18n/locale-context";
import { useContact } from "@/components/site-data";

/**
 * The WhatsApp number as text with a copy button: a fallback for visitors
 * whose network or browser cannot open wa.me links.
 */
export function CopyNumber() {
  const { locale } = useLocale();
  const contact = useContact();
  const g = growth[locale];
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(contact.whatsappNumber);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: the number is still on screen to copy by hand.
    }
  }

  return (
    <p className="mt-1.5 flex items-center gap-2 text-[13px] text-ink-muted">
      <span className="tabular-nums">{contact.whatsappNumber}</span>
      <button
        type="button"
        onClick={copy}
        className="focus-ring inline-flex items-center gap-1 rounded text-[12px] text-ink-subtle transition-colors hover:text-ink"
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? g.copied : g.copyNumber}
      </button>
    </p>
  );
}
