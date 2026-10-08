"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight, MessageCircle, Send, X } from "lucide-react";
import { chatFlowText, industries, needs, recommend, serviceNeedType } from "@/config/chat-flow";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { growth } from "@/i18n/growth";
import Link from "@/i18n/link";
import { useLocale } from "@/i18n/locale-context";
import { formatRupiah } from "@/lib/utils";
import { track } from "@/lib/track";
import { whatsappLink } from "@/lib/whatsapp";

const inputClass =
  "focus-ring w-full rounded-lg border border-line bg-surface-0 px-3 py-2.5 text-[14px] text-ink placeholder:text-ink-subtle transition-colors hover:border-line-strong focus:border-[#25D366]";
const bubble = "max-w-[88%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-relaxed";
const botBubble = `${bubble} self-start rounded-tl-sm bg-surface-2 text-ink`;
const userBubble = `${bubble} self-end rounded-tr-sm bg-[#128C4A] text-white`;
const chip =
  "focus-ring rounded-full border border-line-strong px-3 py-1.5 text-[13px] text-ink-muted transition-colors hover:border-[#25D366] hover:text-ink";

/**
 * Floating chat. A short guided conversation (business type, then what to fix)
 * ends in a recommendation drawn from the published service list; a second
 * step hands the visitor over to the team on WhatsApp, saving name, number and
 * the answers as a lead (/api/lead) so a chat that is never sent is still a
 * lead. No AI and no external service: every reply is a fixed rule.
 */
