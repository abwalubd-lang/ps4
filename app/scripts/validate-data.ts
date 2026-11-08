import { GAMES } from '../src/data';
import { GENRES } from '../src/data/genres';

const errors: string[] = [];
const words = (s: string) => s.trim().split(/\s+/).length;

if (GAMES.length !== 100) errors.push(`Expected 100 games, found ${GAMES.length}`);

const seenIds = new Set<string>();
const seenTitles = new Set<string>();
const seenSteam = new Set<number>();

GAMES.forEach((g, i) => {
  const at = `#${g.order} ${g.titleEn}`;
  if (g.order !== i + 1) errors.push(`${at}: order ${g.order} at position ${i + 1}`);
  if (seenIds.has(g.id)) errors.push(`${at}: duplicate id ${g.id}`);
  if (seenTitles.has(g.titleEn)) errors.push(`${at}: duplicate title`);
  if (g.steamAppId && seenSteam.has(g.steamAppId)) errors.push(`${at}: duplicate Steam ID`);
  seenIds.add(g.id);
  seenTitles.add(g.titleEn);
  if (g.steamAppId) seenSteam.add(g.steamAppId);

  for (const key of ['titleEn', 'titleAr', 'developer', 'synopsisEn', 'synopsisAr'] as const) {
    if (!g[key]?.trim()) errors.push(`${at}: missing ${key}`);
  }
  if (!/[؀-ۿ]/.test(g.titleAr)) errors.push(`${at}: Arabic title has no Arabic script`);
  if (g.releaseYear < 1990 || g.releaseYear > 2026) errors.push(`${at}: suspicious year ${g.releaseYear}`);
  if (!g.genres.length) errors.push(`${at}: no genres`);
  g.genres.forEach((k) => GENRES[k] || errors.push(`${at}: unknown genre ${k}`));

  const ar = words(g.synopsisAr);
  const en = words(g.synopsisEn);
  if (ar < 35 || ar > 70) errors.push(`${at}: Arabic synopsis is ${ar} words (target 35–70)`);
  if (en < 30 || en > 75) errors.push(`${at}: English synopsis is ${en} words`);
});

const withArt = GAMES.filter((g) => g.coverImage || g.steamAppId).length;
console.log(`Games: ${GAMES.length}`);
console.log(`With an artwork source: ${withArt} · typographic placeholder: ${GAMES.length - withArt}`);
GAMES.filter((g) => !g.coverImage && !g.steamAppId).forEach((g) => console.log(`  - #${g.order} ${g.titleEn}`));

if (errors.length) {
  console.error(`\n${errors.length} problem(s):\n` + errors.map((e) => `  ✗ ${e}`).join('\n'));
  process.exit(1);
}
console.log('\n✓ Dataset valid');
