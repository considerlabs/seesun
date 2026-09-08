import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { staff } from "@/lib/content";

export const metadata: Metadata = {
  title: "섬기는 사람들",
};

export default function StaffPage() {
  return (
    <>
      <PageHero
        eyebrow="People"
        title="섬기는 사람들"
        description="시선교회를 섬기는 교역자들을 소개합니다"
      />
      <SectionShell>
        <div className="space-y-8">
          {staff.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.06}>
              <article className="overflow-hidden rounded-2xl border border-line bg-surface md:grid md:grid-cols-[240px_1fr]">
                <div className="relative aspect-square bg-accent-soft md:aspect-auto md:min-h-full">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className={`object-cover object-top ${person.imageClassName ?? ""}`}
                    sizes="(max-width:768px) 100vw, 240px"
                    priority={i === 0}
                  />
                </div>
                <div className="p-7 md:p-10">
                  <p className="text-sm font-medium text-accent">{person.role}</p>
                  <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                    {person.name}
                  </h2>
                  <p className="mt-5 text-[17px] leading-[1.9] text-muted">
                    {person.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
