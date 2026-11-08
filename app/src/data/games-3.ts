import type { Game } from './types';

// Entries 55–78 of the supplied bundle list (E–F).
export const gamesPart3: Game[] = [
  {
    id: 'elden-ring',
    order: 55,
    titleEn: 'Elden Ring',
    titleAr: 'إلدن رينق',
    releaseYear: 2022,
    developer: 'FromSoftware',
    publisher: 'Bandai Namco Entertainment',
    genres: ['action', 'rpg', 'open-world'],
    steamAppId: 1245620,
    aliases: ['الدن رينغ', 'الدن رنق'],
    synopsisEn:
      'The Elden Ring has been shattered, and the demigods who claimed its fragments have plunged the Lands Between into war. As one of the Tarnished — exiles called back from beyond — the player crosses a vast open world of castles, caves and ruins, seeking the Great Runes to become Elden Lord. Its world was shaped with author George R. R. Martin.',
    synopsisAr:
      'تحطّم "خاتم إلدن"، وأغرق أنصاف الآلهة الذين استولوا على شظاياه "الأراضي الوسطى" في حرب طاحنة. وبصفته أحد "الملطّخين"، المنفيين الذين استُدعوا من جديد، يجوب اللاعب عالمًا مفتوحًا شاسعًا من القلاع والكهوف والأطلال بحثًا عن "الرونات العظمى" ليصبح سيد إلدن. وقد شارك الكاتب جورج ر. ر. مارتن في بناء عالمها.',
  },
  {
    id: 'fortnite',
    order: 56,
    titleEn: 'Fortnite',
    titleAr: 'فورتنايت',
    releaseYear: 2017,
    developer: 'Epic Games',
    publisher: 'Epic Games',
    genres: ['shooter', 'battle-royale', 'party'],
    synopsisEn:
      'A free-to-play online game best known for its Battle Royale mode, in which up to 100 players drop onto an island, gather weapons and resources, and fight to be the last one standing as a deadly storm closes in. Building and editing structures sets it apart, alongside a no-build mode, ever-changing seasons and player-created experiences.',
    synopsisAr:
      'لعبة أونلاين مجانية تشتهر بطور "باتل رويال"، حيث يهبط حتى 100 لاعب على جزيرة لجمع الأسلحة والموارد، ويتنافسون ليكونوا آخر من يبقى بينما تزحف عاصفة قاتلة وتضيّق المساحة. يميزها نظام البناء وتعديل المنشآت، إلى جانب طور بلا بناء ومواسم متجددة باستمرار وتجارب يصممها اللاعبون.',
  },
  {
    id: 'fall-guys',
    order: 57,
    titleEn: 'Fall Guys',
    titleAr: 'فول قايز',
    releaseYear: 2020,
    developer: 'Mediatonic',
    publisher: 'Devolver Digital / Epic Games',
    genres: ['party', 'platformer'],
    steamAppId: 1097150,
    aliases: ['فول غايز'],
    note: {
      en: 'Originally published by Devolver Digital in 2020; became free-to-play under Epic Games in 2022.',
      ar: 'نشرتها Devolver Digital عام 2020، ثم أصبحت مجانية تحت مظلة Epic Games عام 2022.',
    },
    synopsisEn:
      'A colourful party game in which dozens of clumsy, jelly-bean-shaped contestants compete in a series of chaotic rounds — obstacle courses, survival challenges and team games. Each round eliminates players until only one remains to claim the crown. Easy to pick up and full of slapstick moments, it is designed for quick, cheerful matches.',
    synopsisAr:
      'لعبة جماعية مرحة ملوّنة يتنافس فيها عشرات المتسابقين المتعثّرين على هيئة حبات الحلوى في جولات فوضوية متتالية، من مسارات العقبات إلى تحديات البقاء والألعاب الجماعية. وفي كل جولة يُقصى عدد من اللاعبين حتى يبقى فائز واحد يحصد التاج. سهلة التعلم ومليئة بالمواقف الطريفة، ومصممة لمباريات سريعة ممتعة.',
  },
  {
    id: 'fifa-20',
    order: 58,
    titleEn: 'FIFA 20',
    titleAr: 'فيفا 20',
    releaseYear: 2019,
    developer: 'EA Vancouver',
    publisher: 'EA Sports',
    genres: ['sports'],
    synopsisEn:
      'EA Sports’ football simulation featuring licensed clubs, leagues and players from around the world. FIFA 20 introduced VOLTA Football, a street-football mode with small-sided matches in urban venues, alongside Career Mode, Ultimate Team and Kick-Off. Gameplay updates focused on one-on-one moments, ball physics and composed finishing.',
    synopsisAr:
      'لعبة محاكاة كرة القدم من EA Sports، وتضم أندية ودوريات ولاعبين مرخّصين من مختلف أنحاء العالم. قدّم هذا الإصدار طور "VOLTA" لكرة الشوارع بمباريات مصغّرة في ملاعب حضرية، إلى جانب طور المسيرة المهنية و"ألتيميت تيم" والمباريات السريعة، مع تحسينات في المواجهات الفردية وفيزياء الكرة ودقة التسديد.',
  },
  {
    id: 'fifa-21',
    order: 59,
    titleEn: 'FIFA 21',
    titleAr: 'فيفا 21',
    releaseYear: 2020,
    developer: 'EA Vancouver',
    publisher: 'EA Sports',
    genres: ['sports'],
    steamAppId: 1313860,
    synopsisEn:
      'The 2020–21 season entry of EA Sports’ football series. FIFA 21 refined attacking play with smarter off-the-ball runs and agile dribbling, expanded Career Mode with interactive match simulation, and let friends team up in VOLTA Squads and co-op Ultimate Team. It later received enhanced versions for PlayStation 5 and Xbox Series X|S.',
    synopsisAr:
      'إصدار موسم 2020–2021 من سلسلة كرة القدم الشهيرة. طوّرت FIFA 21 أسلوب الهجوم بتحركات أذكى للاعبين دون كرة ومراوغة أكثر رشاقة، ووسّعت طور المسيرة المهنية بمحاكاة تفاعلية للمباريات، وأتاحت اللعب مع الأصدقاء في "VOLTA Squads" و"ألتيميت تيم" التعاوني. وحصلت لاحقًا على نسخ محسّنة لأجهزة الجيل الجديد.',
  },
  {
    id: 'fifa-22',
    order: 60,
    titleEn: 'FIFA 22',
    titleAr: 'فيفا 22',
    releaseYear: 2021,
    developer: 'EA Vancouver',
    publisher: 'EA Sports',
    genres: ['sports'],
    steamAppId: 1506830,
    synopsisEn:
      'FIFA 22 introduced HyperMotion technology on newer consoles, using full-team motion capture to create more realistic player movement and reactions. Career Mode added the option to create your own club, while Ultimate Team, VOLTA Football and Pro Clubs returned with new features for the 2021–22 football season.',
    synopsisAr:
      'قدّمت FIFA 22 تقنية "HyperMotion" على الأجهزة الأحدث، معتمدة على التقاط حركة فرق كاملة لتقديم تحركات وردود فعل أكثر واقعية للاعبين. وأضاف طور المسيرة المهنية إمكانية تأسيس نادٍ خاص بك، بينما عادت أطوار "ألتيميت تيم" و"VOLTA" والأندية الاحترافية بمزايا جديدة لموسم 2021–2022.',
  },
  {
    id: 'fifa-23',
    order: 61,
    titleEn: 'FIFA 23',
    titleAr: 'فيفا 23',
    releaseYear: 2022,
    developer: 'EA Vancouver',
    publisher: 'EA Sports',
    genres: ['sports'],
    steamAppId: 1811260,
    synopsisEn:
      'The final football game released under the FIFA licence. FIFA 23 brought HyperMotion2 technology, women’s club football for the first time, and cross-platform play across same-generation consoles. It also featured both the men’s FIFA World Cup Qatar 2022 and the FIFA Women’s World Cup 2023 through free updates.',
    synopsisAr:
      'آخر لعبة كرة قدم صدرت تحت ترخيص "فيفا". قدّمت FIFA 23 تقنية "HyperMotion2"، وأضافت أندية كرة القدم النسائية لأول مرة، ودعمت اللعب المشترك بين أجهزة الجيل نفسه. كما تضمّنت عبر تحديثات مجانية بطولة كأس العالم قطر 2022 للرجال، وكأس العالم للسيدات 2023.',
  },
  {
    id: 'for-honor',
    order: 62,
    titleEn: 'For Honor',
    titleAr: 'فور أونر',
    releaseYear: 2017,
    developer: 'Ubisoft Montreal',
    publisher: 'Ubisoft',
    genres: ['action', 'fighting'],
    steamAppId: 304390,
    synopsisEn:
      'After a great cataclysm, Knights, Vikings and Samurai — later joined by the Wu Lin — are locked in an endless war over dwindling resources. For Honor is a melee combat game built on its "Art of Battle" system, where reading stances, blocking and timing attacks decide every duel. It offers a story campaign and team-based multiplayer.',
    synopsisAr:
      'بعد كارثة كبرى، يدخل الفرسان والفايكنج والساموراي، وانضم إليهم لاحقًا محاربو "وو لين"، في حرب لا تنتهي على موارد آخذة في النفاد. تعتمد اللعبة على القتال القريب عبر نظام "فن المعركة"، حيث تحسم قراءة وضعيات الخصم والصدّ وتوقيت الهجمات كل مواجهة. وتضم حملة قصصية ولعبًا جماعيًا قائمًا على الفرق.',
  },
  {
    id: 'far-cry-3',
    order: 63,
    titleEn: 'Far Cry 3',
    titleAr: 'فار كراي 3',
    releaseYear: 2012,
    developer: 'Ubisoft Montreal',
    publisher: 'Ubisoft',
    genres: ['shooter', 'action', 'open-world'],
    steamAppId: 220240,
    synopsisEn:
      'A holiday turns into a nightmare when Jason Brody and his friends are captured by pirates on the remote Rook Islands. After escaping the volatile pirate leader Vaas, Jason must rescue his friends — and in the process transforms from a carefree tourist into a hardened warrior, exploring a lush tropical open world.',
    synopsisAr:
      'تتحول عطلة إلى كابوس حين يقع جيسون برودي وأصدقاؤه أسرى في أيدي القراصنة على جزر "روك" النائية. وبعد هروبه من قائد القراصنة المتقلّب "فاس"، يسعى جيسون لإنقاذ أصدقائه، فيتحول تدريجيًا من سائح لاهٍ إلى محارب صلب، وسط عالم مفتوح استوائي مليء بالتفاصيل.',
  },
  {
    id: 'far-cry-4',
    order: 64,
    titleEn: 'Far Cry 4',
    titleAr: 'فار كراي 4',
    releaseYear: 2014,
    developer: 'Ubisoft Montreal',
    publisher: 'Ubisoft',
    genres: ['shooter', 'action', 'open-world'],
    steamAppId: 298110,
    synopsisEn:
      'Ajay Ghale returns to his homeland of Kyrat, a fictional Himalayan nation, to fulfil his late mother’s wish to scatter her ashes. He soon finds himself in the middle of a civil war against the flamboyant, self-appointed king Pagan Min, joining the rebel Golden Path as he explores mountains, valleys and ancient temples.',
    synopsisAr:
      'يعود أجاي غيل إلى موطنه "كيرات"، الدولة الخيالية في جبال الهيمالايا، لتنفيذ وصية والدته الراحلة بنثر رمادها. وسرعان ما يجد نفسه وسط حرب أهلية ضد الملك المستبد ذي الشخصية اللافتة "باغان مين"، فينضم إلى حركة "الطريق الذهبي" المتمردة، بين الجبال والوديان والمعابد القديمة.',
  },
  {
    id: 'far-cry-5',
    order: 65,
    titleEn: 'Far Cry 5',
    titleAr: 'فار كراي 5',
    releaseYear: 2018,
    developer: 'Ubisoft Montreal',
    publisher: 'Ubisoft',
    genres: ['shooter', 'action', 'open-world'],
    steamAppId: 552520,
    synopsisEn:
      'In the fictional Hope County, Montana, a rookie sheriff’s deputy is sent to arrest Joseph Seed, the charismatic leader of the doomsday cult Project at Eden’s Gate. When the arrest goes badly wrong, the cult seizes control of the county, and the deputy must rally the local resistance to free it, region by region.',
    synopsisAr:
      'في مقاطعة "هوب" الخيالية بولاية مونتانا، يُكلَّف نائب شريف مبتدئ باعتقال جوزيف سيد، الزعيم الكاريزمي لطائفة "مشروع بوابة عدن" التي تبشّر بنهاية العالم. وعندما تفشل عملية الاعتقال، تسيطر الطائفة على المقاطعة، وعلى النائب أن يحشد المقاومة المحلية لتحريرها منطقةً تلو الأخرى.',
  },
  {
    id: 'far-cry-6',
    order: 66,
    titleEn: 'Far Cry 6',
    titleAr: 'فار كراي 6',
    releaseYear: 2021,
    developer: 'Ubisoft Toronto',
    publisher: 'Ubisoft',
    genres: ['shooter', 'action', 'open-world'],
    steamAppId: 2369390,
    synopsisEn:
      'Yara, a Caribbean island nation frozen in time, is ruled by dictator Antón Castillo, who is grooming his teenage son Diego to follow in his footsteps. Players become Dani Rojas, a local who joins the guerrilla movement Libertad, using improvised "resolver" weapons and allies to overthrow the regime.',
    synopsisAr:
      'تخضع "يارا"، الدولة الجزرية الكاريبية التي توقف فيها الزمن، لحكم الدكتاتور أنطون كاستيو الذي يُعدّ ابنه المراهق دييغو ليخلفه. يتقمص اللاعب دور داني روخاس، أحد أبناء الجزيرة الذي ينضم إلى حركة "ليبرتاد" الثورية، مستعينًا بأسلحة مرتجلة وحلفاء متنوعين لإسقاط النظام.',
  },
  {
    id: 'fallout-4',
    order: 67,
    titleEn: 'Fallout 4',
    titleAr: 'فول آوت 4',
    releaseYear: 2015,
    developer: 'Bethesda Game Studios',
    publisher: 'Bethesda Softworks',
    genres: ['rpg', 'shooter', 'open-world'],
    steamAppId: 377160,
    aliases: ['فال أوت 4', 'فالاوت 4'],
    synopsisEn:
      'On the day nuclear war breaks out in 2077, a family takes shelter in Vault 111. Two centuries later, the Sole Survivor emerges into the ruins of the Boston area, now called the Commonwealth, searching for their missing son. Along the way they meet rival factions, recruit companions and build settlements in a vast post-apocalyptic world.',
    synopsisAr:
      'في يوم اندلاع الحرب النووية عام 2077، تلجأ عائلة إلى الملجأ "Vault 111". وبعد قرنين، يخرج "الناجي الوحيد" إلى أطلال منطقة بوسطن التي أصبحت تُعرف بـ"الكومنولث"، باحثًا عن ابنه المفقود. وخلال رحلته يتعرّف على فصائل متنافسة، ويجنّد رفاقًا، ويبني مستوطنات في عالم واسع ما بعد نهاية العالم.',
  },
  {
    id: 'fallout-76',
    order: 68,
    titleEn: 'Fallout 76',
    titleAr: 'فول آوت 76',
    releaseYear: 2018,
    developer: 'Bethesda Game Studios',
    publisher: 'Bethesda Softworks',
    genres: ['rpg', 'survival', 'open-world'],
    steamAppId: 1151340,
    aliases: ['فال أوت 76', 'فالاوت 76'],
    synopsisEn:
      'An online prequel to the Fallout series. In 2102, just 25 years after the bombs fell, the residents of Vault 76 emerge on Reclamation Day to rebuild Appalachia, the hills of West Virginia. Alone or with other players, they explore, build camps, complete quests and face the region’s mutated threats.',
    synopsisAr:
      'جزء تمهيدي أونلاين لسلسلة فول آوت. في عام 2102، بعد 25 عامًا فقط من سقوط القنابل، يخرج سكان الملجأ "Vault 76" في "يوم الاستصلاح" لإعادة إعمار منطقة "أبالاتشيا" في تلال فيرجينيا الغربية. ويستطيع اللاعب، منفردًا أو مع آخرين، الاستكشاف وبناء المخيمات وإنجاز المهام ومواجهة المخاطر المتحولة في المنطقة.',
  },
  {
    id: 'friday-the-13th',
    order: 69,
    titleEn: 'Friday the 13th: The Game',
    titleAr: 'فرايدي ذا ثيرتينث: ذا قيم',
    releaseYear: 2017,
    developer: 'IllFonic',
    publisher: 'Gun Media',
    genres: ['horror', 'survival'],
    steamAppId: 438740,
    aliases: ['فرايدي 13', 'friday 13th', 'جيسون'],
    synopsisEn:
      'An asymmetric multiplayer horror game based on the classic film series. Up to seven players take the role of camp counsellors at Camp Crystal Lake, trying to escape or survive until dawn, while one player becomes Jason Voorhees, hunting them with terrifying supernatural abilities.',
    synopsisAr:
      'لعبة رعب جماعية غير متكافئة مستوحاة من سلسلة الأفلام الشهيرة. يتقمص حتى سبعة لاعبين دور مشرفي مخيم "كريستال ليك"، محاولين الهرب أو الصمود حتى الفجر، بينما يتحول لاعب واحد إلى "جيسون فورهيز" ويطاردهم بقدرات خارقة مرعبة.',
  },
  {
    id: 'final-fantasy-x',
    order: 70,
    titleEn: 'Final Fantasy X',
    titleAr: 'فاينل فانتسي 10',
    releaseYear: 2001,
    developer: 'Square',
    publisher: 'Square',
    genres: ['rpg'],
    steamAppId: 359870,
    aliases: ['ffx', 'final fantasy 10'],
    note: {
      en: 'Original 2001 release year shown. Cover artwork is from the FINAL FANTASY X | X-2 HD Remaster collection, the edition available on modern platforms.',
      ar: 'السنة المعروضة هي سنة الإصدار الأصلي 2001. صورة الغلاف من مجموعة FINAL FANTASY X | X-2 HD Remaster المتوفرة على المنصات الحديثة.',
    },
    synopsisEn:
      'Tidus, a star athlete of the underwater sport blitzball, is torn from his home city of Zanarkand by a colossal creature called Sin and finds himself in the world of Spira. There he joins Yuna, a young summoner on a pilgrimage to defeat Sin, and her guardians, discovering the secrets of a world shaped by faith and cycles of loss.',
    synopsisAr:
      'يُنتزع تيدوس، نجم رياضة "البليتزبول" المائية، من مدينته زاناركاند على يد مخلوق هائل يُدعى "سِن"، ليجد نفسه في عالم "سبيرا". وهناك ينضم إلى يونا، المستدعية الشابة التي تخوض رحلة حج للقضاء على "سِن"، وإلى حُرّاسها، ليكتشف أسرار عالم تشكّله العقيدة ودوائر الفقد المتكررة.',
  },
  {
    id: 'final-fantasy-xiv',
    order: 71,
    titleEn: 'Final Fantasy XIV Online',
    titleAr: 'فاينل فانتسي 14 أونلاين',
    releaseYear: 2013,
    developer: 'Square Enix',
    publisher: 'Square Enix',
    genres: ['rpg'],
    steamAppId: 39210,
    aliases: ['فاينل فانتسي 14', 'ffxiv', 'ff14'],
    note: {
      en: 'Year of A Realm Reborn (2013), the relaunch on which today’s game is based. The original version launched in 2010. Requires an online subscription.',
      ar: 'السنة المعروضة لإصدار A Realm Reborn (2013) الذي تقوم عليه اللعبة الحالية، بينما صدرت النسخة الأولى عام 2010. تتطلب اشتراكًا للعب أونلاين.',
    },
    synopsisEn:
      'A massively multiplayer online RPG set in the realm of Eorzea. Players create an adventurer who rises to become the celebrated Warrior of Light, confronting primal gods, an expansionist empire and threats that span worlds. Known for its story-rich expansions, it lets players switch freely between many jobs on a single character.',
    synopsisAr:
      'لعبة تقمّص أدوار أونلاين ضخمة متعددة اللاعبين تدور في عالم "إيورزيا". يصمم اللاعب مغامرًا يرتقي ليصبح "محارب النور" الشهير، في مواجهة آلهة بدائية وإمبراطورية توسعية وتهديدات تمتد عبر العوالم. تشتهر بتوسعاتها الغنية بالقصص، وتتيح التنقل بحرية بين وظائف قتالية متعددة بالشخصية نفسها.',
  },
  {
    id: 'final-fantasy-xv',
    order: 72,
    titleEn: 'Final Fantasy XV',
    titleAr: 'فاينل فانتسي 15',
    releaseYear: 2016,
    developer: 'Square Enix',
    publisher: 'Square Enix',
    genres: ['rpg', 'action', 'open-world'],
    steamAppId: 637650,
    aliases: ['ffxv', 'ff15'],
    note: {
      en: 'Cover artwork is from the 2018 Windows Edition.',
      ar: 'صورة الغلاف من نسخة Windows Edition الصادرة عام 2018.',
    },
    synopsisEn:
      'Prince Noctis of Lucis sets out on a road trip with his three closest friends to marry Lady Lunafreya — but the journey takes a dramatic turn when the empire of Niflheim attacks his home city of Insomnia. Crossing an open world by car, the four must fight real-time battles as Noctis grows into the king he is destined to be.',
    synopsisAr:
      'ينطلق الأمير نوكتيس، وريث مملكة "لوسيس"، في رحلة برية مع أصدقائه الثلاثة المقربين للزواج من الليدي لونافريا، لكن الرحلة تأخذ منعطفًا دراميًا حين تهاجم إمبراطورية "نيفلهايم" مدينته "إنسومنيا". ويعبر الأصدقاء الأربعة عالمًا مفتوحًا بالسيارة، خائضين معارك فورية بينما ينضج نوكتيس ليصبح الملك الذي قُدّر له أن يكونه.',
  },
  {
    id: 'fallout-shelter',
    order: 73,
    titleEn: 'Fallout Shelter',
    titleAr: 'فول آوت شيلتر',
    releaseYear: 2015,
    developer: 'Bethesda Game Studios / Behaviour Interactive',
    publisher: 'Bethesda Softworks',
    genres: ['simulation'],
    steamAppId: 588430,
    aliases: ['فال أوت شيلتر'],
    synopsisEn:
      'A free-to-play management game set in the Fallout universe. As Overseer of an underground Vault, players build rooms, assign dwellers to jobs, balance power, food and water, and send explorers into the irradiated wasteland — all while defending the Vault from raiders, radroaches and other disasters.',
    synopsisAr:
      'لعبة إدارة مجانية في عالم فول آوت. بصفتك المشرف على ملجأ تحت الأرض، تبني الغرف وتوزّع السكان على الوظائف وتوازن بين الطاقة والغذاء والماء، وترسل المستكشفين إلى الأرض القاحلة الملوّثة بالإشعاع، مع حماية الملجأ من المغيرين والصراصير المتحولة والكوارث المختلفة.',
  },
  {
    id: 'five-nights-at-freddys',
    order: 74,
    titleEn: 'Five Nights at Freddy’s',
    titleAr: 'فايف نايتس آت فريديز',
    releaseYear: 2014,
    developer: 'Scott Cawthon',
    publisher: 'Scott Cawthon',
    genres: ['horror'],
    steamAppId: 319510,
    aliases: ['فايف نايتس 1', 'fnaf', 'fnaf 1', 'فريدي'],
    synopsisEn:
      'Taking a night-shift job as a security guard at Freddy Fazbear’s Pizza, the player soon discovers that the restaurant’s animatronic characters roam the building after dark. Confined to the office, they must survive from midnight to 6 a.m. by watching security cameras and using doors and lights sparingly before the power runs out.',
    synopsisAr:
      'يعمل اللاعب حارس أمن في النوبة الليلية بمطعم "فريدي فازبير للبيتزا"، ليكتشف سريعًا أن الدمى الآلية في المطعم تتجول في المبنى بعد حلول الظلام. ومن داخل غرفة المكتب، عليه الصمود من منتصف الليل حتى السادسة صباحًا بمراقبة الكاميرات واستخدام الأبواب والأضواء بحذر قبل نفاد الطاقة.',
  },
  {
    id: 'five-nights-at-freddys-2',
    order: 75,
    titleEn: 'Five Nights at Freddy’s 2',
    titleAr: 'فايف نايتس آت فريديز 2',
    releaseYear: 2014,
    developer: 'Scott Cawthon',
    publisher: 'Scott Cawthon',
    genres: ['horror'],
    steamAppId: 332800,
    aliases: ['فايف نايتس 2', 'fnaf 2'],
    synopsisEn:
      'A new night guard starts work at a revamped Freddy Fazbear’s Pizza, home to updated animatronics and the battered originals. This time there are no doors to close: survival depends on a flashlight, an empty Freddy mask to fool the machines, and keeping a music box wound so that something worse stays asleep.',
    synopsisAr:
      'يبدأ حارس ليلي جديد عمله في نسخة مجددة من مطعم "فريدي فازبير للبيتزا"، الذي يضم دمى آلية حديثة إلى جانب الدمى القديمة المتهالكة. وهذه المرة لا توجد أبواب لإغلاقها، بل يعتمد البقاء على مصباح يدوي، وقناع "فريدي" فارغ لخداع الآلات، والحرص على تدوير صندوق الموسيقى كي يبقى ما هو أسوأ نائمًا.',
  },
  {
    id: 'five-nights-at-freddys-3',
    order: 76,
    titleEn: 'Five Nights at Freddy’s 3',
    titleAr: 'فايف نايتس آت فريديز 3',
    releaseYear: 2015,
    developer: 'Scott Cawthon',
    publisher: 'Scott Cawthon',
    genres: ['horror'],
    steamAppId: 354140,
    aliases: ['فايف نايتس 3', 'fnaf 3'],
    synopsisEn:
      'Thirty years after Freddy Fazbear’s Pizza closed its doors, a horror attraction called Fazbear’s Fright is built around the restaurant’s legends. Working nights at the attraction, the player must track a single lurking animatronic using cameras and audio lures, while keeping failing ventilation and systems running.',
    synopsisAr:
      'بعد ثلاثين عامًا من إغلاق مطعم "فريدي فازبير للبيتزا"، يُفتتح معرض رعب يُدعى "Fazbear’s Fright" مستوحى من أساطير المطعم. يعمل اللاعب في النوبة الليلية داخل المعرض، وعليه تتبّع دمية آلية واحدة متربصة باستخدام الكاميرات والأصوات المضللة، مع إبقاء أنظمة التهوية والتشغيل المتعطلة تعمل.',
  },
  {
    id: 'five-nights-at-freddys-4',
    order: 77,
    titleEn: 'Five Nights at Freddy’s 4',
    titleAr: 'فايف نايتس آت فريديز 4',
    releaseYear: 2015,
    developer: 'Scott Cawthon',
    publisher: 'Scott Cawthon',
    genres: ['horror'],
    steamAppId: 388090,
    aliases: ['فايف نايتس 4', 'fnaf 4'],
    synopsisEn:
      'Leaving the pizzeria behind, the fourth game takes place in a child’s bedroom, where nightmarish versions of the animatronics creep closer each night. Armed only with a flashlight, the player must listen carefully at the doors and closet to survive until morning, as fragments of an unsettling story emerge between nights.',
    synopsisAr:
      'تغادر اللعبة الرابعة أجواء المطعم لتدور في غرفة نوم طفل، حيث تقترب نسخ كابوسية من الدمى الآلية أكثر فأكثر كل ليلة. ولا يملك اللاعب سوى مصباح يدوي، وعليه الإنصات جيدًا عند الأبواب والخزانة للنجاة حتى الصباح، بينما تتكشف بين الليالي أجزاء من قصة مقلقة.',
  },
  {
    id: 'final-fantasy-vii-remake',
    order: 78,
    titleEn: 'Final Fantasy VII Remake',
    titleAr: 'فاينل فانتسي 7 ريميك',
    releaseYear: 2020,
    developer: 'Square Enix',
    publisher: 'Square Enix',
    genres: ['rpg', 'action'],
    steamAppId: 1462040,
    aliases: ['فاينل فانتسي 7', 'ff7 remake', 'ff7r'],
    note: {
      en: 'Remake (2020) of the 1997 original, covering its Midgar chapters. Cover artwork is from the Intergrade edition (2021).',
      ar: 'إعادة صنع (2020) للعبة الأصلية الصادرة عام 1997، وتغطي فصول مدينة ميدغار. صورة الغلاف من نسخة Intergrade (2021).',
    },
    synopsisEn:
      'In the city of Midgar, the Shinra Electric Power Company drains the planet’s life energy to power its reactors. Cloud Strife, a former elite SOLDIER turned mercenary, takes a job with the eco-resistance group AVALANCHE — and is drawn into a battle for the planet’s future. The remake reimagines the original’s opening with hybrid real-time combat.',
    synopsisAr:
      'في مدينة "ميدغار"، تستنزف شركة "شينرا" للطاقة الكهربائية طاقة الحياة في الكوكب لتشغيل مفاعلاتها. يقبل كلاود سترايف، الجندي السابق في نخبة "SOLDIER" الذي أصبح مرتزقًا، مهمة مع جماعة المقاومة البيئية "أفالانش"، لينجرف إلى معركة على مستقبل الكوكب. وتعيد اللعبة تصور بداية القصة الأصلية بنظام قتال هجين في الوقت الحقيقي.',
  },
];
