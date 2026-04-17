# Active Spec — Contact Form & Notifications

**Work Package:** Replace Formspree with custom contact handler + SMS notifications
**Status:** In Progress
**Owner:** K.C. Madill
**Last Updated:** 2026-04-17

---

## Objective
Replace the Formspree contact form with a self-hosted solution that:
1. Sends an email to `operations@c7-cits.com` on every form submission
2. Sends an SMS to `+18018670627` on every form submission
3. Removes the Formspree dependency entirely

---

## Scope
- `app/contact/page.tsx` — swap Formspree hook for native fetch to `/api/contact`
- `app/api/contact/route.ts` — new serverless function (email + SMS)
- `app/api/notify/route.ts` — existing partial SMS-only route (will be superseded)
- Remove `@formspree/react` package

**Out of scope:** Form field changes, page redesign, new pages

---

## Constraints
- Must work on Vercel free tier (serverless functions, no long-running processes)
- AWS SNS for SMS — credentials already in Vercel env vars
- Resend for email — free tier (3,000/month), requires API key
- No paid third-party form services

---

## Dependencies
| Dependency | Status | Notes |
|---|---|---|
| AWS account active | ✓ Done | $100 credits, expires Oct 7 2026 |
| AWS env vars in Vercel | ✓ Done | AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION |
| Resend account | ✗ Not started | Need to sign up and get API key |
| RESEND_API_KEY in Vercel | ✗ Blocked | Waiting on Resend signup |

---

## Acceptance Criteria
- [ ] Submitting the contact form triggers an email to `operations@c7-cits.com`
- [ ] Submitting the contact form triggers an SMS to `+18018670627`
- [ ] Form shows success/error state to user
- [ ] Formspree dependency removed from `package.json`
- [ ] `app/api/notify/route.ts` removed or superseded
- [ ] End-to-end test passes in production

---

## Ordered Task List
1. **Sign up for Resend** (resend.com) — get API key, verify `operations@c7-cits.com` as sender
2. **Add `RESEND_API_KEY` to Vercel** environment variables
3. **Build `/api/contact/route.ts`** — handles POST, sends email via Resend + SMS via AWS SNS
4. **Update `app/contact/page.tsx`** — remove `useForm` from Formspree, POST to `/api/contact`
5. **Remove `@formspree/react`** from package.json
6. **Delete `app/api/notify/route.ts`** (superseded)
7. **Commit and push** — Vercel deploys
8. **Test end-to-end** — submit form, confirm email + SMS received

---

## Done-State Checklist
- [ ] Resend API key in Vercel env vars
- [ ] `/api/contact` returns 200 on valid submission
- [ ] Email received at `operations@c7-cits.com`
- [ ] SMS received at `+18018670627`
- [ ] Contact page shows success message after submit
- [ ] No Formspree references remain in codebase
- [ ] Deployed to production and verified

---

## Handoff Block
**Where we stopped:** Discovered Formspree webhooks require paid plan. Decided to build own handler. Agreed to use Resend (email) + AWS SNS (SMS). AWS is configured. Resend signup is the next unblocked action.

**What the next agent needs:**
- Resend API key (user needs to sign up at resend.com first)
- Add `RESEND_API_KEY` to Vercel env vars before building the route

---

## Resume Checklist
- [ ] Read this spec
- [ ] Confirm Resend API key exists in Vercel env vars
- [ ] If yes → build `/api/contact/route.ts` per task list above
- [ ] If no → prompt user to sign up at resend.com and get API key first
