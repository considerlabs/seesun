import type { Metadata } from "next";
import Link from "next/link";
import { Paperclip } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/Section";
import { getNotices } from "@/lib/notices-db";

export const metadata: Metadata = {
  title: "공지사항",
};

export const dynamic = "force-dynamic";

export default async function NoticesPage() {
  const notices = await getNotices();

  return (
    <>
      <PageHero
        eyebrow="Notice"
        title="공지사항"
        description="시선교회의 소식과 안내를 전합니다"
      />
      <SectionShell>
        {notices.length === 0 ? (
          <p className="border-y border-line py-8 text-sm text-muted">
            등록된 공지사항이 없습니다.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-y border-line text-sm">
              <thead>
                <tr className="border-b border-line text-muted">
                  <th className="w-16 py-3 text-center font-medium">번호</th>
                  <th className="py-3 text-left font-medium">제목</th>
                  <th className="w-28 py-3 text-center font-medium">글쓴이</th>
                  <th className="w-28 py-3 text-center font-medium">등록일</th>
                  <th className="w-20 py-3 text-center font-medium">조회수</th>
                </tr>
              </thead>
              <tbody>
                {notices.map((notice, i) => (
                  <tr key={notice.id} className="border-b border-line last:border-b-0">
                    <td className="py-4 text-center text-muted">{notices.length - i}</td>
                    <td className="py-4">
                      <Link
                        href={`/notices/${notice.id}`}
                        className="inline-flex items-center gap-1.5 font-medium transition hover:text-accent"
                      >
                        {notice.title}
                        {notice.attachments.length > 0 ? (
                          <Paperclip
                            size={14}
                            className="shrink-0 text-muted"
                            aria-label="첨부파일"
                          />
                        ) : null}
                      </Link>
                    </td>
                    <td className="py-4 text-center text-muted">{notice.author}</td>
                    <td className="py-4 text-center text-muted">{notice.date}</td>
                    <td className="py-4 text-center text-muted">{notice.views}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </SectionShell>
    </>
  );
}
