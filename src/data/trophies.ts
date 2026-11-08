import type { Bilingual, TrophyCounts, TrophyStats, VerificationStatus } from './types';

/**
 * PS4 trophy statistics, keyed by game id.
 *
 * Source: trophy data supplied by DPY (دبلوماسي بلس) on 2026-10-25, in four batches covering
 * games 1–100. The trophy databases themselves could not be opened from the research
 * environment, so each entry cites DPY as its source (no page URL).
 *
 * Rules applied when entering the data:
 * - Anything DPY marked UNVERIFIED stays null / "unverified"; missing values are never zero.
 * - Base-game and DLC counts are kept separate.
 * - Every total was checked against platinum + gold + silver + bronze (all matched).
 * - Where the exact same breakdown was supplied for different games (possible copy errors),
 *   only the total is published and the breakdown is held until DPY reconfirms it.
 */

const SUPPLIED = '2026-10-25';
type N = number | null;

interface Input {
  /** Exact PS4 edition / list name, when DPY specified one. */
  list?: string;
  /** [platinum, gold, silver, bronze, total] */
  c?: [N, N, N, N, N];
  dlc?: { name: string; total: number }[];
  /** DPY said the counts were verified. */
  countsOk?: boolean;
  /** Breakdown held back: identical to another game's supplied breakdown. */
  hold?: [number, number, number, number];
  note?: [string, string];
  flags?: string[];
}

const NO_DATA: Bilingual = {
  en: 'No verified trophy data for the PS4 version yet.',
  ar: 'لا توجد بعد بيانات تروفيات موثّقة لنسخة PS4.',
};
const HELD: Bilingual = {
  en: 'The trophy breakdown is awaiting confirmation; only the total is shown.',
  ar: 'توزيع التروفيات بانتظار التأكيد، لذلك نعرض المجموع فقط.',
};

function entry(i: Input): TrophyStats {
  const [platinum, gold, silver, bronze, total] = i.c ?? [null, null, null, null, null];
  const baseGame: TrophyCounts = i.hold
    ? { platinum: null, gold: null, silver: null, bronze: null, total }
    : { platinum, gold, silver, bronze, total };
  const hasCounts = Object.values(baseGame).some((n) => n !== null);
  const complete = Object.values(baseGame).every((n) => n !== null);

  const covers: TrophyStats['sources'][number]['covers'] = [];
  if (hasCounts) covers.push('counts');

  const status: VerificationStatus =
    complete && i.countsOk && !i.hold ? 'verified' : hasCounts || covers.length ? 'partial' : 'unverified';

  const notes: Bilingual = i.note
    ? { en: i.note[0], ar: i.note[1] }
    : i.hold
      ? HELD
      : hasCounts
        ? { en: '', ar: '' }
        : NO_DATA;
  if (i.note && i.hold) {
    notes.en = `${HELD.en} ${notes.en}`;
    notes.ar = `${HELD.ar} ${notes.ar}`;
  }

  const flags = [...(i.flags ?? [])];
  if (i.hold) flags.unshift(`Supplied breakdown ${i.hold.join('/')} (P/G/S/B) matches another game exactly; reconfirm before publishing.`);

  return {
    platform: 'PS4',
    listTitle: i.list ?? null,
    baseGame,
    dlc: i.dlc?.map((d) => ({ name: d.name, counts: { platinum: null, gold: null, silver: null, bronze: null, total: d.total } })) ?? null,
    sources: covers.length ? [{ name: 'DPY (دبلوماسي بلس)', url: null, checked: SUPPLIED, covers }] : [],
    corroboratingSources: [],
    verificationStatus: status,
    research: {
      ps4VersionIdentified: hasCounts || !!i.list,
      baseListFound: hasCounts,
      countsVerified: status === 'verified',
      sourcesRecorded: covers.length > 0,
    },
    notes,
    researchFlags: flags,
  };
}

const packs = (n: number, packCount?: number) => [{ name: packCount ? `DLC (${packCount} packs)` : 'DLC', total: n }];
const SERVERS = (en: string, ar: string): [string, string] => [en, ar];

