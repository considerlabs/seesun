import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Prose, SectionShell } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "복음의 내용",
};

export default function GospelPage() {
  return (
    <>
      <PageHero
        eyebrow="Gospel"
        title="복음의 내용"
        description="우리가 구원받았다는 것을 선포하는 기쁜 소식"
      />
      <SectionShell>
        <Reveal>
          <Prose>
            <p>
              팀 켈러 목사는 자신의 책 『센터처치』에서 복음을 다음과 같이
              설명합니다.
            </p>
            <h2 className="!mt-10 text-2xl font-bold text-foreground">
              복음은 모든 것이 아니다
            </h2>
            <p>
              성경에서 가르치는 모든 것이 복음이 아닙니다. 복음은 일차적으로
              어떤 삶의 방식이 아닙니다. 복음은 우리가 행하는 무엇이 아니라,
              우리를 위해 행해진 무엇이며 우리가 반응해야 하는 어떤 것입니다.
              즉, <strong>&lsquo;우리가 구원받았다&rsquo;</strong>는 것을
              선포하는 기쁜 소식입니다.
            </p>
            <h2 className="!mt-10 text-2xl font-bold text-foreground">
              복음은 모든 것에 영향을 미친다
            </h2>
            <p>
              복음은 우리가 이해하고 믿어야 할 진리의 집합이기는 하지만
              진정으로 복음이 믿어지고 이해될 때는 그것이 단지 신념의 집합에
              머물지 않습니다. 오히려 기독교의 이야기는 단지 옆에 두고 바라만
              보는 렌즈가 아니라, 실제로 우리 눈에 쓰고 들여다보는 렌즈가
              됩니다.
            </p>
            <p>
              따라서 복음은 그리스도인의 삶의 초급 과정이 아니라 시작부터
              완성까지 관통하는 것입니다. 복음을 믿음으로써 구원을 얻고,
              살아가는 동안 복음을 점점 더 깊이 믿음으로써 우리의 마음과
              감정과 인생의 모든 국면이 변화됩니다.
            </p>
          </Prose>
        </Reveal>
      </SectionShell>
    </>
  );
}
