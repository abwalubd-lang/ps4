import { GAMES } from '../src/data';
import { GENRES } from '../src/data/genres';
import { TROPHIES } from '../src/data/trophies';
import type { TrophyCounts } from '../src/data/types';

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

// ---------- Trophy statistics ----------
const isCount = (n: number | null) => n === null || (Number.isInteger(n) && n >= 0);
function checkCounts(at: string, label: string, c: TrophyCounts) {
  for (const k of ['platinum', 'gold', 'silver', 'bronze', 'total'] as const) {
    if (!isCount(c[k])) errors.push(`${at}: ${label}.${k} must be a non-negative integer or null`);
  }
  if (c.platinum !== null && c.platinum > 1) errors.push(`${at}: ${label} has more than one platinum`);
  const parts = [c.platinum, c.gold, c.silver, c.bronze];
  if (parts.every((n) => n !== null) && c.total !== null) {
    const sum = (parts as number[]).reduce((a, b) => a + b, 0);
    if (sum !== c.total) errors.push(`${at}: ${label} total ${c.total} ≠ sum ${sum}`);
  }
}

const statusCount = { verified: 0, partial: 0, unverified: 0 };
for (const id of Object.keys(TROPHIES)) {
  if (!GAMES.some((g) => g.id === id)) errors.push(`trophies: unknown game id ${id}`);
}
GAMES.forEach((g) => {
  const at = `#${g.order} ${g.titleEn} [trophies]`;
  const t = TROPHIES[g.id];
  if (!t) return errors.push(`${at}: missing entry`);
  statusCount[t.verificationStatus]++;
  checkCounts(at, 'baseGame', t.baseGame);
  t.dlc?.forEach((d) => checkCounts(at, `dlc "${d.name}"`, d.counts));
  for (const s of [...t.sources, ...t.corroboratingSources]) {
    if (s.url !== null && !/^https:\/\//.test(s.url)) errors.push(`${at}: source URL must be https`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(s.checked)) errors.push(`${at}: source needs an ISO "checked" date`);
  }
  const anyData = Object.values(t.baseGame).some((n) => n !== null);
  if (anyData && !t.sources.length) errors.push(`${at}: has figures but no source`);
  if (t.verificationStatus === 'verified') {
    if (Object.values(t.baseGame).some((n) => n === null)) errors.push(`${at}: verified but counts incomplete`);
    if (!t.sources.some((s) => s.covers.includes('counts'))) errors.push(`${at}: verified without a counts source`);
    if (!t.research.countsVerified || !t.research.ps4VersionIdentified) errors.push(`${at}: verified but checklist incomplete`);
  }
});
console.log(`Trophy stats — verified: ${statusCount.verified} · partial: ${statusCount.partial} · unverified: ${statusCount.unverified}`);

const withArt = GAMES.filter((g) => g.coverImage || g.steamAppId).length;
console.log(`Games: ${GAMES.length}`);
console.log(`With an artwork source: ${withArt} · typographic placeholder: ${GAMES.length - withArt}`);
GAMES.filter((g) => !g.coverImage && !g.steamAppId).forEach((g) => console.log(`  - #${g.order} ${g.titleEn}`));

if (errors.length) {
  console.error(`\n${errors.length} problem(s):\n` + errors.map((e) => `  ✗ ${e}`).join('\n'));
  process.exit(1);
}
console.log('\n✓ Dataset valid');
