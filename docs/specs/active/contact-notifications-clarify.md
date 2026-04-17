# Clarify Pass — Contact Form & Notifications

**Spec:** contact-notifications-active-spec.md
**Last Updated:** 2026-04-17

---

## Assumptions
- AWS SNS can send direct SMS to US numbers (`+18018670627` is T-Mobile) without Pinpoint activation
  - **Risk:** AWS console shows PinpointSmsVoiceV2 error — SNS direct publish untested. May need Pinpoint or Twilio fallback.
- Resend free tier (3,000 emails/month) is sufficient for C7 contact volume
- `operations@c7-cits.com` domain is verified or verifiable in Resend
- Vercel serverless function cold start is acceptable latency for form submission response

## Open Questions
1. **AWS SNS SMS sandbox** — is direct SNS `PublishCommand` to a phone number blocked for new accounts? Console shows Pinpoint error but API may still work. Must test.
2. **Resend domain verification** — does `c7-cits.com` need DNS records added in GoDaddy to send from `operations@c7-cits.com`? Likely yes.
3. **Form success UX** — current Formspree implementation shows a success state. Custom handler needs to replicate this — confirm existing UX behavior before replacing.

## Edge Cases
- Form submitted with missing fields → return 400, show inline error
- AWS SNS fails (quota hit, network error) → still send email, don't fail entire request
- Resend fails → still attempt SMS, log error, return partial success
- Spam submissions → no protection currently; Formspree had basic spam filtering. May need honeypot field.

## Blockers
| Blocker | Owner | Status |
|---|---|---|
| Resend account + API key | K.C. Madill | Not started |
| AWS SNS SMS sandbox status unknown | Engineering | Will discover on first test |

## Fallback Plan
If AWS SNS SMS fails after testing → switch to Twilio (trial account already set up from previous session — credentials unknown, may need to log back in at twilio.com).
