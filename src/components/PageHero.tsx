import Link from "next/link";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0d2d34] text-white">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(10,155,176,0.45), transparent 40%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.12), transparent 35%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-28 md:px-6 md:pb-16 md:pt-32">
        {eyebrow ? (
          <p className="text-sm font-medium tracking-[0.16em] text-accent-bright">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {description}
          </p>
        ) : null}
        <div className="mt-6 text-sm text-white/55">
          <Link href="/" className="hover:text-white">
            홈
          </Link>
          <span className="mx-2">/</span>
          <span>{title}</span>
        </div>
      </div>
    </section>
  );
}
