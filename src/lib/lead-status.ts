export const LEAD_STATUSES = ["new", "contacted", "won", "lost"] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];

export const LEAD_SEGMENTS = ["hot", "warm", "cold"] as const;
export type LeadSegment = (typeof LEAD_SEGMENTS)[number];

export type Followup = { at: string; note: string };

export type Lead = {
  id: number;
  name: string;
  company: string | null;
  email: string;
  phone: string;
  need: string | null;
  budget: string | null;
  description: string;
  plan: string | null;
  source_page: string | null;
  locale: string;
  status: LeadStatus;
  created_at: string;
  segment: LeadSegment | null;
  deal_value: number | null;
  lost_reason: string | null;
  notes: string | null;
  followups: Followup[];
};

export const statusLabel: Record<LeadStatus, string> = {
  new: "Baru",
  contacted: "Dihubungi",
  won: "Menang",
  lost: "Batal",
};

export const segmentLabel: Record<LeadSegment, string> = { hot: "HOT", warm: "WARM", cold: "COLD" };

/** A lead is open until it is won or lost. */
export const isOpen = (lead: Pick<Lead, "status">) => lead.status === "new" || lead.status === "contacted";

/** Follow-up stages: due once the lead is this many days old and the stage is not logged yet. */
export const FOLLOWUP_STAGES = [
  { stage: 1, title: "Follow Up 1", hint: "H+3 sejak lead masuk", dueDays: 3 },
  { stage: 2, title: "Follow Up 2", hint: "H+7", dueDays: 7 },
  { stage: 3, title: "Follow Up 3", hint: "H+14", dueDays: 14 },
  { stage: 4, title: "Menunggu Keputusan", hint: "Sudah 3x follow up", dueDays: 30 },
] as const;

/** Default WhatsApp messages per stage; {nama} and {kebutuhan} are filled per lead. */
export const FOLLOWUP_TEMPLATES: Record<1 | 2 | 3, string> = {
  1: "Halo {nama}, saya dari AG·SORA. Beberapa hari lalu Anda menghubungi kami soal {kebutuhan}. Apakah ada yang bisa kami jelaskan lebih lanjut?",
  2: "Halo {nama}, kami menindaklanjuti kebutuhan {kebutuhan}. Kami bisa jadwalkan diskusi singkat 15 menit untuk membahas lingkup dan estimasi biayanya. Kapan Anda ada waktu?",
  3: "Halo {nama}, ini follow up terakhir dari AG·SORA. Jika kebutuhan {kebutuhan} masih direncanakan, kami siap membantu kapan saja. Terima kasih.",
};

/** Current time; kept in a helper so server pages stay lint-clean about render purity. */
export const nowMs = () => Date.now();

export function daysSince(iso: string, now = Date.now()) {
  return Math.floor((now - new Date(iso).getTime()) / 86_400_000);
}

/** Stage the lead sits in: 1-3 = next follow-up to do, 4 = all done. */
export function followupStage(lead: Pick<Lead, "followups">) {
  return Math.min((lead.followups?.length ?? 0) + 1, 4);
}

export function followupDue(lead: Pick<Lead, "followups" | "created_at">, now = Date.now()) {
  const stage = followupStage(lead);
  const def = FOLLOWUP_STAGES[stage - 1];
  return daysSince(lead.created_at, now) >= def.dueDays;
}

export function waLink(phone: string, text?: string) {
  const digits = phone.replace(/\D/g, "");
  const intl = digits.startsWith("0") ? `62${digits.slice(1)}` : digits;
  return `https://wa.me/${intl}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

export function fillTemplate(template: string, lead: Pick<Lead, "name" | "need">) {
  return template
    .replace("{nama}", lead.name.split(" ")[0] || lead.name)
    .replace("{kebutuhan}", lead.need ? lead.need : "sistem yang Anda butuhkan");
}
