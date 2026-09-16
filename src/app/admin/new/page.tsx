import type { Metadata } from "next";
import { NoticeForm } from "@/components/NoticeForm";
import { createNoticeAction } from "../actions";

export const metadata: Metadata = {
  title: "공지사항 글쓰기",
};

export default function NewNoticePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-28 md:px-6 md:pt-32">
      <h1 className="text-2xl font-bold">공지사항 글쓰기</h1>
      <NoticeForm action={createNoticeAction} submitLabel="등록" />
    </div>
  );
}
