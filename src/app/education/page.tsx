import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { education } from "@/lib/content";

export const metadata: Metadata = {
  title: "교육",
};

export default function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Education"
        title="교육"
        description="말씀 위에 세워지는 신앙, 삶으로 이어지는 훈련"
      />
      <SectionShell>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-surface p-7 md:p-8">
                <h2 className="text-2xl font-bold">{item.name}</h2>
                <p className="mt-1 text-sm text-accent">{item.schedule}</p>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
