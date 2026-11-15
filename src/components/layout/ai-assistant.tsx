"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Send, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { readAttribution } from "@/lib/attribution";
import { useLocale } from "@/i18n/locale-context";

type Msg = { role: "user" | "assistant"; content: string };

const COPY = {
  id: { open: "Tanya asisten AI", title: "Asisten AG·SORA", hello: "Halo! Saya asisten AI AG·SORA. Mau buat website, aplikasi, atau sistem bisnis? Tanyakan layanan dan harga di sini.", placeholder: "Tulis pertanyaan…", error: "Maaf, asisten sedang sibuk. Coba lagi atau hubungi kami lewat WhatsApp.", note: "Jawaban AI dapat keliru; harga final dikonfirmasi di proposal." },
  en: { open: "Ask the AI assistant", title: "AG·SORA Assistant", hello: "Hi! I'm AG·SORA's AI assistant. Planning a website, app or business system? Ask about services and prices here.", placeholder: "Type a question…", error: "Sorry, the assistant is busy. Try again or reach us on WhatsApp.", note: "AI answers can be wrong; final prices are confirmed in the proposal." },
  zh: { open: "询问 AI 助手", title: "AG·SORA 助手", hello: "您好！我是 AG·SORA 的 AI 助手。想做网站、应用或业务系统？可以在这里咨询服务和价格。", placeholder: "输入您的问题…", error: "抱歉，助手繁忙。请重试或通过 WhatsApp 联系我们。", note: "AI 回答可能有误；最终价格以报价为准。" },
} as const;

/** Floating chat with the AI assistant (/api/assistant). Rendered only when the server has an API key. */
export function AiAssistant() {
  const { locale } = useLocale();
  const t = COPY[locale];
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => {
    end.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, busy]);

  async function send() {
    const text = input.trim();
    if (!text || busy) return;
    const next: Msg[] = [...msgs, { role: "user", content: text }];
    setMsgs(next);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next, locale, page: pathname, attribution: readAttribution() }),
      });
      const data = (await res.json().catch(() => ({}))) as { reply?: string };
      setMsgs([...next, { role: "assistant", content: res.ok && data.reply ? data.reply : t.error }]);
    } catch {
      setMsgs([...next, { role: "assistant", content: t.error }]);
    } finally {
      setBusy(false);
    }
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="no-print fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-full bg-[#5b5cf0] px-4 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-95"
      >
        <Bot size={18} /> {t.open}
      </button>
    );
  }

  return (
    <div role="dialog" aria-label={t.title} className="no-print fixed bottom-5 left-5 z-50 flex h-[32rem] max-h-[80vh] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-line bg-surface-0 shadow-2xl">
      <div className="flex items-center justify-between bg-[#5b5cf0] px-4 py-3 text-white">
        <strong className="flex items-center gap-2 text-sm">
          <Bot size={16} /> {t.title}
        </strong>
        <button type="button" aria-label="Tutup" onClick={() => setOpen(false)} className="rounded p-1 hover:bg-white/20">
          <X size={16} />
        </button>
      </div>
      <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm">
        <p className="rounded-xl bg-surface-1 p-3 text-ink">{t.hello}</p>
        {msgs.map((m, i) => (
          <p key={i} className={`whitespace-pre-wrap rounded-xl p-3 ${m.role === "user" ? "ml-8 bg-[#5b5cf0] text-white" : "mr-8 bg-surface-1 text-ink"}`}>
            {m.content}
          </p>
        ))}
        {busy ? <p className="mr-8 animate-pulse rounded-xl bg-surface-1 p-3 text-ink-muted">…</p> : null}
        <div ref={end} />
      </div>
      <form
        className="flex gap-2 border-t border-line p-3"
        onSubmit={(e) => {
          e.preventDefault();
          void send();
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={1000}
          placeholder={t.placeholder}
          aria-label={t.placeholder}
          className="flex-1 rounded-lg border border-line bg-surface-0 px-3 py-2 text-sm text-ink outline-none focus:border-[#5b5cf0]"
        />
        <button type="submit" disabled={busy || !input.trim()} aria-label="Kirim" className="rounded-lg bg-[#5b5cf0] px-3 text-white disabled:opacity-50">
          <Send size={16} />
        </button>
      </form>
      <p className="px-3 pb-2 text-[11px] text-ink-muted">{t.note}</p>
    </div>
  );
}
