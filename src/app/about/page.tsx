import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Prose, SectionShell } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "교회 소개",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="교회 소개"
        description="도시 안에 복음, 복음이 세우는 공동체, 공동체가 섬기는 도시"
      />
      <SectionShell>
        <Reveal>
          <Prose>
            <p>
              시선교회는 <strong>시광교회</strong>의 도시개척운동의 일환으로{" "}
              <strong>2025년 11월 2일</strong> 경기도 안양시에 개척한
              교회입니다. 서울이라는 도시에는 다양한 문화가 공존하는 만큼
              다양한 필요가 있습니다. 시광교회와 시선교회는 하나의
              대형교회보다 다수의 교회가 도시 곳곳에 세워지는 것이 도시를 더
              효과적으로 섬기는 방법이라 판단했습니다.
            </p>
            <p>
              시선교회가 어떤 교회인지 표현하는 가장 중요한 개념은{" "}
              <strong>도시 안에 복음</strong>,{" "}
              <strong>복음이 세우는 공동체</strong>,{" "}
              <strong>공동체가 섬기는 도시</strong>입니다.
            </p>
            <p>
              복음은 하나님이 우리를 사랑하셔서 얼마나 위대한 일을 하셨는지에
              대한 기쁜 소식입니다. 복음은 도시 속에 없는 새로운 매력적인
              공동체를 만들고, 이 공동체는 다양한 방식으로 도시를 섬깁니다.
              이것이 우리가 안양시에 시선교회를 세운 이유입니다.
            </p>
          </Prose>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { href: "/creed", label: "신앙고백" },
              { href: "/gospel", label: "복음의 내용" },
              { href: "/staff", label: "섬기는 사람들" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-line bg-surface px-5 py-4 text-center font-semibold transition hover:border-accent/40 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
