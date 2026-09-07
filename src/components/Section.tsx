import type { ReactNode } from "react";

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-5 text-[17px] leading-[1.9] text-muted [&_strong]:font-semibold [&_strong]:text-foreground">
      {children}
    </div>
  );
}

export function SectionShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24 ${className}`}>
      {children}
    </section>
  );
}
