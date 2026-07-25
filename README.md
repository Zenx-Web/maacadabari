# MAAC Adabari Website

Next.js (App Router) + TypeScript + Tailwind CSS v4 + GSAP + Supabase.

Project specs live in the markdown files at the repo root and in
`design-system/`, `categories/`, and `courses/` — see
`00-project-overview.md` for an overview and `roadmap.md` for status.
`design-tokens.json` is the single source of truth for design tokens
(colors, spacing, typography, containers, motion) and is mirrored into
`src/app/globals.css` via Tailwind's `@theme`.

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the next
available port) to view it.

## Content

Course and category content is authored as markdown in `courses/` and
`categories/`, validated against a Zod schema, and consumed at build
time — see `content/` and `lib/content.ts` once the content pipeline
lands.
