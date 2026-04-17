# C7 Website — Agent Rules

## Project
C7 Consulting & IT Services marketing website.
- **Live URL:** https://c7-cits.com
- **Repo:** https://github.com/kcmadill/c7-website
- **Stack:** Next.js 16.2.3, React 19, TypeScript, Tailwind CSS v4
- **Hosting:** Vercel (auto-deploy on push to master)
- **Owner:** K.C. Madill (kcmadill@gmail.com)

## Agent Rules
- Read `docs/PROJECT_CONTEXT.md` before starting any work
- Check `docs/specs/INDEX.md` for the active spec
- Do not modify `app/hero-a/` — marked for cleanup, pending owner decision
- All commits go to `master` — Vercel deploys automatically on push
- Never commit `.env*` files or AWS/API credentials
- Keep commit messages in format: `type: brief description`

## Key Files
| File | Purpose |
|---|---|
| `app/page.tsx` | Homepage (dark hero — canonical) |
| `app/contact/page.tsx` | Contact form — currently Formspree, migrating to custom handler |
| `app/api/notify/route.ts` | SMS notification endpoint (AWS SNS) — partial |
| `components/Logo.tsx` | SVG C7 mark |
| `components/Header.tsx` | Sticky dark header |
| `public/logo/` | Brand assets (SVG + PNG) |

## Environment Variables (set in Vercel)
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION` = `us-east-2`

## Next.js Notes
<!-- BEGIN:nextjs-agent-rules -->
This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code.
<!-- END:nextjs-agent-rules -->
