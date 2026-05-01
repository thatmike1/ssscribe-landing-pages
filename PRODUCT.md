# product

## register

brand

## users

anyone who gets voice notes they'd rather read than listen to. the person
whose girlfriend sends 90-second voice notes about dinner plans. the one
muted in a group chat that runs on voice. the commuter who can't hit play
on the bus.

the core pain: voice notes waste time. reading is faster. but messaging
apps don't offer transcription natively — so people just... don't listen,
and miss things.

messscribe lives **inside** the messenger thread. forward a voice note →
wait ~3 seconds → get a transcript + tl;dr back. no app to install, no
account to create, no workflow to learn.

## product purpose

**ssscribe** is the brand umbrella for voice note transcription bots that
live inside messaging apps.

**messscribe** is the first shipped product — a facebook messenger bot.
it transcribes voice messages using deepgram (nova-3) and generates tl;dr
summaries via openrouter (qwen). 47+ languages with auto-detection.

**whatsscribe** (whatsapp) is planned. **instascribe** (instagram) is
aspirational. each sibling shares the same page component, themed per
platform via css variables.

this repo holds all ssscribe landing pages. the domain is ssscribe.app.

## brand personality

**three words:** playful · honest · tactile.

- **lowercase, always.** "voice notes, sssuddenly readable." the brand
  has a small voice, not a corporate one. all copy, headings, buttons,
  and ui text stay lowercase.
- **the hisss.** triple-s in product names (`messscribe`, `whatsscribe`)
  and in copy ("ssssuddenly", "languagesss", "i'm all earsss"). it's
  the signature. the accent color paints just the `sss` in the wordmark.
  tread this carefully — the current copy strikes a good balance.
- **honest about being indie.** no corporate puffery, no fake scale.
  "support a tiny indie dev 🐍" is the tone. this is one person's
  project that solves their own problem.
- **the snake mascot.** a core brand element, not decoration. it has
  personality and presence — a character that anchors moments on the
  page, not filler scattered across sections. currently ai-generated
  pngs (via a consistent prompt). the aspiration is to evolve toward
  svg for richer animation and a more "alive" feeling. the current
  character design direction is liked; the execution needs to level up.

## anti-references

- **sleek saas.** stripe, linear, vercel — that polished, corporate
  smoothness with soft shadows and system fonts. ssscribe is warmer,
  chunkier, more handmade.
- **raw brutalism.** deliberately ugly, anti-design, exposed html.
  ssscribe uses neo-brutalist elements (hard shadows, ink borders, bold
  type) but with warmth and playfulness, not hostility. the distinction
  matters — neo-brutalism is the aesthetic lane, not brutalism.
- **glossy gradients.** the glass-morphism / gradient-mesh trend.
  ssscribe uses flat color, hard edges, and offset shadows. no soft
  drop-shadows, no blurs, no frosted glass.

## design principles

1. **hard edges, warm heart.** neo-brutalist craft meets playful
   personality. chunky borders and offset shadows create visual presence;
   lowercase voice and snake character create warmth. the tension between
   bold form and gentle tone is the brand.
2. **mascot earns its screen time.** the snake appears in deliberate
   moments — hero, storyboard, final cta — each serving a purpose. never
   duplicated as section filler. when the snake shows up, it should feel
   like a character entering the scene.
3. **honest about what this is.** no pretending to be bigger than it is.
   copy acknowledges the indie scale. pricing stays transparent.
   marketing claims match what the bot actually does today.
4. **craft is the credential.** this is both a product and a portfolio
   piece. every design decision should demonstrate care, taste, and
   capability. higher polish is justified because the landing page itself
   is a showcase.
5. **one brand, themed per app.** all visual identity flows through css
   variables (`--accent`, `--ink`, `--bg`). dropping in a whatsscribe or
   instascribe theme is a class swap, not a fork. the brand is ssscribe;
   the products are siblings.

## pricing

not finalized. subscription model and tiers are being planned in the
messscribe bot repo. no payment integration exists yet.

the landing page should present pricing direction without committing to
specific numbers that haven't been validated against actual costs.
illustrative ballpark from the roadmap (subject to change):

- free tier: limited daily usage
- paid tier: ~€4/mo range, higher limits, extra features (translation,
  speaker diarization, longer audio)

## accessibility & inclusion

minimal / best effort for now. cover the basics: meaningful alt text,
reasonable color contrast, semantic html. not a major investment focus
at this stage.
