---
name: ssscribe
description: chunky-illustrated editorial landing pages for voice note transcription bots
colors:
  frosty-blue-wash: "#eef4ff"
  deep-midnight-ink: "#0a1840"
  messenger-blue: "#3b82f6"
  yolk-yellow: "#ffdc5e"
  dusty-slate: "#5d6f9e"
  clean-white: "#ffffff"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Inter, sans-serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Bricolage Grotesque, Inter, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Bricolage Grotesque, Inter, sans-serif"
    fontSize: "clamp(1.25rem, 3vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Space Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.06em"
rounded:
  pill: "999px"
  card: "24px"
  frame: "26px"
  bubble: "18px"
spacing:
  pad-x: "clamp(20px, 5vw, 48px)"
  pad-y-sm: "clamp(28px, 5vw, 40px)"
  pad-y-md: "clamp(40px, 7vw, 56px)"
  pad-y-lg: "clamp(56px, 10vw, 88px)"
components:
  button-primary:
    backgroundColor: "{colors.messenger-blue}"
    textColor: "{colors.clean-white}"
    rounded: "{rounded.pill}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.deep-midnight-ink}"
    textColor: "{colors.clean-white}"
    rounded: "{rounded.pill}"
    padding: "14px 32px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.deep-midnight-ink}"
    rounded: "{rounded.pill}"
    padding: "14px 32px"
  chip-language:
    backgroundColor: "{colors.clean-white}"
    textColor: "{colors.deep-midnight-ink}"
    rounded: "{rounded.pill}"
    padding: "6px 16px"
  card-pricing:
    backgroundColor: "{colors.clean-white}"
    textColor: "{colors.deep-midnight-ink}"
    rounded: "{rounded.card}"
    padding: "40px 32px"
---

# design system: ssscribe

## 1. Overview

**Creative North Star: "The Hissing Zine"**

a self-published zine with a snake on the masthead. the design is loud in form
but quiet in voice: oversized headlines in tight tracking, hard ink borders,
offset shadows that feel stamped onto the page, and a lowercase tone that never
raises its voice. the snake mascot enters the scene like an editorial
character, not clip art.

the system rejects three aesthetics by name. **sleek saas**: no soft shadows,
no system-font stacks, no polished corporate smoothness. **raw brutalism**: the
hard edges are neo-brutalist, not anti-design. warmth and playfulness matter.
**glossy gradients**: no blurs, no glass, no frosted surfaces. everything is
flat color, hard-edged, and intentional.

the visual identity lives in css variables (`--accent`, `--ink`, `--bg`) so
themed siblings (messscribe, whatsscribe, instascribe) are a class swap, not a
fork. messscribe is the current theme; the system is designed for more.

**Key Characteristics:**
- oversized display type with tight tracking and low line-height
- 1.5-2px ink borders on everything interactive
- hard offset shadows (no blur, no spread) as structural decoration
- pill shapes for all small interactive elements
- monospace labels as editorial eyebrows
- light tinted background, never pure white page

## 2. Colors

a muted blue-white ground with dark navy ink and two deliberate accents. the
palette is restrained in count but committed in usage: messenger-blue carries
cta weight, yolk-yellow punctuates moments.

