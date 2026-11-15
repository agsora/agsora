import "server-only";
import { pushOwner } from "@/lib/notify";

type Attachment = { filename: string; content: string };

/**
 * Send one email through Resend. Returns an error message, or null on success.
 * The owner address (LEAD_NOTIFY_EMAIL) is added as bcc when `bccOwner` is set.
 */
export async function sendMail(opts: { to: string[]; subject: string; text: string; replyTo?: string; attachments?: Attachment[]; bccOwner?: boolean }): Promise<string | null> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return "Pengiriman email belum aktif: RESEND_API_KEY belum diisi.";
  const owner = process.env.LEAD_NOTIFY_EMAIL;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL ?? "AGSORA <onboarding@resend.dev>",
      to: opts.to,
      ...(opts.bccOwner && owner ? { bcc: [owner] } : {}),
      ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
      subject: opts.subject,
      text: opts.text,
      ...(opts.attachments ? { attachments: opts.attachments } : {}),
    }),
  });
  return res.ok ? null : "Email gagal dikirim. Periksa konfigurasi Resend (domain pengirim harus terverifikasi).";
}

/** Tell the owner something happened, by email and on the phone (Telegram/WhatsApp, see lib/notify). Silent when not configured. */
export async function notifyOwner(subject: string, text: string): Promise<void> {
  const owner = process.env.LEAD_NOTIFY_EMAIL;
  await Promise.allSettled([owner ? sendMail({ to: [owner], subject, text }) : Promise.resolve(null), pushOwner(`${subject}\n\n${text}`)]);
}
