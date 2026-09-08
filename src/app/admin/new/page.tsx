import type { Metadata } from "next";
import { createNoticeAction } from "../actions";

export const metadata: Metadata = {
  title: "공지사항 글쓰기",
};

export default function NewNoticePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-28 md:px-6 md:pt-32">
      <h1 className="text-2xl font-bold">공지사항 글쓰기</h1>

      <form
        action={createNoticeAction}
        className="mt-8 space-y-4 rounded-lg border border-line bg-surface p-6"
      >
        <div>
          <label className="block text-sm text-muted" htmlFor="title">
            제목
          </label>
          <input
            id="title"
            name="title"
            required
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
            className="mt-1 w-full rounded border border-line px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="rounded bg-accent px-4 py-2 font-semibold text-white"
        >
          등록
        </button>
      </form>
    </div>
  );
}
