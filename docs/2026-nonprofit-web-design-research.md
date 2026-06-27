# 2026 Nonprofit Web Design Research (RTEF redesign)

**Provenance.** Focused research pass (June 2026) to complement the NCFC `2026-web-design-research.md`
style doc, which is excellent on the *technical* fundamentals (fluid type, WCAG 2.2 AA, motion,
Core Web Vitals) but is written for a **financial-coaching / YMYL** brand. RTEF is a different
animal: a small, **donation-driven STEM nonprofit** supporting FIRST&reg; Team 79 Krunch. This doc
captures the donor-trust and donation-UX guidance specific to that context. The NCFC doc remains
the source of truth for type/color/motion/a11y/performance mechanics; this doc layers nonprofit
strategy on top. Confidence noted per finding; vendor-blog conversion stats are treated as
directional, not proven (mirroring the refuted-stats caution in the NCFC doc).

## Executive summary

For a donation-driven STEM nonprofit, the homepage's job above the fold is to answer "what is this,
who does it help, and why should I trust you" within seconds, paired with a **header Donate button
visible on every page**, authentic photos of the actual team (not stock), and visible transparency
signals (501(c)(3), Florida registration, "100% of donations go to the team"). Trust is repeatedly
cited as the single largest factor in a donor's decision to give, so the design should lead with
credibility and concrete impact, told as a story (students → STEM skills → 90%+ pursue STEM
careers), not generic appeals. Mobile-first and fast (Core Web Vitals) is non-negotiable because the
majority of traffic is mobile.

## Findings (with RTEF application)

