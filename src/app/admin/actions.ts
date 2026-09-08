"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createNotice, deleteNotice, updateNotice } from "@/lib/notices-db";

function readNotice(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const summary = String(formData.get("summary") ?? "").trim();
  if (!title || !summary) {
    throw new Error("제목과 내용을 모두 입력해 주세요.");
  }
  return { title, summary };
}

function revalidateNotices() {
  revalidatePath("/admin");
  revalidatePath("/notices");
  revalidatePath("/");
}

export async function createNoticeAction(formData: FormData) {
  await createNotice(readNotice(formData));
  revalidateNotices();
  redirect("/admin");
}

export async function updateNoticeAction(id: number, formData: FormData) {
  await updateNotice(id, readNotice(formData));
  revalidateNotices();
  redirect("/admin");
}

export async function deleteNoticeAction(id: number) {
  await deleteNotice(id);
  revalidateNotices();
  redirect("/admin");
}
