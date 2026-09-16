"use client";

import { useActionState } from "react";
import { AttachmentField } from "@/components/AttachmentField";
import { formatFileSize } from "@/lib/attachments";
import type { Attachment } from "@/lib/notices-db";
import type { NoticeFormState } from "@/app/admin/actions";

type NoticeFormProps = {
  action: (state: NoticeFormState, formData: FormData) => Promise<NoticeFormState>;
  defaults?: {
    title: string;
    author: string;
    summary: string;
  };
  existingAttachments?: Attachment[];
  submitLabel: string;
};

export function NoticeForm({
  action,
  defaults,
  existingAttachments = [],
  submitLabel,
}: NoticeFormProps) {
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form
      action={formAction}
      className="mt-8 space-y-4 rounded-lg border border-line bg-surface p-6"
    >
      {state.error ? <p className="text-sm text-red-600">{state.error}</p> : null}
      <div>
        <label className="block text-sm text-muted" htmlFor="title">
          제목
        </label>
        <input
          id="title"
          name="title"
          required
          defaultValue={defaults?.title}
          className="mt-1 w-full rounded border border-line px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm text-muted" htmlFor="author">
          글쓴이
        </label>
        <input
          id="author"
          name="author"
          required
          defaultValue={defaults?.author ?? "관리자"}
          className="mt-1 w-full rounded border border-line px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm text-muted" htmlFor="summary">
          내용
        </label>
        <textarea
          id="summary"
          name="summary"
          required
          rows={6}
          defaultValue={defaults?.summary}
          className="mt-1 w-full rounded border border-line px-3 py-2"
        />
      </div>
      {existingAttachments.length > 0 ? (
        <div>
          <span className="block text-sm text-muted">기존 첨부파일</span>
          <ul className="mt-2 space-y-2">
            {existingAttachments.map((attachment) => (
              <li
                key={attachment.url}
                className="flex items-center gap-3 rounded border border-line px-3 py-2 text-sm"
              >
                <span className="min-w-0 flex-1 truncate">{attachment.name}</span>
                <span className="shrink-0 text-muted">{formatFileSize(attachment.size)}</span>
                <label className="flex shrink-0 items-center gap-1 text-red-600">
                  <input
                    type="checkbox"
                    name="removeAttachment"
                    value={attachment.url}
                  />
                  삭제
                </label>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <AttachmentField />
      <button
        type="submit"
        disabled={pending}
        className="rounded bg-accent px-4 py-2 font-semibold text-white disabled:opacity-60"
      >
        {pending ? "저장 중..." : submitLabel}
      </button>
    </form>
  );
}
