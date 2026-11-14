export const CANDIDATE_STAGES = ["applied", "screening", "interview", "test", "offer", "hired", "rejected"] as const;
export type CandidateStage = (typeof CANDIDATE_STAGES)[number];

export const stageLabel: Record<CandidateStage, string> = {
  applied: "Masuk",
  screening: "Screening",
  interview: "Interview",
  test: "Tes",
  offer: "Offer",
  hired: "Diterima",
  rejected: "Ditolak",
};

export type Job = { id: number; title: string; department: string | null; status: "open" | "closed"; created_at: string };

export type Candidate = {
  id: number;
  job_id: number;
  name: string;
  email: string | null;
  phone: string | null;
  cv_url: string | null;
  source: string | null;
  stage: CandidateStage;
  interview_at: string | null;
  notes: string | null;
  created_at: string;
};

/** The next stage in the normal flow (null once hired or rejected). */
export function nextStage(stage: CandidateStage): CandidateStage | null {
  const flow: CandidateStage[] = ["applied", "screening", "interview", "test", "offer", "hired"];
  const i = flow.indexOf(stage);
  return i >= 0 && i < flow.length - 1 ? flow[i + 1] : null;
}
