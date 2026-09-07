import type { Metadata } from "next";
import Link from "next/link";
import { Phone, UserFocus } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/PageHero";
import { Prose, SectionShell } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { church } from "@/lib/content";

export const metadata: Metadata = {
  title: "처음 방문하셨다면",
};

const steps = [
  {
    title: "환영합니다",
    body: "시선교회에 오신 여러분을 환영합니다. 새가족팀이 여러분들을 맞이할 준비를 하고 있습니다.",
  },
  {
    title: "예배만 드리고 싶다면",
    body: "조용히 예배만 드리고 싶다면 새가족팀에게 말씀해 주세요. 부담 없이 예배에 집중하실 수 있도록 돕겠습니다.",
  },
  {
    title: "미리 문의하고 싶다면",
    body: "자세한 안내가 필요하면 아래로 연락해 주시기 바랍니다.",
  },
];

export default function VisitPage() {
  return (
    <>
      <PageHero
        eyebrow="The first visit"
        title="처음 방문하셨다면"
        description="시선교회에 오신 여러분을 환영합니다"
      />
      <SectionShell>
        <Reveal>
          <Prose>
            <p>
              시선교회에 오신 여러분을 환영합니다. 새가족팀이 여러분들을 맞이할
              준비를 하고 있습니다. 조용히 예배만 드리고 싶다면 새가족팀에게
              말씀해 주세요. 자세한 안내가 필요하면 아래로 연락을 해주시기
              바랍니다.
            </p>
          </Prose>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-line bg-surface p-6">
                <p className="text-sm font-semibold text-accent">
                  STEP {i + 1}
                </p>
                <h2 className="mt-3 text-xl font-bold">{step.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 rounded-2xl bg-accent-soft p-8 md:flex md:items-center md:justify-between md:gap-8 md:p-10">
            <div>
              <div className="flex items-center gap-2 text-accent">
                <UserFocus size={22} weight="duotone" />
                <p className="font-semibold">{church.phoneLabel}</p>
              </div>
              <a
                href={`tel:${church.phone.replace(/-/g, "")}`}
                className="mt-3 inline-flex items-center gap-2 text-2xl font-bold text-foreground"
              >
                <Phone size={24} weight="bold" />
                {church.phone}
              </a>
            </div>
            <Link
              href="/about"
              className="mt-6 inline-flex rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-bright md:mt-0"
            >
              교회 소개 보기
            </Link>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
