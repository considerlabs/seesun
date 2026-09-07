# Architecture

## Product

Public marketing site for **시선교회** (Seesun Church), modeled after seetheglory.or.kr. Static pages: church intro, creed, gospel, staff, 시선집 (Instagram CTA), visit guide, notices, sermons placeholders, planting videos, Sunday school, home directions/map.

## Stack

- Next.js 16 App Router + React 19 + Tailwind CSS v4
- Hosted on Vercel project `seesun-church` → https://seesun-church.vercel.app
- Repo: https://github.com/considerlabs/seesun (`main`)

## Trust boundaries

- Entirely public. No auth, sessions, DB, or server-side secrets.
- Content is compile-time / static. Contact phone and Instagram are displayed in UI.
- External: Unsplash images (`next.config.ts`), Google Maps embed (home), Naver Map outbound link, YouTube embeds (planting), Instagram outbound links.

## Known risks / assumptions

- Sermon list remains a placeholder until real media is provided.
- 시선집 page is intro + Instagram deep link; no in-site article CMS yet.
- Naver Map cannot be iframed (`X-Frame-Options: DENY`); home map uses Google embed + Naver link button.
- After `vercel --prod`, re-alias `seesun-church.vercel.app` if the public domain did not update.
- Vercel SSO deployment protection must stay **disabled** for public access.

## Related documents

- `documentation/인수인계.md` — handoff (runbook, nav, content, deploy, checklist)
- No `emails.md` / `cron.md` / `automation.md` / `permissions.md` / `variables.md`
- No automated test suite yet
