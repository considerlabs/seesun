# Architecture

## Product

Public marketing site for **시선교회** (Seesun Church), modeled after seetheglory.or.kr. Mostly static pages: church intro, creed, gospel, staff, 시선집 (Instagram CTA), visit guide, sermons placeholders, planting videos, Sunday school, home directions/map. One dynamic feature: a DB-backed notices board (`/notices`) with a password-protected admin CMS (`/admin`).

## Stack

- Next.js 16 App Router + React 19 + Tailwind CSS v4
- Hosted on Vercel project `seesun-church` → https://www.seesunchurch.or.kr (custom domain)
- Repo: https://github.com/considerlabs/seesun (`main`)
- DB: Neon Postgres via Vercel Marketplace, `@neondatabase/serverless` driver, single `notices` table (`attachments` JSONB stores `{ url, name, size }`)
- File storage: Vercel Blob (`@vercel/blob`) for notice attachments; public URLs, token `BLOB_READ_WRITE_TOKEN`
- Auth: single hardcoded admin account (env vars), no user table, no third-party auth provider

## Trust boundaries

- Site is entirely public except `/admin/*`.
- `/admin/*` is protected by `src/proxy.ts` (Next 16's renamed `middleware.ts`), which checks an HMAC-signed session cookie (`admin_session`) against `SESSION_SECRET`. Each mutating Server Action (`src/app/admin/actions.ts`) re-checks the session independently (`requireAdminSession()`), so proxy is not the sole line of defense.
- Login (`src/app/admin/login/actions.ts`) compares credentials against `ADMIN_USERNAME` / `ADMIN_PASSWORD` env vars using `crypto.timingSafeEqual` (constant-time). No password hashing library — env vars are already secret at rest, so plaintext-in-env is the accepted tradeoff for a single-admin site.
- Session cookie is HttpOnly, `secure` in production, `sameSite: lax`, 7-day expiry. It carries no user identity — it's a single shared token since there is exactly one account.
- Most content is compile-time / static (`src/lib/content.ts`, per-page JSX). Notices are the one runtime-mutable, DB-backed content type.
- External: Unsplash images (`next.config.ts`), Google Maps embed (home), Naver Map outbound link, YouTube embeds (planting), Instagram outbound links.
- Secrets live in Vercel env vars (`DATABASE_URL` + `POSTGRES_*` from the Neon integration, `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `SESSION_SECRET`, `BLOB_READ_WRITE_TOKEN`, `YOUTUBE_API_KEY`), pulled into a gitignored `.env.local` for local dev. Nothing secret is committed to git.

## Known risks / assumptions

- Sermon list is pulled from the YouTube Data API (`src/lib/youtube.ts`, cached 1h via `unstable_cache`), filtered by title prefix; falls back to the static list in `content.ts` when the key is missing or the API fails.
- 시선집 page is intro + Instagram deep link; no in-site article CMS yet.
- Naver Map cannot be iframed (`X-Frame-Options: DENY`); home map uses Google embed + Naver link button.
- Vercel SSO deployment protection must stay **disabled** for public site access (unrelated to `/admin` login, which is app-level, not Vercel SSO).
- Single admin account, no password-reset flow — changing credentials requires `vercel env` CLI access (see `documentation/인수인계.md` §8.2).
- No rate limiting on `/admin/login` — acceptable for a low-value target with a single low-traffic church site, but a known gap if this pattern is reused elsewhere.
- `notices` table schema is self-migrating via `CREATE TABLE IF NOT EXISTS` / `ALTER TABLE ... ADD/DROP COLUMN IF EXISTS` in `src/lib/db.ts`, run lazily per server instance. No migration history/tooling (e.g. Drizzle) — fine at this scale, revisit if the schema grows more complex.
- Notice attachments are public Blob URLs (anyone with the link can download). Limits: 10MB/file, 5 files/notice (`src/lib/attachments.ts`); Server Action body cap is 12MB (`next.config.ts`). Deleting a notice or checking “삭제” on edit removes the Blob objects.

## Related documents

- `documentation/인수인계.md` — handoff (runbook, nav, content, admin/DB, deploy, checklist)
- No `emails.md` / `cron.md` / `automation.md` / `permissions.md` / `variables.md`
- No automated test suite yet
