# C7 Website — Session Summary & Account Reference
_Last updated: 2026-04-29_

---

## Live Site
| Item | Value |
|---|---|
| **URL** | https://c7-cits.com |
| **GitHub Repo** | https://github.com/kcmadill/c7-website |
| **Vercel Dashboard** | https://vercel.com/kcmadill/c7-website |
| **Vercel Analytics** | https://vercel.com/kcmadill/c7-website/analytics |
| **LinkedIn Page** | https://www.linkedin.com/company/c7-cits |

---

## Domain
| Item | Value |
|---|---|
| **Registrar** | GoDaddy |
| **Domain** | c7-cits.com |
| **DNS** | A record + CNAME → Vercel |

---

## Tech Stack
| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.3 (App Router, Turbopack) |
| UI | React 19, TypeScript, Tailwind CSS v4 |
| Font | Geist (Google Fonts) |
| Hosting | Vercel (free tier, auto-deploy from master) |
| Email notifications | Resend |
| SMS notifications | Twilio (trial — A2P 10DLC blocking, in progress) |
| Analytics | Vercel Analytics |

---

## Brand
| Item | Value |
|---|---|
| **Primary dark** | `#111111` |
| **Accent orange** | `#E05A00` |
| **Silver** | `#C0C8D4` |
| **Logo file** | `public/logo/c7-mark.svg` / `c7-mark.png` |
| **LinkedIn cover** | `public/logo/linkedin-cover-final.png` |
| **Square logo** | `public/logo/c7-logo-square.png` |

---

## Pages
| Route | Status | Notes |
|---|---|---|
| `/` | ✅ Live | Dark hero, featured services, Why C7, CTA |
| `/services` | ✅ Live | 8 services in 2-col grid |
| `/about` | ✅ Live | No leadership/bio section |
| `/contact` | ✅ Live | Custom form handler → email + SMS |
| `/hero-a` | ⚠️ Stale | Old preview page — needs deletion |

---

## Contact & Notifications
| Item | Value |
|---|---|
| **Business email** | operations@c7-cits.com |
| **Contact form** | `/app/api/contact/route.ts` |
| **Email service** | Resend (resend.com) |
| **Email → sends to** | operations@c7-cits.com |
| **SMS → sends to** | +18018670627 (T-Mobile) + +18018952270 (Google Voice) |
| **SMS status** | ⚠️ Twilio queuing but A2P 10DLC blocking delivery |

---

## Accounts & IDs

### GitHub
| Item | Value |
|---|---|
| **Account** | kcmadill |
| **Repo** | kcmadill/c7-website |
| **Branch** | master |
| **Note** | Use `gh auth switch --user kcmadill` before pushing |

### Vercel
| Item | Value |
|---|---|
| **Account** | kcmadill |
| **Project** | c7-website |
| **URL** | https://vercel.com/kcmadill/c7-website |

### Resend
| Item | Value |
|---|---|
| **Login** | kcmadill@gmail.com (Google auth) |
| **URL** | https://resend.com |
| **Verified domain** | c7-cits.com |
| **From address** | C7 Website <operations@c7-cits.com> |

### AWS
| Item | Value |
|---|---|
| **Account ID** | 3085-6444-6851 |
| **Account name** | C7-CITS |
| **Login email** | operations@c7-cits.com |
| **Console** | https://console.aws.amazon.com |
| **Region** | us-east-1 (N. Virginia) |
| **SMS status** | Production access approved |
| **SMS monthly limit** | $50 |
| **Credits** | $100 (expires Oct 7, 2026) |
| **Support case** | 177727011000237 |

### Twilio
| Item | Value |
|---|---|
| **Account SID** | See password vault (starts with AC) |
| **Console** | https://console.twilio.com |
| **Trial number (FROM)** | +12407983606 |
| **Verified numbers** | +18018670627, +18018952270 |
| **Status** | ⚠️ Trial — A2P 10DLC registration required for delivery |

### Meta / Facebook Business
| Item | Value |
|---|---|
| **Business portfolio** | C7 CITS |
| **Business ID** | 996248319497007 |
| **URL** | https://business.facebook.com/latest/home?business_id=996248319497007 |
| **WhatsApp status** | ⚠️ Account creation failed — retry in 24-48hrs |

---

## Vercel Environment Variables
| Variable | Purpose | Status |
|---|---|---|
| `RESEND_API_KEY` | Resend email API | ✅ Set |
| `AWS_ACCESS_KEY_ID` | AWS credentials | ✅ Set |
| `AWS_SECRET_ACCESS_KEY` | AWS credentials | ✅ Set |
| `AWS_REGION` | `us-east-1` | ✅ Set |
| `TWILIO_ACCOUNT_SID` | Twilio auth | ✅ Set |
| `TWILIO_AUTH_TOKEN` | Twilio auth | ✅ Set |
| `TWILIO_FROM_NUMBER` | `+12407983606` | ✅ Set |

---

## Key File Locations
| File | Purpose |
|---|---|
| `app/page.tsx` | Homepage |
| `app/contact/page.tsx` | Contact form |
| `app/api/contact/route.ts` | Form handler (email + SMS) |
| `app/opengraph-image.tsx` | OG image (has render error — needs fix) |
| `components/Logo.tsx` | SVG C7 mark |
| `components/Header.tsx` | Sticky dark header |
| `components/Footer.tsx` | Footer |
| `public/logo/` | All brand assets (SVG + PNG) |
| `docs/specs/active/` | Active specs |

---

## Known Issues / Pending
| Issue | Status | Next Action |
|---|---|---|
| SMS not delivering | ⚠️ Blocked | Upgrade Twilio + A2P registration, or WhatsApp |
| WhatsApp Business Account | ⚠️ Blocked | Retry Meta account creation in 24-48hrs |
| OG image render error | ⚠️ Bug | Fix `display: flex` on divs in opengraph-image.tsx |
| `/hero-a` stale page | ⚠️ Cleanup | Delete `app/hero-a/` directory |
| GitHub auth | ⚠️ Note | Run `gh auth switch --user kcmadill` before every push |
