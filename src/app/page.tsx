import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { church, notices, sermons, serviceTimes } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100dvh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=2000&q=80"
          alt="예배당 안 따뜻한 빛"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-scrim)" }}
        />
        <div className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 md:justify-center md:px-6 md:pb-24 md:pt-24">
          <p className="text-sm font-medium tracking-[0.2em] text-white/80">
            {church.nameEn}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.15] tracking-tight text-white md:text-6xl">
            {church.name}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            안양에서 복음으로 세워지는 공동체, 도시를 섬기는 교회입니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-accent transition hover:bg-white/90 active:scale-[0.98]"
            >
              시선교회 소개
              <ArrowRight size={16} weight="bold" />
            </Link>
            <Link
              href="/visit"
              className="inline-flex items-center gap-2 rounded-md border border-white/50 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 active:scale-[0.98]"
            >
              첫방문 가이드
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-0 md:grid-cols-2">
          <Link
            href="/about"
            className="group border-b border-line px-6 py-12 transition hover:bg-accent-soft md:border-r md:px-10 md:py-16"
          >
            <p className="text-sm font-medium text-accent">소개</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              시선교회 소개
            </h2>
            <p className="mt-4 max-w-md text-muted">
              도시 안에 복음, 복음이 세우는 공동체, 공동체가 섬기는 도시.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
              자세히 보기
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </span>
          </Link>
          <Link
            href="/visit"
            className="group border-b border-line px-6 py-12 transition hover:bg-accent-soft md:px-10 md:py-16"
          >
            <p className="text-sm font-medium text-accent">안내</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              첫방문 가이드
            </h2>
            <p className="mt-4 max-w-md text-muted">
              새가족팀이 여러분을 맞이할 준비를 하고 있습니다.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
              방문 안내
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </span>
          </Link>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:gap-14 md:px-6 md:py-24">
          <Reveal className="h-full">
            <div className="relative min-h-[320px] h-full overflow-hidden rounded-2xl md:min-h-full">
              <Image
                src="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80"
                alt="열린 성경과 따뜻한 빛"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              시선(視線) = 시선을 두다
            </h2>
            <p className="mt-6 text-[17px] leading-[1.9] text-muted">
              시선교회는 시광교회의 도시개척운동의 일환으로 2025년 11월 2일
              경기도 안양시에 개척한 교회입니다. 하나의 대형교회보다 다수의
              교회가 도시 곳곳에 세워지는 것이 도시를 더 효과적으로 섬기는
              방법이라 믿습니다.
            </p>
            <p className="mt-4 text-[17px] leading-[1.9] text-muted">
              복음은 도시 속에 없는 새로운 매력적인 공동체를 만들고, 이 공동체는
              다양한 방식으로 도시를 섬깁니다. 이것이 우리가 안양시에
              시선교회를 세운 이유입니다.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              교회 소개 더 보기
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-deep text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
              시선교회의 예배
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              우리는 교회의 기능 중 예배를 가장 소중하게 여깁니다. 이 시간을
              통해 살아계신 하나님께 예배하며, 기도하고, 성경을 통해 선포되는
              말씀을 듣습니다. 듣고 이해할 뿐 아니라, 체험하고 하나님을 뵙기를
              원합니다.
            </p>
            <Link
              href="/sermons"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent-bright px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              설교 보기
              <ArrowRight size={16} weight="bold" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Marquee text="COME AND SEE" />

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              신앙고백
            </h2>
            <p className="mt-6 max-w-3xl text-[17px] leading-[1.9] text-muted">
              시선교회는 {church.denomination}이며, 우리의 신앙고백의 전체적인
              요약은 웨스트민스터 신앙고백서에서 볼 수 있습니다. 우리는 사람의
              제일 되는 목적은 하나님을 영화롭게 하며 그분을 영원토록
              즐거워하는 것이라고 고백합니다.
            </p>
            <Link
              href="/creed"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              신앙고백 전문
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:py-24">
          <Reveal>
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl md:min-h-full">
              <Image
                src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1400&q=80"
                alt="예배와 소망을 상징하는 빛"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/85 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white md:p-8">
                <p className="text-sm tracking-[0.16em] text-accent-bright">
                  ANYANG
                </p>
                <h3 className="mt-2 text-2xl font-bold">예배 장소</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/85">
                  {church.address}
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl bg-accent-soft p-8 md:p-10">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Church in ANYANG
              </h2>
              <p className="mt-5 text-[17px] leading-[1.9] text-muted">
                시선교회는 대한예수교장로회에 소속된 교회입니다. 우리는
                웨스트민스터 표준문서의 지향을 따르는 장로교회이며, 개혁교회
                신앙의 가르침을 따라 예배하고 제자됩니다.
              </p>
              <div className="mt-8 space-y-4 border-t border-accent/20 pt-6 text-sm">
                <div>
                  <p className="font-semibold text-foreground">예배 장소</p>
                  <p className="mt-1 text-muted">{church.address}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">예배 시간</p>
                  <ul className="mt-2 space-y-1.5 text-muted">
                    {serviceTimes.map((item) => (
                      <li
                        key={item.name}
                        className="flex justify-between gap-4"
                      >
                        <span>{item.name}</span>
                        <span className="shrink-0 text-foreground">
                          {item.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p>
                  <span className="font-semibold text-foreground">
                    교회 연락처
                  </span>{" "}
                  <a
                    href={`tel:${church.phone.replace(/-/g, "")}`}
                    className="text-accent hover:underline"
                  >
                    {church.phone}
                  </a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              공지사항
            </h2>
            <Link href="/notices" className="text-sm font-semibold text-accent">
              전체 보기
            </Link>
          </div>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {notices.map((notice, i) => (
              <Reveal key={notice.id} delay={i * 0.05}>
                <Link
                  href="/notices"
                  className="flex flex-col gap-2 py-5 transition hover:bg-accent-soft/60 md:flex-row md:items-center md:justify-between md:gap-8 md:px-2"
                >
                  <span className="font-medium text-foreground">
                    {notice.title}
                  </span>
                  <span className="shrink-0 text-sm text-muted">
                    {notice.date}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              최근 설교
            </h2>
            <Link href="/sermons" className="text-sm font-semibold text-accent">
              설교 목록
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {sermons.map((sermon, i) => (
              <Reveal key={sermon.id} delay={i * 0.06}>
                <Link
                  href="/sermons"
                  className="block rounded-2xl border border-line bg-surface p-6 transition hover:border-accent/40 hover:shadow-[0_12px_40px_rgba(16,72,112,0.1)]"
                >
                  <p className="text-sm text-accent">{sermon.category}</p>
                  <h3 className="mt-2 text-xl font-bold">{sermon.title}</h3>
                  <p className="mt-3 text-sm text-muted">
                    {sermon.preacher} · {sermon.date}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
