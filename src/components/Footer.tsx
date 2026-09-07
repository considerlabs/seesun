import Image from "next/image";
import { church, serviceTimes } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-brand-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.3fr_1fr_1.2fr] md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-11 w-11 overflow-hidden rounded-md">
              <Image
                src="/img/logo.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="44px"
              />
            </span>
            <p className="text-2xl font-bold tracking-tight">{church.name}</p>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
            {church.tagline}
          </p>
          <p className="mt-4 text-xs tracking-[0.18em] text-white/55">
            {church.nameEn}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">예배 시간</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {serviceTimes.map((item) => (
              <li key={item.name} className="flex justify-between gap-4">
                <span>{item.name}</span>
                <span className="shrink-0 text-white/90">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">문의</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>대한예수교 장로회 {church.name}</li>
            <li>주소 {church.address}</li>
            <li>
              Tel{" "}
              <a
                href={`tel:${church.phone.replace(/-/g, "")}`}
                className="hover:text-white"
              >
                {church.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {church.name}. All rights reserved.
      </div>
    </footer>
  );
}
