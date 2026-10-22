# Eeshan Garg — Portfolio (v2)

A hand-built static portfolio. No build step, no framework — just HTML, CSS and a
little JavaScript, so it deploys anywhere in under a minute.

## Deploy it

**Vercel / Netlify:** drag this whole folder onto the deploy page, or push it to a
GitHub repo and import it. No settings to change.

**Local preview:** open `index.html` in a browser, or run
`python3 -m http.server 8000` in this folder and visit http://localhost:8000

## Before you share the link

1. **Your photo** — the site uses your LinkedIn profile photo (`assets/profile.jpg`,
   taken from your LinkedIn profile at your request).
2. **Your resume** — already bundled as `assets/Eeshan_Garg_Resume.pdf`
   (the PDF you uploaded in chat). Both "Resume" buttons point to it.

## What's inside

- `index.html` — all content: hero, about, experience (from your resume),
  UASAF research section, featured cybersecurity projects, skills,
  certifications, Medium writing, contact
- `styles.css` — the light animated pastel background, layout, mobile styles
- `animations.css` — typewriter line, marquee, floating badges, card shine,
  staggered reveals, counters styling, paper card
- `script.js` — mobile menu, scroll progress, reveal, animated counters,
  typewriter roles, hero-card tilt, background parallax
- `assets/` — your LinkedIn photo and resume PDF

## Easy edits

- Colours live at the top of `styles.css` under `:root`.
- The animated background speed is the `bgShift` animation in `styles.css`
  (26s — calmer is more professional; don't go faster than ~15s).
- Every project and article is plain HTML in `index.html` — copy a card to add one.

## Notes on accuracy

Content was built from your live portfolio, GitHub, Medium and LinkedIn (Oct 2026).
LinkedIn includes: Vadodara / Parul University, your DFIR workshop with Drona Cyber
Solutions, SOC work with Sophos Firewall & ManageEngine Log360, the 7-day C3iHub
(IIT Kanpur) training on VAPT / Wazuh, and your published research paper on
application security & AI.
CEH and OSCP are listed under "Roadmap", not as certifications you hold.
Check the CodeAlpha / Alfido Tech internship wording once — it was written from
your public GitHub repos for those programmes.
