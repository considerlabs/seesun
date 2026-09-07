import Link from "next/link";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-deep text-white">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 20%, rgba(26,106,156,0.45), transparent 42%), radial-gradient(circle at 82% 0%, rgba(255,255,255,0.1), transparent 34%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-28 md:px-6 md:pb-16 md:pt-32">
        {eyebrow ? (
          <p className="text-sm font-medium tracking-[0.16em] text-white/70">
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
