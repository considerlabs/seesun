import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Prose, SectionShell } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "교회 소개",
};

const pillars = [
  { title: "도시 속 복음", note: "하나님이 하신 기쁜 소식" },
  { title: "복음 중심 공동체", note: "복음이 세우는 사람들" },
  { title: "공동체가 섬기는 도시", note: "안양을 향한 섬김" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="교회 소개"
        description="도시 안에 복음, 복음이 세우는 공동체, 공동체가 섬기는 도시"
      />

      <section className="bg-surface">
        <SectionShell>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Reveal>
              <Prose>
                <p>
                  시선교회는 <strong>시광교회</strong>의 도시개척운동의 일환으로{" "}
                  <strong>2025년 11월 2일</strong> 경기도 안양시에 개척한
                  교회입니다. 서울이라는 도시에는 다양한 문화가 공존하는 만큼
                  다양한 필요가 있습니다. 시광교회와 시선교회는 하나의
                  대형교회보다 다수의 교회가 도시 곳곳에 세워지는 것이 도시를
                  더 효과적으로 섬기는 방법이라 판단했습니다.
                </p>
                <p>
                  시선교회가 어떤 교회인지 표현하는 가장 중요한 개념은{" "}
                  <strong>도시 안에 복음</strong>,{" "}
                  <strong>복음이 세우는 공동체</strong>,{" "}
                  <strong>공동체가 섬기는 도시</strong>입니다.
                </p>
              </Prose>
            </Reveal>

            <Reveal delay={0.08}>
              <figure className="relative mx-auto w-full max-w-md">
                <div
                  aria-hidden
                  className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_50%_40%,rgba(16,72,112,0.14),transparent_68%)] md:-inset-8"
                />
                <div className="relative overflow-hidden rounded-[1.5rem] border border-line/80 bg-white p-6 shadow-[0_24px_60px_rgba(16,72,112,0.1)] md:p-8">
                  <Image
                    src="/img/about.jpg"
                    alt="도시 속 복음, 복음 중심 공동체, 공동체가 섬기는 도시가 예배를 중심으로 순환하는 시선교회 비전"
                    width={449}
                    height={322}
                    className="h-auto w-full"
                    priority
                  />
                </div>
                <figcaption className="relative mt-5 text-center text-sm tracking-wide text-muted">
                  예배를 중심으로 순환하는 시선교회의 비전
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </SectionShell>
      </section>

      <section className="border-y border-line bg-background">
        <SectionShell className="!py-12 md:!py-16">
          <Reveal>
            <ul className="grid gap-8 md:grid-cols-3 md:gap-0">
              {pillars.map((item, i) => (
                <li
                  key={item.title}
                  className={`text-center md:px-8 ${
                    i > 0 ? "md:border-l md:border-line" : ""
                  }`}
                >
                  <p className="text-lg font-bold tracking-tight text-foreground md:text-xl">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-muted">{item.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </SectionShell>
      </section>

      <SectionShell>
        <Reveal>
          <Prose>
            <p>
              복음은 하나님이 우리를 사랑하셔서 얼마나 위대한 일을 하셨는지에
              대한 기쁜 소식입니다. 복음은 도시 속에 없는 새로운 매력적인
              공동체를 만들고, 이 공동체는 다양한 방식으로 도시를 섬깁니다.
              이것이 우리가 안양시에 시선교회를 세운 이유입니다.
            </p>
          </Prose>
        </Reveal>
      </SectionShell>
    </>
  );
}
