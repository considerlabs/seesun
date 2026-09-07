"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { List, X, CaretDown } from "@phosphor-icons/react";
import { church, navigation } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const isHome = pathname === "/";
  const overlay = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        overlay
          ? "bg-transparent text-white"
          : "border-b border-line/80 bg-surface/95 text-foreground shadow-[0_8px_30px_rgba(5,107,123,0.06)] backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-[72px] md:px-6">
        <Link href="/" className="text-xl font-bold tracking-tight md:text-2xl">
          {church.name}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  overlay ? "hover:bg-white/10" : "hover:bg-accent-soft hover:text-accent"
                }`}
              >
                {item.label}
                {item.children ? <CaretDown size={14} weight="bold" /> : null}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-0 top-full min-w-[180px] translate-y-1 rounded-lg border border-line bg-surface py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent-soft hover:text-accent"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <Link
            href="/visit"
            className={`ml-2 rounded-md px-4 py-2 text-sm font-semibold transition active:scale-[0.98] ${
              overlay
                ? "bg-white text-accent hover:bg-white/90"
                : "bg-accent text-white hover:bg-accent-bright"
            }`}
          >
            첫방문 가이드
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          className="rounded-md p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {open ? (
        <div className="max-h-[80dvh] overflow-y-auto border-t border-line bg-surface text-foreground lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4">
            {navigation.map((item) => (
              <div key={item.href} className="border-b border-line/70">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-3 text-left text-base font-medium"
                      onClick={() =>
                        setExpanded((v) => (v === item.label ? null : item.label))
                      }
                    >
                      {item.label}
                      <CaretDown
                        size={16}
                        className={`transition ${expanded === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expanded === item.label ? (
                      <div className="pb-3 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2 text-sm text-muted"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </>
                ) : (
                  <Link href={item.href} className="block py-3 text-base font-medium">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/visit"
              className="mt-4 rounded-md bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
            >
              첫방문 가이드
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