export function WhatsAppButton() {
  const { t, locale } = useLocale();
  const g = growth[locale];
  const f = chatFlowText;
  const pathname = usePathname();
  const page = `${siteConfig.url}${pathname === "/" ? "" : pathname}`;

  const [open, setOpen] = useState(false);
  const [view, setView] = useState<"chat" | "handoff">("chat");
  const [industryId, setIndustryId] = useState<string | null>(null);
  const [needId, setNeedId] = useState<string | null>(null);
  const log = useRef<HTMLDivElement>(null);

  const industry = industries.find((i) => i.id === industryId);
  const need = needs.find((n) => n.id === needId);
  const picks = industryId && needId ? recommend(industryId, needId) : [];
  const recommended = picks.flatMap((id) => services.find((s) => s.id === id) ?? []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    log.current?.scrollTo({ top: log.current.scrollHeight, behavior: "smooth" });
  }, [industryId, needId, view]);

  function toggle() {
    if (!open) track("whatsapp_click", { page_path: pathname });
    setOpen(!open);
  }

  function chooseNeed(id: string) {
    setNeedId(id);
    if (industryId) {
      const first = recommend(industryId, id)[0];
      track("chat_recommendation", { industry: industryId, need: id, service: first ?? "", locale });
    }
  }

  function restart() {
    setIndustryId(null);
    setNeedId(null);
    setView("chat");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const get = (key: string) => String(form.get(key) ?? "").trim();
    if (get("website")) return; // honeypot

    const w = g.waLead;
    const answers = [
      ...(industry ? [`${f.summary.business[locale]}: ${industry.label[locale]}`] : []),
      ...(need ? [`${f.summary.need[locale]}: ${need.label[locale]}`] : []),
      ...(recommended.length
        ? [`${f.summary.recommended[locale]}: ${recommended.map((s) => s.title[locale]).join(", ")}`]
        : []),
    ];
    const message = [
      `${g.waFloating} ${page}`,
      ``,
      `${w.name}: ${get("name")}`,
      `${w.whatsapp}: ${get("phone")}`,
      `${w.need}: ${get("need")}`,
      ...(answers.length ? [``, ...answers] : []),
    ].join("\n");

    // Open WhatsApp straight from the click (popup blockers allow it), and
    // save the lead in the background so it survives an unsent message.
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        name: get("name"),
        phone: get("phone"),
        need: get("need"),
        description: answers.length ? `${g.waChat.leadNote}\n\n${answers.join("\n")}` : g.waChat.leadNote,
        sourcePage: pathname,
        locale,
        website: get("website"),
      }),
    }).catch(() => {});
    track("generate_lead", { need: get("need"), plan: "", locale });
    e.currentTarget.reset();
    setOpen(false);
    restart();
  }

  // Preselect the hand-off dropdown from the first recommendation.
  const presetNeed = t.contactForm.needTypes[serviceNeedType[picks[0]] ?? -1] ?? "";

  return (
    <div className="no-print fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {open ? (
        <section
          role="dialog"
          aria-labelledby="wa-chat-title"
          className="flex max-h-[calc(100dvh-7.5rem)] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-line bg-surface-1 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.55)]"
        >
          <header className="flex items-center gap-3 bg-[#128C4A] px-4 py-3 text-white">
            {view === "handoff" ? (
              <button
                type="button"
                onClick={() => setView("chat")}
                aria-label={g.waChat.back}
                className="focus-ring flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/90 hover:bg-white/15"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
            ) : (
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                <MessageCircle className="h-5 w-5" fill="white" strokeWidth={0} />
              </span>
            )}
            <div className="min-w-0 flex-1">
              <p id="wa-chat-title" className="text-[15px] font-semibold leading-tight">
                {g.waChat.title}
              </p>
              <p className="mt-0.5 flex items-center gap-1.5 text-[12px] text-white/85">
                <span className="h-2 w-2 rounded-full bg-[#7CFFB2]" aria-hidden="true" />
                <span className="truncate">{g.waChat.status}</span>
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={g.waChat.close}
              className="focus-ring flex h-8 w-8 items-center justify-center rounded-full text-white/90 hover:bg-white/15"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          {view === "handoff" ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 overflow-y-auto p-4">
              {/* Honeypot: hidden from people, tempting to bots. */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="wa-website">Website</label>
                <input id="wa-website" name="website" tabIndex={-1} autoComplete="off" />
              </div>
              <div className={botBubble}>{g.waChat.handoffAsk}</div>
              <label htmlFor="wa-name" className="sr-only">
                {t.contactForm.name}
              </label>
              <input
                required
                id="wa-name"
                name="name"
                autoComplete="name"
                className={inputClass}
                placeholder={t.contactForm.namePlaceholder}
              />
              <label htmlFor="wa-phone" className="sr-only">
                {t.contactForm.whatsapp}
              </label>
              <input
                required
                type="tel"
                id="wa-phone"
                name="phone"
                autoComplete="tel"
                className={inputClass}
                placeholder={t.contactForm.whatsappPlaceholder}
              />
              <label htmlFor="wa-need" className="sr-only">
                {t.contactForm.needType}
              </label>
              <select
                required
                id="wa-need"
                name="need"
                key={presetNeed}
                defaultValue={presetNeed}
                className={inputClass}
              >
                <option value="" disabled>
                  {g.waChat.purposePlaceholder}
                </option>
                {t.contactForm.needTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="focus-ring mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-[14px] font-semibold text-[#0b2e18] transition-colors hover:bg-[#2fe076]"
              >
                {g.waChat.handoffSend}
                <Send className="h-4 w-4" />
              </button>
              <p className="text-[12px] leading-relaxed text-ink-subtle">{g.waChat.privacy}</p>
            </form>
          ) : (
            <div ref={log} role="log" aria-live="polite" className="flex min-h-[14rem] flex-col gap-2 overflow-y-auto p-4">
              <div className={botBubble}>{g.waChat.greeting}</div>
              <div className={botBubble}>{f.question1[locale]}</div>

              {!industry ? (
                <div className="mt-1 flex flex-wrap gap-2">
                  {industries.map((i) => (
                    <button key={i.id} type="button" onClick={() => setIndustryId(i.id)} className={chip}>
                      {i.label[locale]}
                    </button>
                  ))}
                </div>
              ) : (
                <>
                  <div className={userBubble}>{industry.label[locale]}</div>
                  <div className={botBubble}>{f.question2[locale]}</div>
                </>
              )}

              {industry && !need ? (
                <div className="mt-1 flex flex-wrap gap-2">
                  {needs.map((n) => (
                    <button key={n.id} type="button" onClick={() => chooseNeed(n.id)} className={chip}>
                      {n.label[locale]}
                    </button>
                  ))}
                </div>
              ) : null}

              {need ? (
                <>
                  <div className={userBubble}>{need.label[locale]}</div>
                  <div className={botBubble}>{f.result[locale]}</div>
                  {recommended.map((s) => (
                    <div key={s.id} className="self-start rounded-2xl rounded-tl-sm border border-line bg-surface-0 p-3.5">
                      <p className="text-[14px] font-semibold text-ink">{s.title[locale]}</p>
                      <p className="mt-1 text-[12.5px] leading-relaxed text-ink-muted">{s.description[locale]}</p>
                      <p className="mt-2 text-[12.5px] text-ink">
                        {f.startingFrom[locale]} <span className="font-semibold">{formatRupiah(s.startingFrom, locale)}</span>
                      </p>
                      <Link
                        href={s.href}
                        onClick={() => setOpen(false)}
                        className="focus-ring mt-2 inline-flex items-center gap-1 text-[13px] font-medium text-[#25D366] hover:underline"
                      >
                        {f.viewDetail[locale]}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  ))}
                  <p className="text-[11.5px] leading-snug text-ink-subtle">{f.resultNote[locale]}</p>
                  <div className={botBubble}>{f.closing[locale]}</div>
                  <button
                    type="button"
                    onClick={() => setView("handoff")}
                    className="focus-ring w-full rounded-lg bg-[#25D366] px-3 py-2.5 text-[14px] font-semibold text-[#0b2e18] transition-colors hover:bg-[#2fe076]"
                  >
                    {g.waChat.humanCta}
                  </button>
                </>
              ) : null}

              {!need ? (
                <button
                  type="button"
                  onClick={() => setView("handoff")}
                  className="focus-ring mt-2 w-full rounded-lg border border-[#25D366]/50 px-3 py-2 text-[13px] font-medium text-ink transition-colors hover:bg-[#25D366]/10"
                >
                  {g.waChat.humanCta}
                </button>
              ) : null}

              {industry ? (
                <button type="button" onClick={restart} className="mt-1 self-start text-[12.5px] text-ink-subtle underline hover:text-ink">
                  {f.restart[locale]}
                </button>
              ) : null}
            </div>
          )}
        </section>
      ) : null}

      <button
        type="button"
        onClick={toggle}
        aria-label={open ? g.waChat.close : t.nav.whatsapp}
        aria-expanded={open}
        className="focus-ring flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_24px_-6px_rgba(37,211,102,0.55)] transition-transform duration-200 hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" fill="white" strokeWidth={0} />}
      </button>
    </div>
  );
}
