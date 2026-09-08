import { ensureSchema, getSql } from "@/lib/db";

export type Notice = {
  id: number;
  title: string;
  summary: string;
  author: string;
  views: number;
  /** "YYYY.MM.DD" — matches the public notices page's existing display format */
  date: string;
  /** raw ISO timestamp, for admin's date+time display */
  createdAt: string;
};

function toKSTParts(value: string | Date) {
  const d = new Date(value);
  const parts = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(d);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return { y: get("year"), m: get("month"), d: get("day"), h: get("hour"), min: get("minute") };
}

export function formatNoticeDate(value: string | Date) {
  const { y, m, d } = toKSTParts(value);
  return `${y}.${m}.${d}`;
}

export function formatNoticeDateTime(value: string | Date) {
  const { y, m, d, h, min } = toKSTParts(value);
  return `${y}.${m}.${d} ${h}:${min}`;
}

type NoticeRow = {
  id: number;
  title: string;
  summary: string;
  author: string;
  views: number;
  created_at: string;
};

function mapRow(row: NoticeRow): Notice {
  return {
    id: row.id,
    title: row.title,
    summary: row.summary,
    author: row.author,
    views: row.views,
    date: formatNoticeDate(row.created_at),
    createdAt: new Date(row.created_at).toISOString(),
  };
}

export async function getNotices(): Promise<Notice[]> {
  await ensureSchema();
  const sql = getSql();
  const rows = await sql`
    SELECT id, title, summary, author, views, created_at FROM notices ORDER BY created_at DESC
  `;
  return (rows as NoticeRow[]).map(mapRow);
}

export async function getNotice(id: number): Promise<Notice | null> {
  await ensureSchema();
  const sql = getSql();
  const rows = await sql`
    SELECT id, title, summary, author, views, created_at FROM notices WHERE id = ${id}
  `;
  const row = rows[0] as NoticeRow | undefined;
  return row ? mapRow(row) : null;
}

export async function createNotice(data: { title: string; summary: string; author: string }) {
  await ensureSchema();
  const sql = getSql();
  await sql`
    INSERT INTO notices (title, summary, author)
    VALUES (${data.title}, ${data.summary}, ${data.author})
  `;
}

export async function updateNotice(
  id: number,
  data: { title: string; summary: string; author: string }
) {
  await ensureSchema();
  const sql = getSql();
  await sql`
    UPDATE notices SET title = ${data.title}, summary = ${data.summary}, author = ${data.author}
    WHERE id = ${id}
  `;
}

export async function deleteNotice(id: number) {
  await ensureSchema();
  const sql = getSql();
  await sql`DELETE FROM notices WHERE id = ${id}`;
}

export async function incrementNoticeViews(id: number) {
  await ensureSchema();
  const sql = getSql();
  await sql`UPDATE notices SET views = views + 1 WHERE id = ${id}`;
}
