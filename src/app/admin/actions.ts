"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { del, put } from "@vercel/blob";
import { requireAdminSession } from "@/lib/auth";
import {
  createNotice,
  deleteNotice,
  getNotice,
  updateNotice,
  type Attachment,
} from "@/lib/notices-db";

function readNotice(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const summary = String(formData.get("summary") ?? "").trim();
  const author = String(formData.get("author") ?? "").trim();
  if (!title || !summary || !author) {
    throw new Error("제목, 내용, 글쓴이를 모두 입력해 주세요.");
  }
  return { title, summary, author };
}

async function uploadAttachments(formData: FormData): Promise<Attachment[]> {
  const files = formData.getAll("attachments").filter((f): f is File => f instanceof File && f.size > 0);
  const uploaded = await Promise.all(
    files.map(async (file) => {
      const blob = await put(`notices/${file.name}`, file, {
        access: "public",
        addRandomSuffix: true,
      });
      return { url: blob.url, name: file.name, size: file.size };
    })
  );
  return uploaded;
}

function revalidateNotices() {
  revalidatePath("/admin");
  revalidatePath("/notices");
  revalidatePath("/");
}

export async function createNoticeAction(formData: FormData) {
  await requireAdminSession();
  const attachments = await uploadAttachments(formData);
  await createNotice({ ...readNotice(formData), attachments });
  revalidateNotices();
  redirect("/admin");
}

export async function updateNoticeAction(id: number, formData: FormData) {
  await requireAdminSession();
  const existing = await getNotice(id);
  const removedUrls = new Set(formData.getAll("removeAttachment").map(String));
  const kept = (existing?.attachments ?? []).filter((a) => !removedUrls.has(a.url));
  await Promise.all([...removedUrls].map((url) => del(url)));
  const newAttachments = await uploadAttachments(formData);
  await updateNotice(id, { ...readNotice(formData), attachments: [...kept, ...newAttachments] });
  revalidateNotices();
  redirect("/admin");
}

export async function deleteNoticeAction(id: number) {
  await requireAdminSession();
  const notice = await getNotice(id);
  await deleteNotice(id);
  if (notice?.attachments.length) {
    await Promise.all(notice.attachments.map((a) => del(a.url)));
  }
  revalidateNotices();
  redirect("/admin");
}
