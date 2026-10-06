import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { church, sermonCategories, sermons } from "@/lib/content";

export const metadata: Metadata = {
  title: "설교",
};

export default function SermonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sermons"
        title="설교"
        description="주일오전예배와 금요기도회 설교를 영상으로 만나보세요"
      />
      <SectionShell>
        <nav className="flex flex-wrap gap-2">
          {sermonCategories.map((category) => (
            <a
              key={category}
              href={`#${category}`}
              className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-accent transition hover:border-accent/40"
            >
              {category}
            </a>
          ))}
        </nav>

        {sermonCategories.map((category) => {
          const [latest, ...rest] = sermons.filter((s) => s.category === category);
          return (
            <section key={category} id={category} className="mt-16 scroll-mt-28 first-of-type:mt-10">
              <Reveal>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{category}</h2>
                <p className="mt-6 text-sm font-semibold text-accent">최근 설교</p>
                <div className="mt-3 overflow-hidden rounded-2xl border border-line bg-surface">
                  <div className="relative aspect-video bg-brand-deep">
                    <iframe
                      src={`https://www.youtube.com/embed/${latest.youtubeId}`}
                      title={latest.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full border-0"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    {latest.series ? <p className="text-sm text-accent">{latest.series}</p> : null}
                    <h3 className="mt-1 text-xl font-bold md:text-2xl">{latest.title}</h3>
                    <p className="mt-2 text-sm text-muted">
                      {latest.preacher} · {latest.date}
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((sermon, i) => (
                  <Reveal key={sermon.youtubeId} delay={(i % 3) * 0.05}>
                    <a
                      href={`https://www.youtube.com/watch?v=${sermon.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block overflow-hidden rounded-2xl border border-line bg-surface transition hover:border-accent/40 hover:shadow-[0_12px_40px_rgba(16,72,112,0.1)]"
                    >
                      <div className="relative aspect-video bg-brand-deep">
                        <Image
                          src={`https://i.ytimg.com/vi/${sermon.youtubeId}/hqdefault.jpg`}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition group-hover:scale-[1.02]"
                        />
                      </div>
                      <div className="p-5">
                        {sermon.series ? <p className="text-sm text-accent">{sermon.series}</p> : null}
                        <h3 className="mt-1 font-bold leading-snug">{sermon.title}</h3>
                        <p className="mt-2 text-sm text-muted">
                          {sermon.preacher} · {sermon.date}
                        </p>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}

        <div className="mt-16 text-center">
          <a
            href={church.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep"
          >
            유튜브 채널에서 더 보기
          </a>
        </div>
      </SectionShell>
    </>
  );
}
