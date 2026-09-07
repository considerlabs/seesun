import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Prose, SectionShell } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "도시사역",
};

export default function CityPage() {
  return (
    <>
      <PageHero
        eyebrow="Come and See"
        title="도시사역"
        description="안양에서 확신과 기쁨, 희망을 발견하도록"
      />
      <SectionShell>
        <Reveal>
          <Prose>
            <p>
              요한복음 곳곳에는 &ldquo;와서 보라&rdquo;라고 번역한 이 문장이
              자주 등장합니다. &ldquo;나사렛에 무슨 선한 것이 날 수
              있느냐?(요 1:46)&rdquo;라며 자신이 가진 편견으로 예수님을
              거부하는 나다나엘에게 빌립이 한 말이고, 마르지 않는 생수이신
              그리스도를 만나고 만족한 사마리아 여인이 자신을 소외한 마을로
              들어가 외친 말이기도 합니다(요 4:29).
            </p>
            <p>
              예수님이 와서 보신 것은 무덤에 갇혀 있는 친구와 그것을 슬퍼하는
              여인들이었지만(요 11:17), 사람들이 예수님께서 와서 보게 된 것은
              그 전에 경험하지 못한 확신과 기쁨 그리고 희망이었습니다.
            </p>
            <p>
              우리는 시선교회가 세워진 안양시에 어떤 사람들이 살고, 어떤 필요가
              있는지 조사하고, 다양한 방식으로 &ldquo;와서 보라&rdquo;라고
              말하는 사역을 하려고 합니다. 그래서 안양시에 거주하는 사람들이
              전에 경험하지 못한 확신과 기쁨, 희망을 발견하길 바랍니다.
            </p>
          </Prose>
        </Reveal>
      </SectionShell>
    </>
  );
}
