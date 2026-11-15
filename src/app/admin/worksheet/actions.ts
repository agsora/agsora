"use server";

import { revalidatePath } from "next/cache";
import { getSession } from "@/lib/admin-auth";
import { LEAD_SEGMENTS, LEAD_STATUSES, type Followup, type LeadSegment, type LeadStatus } from "@/lib/lead-status";
import { queryLeads } from "@/lib/leads-db";
import { sbWrite } from "@/lib/supabase";

const refresh = () => revalidatePath("/admin/worksheet");

/** The signed-in sales agent's id, or null. Every action below only touches leads assigned to that agent. */
async function salesId() {
  const s = await getSession();
  return s?.role === "sales" ? s.id : null;
}

const leadId = (f: FormData) => {
  const n = Number(f.get("id"));
  return Number.isInteger(n) && n > 0 ? n : null;
};

/** Log one follow-up on the agent's own lead; the lead moves to the next stage and becomes "contacted". */
export async function salesLogFollowup(formData: FormData) {
  const sid = await salesId();
  const id = leadId(formData);
  const note = String(formData.get("note") ?? "").trim().slice(0, 500);
  if (!sid || !id || !note) return;

  const lead = (await queryLeads(`select=id,status,followups&id=eq.${id}&assigned_to=eq.${sid}`))?.[0];
  if (!lead) return;
  const followups: Followup[] = [...lead.followups, { at: new Date().toISOString(), note }];
  await sbWrite("leads", "PATCH", { followups, ...(lead.status === "new" ? { status: "contacted" } : {}) }, `id=eq.${id}&assigned_to=eq.${sid}`);
  refresh();
}

/** What the client wants, segment, status, deal value and lost reason. */
export async function salesUpdateLead(formData: FormData) {
  const sid = await salesId();
  const id = leadId(formData);
  if (!sid || !id) return;

  const text = (name: string, max: number) => {
    const v = formData.get(name);
    return typeof v === "string" && v.trim() ? v.trim().slice(0, max) : null;
  };
  const segment = formData.get("segment") as LeadSegment;
  const status = formData.get("status") as LeadStatus;
  const dealRaw = String(formData.get("deal_value") ?? "").replace(/\D/g, "");

  await sbWrite(
    "leads",
    "PATCH",
    {
      wishes: text("wishes", 3000),
      segment: LEAD_SEGMENTS.includes(segment) ? segment : null,
      ...(LEAD_STATUSES.includes(status) ? { status } : {}),
      deal_value: dealRaw ? Math.min(Number(dealRaw), 1e13) : null,
      lost_reason: text("lost_reason", 300),
    },
    `id=eq.${id}&assigned_to=eq.${sid}`
  );
  refresh();
}