1. **Trust is the top giving factor; make transparency visible.** Donors research credibility before
   giving; surface 501(c)(3) status, the Florida charitable-registration line, and how funds are used.
   Confidence: high (multiple independent sources). RTEF application: keep the FL Division of Consumer
   Services disclaimer, add an explicit "501(c)(3) nonprofit · 100% of donations go directly to the
   team" trust line, and consider a small "Transparency" footer cluster. Sources:
   [DonorDock](https://www.donordock.com/articles/nonprofit-website-best-practices),
   [Bloomerang](https://bloomerang.com/blog/nonprofit-fundraising-website-best-practices).

2. **Mission above the fold, in plain language.** Visitors should grasp the mission within seconds;
   lead with a clear value proposition, not jargon. Confidence: high. RTEF application: hero headline
   states the mission (inspire students through competitive robotics / STEM) with a one-line subhead;
   avoid burying it under the org's long legal name. Sources:
   [Hills & Tandem](https://www.thehillstandem.com/post/website-design-for-nonprofit-organizations),
   [Kanopi](https://kanopi.com/blog/nonprofit-website-design/).

3. **Authentic photography beats stock, by a lot.** Real photos of the people served drive
   materially higher engagement than generic imagery. Confidence: high. RTEF application: feature the
   genuine team photos (the robot, the competition arena, the build/CNC shop, students at a FIRST
   event); **drop the generic business stock** (person-on-phone, laptop-and-coffee, money jar,
   volunteer t-shirts) used on the old Support/Contact sections. Use icons or color blocks where no
   authentic photo exists. Sources:
   [ImageX](https://imagexmedia.com/blog/best-nonprofit-website-designs-drive-impact),
   [Hills & Tandem](https://www.thehillstandem.com/post/website-design-for-nonprofit-organizations).

4. **Donate button: header, every page, above the fold.** The single highest-performing placement;
   optionally make it sticky so visitors can act the moment they're inspired. Confidence: high (broad
   consensus). RTEF application: persistent gold Donate button in the sticky header on every page,
   linking to the PayPal donation flow. Sources:
   [Neon One](https://neonone.com/resources/blog/donate-button/),
   [CharityEngine](https://blog.charityengine.net/donation-page-vs-donate-button).

5. **Donation flow: simple, single CTA, mobile-first, specific impact.** Distraction-free, on-brand
   (anti-scam), completable in ~2 minutes on mobile, framed with concrete impact. Confidence: medium-
   high (vendor sources, directionally consistent). RTEF application: a focused Support page that
   states exactly what donations buy (tools, parts, travel, PPE, trailer), offers PayPal + check-by-
   mail, and frames the ask with the $35k annual budget and the needs list. Sources:
   [DonorDock](https://www.donordock.com/articles/donation-pages-that-conver),
   [Donately](https://www.donately.com/blog/donation-page-best-practices).

6. **Impact storytelling raises retention.** Protagonist → challenge → intervention → measurable
   change → evidence. Storytelling-focused nonprofits report higher donor retention. charity:water is
   the cited gold standard (emotional story + radical transparency on fund use). Confidence: medium
   (correlational, vendor sources). RTEF application: tell the team's arc — local high-schoolers,
   mentored by engineers, designing/building competitive robots, 90%+ going on to STEM careers — and
   tie the donation ask to that outcome. Sources:
   [Donorbox](https://donorbox.org/nonprofit-blog/social-proof-to-your-nonprofits-website),
   [Trajectory](https://www.trajectorywebdesign.com/blog/nonprofit-web-design-storytelling).

7. **Mobile-first + Core Web Vitals are a ranking and conversion factor.** Majority of traffic is
   mobile; slow/unstable pages lose visitors and search visibility. Confidence: high. RTEF
   application: convert the ~28 MB of full-res JP/PNG assets to right-sized WebP with `<picture>`
   fallbacks, lazy-load below-the-fold images, size every image to avoid CLS. Source:
   [Counterintuity](https://counterintuity.com/nonprofit-website-best-practices-in-2026-what-to-update-and-why-it-matters/).

## What to treat with caution (directional, not proven)

- "Security icons near payment increase conversion ~20%" and "suggested amounts → +23% average gift."
  Vendor-blog figures; plausible but unverified. The NCFC doc adversarially **refuted** a near-identical
  "security badges reduce abandonment 32%" claim, so do not present these as facts. Use the *patterns*
  (clear CTA, suggested context, trust cues) without citing the percentages.

## RTEF brand direction (decisions, not findings)

These are design decisions for RTEF, adapting the NCFC system architecture:
- **Palette:** deep **navy** anchor (ties to FIRST blue / Team Krunch navy) + a distinctive **gold/
  amber** accent (Krunch flag gold; signals "award-winning"; satisfies the research's "differentiate
  beyond blue" point) on a **light-first** canvas. Gold is used as a fill (dark text on gold) and as a
  highlight on navy — never as low-contrast text on white.
- **Type:** **Space Grotesk** (display/headings — geometric, lightly technical, fits robotics) +
  **Inter** (body), self-hosted, on the NCFC fluid `clamp()` scale.
- **Reuse from NCFC verbatim:** token architecture, type scale, `:focus-visible` rings, `scroll-margin`,
  `prefers-reduced-motion` guard, IntersectionObserver reveals, glass sticky header, card/hero/footer
  component patterns. See `2026-web-design-research.md` and the NCFC `ncfc-website/` implementation.

## Sources

- https://www.thehillstandem.com/post/website-design-for-nonprofit-organizations
- https://imagexmedia.com/blog/best-nonprofit-website-designs-drive-impact
- https://www.donordock.com/articles/nonprofit-website-best-practices
- https://www.donordock.com/articles/donation-pages-that-conver
- https://bloomerang.com/blog/nonprofit-fundraising-website-best-practices
- https://neonone.com/resources/blog/donate-button/
- https://blog.charityengine.net/donation-page-vs-donate-button
- https://www.donately.com/blog/donation-page-best-practices
- https://donorbox.org/nonprofit-blog/social-proof-to-your-nonprofits-website
- https://www.trajectorywebdesign.com/blog/nonprofit-web-design-storytelling
- https://counterintuity.com/nonprofit-website-best-practices-in-2026-what-to-update-and-why-it-matters/
- https://kanopi.com/blog/nonprofit-website-design/
