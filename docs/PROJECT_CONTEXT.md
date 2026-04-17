# C7 Website — Project Context

## Overview
Marketing and credibility website for C7 Consulting & IT Services LLC. The site establishes presence, communicates services, and generates leads via a contact form.

## Live State
- **URL:** https://c7-cits.com
- **Status:** Live and deployed
- **Last deploy:** April 2026
- **Hosting:** Vercel free tier (auto-deploy from GitHub master)
- **Domain:** GoDaddy — DNS A record + CNAME pointing to Vercel

## Brand
- **Colors:** `#111111` (near-black), `#E05A00` (burnt orange), `#C0C8D4` (silver)
- **Font:** Geist (Google Fonts)
- **Logo:** SVG geometric C7 mark — `components/Logo.tsx`
- **Hero:** Dark (`#111111` background) — canonical homepage style

## Pages
| Route | Status | Notes |
|---|---|---|
| `/` | Live | Dark hero, featured services, Why C7, CTA |
| `/services` | Live | 8 services in 2-col grid |
| `/about` | Live | Our story, How We Work, CTA — no leadership/bio section |
| `/contact` | Live | Contact form — migrating from Formspree to custom handler |
| `/hero-a` | Stale | Old preview page — pending cleanup/deletion |

## Services (8 total)
1. Business Process Improvement
2. Strategic Planning & Roadmapping
3. Technology & IT Services
4. AI Integration & Adoption
5. Operations Consulting
6. Finance & Accounting Optimization
7. HR & People Operations
8. IT Infrastructure & Support

## Contact / Notifications
- **Current:** Formspree (`mykblvrd`) → `operations@c7-cits.com` ✓
- **Target:** Custom Vercel serverless function → email (Resend) + SMS (AWS SNS) to `+18018670627`
- **Blocker resolved:** Formspree webhooks require paid plan — replaced by building own handler

## Integrations
| Service | Status | Notes |
|---|---|---|
| Vercel Analytics | Live | Added to root layout |
| Formspree | Active (temporary) | Will be replaced |
| AWS SNS | Configured | Env vars in Vercel, account active, $100 credits |
| Resend | Not yet set up | Will be used for email in custom handler |

## LinkedIn
- **Page:** https://www.linkedin.com/company/c7-cits
- **Tagline:** Strategy. Technology. Results. Business consulting and IT services built to execute.
- **Assets:** `public/logo/` — mark, lockups, cover photos (SVG + PNG)

## Active Spec
See `docs/specs/active/contact-notifications-active-spec.md`
