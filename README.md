# John Quevedo Portfolio (Next.js + TypeScript)

Recruiter-first portfolio optimized for <45 second scanning: plain-English outcomes on cards, with deeper technical evaluation one click away in case studies.

## Stack

- Next.js (App Router) + TypeScript
- TailwindCSS
- Typed content data files
- Vitest + Playwright
- GitHub Actions CI
- Optional analytics (Vercel or Plausible) via config flag

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000).

4. Validate quality:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

## Environment variables

Create `.env.local` (optional):

```bash
NEXT_PUBLIC_ANALYTICS_PROVIDER=vercel
# or plausible / none
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
```

## Content model

- Projects (typed): `content/projects.ts`
- Resume ATS text: `content/resume/resume.json`
- Resume PDF: `public/resume/john-quevedo-resume.pdf`

Project data includes:
- `recruiterHighlights` (plain-English outcomes for cards and case-study tops)
- `metricsRaw` (source-of-truth numeric metrics)
- `derivedMetrics` (computed in code)

## Deploy to Vercel

1. Push repo to GitHub.
2. In Vercel, import project from GitHub.
3. Framework preset: Next.js (auto-detected).
4. Add env vars from above if using analytics.
5. Deploy.

## Placeholder replacement checklist

- [ ] Replace `siteConfig.url` in `lib/site-config.ts` with your production domain.
- [ ] Replace placeholder demo/write-up links in `content/projects.ts`.
- [ ] Replace `public/resume/john-quevedo-resume.pdf` with final resume.
- [ ] Update ATS text in `content/resume/resume.json` from final resume.
- [ ] Update social reading platform quantitative metrics when finalized.
- [ ] Tune OG image styling in `app/api/og/route.tsx`.

