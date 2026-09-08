import type { Metadata } from "next";
import Link from "next/link";
import { formatNoticeDateTime, getNotices } from "@/lib/notices-db";
import { deleteNoticeAction } from "./actions";

export const metadata: Metadata = {
  title: "공지사항 관리",
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const notices = await getNotices();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">공지사항 관리</h1>
        <Link
          href="/admin/new"
          className="rounded bg-accent px-4 py-2 text-sm font-semibold text-white"
        >
          글쓰기
        </Link>
      </div>

      <div className="mt-8 divide-y divide-line border-y border-line">
        {notices.length === 0 ? (
          <p className="py-8 text-sm text-muted">등록된 공지사항이 없습니다.</p>
        ) : (
          notices.map((notice) => (
            <div key={notice.id} className="flex items-center justify-between gap-4 py-4">
              <div className="min-w-0">
                <p className="truncate font-medium">{notice.title}</p>
                <p className="mt-1 text-sm text-muted">
                  {formatNoticeDateTime(notice.createdAt)}
                </p>
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
