import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Prose, SectionShell } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { sundaySchool } from "@/lib/content";

export const metadata: Metadata = {
  title: "주일학교",
};

export default function SundaySchoolPage() {
  return (
    <>
      <PageHero
        eyebrow="Sunday School"
        title="주일학교"
        description="아이들도 하나님 안에서 행복하도록"
      />
      <SectionShell>
        <Reveal>
          <Prose>
            <p>
              시선교회는 예수님께서 아이들에게 축복하시며 천국 백성은 이와 같다
              하셨다(마 19:14)는 말씀을 기억하며 주일학교 사역을 부수적인 사역이
              아닌 <strong>주요 사역</strong>으로 생각합니다.
            </p>
            <p>
              아이들도 어른들과 같이 하나님 안에 있을 때 진정으로 행복하다고
              믿으며 아이들을 양육하고, 복음의 원리 안에서 아이들을 교육하고자
              합니다. 이러한 기준에 따라 시선교회에서는 다음과 같이 주일학교
              예배를 드립니다.
            </p>
          </Prose>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {sundaySchool.map((group, i) => (
            <Reveal key={group.name} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-surface p-7 md:p-8">
                <h2 className="text-2xl font-bold">{group.name}</h2>
                <p className="mt-1 text-sm text-accent">{group.ages}</p>
                <ul className="mt-6 space-y-4">
                  {group.schedule.map((item) => (
                    <li
                      key={item.activity}
                      className="flex items-start justify-between gap-4 border-t border-line pt-4 first:border-t-0 first:pt-0"
                    >
                      <span className="font-medium">{item.activity}</span>
                      <span className="shrink-0 text-sm text-muted">
                        {item.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
