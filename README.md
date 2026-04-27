# ssscribe landing pages

Public-facing marketing pages for the **ssscribe** family — voice-note
transcription bots that live inside messaging apps.

| Sibling | Platform | Theme | Status |
|---|---|---|---|
| messscribe | Messenger | blue | shipped |
| whatsscribe | WhatsApp | green | planned |

Both siblings share one page component themed via CSS variables — dropping in
`whatsscribe` later is a class swap, not a fork.

## Stack

- React 19 + TypeScript
- Vite 6 (SWC)
- Tailwind v4 (utilities) + CSS variables (theme tokens)
- React Router v7

No UI library. The design is chunky-illustrated (1.5–2px ink borders, hard
shadow offsets, 96px display type) — shadcn's sleek defaults fought it, so
components are handcoded.

## Run

```bash
npm install
npm run dev
```

## Brand context

See `.impeccable.md` for the design context that drives every visual decision.

## License

MIT
