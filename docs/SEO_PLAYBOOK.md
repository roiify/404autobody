# 404 Auto Body Collision — Website & Local SEO Playbook
*Deep research synthesis, 2026-07-01. 23 sources fetched, 25 claims adversarially verified (25 confirmed, 0 refuted). Core evidence: Whitespark 2026 Local Search Ranking Factors survey, Google Search Central docs, Caliber Collision's live estimate funnel, I-CAR.*

## The big picture

**The #1 finding: shops don't win Google from their website — they win from their
Google Business Profile (GBP).** 8 of the top 10 map-pack ranking factors come
directly from GBP (primary category, proximity, keywords in the business title,
accurate hours). The first website-related factor doesn't appear until #15.
Reviews are the second pillar: high rating (4.8+) is both a top ranking factor
and the #1 conversion factor, and Google favors a *steady drip* of reviews over
bursts.

**Good news for the name:** "404 Auto Body Collision" contains the exact
keywords ("auto body", "collision") Google weighs in the business title — the
legal name itself is an SEO asset. Never stuff extra keywords beyond the real name.

## 1. What top shops' websites have in common (copy these)

- **Above the fold, no scrolling needed:** tap-to-call phone number, an
  estimate/booking button, and the shop's location. Universal across every
  top-site roundup.
- **Online estimate form with photo upload** — the Caliber Collision model:
  multi-step, asks for location first, then damage photos, and manages
  expectations with "free initial estimate — final appraisal done in person."
  Copy this pattern verbatim.
- **Trust stack:** I-CAR Gold Class badge (only ~10% of shops qualify — worth
  pursuing), OEM/ASE certifications, written warranty, years in business,
  embedded Google reviews.
- **Real photography** of the actual shop, technicians, and cars — not stock.
  A/B data shows real photos measurably beat stock (e.g. +35% signups in one
  test). *The scroll site's real repair-stage photos already nail this.*

## 2. One-page scroll site vs. more pages

The scroll page **can carry** every conversion + trust element above and makes
a killer brand/home page. But it **cannot win search breadth alone**:
"Dedicated Page for Each Service" is the **#1** local organic ranking factor,
and city/neighborhood-relevant content is **#2**. Single-page sites structurally
rank for one concept only.

**Architecture that wins:**
- `/` — the scroll-driven experience (brand + conversion)
- `/services/collision-repair`, `/services/paint-refinish`, `/services/dent-repair`,
  `/services/bumper-repair`, `/services/frame-straightening`, `/services/adas-calibration`
- City pages: `/white-plains`, `/yonkers`, `/new-rochelle`, `/mount-vernon`
  (+ your actual town) — each with genuinely local content, not copy-paste.
- Every page shows identical Name / Address / Phone matching the GBP listing
  exactly (this NAP match is the single top *website* factor for the map pack).

## 3. Prioritized action checklist (highest impact first)

1. **Google Business Profile foundation** — claim + verify; primary category
   **Auto Body Shop**; exact legal name; accurate real hours (never fake 24/7 —
   "open at time of search" is now a live ranking factor); photos; fill out
   every service.
2. **Review engine** — ask every customer at vehicle delivery (QR code on the
   counter / text link), target a steady weekly influx of text reviews, keep
   4.8+, respond to every single review. Never burst-buy. This is exactly how
   the 1000+-review shops got there.
3. **Content architecture** — service pages + Westchester city pages behind the
   scroll home (section 2 above).
4. **Conversion layer** — above-fold tap-to-call + estimate CTA + address;
   photo-upload estimate form with the "initial estimate, final in person"
   language. ~2/3 of these searches happen on phones — mobile first.
5. **Trust layer** — pursue I-CAR Gold Class, publish the warranty, swap in
   real shop/tech photos when the real shop exists.
