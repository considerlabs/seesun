import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { sermons } from "@/lib/content";

export const metadata: Metadata = {
  title: "설교",
};

export default function SermonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sermons"
        title="설교"
        description="주일 오전 설교와 금요기도회 설교를 준비 중입니다"
      />
      <SectionShell>
        <div className="space-y-4">
          {sermons.map((sermon, i) => (
            <Reveal key={sermon.id} delay={i * 0.05}>
              <article className="rounded-2xl border border-line bg-surface p-6 md:flex md:items-center md:justify-between md:p-8">
                <div>
                  <p className="text-sm text-accent">{sermon.category}</p>
                  <h2 className="mt-2 text-xl font-bold md:text-2xl">
                    {sermon.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted">
                    {sermon.preacher} · {sermon.date}
                  </p>
                </div>
                <span className="mt-4 inline-flex rounded-md bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent md:mt-0">
                  업로드 예정
                </span>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted">
          설교 영상과 녹취록은 곧 이 페이지에서 확인하실 수 있습니다.
        </p>
      </SectionShell>
    </>
  );
}
