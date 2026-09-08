import type { Metadata } from "next";
import Link from "next/link";
import { getNotices } from "@/lib/notices-db";
import { createNoticeAction, deleteNoticeAction } from "./actions";

export const metadata: Metadata = {
  title: "공지사항 관리",
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const notices = await getNotices();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <h1 className="text-2xl font-bold">공지사항 관리</h1>

      <form
        action={createNoticeAction}
        className="mt-8 space-y-4 rounded-lg border border-line bg-surface p-6"
      >
        <h2 className="font-semibold">새 공지 작성</h2>
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
          <label className="block text-sm text-muted" htmlFor="date">
            날짜 (예: 2025.11.02)
          </label>
          <input
            id="date"
            name="date"
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
            rows={4}
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

      <div className="mt-10 divide-y divide-line border-y border-line">
        {notices.length === 0 ? (
          <p className="py-8 text-sm text-muted">등록된 공지사항이 없습니다.</p>
        ) : (
          notices.map((notice) => (
            <div key={notice.id} className="flex items-start justify-between gap-4 py-5">
              <div>
                <p className="text-sm text-muted">{notice.date}</p>
                <p className="mt-1 font-semibold">{notice.title}</p>
                <p className="mt-1 max-w-xl text-sm text-muted">{notice.summary}</p>
              </div>
              <div className="flex shrink-0 gap-2">
                <Link
                  href={`/admin/${notice.id}/edit`}
                  className="rounded border border-line px-3 py-1.5 text-sm"
                >
                  수정
                </Link>
                <form action={deleteNoticeAction.bind(null, notice.id)}>
                  <button
                    type="submit"
                    className="rounded border border-line px-3 py-1.5 text-sm text-red-600"
                  >
                    삭제
                  </button>
                </form>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
