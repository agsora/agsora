export const CONTENT_STATUSES = ["idea", "draft", "review", "approved", "published"] as const;
export type ContentStatus = (typeof CONTENT_STATUSES)[number];

export const contentStatusLabel: Record<ContentStatus, string> = {
  idea: "Ide",
  draft: "Draft",
  review: "Review",
  approved: "Disetujui",
  published: "Terbit",
};

export const CONTENT_CHANNELS = ["Instagram", "TikTok", "LinkedIn", "YouTube", "Facebook", "Blog / Website", "WhatsApp Status"] as const;
export const CONTENT_FORMATS = ["Post", "Carousel", "Reel / Short", "Story", "Video", "Artikel"] as const;

export type ContentItem = {
  id: number;
  publish_date: string;
  channel: string;
  format: string | null;
  title: string;
  caption: string | null;
  status: ContentStatus;
  pic: string | null;
  link: string | null;
  created_at: string;
};

/** Weeks of a month as ISO dates, Monday first, padded with the neighbouring months' days. */
export function monthGrid(year: number, month: number): { date: string; inMonth: boolean }[] {
  const first = new Date(Date.UTC(year, month - 1, 1));
  const offset = (first.getUTCDay() + 6) % 7; // Monday = 0
  const days = new Date(Date.UTC(year, month, 0)).getUTCDate();
  const total = Math.ceil((offset + days) / 7) * 7;
  return Array.from({ length: total }, (_, i) => {
    const d = new Date(Date.UTC(year, month - 1, 1 - offset + i));
    return { date: d.toISOString().slice(0, 10), inMonth: d.getUTCMonth() === month - 1 };
  });
}
