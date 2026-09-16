import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NoticeForm } from "@/components/NoticeForm";
import { getNotice } from "@/lib/notices-db";
import { updateNoticeAction } from "../../actions";

export const metadata: Metadata = {
  title: "공지사항 수정",
};

export default async function EditNoticePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const notice = await getNotice(Number(id));
  if (!notice) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-28 md:px-6 md:pt-32">
      <h1 className="text-2xl font-bold">공지사항 수정</h1>
      <NoticeForm
        action={updateNoticeAction.bind(null, notice.id)}
        defaults={{
          title: notice.title,
          author: notice.author,
          summary: notice.summary,
        }}
        existingAttachments={notice.attachments}
        submitLabel="저장"
      />
    </div>
  );
}
