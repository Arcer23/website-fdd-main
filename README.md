# Meridian Wellness — UI Design

A homepage and shared design system for a health & wellness site that unifies
fitness, yoga, meditation, nutrition and clinical care into one visual language.

## Concept

The site's signature is a **pulse/breath line** — a single continuous SVG path
that threads through the hero, the stats band and the footer. It's a literal
stand-in for the site's thesis: fragmented wellness services, stitched into
one continuous line of care.

## Design tokens (`css/style.css`)

| Role | Token | Value |
|---|---|---|
| Background | `--paper` | `#F4F1E9` |
| Ink / text | `--ink` | `#1B2420` |
| Primary green | `--pine` | `#2F4A3C` |
| Secondary green | `--sage` | `#8FA888` |
| Accent (CTA / pulse) | `--gold` | `#C79A4B` |

**Type:** Fraunces (display serif, italics used for emphasis) + Inter (body) +
Space Mono (eyebrows, labels, data).

Dark mode is a token swap only (`body.dark-mode` in `css/navbar.css`) — no
duplicated layout rules.

## File map

- `index.html` — fully built homepage: hero, philosophy, programs, stats band,
  team, testimonial, newsletter CTA, footer.
- `css/style.css` — tokens, resets, buttons, cards, the `.pulse-line` signature,
  scroll-reveal utility.
- `css/navbar.css`, `css/footer.css`, `css/home.css` — component styles.
- `css/responsive.css` — breakpoints not already handled inline in each
  component file.
- `js/navbar.js` — scroll shadow, mobile drawer, active-link detection.
- `js/darkmode.js` — theme toggle with `localStorage` persistence.
- `js/main.js` — `IntersectionObserver` scroll reveal, marquee loop, footer
  year, demo newsletter submit.
- `js/slider.js`, `js/bmi.js`, `js/calculator.js`, `js/validation.js`,
  `js/events.js` — reserved for `programs.html` (BMI/calorie tools),
  `events.html` (calendar/filtering) and `contact.html` (form validation) —
  not yet built.
- `data/*.json` — sample content for programs, events and resources, shaped
  to match the cards already on the homepage.

## Pages (19, all interlinked)

| Page | Purpose |
|---|---|
| `index.html` | Homepage |
| `about.html` | Story + principles, links to `team.html` |
| `team.html` | Full staff grid |
| `programs.html` | Hub linking to 4 program detail pages + `tools.html` |
| `program-fitness.html`, `program-yoga.html`, `program-meditation.html`, `program-nutrition.html` | Program detail template: schedule table + related-program links |
| `services.html` | Clinical services grid, links to `service-detail.html` |
| `service-detail.html` | Sample consult detail page |
| `events.html` | Filterable event list (`js/events.js`), links to `event-detail.html` |
| `event-detail.html` | Single event page |
| `resources.html` | Article grid, links to `resource-article.html` |
| `resource-article.html` | Article template with sticky sidebar |
| `gallery.html` | Masonry gallery + lightbox |
| `tools.html` | BMI (`js/bmi.js`) + calorie (`js/calculator.js`) calculators |
| `pricing.html` | 3-tier membership pricing |
| `faq.html` | Accordion FAQ |
| `contact.html` | Validated contact form (`js/validation.js`) + studio info |

All 19 pages share the exact same `<header class="navbar">` and `<footer>`
markup (generated from `build.py` + `pages_content*.py` so they can never
drift), meaning every page cross-links to every section — nav, footer, and
in-content links (e.g. a program page links to related programs, `tools.html`,
and `contact.html`; `faq.html` links to `pricing.html` and `contact.html`).

`js/navbar.js` auto-highlights the current top-level nav item by comparing
`location.pathname` to each link's `href`, so no per-page "active" markup is
needed.

## Regenerating pages

The site is built from Python templates, not hand-duplicated HTML:
- `build.py` — shared `<head>`, navbar, footer, script-tag partials
- `pages_content.py` through `pages_content_6.py` — per-page `<main>` content

Run `python3 pages_content.py && python3 pages_content_2.py ... pages_content_6.py`
from `/home/claude` (or wherever the scripts live) to regenerate every page —
useful if you change the navbar or footer once and want it to propagate
everywhere.

## Responsive behavior

- `css/responsive.css` + breakpoints inlined at the bottom of `home.css` and
  `pages.css` cover: hero stacking, program/team/pricing grids collapsing
  2-up then 1-up, mobile nav drawer (`.navbar__links` slides in under 860px),
  gallery masonry dropping from 3 to 1 column, and forms stacking to
  single-column under 560px.
- Tested breakpoints: 1200px (max content width), 980px, 860px, 700px, 560px,
  420px.

## Assets

`assets/images/*` subfolders and `assets/icons`, `assets/videos`, `assets/fonts`
are scaffolded but empty — the homepage uses CSS gradients and inline SVG in
place of photography so the file works standalone. Drop real photos into the
matching subfolder and swap the gradient `<div>`s in `.hero__visual`,
`.team-card__img` for `<img>` tags.
