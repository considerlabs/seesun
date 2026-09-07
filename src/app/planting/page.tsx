import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Prose, SectionShell } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { plantingVideos } from "@/lib/content";

export const metadata: Metadata = {
  title: "개척이야기",
};

export default function PlantingPage() {
  return (
    <>
      <PageHero
        eyebrow="Planting"
        title="개척이야기"
        description="모이고 흩어지는 교회로 도시를 섬기다"
      />
      <SectionShell>
        <Reveal>
          <Prose>
            <p>
              성경에서 볼 수 있는 교회의 주요한 특성은 <strong>모이는 것</strong>
              입니다. 모여서 좋은 공동체를 세우는 것이죠. 하지만 여기서 끝나는
              것이 아니라, <strong>흩어지는 것</strong>도 교회의 특성입니다.
            </p>
            <p>
              역사 속에 교회는 계속 모이고, 흩어졌습니다. 흩어지는 것이 쉬운
              일은 아니죠. 그런데 이유가 있습니다. 복음을 알지 못하는 사람들을
              계속 섬기기 위한 교회의 열정이 불타올랐기 때문입니다.
            </p>
            <p>
              마찬가지로 우리는 서울이라는 대도시에 흩어지는 교회가 되어 복음을
              전하고자 합니다. 다양한 문화와 필요에 적절하게 대응하는 다수의
              교회가 곳곳에 세워지며 이 도시에 복음이 전파되는 것을 보려고
              합니다.
            </p>
          </Prose>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {plantingVideos.map((video, i) => (
            <Reveal key={video.title} delay={i * 0.06}>
              <div className="overflow-hidden rounded-2xl border border-line bg-surface">
                <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-brand-deep to-accent text-sm font-medium tracking-wide text-white/80">
                  영상 준비 중
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold">{video.title}</h3>
                  <p className="mt-2 text-sm text-muted">{video.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
