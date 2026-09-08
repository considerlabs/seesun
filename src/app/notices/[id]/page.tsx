import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/Section";
import { getNotice, incrementNoticeViews } from "@/lib/notices-db";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const notice = await getNotice(Number(id));
  return { title: notice?.title ?? "공지사항" };
}

export default async function NoticeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const notice = await getNotice(Number(id));
  if (!notice) notFound();
  await incrementNoticeViews(notice.id);

  return (
    <>
      <PageHero eyebrow="Notice" title="공지사항" />
      <SectionShell>
        <article className="mx-auto max-w-3xl">
          <p className="text-sm text-muted">
            {notice.date} · {notice.author} · 조회 {notice.views + 1}
          </p>
          <h1 className="mt-2 text-2xl font-bold md:text-3xl">{notice.title}</h1>
          <p className="mt-6 whitespace-pre-wrap text-[16px] leading-relaxed text-muted">
            {notice.summary}
          </p>
          <Link
            href="/notices"
            className="mt-10 inline-block text-sm font-semibold text-accent"
          >
            ← 목록으로
          </Link>
        </article>
      </SectionShell>
    </>
  );
}
