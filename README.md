# DPY | دبلوماسي بلس — Game Library

A bilingual (Arabic / English) catalogue of the 100 games in the DPY bundle.
React 18 + TypeScript + Vite, plain CSS (no UI framework).

## Run

```bash
cd app
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
npm run validate   # check the dataset (100 unique entries, order, bilingual fields, synopsis length)
```

`dist/` is a static site with relative paths, so it can be hosted from any folder or static host
(Netlify, Vercel, GitHub Pages, S3, cPanel…). It needs to be served over HTTP; opening
`dist/index.html` straight from disk won't work because browsers block module scripts on `file://`.

## Layout and publishing

- `app/` — the source (React + TypeScript + Vite), cover originals and scripts.
- Repository root (`index.html`, `assets/`, `covers/`, icons, `.nojekyll`) — the built site.

On every push to `main`, `.github/workflows/deploy.yml` publishes that root copy to GitHub Pages
(**Settings → Pages → Source: GitHub Actions**). The root also works as-is with
"Deploy from a branch → `main` / `/ (root)`". After any change, rebuild the root copy and commit both:

```bash
cd app
npm run publish   # validate + build + copy app/dist to the repository root
```

## Replacing brand assets

- **Logo**: `app/src/assets/dpy-logo.webp` (the official transparent logo, trimmed of empty margin). Replace that file to update the header, footer and loading screen.
- **Favicon**: replace `app/public/favicon.png` (or add a PNG and update the `<link rel="icon">` in `index.html`).

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
