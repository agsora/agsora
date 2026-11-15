"use server";

import { redirect } from "next/navigation";
import { notifyOwner } from "@/lib/mail";
import { quoteByToken } from "@/lib/client-portal";
import { quoteNumber } from "@/lib/quote";
import { saveDocument, type DocKind } from "@/lib/storage";
import { sbUpdate } from "@/lib/supabase";

const back = (token: string, notice: string): never => redirect(`/p/${token}?notice=${encodeURIComponent(notice)}`);

/** The client accepts the proposal; the owner is told by email. Accepting twice changes nothing. */
export async function acceptQuote(formData: FormData) {
  const token = String(formData.get("token") ?? "");
  const q = await quoteByToken(token);
  if (!q) redirect("/");
  const name = String(formData.get("name") ?? "").trim().slice(0, 160);
  if (name.length < 2) back(token, "Mohon isi nama Anda untuk menyetujui penawaran.");
  if (formData.get("agree") !== "on") back(token, "Mohon centang pernyataan persetujuan.");
  if (!q.accepted_at) {
    const done = await sbUpdate("quotes", { accepted_at: new Date().toISOString(), accepted_name: name, client_note: null }, `share_token=eq.${token}&accepted_at=is.null`);
    if (done?.length) {
      await notifyOwner(
        `Penawaran ${quoteNumber(q)} disetujui klien`,
        `${name} (${q.client_company || q.client_name}) menyetujui penawaran ${quoteNumber(q)}.\n\nLangkah berikutnya: kirim perjanjian dan terbitkan invoice uang muka dari dashboard.`,
      );
    }
  }
  back(token, "Terima kasih, penawaran sudah Anda setujui. Tim kami akan segera mengirim perjanjian.");
}

/** The client asks for changes instead of accepting. */
export async function requestRevision(formData: FormData) {
  const token = String(formData.get("token") ?? "");
  const q = await quoteByToken(token);
  if (!q) redirect("/");
  if (q.accepted_at) back(token, "Penawaran ini sudah disetujui.");
  const note = String(formData.get("note") ?? "").trim().slice(0, 1500);
  if (note.length < 3) back(token, "Mohon tulis bagian yang ingin diubah.");
  await sbUpdate("quotes", { client_note: note }, `share_token=eq.${token}`);
  await notifyOwner(`Klien minta perubahan pada penawaran ${quoteNumber(q)}`, `${q.client_company || q.client_name} menulis:\n\n${note}`);
  back(token, "Permintaan perubahan sudah kami terima. Kami akan menghubungi Anda.");
}

/** The client uploads a signed agreement, signed handover or another file. */
export async function uploadClientDocument(formData: FormData) {
  const token = String(formData.get("token") ?? "");
  const q = await quoteByToken(token);
  if (!q || !q.accepted_at) redirect("/");
  const kind = String(formData.get("kind")) as DocKind;
  const err = await saveDocument(q.id, formData.get("file"), ["contract", "bast", "other"].includes(kind) ? kind : "other", "client");
  if (!err) await notifyOwner(`Klien mengunggah dokumen: ${quoteNumber(q)}`, `${q.client_company || q.client_name} mengunggah dokumen (${kind}). Periksa di dashboard.`);
  back(token, err ?? "Dokumen terkirim. Terima kasih.");
}
