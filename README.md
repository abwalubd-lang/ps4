# DPY | دبلوماسي بلس — Game Library

A bilingual (Arabic / English) catalogue of the 100 games in the DPY bundle.
React 18 + TypeScript + Vite, plain CSS (no UI framework).

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
npm run validate   # check the dataset (games + trophy data rules)
```

`dist/` is a static site with relative paths, so it can be hosted from any folder or static host
(Netlify, Vercel, GitHub Pages, S3, cPanel…). It needs to be served over HTTP; opening
`dist/index.html` straight from disk won't work because browsers block module scripts on `file://`.

## Deploying (GitHub Pages)

Every push to `main` runs `.github/workflows/deploy.yml`: it installs dependencies, validates the dataset,
builds, and publishes `dist/` to GitHub Pages. One-time setup in the repository: **Settings → Pages →
Build and deployment → Source: GitHub Actions**.

## Replacing brand assets

- **Logo**: `src/assets/dpy-logo.webp` (the official transparent logo, trimmed of empty margin). Replace that file to update the header, footer and loading screen.
- **Favicon**: replace `public/favicon.svg` (or add a PNG and update the `<link rel="icon">` in `index.html`).

## Game data

`src/data/games-1.ts` … `games-4.ts` hold the 100 entries in the supplied order (schema in `src/data/types.ts`).
Each entry has English and Arabic titles, an Arabic and an English synopsis, the original release year of the
listed edition, developer, publisher, genres, optional `note` (edition / release-history clarifications) and
`aliases` (abbreviations and the colloquial Arabic names from the original list, so "كود" or "قراند" still find
the right games).

## Cover artwork

All 100 games have a square DPY cover in `public/covers/<game-id>.webp` (600×600).
The originals live in `covers-source/NNN-<game-id>.<ext>` (NNN = catalogue order).

To replace a cover, put the new image in `covers-source/` with the same `NNN-<game-id>` name and run:

```bash
python3 scripts/process-covers.py   # needs Pillow (pip install pillow)
```

Near-square images are centre-cropped; other shapes are fitted whole over a blurred copy of
themselves, so no title is cut off and every cover has the same size. If a cover ever fails to load,
the site falls back to Steam store art, then to a typographic DPY card.

## PS4 trophy statistics

Each game's details view has a **Trophy Statistics (PS4)** panel fed from `src/data/trophies.ts`
(schema `TrophyStats` in `src/data/types.ts`): base-game platinum / gold / silver / bronze / total,
separate DLC lists, platinum difficulty (1–10) and time (both labelled as estimates), online / missable /
multiple-playthrough flags, sources with the date each page was checked, and a verification status.

**Current status: 0 of 100 verified.** The trophy databases couldn't be reached from the research
environment, so every entry is `unverified` with `null` counts, and the site shows "Unverified" instead
of numbers. Each entry carries research flags: open questions about which PS4 list applies.

To add a verified game: fill `listTitle`, `baseGame`, `sources` (exact page URL + ISO date) and ideally
`corroboratingSources`, tick the `research` checklist, set `verificationStatus`, then run:

```bash
npm run validate          # rejects totals ≠ platinum+gold+silver+bronze, figures without sources, "verified" without evidence
npm run trophies:report   # regenerates TROPHY_RESEARCH.md (per-game checklist)
```
