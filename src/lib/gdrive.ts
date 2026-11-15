import "server-only";

/**
 * Google Drive uploads with an OAuth refresh token of the company Google account (works for a normal Gmail account,
 * unlike a service account, which has no storage of its own). Scope "drive.file": the app only sees files it created.
 *
 * Env: GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN, optional GDRIVE_FOLDER_ID.
 * Without GDRIVE_FOLDER_ID the app creates (once) and reuses a folder named FOLDER_NAME in that Drive; the owner may
 * move that folder anywhere afterwards. GDRIVE_FOLDER_ID only works for a folder the app itself created, because
 * "drive.file" cannot write into folders made by hand.
 */
const FOLDER_NAME = "AG·SORA - Lamaran Kerja";

export function driveConfigured() {
  return Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET && process.env.GOOGLE_REFRESH_TOKEN);
}

let token: { value: string; until: number } | null = null;

async function accessToken(): Promise<string | null> {
  if (token && token.until > Date.now() + 60_000) return token.value;
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID ?? "",
      client_secret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN ?? "",
      grant_type: "refresh_token",
    }),
    cache: "no-store",
  });
  if (!res.ok) {
    console.error("[gdrive] token", res.status, await res.text().catch(() => ""));
    return null;
  }
  const j = (await res.json()) as { access_token: string; expires_in: number };
  token = { value: j.access_token, until: Date.now() + j.expires_in * 1000 };
  return token.value;
}

let folderId: string | null = process.env.GDRIVE_FOLDER_ID || null;

async function folder(auth: string): Promise<string | null> {
  if (folderId) return folderId;
  const q = encodeURIComponent(`name = '${FOLDER_NAME.replace(/'/g, "\\'")}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false`);
  const found = await fetch(`https://www.googleapis.com/drive/v3/files?q=${q}&fields=files(id)&pageSize=1`, { headers: { Authorization: `Bearer ${auth}` }, cache: "no-store" });
  const id = found.ok ? ((await found.json()) as { files: { id: string }[] }).files[0]?.id : undefined;
  if (id) return (folderId = id);
  const made = await fetch("https://www.googleapis.com/drive/v3/files?fields=id", {
    method: "POST",
    headers: { Authorization: `Bearer ${auth}`, "Content-Type": "application/json" },
    body: JSON.stringify({ name: FOLDER_NAME, mimeType: "application/vnd.google-apps.folder" }),
  });
  if (!made.ok) {
    console.error("[gdrive] folder", made.status, await made.text().catch(() => ""));
    return null;
  }
  return (folderId = ((await made.json()) as { id: string }).id);
}

/** Upload one file; returns its Drive link (visible to the Drive owner only), or null when Drive is unavailable. */
export async function uploadToDrive(name: string, mime: string, data: Buffer, description?: string): Promise<{ id: string; url: string } | null> {
  if (!driveConfigured()) return null;
  const auth = await accessToken();
  if (!auth) return null;
  const parent = await folder(auth);
  if (!parent) return null;

  const boundary = `agsora${crypto.randomUUID().replace(/-/g, "")}`;
  const meta = JSON.stringify({ name, parents: [parent], description });
  const body = Buffer.concat([
    Buffer.from(`--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${meta}\r\n--${boundary}\r\nContent-Type: ${mime}\r\n\r\n`),
    data,
    Buffer.from(`\r\n--${boundary}--`),
  ]);
  const res = await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&supportsAllDrives=true&fields=id,webViewLink", {
    method: "POST",
    headers: { Authorization: `Bearer ${auth}`, "Content-Type": `multipart/related; boundary=${boundary}` },
    body,
  });
  if (!res.ok) {
    console.error("[gdrive] upload", res.status, await res.text().catch(() => ""));
    return null;
  }
  const j = (await res.json()) as { id: string; webViewLink?: string };
  return { id: j.id, url: j.webViewLink ?? `https://drive.google.com/file/d/${j.id}/view` };
}
