import "server-only";
import { siteConfig } from "@/config/site";
import { buildInvoicePdf } from "@/lib/invoice-pdf";
import { sendMail } from "@/lib/mail";
import { clientLink, idr, invoiceNumber, type Invoice, type Quote } from "@/lib/quote";
import { getSiteData } from "@/lib/site-content";
import { sbUpdate } from "@/lib/supabase";

/** Shared by the manual buttons and the daily reminder job. Returns an error message or null. */
export async function emailInvoice(inv: Invoice, q: Quote, reminder: boolean): Promise<string | null> {
  const site = await getSiteData();
  const number = invoiceNumber(inv);
  const pdf = Buffer.from(await buildInvoicePdf(inv, q, site)).toString("base64");
  const link = q.share_token ? `\nLihat semua dokumen dan status pembayaran: ${clientLink(siteConfig.url, q.share_token)}\n` : "";
  const err = await sendMail({
    to: [q.client_email!],
    replyTo: site.contact.email,
    bccOwner: true,
    subject: `${reminder ? "Pengingat pembayaran" : "Invoice"} ${number} - ${siteConfig.brandMark}`,
    text: [
      `Yth. ${q.client_name},`,
      "",
      reminder
        ? `Kami mengingatkan bahwa invoice ${number} sebesar ${idr(inv.amount)} (${inv.label}) belum kami terima dan jatuh tempo pada ${inv.due_date}. Abaikan pesan ini bila Anda sudah membayar.`
        : `Terlampir invoice ${number} sebesar ${idr(inv.amount)} untuk ${inv.label}, jatuh tempo ${inv.due_date}.`,
      link,
      "Mohon sertakan nomor invoice pada berita transfer dan kirim bukti transfer ke email ini.",
      "",
      "Salam,",
      siteConfig.legalName,
    ].join("\n"),
    attachments: [{ filename: `Invoice-${number.replace(/\//g, "-")}.pdf`, content: pdf }],
  });
  if (err) return err;
  await sbUpdate("invoices", reminder ? { last_reminder_at: new Date().toISOString(), sent_at: inv.sent_at ?? new Date().toISOString() } : { sent_at: new Date().toISOString() }, `id=eq.${inv.id}`);
  return null;
}
