import { ensureSchema, getSql } from "@/lib/db";

export type Notice = {
  id: number;
  title: string;
  date: string;
  summary: string;
};

export async function getNotices(): Promise<Notice[]> {
  await ensureSchema();
  const sql = getSql();
  const rows = await sql`
    SELECT id, title, date, summary FROM notices ORDER BY created_at DESC
  `;
  return rows as Notice[];
}

export async function getNotice(id: number): Promise<Notice | null> {
  await ensureSchema();
  const sql = getSql();
  const rows = await sql`
    SELECT id, title, date, summary FROM notices WHERE id = ${id}
  `;
  return (rows[0] as Notice) ?? null;
}

export async function createNotice(data: { title: string; date: string; summary: string }) {
  await ensureSchema();
  const sql = getSql();
  await sql`
    INSERT INTO notices (title, date, summary)
    VALUES (${data.title}, ${data.date}, ${data.summary})
  `;
}

export async function updateNotice(
  id: number,
  data: { title: string; date: string; summary: string }
) {
  await ensureSchema();
  const sql = getSql();
  await sql`
    UPDATE notices SET title = ${data.title}, date = ${data.date}, summary = ${data.summary}
    WHERE id = ${id}
  `;
}

export async function deleteNotice(id: number) {
  await ensureSchema();
  const sql = getSql();
  await sql`DELETE FROM notices WHERE id = ${id}`;
}
