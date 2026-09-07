# Architecture

## Product

Public marketing site for **시선교회** (Seesun Church), modeled after seetheglory.or.kr. Static pages only: church intro, creed, gospel, staff, visit guide, notices, sermons placeholders, Sunday school.

## Stack

- Next.js 16 App Router + React 19 + Tailwind CSS v4
- Hosted on Vercel project `seesun-church` → https://seesun-church.vercel.app
- Repo: https://github.com/considerlabs/seesun (`main`)

## Trust boundaries

- Entirely public. No auth, sessions, DB, or server-side secrets.
- Content is compile-time / static. Contact phone is displayed in UI.
- External images: Unsplash (configured in `next.config.ts`). Staff photos served from `public/img/`.

## Known risks / assumptions

- Sermon, magazine, and planting video slots are placeholders until real media is provided.
- Exact street address / map not yet available in content.
- Vercel SSO deployment protection must stay **disabled** for public access (`vercel project protection`).

## Related documents

- `documentation/인수인계.md` — handoff (runbook, routes, content editing, deploy)
- No `emails.md` / `cron.md` / `automation.md` / `permissions.md` / `variables.md` — capabilities not present
- No automated test suite yet (`tests.md` not produced)
