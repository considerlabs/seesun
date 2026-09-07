import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Prose, SectionShell } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "신앙고백",
};

export default function CreedPage() {
  return (
    <>
      <PageHero
        eyebrow="Creed"
        title="신앙고백"
        description="웨스트민스터 신앙고백을 따르는 장로교회"
      />
      <SectionShell>
        <Reveal>
          <Prose>
            <p>
              시선교회는 대한예수교장로회 고신총회{" "}
              <strong>2026년 상반기 등록 예정</strong>이며, 우리의 신앙고백의
              전체적인 요약은 웨스트민스터 신앙고백서에서 볼 수 있고, 그 밖에
              교회의 역사 속에 존재했던 믿음의 선조들의 신앙고백을 존경하며
              따릅니다. 또한 시선교회의 신앙고백이 21세기 대한민국 도시에서
              사는 사람들의 소망이나 두려움, 불안, 확신 등에 연결되길
              바랍니다.
            </p>
            <p>
              우리는 사람의 제일 되는 목적은{" "}
              <strong>하나님을 영화롭게 하며 그분을 영원토록 즐거워하는 것</strong>
              이라고 고백합니다.
            </p>
            <p>
              우리는 우리의 유일한 위로가 우리는 우리 자신의 것이 아니요,{" "}
              <strong>
                몸과 영혼이 다 내 신실한 예수 그리스도의 것
              </strong>
              이라는 것임을 고백합니다.
            </p>
            <p>
              우리는 무엇보다 하나님께서 예수 그리스도 안에서 우리를 위해 하신
              일인 <strong>복음</strong>을 듣고 누릴 때 우리의 삶이 진정으로
              하나님이 원하는 방향으로 변화될 수 있다고 고백합니다.
            </p>
          </Prose>
        </Reveal>
      </SectionShell>
    </>
  );
}
