import Link from "next/link";
import { church } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-[#0d2d34] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-6">
        <div>
          <p className="text-2xl font-bold tracking-tight">{church.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
            {church.tagline}
          </p>
          <p className="mt-4 text-xs tracking-[0.18em] text-accent-bright">
            {church.nameEn}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">바로가기</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <Link href="/about" className="hover:text-white">
                교회 소개
              </Link>
            </li>
            <li>
              <Link href="/visit" className="hover:text-white">
                처음 방문
              </Link>
            </li>
            <li>
              <Link href="/sermons" className="hover:text-white">
                설교
              </Link>
            </li>
            <li>
              <Link href="/notices" className="hover:text-white">
                공지사항
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">문의</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>교회명 {church.name}</li>
            <li>위치 {church.city}</li>
            <li>
              Tel {church.phone} ({church.phoneLabel})
            </li>
            <li>{church.denomination}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {church.name}. All rights reserved.
      </div>
    </footer>
  );
}
