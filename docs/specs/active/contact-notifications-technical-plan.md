# Technical Plan — Contact Form & Notifications

**Spec:** contact-notifications-active-spec.md
**Last Updated:** 2026-04-17

---

## Approach

Replace Formspree with a single Next.js API route (`/api/contact`) that:
1. Validates the incoming POST body
2. Fires email via Resend SDK
3. Fires SMS via AWS SNS SDK
4. Returns `{ ok: true }` or error to the contact form

Both email and SMS are attempted independently — one failing does not block the other.

---

## New Files
- `app/api/contact/route.ts` — main handler

## Modified Files
- `app/contact/page.tsx` — remove `useForm`, replace with `fetch('/api/contact', ...)`
- `package.json` — remove `@formspree/react`, add `resend`

## Deleted Files
- `app/api/notify/route.ts` — superseded by `/api/contact`

---

## `/api/contact/route.ts` — Structure

```ts
import { Resend } from "resend";
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

POST handler:
  1. Parse body: { name, email, company, message }
  2. Validate required fields (name, email, message)
  3. Send email via Resend → operations@c7-cits.com
  4. Send SMS via SNS → +18018670627
  5. Return { ok: true } or { ok: false, error }
```

---

## Environment Variables Required
| Key | Where | Status |
|---|---|---|
| `RESEND_API_KEY` | Vercel env vars | ✗ Not added |
| `AWS_ACCESS_KEY_ID` | Vercel env vars | ✓ Done |
| `AWS_SECRET_ACCESS_KEY` | Vercel env vars | ✓ Done |
| `AWS_REGION` | Vercel env vars | ✓ Done |

---

## Sequencing

### Executable Now
- None — blocked on Resend API key

### Blocked
- Everything else — waiting on Resend signup + API key + Vercel env var

### After Resend Key Is Added
1. `npm install resend`
2. Build `/api/contact/route.ts`
3. Update contact page
4. Remove Formspree
5. Commit + push
6. Test in production

---

## AWS SNS Risk
The SNS console shows a PinpointSmsVoiceV2 error on the status page — this is a UI-layer check using the newer Pinpoint API. The underlying `SNSClient.PublishCommand` with a direct `PhoneNumber` may still work independently.

**Test plan:** After deploying, submit the contact form and check if SMS arrives. If not, inspect Vercel function logs for the specific AWS error code.

**Fallback:** If SNS fails → swap SNS block for Twilio REST API call (Twilio trial account exists, credentials need to be retrieved from twilio.com).
