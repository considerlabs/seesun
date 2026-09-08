import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
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
        <div className="divide-y divide-line border-y border-line">
          {notices.length === 0 ? (
            <p className="py-8 text-sm text-muted">등록된 공지사항이 없습니다.</p>
          ) : (
            notices.map((notice, i) => (
              <Reveal key={notice.id} delay={i * 0.04}>
                <article className="py-8">
                  <p className="text-sm text-muted">{notice.date}</p>
                  <h2 className="mt-2 text-xl font-bold md:text-2xl">
                    {notice.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-[16px] leading-relaxed text-muted">
                    {notice.summary}
                  </p>
                </article>
              </Reveal>
            ))
          )}
        </div>
      </SectionShell>
    </>
  );
}
