"use server";

import { cookies, headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { ADMIN_COOKIE, checkPassword, isAdmin, sessionToken } from "@/lib/admin-auth";
import { LEAD_SEGMENTS, LEAD_STATUSES, type Followup, type LeadSegment, type LeadStatus } from "@/lib/lead-status";
import { patchLead, queryLeads } from "@/lib/leads-db";
import { clientIp, rateLimit } from "@/lib/rate-limit";

function refresh() {
  revalidatePath("/admin", "layout");
}

export async function login(_: string | null, formData: FormData): Promise<string | null> {
  const h = await headers();
  const ip = clientIp(new Request("http://x", { headers: h }));
  if (!rateLimit(`admin-login:${ip}`, 5, 10 * 60_000)) return "Terlalu banyak percobaan. Coba lagi nanti.";

  const password = formData.get("password");
  if (typeof password !== "string" || !checkPassword(password)) return "Password salah.";

  (await cookies()).set(ADMIN_COOKIE, sessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  refresh();
  return null;
}

export async function logout() {
  (await cookies()).delete({ name: ADMIN_COOKIE, path: "/" });
  refresh();
}

function leadId(formData: FormData) {
  const id = Number(formData.get("id"));
  return Number.isInteger(id) && id > 0 ? id : null;
}

export async function setStatus(formData: FormData) {
  if (!(await isAdmin())) return;
  const id = leadId(formData);
  const status = formData.get("status") as LeadStatus;
  if (!id || !LEAD_STATUSES.includes(status)) return;
  await patchLead(id, { status });
  refresh();
}

/** Segment, deal value, lost reason and notes from the lead editor. */
export async function updateLead(formData: FormData) {
  if (!(await isAdmin())) return;
  const id = leadId(formData);
  if (!id) return;

  const text = (name: string, max: number) => {
    const v = formData.get(name);
    return typeof v === "string" && v.trim() ? v.trim().slice(0, max) : null;
  };
  const segment = formData.get("segment") as LeadSegment;
  const dealRaw = String(formData.get("deal_value") ?? "").replace(/\D/g, "");

  await patchLead(id, {
    segment: LEAD_SEGMENTS.includes(segment) ? segment : null,
    deal_value: dealRaw ? Math.min(Number(dealRaw), 1e13) : null,
    lost_reason: text("lost_reason", 300),
    notes: text("notes", 2000),
  });
  refresh();
}

/** Log one follow-up; the lead moves to the next stage and is marked contacted. */
export async function logFollowup(formData: FormData) {
  if (!(await isAdmin())) return;
  const id = leadId(formData);
  const note = String(formData.get("note") ?? "").trim().slice(0, 500);
  if (!id || !note) return;

  const rows = await queryLeads(`select=id,status,followups&id=eq.${id}`);
  const lead = rows?.[0];
  if (!lead) return;

  const followups: Followup[] = [...lead.followups, { at: new Date().toISOString(), note }];
  await patchLead(id, { followups, ...(lead.status === "new" ? { status: "contacted" } : {}) });
  refresh();
}
