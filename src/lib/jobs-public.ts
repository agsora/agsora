import "server-only";
import { JOBS_TAG, type JobPost } from "@/lib/recruitment";

/**
 * Open, published jobs for the public careers page. Cached and tagged, so a change in the dashboard
 * (updateTag(JOBS_TAG)) shows on the site without a redeploy. Empty when Supabase or the columns are missing.
 */
export async function getPublishedJobs(): Promise<JobPost[]> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) return [];
  try {
    const res = await fetch(`${url}/rest/v1/jobs?select=id,title,department,status,kind,location,summary,description,published,created_at&published=eq.true&status=eq.open&order=created_at.desc`, {
      headers: { apikey: key },
      next: { tags: [JOBS_TAG], revalidate: 600 },
    });
    return res.ok ? ((await res.json()) as JobPost[]) : [];
  } catch {
    return [];
  }
}
