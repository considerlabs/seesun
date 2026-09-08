import type { Metadata } from "next";
import Link from "next/link";
import { formatNoticeDateTime, getNotices } from "@/lib/notices-db";
import { deleteNoticeAction } from "./actions";
import { logoutAction } from "./login/actions";

export const metadata: Metadata = {
  title: "공지사항 관리",
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const notices = await getNotices();

  return (
    <div className="mx-auto max-w-4xl px-4 pb-16 pt-28 md:px-6 md:pt-32">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">공지사항 관리</h1>
        <div className="flex shrink-0 gap-2">
          <Link
            href="/admin/new"
            className="rounded bg-accent px-4 py-2 text-sm font-semibold text-white"
          >
            글쓰기
          </Link>
          <form action={logoutAction}>
            <button
              type="submit"
              className="rounded border border-line px-4 py-2 text-sm font-semibold"
            >
              로그아웃
            </button>
          </form>
        </div>
      </div>

      {notices.length === 0 ? (
        <p className="mt-8 border-y border-line py-8 text-sm text-muted">
          등록된 공지사항이 없습니다.
        </p>
      ) : (
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[680px] border-y border-line text-sm">
            <thead>
              <tr className="border-b border-line text-muted">
                <th className="w-14 py-3 text-center font-medium">번호</th>
                <th className="py-3 text-left font-medium">제목</th>
                <th className="w-24 py-3 text-center font-medium">글쓴이</th>
                <th className="w-40 py-3 text-center font-medium">등록일</th>
                <th className="w-20 py-3 text-center font-medium">조회수</th>
                <th className="w-36 py-3 text-center font-medium">관리</th>
              </tr>
            </thead>
            <tbody>
              {notices.map((notice, i) => (
                <tr key={notice.id} className="border-b border-line last:border-b-0">
                  <td className="py-4 text-center text-muted">{notices.length - i}</td>
                  <td className="py-4 font-medium">{notice.title}</td>
                  <td className="py-4 text-center text-muted">{notice.author}</td>
                  <td className="py-4 text-center text-muted">
                    {formatNoticeDateTime(notice.createdAt)}
                  </td>
                  <td className="py-4 text-center text-muted">{notice.views}</td>
                  <td className="py-4">
                    <div className="flex justify-center gap-2">
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
