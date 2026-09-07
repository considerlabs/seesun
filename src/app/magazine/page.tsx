import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Prose, SectionShell } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "월간지",
};

export default function MagazinePage() {
  return (
    <>
      <PageHero
        eyebrow="Magazine"
        title="월간지"
        description="성도들의 일상과 신앙을 나누는 공간"
      />
      <SectionShell>
        <Reveal>
          <div className="rounded-2xl border border-dashed border-accent/40 bg-accent-soft/60 px-6 py-16 text-center md:px-10">
            <p className="text-sm font-semibold tracking-[0.16em] text-accent">
              COMING SOON
            </p>
            <h2 className="mt-4 text-2xl font-bold md:text-3xl">
              월간지 준비 중
            </h2>
            <div className="mx-auto mt-6 max-w-xl">
              <Prose>
                <p>
                  시선교회 성도들의 일상과 신앙을 공유하는 장인 월간지는 준비
                  중입니다. 곧 이 자리에서 만나뵙겠습니다.
                </p>
              </Prose>
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
