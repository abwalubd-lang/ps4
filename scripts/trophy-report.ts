/** Writes TROPHY_RESEARCH.md: the per-game research checklist, generated from the dataset. */
import { writeFileSync } from 'node:fs';
import { GAMES } from '../src/data';
import { TROPHIES } from '../src/data/trophies';
import type { TrophyResearch } from '../src/data/types';

const steps: [keyof TrophyResearch, string][] = [
  ['ps4VersionIdentified', 'PS4 ver.'],
  ['baseListFound', 'List'],
  ['countsVerified', 'Counts'],
  ['sourcesRecorded', 'Sources'],
];
const mark = (b: boolean) => (b ? '✅' : '⬜');
const date = new Date().toISOString().slice(0, 10);
const counts = { verified: 0, partial: 0, unverified: 0 };
GAMES.forEach((g) => counts[TROPHIES[g.id].verificationStatus]++);

let md = `# PS4 trophy research checklist\n\nGenerated ${date} from \`src/data/trophies.ts\` (\`npm run trophies:report\`).\n\n`;
md += `**Status:** ${counts.verified} verified · ${counts.partial} partial · ${counts.unverified} unverified (of ${GAMES.length}).\n\n`;
md += `Rules: counts come only from an inspected PS4 trophy-list page (PSNProfiles, TrueTrophies, or official PlayStation), with the exact URL and date recorded; totals must equal platinum + gold + silver + bronze; DLC is kept separate; anything unconfirmed stays \`null\` / \`unverified\`.\n\n`;
md += `| # | Game | Status | ${steps.map(([, l]) => l).join(' | ')} | Research flags |\n|---|---|---|${steps.map(() => '---').join('|')}|---|\n`;
for (const g of GAMES) {
  const t = TROPHIES[g.id];
  md += `| ${g.order} | ${g.titleEn} | ${t.verificationStatus} | ${steps.map(([k]) => mark(t.research[k])).join(' | ')} | ${t.researchFlags.join(' ').replace(/\|/g, '/') || '—'} |\n`;
}
writeFileSync(new URL('../TROPHY_RESEARCH.md', import.meta.url), md);
console.log(`TROPHY_RESEARCH.md written (${counts.unverified} unverified).`);
