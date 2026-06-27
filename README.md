# Robotics Technical Education Foundation (RTEF)

Website for **RTEF**, a Tampa Bay, Florida 501(c)(3) nonprofit supporting **FIRST® Team 79 Krunch**.

Live site: https://gregraphan.github.io/rtef-site/

## Stack
Plain, framework-free **HTML / CSS / JS**. Display font **Space Grotesk** + body **Inter** (self-hosted).
Navy + gold identity on a light-first canvas. Built to WCAG 2.2 AA contrast/focus, with optimized
WebP imagery and self-hosted fonts for good Core Web Vitals.

Pages: `index.html`, `about.html`, `support.html`, `contact.html`.

## Local preview
Serve the folder with any static server, e.g.:

```bash
python -m http.server 5500
# then open http://localhost:5500
```

## Images
Source masters live in `assets/images/`; optimized WebP + fallbacks (used by the site) in `assets/img/`.
Regenerate the optimized set with:

```bash
npm i sharp && node scripts/optimize-images.js
```

## Deployment
Hosted on **GitHub Pages** from the `main` branch (root). `.nojekyll` disables Jekyll so files are
served as-is. To use a custom domain, add it under **Settings → Pages → Custom domain** and point DNS
at GitHub (apex `A` records `185.199.108–111.153`, `www` `CNAME` → `gregraphan.github.io`).

## Notes
- **Donate** buttons link to PayPal (`RTEFInc@gmail.com`, label "FIRST Team 79 Krunch", open amount).
- The **contact form** is client-side (`mailto:`). For server-side submissions, wire it to a service
  like Formspree or Netlify Forms.
