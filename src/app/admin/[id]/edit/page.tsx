import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNotice } from "@/lib/notices-db";
import { updateNoticeAction } from "../../actions";

export const metadata: Metadata = {
  title: "공지사항 수정",
};

export default async function EditNoticePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const notice = await getNotice(Number(id));
  if (!notice) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-28 md:px-6 md:pt-32">
      <h1 className="text-2xl font-bold">공지사항 수정</h1>

      <form
        action={updateNoticeAction.bind(null, notice.id)}
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
            defaultValue={notice.title}
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
            defaultValue={notice.author}
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
            rows={4}
            defaultValue={notice.summary}
            className="mt-1 w-full rounded border border-line px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="rounded bg-accent px-4 py-2 font-semibold text-white"
        >
          저장
        </button>
      </form>
    </div>
  );
}
