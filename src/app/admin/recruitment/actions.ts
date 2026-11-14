"use server";

import { revalidatePath } from "next/cache";
import { isAdmin } from "@/lib/admin-auth";
import { CANDIDATE_STAGES, type CandidateStage } from "@/lib/recruitment";
import { sbWrite } from "@/lib/supabase";

const refresh = () => revalidatePath("/admin/recruitment");
const text = (f: FormData, name: string, max: number) => {
  const v = f.get(name);
  return typeof v === "string" && v.trim() ? v.trim().slice(0, max) : null;
};
const num = (f: FormData, name: string) => {
  const n = Number(f.get(name));
  return Number.isInteger(n) && n > 0 ? n : null;
};

export async function addJob(formData: FormData) {
  if (!(await isAdmin())) return;
  const title = text(formData, "title", 160);
  if (!title) return;
  await sbWrite("jobs", "POST", { title, department: text(formData, "department", 120) });
  refresh();
}

export async function setJobStatus(formData: FormData) {
  if (!(await isAdmin())) return;
  const id = num(formData, "id");
  const status = formData.get("status");
  if (!id || (status !== "open" && status !== "closed")) return;
  await sbWrite("jobs", "PATCH", { status }, `id=eq.${id}`);
  refresh();
}

export async function addCandidate(formData: FormData) {
  if (!(await isAdmin())) return;
  const jobId = num(formData, "job_id");
  const name = text(formData, "name", 160);
  if (!jobId || !name) return;
  const cv = text(formData, "cv_url", 500);
  await sbWrite("candidates", "POST", {
    job_id: jobId,
    name,
    email: text(formData, "email", 200),
    phone: text(formData, "phone", 40),
    // Only http(s) links, so a pasted "javascript:" URL is never rendered as a link.
    cv_url: cv && /^https?:\/\//i.test(cv) ? cv : null,
    source: text(formData, "source", 120),
  });
  refresh();
}

export async function moveCandidate(formData: FormData) {
  if (!(await isAdmin())) return;
  const id = num(formData, "id");
  const stage = formData.get("stage") as CandidateStage;
  if (!id || !CANDIDATE_STAGES.includes(stage)) return;
  await sbWrite("candidates", "PATCH", { stage }, `id=eq.${id}`);
  refresh();
}

export async function updateCandidate(formData: FormData) {
  if (!(await isAdmin())) return;
  const id = num(formData, "id");
  if (!id) return;
  const when = text(formData, "interview_at", 40);
  // <input type="datetime-local"> is Jakarta wall time without an offset.
  const interview = when ? new Date(`${when}+07:00`) : null;
  await sbWrite(
    "candidates",
    "PATCH",
    {
      interview_at: interview && !isNaN(interview.getTime()) ? interview.toISOString() : null,
      notes: text(formData, "notes", 2000),
    },
    `id=eq.${id}`
  );
  refresh();
}

export async function deleteCandidate(formData: FormData) {
  if (!(await isAdmin())) return;
  const id = num(formData, "id");
  if (!id) return;
  await sbWrite("candidates", "DELETE", undefined, `id=eq.${id}`);
  refresh();
}
