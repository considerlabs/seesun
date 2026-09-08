import { neon } from "@neondatabase/serverless";

function createSql() {
  return neon(process.env.DATABASE_URL!);
}

let _sql: ReturnType<typeof createSql> | null = null;

export function getSql() {
  if (!_sql) _sql = createSql();
  return _sql;
}

let schemaReady: Promise<unknown> | null = null;

export function ensureSchema() {
  if (!schemaReady) {
    schemaReady = (async () => {
      const sql = getSql();
      await sql`
        CREATE TABLE IF NOT EXISTS notices (
          id SERIAL PRIMARY KEY,
          title TEXT NOT NULL,
          summary TEXT NOT NULL,
          author TEXT NOT NULL DEFAULT '관리자',
          views INTEGER NOT NULL DEFAULT 0,
          created_at TIMESTAMPTZ NOT NULL DEFAULT now()
        )
      `;
      await sql`ALTER TABLE notices DROP COLUMN IF EXISTS date`;
      await sql`ALTER TABLE notices ADD COLUMN IF NOT EXISTS author TEXT NOT NULL DEFAULT '관리자'`;
      await sql`ALTER TABLE notices ADD COLUMN IF NOT EXISTS views INTEGER NOT NULL DEFAULT 0`;
    })();
  }
  return schemaReady;
}
