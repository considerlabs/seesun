"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { del, put } from "@vercel/blob";
import { requireAdminSession } from "@/lib/auth";
import { validateAttachments } from "@/lib/attachments";
import {
  createNotice,
  deleteNotice,
  getNotice,
  updateNotice,
  type Attachment,
} from "@/lib/notices-db";

export type NoticeFormState = { error?: string };

function readNotice(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const summary = String(formData.get("summary") ?? "").trim();
  const author = String(formData.get("author") ?? "").trim();
  if (!title || !summary || !author) {
    return { error: "제목, 내용, 글쓴이를 모두 입력해 주세요." };
  }
  return { title, summary, author };
}

function getUploadedFiles(formData: FormData) {
  return formData.getAll("attachments").filter((file): file is File => file instanceof File && file.size > 0);
}

async function uploadAttachments(formData: FormData): Promise<Attachment[] | { error: string }> {
  const files = getUploadedFiles(formData);
  const message = validateAttachments(files);
  if (message) return { error: message };

  try {
    return await Promise.all(
      files.map(async (file) => {
        const blob = await put(`notices/${file.name}`, file, {
          access: "public",
          addRandomSuffix: true,
        });
        return { url: blob.url, name: file.name, size: file.size };
      })
    );
  } catch {
    return { error: "첨부파일 업로드에 실패했습니다. 파일 용량을 확인한 뒤 다시 시도해 주세요." };
  }
}

function revalidateNotices() {
  revalidatePath("/admin");
  revalidatePath("/notices");
  revalidatePath("/");
}

export async function createNoticeAction(
  _prev: NoticeFormState,
  formData: FormData
): Promise<NoticeFormState> {
  await requireAdminSession();
  const fields = readNotice(formData);
  if ("error" in fields) return fields;

  const attachments = await uploadAttachments(formData);
  if ("error" in attachments) return attachments;

  await createNotice({ ...fields, attachments });
  revalidateNotices();
  redirect("/admin");
}

export async function updateNoticeAction(
  id: number,
  _prev: NoticeFormState,
  formData: FormData
): Promise<NoticeFormState> {
  await requireAdminSession();
  const fields = readNotice(formData);
  if ("error" in fields) return fields;

  const existing = await getNotice(id);
  const removedUrls = new Set(formData.getAll("removeAttachment").map(String));
  const kept = (existing?.attachments ?? []).filter((attachment) => !removedUrls.has(attachment.url));
  await Promise.all([...removedUrls].map((url) => del(url)));

  const newAttachments = await uploadAttachments(formData);
  if ("error" in newAttachments) return newAttachments;

  await updateNotice(id, { ...fields, attachments: [...kept, ...newAttachments] });
  revalidateNotices();
  redirect("/admin");
}

export async function deleteNoticeAction(id: number) {
  await requireAdminSession();
  const notice = await getNotice(id);
  await deleteNotice(id);
  if (notice?.attachments.length) {
    await Promise.all(notice.attachments.map((attachment) => del(attachment.url)));
  }
  revalidateNotices();
  redirect("/admin");
}