### Primary
- **Messenger Blue** (#3b82f6): the accent that earns its role. cta buttons,
  the `sss` in the wordmark, storyboard step numbers, eyebrow text on the dark
  band. never used as a background fill for large surfaces.

### Secondary
- **Yolk Yellow** (#ffdc5e): warmth and punctuation. badge backgrounds, hover
  highlights, occasional structural accents. used sparingly so it stays
  special.

### Neutral
- **Frosty Blue Wash** (#eef4ff): the page ground. tinted toward the brand hue,
  never pure white. this is what makes the cards pop without needing shadows
  for separation.
- **Deep Midnight Ink** (#0a1840): text, borders, and the dark storyboard band.
  doubles as `--ink` and `--fg`. the darkest value in the system.
- **Dusty Slate** (#5d6f9e): muted secondary text, timestamps, supporting copy.
  blue-shifted to stay in the same family as the ink.
- **Clean White** (#ffffff): card surfaces and pill fills. always bordered with
  ink; never floating.

### Named Rules
**The Ink Border Rule.** every white surface touching the page ground gets a
1.5-2px `var(--ink)` border. white cards, pills, buttons, inputs. no
exceptions. without the border, white on frosty-blue is too subtle.

### Theming
the whatsscribe variant swaps three values: `--bg` to `#e9f5ec` (minty wash),
`--accent` to `#25d366` (whatsapp green), `--ink` to `#0a2a1a` (forest ink).
the system, shadows, borders, and all component logic stay identical.

## 3. Typography

**Display Font:** Bricolage Grotesque (with Inter fallback)
**Body Font:** Inter (with system-ui fallback)
**Label Font:** Space Mono (monospace)

**Character:** Bricolage Grotesque is chunky, slightly irregular, and warm. at
weight 800 with tight tracking, it feels hand-set. paired with Space Mono for
editorial eyebrows and Inter for readable body copy, the stack moves between
bold personality and clean information delivery.

### Hierarchy
- **Display** (800, clamp(3rem, 8vw, 6rem), line-height 0.9, -0.045em):
  hero headline only. one per page. the scale IS the design at this level.
- **Headline** (800, clamp(2rem, 5vw, 3.5rem), line-height 0.95, -0.035em):
  section headings. "try it in your language.", "47 languagesss.", "okay,
  sssold?"
- **Title** (500, clamp(1.25rem, 3vw, 1.75rem), line-height 1, -0.02em):
  card headers, pricing tier names, storyboard step headings.
- **Body** (400, 1.0625rem, line-height 1.55): running text, descriptions,
  feature explanations. max 65-75ch line length.
- **Label** (Space Mono 400, 0.75rem, line-height 1.3, 0.06em tracking,
  uppercase): eyebrow text above sections, version stamps, chip labels,
  monospace metadata. the editorial voice of the zine.

### Named Rules
**The Lowercase Rule.** all display and headline text is lowercase. no
title case, no sentence case, no all-caps display. the brand whispers; the
type size does the shouting.

**The Tight Tracking Rule.** display and headline text use negative letter
spacing (-0.035em to -0.05em). this creates the chunky, compressed feel.
labels go the opposite direction with positive tracking (0.06em) for contrast.

## 4. Elevation

the system is flat by default. shadows are structural decoration, not depth
cues. they simulate print misregistration: a hard offset with no blur, as if a
block was stamped slightly off-register onto the page. elements don't float
above the surface; they're pressed into it with a visible offset.

### Shadow Vocabulary
- **Accent Stamp** (`4px 4px 0 var(--accent)`): hero cta button only. the
  accent-colored offset draws the eye to the single most important action.
- **Ink Stamp** (`6px 6px 0 var(--ink)`): pricing cards, chat preview frame,
  final cta card. structural weight for key content containers.

### Named Rules
**The No-Blur Rule.** shadows never have blur or spread. `box-shadow` values
are always `Xpx Ypx 0 color`. if you're about to type `rgba(0,0,0,0.1)` or
a non-zero blur radius, stop. that's the ai default, not this brand.

**The Two-Shadow Rule.** only two shadow values exist in the system: accent
stamp and ink stamp. don't invent new ones. if an element needs visual weight,
use a border, not a third shadow variant.

## 5. Components

### Buttons
bold, confident, pill-shaped. they fill their space without apology.

- **Shape:** full pill (999px radius), 1.5px ink border on all variants
- **Primary:** messenger-blue background, white text, 14px 32px padding,
  accent stamp shadow (4px 4px 0). font-display at ~1rem, weight 700.
- **Hover:** background shifts to deep-midnight-ink. shadow remains.
- **Ghost:** transparent background, ink text, ink border. same padding and
  shape. no shadow at rest.
- **Ghost Hover:** frosty-blue-wash background fill.

### Chips / Pills
the zine's stickers. language pills, feature tags, the "live preview" badge.

- **Style:** clean-white background, ink text, 1.5px ink border, full pill
  radius. padding 6px 16px. body-weight text with flag emoji where applicable.
- **State:** no selected/unselected toggle. pills are display-only labels.
- **Badge variant:** messenger-blue background, white text, used for the hero
  "live preview" eyebrow.

### Cards
pricing cards and the chat preview frame. substantial, bordered, grounded.

- **Corner Style:** generously rounded (24px radius)
- **Background:** clean-white
- **Border:** 2px solid var(--ink). always present.
- **Shadow:** ink stamp (6px 6px 0 var(--ink)) on key cards. not every card
  gets a shadow; borders alone provide baseline separation.
- **Internal Padding:** generous (40px 32px on pricing cards). components
  inside cards fill the space rather than leaving emptiness.

### Navigation
sticky, minimal, functional.

- **Style:** transparent background with backdrop blur on scroll. wordmark +
  text links + cta button.
- **Typography:** body weight for links, display font.
- **Mobile:** links hidden below 768px, cta button always visible.

### Phone Frame (signature)
minimal phone vignette used in the storyboard section. 9:11 aspect ratio,
subtle notch, status bar with time/battery. rounded outer frame (26px) with
inner screen (22px). contains storyboard step content.

### Wordmark (signature)
the `messscribe` / `whatsscribe` text with the `sss` substring painted in
the accent color. this is the brand mark. rendered in Bricolage Grotesque at
display weight.

## 6. Do's and Don'ts

### Do:
- **Do** use 1.5-2px `var(--ink)` borders on every interactive element and
  every white surface on the page ground.
- **Do** use hard offset shadows (`Xpx Ypx 0 color`) exclusively. only the
  two defined values: accent stamp and ink stamp.
- **Do** keep all display and headline text lowercase. the type size carries
  the emphasis; case does not.
- **Do** use Space Mono for editorial eyebrows, version stamps, and metadata
  labels. it's the zine's annotation voice.
- **Do** give the snake mascot deliberate, earned appearances: hero, storyboard
  peek, final cta. each one should feel like a character entrance.
- **Do** use css variables for all theme-dependent values so sibling themes
  are a class swap.
- **Do** fill component interiors generously. the bold/confident component
  philosophy means elements take up space, not float in emptiness.

### Don't:
- **Don't** use soft drop-shadows (`box-shadow: 0 4px 12px rgba(0,0,0,0.1)`).
  that's sleek saas, not this brand.
- **Don't** use blur, frosted glass, glassmorphism, or gradient backgrounds.
  this is explicitly rejected as an anti-reference.
- **Don't** use pure `#000` black or pure `#fff` white as page backgrounds.
  the frosty-blue-wash and deep-midnight-ink are the system extremes.
- **Don't** scatter the snake mascot across sections as decoration. it earns
  each appearance.
- **Don't** use title case or sentence case in headlines. lowercase, always.
- **Don't** use Inter for headlines or display text. Bricolage Grotesque is
  the lead; Inter is the body workhorse.
- **Don't** use border-left or border-right greater than 1px as a colored
  accent stripe on cards, list items, or callouts.
- **Don't** use gradient text (`background-clip: text` with gradient
  background).
- **Don't** create identical card grids (same-sized cards with icon + heading +
  text repeated). vary the layout rhythm.
