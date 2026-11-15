"use server";

import { revalidatePath } from "next/cache";
import { isAdmin } from "@/lib/admin-auth";
import { CONTENT_STATUSES, type ContentStatus } from "@/lib/content";
import { sbWrite } from "@/lib/supabase";

const refresh = () => revalidatePath("/admin/content");
const text = (f: FormData, name: string, max: number) => {
  const v = f.get(name);
  return typeof v === "string" && v.trim() ? v.trim().slice(0, max) : null;
};
const date = (f: FormData) => {
  const v = String(f.get("publish_date") ?? "");
  return /^\d{4}-\d{2}-\d{2}$/.test(v) ? v : null;
};
const id = (f: FormData) => {
  const n = Number(f.get("id"));
  return Number.isInteger(n) && n > 0 ? n : null;
};
const status = (f: FormData): ContentStatus => {
  const v = f.get("status") as ContentStatus;
  return CONTENT_STATUSES.includes(v) ? v : "idea";
};
const link = (f: FormData) => {
  const v = text(f, "link", 500);
  return v && /^https?:\/\//i.test(v) ? v : null;
};

export async function addContent(formData: FormData) {
  if (!(await isAdmin())) return;
  const title = text(formData, "title", 200);
  const publish_date = date(formData);
  const channel = text(formData, "channel", 60);
  if (!title || !publish_date || !channel) return;
  await sbWrite("content_items", "POST", {
    title,
    publish_date,
    channel,
    format: text(formData, "format", 60),
    caption: text(formData, "caption", 4000),
    status: status(formData),
    pic: text(formData, "pic", 120),
    link: link(formData),
  });
  refresh();
}

export async function updateContent(formData: FormData) {
  if (!(await isAdmin())) return;
  const itemId = id(formData);
  const title = text(formData, "title", 200);
  const publish_date = date(formData);
  const channel = text(formData, "channel", 60);
  if (!itemId || !title || !publish_date || !channel) return;
  await sbWrite(
    "content_items",
    "PATCH",
    {
      title,
      publish_date,
      channel,
      format: text(formData, "format", 60),
      caption: text(formData, "caption", 4000),
      status: status(formData),
      pic: text(formData, "pic", 120),
      link: link(formData),
    },
    `id=eq.${itemId}`
  );
  refresh();
}

export async function deleteContent(formData: FormData) {
  if (!(await isAdmin())) return;
  const itemId = id(formData);
  if (!itemId) return;
  await sbWrite("content_items", "DELETE", undefined, `id=eq.${itemId}`);
  refresh();
}
