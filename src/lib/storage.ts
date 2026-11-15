import "server-only";
import { uploadToDrive } from "@/lib/gdrive";
import { sbInsert, sbSelect } from "@/lib/supabase";

/** Private Supabase Storage bucket for signed agreements, handover certificates and other project files. */
const BUCKET = "documents";
export const MAX_UPLOAD = 4 * 1024 * 1024;
const TYPES: Record<string, string> = { "application/pdf": "pdf", "image/png": "png", "image/jpeg": "jpg" };

export type DocKind = "contract" | "bast" | "other";
export const docKindLabel: Record<DocKind, string> = { contract: "Perjanjian bertanda tangan", bast: "BAST bertanda tangan", other: "Dokumen lain" };

export type DocumentRow = {
  id: number;
  quote_id: number;
  kind: DocKind;
  uploaded_by: "client" | "owner";
  filename: string;
  path: string;
  size_bytes: number | null;
  created_at: string;
};

function config() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  return url && key ? { url, key } : null;
}

/** Validate and store one uploaded file for a quote. Returns an error message, or null on success. */
export async function saveDocument(quoteId: number, file: unknown, kind: DocKind, by: "client" | "owner"): Promise<string | null> {
  const db = config();
  if (!db) return "Penyimpanan belum dikonfigurasi.";
  if (!(file instanceof File) || file.size === 0) return "Pilih file terlebih dahulu.";
  if (file.size > MAX_UPLOAD) return "Ukuran file maksimal 4 MB.";
  const ext = TYPES[file.type];
  if (!ext) return "Format file harus PDF, PNG, atau JPG.";

  const name = file.name.replace(/[^\w.\- ]/g, "_").slice(0, 120) || `dokumen.${ext}`;
  const path = `quote-${quoteId}/${Date.now()}-${crypto.randomUUID().slice(0, 8)}.${ext}`;
  const res = await fetch(`${db.url}/storage/v1/object/${BUCKET}/${path}`, {
    method: "POST",
    headers: { apikey: db.key, Authorization: `Bearer ${db.key}`, "Content-Type": file.type, "x-upsert": "false" },
    body: Buffer.from(await file.arrayBuffer()),
  });
  if (!res.ok) return "Gagal mengunggah file. Pastikan migrasi penyimpanan dokumen sudah dijalankan.";
  const row = await sbInsert("documents", { quote_id: quoteId, kind, uploaded_by: by, filename: name, path, size_bytes: file.size });
  return row ? null : "File terunggah, tetapi gagal dicatat.";
}

export async function documentsOf(quoteId: number): Promise<DocumentRow[]> {
  return (await sbSelect<DocumentRow>("documents", `select=*&quote_id=eq.${quoteId}&order=created_at.desc`)) ?? [];
}

/** Stream a stored file back as a download. */
export async function documentResponse(doc: DocumentRow): Promise<Response> {
  const db = config();
  if (!db) return new Response("Not found", { status: 404 });
  const res = await fetch(`${db.url}/storage/v1/object/${BUCKET}/${doc.path}`, { headers: { apikey: db.key, Authorization: `Bearer ${db.key}` }, cache: "no-store" });
  if (!res.ok || !res.body) return new Response("Not found", { status: 404 });
  return new Response(res.body, {
    headers: {
      "Content-Type": res.headers.get("content-type") ?? "application/octet-stream",
      "Content-Disposition": `attachment; filename="${doc.filename.replace(/"/g, "")}"`,
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}

/* ------------------------------------------------------------------ */
/* Job application files (CV, certificates, portfolio).                */
/* ------------------------------------------------------------------ */

export type ApplicationFile = { name: string; url?: string; path?: string; size: number };

const APPLY_TYPES: Record<string, { ext: string; magic: number[] }> = {
  "application/pdf": { ext: "pdf", magic: [0x25, 0x50, 0x44, 0x46] },
  "image/png": { ext: "png", magic: [0x89, 0x50, 0x4e, 0x47] },
  "image/jpeg": { ext: "jpg", magic: [0xff, 0xd8, 0xff] },
  "application/msword": { ext: "doc", magic: [0xd0, 0xcf, 0x11, 0xe0] },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": { ext: "docx", magic: [0x50, 0x4b, 0x03, 0x04] },
};
export const APPLY_MAX_FILES = 3;

/** Check type, size and the file's first bytes (so a renamed file is refused). Returns an error code or null. */
export async function checkApplicationFile(file: File): Promise<string | null> {
  const t = APPLY_TYPES[file.type];
  if (!t) return "type";
  if (file.size === 0 || file.size > MAX_UPLOAD) return "size";
  const head = new Uint8Array(await file.slice(0, 4).arrayBuffer());
  return t.magic.every((b, i) => head[i] === b) ? null : "type";
}

/** Store one checked file: Google Drive when connected, otherwise the private Supabase bucket. */
export async function saveApplicationFile(file: File, applicant: string, job: string): Promise<ApplicationFile | null> {
  const t = APPLY_TYPES[file.type];
  const base = file.name.replace(/\.[^.]+$/, "").replace(/[^\w.\- ]/g, "_").slice(0, 80) || "dokumen";
  const name = `${new Date().toISOString().slice(0, 10)} ${applicant.replace(/[^\w.\- ]/g, "_").slice(0, 60)} - ${base}.${t.ext}`;
  const data = Buffer.from(await file.arrayBuffer());

  const drive = await uploadToDrive(name, file.type, data, `Lamaran ${job} dari ${applicant} (website)`);
  if (drive) return { name, url: drive.url, size: file.size };

  const db = config();
  if (!db) return null;
  const path = `applications/${Date.now()}-${crypto.randomUUID().slice(0, 8)}.${t.ext}`;
  const res = await fetch(`${db.url}/storage/v1/object/${BUCKET}/${path}`, {
    method: "POST",
    headers: { apikey: db.key, Authorization: `Bearer ${db.key}`, "Content-Type": file.type, "x-upsert": "false" },
    body: data,
  });
  return res.ok ? { name, path, size: file.size } : null;
}

/** Download an application file kept in Supabase (owner only; the caller checks). */
export async function applicationFileResponse(path: string): Promise<Response> {
  if (!/^applications\/[\w-]+\.(pdf|png|jpg|doc|docx)$/.test(path)) return new Response("Not found", { status: 404 });
  return documentResponse({ id: 0, quote_id: 0, kind: "other", uploaded_by: "client", filename: path.split("/")[1], path, size_bytes: null, created_at: "" });
}