6. **Technical** — `AutoBodyShop` JSON-LD structured data (name, address, geo,
   hours, phone, url, priceRange — all values identical to GBP). Do **not**
   mark up your own Google reviews (self-serving review markup is against
   Google's guidelines and kills star-snippet eligibility). Schema affects
   eligibility for rich results, not ranking.
7. **Core Web Vitals — last.** Whitespark's 4,500-listing study found better
   CWV does **not** correlate with higher local pack rankings. Keep the site
   fast for users, but don't spend money chasing scores.

## Already built into index.html (2026-07-02)

On-page SEO now live on the one-pager:
- Keyword + location `<title>`, meta description, geo meta tags, Open Graph/Twitter
  cards, canonical, `robots` — optimized for "collision repair Westchester".
- A real `<h1>` ("Auto Body & Collision Repair — Westchester County, NY") — the
  page previously had none.
- **AutoBodyShop JSON-LD** structured data: services catalog, `areaServed`
  (White Plains/Yonkers/New Rochelle/Mount Vernon/Westchester County), hours,
  priceRange. No self-serving review markup (per guidelines).
- NAP in footer with tap-to-call `tel:` link; canvas has a descriptive
  `aria-label`; first frame is `<link rel=preload>`ed for faster LCP.
- Persistent floating **Call / Free Estimate** CTA (the above-fold contact the
  removed hero used to provide — top conversion element in the research).
- Fading **brand wordmark** at the very top ("404 Auto Body Collision · Collision
  Repair · Westchester County, NY") — doubles as the single page `<h1>`,
  fades out over the first 12% of scroll.
- **FAQ section + FAQPage structured data** (insurance, timeline, warranty,
  loaner, certifications, free estimates) — adds keyword-rich crawlable content,
  is eligible for FAQ rich results / People-Also-Ask / AI Overviews, and answers
  the exact trust questions that drive client confidence and retention.
- **Trust strip** — I-CAR Trained · Lifetime Workmanship Warranty · All Insurers
  Accepted · Free Loaner Cars · OEM Repair Procedures (retention/confidence
  signals from the research).

**Must fill before launch (placeholders in the file, marked TODO):** real
domain, real street address + ZIP, real phone, real geo coordinates — and every
one must match the Google Business Profile **exactly** (NAP consistency). Still
needs the separate service + city pages to win organic breadth (see §2).

## Review fixes applied (2026-07-02, from 3-agent SEO+design review)

Done:
- **Stressed-customer fix:** slim fixed action bar (name · Collision Repair · Westchester
  County, NY · Free Estimates · tap-to-call phone) — identity/location/phone visible on
  landing with no scroll. Floating Call/Free-Estimate CTA kept for scroll persistence.
- Logos → WebP (609KB→66KB, 772KB→124KB) + explicit width/height (no layout shift).
- Favicon (clean red "404") + robots.txt added.
- Heading fix: services h4 → h3 (no more h2→h4 skip).
- Canvas RAF loop now pauses via IntersectionObserver when scrub scrolls off-screen
  (battery/CPU win on mobile).
- fonts.gstatic.com preconnect; below-fold glitch imgs lazy-loaded + dimensioned;
  :focus-visible outlines; dead hero CSS + dead .btn color line removed.
- **Schema safety:** removed the fake-real White Plains geo coords; all address/phone
  fields now scream `REPLACE_BEFORE_LAUNCH` so a placeholder build can't ship as real.

## Multi-page build (2026-07-02) — the organic-ranking layer

Built (goal: compete on Google someday). Shared `css/site.css` + `js/nav.js`;
every page has crawlable NAP, breadcrumb, Service/BreadcrumbList JSON-LD, one H1,
canonical, OG, and the burger nav wired to the real pages:
- **4 service pages** `/services/` — collision-repair, auto-body-paint,
  dent-frame-repair, glass-adas-calibration (each unique copy, not templated dupes).
- **4 city pages** `/areas/` — white-plains, yonkers, new-rochelle, mount-vernon
  (genuinely distinct local content w/ real geography — avoids doorway-page penalty).
- **`/estimate.html`** — real photo-upload estimate form (name/phone/vehicle/insurer/
  photos). Demo submit shows a success state; `action` + submit handler marked
  `REPLACE_BEFORE_LAUNCH` — wire to Formspree/Netlify/own endpoint at launch.
- **sitemap.xml** (10 URLs); robots.txt already references it.
- Home nav "soon" links flipped to real pages; all Free-Estimate CTAs → /estimate.html.
- Verified: all 11 URLs 200, JSON-LD valid on every page, no broken internal links.

Still open (need real data — deliberately deferred, it's a test build):
- Real phone / street address / ZIP / domain everywhere (P0 launch gate) — every
  placeholder is a loud `REPLACE_BEFORE_LAUNCH` or (914) 000-0000 / 404autobody.com.
- Estimate form endpoint (email/backend) — form UI done, just needs an action URL.
- Visible map/address block once the address is real.
- Real shop/team/before-after photos + review quotes + insurance-carrier logos.
- FAQ rich results NOT eligible for this business type (Google 2023 policy) — keep the
  FAQ content for relevance/AI-answers, don't expect the SERP widget.
- Then: GBP + reviews + citations (the off-site levers in the sections above).

## Honest caveats

- Ranking-factor weights come from Whitespark's survey of 47 practitioners —
  the industry's best data, but directional, not Google-confirmed.
- No public list of ">=4.8 / 1000+ review" shops exists; website commonalities
  were derived from curated "best shop website" analyses + Caliber (primary),
  so treat as proxy evidence.
- One survey found 67% of customers pick a shop via **insurance referral** —
  getting on insurers' direct-repair (DRP) lists is a parallel channel SEO
  can't replace.

## Open questions worth a follow-up

- Direct audit of the current top-3 map-pack shops for "collision repair
  Westchester" — their categories, review counts, page structure, and the
  review velocity needed to displace them.
- DRP/insurer-referral strategy relative to Google.
