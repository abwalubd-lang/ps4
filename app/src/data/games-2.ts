import type { Game } from './types';

// Entries 33–54 of the supplied bundle list (D).
export const gamesPart2: Game[] = [
  {
    id: 'doom-2016',
    order: 33,
    titleEn: 'DOOM',
    titleAr: 'دوم',
    releaseYear: 2016,
    developer: 'id Software',
    publisher: 'Bethesda Softworks',
    genres: ['shooter', 'action'],
    steamAppId: 379720,
    aliases: ['doom 2016', 'دوم 2016'],
    note: {
      en: 'The 2016 reboot of the series.',
      ar: 'إعادة تشغيل السلسلة الصادرة عام 2016.',
    },
    synopsisEn:
      'The Doom Slayer awakens chained inside a Union Aerospace Corporation research facility on Mars, where experiments with Hell’s energy have opened the way for a demonic invasion. With no patience for explanations, he tears through the base and into Hell itself in a relentless, fast-paced shooter built around aggressive movement and brutal "glory kills".',
    synopsisAr:
      'يستيقظ "قاتل الهلاك" مقيّدًا داخل منشأة أبحاث تابعة لشركة UAC على كوكب المريخ، حيث فتحت التجارب على طاقة الجحيم الباب أمام غزو شيطاني. ودون أي اهتمام بالتفسيرات، يشقّ طريقه عبر القاعدة وصولًا إلى الجحيم نفسه، في لعبة تصويب سريعة لا تهدأ تعتمد على الحركة الهجومية والإجهازات العنيفة.',
  },
  {
    id: 'doom-1993',
    order: 34,
    titleEn: 'DOOM (1993)',
    titleAr: 'دوم (1993)',
    releaseYear: 1993,
    developer: 'id Software',
    publisher: 'id Software',
    genres: ['shooter', 'action'],
    aliases: ['دوم 1', 'doom 1', 'classic doom'],
    synopsisEn:
      'The game that defined the first-person shooter. A lone space marine stationed on Mars’s moons finds that teleportation experiments on Phobos and Deimos have opened a gateway to Hell. As the last survivor, he battles hordes of demons through military bases, twisted corridors and the infernal realm itself.',
    synopsisAr:
      'اللعبة التي رسمت ملامح ألعاب التصويب من منظور الشخص الأول. يكتشف جندي فضاء وحيد متمركز على قمرَي المريخ أن تجارب النقل الآني على "فوبوس" و"ديموس" فتحت بوابة إلى الجحيم. وبصفته الناجي الأخير، يقاتل جحافل الشياطين عبر القواعد العسكرية والممرات المشوّهة وصولًا إلى عالم الجحيم ذاته.',
  },
  {
    id: 'doom-ii',
    order: 35,
    titleEn: 'DOOM II: Hell on Earth',
    titleAr: 'دوم 2: هيل أون إيرث',
    releaseYear: 1994,
    developer: 'id Software',
    publisher: 'GT Interactive',
    genres: ['shooter', 'action'],
    steamAppId: 2300,
    aliases: ['دوم 2', 'doom 2'],
    synopsisEn:
      'Returning home after surviving the Martian moons, the marine finds that the demonic invasion has reached Earth. With the planet overrun, he must clear a path so the surviving population can evacuate, then take the fight back to the source. It expands the original with larger levels, new demons and the iconic double-barrelled shotgun.',
    synopsisAr:
      'يعود الجندي إلى الأرض بعد نجاته من أحداث قمرَي المريخ، ليجد أن الغزو الشيطاني قد وصل إليها. ومع اجتياح الكوكب، عليه أن يفتح الطريق أمام الناجين للهروب، ثم يحمل المعركة إلى مصدرها. يوسّع هذا الجزء اللعبة الأصلية بمراحل أكبر وشياطين جديدة، والبندقية ذات الماسورتين الشهيرة.',
  },
  {
    id: 'doom-3',
    order: 36,
    titleEn: 'DOOM 3',
    titleAr: 'دوم 3',
    releaseYear: 2004,
    developer: 'id Software',
    publisher: 'Activision',
    genres: ['shooter', 'horror'],
    steamAppId: 9050,
    synopsisEn:
      'A horror-focused reimagining of the original. In 2145, a marine arrives at the Union Aerospace Corporation’s research base on Mars just as secret teleportation experiments go catastrophically wrong. Through dark, claustrophobic corridors lit by little more than a flashlight, he must survive the demonic forces now spilling into the facility.',
    synopsisAr:
      'إعادة تصور للعبة الأصلية بطابع رعب واضح. في عام 2145، يصل جندي من مشاة البحرية إلى قاعدة أبحاث شركة UAC على المريخ في اللحظة التي تخرج فيها تجارب النقل الآني السرية عن السيطرة. وعبر ممرات مظلمة وخانقة لا يضيئها سوى مصباح يدوي، عليه أن ينجو من القوى الشيطانية التي تجتاح المنشأة.',
  },
  {
    id: 'dying-light',
    order: 37,
    titleEn: 'Dying Light',
    titleAr: 'داينق لايت',
    releaseYear: 2015,
    developer: 'Techland',
    publisher: 'Warner Bros. Interactive Entertainment',
    genres: ['action', 'survival', 'horror', 'open-world'],
    steamAppId: 239140,
    aliases: ['داينج لايت', 'دايينغ لايت'],
    synopsisEn:
      'Undercover agent Kyle Crane is dropped into Harran, a quarantined city overrun by a zombie outbreak, to recover a sensitive file. Using parkour to move across rooftops, he scavenges, crafts weapons and helps survivors by day — but when night falls, far deadlier infected hunt the streets, turning the city into a fight for survival.',
    synopsisAr:
      'يُرسَل العميل السري كايل كرين إلى مدينة "حرّان" المحاصرة بعد تفشي وباء الزومبي، لاستعادة ملف حساس. ومستخدمًا مهارات الباركور للتنقل فوق الأسطح، يجمع الموارد ويصنع الأسلحة ويساعد الناجين نهارًا، لكن مع حلول الليل تخرج كائنات مصابة أشد فتكًا لتصطاد الشوارع، فتتحول المدينة إلى صراع حقيقي من أجل البقاء.',
  },
  {
    id: 'dark-souls-ii',
    order: 38,
    titleEn: 'Dark Souls II',
    titleAr: 'دارك سولز 2',
    releaseYear: 2014,
    developer: 'FromSoftware',
    publisher: 'Bandai Namco Entertainment',
    genres: ['action', 'rpg'],
    steamAppId: 236430,
    synopsisEn:
      'Bearing the curse of the Undead and slowly losing their memories, a nameless wanderer journeys to the fallen kingdom of Drangleic, where a cure is rumoured to exist. Exploring ruined castles and forgotten depths, they face punishing enemies and colossal bosses in a demanding action RPG that rewards patience, observation and perseverance.',
    synopsisAr:
      'يحمل متجوّل مجهول لعنة "الموتى الأحياء" ويفقد ذكرياته تدريجيًا، فيرحل إلى مملكة "درانغليك" المنهارة حيث يُشاع وجود علاج للعنته. وبين القلاع المدمرة والأعماق المنسية، يواجه أعداء قساة وزعماء ضخامًا في لعبة أكشن وتقمّص أدوار صعبة تكافئ الصبر والملاحظة والمثابرة.',
  },
  {
    id: 'dark-souls-iii',
    order: 39,
    titleEn: 'Dark Souls III',
    titleAr: 'دارك سولز 3',
    releaseYear: 2016,
    developer: 'FromSoftware',
    publisher: 'Bandai Namco Entertainment',
    genres: ['action', 'rpg'],
    steamAppId: 374320,
    synopsisEn:
      'As the First Flame fades and the world sinks toward darkness, the Ashen One — an Unkindled warrior — rises from the grave in the Kingdom of Lothric. Their task is to find the Lords of Cinder who have abandoned their thrones and return them, so the Flame can be linked once more. Faster combat meets the series’ signature challenge.',
    synopsisAr:
      'مع خفوت "الشعلة الأولى" وانزلاق العالم نحو الظلام، ينهض "الرماديّ" من قبره في مملكة لوثريك. ومهمته العثور على "أسياد الرماد" الذين تخلوا عن عروشهم وإعادتهم إليها، كي تتقد الشعلة من جديد. يجمع هذا الجزء بين قتال أسرع والتحدي الصعب الذي تشتهر به السلسلة.',
  },
  {
    id: 'dead-island-2',
    order: 40,
    titleEn: 'Dead Island 2',
    titleAr: 'ديد آيلاند 2',
    releaseYear: 2023,
    developer: 'Dambuster Studios',
    publisher: 'Deep Silver',
    genres: ['action', 'rpg', 'horror'],
    steamAppId: 934700,
    synopsisEn:
      'A zombie outbreak has turned Los Angeles into a quarantined, blood-soaked "HELL-A". After a failed evacuation, players choose one of several Slayers — survivors with a surprising immunity — and fight across Beverly Hills mansions, Hollywood studios and Venice Beach, using inventive, customisable weapons and a detailed dismemberment system.',
    synopsisAr:
      'حوّل تفشي وباء الزومبي مدينة لوس أنجلوس إلى منطقة معزولة غارقة في الدماء تُلقّب بـ"HELL-A". وبعد فشل محاولة الإجلاء، يختار اللاعب أحد "القتلة"، وهم ناجون يملكون مناعة غريبة، ليقاتل بين قصور بيفرلي هيلز واستوديوهات هوليوود وشاطئ فينيس، مستخدمًا أسلحة مبتكرة قابلة للتعديل.',
  },
  {
    id: 'devil-may-cry',
    order: 41,
    titleEn: 'Devil May Cry',
    titleAr: 'ديفل ماي كراي',
    releaseYear: 2001,
    developer: 'Capcom',
    publisher: 'Capcom',
    genres: ['action'],
    aliases: ['ديفل ماي كراي 1', 'dmc', 'dmc1'],
    synopsisEn:
      'Dante, a stylish demon hunter and son of the legendary demon knight Sparda, is approached by a mysterious woman named Trish. She leads him to Mallet Island, where the demon emperor Mundus — the ancient foe his father once sealed away — is preparing to return. The game that established the stylish-action genre.',
    synopsisAr:
      'يتلقى دانتي، صائد الشياطين الأنيق وابن الفارس الشيطاني الأسطوري "سباردا"، زيارة من امرأة غامضة تُدعى تريش. تقوده إلى جزيرة "ماليت"، حيث يستعد إمبراطور الشياطين "موندوس"، العدو القديم الذي ختم عليه والده، للعودة. وهي اللعبة التي أسست لنوع ألعاب الأكشن الاستعراضي.',
  },
  {
    id: 'devil-may-cry-2',
    order: 42,
    titleEn: 'Devil May Cry 2',
    titleAr: 'ديفل ماي كراي 2',
    releaseYear: 2003,
    developer: 'Capcom',
    publisher: 'Capcom',
    genres: ['action'],
    aliases: ['dmc2'],
    synopsisEn:
      'Dante is drawn to the island of Vie de Marli by Lucia, a warrior whose family has long protected the land. Together they confront Arius, a ruthless businessman using occult power in an attempt to summon the demon Argosax. The game introduces Lucia as a second playable character with her own campaign.',
    synopsisAr:
      'تستدعي المحاربة لوسيا، التي حمت عائلتها أرضها منذ زمن طويل، دانتي إلى جزيرة "في دي مارلي". ويواجهان معًا "آريوس"، رجل الأعمال القاسي الذي يستخدم قوى السحر الأسود في محاولة لاستدعاء الشيطان "أرغوساكس". وتقدّم اللعبة لوسيا كشخصية ثانية قابلة للعب بحملة خاصة بها.',
  },
  {
    id: 'devil-may-cry-3',
    order: 43,
    titleEn: 'Devil May Cry 3: Dante’s Awakening',
    titleAr: 'ديفل ماي كراي 3: دانتيز أويكنينق',
    releaseYear: 2005,
    developer: 'Capcom',
    publisher: 'Capcom',
    genres: ['action'],
    aliases: ['ديفل ماي كراي 3', 'dmc3'],
    synopsisEn:
      'A prequel to the original game. A young Dante, still running his unnamed demon-hunting shop, receives an invitation from his twin brother Vergil as a colossal tower, Temen-ni-gru, erupts from the city. Climbing the tower, Dante clashes with Vergil, whose hunger for their father’s power drives him to open the gate to the demon world.',
    synopsisAr:
      'جزء تمهيدي لأحداث اللعبة الأولى. يتلقى دانتي الشاب، الذي لم يكن قد أطلق اسمًا على متجره لصيد الشياطين بعد، دعوة من شقيقه التوأم فيرجل مع ظهور برج عملاق يُدعى "تيمين-ني-غرو" وسط المدينة. وأثناء صعوده البرج، يصطدم دانتي بفيرجل الذي يسعى للحصول على قوة والدهما وفتح بوابة عالم الشياطين.',
  },
  {
    id: 'devil-may-cry-4',
    order: 44,
    titleEn: 'Devil May Cry 4',
    titleAr: 'ديفل ماي كراي 4',
    releaseYear: 2008,
    developer: 'Capcom',
    publisher: 'Capcom',
    genres: ['action'],
    steamAppId: 329050,
    aliases: ['dmc4'],
    note: {
      en: 'Original 2008 release year shown. Cover artwork is from the 2015 Special Edition.',
      ar: 'السنة المعروضة هي سنة الإصدار الأصلي 2008. صورة الغلاف من النسخة الخاصة الصادرة عام 2015.',
    },
    synopsisEn:
      'In the city of Fortuna, young knight Nero serves the Order of the Sword, a religious order that worships Sparda. When Dante suddenly storms a ceremony and attacks the Order’s leader, Nero sets out after him — wielding a mysterious demonic arm — and begins to uncover the Order’s dangerous secrets.',
    synopsisAr:
      'في مدينة "فورتونا"، يخدم الفارس الشاب نيرو "رهبنة السيف"، وهي جماعة دينية تقدّس سباردا. وعندما يقتحم دانتي فجأة إحدى المراسم ويهاجم قائد الرهبنة، ينطلق نيرو في مطاردته مستعينًا بذراعه الشيطانية الغامضة، ليبدأ بكشف الأسرار الخطيرة التي تخفيها الرهبنة.',
  },
  {
    id: 'devil-may-cry-5',
    order: 45,
    titleEn: 'Devil May Cry 5',
    titleAr: 'ديفل ماي كراي 5',
    releaseYear: 2019,
    developer: 'Capcom',
    publisher: 'Capcom',
    genres: ['action'],
    steamAppId: 601150,
    aliases: ['dmc5'],
    synopsisEn:
      'A gigantic demonic tree, the Qliphoth, takes root in Red Grave City, draining the blood of its people and unleashing an invasion led by the demon king Urizen. Nero, Dante and a mysterious newcomer called V — each with a distinct fighting style — join forces to reach the top of the tree and stop the demon king.',
    synopsisAr:
      'تمتد جذور شجرة شيطانية عملاقة تُدعى "كليفوث" في مدينة "ريد غريف"، فتمتص دماء سكانها وتطلق غزوًا يقوده ملك الشياطين "يوريزن". يتحد نيرو ودانتي والوافد الغامض "V"، ولكل منهم أسلوب قتال مختلف، للوصول إلى قمة الشجرة وإيقاف ملك الشياطين.',
  },
  {
    id: 'darksiders-ii',
    order: 46,
    titleEn: 'Darksiders II',
    titleAr: 'داركسايدرز 2',
    releaseYear: 2012,
    developer: 'Vigil Games',
    publisher: 'THQ',
    genres: ['action', 'adventure', 'rpg'],
    steamAppId: 50650,
    synopsisEn:
      'Running parallel to the first game, Darksiders II follows Death, eldest of the Four Horsemen of the Apocalypse. Convinced that his brother War has been wrongly accused of triggering the end of the world, Death travels through otherworldly realms seeking a way to restore humanity and clear War’s name, blending combat, exploration and loot.',
    synopsisAr:
      'تجري أحداثها بالتوازي مع الجزء الأول، وتتبع "الموت"، أكبر فرسان نهاية العالم الأربعة. ولاقتناعه بأن شقيقه "الحرب" اتُّهم ظلمًا بإشعال نهاية العالم، يجوب "الموت" عوالم غريبة بحثًا عن وسيلة لإعادة البشرية وتبرئة أخيه، في مزيج من القتال والاستكشاف وجمع العتاد.',
  },
  {
    id: 'darksiders-iii',
    order: 47,
    titleEn: 'Darksiders III',
    titleAr: 'داركسايدرز 3',
    releaseYear: 2018,
    developer: 'Gunfire Games',
    publisher: 'THQ Nordic',
    genres: ['action', 'adventure'],
    steamAppId: 606280,
    synopsisEn:
      'Fury, the fiery and proud Horsewoman of the Apocalypse, is summoned by the Charred Council to hunt down the Seven Deadly Sins, which have escaped and now roam a ruined Earth in physical form. Wielding a whip and elemental powers, she battles through an interconnected world to track down each Sin.',
    synopsisAr:
      'يستدعي "المجلس المتفحم" فيوري، فارسة نهاية العالم المتقدة والمعتدة بنفسها، لتعقّب "الخطايا السبع المميتة" التي هربت وأصبحت تجوب أرضًا مدمرة في هيئة مادية. وبسوطها وقواها العنصرية، تخوض المعارك عبر عالم مترابط لتطارد كل خطيئة على حدة.',
  },
  {
    id: 'dead-by-daylight',
    order: 48,
    titleEn: 'Dead by Daylight',
    titleAr: 'ديد باي دايلايت',
    releaseYear: 2016,
    developer: 'Behaviour Interactive',
    publisher: 'Behaviour Interactive',
    genres: ['horror', 'survival'],
    steamAppId: 381210,
    aliases: ['dbd'],
    synopsisEn:
      'An asymmetric multiplayer horror game in which four Survivors face one Killer, trapped in a nightmarish realm ruled by a malevolent force called the Entity. Survivors must cooperate to repair generators and open the exit gates, while the Killer hunts them down. The roster includes original characters and licensed horror icons.',
    synopsisAr:
      'لعبة رعب جماعية غير متكافئة يواجه فيها أربعة ناجين قاتلًا واحدًا، محاصرين جميعًا في عالم كابوسي تحكمه قوة شريرة تُدعى "الكيان". على الناجين التعاون لإصلاح المولدات وفتح بوابات الخروج، بينما يطاردهم القاتل لتقديمهم قربانًا. وتضم اللعبة شخصيات أصلية وأخرى مرخّصة من أشهر أفلام الرعب.',
  },
  {
    id: 'doom-eternal',
    order: 49,
    titleEn: 'DOOM Eternal',
    titleAr: 'دوم إترنال',
    releaseYear: 2020,
    developer: 'id Software',
    publisher: 'Bethesda Softworks',
    genres: ['shooter', 'action'],
    steamAppId: 782330,
    synopsisEn:
      'Hell’s armies have invaded Earth, wiping out much of humanity. Operating from an orbital fortress, the Doom Slayer returns to hunt down the Hell Priests behind the invasion. DOOM Eternal expands the 2016 formula with faster movement, a dash, new weapons and a combat loop that rewards constant aggression and resource management.',
    synopsisAr:
      'اجتاحت جيوش الجحيم كوكب الأرض وقضت على جزء كبير من البشر. ومن قلعة مدارية، يعود "قاتل الهلاك" لمطاردة كهنة الجحيم الذين يقفون وراء الغزو. توسّع اللعبة أسلوب جزء 2016 بحركة أسرع وأسلحة جديدة ونظام قتال يكافئ الهجوم المستمر والإدارة الذكية للموارد.',
  },
  {
    id: 'dying-light-2',
    order: 50,
    titleEn: 'Dying Light 2 Stay Human',
    titleAr: 'داينق لايت 2: ستاي هيومن',
    releaseYear: 2022,
    developer: 'Techland',
    publisher: 'Techland',
    genres: ['action', 'survival', 'horror', 'open-world'],
    steamAppId: 534380,
    aliases: ['داينق لايت 2', 'dying light 2'],
    synopsisEn:
      'Around two decades after the fall of Harran, the virus has won. Aiden Caldwell, an infected wanderer, arrives in the City — one of humanity’s last strongholds — searching for his long-lost sister. Mastering parkour and surviving the night, he becomes caught between factions, where his choices change who controls each district.',
    synopsisAr:
      'بعد نحو عقدين من سقوط "حرّان"، انتصر الفيروس. يصل المتجوّل المصاب إيدن كولدويل إلى "المدينة"، أحد آخر معاقل البشرية، بحثًا عن أخته المفقودة منذ زمن. ومع إتقان الباركور والنجاة من الليل، يجد نفسه بين فصائل متصارعة، وتغيّر قراراته من يسيطر على كل حي.',
  },
  {
    id: 'diablo-iii-reaper-of-souls',
    order: 51,
    titleEn: 'Diablo III: Reaper of Souls',
    titleAr: 'ديابلو 3: ريبر أوف سولز',
    releaseYear: 2014,
    developer: 'Blizzard Entertainment',
    publisher: 'Blizzard Entertainment',
    genres: ['action', 'rpg'],
    aliases: ['ديابلو 3', 'diablo 3'],
    note: {
      en: 'Expansion to Diablo III (2012), released in 2014. Console versions bundle both as the Ultimate Evil Edition.',
      ar: 'توسعة للعبة Diablo III (2012) صدرت عام 2014. نسخ أجهزة الألعاب تجمعهما معًا ضمن "Ultimate Evil Edition".',
    },
    synopsisEn:
      'Malthael, the former Archangel of Wisdom reborn as the Angel of Death, seizes the Black Soulstone and unleashes his Reapers upon Sanctuary. The Nephalem hero pursues him from the plague-stricken city of Westmarch to the heart of his power, in a fast loot-driven action RPG that adds the Crusader class and Adventure Mode.',
    synopsisAr:
      'يستولي "مالثايل"، ملاك الحكمة السابق الذي عاد في هيئة ملاك الموت، على "حجر الأرواح الأسود" ويطلق جنوده "الحصّادين" على عالم "سانكتشوري". يطارده البطل "النيفاليم" من مدينة ويستمارش المنكوبة حتى قلب قوته، في لعبة أكشن وتقمّص أدوار سريعة تضيف فئة "الصليبي" وطور المغامرة.',
  },
  {
    id: 'dark-souls-remastered',
    order: 52,
    titleEn: 'Dark Souls: Remastered',
    titleAr: 'دارك سولز ريماستر',
    releaseYear: 2018,
    developer: 'FromSoftware / QLOC',
    publisher: 'Bandai Namco Entertainment',
    genres: ['action', 'rpg'],
    steamAppId: 570940,
    aliases: ['دارك سولز 1', 'dark souls 1'],
    note: {
      en: 'Remastered edition (2018) of Dark Souls, originally released in 2011.',
      ar: 'نسخة محسّنة (2018) من لعبة Dark Souls التي صدرت أصلًا عام 2011.',
    },
    synopsisEn:
      'Branded with the Darksign, a Chosen Undead escapes the Undead Asylum and journeys to Lordran, a fading land of gods and dragons. Guided by vague prophecy, they must ring the Bells of Awakening and uncover the fate of the Age of Fire. The remaster brings the landmark original to modern hardware with improved performance and online play.',
    synopsisAr:
      'يهرب "الميت الحي المختار"، الموسوم بعلامة الظلام، من مصحة الموتى الأحياء ويرحل إلى "لوردران"، أرض الآلهة والتنانين الآخذة في الأفول. وبإرشاد نبوءة غامضة، عليه أن يقرع "أجراس الإيقاظ" ويكشف مصير "عصر النار". تقدّم النسخة المحسّنة هذه اللعبة المؤثرة على الأجهزة الحديثة بأداء أفضل ولعب أونلاين محسّن.',
  },
  {
    id: 'diablo-ii-resurrected',
    order: 53,
    titleEn: 'Diablo II: Resurrected',
    titleAr: 'ديابلو 2: ريزركتد',
    releaseYear: 2021,
    developer: 'Vicarious Visions / Blizzard Entertainment',
    publisher: 'Blizzard Entertainment',
    genres: ['action', 'rpg'],
    aliases: ['ديابلو 2', 'diablo 2', 'd2r'],
    note: {
      en: 'Remaster (2021) of Diablo II (2000) and its expansion Lord of Destruction.',
      ar: 'نسخة مُعاد بناؤها (2021) من Diablo II (2000) وتوسعتها Lord of Destruction.',
    },
    synopsisEn:
      'A mysterious Dark Wanderer leaves destruction in his wake as he travels east across Sanctuary, and a new hero sets out in pursuit. Their journey spans monasteries, deserts, jungles and the Burning Hells as they confront the Prime Evils. The remaster rebuilds the classic in high definition while preserving its original gameplay.',
    synopsisAr:
      'يترك "المتجوّل المظلم" الغامض الدمار خلفه أثناء رحلته شرقًا عبر "سانكتشوري"، فينطلق بطل جديد في أثره. تمتد الرحلة عبر الأديرة والصحاري والأدغال وصولًا إلى "الجحيم المتّقد" لمواجهة الشرور العظمى. وتعيد هذه النسخة بناء اللعبة الكلاسيكية بدقة عالية مع الحفاظ على أسلوب لعبها الأصلي.',
  },
  {
    id: 'dragon-ball-xenoverse-2',
    order: 54,
    titleEn: 'Dragon Ball Xenoverse 2',
    titleAr: 'دراغون بول زينوفيرس 2',
    releaseYear: 2016,
    developer: 'Dimps',
    publisher: 'Bandai Namco Entertainment',
    genres: ['fighting', 'rpg'],
    steamAppId: 454650,
    aliases: ['دراغون بول 2', 'دراقون بول', 'xenoverse'],
    synopsisEn:
      'Players create their own warrior and join the Time Patrol, based in the hub city of Conton City. Mysterious villains are altering key events of Dragon Ball history, and it is up to the Time Patroller to travel back and set the timeline right, fighting alongside and against iconic characters in arena-style 3D battles.',
    synopsisAr:
      'يصمم اللاعب محاربه الخاص وينضم إلى "دورية الزمن" التي تتخذ من مدينة "كونتون" مقرًا لها. يعبث أشرار غامضون بأحداث محورية في تاريخ دراغون بول، وعلى محارب الدورية العودة عبر الزمن لتصحيح المسار، مقاتلًا إلى جانب أشهر الشخصيات وضدها في معارك ثلاثية الأبعاد داخل ساحات مفتوحة.',
  },
];
