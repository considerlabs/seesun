import type { Metadata } from "next";
import { ArrowRight, InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/PageHero";
import { Prose, SectionShell } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { church } from "@/lib/content";

export const metadata: Metadata = {
  title: "시선집",
};

export default function MagazinePage() {
  return (
    <>
      <PageHero
        eyebrow="Magazine"
        title="시선집"
        description="성도들의 일상과 신앙을 나누는 글모임"
      />
      <SectionShell>
        <Reveal>
          <Prose>
            <p>
              시선집은 성도들의 일상을 나누고, 서로를 더욱 잘 이해하며, 믿음의
              분투를 함께하고자 만든 성도들의 글모임입니다.
            </p>
            <p>시선집을 통해 풍성하고 깊은 교제를 나누고자 합니다.</p>
          </Prose>
        </Reveal>

        <Reveal delay={0.08}>
          <a
            href={church.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-12 flex max-w-xl items-center gap-5 rounded-2xl border border-accent/20 bg-accent-soft px-6 py-6 transition hover:border-accent/40 hover:bg-accent-soft/80 active:scale-[0.99] md:px-8"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent text-white shadow-[0_8px_24px_rgba(16,72,112,0.25)] transition group-hover:brightness-110">
              <InstagramLogo size={28} weight="fill" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-lg font-bold tracking-tight text-foreground">
                시선집 바로가기
              </span>
              <span className="mt-1 block text-sm text-muted">
                Instagram @seesun_church
              </span>
            </span>
            <ArrowRight
              size={20}
              weight="bold"
              className="shrink-0 text-accent transition group-hover:translate-x-1"
            />
          </a>
        </Reveal>
      </SectionShell>
    </>
  );
}
