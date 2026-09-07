import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Prose, SectionShell } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "시선집",
};

export default function MagazinePage() {
  return (
    <>
      <PageHero
        eyebrow="Magazine"
        title="시선집"
        description="성도들의 일상과 신앙을 나누는 글모임"
      />
      <SectionShell>
        <Reveal>
          <Prose>
            <p>
              시선집은 성도들의 일상을 나누고, 서로를 더욱 잘 이해하며, 믿음의
              분투를 함께하고자 만든 성도들의 글모임입니다.
            </p>
            <p>
              시선집을 통해 풍성하고 깊은 교제를 나누고자 합니다.
            </p>
          </Prose>
        </Reveal>
      </SectionShell>
    </>
  );
}
