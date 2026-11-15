import Anthropic from "@anthropic-ai/sdk";
import { siteConfig } from "@/config/site";
import { channelOf, cleanAttribution } from "@/lib/attribution";
import { pushOwner } from "@/lib/notify";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { getSiteData } from "@/lib/site-content";
import { formatRupiah } from "@/lib/utils";

export const maxDuration = 60;

/**
 * Website chat assistant. Answers questions about AG·SORA's services and prices, and when a visitor wants to be
 * contacted it calls the `save_lead` tool, which stores the lead and pings the owner.
 *
 * Needs ANTHROPIC_API_KEY. Model: ASSISTANT_MODEL, default claude-opus-5-5 at low effort.
 */
const MODEL = process.env.ASSISTANT_MODEL || "claude-opus-5-5";

const SAVE_LEAD: Anthropic.Beta.BetaTool = {
  name: "save_lead",
  description:
    "Save the visitor as a sales lead so the AG·SORA team contacts them. Call this once, only after the visitor has given at least their name and WhatsApp number and agreed to be contacted.",
  strict: true,
  input_schema: {
    type: "object",
    additionalProperties: false,
    properties: {
      name: { type: "string", description: "Visitor's name" },
      phone: { type: "string", description: "WhatsApp number as given" },
      email: { type: "string", description: "Email if given, else empty string" },
      company: { type: "string", description: "Company if given, else empty string" },
      need: { type: "string", description: "Service they need, e.g. website, POS, ERP, chatbot" },
      budget: { type: "string", description: "Budget if mentioned, else empty string" },
      summary: { type: "string", description: "Two to four sentences summarising what they want, in Indonesian" },
    },
    required: ["name", "phone", "email", "company", "need", "budget", "summary"],
  },
};

type LeadInput = { name: string; phone: string; email: string; company: string; need: string; budget: string; summary: string };

async function storeLead(input: LeadInput, locale: string, attribution: ReturnType<typeof cleanAttribution>, page: string) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  const clip = (s: string, n: number) => String(s ?? "").trim().slice(0, n);
  const lead = {
    name: clip(input.name, 120) || "Pengunjung chat",
    company: clip(input.company, 160) || null,
    // leads.email is required; chat visitors often give only WhatsApp.
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email) ? clip(input.email, 200) : "tanpa-email@chat.agsora",
    phone: clip(input.phone, 40),
    need: clip(input.need, 120) || null,
    budget: clip(input.budget, 120) || null,
    description: clip(`[Asisten AI] ${input.summary}`, 4000),
    source_page: clip(page, 300) || "chat",
    locale: ["id", "en", "zh"].includes(locale) ? locale : "id",
  };
  if (!lead.phone) return "Nomor WhatsApp belum ada.";
  if (url && key) {
    const insert = (row: object) =>
      fetch(`${url}/rest/v1/leads`, { method: "POST", headers: { apikey: key, "Content-Type": "application/json", Prefer: "return=minimal" }, body: JSON.stringify(row) });
    let res = await insert(attribution ? { ...lead, attribution } : lead);
    if (!res.ok && attribution) res = await insert(lead);
    if (!res.ok) return "Gagal menyimpan.";
  }
  await pushOwner(`Lead dari asisten AI: ${lead.name}${lead.company ? ` (${lead.company})` : ""}\nWA: ${lead.phone}\nKebutuhan: ${lead.need ?? "-"}\nSumber: ${channelOf(attribution)}\n\n${input.summary}`);
  return null;
}

function systemPrompt(site: Awaited<ReturnType<typeof getSiteData>>) {
  const prices = site.pricing
    .map((p) => `- ${p.name.id}: ${p.price === null ? "sesuai kebutuhan" : `mulai ${formatRupiah(p.price, "id")}${p.unit ? ` ${p.unit.id}` : ""}`}`)
    .join("\n");
  const promo = site.promo.enabled && site.promo.discountPct > 0 ? `\nPromo aktif: ${site.promo.title} (${site.promo.code}), diskon ${site.promo.discountPct}%${site.promo.validUntil ? ` sampai ${site.promo.validUntil}` : ""}.` : "";
  return `You are the website assistant of ${siteConfig.legalName} (${siteConfig.brandMark}), an Indonesian software house in Sumatera Utara that builds websites, mobile apps, POS, HRIS, CRM, ERP, dashboards, AI automation and integrations for businesses.

Your job: answer visitors' questions about services, process and prices briefly and helpfully, then invite serious visitors to leave their name and WhatsApp number so the team can send a proposal.

Price list (starting prices, before tax; the final price depends on scope):
${prices}${promo}

How we work: a written contract, a proposal with clear scope, payment in 2 instalments (50/50) or 3 (30/50/20), a 30-day bug warranty after handover, and optional monthly maintenance. Simple websites take about 1-2 weeks, business systems about 2-5 weeks.

Rules:
- Reply in the visitor's language (Indonesian by default). Keep replies short: 2-5 sentences, plain text, no markdown tables.
- Quote only the prices above and say they are starting prices. Never promise a final price, a discount that is not listed, or a deadline; the team confirms those in the proposal.
- When the visitor wants a proposal, a call or to be contacted, ask for their name and WhatsApp number (company, email and budget are optional). Once you have name and number, call save_lead once, then tell them the team will contact them on WhatsApp.
- Do not ask for passwords, ID numbers or payment details. Do not discuss topics unrelated to the company's services; politely steer back.
- Contact: email ${site.contact.email}, WhatsApp ${site.contact.whatsappNumber}.`;
}