export const TROPHIES: Record<string, TrophyStats> = {
  // ---------- Batch 1 (1–25) ----------
  'among-us': entry({ c: [1, 6, 12, 6, 25], countsOk: true, dlc: packs(9) }),
  'apex-legends': entry({
    c: [0, 1, 2, 9, 12], countsOk: true,
  }),
  'assassins-creed-iv-black-flag': entry({
    c: [1, 1, 13, 36, 51], countsOk: true,
  }),
  brawlhalla: entry({ c: [1, 5, 6, 28, 40], countsOk: true, dlc: packs(26, 3) }),
  bloodborne: entry({
    c: [1, 6, 7, 20, 34], hold: [1, 6, 7, 20], dlc: [{ name: 'The Old Hunters', total: 6 }],
  }),
  'baldurs-gate': entry({ list: 'Baldur’s Gate: Enhanced Edition', c: [1, 2, 6, 46, 55], countsOk: true }),
  'baldurs-gate-ii': entry({ list: 'Baldur’s Gate II: Enhanced Edition', c: [1, 2, 3, 52, 58], countsOk: true }),
  'borderlands-2': entry({
    c: [1, 2, 9, 39, 51], countsOk: true, dlc: packs(25, 5),
  }),
  'borderlands-3': entry({
    c: [1, 3, 6, 35, 45], countsOk: true, dlc: packs(36, 6),
  }),
  'battlefield-1': entry({ c: [1, 6, 9, 16, 32], countsOk: true, dlc: packs(19, 4) }),
  'battlefield-4': entry({ c: [1, 3, 13, 26, 43], hold: [1, 3, 13, 26], dlc: packs(25, 5) }),
  'battlefield-v': entry({
    c: [1, null, null, null, 22], note: ['Total identified; the gold/silver/bronze breakdown is not verified yet.', 'تم تحديد المجموع، وتوزيع الذهبي والفضي والبرونزي لم يُوثّق بعد.'],
  }),
  'battlefield-2042': entry({ c: [1, 4, 10, 20, 35], countsOk: true }),
  'batman-arkham-city': entry({
    list: 'Batman: Return to Arkham — Arkham City', c: [1, 1, 15, 34, 51], hold: [1, 1, 15, 34], dlc: packs(20, 4),
  }),
  'batman-arkham-knight': entry({ c: [1, 1, 1, 62, 65], countsOk: true, dlc: packs(45, 16) }),
  'batman-arkham-asylum': entry({
    list: 'Batman: Return to Arkham — Arkham Asylum', c: [1, 1, 18, 28, 48], countsOk: true,
  }),
  'bioshock-remastered': entry({ c: [1, 3, 2, 48, 54], countsOk: true, dlc: packs(12) }),
  'bioshock-2-remastered': entry({
    c: [1, 4, 9, 25, 39], countsOk: true, dlc: packs(15, 2),
    flags: ['DPY: verify the exact PS4 regional list before relying on online status.'],
  }),
  cuphead: entry({
    c: [1, 6, 12, 10, 29], countsOk: true, note: ['The Delicious Last Course has its own trophies.', 'محتوى The Delicious Last Course له تروفيات منفصلة.'],
  }),
  'call-of-duty-ghosts': entry({ c: [1, 4, 0, 46, 51], countsOk: true, dlc: packs(41, 4) }),
  'call-of-duty-modern-warfare-iii': entry({
    list: 'Call of Duty: Modern Warfare III (2023)', c: [1, 5, 5, 29, 40], countsOk: true,
  }),
  'call-of-duty-vanguard': entry({ c: [1, 2, 10, 32, 45], countsOk: true }),
  'call-of-duty-advanced-warfare': entry({
    c: [1, 2, 6, 42, 51], countsOk: true,
  }),
  'call-of-duty-modern-warfare-2019': entry({
    list: 'Call of Duty: Modern Warfare (2019)', c: [1, 5, 15, 7, 28], countsOk: true, }),
  'call-of-duty-modern-warfare-ii-2022': entry({
    list: 'Call of Duty: Modern Warfare II (2022, standalone PS4 list)', c: [1, 6, 14, 4, 25], countsOk: true,
    note: ['Different from the Modern Warfare 2 Campaign Remastered (2020) list.', 'تختلف عن قائمة Modern Warfare 2 Campaign Remastered الصادرة 2020.'],
  }),

  // ---------- Batch 2 (26–50) ----------
  'call-of-duty-infinite-warfare': entry({ c: [1, 1, 12, 37, 51], countsOk: true, dlc: packs(38, 4) }),
  'call-of-duty-black-ops-iii': entry({ c: [1, 1, 14, 32, 48], countsOk: true, dlc: packs(51, 5) }),
  'call-of-duty-black-ops-4': entry({ c: [1, 1, 7, 44, 53], countsOk: true, dlc: packs(50, 5) }),
  'call-of-duty-black-ops-6': entry({ c: [1, 3, 10, 31, 45], countsOk: true }),
  'call-of-duty-black-ops-7': entry({ c: [1, 2, 10, 38, 51], hold: [1, 2, 10, 38] }),
  'call-of-duty-black-ops-cold-war': entry({ c: [1, 2, 12, 30, 45], countsOk: true, dlc: packs(3) }),
  'crash-bandicoot-4': entry({ c: [1, 2, 9, 40, 52], hold: [1, 2, 9, 40] }),
  'doom-2016': entry({ c: [1, 5, 12, 16, 34], hold: [1, 5, 12, 16], dlc: packs(21, 5) }),
  'doom-1993': entry({
    note: ['The exact PS4 release must be identified before any trophy list is used.', 'يجب تحديد إصدار PS4 بالضبط قبل اعتماد أي قائمة تروفيات.'],
  }),
  'doom-ii': entry({
    note: ['The exact PS4 release must be identified before any trophy list is used.', 'يجب تحديد إصدار PS4 بالضبط قبل اعتماد أي قائمة تروفيات.'],
  }),
  'doom-3': entry({
    note: ['PS4 edition unconfirmed. DOOM 3: BFG Edition is a PS3 release and its list is not used.', 'إصدار PS4 غير مؤكد. نسخة DOOM 3: BFG Edition خاصة بـ PS3 ولا نعتمد قائمتها.'],
    flags: ['DPY: confirm whether the bundle uses DOOM 3 (2019 port), DOOM 3: VR Edition, or another release.'],
  }),
  'dying-light': entry({ c: [1, 2, 10, 38, 51], hold: [1, 2, 10, 38], dlc: packs(18, 3) }),
  'dark-souls-ii': entry({
    list: 'Dark Souls II: Scholar of the First Sin', c: [1, 2, 23, 12, 38], countsOk: true,
  }),
  'dark-souls-iii': entry({
    c: [1, 3, 13, 26, 43], hold: [1, 3, 13, 26],
  }),
  'dead-island-2': entry({ c: [1, 3, 10, 32, 46], hold: [1, 3, 10, 32], dlc: packs(14, 3) }),
  'devil-may-cry': entry({ list: 'Devil May Cry HD Collection — Devil May Cry', c: [1, 6, 7, 20, 34], hold: [1, 6, 7, 20] }),
  'devil-may-cry-2': entry({ list: 'Devil May Cry HD Collection — Devil May Cry 2', c: [1, 4, 17, 12, 34], countsOk: true }),
  'devil-may-cry-3': entry({ list: 'Devil May Cry HD Collection — Devil May Cry 3', c: [1, 5, 12, 16, 34], hold: [1, 5, 12, 16] }),
  'devil-may-cry-4': entry({ list: 'Devil May Cry 4 Special Edition', c: [1, 4, 6, 32, 43], countsOk: true }),
  'devil-may-cry-5': entry({ c: [1, 3, 5, 40, 49], countsOk: true, dlc: packs(5) }),
  'darksiders-ii': entry({ list: 'Darksiders II Deathinitive Edition', c: [1, 3, 6, 40, 50], countsOk: true }),
  'darksiders-iii': entry({ c: [1, 1, 16, 32, 50], countsOk: true, dlc: packs(14, 3) }),
  'dead-by-daylight': entry({
    c: [1, 1, 4, 56, 62], countsOk: true, note: ['DLC trophy packs change with content updates.', 'تروفيات المحتوى الإضافي تتغير مع التحديثات.'],
  }),
  'doom-eternal': entry({ c: [1, 4, 12, 17, 34], countsOk: true, dlc: packs(17, 3) }),
  'dying-light-2': entry({
    list: 'Dying Light 2 Stay Human', c: [1, 1, 8, 48, 58], countsOk: true, dlc: [{ name: 'Bloody Ties', total: 8 }],
  }),

  // ---------- Batch 3 (51–75) ----------
  'diablo-iii-reaper-of-souls': entry({
    c: [1, 2, 17, 24, 44], countsOk: true, dlc: [{ name: 'Additional content', total: 10 }],
    flags: ['DPY: verify the exact PS4 edition and whether extra class content is included.'],
  }),
  'dark-souls-remastered': entry({ c: [1, 2, 20, 18, 41], countsOk: true }),
  'diablo-ii-resurrected': entry({
    c: [null, null, null, null, 44],
    note: ['Total identified; the breakdown is not verified yet.', 'تم تحديد المجموع، والتوزيع لم يُوثّق بعد.'],
  }),
  'dragon-ball-xenoverse-2': entry({ c: [1, 2, 11, 36, 50], countsOk: true, dlc: [{ name: 'Additional content', total: 11 }] }),
  'elden-ring': entry({
    c: [1, 3, 14, 24, 42], countsOk: true,
  }),
  fortnite: entry({
    c: [1, 3, 10, 32, 46], hold: [1, 3, 10, 32], note: ['This trophy list belongs to the Save the World mode, not Battle Royale.', 'قائمة التروفيات هذه خاصة بطور Save the World وليست لطور باتل رويال.'],
  }),
  'fall-guys': entry({
    c: [1, 5, 8, 21, 35], countsOk: true, note: ['Some trophies on the original PS4 list are reported as discontinued.', 'بعض تروفيات قائمة PS4 الأصلية مُبلغ عنها كتروفيات متوقفة.'],
  }),
  'fifa-20': entry({ note: ['Trophy list not verified yet.', 'قائمة التروفيات لم تُوثّق بعد.'] }),
  'fifa-21': entry({
    c: [1, 3, 17, 16, 37], countsOk: true, note: SERVERS('Online services were scheduled to close in November 2023; many trophies are reported as unobtainable.', 'كان مقررًا إغلاق الخدمات الأونلاين في نوفمبر 2023، وكثير من التروفيات مُبلغ عنها كغير قابلة للتحقيق.'),
  }),
  'fifa-22': entry({ note: ['Trophy list not verified yet.', 'قائمة التروفيات لم تُوثّق بعد.'] }),
  'fifa-23': entry({
    c: [1, 3, 12, 24, 40], countsOk: true, note: SERVERS('Online services were scheduled to close on 30 October 2025; several trophies are reported as unobtainable.', 'كان مقررًا إغلاق الخدمات الأونلاين في 30 أكتوبر 2025، وعدة تروفيات مُبلغ عنها كغير قابلة للتحقيق.'),
  }),
  'for-honor': entry({
    c: [null, null, null, null, 61],
    note: ['Total identified; the breakdown is not verified yet.', 'تم تحديد المجموع، والتوزيع لم يُوثّق بعد.'],
  }),
  'far-cry-3': entry({ list: 'Far Cry 3 Classic Edition', c: [1, 2, 11, 30, 44], countsOk: true }),
  'far-cry-4': entry({ c: [1, 2, 10, 38, 51], hold: [1, 2, 10, 38], dlc: packs(7) }),
  'far-cry-5': entry({ c: [1, 2, 10, 38, 51], hold: [1, 2, 10, 38], dlc: packs(22) }),
  'far-cry-6': entry({
    c: [1, 2, 5, 46, 54], countsOk: true, dlc: packs(46),
  }),
  'fallout-4': entry({ c: [1, 1, 15, 34, 51], hold: [1, 1, 15, 34], dlc: packs(34, 6) }),
  'fallout-76': entry({ c: [1, 1, 15, 34, 51], hold: [1, 1, 15, 34], dlc: [{ name: 'Additional content', total: 22 }] }),
  'friday-the-13th': entry({
    list: 'Friday the 13th: The Game', c: [1, 2, 6, 42, 51], countsOk: true, note: ['All 51 trophies have been reported as discontinued; the platinum may no longer be obtainable.', 'كل التروفيات الـ51 مُبلغ عنها كمتوقفة، وقد لا يكون البلاتيني قابلًا للتحقيق حاليًا.'],
  }),
  'final-fantasy-x': entry({
    list: 'Final Fantasy X HD Remaster', c: [1, 5, 8, 20, 34], countsOk: true,
  }),
  'final-fantasy-xiv': entry({ note: ['Trophy list not verified yet (expansion coverage and subscription to be confirmed).', 'قائمة التروفيات لم تُوثّق بعد (يلزم تأكيد التوسعات والاشتراك).'] }),
  'final-fantasy-xv': entry({
    c: [1, 3, 5, 42, 51], countsOk: true, dlc: [{ name: 'Additional content', total: 47 }],
    note: ['Some online-service and DLC trophies are reported as discontinued.', 'بعض تروفيات الخدمات الأونلاين والمحتوى الإضافي مُبلغ عنها كمتوقفة.'],
  }),
  'fallout-shelter': entry({}),
  'five-nights-at-freddys': entry({}),
  'five-nights-at-freddys-2': entry({}),

  // ---------- Batch 4 (76–100) ----------
  'five-nights-at-freddys-3': entry({
    c: [0, null, null, null, 10], note: ['10 trophies, no platinum. The gold/silver/bronze breakdown is not verified yet.', '10 تروفيات بدون بلاتيني. توزيع الذهبي والفضي والبرونزي لم يُوثّق بعد.'],
  }),
  'five-nights-at-freddys-4': entry({ c: [0, 1, 6, 3, 10], countsOk: true }),
  'final-fantasy-vii-remake': entry({
    c: [1, null, null, null, 54], note: ['PS5 INTERmission trophies are not included.', 'تروفيات INTERmission الخاصة بـ PS5 غير مشمولة.'],
  }),
  ghostrunner: entry({ c: [1, null, null, null, 45] }),
  'gran-turismo-7': entry({
    c: [1, null, null, null, null],
  }),
  'grand-theft-auto-v': entry({
    c: [1, 3, 5, 42, 51], countsOk: true, dlc: packs(27),
  }),
  'ghost-of-tsushima': entry({
    c: [1, 2, 9, 40, 52], hold: [1, 2, 9, 40],
  }),
  'god-of-war-ragnarok': entry({ c: [1, 4, 15, 16, 36], countsOk: true, dlc: [{ name: 'Valhalla', total: 12 }] }),
  'just-cause-4': entry({
    c: [1, 5, 17, 38, 61], note: ['The split between base game and DLC trophies has not been confirmed.', 'لم يتم تأكيد الفصل بين تروفيات اللعبة الأساسية والمحتوى الإضافي.'],
  }),
  'lies-of-p': entry({ c: [1, 3, 13, 26, 43], hold: [1, 3, 13, 26], dlc: packs(11) }),
  'life-is-strange': entry({
    c: [1, null, null, null, 61], note: ['Original list, not Remastered.', 'القائمة الأصلية وليست Remastered.'],
  }),
  'life-is-strange-2': entry({
    c: [1, null, null, null, 47],
  }),
  'life-is-strange-before-the-storm': entry({
    c: [1, null, null, null, 35],
    flags: ['DPY: confirm whether the bundle edition includes the bonus episode.'],
  }),
  'mortal-kombat-11': entry({
    c: [1, 1, 7, 50, 59], note: ['This total may include additional character trophies; the base-game split is not confirmed.', 'قد يشمل هذا المجموع تروفيات شخصيات إضافية، والفصل عن اللعبة الأساسية غير مؤكد.'],
  }),
  'middle-earth-shadow-of-war': entry({ c: [1, null, null, null, 73] }),
  'metal-gear-solid-v': entry({
    c: [1, 2, 13, 27, 43], countsOk: true,
  }),
  'nba-2k25': entry({ c: [1, null, null, null, 53] }),
  'overwatch-2': entry({ c: [1, null, null, null, null] }),
  'persona-5': entry({
    list: 'Persona 5 (original, not Royal)', c: [1, null, null, null, 49], }),
  'red-dead-redemption-2': entry({
    c: [null, null, null, null, 52], dlc: [{ name: 'Additional content', total: 17 }],
  }),
  'resident-evil-village': entry({ c: [1, null, null, null, null] }),
  'resident-evil-4-remake': entry({
    list: 'Resident Evil 4 (2023)', c: [1, 4, 10, 25, 40], countsOk: true, dlc: [{ name: 'Separate Ways', total: 7 }],
  }),
  sekiro: entry({ c: [1, 1, 11, 21, 34], countsOk: true }),
  'tekken-7': entry({
    c: [1, null, null, null, 43],
  }),
  'the-forest': entry({}),
};
