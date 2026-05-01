# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # vite dev server (localhost:5173)
npm run build      # tsc -b && vite build
npm run lint       # eslint
npm run preview    # preview production build
```

No test suite exists.

## Architecture

Single-page marketing site for **ssscribe** — voice note transcription bots for messaging apps. One landing page component themed per product via CSS variables.

### Key files

- `src/pages/messscribe-landing.tsx` — the entire landing page (nav, hero, preview, storyboard, languages, pricing, CTA, footer)
- `src/index.css` — Tailwind v4 config (`@theme inline`), theme token definitions (`.theme-messscribe`, `.theme-whatsscribe`), fluid spacing tokens, keyframe animations, responsive layout grid classes
- `src/App.tsx` — router with single route `/`

### Theming system

All visual identity flows through CSS variables on theme classes:

```
.theme-messscribe  →  --bg, --fg, --accent, --accent-2, --ink, --muted, --card
.theme-whatsscribe →  same tokens, different values
```

Tailwind v4 bridges these via `@theme inline` tokens (`--color-bg: var(--bg)`, etc.). Adding a new product theme is a class swap on the wrapper, not a fork.

### Styling approach [subject to future changes]

Components use **inline styles** referencing CSS variables (`var(--ink)`, `var(--accent)`), not Tailwind utility classes. The CSS file provides theme tokens and responsive layout classes (`.hero-grid`, `.preview-grid`, `.story-rail`, `.pricing-grid`). This is intentional — the inline style approach matches the handoff from the design tool.

### Path alias

`@` → `./src` (configured in both vite.config.ts and tsconfig.json)

## Design context

**Read PRODUCT.md and DESIGN.md before any design work.** These are the source of truth for brand and visual decisions.

- **PRODUCT.md** — brand register (brand), users, product purpose, brand personality, anti-references, strategic principles
- **DESIGN.md** — Creative North Star ("The Hissing Zine"), color palette, typography hierarchy, elevation philosophy, component specs, do's and don'ts
- **DESIGN.json** — sidecar with tonal ramps, shadow/motion/breakpoint tokens, renderable component snippets

### Non-negotiable design rules

- **Lowercase always** — all copy, headings, buttons, UI text
- **Hard shadows only** — `Xpx Ypx 0 color`, never blur or spread, never `rgba(0,0,0,0.1)`
- **Ink borders** — 1.5-2px `var(--ink)` on every white surface touching the page ground
- **Neo-brutalist, not brutalist** — hard edges with warmth and playfulness, not anti-design
- **Snake mascot earns appearances** — deliberate moments (hero, storyboard, CTA), never scattered as decoration
- **No sleek SaaS, no glassmorphism, no gradient text**

### Snake mascot

Currently AI-generated PNGs (`public/snake-blue.png`, `public/snake-green.png`). CSS keyframe animations (`hiss-breathe`, `hiss-sway`) provide idle motion. Aspiration is SVG for richer animation — treat current PNGs as placeholder execution, not final form.