export async function POST(request: Request) {
  if (!process.env.ANTHROPIC_API_KEY) return Response.json({ error: "disabled" }, { status: 503 });
  if (!rateLimit(`assistant:${clientIp(request)}`, 20, 10 * 60_000)) return Response.json({ error: "rate" }, { status: 429 });

  let body: { messages?: unknown; locale?: string; attribution?: unknown; page?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "bad" }, { status: 400 });
  }

  // Text-only history from the browser, trimmed to keep requests small and abuse cheap.
  const history: Anthropic.Beta.BetaMessageParam[] = (Array.isArray(body.messages) ? body.messages : [])
    .slice(-16)
    .map((m) => m as { role?: string; content?: unknown })
    .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string" && m.content.trim())
    .map((m) => ({ role: m.role as "user" | "assistant", content: String(m.content).slice(0, 1500) }));
  if (!history.length || history[history.length - 1].role !== "user") return Response.json({ error: "bad" }, { status: 400 });
  while (history.length && history[0].role !== "user") history.shift();

  const site = await getSiteData();
  const client = new Anthropic();
  const attribution = cleanAttribution(body.attribution);
  const messages = [...history];
  let leadSaved = false;

  try {
    for (let turn = 0; turn < 3; turn++) {
      const response = await client.beta.messages.create({
        model: MODEL,
        max_tokens: 2000,
        betas: ["server-side-fallback-2026-07-01"],
        fallbacks: "default",
        output_config: { effort: "low" },
        system: [{ type: "text", text: systemPrompt(site), cache_control: { type: "ephemeral" } }],
        tools: [SAVE_LEAD],
        messages,
      });

      if (response.stop_reason === "refusal") {
        return Response.json({ reply: "Maaf, saya tidak bisa membantu untuk itu. Silakan hubungi tim kami lewat WhatsApp.", leadSaved });
      }

      const toolUses = response.content.filter((b): b is Anthropic.Beta.BetaToolUseBlock => b.type === "tool_use");
      if (response.stop_reason !== "tool_use" || !toolUses.length) {
        const reply = response.content
          .filter((b): b is Anthropic.Beta.BetaTextBlock => b.type === "text")
          .map((b) => b.text)
          .join("\n")
          .trim();
        return Response.json({ reply: reply || "Ada yang bisa saya bantu?", leadSaved });
      }

      messages.push({ role: "assistant", content: response.content });
      const results: Anthropic.Beta.BetaToolResultBlockParam[] = [];
      for (const use of toolUses) {
        if (use.name !== "save_lead" || leadSaved) {
          results.push({ type: "tool_result", tool_use_id: use.id, content: leadSaved ? "Lead sudah tersimpan." : "Unknown tool.", is_error: !leadSaved });
          continue;
        }
        const err = await storeLead(use.input as LeadInput, String(body.locale ?? "id"), attribution, String(body.page ?? ""));
        if (!err) leadSaved = true;
        results.push({ type: "tool_result", tool_use_id: use.id, content: err ?? "Tersimpan. Tim akan menghubungi lewat WhatsApp.", is_error: Boolean(err) });
      }
      messages.push({ role: "user", content: results });
    }
    return Response.json({ reply: "Terima kasih! Tim kami akan segera menghubungi Anda.", leadSaved });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) return Response.json({ error: "busy" }, { status: 429 });
    console.error("assistant failed", error instanceof Anthropic.APIError ? error.status : error);
    return Response.json({ error: "failed" }, { status: 502 });
  }
}
