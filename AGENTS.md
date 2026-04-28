# Agents

## Dev

```bash
npm run dev    # Next.js with Turbopack (script already includes --turbopack)
npm run build  # production build
npm start      # start production server
```

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript (strict mode)
- Tailwind CSS v3 via `@tailwindcss/postcss`
- Markdown via `remark` + `gray-matter`
- Node 24.x required

## Architecture

- Blog posts live in `/_posts` as Markdown with front matter.
- `src/lib/api.ts` reads/parsers posts; `src/lib/markdownToHtml.ts` renders content.
- `src/app/posts/[slug]/page.tsx` — post detail page (static generation via `generateStaticParams`).
- `src/app/page.tsx` — blog index.
- `@/*` maps to `./src/*` (tsconfig paths).

## Notes

- No test, lint, or typecheck scripts defined — verify manually.
- `@types/react` and `@types/react-dom` use `*` (unpinned) — may cause type drift.