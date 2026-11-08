import type { Game } from './types';

// Entries 1–32 of the supplied bundle list (A–C).
export const gamesPart1: Game[] = [
  {
    id: 'among-us',
    order: 1,
    titleEn: 'Among Us',
    titleAr: 'أمونق أس',
    releaseYear: 2018,
    developer: 'Innersloth',
    publisher: 'Innersloth',
    genres: ['party'],
    steamAppId: 945360,
    aliases: ['امونق', 'امونج اس'],
    synopsisEn:
      'An online social-deduction game set aboard a spaceship or remote base. Crewmates race to finish maintenance tasks while hidden Impostors sabotage systems and pick them off one by one. Every discovered body triggers an emergency meeting where players debate, accuse and vote someone off — so sharp observation and convincing arguments matter as much as speed.',
    synopsisAr:
      'لعبة جماعية أونلاين تقوم على الخداع والاستنتاج، وتدور على متن سفينة فضائية أو قاعدة نائية. يحاول أفراد الطاقم إنجاز مهام الصيانة، بينما يختبئ بينهم محتالون يخرّبون الأنظمة ويقضون عليهم واحدًا تلو الآخر. وعند اكتشاف أي جثة يُعقد اجتماع طارئ للنقاش والتصويت على طرد المشتبه به، فتصبح الملاحظة الدقيقة والإقناع بنفس أهمية السرعة.',
  },
  {
    id: 'apex-legends',
    order: 2,
    titleEn: 'Apex Legends',
    titleAr: 'أبيكس ليجندز',
    releaseYear: 2019,
    developer: 'Respawn Entertainment',
    publisher: 'Electronic Arts',
    genres: ['shooter', 'battle-royale'],
    steamAppId: 1172470,
    aliases: ['ابكس', 'apex'],
    synopsisEn:
      'A free-to-play hero shooter set in the Outlands, a frontier region of the Titanfall universe. Squads of three choose from a roster of Legends — each with unique abilities — then drop onto a shrinking arena to scavenge weapons and outlast every other team. Fast movement, a smart ping system and team synergy define every match.',
    synopsisAr:
      'لعبة تصويب مجانية من نوع باتل رويال تدور في منطقة "الأوتلاندز" ضمن عالم سلسلة تايتنفول. تختار كل فرقة من ثلاثة لاعبين شخصيات "أساطير" لكل منها قدرات خاصة، ثم تهبط إلى ساحة تضيق تدريجيًا لجمع الأسلحة والصمود حتى النهاية. تتميز بسرعة الحركة ونظام إشارات ذكي يجعل التنسيق بين أعضاء الفريق مفتاح الفوز.',
  },
  {
    id: 'assassins-creed-iv-black-flag',
    order: 3,
    titleEn: 'Assassin’s Creed IV: Black Flag',
    titleAr: 'أساسنز كريد 4: بلاك فلاق',
    releaseYear: 2013,
    developer: 'Ubisoft Montreal',
    publisher: 'Ubisoft',
    genres: ['action', 'adventure', 'open-world'],
    steamAppId: 242050,
    aliases: ['اساسنز كريد 4', 'black flag', 'بلاك فلاغ'],
    synopsisEn:
      'In the early 18th-century Caribbean, at the height of the Golden Age of Piracy, Welsh privateer Edward Kenway turns pirate in pursuit of fortune. Commanding his ship, the Jackdaw, he raids fleets, explores islands and dives for treasure — until he is drawn into the centuries-old war between the Assassins and the Templars.',
    synopsisAr:
      'في جزر الكاريبي مطلع القرن الثامن عشر، في ذروة العصر الذهبي للقرصنة، يتحول البحّار الويلزي إدوارد كينواي إلى قرصان يطارد الثروة والمجد. يقود سفينته "جاكدو" ليهاجم الأساطيل ويستكشف الجزر ويغوص بحثًا عن الكنوز، قبل أن يجد نفسه متورطًا في الصراع القديم بين جماعة الأساسنز وفرسان التمبلر.',
  },
  {
    id: 'brawlhalla',
    order: 4,
    titleEn: 'Brawlhalla',
    titleAr: 'براولهالا',
    releaseYear: 2017,
    developer: 'Blue Mammoth Games',
    publisher: 'Ubisoft',
    genres: ['fighting', 'party'],
    steamAppId: 291550,
    note: {
      en: 'Full release in 2017 after an early-access period that began in 2015.',
      ar: 'صدرت رسميًا عام 2017 بعد فترة وصول مبكر بدأت عام 2015.',
    },
    synopsisEn:
      'A free-to-play platform fighter set in Valhalla, where legendary warriors from across history and myth battle for glory. Instead of draining health bars, players knock opponents off floating stages using weapons that drop mid-match. It supports up to eight players locally or online, with ranked play, casual modes and full cross-play.',
    synopsisAr:
      'لعبة قتال مجانية تدور في "فالهالا"، حيث يتواجه محاربون أسطوريون من مختلف العصور والحكايات بحثًا عن المجد. لا يعتمد الفوز على استنزاف شريط الصحة، بل على إسقاط الخصوم خارج المنصات العائمة باستخدام أسلحة تظهر أثناء المباراة. تدعم حتى ثمانية لاعبين محليًا أو أونلاين مع اللعب المشترك بين المنصات.',
  },
  {
    id: 'bloodborne',
    order: 5,
    titleEn: 'Bloodborne',
    titleAr: 'بلودبورن',
    releaseYear: 2015,
    developer: 'FromSoftware',
    publisher: 'Sony Computer Entertainment',
    genres: ['action', 'rpg', 'horror'],
    synopsisEn:
      'A lone Hunter arrives in Yharnam, a decaying gothic city famed for its miraculous blood healing, seeking the mysterious "paleblood". But the city is gripped by a plague that turns its people into beasts, and the night of the hunt has begun. Fast, aggressive combat rewards precision and nerve against grotesque creatures and cosmic horrors.',
    synopsisAr:
      'يصل "صيّاد" غامض إلى مدينة يارنام القوطية المتداعية، المشهورة بعلاجها الدموي العجيب، بحثًا عن سرّ يُعرف بـ"الدم الشاحب". لكن المدينة غارقة في وباء يحوّل سكانها إلى وحوش، وقد بدأت ليلة الصيد. يعتمد القتال على السرعة والهجوم الجريء والدقة في مواجهة مخلوقات مرعبة وأهوال كونية تتجاوز الخيال.',
  },
  {
    id: 'baldurs-gate',
    order: 6,
    titleEn: 'Baldur’s Gate',
    titleAr: 'بالدورز غيت',
    releaseYear: 1998,
    developer: 'BioWare',
    publisher: 'Interplay Entertainment',
    genres: ['rpg'],
    steamAppId: 228280,
    note: {
      en: 'Original release year shown. The cover artwork is from the 2012 Enhanced Edition by Beamdog, the version distributed on modern platforms.',
      ar: 'السنة المعروضة هي سنة الإصدار الأصلي. صورة الغلاف من النسخة المحسّنة (2012) من تطوير Beamdog، وهي النسخة المتوفرة على المنصات الحديثة.',
    },
    synopsisEn:
      'Set on the Sword Coast of the Forgotten Realms, this classic role-playing game follows a young orphan raised in the fortress-library of Candlekeep. When an assassin strikes and an iron shortage throws the region into turmoil, the hero sets out with a party of companions to uncover the conspiracy — and the truth about their own mysterious heritage.',
    synopsisAr:
      'لعبة تقمّص أدوار كلاسيكية تدور على "ساحل السيف" في عالم Forgotten Realms، وتتبع شابًا يتيمًا نشأ في قلعة كاندلكيب المكتبية. وحين يتعرض لمحاولة اغتيال وتعصف أزمة نقص الحديد بالمنطقة، ينطلق مع رفاق يختارهم بنفسه لكشف المؤامرة المحيطة بالأحداث، والحقيقة الغامضة حول أصله.',
  },
  {
    id: 'baldurs-gate-ii',
    order: 7,
    titleEn: 'Baldur’s Gate II: Shadows of Amn',
    titleAr: 'بالدورز غيت 2: شادوز أوف آمن',
    releaseYear: 2000,
    developer: 'BioWare',
    publisher: 'Interplay Entertainment',
    genres: ['rpg'],
    steamAppId: 257350,
    aliases: ['بالدورز غيت 2', 'baldurs gate 2'],
    note: {
      en: 'Original release year shown. The cover artwork is from the 2013 Enhanced Edition by Beamdog.',
      ar: 'السنة المعروضة هي سنة الإصدار الأصلي. صورة الغلاف من النسخة المحسّنة (2013) من تطوير Beamdog.',
    },
    synopsisEn:
      'Picking up after the first game, the hero awakens imprisoned in the dungeon of Jon Irenicus, a powerful mage conducting cruel experiments. Escaping into the bustling city of Athkatla in the nation of Amn, they must rebuild their strength, gather allies and pursue their captor, while facing the growing consequences of their divine bloodline.',
    synopsisAr:
      'تستكمل اللعبة أحداث الجزء الأول، إذ يستيقظ البطل سجينًا في زنزانة الساحر القوي جون إيرينيكوس الذي يُجري عليه تجارب قاسية. وبعد الهرب إلى مدينة أثكاتلا الصاخبة في مملكة "آمن"، عليه أن يستعيد قوته ويجمع حلفاءه ويطارد خاطفه، في مواجهة تبعات متزايدة لسلالته الإلهية الغامضة.',
  },
  {
    id: 'borderlands-2',
    order: 8,
    titleEn: 'Borderlands 2',
    titleAr: 'بوردرلاندز 2',
    releaseYear: 2012,
    developer: 'Gearbox Software',
    publisher: '2K',
    genres: ['shooter', 'rpg'],
    steamAppId: 49520,
    synopsisEn:
      'A new team of Vault Hunters arrives on the lawless planet Pandora, only to be betrayed by Handsome Jack, the charismatic and ruthless head of the Hyperion corporation. Teaming up with the resistance, they fight across deserts, glaciers and cities in a co-op shooter packed with dark humour and a seemingly endless variety of procedurally generated guns.',
    synopsisAr:
      'يصل فريق جديد من "صائدي الخزائن" إلى كوكب باندورا الخارج عن القانون، ليتعرض للخيانة على يد "هاندسم جاك"، رئيس شركة هايبيريون الساحر والقاسي. وبالتعاون مع المقاومة، يقاتل الفريق عبر الصحاري والجليد والمدن في لعبة تصويب تعاونية مليئة بالكوميديا السوداء وتشكيلة شبه لا نهائية من الأسلحة المولّدة عشوائيًا.',
  },
  {
    id: 'borderlands-3',
    order: 9,
    titleEn: 'Borderlands 3',
    titleAr: 'بوردرلاندز 3',
    releaseYear: 2019,
    developer: 'Gearbox Software',
    publisher: '2K',
    genres: ['shooter', 'rpg'],
    steamAppId: 397540,
    synopsisEn:
      'The Calypso Twins, streaming-star cult leaders of the Children of the Vault, are uniting Pandora’s bandit clans to seize the power of the Vaults. Four new Vault Hunters join the Crimson Raiders and, for the first time in the series, leave Pandora to chase the twins across several new worlds, armed with billions of guns.',
    synopsisAr:
      'يوحّد التوأمان كاليبسو، نجما البث وقائدا طائفة "أبناء الخزنة"، عصابات باندورا للسيطرة على قوة الخزائن الغامضة. ينضم أربعة صائدي خزائن جدد إلى فريق "كريمسون رايدرز"، ويغادرون باندورا لأول مرة في السلسلة لمطاردة التوأمين عبر عوالم جديدة، مسلحين بمليارات الأسلحة المختلفة.',
  },
  {
    id: 'battlefield-1',
    order: 10,
    titleEn: 'Battlefield 1',
    titleAr: 'باتلفيلد 1',
    releaseYear: 2016,
    developer: 'DICE',
    publisher: 'Electronic Arts',
    genres: ['shooter'],
    steamAppId: 1238840,
    aliases: ['bf1'],
    synopsisEn:
      'Set during the First World War, Battlefield 1 tells its campaign through "War Stories" — separate episodes following soldiers from different nations, from tank crews in France to Bedouin fighters in the Arabian desert. Its multiplayer delivers large-scale battles with infantry, horses, tanks, biplanes and colossal airships across destructible fronts.',
    synopsisAr:
      'تدور أحداثها خلال الحرب العالمية الأولى، وتُروى حملتها عبر "قصص حرب" منفصلة تتبع جنودًا من دول مختلفة، من طواقم الدبابات في فرنسا إلى المقاتلين البدو في الصحراء العربية. ويقدّم طور اللعب الجماعي معارك ضخمة تشارك فيها المشاة والخيول والدبابات والطائرات والمناطيد العملاقة على جبهات قابلة للتدمير.',
  },
  {
    id: 'battlefield-4',
    order: 11,
    titleEn: 'Battlefield 4',
    titleAr: 'باتلفيلد 4',
    releaseYear: 2013,
    developer: 'DICE',
    publisher: 'Electronic Arts',
    genres: ['shooter'],
    steamAppId: 1238860,
    aliases: ['bf4'],
    synopsisEn:
      'In a fictional 2020, tensions between the United States, Russia and China push the world toward war. The campaign follows Tombstone, an elite US Marine squad caught in a deepening conflict. In multiplayer, up to 64 players clash with vehicles across huge maps, where "Levolution" events can collapse skyscrapers and reshape the battlefield.',
    synopsisAr:
      'في عام 2020 الافتراضي، تدفع التوترات بين الولايات المتحدة وروسيا والصين العالم نحو الحرب. تتبع الحملة فرقة "تومبستون" من مشاة البحرية الأمريكية وسط صراع يتصاعد باستمرار. أما اللعب الجماعي فيجمع حتى 64 لاعبًا مع المركبات على خرائط واسعة، حيث يمكن لأحداث "ليفوليوشن" إسقاط ناطحات سحاب وتغيير شكل المعركة.',
  },
  {
    id: 'battlefield-v',
    order: 12,
    titleEn: 'Battlefield V',
    titleAr: 'باتلفيلد 5',
    releaseYear: 2018,
    developer: 'DICE',
    publisher: 'Electronic Arts',
    genres: ['shooter'],
    steamAppId: 1238810,
    aliases: ['bfv', 'bf5'],
    synopsisEn:
      'Battlefield V returns the series to the Second World War, focusing on lesser-told fronts through its "War Stories" — from the Norwegian resistance to North Africa. Multiplayer emphasises squad play, fortification building and attrition, with modes such as Grand Operations that stretch a single battle across several in-game days.',
    synopsisAr:
      'تعود السلسلة إلى الحرب العالمية الثانية مع التركيز على جبهات قلّما تُروى عبر "قصص الحرب"، من المقاومة النرويجية إلى شمال إفريقيا. ويركز اللعب الجماعي على العمل ضمن الفرقة وبناء التحصينات وإدارة الموارد، مع أطوار مثل "العمليات الكبرى" التي تمتد فيها المعركة الواحدة عبر عدة أيام داخل اللعبة.',
  },
  {
    id: 'battlefield-2042',
    order: 13,
    titleEn: 'Battlefield 2042',
    titleAr: 'باتلفيلد 2042',
    releaseYear: 2021,
    developer: 'DICE',
    publisher: 'Electronic Arts',
    genres: ['shooter'],
    steamAppId: 1517290,
    synopsisEn:
      'In a near future shaken by climate disaster and economic collapse, millions of displaced "No-Pats" fight as mercenaries for the US and Russia. This multiplayer-only entry puts players in the role of Specialists on massive maps — up to 128 players on PC and current consoles — with dynamic weather events such as tornadoes and sandstorms.',
    synopsisAr:
      'في مستقبل قريب هزّته الكوارث المناخية والانهيار الاقتصادي، يقاتل ملايين المهجّرين المعروفين بـ"No-Pats" كمرتزقة لصالح الولايات المتحدة وروسيا. يركّز هذا الجزء على اللعب الجماعي فقط، حيث يتقمص اللاعبون دور "المتخصصين" في خرائط ضخمة تتسع حتى 128 لاعبًا، مع ظواهر جوية متغيرة كالأعاصير والعواصف الرملية.',
  },
  {
    id: 'batman-arkham-city',
    order: 14,
    titleEn: 'Batman: Arkham City',
    titleAr: 'باتمان: أركام سيتي',
    releaseYear: 2011,
    developer: 'Rocksteady Studios',
    publisher: 'Warner Bros. Interactive Entertainment',
    genres: ['action', 'adventure', 'open-world'],
    steamAppId: 200260,
    note: {
      en: 'Cover artwork is from the Game of the Year Edition.',
      ar: 'صورة الغلاف من نسخة "لعبة العام".',
    },
    synopsisEn:
      'A walled-off district of Gotham has been turned into Arkham City, a sprawling open-air prison run by the sinister Professor Hugo Strange. When Bruce Wayne is thrown inside, Batman must navigate the gang-ruled streets, confront iconic villains such as the Joker and the Penguin, and uncover the secret plan behind the prison.',
    synopsisAr:
      'تحوّل جزء مسوّر من مدينة غوثام إلى "أركام سيتي"، سجن مفتوح ضخم يديره البروفيسور الغامض هيوغو سترينج. وعندما يُزجّ ببروس واين داخله، يتحرك باتمان في شوارع تحكمها العصابات ليواجه أشرارًا بارزين مثل الجوكر والبطريق، ويكشف الخطة السرية التي يُخفيها هذا السجن.',
  },
  {
    id: 'batman-arkham-knight',
    order: 15,
    titleEn: 'Batman: Arkham Knight',
    titleAr: 'باتمان: أركام نايت',
    releaseYear: 2015,
    developer: 'Rocksteady Studios',
    publisher: 'Warner Bros. Interactive Entertainment',
    genres: ['action', 'adventure', 'open-world'],
    steamAppId: 208650,
    synopsisEn:
      'The finale of Rocksteady’s Arkham trilogy. On Halloween night, Scarecrow threatens to unleash his fear toxin across Gotham, forcing the city’s evacuation. Allied with a mysterious, heavily armed figure known as the Arkham Knight, the villains unite to finish Batman for good — who now patrols the full city with the Batmobile at his command.',
    synopsisAr:
      'الفصل الختامي لثلاثية أركام. في ليلة الهالوين، يهدد "سكيركرو" بنشر غاز الرعب في أنحاء غوثام، فتُخلى المدينة من سكانها. ويتحالف الأشرار مع شخصية غامضة مدججة بالسلاح تُعرف بـ"فارس أركام" للقضاء على باتمان نهائيًا، بينما يجوب باتمان المدينة كاملة ومعه سيارة "باتموبيل" الشهيرة.',
  },
  {
    id: 'batman-arkham-asylum',
    order: 16,
    titleEn: 'Batman: Arkham Asylum',
    titleAr: 'باتمان: أركام أسايلم',
    releaseYear: 2009,
    developer: 'Rocksteady Studios',
    publisher: 'Eidos Interactive / Warner Bros. Interactive Entertainment',
    genres: ['action', 'adventure', 'stealth'],
    steamAppId: 35140,
    note: {
      en: 'Cover artwork is from the Game of the Year Edition.',
      ar: 'صورة الغلاف من نسخة "لعبة العام".',
    },
    synopsisEn:
      'After Batman returns the Joker to Arkham Asylum, the Clown Prince of Crime springs an elaborate trap and seizes control of the island facility. Trapped inside with its most dangerous inmates, Batman must combine stealth, detective skills and fluid combat to stop the Joker’s plan before it reaches Gotham.',
    synopsisAr:
      'بعد أن يعيد باتمان الجوكر إلى مصحة أركام، يكشف المجرم الشهير عن فخ محكم ويسيطر على المنشأة المعزولة في الجزيرة. وبينما يحاصَر باتمان مع أخطر النزلاء، عليه أن يجمع بين التخفي ومهارات التحري والقتال السلس لإيقاف خطة الجوكر قبل أن تصل إلى غوثام.',
  },
  {
    id: 'bioshock-remastered',
    order: 17,
    titleEn: 'BioShock Remastered',
    titleAr: 'بايوشوك ريماستر',
    releaseYear: 2016,
    developer: 'Blind Squirrel Games',
    publisher: '2K',
    genres: ['shooter', 'horror'],
    steamAppId: 409710,
    aliases: ['بايوشوك 1', 'bioshock 1'],
    note: {
      en: 'Remastered edition (2016). The original BioShock was developed by 2K Boston and 2K Australia and released in 2007.',
      ar: 'النسخة المحسّنة (2016). صدرت لعبة BioShock الأصلية عام 2007 من تطوير 2K Boston و2K Australia.',
    },
    synopsisEn:
      'In 1960, the sole survivor of a plane crash in the Atlantic discovers Rapture, a utopian underwater city built by industrialist Andrew Ryan. Its society has collapsed into madness, overrun by gene-spliced citizens addicted to ADAM. Armed with weapons and genetic Plasmids, the player must survive and uncover what destroyed the city.',
    synopsisAr:
      'في عام 1960، يكتشف الناجي الوحيد من حادث تحطم طائرة في المحيط الأطلسي مدينة "رابتشر"، المدينة الفاضلة تحت الماء التي بناها رجل الصناعة أندرو رايان. لكن مجتمعها انهار في الجنون، وامتلأ بسكان مشوّهين جينيًا مدمنين على مادة "آدم". وبالأسلحة والقدرات الجينية، عليه أن ينجو ويكشف سرّ سقوط المدينة.',
  },
  {
    id: 'bioshock-2-remastered',
    order: 18,
    titleEn: 'BioShock 2 Remastered',
    titleAr: 'بايوشوك 2 ريماستر',
    releaseYear: 2016,
    developer: 'Blind Squirrel Games',
    publisher: '2K',
    genres: ['shooter', 'horror'],
    steamAppId: 409720,
    note: {
      en: 'Remastered edition (2016). The original BioShock 2 was developed by 2K Marin and released in 2010.',
      ar: 'النسخة المحسّنة (2016). صدرت لعبة BioShock 2 الأصلية عام 2010 من تطوير 2K Marin.',
    },
    synopsisEn:
      'Ten years after the first game, in 1968, players become Subject Delta — one of the earliest Big Daddies — revived in the ruins of Rapture. Searching for Eleanor, the Little Sister he was bonded to, Delta must confront Sofia Lamb, a charismatic leader who has reshaped the city around her collectivist vision.',
    synopsisAr:
      'بعد عشر سنوات من أحداث الجزء الأول، وتحديدًا في عام 1968، يتقمص اللاعب دور "سبجكت دلتا"، أحد أوائل "البيغ دادي"، الذي يُبعث من جديد وسط أطلال رابتشر. يبحث دلتا عن "إليانور"، الأخت الصغيرة المرتبطة به، ليصطدم بصوفيا لامب، القائدة الكاريزمية التي أعادت تشكيل المدينة وفق رؤيتها الخاصة.',
  },
  {
    id: 'cuphead',
    order: 19,
    titleEn: 'Cuphead',
    titleAr: 'كب هيد',
    releaseYear: 2017,
    developer: 'Studio MDHR',
    publisher: 'Studio MDHR',
    genres: ['action', 'platformer'],
    steamAppId: 268910,
    aliases: ['كبهيد'],
    synopsisEn:
      'Hand-drawn in the style of 1930s cartoons, Cuphead follows brothers Cuphead and Mugman, who lose a reckless bet at the Devil’s casino. To repay the debt, they must collect the soul contracts of runaway debtors across the Inkwell Isles — a challenging run-and-gun built around demanding boss battles, playable solo or in local co-op.',
    synopsisAr:
      'لعبة مرسومة يدويًا بأسلوب الرسوم المتحركة في ثلاثينيات القرن الماضي، تتبع الأخوين كب هيد وماغمان بعد خسارتهما رهانًا متهورًا في كازينو الشيطان. ولسداد الدين، عليهما جمع عقود أرواح المدينين الهاربين في جزر "إنكويل"، عبر معارك زعماء صعبة تتطلب الدقة والصبر، فرديًا أو بالتعاون المحلي.',
  },
  {
    id: 'call-of-duty-ghosts',
    order: 20,
    titleEn: 'Call of Duty: Ghosts',
    titleAr: 'كول أوف ديوتي: غوستس',
    releaseYear: 2013,
    developer: 'Infinity Ward',
    publisher: 'Activision',
    genres: ['shooter'],
    steamAppId: 209160,
    aliases: ['كود غوست', 'كود قوست', 'cod ghosts'],
    synopsisEn:
      'After a South American coalition called the Federation seizes an orbital weapon and devastates the United States, the country is left fractured. Brothers Logan and Hesh Walker join the Ghosts, a legendary special-forces unit, to fight back against overwhelming odds. Alongside the campaign, it offers competitive multiplayer and the co-op Extinction mode.',
    synopsisAr:
      'بعد أن يستولي تحالف من أمريكا الجنوبية يُدعى "الاتحاد" على سلاح مداري ويدمر مدنًا أمريكية، تُترك البلاد ممزقة. ينضم الأخوان لوغان وهيش ووكر إلى "الأشباح"، وحدة القوات الخاصة الأسطورية، للرد رغم التفوق الكبير للعدو. وإلى جانب الحملة، تضم اللعبة لعبًا جماعيًا تنافسيًا وطور "Extinction" التعاوني.',
  },
  {
    id: 'call-of-duty-modern-warfare-iii',
    order: 21,
    titleEn: 'Call of Duty: Modern Warfare III',
    titleAr: 'كول أوف ديوتي: مودرن وورفير 3',
    releaseYear: 2023,
    developer: 'Sledgehammer Games',
    publisher: 'Activision',
    genres: ['shooter'],
    steamAppId: 2519060,
    aliases: ['كود مودرن 3', 'mw3', 'modern warfare 3'],
    note: {
      en: 'Refers to the 2023 game, the current-generation entry in the rebooted Modern Warfare series — not the 2011 title of the same name.',
      ar: 'المقصود إصدار 2023 ضمن سلسلة مودرن وورفير المعاد تشغيلها، وليس لعبة 2011 التي تحمل الاسم نفسه.',
    },
    synopsisEn:
      'Captain Price and Task Force 141 face their most dangerous adversary when the ultranationalist Vladimir Makarov escapes from a gulag and launches a campaign of global terror. The game also features multiplayer with remastered maps from 2009’s Modern Warfare 2 and an open-world Zombies mode.',
    synopsisAr:
      'يواجه الكابتن برايس وفرقة "141" أخطر خصومهم حين يهرب القومي المتطرف فلاديمير ماكاروف من أحد السجون ويطلق موجة من الإرهاب حول العالم. وتضم اللعبة أيضًا لعبًا جماعيًا يتضمن خرائط محدّثة من Modern Warfare 2 الصادرة عام 2009، إضافة إلى طور زومبي في عالم مفتوح.',
  },
  {
    id: 'call-of-duty-vanguard',
    order: 22,
    titleEn: 'Call of Duty: Vanguard',
    titleAr: 'كول أوف ديوتي: فانقارد',
    releaseYear: 2021,
    developer: 'Sledgehammer Games',
    publisher: 'Activision',
    genres: ['shooter'],
    aliases: ['كود فانقارد', 'فانغارد', 'cod vanguard'],
    synopsisEn:
      'In the final days of the Second World War, a multinational squad of elite soldiers — among the first special forces — is assembled to uncover a secret Nazi programme known as Project Phoenix. The campaign spans the Eastern, Western, Pacific and North African fronts, alongside multiplayer and a Zombies mode.',
    synopsisAr:
      'في الأيام الأخيرة من الحرب العالمية الثانية، يجتمع فريق من نخبة الجنود من جنسيات مختلفة، ضمن أوائل وحدات القوات الخاصة، لكشف برنامج نازي سري يُعرف بـ"مشروع فينيكس". تتنقل الحملة بين الجبهات الشرقية والغربية والمحيط الهادئ وشمال إفريقيا، إلى جانب اللعب الجماعي وطور الزومبي.',
  },
  {
    id: 'call-of-duty-advanced-warfare',
    order: 23,
    titleEn: 'Call of Duty: Advanced Warfare',
    titleAr: 'كول أوف ديوتي: أدفانسد وورفير',
    releaseYear: 2014,
    developer: 'Sledgehammer Games',
    publisher: 'Activision',
    genres: ['shooter'],
    steamAppId: 209650,
    aliases: ['كود أدفانسد', 'cod aw'],
    synopsisEn:
      'In 2054, private military corporations have become global powers. US Marine Jack Mitchell joins Atlas, the world’s most powerful PMC, after a personal loss on the battlefield. Equipped with exoskeletons that enable boost jumps and enhanced abilities, he is soon caught in a conflict where the line between protector and threat blurs.',
    synopsisAr:
      'في عام 2054، أصبحت الشركات العسكرية الخاصة قوى عالمية. ينضم جندي المارينز جاك ميتشل إلى "أطلس"، أقوى هذه الشركات، بعد خسارة شخصية في ساحة المعركة. ومع بدلات هيكلية تمنحه قفزات معززة وقدرات متقدمة، يجد نفسه في صراع يتلاشى فيه الخط الفاصل بين الحامي والتهديد.',
  },
  {
    id: 'call-of-duty-modern-warfare-2019',
    order: 24,
    titleEn: 'Call of Duty: Modern Warfare',
    titleAr: 'كول أوف ديوتي: مودرن وورفير',
    releaseYear: 2019,
    developer: 'Infinity Ward',
    publisher: 'Activision',
    genres: ['shooter'],
    aliases: ['كود مودرن', 'mw 2019', 'mw2019'],
    note: {
      en: 'Refers to the 2019 reboot, not Call of Duty 4: Modern Warfare (2007).',
      ar: 'المقصود إصدار 2019 المعاد تشغيله، وليس Call of Duty 4: Modern Warfare الصادرة عام 2007.',
    },
    synopsisEn:
      'A gritty reimagining of the Modern Warfare series. Captain Price, CIA officer Alex and freedom fighter Farah Karim cross paths in the fictional nation of Urzikstan while hunting stolen chemical weapons. The campaign explores the moral grey areas of modern conflict, alongside multiplayer and Special Ops co-op missions.',
    synopsisAr:
      'إعادة تصور واقعية وقاسية لسلسلة مودرن وورفير. تتقاطع طرق الكابتن برايس وضابط الاستخبارات أليكس والمقاتلة فرح كريم في دولة "أورزيكستان" الخيالية أثناء ملاحقة أسلحة كيميائية مسروقة. تستكشف الحملة المناطق الرمادية الأخلاقية في الحروب الحديثة، إلى جانب اللعب الجماعي ومهام العمليات الخاصة التعاونية.',
  },
  {
    id: 'call-of-duty-modern-warfare-ii-2022',
    order: 25,
    titleEn: 'Call of Duty: Modern Warfare II',
    titleAr: 'كول أوف ديوتي: مودرن وورفير 2',
    releaseYear: 2022,
    developer: 'Infinity Ward',
    publisher: 'Activision',
    genres: ['shooter'],
    aliases: ['كود مودرن 2', 'mw2', 'modern warfare 2'],
    note: {
      en: 'Refers to the 2022 game, not the 2009 title of the same name.',
      ar: 'المقصود إصدار 2022، وليس لعبة 2009 التي تحمل الاسم نفسه.',
    },
    synopsisEn:
      'Task Force 141 — Captain Price, Ghost, Soap and Gaz — reunites to stop a terrorist threat involving stolen American missiles. Working alongside Mexican Special Forces, the team operates across the Middle East, Europe and Mexico. The game also introduced a revamped multiplayer and launched alongside the free-to-play Warzone 2.0.',
    synopsisAr:
      'تجتمع فرقة "141" من جديد، الكابتن برايس وغوست وسوب وغاز، لإيقاف تهديد إرهابي يتعلق بصواريخ أمريكية مسروقة. وبالتعاون مع القوات الخاصة المكسيكية، تنفذ الفرقة عملياتها في الشرق الأوسط وأوروبا والمكسيك. كما قدّمت اللعبة لعبًا جماعيًا متجددًا، وصدرت بالتزامن مع لعبة Warzone 2.0 المجانية.',
  },
  {
    id: 'call-of-duty-infinite-warfare',
    order: 26,
    titleEn: 'Call of Duty: Infinite Warfare',
    titleAr: 'كول أوف ديوتي: إنفنت وورفير',
    releaseYear: 2016,
    developer: 'Infinity Ward',
    publisher: 'Activision',
    genres: ['shooter'],
    steamAppId: 292730,
    aliases: ['كود إنفنت', 'cod iw'],
    synopsisEn:
      'In a future where humanity has colonised the solar system, the militant Settlement Defense Front launches a devastating surprise attack on Earth. Lieutenant Nick Reyes takes command of the warship Retribution and leads a counteroffensive spanning space dogfights and missions across planets and moons, alongside multiplayer and the Zombies in Spaceland mode.',
    synopsisAr:
      'في مستقبل استعمر فيه البشر المجموعة الشمسية، تشن "جبهة الدفاع عن المستوطنات" المتشددة هجومًا مفاجئًا مدمرًا على الأرض. يتولى الملازم نيك رييس قيادة السفينة الحربية "ريتربيوشن" ويقود هجومًا مضادًا يشمل معارك جوية في الفضاء ومهام على الكواكب والأقمار، إلى جانب اللعب الجماعي وطور الزومبي.',
  },
  {
    id: 'call-of-duty-black-ops-iii',
    order: 27,
    titleEn: 'Call of Duty: Black Ops III',
    titleAr: 'كول أوف ديوتي: بلاك أوبس 3',
    releaseYear: 2015,
    developer: 'Treyarch',
    publisher: 'Activision',
    genres: ['shooter'],
    steamAppId: 311210,
    aliases: ['كود بلاك أوبس 3', 'bo3'],
    synopsisEn:
      'In 2065, cybernetically enhanced soldiers linked by neural interfaces wage covert wars in a world reshaped by climate change and new technology. The campaign, playable solo or in four-player co-op, follows a black-ops team whose mission takes a dark turn. It also features advanced-movement multiplayer and a deep Zombies mode.',
    synopsisAr:
      'في عام 2065، يخوض جنود معززون سيبرانيًا ومتصلون بواجهات عصبية حروبًا سرية في عالم أعاد تشكيله تغير المناخ والتقنيات الجديدة. يمكن لعب الحملة منفردًا أو بالتعاون بين أربعة لاعبين، وتتبع فريق عمليات سرية تتخذ مهمته منعطفًا مظلمًا. وتضم اللعبة لعبًا جماعيًا بحركة متقدمة وطور زومبي غنيًا.',
  },
  {
    id: 'call-of-duty-black-ops-4',
    order: 28,
    titleEn: 'Call of Duty: Black Ops 4',
    titleAr: 'كول أوف ديوتي: بلاك أوبس 4',
    releaseYear: 2018,
    developer: 'Treyarch',
    publisher: 'Activision',
    genres: ['shooter', 'battle-royale'],
    aliases: ['كود بلاك أوبس 4', 'bo4'],
    synopsisEn:
      'Black Ops 4 replaces the traditional campaign with a focus on multiplayer. It offers Specialist-driven competitive matches, three Zombies experiences at launch, and Blackout — the series’ first battle royale mode, featuring land, sea and air vehicles and characters from across Black Ops history. Solo Specialist missions teach each character’s abilities.',
    synopsisAr:
      'تستغني Black Ops 4 عن الحملة التقليدية لتركّز على اللعب الجماعي، فتقدّم مباريات تنافسية تعتمد على شخصيات "المتخصصين"، وثلاث تجارب زومبي عند الإطلاق، وطور "بلاك آوت"، أول طور باتل رويال في السلسلة، بمركبات برية وبحرية وجوية وشخصيات من تاريخ بلاك أوبس. وتعرّف المهام الفردية اللاعبين بقدرات كل شخصية.',
  },
  {
    id: 'call-of-duty-black-ops-6',
    order: 29,
    titleEn: 'Call of Duty: Black Ops 6',
    titleAr: 'كول أوف ديوتي: بلاك أوبس 6',
    releaseYear: 2024,
    developer: 'Treyarch / Raven Software',
    publisher: 'Activision',
    genres: ['shooter'],
    steamAppId: 2933620,
    aliases: ['كود بلاك أوبس 6', 'bo6'],
    synopsisEn:
      'Set in the early 1990s as the Gulf War unfolds, Black Ops 6 follows CIA veterans Frank Woods and Troy Marshall, who are disavowed after uncovering a conspiracy within the agency. Forming a rogue team, they hunt a shadowy paramilitary group called Pantheon. It introduces Omnimovement and brings back round-based Zombies.',
    synopsisAr:
      'تدور أحداثها مطلع التسعينيات بالتزامن مع حرب الخليج، وتتبع المخضرمَين فرانك وودز وتروي مارشال من وكالة الاستخبارات المركزية بعد أن تتبرأ منهما الوكالة إثر كشفهما مؤامرة داخلها. يشكّلان فريقًا خارج القانون لملاحقة جماعة شبه عسكرية غامضة تُدعى "بانثيون". وتقدّم اللعبة نظام الحركة الشاملة "Omnimovement" وتعيد طور الزومبي القائم على الجولات.',
  },
  {
    id: 'call-of-duty-black-ops-7',
    order: 30,
    titleEn: 'Call of Duty: Black Ops 7',
    titleAr: 'كول أوف ديوتي: بلاك أوبس 7',
    releaseYear: 2025,
    developer: 'Treyarch / Raven Software',
    publisher: 'Activision',
    genres: ['shooter'],
    steamAppId: 3606480,
    aliases: ['كود بلاك أوبس 7', 'bo7'],
    synopsisEn:
      'Set in 2035, Black Ops 7 follows David Mason and his elite JSOC team as they confront a threat that weaponises fear itself, blurring reality through psychological warfare. The campaign can be played solo or in co-op, alongside the series’ fast-paced multiplayer and a round-based Zombies mode.',
    synopsisAr:
      'تدور أحداثها عام 2035، وتتبع ديفيد ميسون وفريقه من نخبة القوات الخاصة الأمريكية في مواجهة تهديد يحوّل الخوف نفسه إلى سلاح، ويطمس حدود الواقع عبر الحرب النفسية. يمكن لعب الحملة منفردًا أو بشكل تعاوني، إلى جانب اللعب الجماعي السريع المعروف في السلسلة وطور زومبي قائم على الجولات.',
  },
  {
    id: 'call-of-duty-black-ops-cold-war',
    order: 31,
    titleEn: 'Call of Duty: Black Ops Cold War',
    titleAr: 'كول أوف ديوتي: بلاك أوبس كولد وار',
    releaseYear: 2020,
    developer: 'Treyarch / Raven Software',
    publisher: 'Activision',
    genres: ['shooter'],
    aliases: ['كود كولد وار', 'كولد وار', 'cold war', 'bocw'],
    synopsisEn:
      'In the early 1980s, at the height of the Cold War, CIA officer Russell Adler assembles a covert team to track down Perseus, a mysterious Soviet spy threatening to tip the global balance of power. The campaign features branching choices and multiple endings, supported by multiplayer and a Zombies mode.',
    synopsisAr:
      'في مطلع الثمانينيات، ذروة الحرب الباردة، يجمع ضابط الاستخبارات الأمريكية راسل أدلر فريقًا سريًا لتعقّب "بيرسيوس"، الجاسوس السوفيتي الغامض الذي يهدد بقلب موازين القوى في العالم. تتميز الحملة بخيارات متفرعة ونهايات متعددة، إلى جانب اللعب الجماعي وطور الزومبي.',
  },
  {
    id: 'crash-bandicoot-4',
    order: 32,
    titleEn: 'Crash Bandicoot 4: It’s About Time',
    titleAr: 'كراش بانديكوت 4: إتس أباوت تايم',
    releaseYear: 2020,
    developer: 'Toys for Bob',
    publisher: 'Activision',
    genres: ['platformer'],
    steamAppId: 1378990,
    aliases: ['كراش 4', 'crash 4'],
    synopsisEn:
      'Doctor Neo Cortex and Doctor N. Tropy escape their prison and tear holes in the fabric of space and time, threatening every dimension. Crash and his sister Coco set out to stop them, gathering the powerful Quantum Masks that can bend reality. A challenging, colourful 3D platformer that continues directly from the original trilogy.',
    synopsisAr:
      'يهرب الدكتور نيو كورتكس والدكتور إن. تروبي من سجنهما ويُحدثان شقوقًا في نسيج الزمان والمكان تهدد جميع الأبعاد. ينطلق كراش وأخته كوكو لإيقافهما، جامعَين "الأقنعة الكمّية" القادرة على تطويع الواقع. لعبة منصات ثلاثية الأبعاد ملوّنة وصعبة تكمل مباشرة أحداث الثلاثية الأصلية.',
  },
];
