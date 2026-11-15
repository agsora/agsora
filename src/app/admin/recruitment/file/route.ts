import { isAdmin } from "@/lib/admin-auth";
import { applicationFileResponse } from "@/lib/storage";

/** Download an applicant's document stored in Supabase (when Google Drive was not connected). Owner only. */
export async function GET(request: Request) {
  if (!(await isAdmin())) return new Response("Not found", { status: 404 });
  return applicationFileResponse(new URL(request.url).searchParams.get("path") ?? "");
}
