# SMS Notification Setup — History & Current Status
_Last updated: 2026-04-30_

---

## Current State
**SMS is NOT delivering.** Email notifications are working as the interim solution.

**Interim workaround:**
- Contact form → email to `operations@c7-cits.com`
- Gmail filter: To=operations@c7-cits.com, Subject="New inquiry from" → Stars + labels "C7 Lead"
- Android Gmail app set to notify on every C7 Lead message with sound + vibration

---

## What We Tried (In Order)

### 1. T-Mobile Email-to-SMS Gateway
- **Approach:** Send email to `8018670627@tmomail.net`
- **Result:** ❌ Blocked — required clicking a verification link in an email, which loops forever
- **Dead end**

### 2. Google Voice Email-to-SMS
- **Approach:** Same gateway concept via Google Voice
- **Result:** ❌ Same verification loop problem
- **Dead end**

### 3. Zapier SMS
- **Approach:** Zapier's built-in SMS service via Formspree webhook
- **Result:** ❌ Zapier SMS doesn't support T-Mobile numbers
- **Dead end**

### 4. Formspree Webhooks
- **Approach:** Use Formspree webhook to trigger a custom serverless function
- **Result:** ❌ Formspree webhooks require paid Professional plan ($40/month)
- **Decision:** Replaced Formspree entirely with custom handler

### 5. AWS SNS
- **Approach:** Build Vercel serverless function → AWS SNS PublishCommand → SMS
- **What we built:** `app/api/contact/route.ts` with SNS SDK
- **AWS account setup:**
  - Account ID: 3085-6444-6851
  - Region: us-east-1 (N. Virginia)
  - Production access approved via support case 177727011000237
  - $50/month SMS limit, $100 credits (expires Oct 7 2026)
- **Result:** ❌ SNS console broken for new accounts (PinpointSmsVoiceV2 error). SMS calls returned 200 but never delivered. Root cause: no origination number configured. AWS End User Messaging now requires a provisioned phone number to send from (~$1-2/month) plus additional setup.
- **Decision:** Pivoted to Twilio

### 6. Twilio
- **Approach:** Swap SNS for Twilio SDK in the contact handler
- **Account:** console.twilio.com (kcmadill@gmail.com)
- **Trial number (FROM):** +12407983606
- **Verified destination numbers:** +18018670627 (T-Mobile), +18018952270 (Google Voice)
- **What we built:** Updated `app/api/contact/route.ts` to use Twilio SDK, sends to both numbers
- **Result:** ❌ Messages queue successfully in Twilio (status: queued, no errors) but carriers block delivery
- **Root cause:** US A2P 10DLC regulations (warning 30034). Since 2023, ALL business SMS in the US must be registered — even sending to yourself. Unregistered messages are filtered by T-Mobile and other carriers.
- **What A2P 10DLC registration requires:**
  - Upgrade Twilio from trial to paid account
  - Brand registration: ~$4/month
  - Campaign registration: ~$10/month
  - Approval wait time: 1-7 days
  - Total ongoing cost: ~$14+/month just for SMS

### 7. WhatsApp Business (Meta)
- **Approach:** Set up WhatsApp Business API via Twilio + Meta to bypass SMS carrier restrictions
- **What we did:** Created Meta Business Portfolio "C7 CITS" (ID: 996248319497007)
- **Result:** ❌ Meta blocked WhatsApp Business Account creation for new portfolios — "Error occurred while creating WhatsApp business account. Try again later."
- **Status:** Retry in 24-48 hours — new Meta business portfolios often need time before WhatsApp is enabled
- **URL:** https://business.facebook.com/latest/home?business_id=996248319497007

---

## Why SMS Is Hard in the US Right Now

The FCC and carriers implemented A2P 10DLC in 2023 to combat spam. Every piece of software sending SMS — even to your own number — is classified as "Application to Person" messaging and must be registered with The Campaign Registry. There is no exception for personal or low-volume use. This affects Twilio, AWS, and every other SMS provider equally.

---

## Current Code State
`app/api/contact/route.ts` currently:
- ✅ Sends email via Resend to `operations@c7-cits.com`
- ⚠️ Attempts SMS via Twilio to both +18018670627 and +18018952270 — messages queue but don't deliver

The SMS code is harmless to leave in place — it fails silently, email still goes through, and it will work automatically once A2P is resolved.

---

## Paths to Resolve SMS (Future)

| Option | Cost | Timeline | Notes |
|---|---|---|---|
| **Twilio A2P 10DLC** | ~$14/month | 1-7 days | Upgrade Twilio, register brand + campaign |
| **WhatsApp via Meta** | Free | 24-48hrs to retry | Retry Meta business account creation |
| **ntfy.sh push notifications** | Free | 30 min | No carrier involved, push via app |
| **Pushover** | $5 one-time | 15 min | Reliable push notifications, no carrier |
| **AWS End User Messaging** | ~$1-2/month + SMS | 1-3 days | Need origination number + A2P registration |

**Recommended next step:** Retry WhatsApp Business Account creation on Meta (free, no A2P needed). If that fails again, use ntfy.sh or Pushover as a permanent solution.

---

## Environment Variables (Vercel)
All SMS-related env vars are set in Vercel for when this is resolved:
- `TWILIO_ACCOUNT_SID` — see password vault
- `TWILIO_AUTH_TOKEN` — see password vault
- `TWILIO_FROM_NUMBER` — +12407983606
- `AWS_ACCESS_KEY_ID` — see password vault
- `AWS_SECRET_ACCESS_KEY` — see password vault
- `AWS_REGION` — us-east-1
