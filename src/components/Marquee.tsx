export function Marquee({ text }: { text: string }) {
  const items = Array.from({ length: 8 }, () => text);

  return (
    <div className="overflow-hidden border-y border-line bg-accent text-white">
      <div className="marquee-track flex w-max gap-10 py-5 text-2xl font-bold tracking-[0.2em] md:text-4xl">
        {[...items, ...items].map((item, i) => (
          <span key={`${item}-${i}`} className="whitespace-nowrap opacity-90">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
