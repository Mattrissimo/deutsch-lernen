/*
 * 《新编大学德语》第1册逐课复习资料。
 * 教材 PDF 页码 = 纸质书页码 + 6；A1 两个完整视频课对应一个教材单元。
 * 本文件只收录学习所需的课文、对话、阅读和知识清单，不公开扫描图片。
 */
(function(){
  const line=(de,zh='')=>({de,zh});
  const dialogue=(title,pages,summary,lines)=>({title,pages,kind:'dialogue',summary,lines:lines.map(row=>Array.isArray(row)?line(row[0],row[1]||''):line(row))});
  const article=(title,pages,summary,paragraphs)=>({title,pages,kind:'article',summary,lines:paragraphs.map(row=>Array.isArray(row)?line(row[0],row[1]||''):line(row))});
  const lesson=(title,pages,overview,knowledge,passages)=>({title,pages,overview,knowledge,passages});

  const lessons={
    1:lesson('Einheit 1 · Phonetik（上）','教材第10–23页','先建立字母名称、元音长短和重音意识；这一课本身没有长课文。',[
      '德语 26 个基本字母与 Ä/Ö/Ü/ß；字母名称和字母在单词里的发音必须分开。',
      '元音通常在双写、h 前或单辅音前读长音；在双辅音、ck、tz 前通常读短音。',
      '名词首字母大写；句首也大写。不要据此把所有大写词都判断成专名。',
      '词重音通常落在词根；be-、ge-、ver-、zer- 等非重读前缀通常不承重音。'
    ],[
      article('教材跟读材料：字母与最小对立','教材第10–23页','逐行点读，先听清长短元音，再模仿。',[
        ['A a · Apfel · Abend · Name','A/a；苹果；晚上；姓名'],
        ['E e · essen · lesen · zehn','E/e；吃；读；十'],
        ['I i · bitte · sieben · Wien','I/i；请；七；维也纳'],
        ['O o · offen · wohnen · Boot','O/o；开着的；居住；船'],
        ['U u · Mutter · gut · Uhr','U/u；母亲；好；钟表'],
        ['Ä ä · Bär · Käse · spät','Ä/ä；熊；奶酪；晚'],
        ['Ö ö · Köln · schön · hören','Ö/ö；科隆；漂亮；听'],
        ['Ü ü · fünf · Tür · früh','Ü/ü；五；门；早']
      ])
    ]),
    2:lesson('Einheit 1 · Phonetik（下）','教材第24–35页','集中掌握最常见字母组合，并把姓名、地址和店铺信息拼写清楚。',[
      'ei = [aɪ]，ie = [iː]，eu/äu = [ɔʏ]；不要按英语拼读。',
      'sch = [ʃ]；词首 sp/st 常读 [ʃp]/[ʃt]。',
      'ich-Laut [ç] 多见于 i/e/ä/ö/ü 后；ach-Laut [x] 多见于 a/o/u/au 后。',
      '-ig 在标准德语词尾常读 [ɪç]；地区口音可能不同。',
      '拼写姓名时用 Wie buchstabiert man das?；听不清时用 Sprechen Sie bitte langsam.'
    ],[
      dialogue('教材情境：拼写姓名和地址','教材第30–35页','复习时把姓名、城市、街道替换成自己的信息。',[
        ['Wie heißen Sie?','您叫什么名字？'],
        ['Ich heiße Matteo.','我叫 Matteo。'],
        ['Wie buchstabiert man das?','这个怎么拼写？'],
        ['M-a-t-t-e-o.','M-a-t-t-e-o。'],
        ['Sprechen Sie bitte laut und langsam.','请您大声、慢一点说。'],
        ['Wie ist Ihre Adresse?','您的地址是什么？']
      ])
    ]),
    3:lesson('Einheit 2 · Kennenlernen（上）','教材第36–41页；学习指南第24–30页','主课文处理正式称呼、姓名、来源、拼写和课堂指令。',[
      'sich/jemanden vorstellen：介绍自己或别人；面对顾客和陌生成年人优先使用 Sie。',
      'W 疑问句：疑问词第1位，变位动词第2位；Wie heißen Sie? / Woher kommen Sie?',
      '姓名顺序：Vorname 是名，Familienname 是姓；Herr/Frau 后通常接姓。',
      '课堂命令式 Sie：动词原形 + Sie；Öffnen Sie … / Lesen Sie … / Antworten Sie …',
      '人称代词第一格：ich, du, er/sie/es, wir, ihr, sie/Sie。'
    ],[
      dialogue('Text A · Im Deutschunterricht','教材第38页（PDF 44）','Karin Beckmann 老师第一次认识 Mary Johnson 和 Wang Hongliang。',[
        ['Lehrerin: Guten Tag! Ich heiße Karin Beckmann. Und wie ist Ihr Name bitte?','老师：您好！我叫 Karin Beckmann。请问您叫什么名字？'],
        ['Studentin: Mary Johnson.','女学生：Mary Johnson。'],
        ['Lehrerin: Frau Johnson, woher kommen Sie?','老师：Johnson 女士，您来自哪里？'],
        ['Studentin: Aus England, aus London.','女学生：来自英国，来自伦敦。'],
        ['Lehrerin: Und wie heißen Sie?','老师：您叫什么名字？'],
        ['Student: Mein Name ist Wang Hongliang.','学生：我叫 Wang Hongliang。'],
        ['Student: Wie bitte? Sie sprechen zu schnell. Sprechen Sie bitte laut und langsam!','学生：您说什么？您说得太快了。请大声、慢一点说！'],
        ['Student: W-A-N-G, H-O-N-G-L-I-A-N-G.','学生：W-A-N-G，H-O-N-G-L-I-A-N-G。'],
        ['Student: Entschuldigung, Hongliang ist mein Vorname und Wang ist mein Familienname.','学生：不好意思，Hongliang 是我的名，Wang 是我的姓。'],
        ['Lehrerin: Herr Wang, wie buchstabiert man „Wang“?','老师：Wang 先生，“Wang”怎么拼写？'],
        ['Student: W-a-n-g.','学生：W-a-n-g。'],
        ['Lehrerin: Jetzt öffnen Sie bitte die Bücher auf Seite 4. Lesen Sie zuerst den Text 1 leise, und dann machen wir Übungen.','老师：现在请把书翻到第4页。先默读课文1，然后做练习。'],
        ['Lehrerin: Gut, schließen Sie bitte die Bücher! Hören wir Text 2.','老师：好，请合上书。我们听课文2。']
      ])
    ]),
    4:lesson('Einheit 2 · Kennenlernen（下）','教材第39–57页；学习指南第31–38页','食堂对话、阅读短文和本单元完整语法。',[
      '规则动词现在时：词干 + -e/-st/-t/-en/-t/-en；arbeiten 因词干以 t 结尾会补 e。',
      'heißen 的 du 形式是 heißt：词干已有 ß，du 不再加完整 -st。',
      'sein 现在时：bin, bist, ist, sind, seid, sind。',
      '第一格冠词：der/ein（阳）、die/eine（阴）、das/ein（中）、die（复数）。',
      '陈述句动词第2位；一般疑问句动词第1位；命令句也以动词开头。'
    ],[
      dialogue('Text B · In der Mensa','教材第38–39页（PDF 44–45）','同学在食堂询问座位、专业、住址并互相介绍。',[
        ['Brigitte: Hallo, ist der Platz hier frei?','Brigitte：你好，这个座位空着吗？'],
        ['Wang: Ja, bitte.','Wang：是的，请坐。'],
        ['Brigitte: Danke. Seid ihr aus Japan?','Brigitte：谢谢。你们来自日本吗？'],
        ['Wang: Nein, wir kommen aus China, aus Beijing.','Wang：不，我们来自中国北京。'],
        ['Brigitte: Was macht ihr hier?','Brigitte：你们在这里做什么？'],
        ['Liu Ling: Ich studiere hier Chemie. Ich lerne jetzt zuerst Deutsch und dann studiere ich Informatik.','Liu Ling：我在这里学化学。我现在先学德语，然后学习计算机科学。'],
        ['Brigitte: Was studierst du denn?','Brigitte：那你学什么专业？'],
        ['Wang: Ich studiere Elektrotechnik.','Wang：我学习电气工程。'],
        ['Brigitte: Wo wohnst du?','Brigitte：你住在哪里？'],
        ['Wang: Im Studentenwohnheim.','Wang：住在学生宿舍。'],
        ['Liu Ling: Wir auch. In Haus 3. Übrigens, mein Name ist Liu Ling und er heißt Wang Hongliang.','Liu Ling：我们也是，住3号楼。顺便介绍一下，我叫 Liu Ling，他叫 Wang Hongliang。'],
        ['Brigitte: Freut mich. Ich heiße Brigitte.','Brigitte：很高兴认识你们。我叫 Brigitte。'],
        ['Wang: Wie schreibt man das?','Wang：这个怎么写？'],
        ['Brigitte: B-r-i-g-i-t-t-e.','Brigitte：B-r-i-g-i-t-t-e。']
      ]),
      article('Leseverstehen · Brieffreunde','教材第48–49页（PDF 54–55）','四则交笔友信息，复习姓名、来源、专业、语言和爱好。',[
        ['Hallo, ich bin Paulo aus Italien. Meine Hobbys sind Lesen und Fußballspielen. Ich lerne gerade Deutsch. Schreibt mir E-Mails auf Deutsch!','Paulo 来自意大利，爱好阅读和踢足球，正在学习德语。'],
        ['Ich heiße Beata. Ich studiere Wirtschaftswissenschaft an der Warschauer Universität in Polen. Ich suche Brieffreunde aus Deutschland. Ich höre gern Musik und chatte gern.','Beata 在波兰华沙大学学习经济学，想认识德国笔友。'],
        ['Mein Name ist Ingeborg Luge. Ich wohne und arbeite in Deutschland. Ich bin Lehrerin und spreche Deutsch und Englisch. Ich freue mich auf E-Mails aus aller Welt.','Ingeborg 住在德国，是教师，会德语和英语。'],
        ['Hallo, wir sind zwei Studentinnen aus München. Wir lernen gerade Chinesisch und suchen Brieffreunde aus China.','两位慕尼黑女大学生正在学中文，想认识中国笔友。']
      ])
    ]),
    5:lesson('Einheit 3 · Studentenleben（上）','教材第58–67页；学习指南第39–46页','完整课文围绕一天安排、时间、学习和邀请。',[
      '询问时间：Wann …? / Um wie viel Uhr …? / Von wann bis wann …?',
      '正式时间与口语时间：10:45 = zehn Uhr fünfundvierzig / Viertel vor elf。',
      '可分动词：aufstehen → ich stehe … auf；abfahren → der Zug fährt … ab。',
      '固定搭配整体记：Sport treiben, eine Vorlesung besuchen, eine Prüfung schreiben, zu Mittag essen。',
      '时间状语放句首时仍只占第1位，变位动词保持第2位。'
    ],[
      dialogue('Text · Lernen, lernen, immer lernen','教材第60–61页（PDF 66–67）','Petra 和 Wang Hongliang 谈学习、作息、聚会和考试。',[
        ['Petra: Hallo, wie geht’s?','Petra：你好，最近怎么样？'],
        ['Wang: Danke, gut. Und dir?','Wang：谢谢，很好。你呢？'],
        ['Petra: Was machst du denn hier?','Petra：你在这里做什么？'],
        ['Wang: Ich habe Deutschunterricht. Jetzt machen wir gerade Pause.','Wang：我上德语课。现在正在休息。'],
        ['Petra: Hast du täglich Unterricht?','Petra：你每天都有课吗？'],
        ['Wang: Ja, immer am Vormittag von acht bis Viertel vor zwölf.','Wang：是的，每天上午八点到十一点四十五分。'],
        ['Petra: Wann stehst du denn auf?','Petra：那你什么时候起床？'],
        ['Wang: Um Viertel nach sechs. Dann treibe ich Sport. Ich laufe.','Wang：六点一刻。然后我运动、跑步。'],
        ['Petra: Auch dein Deutsch ist jetzt viel besser.','Petra：你的德语现在也好多了。'],
        ['Wang: Ich lerne auch sehr viel. Die Lehrerin spricht im Unterricht nur Deutsch. Ich verstehe sie immer besser.','Wang：我也学得很多。老师上课只说德语，我越来越能听懂她。'],
        ['Petra: Wohin fährst du jetzt?','Petra：你现在去哪里？'],
        ['Wang: Ich besuche eine Vorlesung, aber erst um halb zwölf.','Wang：我要去上一场大课，不过十一点半才开始。'],
        ['Petra: Um wie viel Uhr isst du dann zu Mittag?','Petra：那你几点吃午饭？'],
        ['Wang: Ich frühstücke meistens gut und esse nicht zu Mittag.','Wang：我通常早餐吃得很好，中午不吃饭。'],
        ['Petra: Hast du heute Abend Zeit? Thomas gibt eine Party.','Petra：你今晚有空吗？Thomas 举办聚会。'],
        ['Wang: Ich habe leider keine Zeit. Am Donnerstag schreiben wir eine Prüfung.','Wang：可惜我没时间。星期四我们要考试。'],
        ['Petra: Hast du am Freitag Zeit? Trinken wir zusammen Kaffee!','Petra：星期五有时间吗？我们一起喝咖啡吧！'],
        ['Wang: Nein, das geht auch nicht. Am Freitag gibt es immer Hausaufgaben.','Wang：不，也不行。星期五总有作业。'],
        ['Petra: Lernen, lernen, immer lernen. Du hast nie Zeit für das Leben und für die Freunde.','Petra：学、学、总是学习。你从来没有时间生活和交朋友。'],
        ['Wang: Oh, wie spät ist es jetzt? Schon fünf vor elf? Der Unterricht beginnt.','Wang：噢，现在几点了？已经差五分十一点？要上课了。']
      ])
    ]),
    6:lesson('Einheit 3 · Studentenleben（下）','教材第68–77页；学习指南第47–55页','把课文信息转成日程表，补齐不规则现在时、第四格和数字。',[
      '不规则动词现在时只在 du、er/sie/es 常发生元音变化：geben → gibst/gibt；lesen → liest；fahren → fährst/fährt。',
      '第四格冠词：阳性 der→den、ein→einen；阴性/中性/复数形式在本阶段不变。',
      '第四格人称代词：mich, dich, ihn/sie/es, uns, euch, sie/Sie。',
      'es gibt + Akkusativ；kennen + Akkusativ；besuchen + Akkusativ。',
      '基数词要用于时间、电话、价格和数量，并区分 eins 与 ein/eine。'
    ],[
      article('Leseverstehen · Hochschulen und Studenten','教材第70页（PDF 76）','教材使用 2010 年统计数据；用于语言学习，不当作当前数据。',[
        ['In Deutschland gibt es 410 Hochschulen. Sie umfassen 105 Universitäten, Technische Universitäten und Technische Hochschulen, 51 Kunsthochschulen, 232 Fachhochschulen, 6 Pädagogische Hochschulen und 16 Theologische Hochschulen.','德国当时共有410所高校，包括综合大学、理工大学、艺术院校、应用科学大学、师范大学和神学院。'],
        ['Die älteste Universität ist die Universität Heidelberg. Sie ist schon mehr als 600 Jahre alt.','最古老的是海德堡大学，已有600多年历史。'],
        ['Insgesamt haben die Hochschulen 2 119 485 Studenten. Davon sind 1 013 970 Frauen und 244 229 Ausländer.','高校学生总数为2,119,485，其中女性1,013,970，外国学生244,229。'],
        ['Deutsche Studenten studieren auch im Ausland.','德国学生也会到国外留学。']
      ])
    ]),
    7:lesson('Einheit 4 · Familie（上）','教材第78–89页；学习指南第56–65页','电话邀请、生日安排、家庭成员与人物介绍。',[
      '提出建议：Ich schlage vor, … / Ich habe eine Idee. / Wie wäre es mit …?',
      '接受或拒绝邀请：Ja, gern. / Das geht. / Tut mir leid, da habe ich keine Zeit。',
      '家庭成员名词必须连性别：der Vater, die Mutter, der Sohn, die Tochter, das Kind。',
      '可分动词：einladen, einkaufen, anrufen, aussehen；前缀在主句句末。',
      '人物描述时 sein/haben 与第三人称保持一致。'
    ],[
      dialogue('Text · Meine Oma hat Geburtstag · Dialog 1','教材第80页（PDF 86）','Anna、Maria 和 Lena 商量祖母的生日聚会。',[
        ['Maria: Lehmann.','Maria：Lehmann 家。'],
        ['Anna: Oma, ich bin’s!','Anna：奶奶，是我！'],
        ['Maria: Hallo, Anna!','Maria：你好，Anna！'],
        ['Anna: Mama sagt, du hast bald Geburtstag. Du bist schon 60, nicht wahr?','Anna：妈妈说您快过生日了。您已经60岁了，对吧？'],
        ['Maria: Ja, mein Schatz. Hast du etwas vor?','Maria：是的，宝贝。你有什么安排吗？'],
        ['Anna: Mama und Papa planen gerade deine Geburtstagsfeier. Wir machen eine Feier für dich!','Anna：妈妈和爸爸正在计划您的生日聚会。我们给您办一个聚会！'],
        ['Lena: Wir machen am Samstagabend bei dir eine Geburtstagsfeier. Was meinst du?','Lena：我们星期六晚上在您家办生日聚会。您觉得怎么样？'],
        ['Maria: Ja, gerne! Da habe ich nichts vor.','Maria：好啊！那时候我没别的安排。'],
        ['Lena: Wir laden meine Geschwister, andere Verwandte und Freunde ein. Jonas und ich gehen am Freitag einkaufen.','Lena：我们邀请我的兄弟姐妹、其他亲戚和朋友。Jonas 和我星期五去购物。'],
        ['Maria: Ich koche etwas für euch.','Maria：我给你们做点吃的。'],
        ['Lena: Nein. Du bist das Geburtstagskind und wir machen alles für dich.','Lena：不，您是寿星，一切都由我们来做。'],
        ['Maria: Aber ich mache gerne mit.','Maria：但我很愿意一起准备。'],
        ['Lena: Wir machen zusammen noch ein Familienfoto.','Lena：我们还一起拍一张全家福。']
      ])
    ]),
    8:lesson('Einheit 4 · Familie（下）','教材第81–99页；学习指南第66–73页','家庭照片、家庭形式、否定和物主冠词。',[
      '物主冠词按“拥有者”选词根 mein/dein/sein/ihr/unser/euer/Ihr，再按名词性数格加词尾。',
      'kein 否定没有定冠词的名词；nicht 否定动词、形容词、介词短语或特指成分。',
      'ja / nein / doch：否定问句中，doch 用来反驳否定。',
      '零冠词：职业作表语常不用冠词，如 Er ist Ingenieur。',
      '单数第三人称物主关系必须先判断拥有者是 er、sie 还是 es。'
    ],[
      dialogue('Text · Meine Oma hat Geburtstag · Dialog 2','教材第81页（PDF 87）','Anna 通过全家福介绍祖母、父母、叔叔、阿姨和伴侣。',[
        ['Luis: Anna, was ist denn das?','Luis：Anna，这是什么？'],
        ['Anna: Oh, ein Familienfoto! Meine Oma ist das Geburtstagskind. Sie ist 60 Jahre alt.','Anna：是一张全家福！我奶奶是寿星，她60岁。'],
        ['Luis: Deine Oma sieht aber sehr fit aus!','Luis：你奶奶看起来很健康！'],
        ['Anna: Sie lebt sehr gesund. Sie steht früh auf, raucht nicht und trinkt auch keinen Alkohol.','Anna：她生活得很健康。她早起、不抽烟，也不喝酒。'],
        ['Anna: Das hier sind mein Onkel Felix und meine Tante Leoni. Er ist Ingenieur und sie ist Sekretärin.','Anna：这是我叔叔 Felix 和阿姨 Leoni。他是工程师，她是秘书。'],
        ['Anna: Das sind meine Mutter Lena und mein Vater Jonas.','Anna：这是我妈妈 Lena 和爸爸 Jonas。'],
        ['Luis: Wer ist der Mann links?','Luis：左边的男人是谁？'],
        ['Anna: Er heißt Karl, Omas Lebensgefährte. Sie sind nicht verheiratet, leben aber zusammen.','Anna：他叫 Karl，是奶奶的伴侣。他们没有结婚，但生活在一起。']
      ]),
      article('Leseverstehen · Familienformen in Deutschland','教材第91页（PDF 97）','比较父母子女家庭、单亲家庭、伴侣家庭和单身生活。',[
        ['Thomas Lehmann ist Ingenieur, seine Frau Sophie Sekretärin. Sie haben zwei Kinder. Vater und Sohn spielen gern Fußball, Mutter und Tochter lieber Tennis.','Lehmann 一家是父母子女家庭，有两个孩子。'],
        ['Astrid ist 33 Jahre alt und arbeitet vormittags in einem Supermarkt. Sie hat keinen Mann, aber eine Tochter. Mutter und Tochter leben zusammen.','Astrid 是单亲母亲，与女儿一起生活。'],
        ['Simon Schäfer ist arbeitslos. Seine türkische Partnerin Dünya hat einen Teilzeitjob. Simon macht mit den Kindern die Hausaufgaben und kocht für die Familie.','Simon 与伴侣 Dünya 分担工作、家务和照顾孩子。'],
        ['Markus Schneider ist alleinstehend. Seine Freundin arbeitet in Italien. Jeder hat eine Wohnung, ein Auto und eine feste Stelle.','Markus 和女友异地生活，各自有住房和工作。']
      ])
    ]),
    9:lesson('Einheit 5 · Essen und Trinken（上）','教材第100–113页；学习指南第74–83页','完整点餐流程：看菜单、选菜、饮料、上菜和用餐寒暄。',[
      '表达愿望：Ich möchte … / Ich hätte gern … / Für mich bitte …',
      'mögen 表喜好，möchte 表较礼貌的愿望；两者不要混作相同语法。',
      '食品名词连冠词：das Schnitzel, der Salat, die Suppe, das Bier。',
      '数量与名词：zweimal Salat / zwei Bier 在餐馆口语中按“份/杯”理解。',
      '服务用语成组记：Guten Appetit! – Danke, gleichfalls! / Zum Wohl! – Prost!'
    ],[
      dialogue('Text · Im Restaurant · 点餐','教材第102页（PDF 108）','Thomas 请 Xiaoming 吃晚饭，两人从菜单中点主菜、前菜和饮料。',[
        ['Thomas: Hier ist die Speisekarte. Schauen wir mal hinein. Was gibt es denn heute?','Thomas：这是菜单。我们看看今天有什么。'],
        ['Thomas: Was möchtest du gerne?','Thomas：你想吃什么？'],
        ['Xiaoming: Schnitzel mit Pommes Frites mag ich sehr. Und dazu nehme ich noch einen Salat.','Xiaoming：我很喜欢炸肉排配薯条，还要一份沙拉。'],
        ['Thomas: Ich möchte noch eine Zwiebelsuppe als Vorspeise.','Thomas：我还想要一份洋葱汤作为前菜。'],
        ['Kellnerin: Was möchten Sie gerne essen?','服务员：您想吃什么？'],
        ['Thomas: Wir hätten gerne Schnitzel mit Pommes Frites und Rindersteak mit Bratkartoffeln, zweimal Salat und als Vorspeise zwei Zwiebelsuppen.','Thomas：我们要炸肉排配薯条、牛排配煎土豆、两份沙拉，以及两份洋葱汤作前菜。'],
        ['Kellnerin: Und was trinken Sie?','服务员：喝什么？'],
        ['Xiaoming: Lieber einen Apfelsaft.','Xiaoming：我更想喝苹果汁。'],
        ['Thomas: Also zwei Bier, bitte!','Thomas：那么请来两杯啤酒。'],
        ['Kellnerin: Wünschen Sie sonst noch etwas?','服务员：还需要别的吗？'],
        ['Thomas: Nein, danke. Das ist alles.','Thomas：不用了，谢谢，就这些。']
      ])
    ]),
    10:lesson('Einheit 5 · Essen und Trinken（下）','教材第103–125页；学习指南第84–93页','评价味道、结账、第三格与第四格、命令式。',[
      '第三格问 wem，第四格问 wen/was；helfen/danken/gefällt 要求第三格。',
      '双宾语常见顺序：名词+名词时“人Dativ在前、物Akkusativ在后”；代词顺序另行判断。',
      '第三格冠词：dem/der/dem/den + 复数常加 -n；人称代词 mir/dir/ihm/ihr/uns/euch/ihnen/Ihnen。',
      '命令式：du 省略 du，ihr 省略 ihr，Sie 使用原形 + Sie。',
      '结账：Zahlen, bitte. / Getrennt oder zusammen? / Stimmt so.'
    ],[
      dialogue('Text · Im Restaurant · 用餐与结账','教材第103页（PDF 109）','复习评价菜品、甜点、买单和小费。',[
        ['Kellnerin: Guten Appetit!','服务员：祝您好胃口！'],
        ['Thomas: Danke schön! Na, dann zum Wohl!','Thomas：谢谢！那就干杯！'],
        ['Xiaoming: Prost! Guten Appetit!','Xiaoming：干杯！祝好胃口！'],
        ['Thomas: Wie schmeckt es dir?','Thomas：味道怎么样？'],
        ['Xiaoming: Das Schnitzel und die Pommes Frites sind lecker.','Xiaoming：炸肉排和薯条很好吃。'],
        ['Thomas: Mir schmeckt das Rindersteak auch sehr gut.','Thomas：我也觉得牛排很好吃。'],
        ['Xiaoming: Als Nachtisch möchte ich ein Eis.','Xiaoming：甜点我想要一个冰淇淋。'],
        ['Thomas: Zahlen, bitte!','Thomas：买单！'],
        ['Kellnerin: Hat es geschmeckt? Zahlen Sie getrennt oder zusammen?','服务员：吃得满意吗？分开付还是一起付？'],
        ['Thomas: Zusammen. Das macht zusammen 28,50 Euro? Hier sind 30 Euro. Stimmt so.','Thomas：一起付。共28.50欧元？这里是30欧元，不用找了。'],
        ['Xiaoming: Ich danke dir für das Essen.','Xiaoming：谢谢你请我吃饭。'],
        ['Thomas: Bitte, gern geschehen.','Thomas：不客气。']
      ]),
      article('Leseverstehen · Essen in Deutschland','教材第116–117页（PDF 122–123）','阅读德国饮食、快餐与一日三餐习惯。',[
        ['In Deutschland gibt es viele regionale Spezialitäten und internationale Restaurants. In Schnellimbissen kann man Pizza oder einen Döner Kebab essen.','德国有各地特色菜和国际餐厅；快餐店可以买比萨或烤肉夹饼。'],
        ['Fast Food von McDonald’s oder Burger King ist bei Jugendlichen beliebt. Man isst dort Hamburger oder Cheeseburger mit Pommes Frites und trinkt dazu Cola.','快餐在年轻人中很受欢迎。'],
        ['Zum Frühstück trinken manche Leute Tee oder Kaffee und essen Müsli oder Obst. Andere mögen Brot oder Brötchen mit Käse, Wurst, Marmelade oder Honig.','早餐可能是茶或咖啡配麦片水果，也可能是面包配奶酪、香肠、果酱或蜂蜜。'],
        ['Zum Mittag essen viele in der Kantine oder Cafeteria. Am Abend isst man manchmal warm, manchmal kalt.','许多人午餐在食堂吃；晚餐有时吃热食，有时吃冷餐。']
      ])
    ]),
    11:lesson('Einheit 6 · Wohnen in Deutschland（上）','教材第126–139页；学习指南第94–106页','找房、电话预约、看房、租金和房屋规定。',[
      '租房动词与格：eine Wohnung suchen/mieten/besichtigen；jemandem die Wohnung zeigen。',
      '情态动词 dürfen/müssen/sollen：变位动词第2位，实义动词原形在句末。',
      '租房信息：die Miete, die Nebenkosten, die Kaution, der Quadratmeter, der Internetanschluss。',
      '房间与设施必须连冠词和复数；复合词由最后一部分决定性别。',
      '礼貌预约：Wann darf ich kommen? / Möchten Sie die Wohnung besichtigen?'
    ],[
      dialogue('Text · Wohnungssuche','教材第128页（PDF 134）','Wang Hongliang 根据网络广告给房东打电话并看房。',[
        ['Wang Hongliang arbeitet als Informatiker bei Bosch in Hamburg. Seit Wochen sucht er eine Wohnung.','Wang Hongliang 在汉堡 Bosch 公司做计算机工程师，已经找房几周。'],
        ['Wang: Guten Tag, Frau Schmidt. Ihre Telefonnummer habe ich von Ihrer Wohnungsanzeige aus dem Internet. Ich muss dringend eine Wohnung mieten.','Wang：您好，Schmidt 女士。我从网络租房广告中看到您的电话。我急需租房。'],
        ['Frau Schmidt: Möchten Sie die Wohnung besichtigen?','Schmidt：您想看房吗？'],
        ['Wang: Ja, gerne. Wann darf ich kommen?','Wang：想。什么时候可以来？'],
        ['Frau Schmidt: Kommen Sie gleich?','Schmidt：您现在就来吗？'],
        ['Wang: Kein Problem. Ich fahre sofort zu Ihnen.','Wang：没问题，我马上去您那里。'],
        ['Wang: Bin ich richtig bei Schmidts?','Wang：这里是 Schmidt 家吗？'],
        ['Frau Schmidt: Ja, richtig. Kommen Sie herein. Ich zeige Ihnen die Wohnung.','Schmidt：对，请进。我带您看房。'],
        ['Wang: Soll ich die Schuhe ausziehen?','Wang：我需要脱鞋吗？'],
        ['Frau Schmidt: Nein, nicht nötig.','Schmidt：不用。']
      ])
    ]),
    12:lesson('Einheit 6 · Wohnen in Deutschland（下）','教材第129–147页；学习指南第107–110页','室内位置、搬家、双向介词和租房广告阅读。',[
      '双向介词 an/auf/hinter/in/neben/über/unter/vor/zwischen：静态 wo + Dativ，方向 wohin + Akkusativ。',
      '第三格介词：aus, bei, mit, nach, seit, von, zu, gegenüber。',
      'stellen/legen/hängen（动作）常回答 wohin；stehen/liegen/hängen（状态）常回答 wo。',
      '缩合形式：im = in dem，ins = in das，am = an dem，zum/zur = zu dem/der。',
      '读房源要找面积、暖租/冷租、杂费、押金、入住日期和家具。'
    ],[
      article('Text · Wohnung und Umzug','教材第129页（PDF 135）','先描述房屋，再描述 Fang Jin 把物品放进房间。',[
        ['In der Wohnung gibt es ein Wohnzimmer, ein Schlafzimmer, ein Arbeitszimmer, ein Bad, eine Küche und einen Flur.','房子有客厅、卧室、书房、浴室、厨房和走廊。'],
        ['Das Wohnzimmer ist hell, denn es gibt zwei Fenster und einen Balkon nach Süden.','客厅很明亮，因为有两扇窗和一个朝南的阳台。'],
        ['Vor dem Haus ist die Lindbergstraße und hinter dem Haus ist ein Parkplatz.','房前是 Lindbergstraße，房后有停车场。'],
        ['Die Miete beträgt 380 Euro warm. Herr Wang muss die Hausordnung einhalten.','暖租380欧元；Wang 先生必须遵守房屋规定。'],
        ['Am Fenster gibt es einen Schreibtisch. Vor dem Schreibtisch steht ein Drehstuhl. Über dem Schreibtisch hängt eine Lampe.','窗边有书桌，书桌前有转椅，书桌上方挂着灯。'],
        ['Fang Jin stellt seinen Laptop auf den Schreibtisch, Bücher ins Regal und den Wecker auf den Nachttisch. Den Koffer legt er unter das Bett.','Fang Jin 把电脑放在书桌上、书放进书架、闹钟放在床头柜上，箱子放到床下。']
      ]),
      article('Leseverstehen · Wohnungsanzeigen','教材第139–140页（PDF 145–146）','练习区分出租广告和求租广告。',[
        ['Wir suchen zum 1. März eine nette Mitbewohnerin für unsere Vierer-WG. Das Zimmer ist etwa 35 Quadratmeter groß und hell.','四人合租房从3月1日起找一位女室友，房间约35平方米且明亮。'],
        ['Die Miete beträgt etwa 185 Euro inklusive Nebenkosten, Internet und Telefon.','租金约185欧元，包含杂费、网络和电话。'],
        ['1-Zimmer-Wohnung, 20 Quadratmeter, Balkon, Küche und Bad zur Mitbenutzung, Monatsmiete 350 Euro inklusive Nebenkosten, 480 Euro Kaution.','一居室20平方米，有阳台，共用厨房浴室，月租350欧元含杂费，押金480欧元。'],
        ['Ich suche ein möbliertes Zimmer in Flughafennähe bis 250 Euro warm.','我求租机场附近带家具的房间，暖租不超过250欧元。']
      ])
    ]),
    13:lesson('Einheit 7 · Kaufen und Schenken（上）','教材第148–159页；学习指南第111–119页','在百货商店挑礼物、询问楼层、颜色、价格和意见。',[
      '情态动词 können/wollen：kann/kannst 与 will/willst 是不规则单数形式。',
      'welcher/dieser 按名词性数格变化；先判断名词，再选择 welche/welchen/welches。',
      '表达意见：Wie findest du …? / Was hältst du von …? / … gefällt mir。',
      '形容词比较：billig → billiger；teuer → teurer；gut → besser。',
      '楼层与位置：in der ersten Etage；an der Kasse；da vorne。'
    ],[
      dialogue('Text · Im Kaufhaus · 礼物选择','教材第150页（PDF 156）','Wang Hongliang 和 Lea 为朋友挑生日礼物。',[
        ['Wang: Meine Freundin hat bald Geburtstag. Ich suche ein Geschenk für sie.','Wang：我女朋友快过生日了，我在给她找礼物。'],
        ['Lea: Was willst du ihr denn schenken?','Lea：你想送她什么？'],
        ['Wang: Das weiß ich nicht genau. Hast du eine Idee?','Wang：我还不确定。你有主意吗？'],
        ['Lea: Wie wäre es mit einer Mütze? Die jungen Mädchen tragen alle Mützen.','Lea：帽子怎么样？年轻女孩都戴帽子。'],
        ['Wang: Wo finde ich Mützen?','Wang：在哪里能找到帽子？'],
        ['Lea: In der ersten Etage. Komm, ich helfe dir.','Lea：在一楼。来，我帮你。'],
        ['Lea: Wie findest du die Mütze hier?','Lea：你觉得这顶帽子怎么样？'],
        ['Wang: Welche denn?','Wang：哪一顶？'],
        ['Lea: Die rote.','Lea：红色的。'],
        ['Wang: Die Farbe gefällt mir nicht besonders. Rot steht meiner Freundin nicht.','Wang：我不太喜欢这个颜色。红色不适合我女朋友。'],
        ['Wang: Welche nehme ich, die blaue oder die schwarze?','Wang：我选哪顶，蓝色的还是黑色的？'],
        ['Lea: Mit der schwarzen Mütze sieht deine Freundin bestimmt cool aus.','Lea：戴黑色帽子你女朋友一定很酷。']
      ])
    ]),
    14:lesson('Einheit 7 · Kaufen und Schenken（下）','教材第151–167页；学习指南第120–122页','价格选择、祝愿、礼物文化与定冠词后的形容词变化。',[
      '定冠词已明确性数格时，形容词大多用弱变化 -e/-en。',
      '序数词像形容词一样变化：am zweiundzwanzigsten September；in der ersten Etage。',
      '祝愿：Herzlichen Glückwunsch! / Alles Gute! / Viel Erfolg! / Gute Besserung!',
      'schenken + Dativ + Akkusativ：Ich schenke meiner Freundin eine Mütze。',
      '礼物文化是语境信息，不是绝对规则；接待顾客时先询问场合和对象。'
    ],[
      dialogue('Text · Im Kaufhaus · 价格、收银台与生日','教材第151页（PDF 157）','继续比较价格，完成购买并发出聚会邀请。',[
        ['Lea: Sie kostet 35 Euro.','Lea：它35欧元。'],
        ['Wang: Was? So teuer? Gibt es keine billigeren?','Wang：什么？这么贵？没有更便宜的吗？'],
        ['Lea: Nimm die schwarze hier. Sie ist auch schön und kostet nur 15 Euro.','Lea：选这顶黑色的吧，也很好看，只要15欧元。'],
        ['Wang: Okay, die nehme ich. Wo ist denn die Kasse?','Wang：好，我要这顶。收银台在哪里？'],
        ['Lea: Da vorne. Wann hat deine Freundin Geburtstag?','Lea：在前面。你女朋友什么时候生日？'],
        ['Wang: Am 22. September. Sie macht eine Party. Komm doch auch!','Wang：9月22日。她要办聚会，你也来吧！'],
        ['Lea: Ja, gerne.','Lea：好啊。'],
        ['Lea: Herzlichen Glückwunsch zum Geburtstag. Ich wünsche dir alles Gute!','Lea：生日快乐，祝你一切顺利！']
      ]),
      article('Leseverstehen · Schenken ist eine Kunst','教材第161页（PDF 167）','了解德国常见送礼情境并学习相关表达。',[
        ['Zu Einladungen ins Restaurant, zum Kaffee, ins Kino oder ins Theater bringt man grundsätzlich kein Geschenk mit.','受邀去餐厅、咖啡馆、电影院或剧院时，通常不带礼物。'],
        ['Auf eine Party kann man ohne Geschenk gehen oder etwas zum Essen und Trinken mitbringen.','参加聚会可以不带礼物，也可以带一些吃喝的东西。'],
        ['Geschenke bekommen Geburtstagskinder, Hochzeitspaare und Gastgeber bei einer Einladung zum Essen im Haus.','寿星、新婚夫妇和在家请客的主人常会收到礼物。'],
        ['Man gibt dem Gastgeber das Geschenk bei der Begrüßung. Der Gastgeber packt es sofort aus und bedankt sich.','见面问候时把礼物交给主人，主人通常当场拆开并道谢。'],
        ['Typische Geschenke aus China, zum Beispiel Seidentücher, Tee oder Scherenschnitte, bringen sicher Freude.','丝巾、茶或剪纸等中国特色礼物会让人高兴。']
      ])
    ]),
    15:lesson('Einheit 8 · Freizeit und Ferien（上）','教材第168–179页；学习指南第123–133页','周末经历、旅行、天气和现在完成时。',[
      'Perfekt = haben/sein 的现在时 + Partizip II；第二位只放助动词，分词在句末。',
      '移动或状态变化常用 sein：fahren, gehen, kommen, aufstehen；多数及物动词用 haben。',
      '规则分词：ge- + 词干 + -t；以 -ieren 结尾通常没有 ge-。',
      '可分动词分词把 ge 放中间：aufstehen → aufgestanden。',
      '经历提问：Was hast du gemacht? / Wie war es? / Wie lange hat die Fahrt gedauert?'
    ],[
      dialogue('Text · Am Wochenende und in den Ferien · Dialog 1','教材第170页（PDF 176）','Albert 描述去吕根岛的周末旅行。',[
        ['Albert: Was hast du am Wochenende gemacht?','Albert：你周末做了什么？'],
        ['Bruno: Ich bin an die Ostsee gefahren und habe einen Ausflug nach Rügen gemacht.','Bruno：我去了波罗的海，还去吕根岛旅行。'],
        ['Albert: Rügen?','Albert：吕根岛？'],
        ['Bruno: Das ist die Insel mit den Kreidefelsen, ganz in der Nähe von Stralsund.','Bruno：就是有白垩岩、靠近 Stralsund 的那座岛。'],
        ['Albert: Wie war es?','Albert：怎么样？'],
        ['Bruno: Herrlich! Ich habe im Meer gebadet und in der Sonne gelegen.','Bruno：太棒了！我在海里游泳，还晒了太阳。'],
        ['Albert: Hast du auch gesurft?','Albert：你也冲浪了吗？'],
        ['Bruno: Ja. Ich bin auch am Strand spazieren gegangen.','Bruno：是的，我还在海滩散步。'],
        ['Albert: Hast du Fotos gemacht?','Albert：你拍照了吗？'],
        ['Bruno: Selbstverständlich. Ich habe während der Fahrt und auf der Insel viel fotografiert.','Bruno：当然。路上和岛上我拍了很多照片。'],
        ['Albert: Wie lange hat die Fahrt gedauert?','Albert：路程花了多久？'],
        ['Bruno: Von Berlin mit dem Auto etwa drei Stunden.','Bruno：从柏林开车大约三小时。']
      ])
    ]),
    16:lesson('Einheit 8 · Freizeit und Ferien（下）','教材第171–187页；学习指南第134–136页','假期采访、博客、过去时 sein/haben 和第二格。',[
      'sein/haben 过去时：war/hatte；口语叙述背景时也很常用。',
      '第二格表示所属：das Buch meines Vaters；阳/中性名词常加 -(e)s。',
      '时间顺序：zuerst, dann, danach, später, schließlich。',
      'von … bis … 表示时间或路程范围；während + Genitiv/Dativ 表示“在……期间”。',
      '假期经历要同时回答地点、交通方式、活动、时长和评价。'
    ],[
      dialogue('Text · 假期采访','教材第171–172页（PDF 177–178）','校报记者采访学生的假期经历。',[
        ['Journalistin: Was habt ihr in den Ferien gemacht? Könnt ihr mir etwas berichten?','记者：你们假期做了什么？能讲一讲吗？'],
        ['Günther: Ich habe einen Monat auf dem Land verbracht und im Biergarten als Kellner gearbeitet.','Günther：我在乡下待了一个月，还在啤酒花园当服务员。'],
        ['Moritz: Ich habe ein Praktikum bei Siemens absolviert.','Moritz：我在 Siemens 完成了一段实习。'],
        ['Moritz: Ich habe Prospekte vom Deutschen ins Englische übersetzt und im Qualitätsmanagement Erfahrungen gesammelt.','Moritz：我把宣传册从德语翻译成英语，还在质量管理部门积累了经验。'],
        ['Rita: Ich habe bei IBM in Düsseldorf gejobbt und Programmieren gelernt.','Rita：我在杜塞尔多夫的 IBM 打工并学习了编程。'],
        ['Günther: In den Ferien können wir etwas Praktisches lernen. Das ist wichtig für das spätere Berufsleben.','Günther：假期里可以学习实用的东西，这对以后的职业生活很重要。']
      ]),
      article('Leseverstehen · Aus dem Blog von Susanna','教材第179–180页（PDF 185–186）','Susanna 记录搭便车、露营和青年旅舍经历。',[
        ['21. Juni: Per Anhalter bin ich etwa vier Stunden gefahren. Um 14.30 Uhr bin ich auf dem Campingplatz in Heidelberg angekommen. Jetzt liege ich am Neckar und genieße die Sonne.','6月21日：搭便车约四小时，到达海德堡露营地，在 Neckar 河边晒太阳。'],
        ['22. Juni: Die Leute im Zelt nebenan kommen aus Hamburg. Wir haben zusammen im Fluss gebadet und E-Mail-Adressen und Handynummern getauscht.','6月22日：认识了邻帐篷的汉堡游客，一起游泳并交换联系方式。'],
        ['25. Juni: Per Mitfahrgelegenheit bin ich in den Schwarzwald gefahren. Bis zur Jugendherberge bin ich gewandert.','6月25日：拼车去了黑森林，之后步行到青年旅舍。']
      ])
    ]),
    17:lesson('Einheit 9 · Körper und Gesundheit（上）','教材第188–201页；学习指南第137–146页','预约、候诊、身体部位、症状和反身动词。',[
      '预约：Ich hätte gern einen Termin. / Ist am … noch ein Termin frei?',
      '身体不适：Was fehlt Ihnen? / Mein Hals tut mir weh. / Ich habe Husten。',
      '反身代词第四格：mich/dich/sich/uns/euch/sich；第三格在另有第四格宾语时出现。',
      '身体部位常用定冠词：Ich wasche mir die Hände；不是机械地用物主冠词。',
      'seit + Dativ 表示从过去持续到现在，动词通常用现在时。'
    ],[
      dialogue('Text · Beim Arzt · Szene 1–2','教材第190–191页（PDF 196–197）','电话预约并在候诊室说明情况。',[
        ['Sprechstundenhilfe: Praxis Dr. Laun. Guten Tag.','诊所助理：Laun 医生诊所，您好。'],
        ['Müller: Ich fühle mich sehr schlecht und hätte gern einen Termin.','Müller：我感觉很不舒服，想预约。'],
        ['Sprechstundenhilfe: Am Mittwoch, den 23., um 13.30 Uhr ist noch ein Termin frei.','诊所助理：23日星期三13:30还有一个空位。'],
        ['Müller: Das ist zu spät. Es geht mir schlecht.','Müller：那太晚了，我很不舒服。'],
        ['Sprechstundenhilfe: Geht es am 21. um 10.30 Uhr?','诊所助理：21日10:30可以吗？'],
        ['Müller: Ja, gut. Mein Name ist Lena Müller.','Müller：可以，我叫 Lena Müller。'],
        ['Müller: Ich habe um 10.30 Uhr einen Termin. Hier ist meine Versichertenkarte.','Müller：我约了10:30。这是我的医保卡。'],
        ['Sprechstundenhilfe: Nehmen Sie bitte im Wartezimmer einen Moment Platz.','诊所助理：请在候诊室稍等。'],
        ['Lorenz: Sie sehen blass aus. Was ist los mit Ihnen?','Lorenz：您脸色苍白。您怎么了？'],
        ['Müller: Ich habe immer Magenschmerzen und kann gar nichts essen.','Müller：我总是胃痛，什么都吃不下。'],
        ['Lorenz: Meine Kinder können sich schon anziehen, sich die Zähne putzen und sich waschen. Aber sie streiten sich oft.','Lorenz：我的孩子已经会自己穿衣、刷牙、洗脸，但他们经常吵架。']
      ])
    ]),
    18:lesson('Einheit 9 · Körper und Gesundheit（下）','教材第191–209页；学习指南第147–155页','诊室对话、医嘱、宾语从句和健康论坛。',[
      'dass/ob/W 疑问词引导的宾语从句：变位动词放句末。',
      '表达意见：Ich denke/finde/meine, dass …；同意或反对要给出理由。',
      'sollen 表医嘱或转述建议；Sie sollten … 更委婉。',
      '药品表达：ein Medikament gegen + Akkusativ；jemandem ein Medikament verschreiben。',
      '双宾语：Der Arzt verschreibt Ihnen ein Medikament；Ihnen 为第三格，Medikament 为第四格。'
    ],[
      dialogue('Text · Beim Arzt · Szene 3','教材第191页（PDF 197）','医生问诊、检查并给出建议。',[
        ['Arzt: Was fehlt Ihnen denn?','医生：您哪里不舒服？'],
        ['Müller: Ich habe mich erkältet. Mein Hals tut mir weh, und ich habe Kopfschmerzen, Schnupfen und Husten.','Müller：我感冒了，嗓子疼，还有头痛、流鼻涕和咳嗽。'],
        ['Arzt: Haben Sie Fieber?','医生：发烧吗？'],
        ['Müller: Heute Morgen hatte ich 38 Grad.','Müller：今天早上38度。'],
        ['Arzt: Seit wann haben Sie die Beschwerden?','医生：这些症状多久了？'],
        ['Müller: Seit Sonntag.','Müller：从星期日开始。'],
        ['Arzt: Haben Sie Medikamente genommen?','医生：吃药了吗？'],
        ['Müller: Ja, aber die Medikamente haben nicht geholfen.','Müller：吃了，但药没有起作用。'],
        ['Arzt: Machen Sie den Mund auf. Atmen Sie tief ein und aus.','医生：张开嘴。深吸气，再呼气。'],
        ['Arzt: Sie haben eine Grippe. Ich verschreibe Ihnen ein Medikament. Kommen Sie in drei Tagen wieder.','医生：您得了流感。我给您开药，三天后再来。']
      ]),
      article('Leseverstehen · Cyberdoktor','教材第202–203页（PDF 208–209）','论坛中的失眠、背痛和头痛问题及医生回复。',[
        ['Seit drei Jahren schlafe ich nachts sehr schlecht. Am Morgen bin ich immer müde. Ich will aber keine Schlaftabletten nehmen. Was soll ich tun?','读者询问长期失眠但不想吃安眠药怎么办。'],
        ['Ich habe Schmerzen im Rücken, besonders abends. Meine Frau sagt, dass ich Sport treiben soll. Aber es hilft nicht.','读者询问运动也未改善的背痛。'],
        ['Mein Kopf tut immer weh. Mein Arzt sagt, dass ich mehr Sport treiben soll. Was meinen Sie?','读者询问反复头痛和运动建议。'],
        ['Gehen Sie abends spazieren und trinken Sie keinen Kaffee. Ein Glas Milch mit Honig kann vielleicht helfen.','医生建议散步、避免咖啡，并尝试蜂蜜牛奶。']
      ])
    ]),
    19:lesson('Einheit 10 · Orientierung in der Stadt（上）','教材第210–223页；学习指南第156–164页','街头问路、路线步骤、公共交通和祈使句。',[
      '问路：Wie komme ich zu/zur/zum …? / Wo finde ich …? / Ist es weit?',
      'zu + Dativ：zur Bibliothek, zum Bahnhof；方向到城市/无冠词国家常用 nach。',
      '路线动词：gehen, fahren, abbiegen, einsteigen, aussteigen, umsteigen。',
      '路线连接词：zuerst, dann, danach, schließlich；每一步都要说清动作和地点。',
      '祈使句 Sie：Gehen Sie … / Biegen Sie … ab / Steigen Sie … um。'
    ],[
      dialogue('Text · Auskunft auf der Straße · 公共交通','教材第212页（PDF 218）','Wang Hongliang 询问去 Staatsbibliothek 的路线。',[
        ['Wang: Entschuldigen Sie, wie komme ich zur Stadtbibliothek?','Wang：请问怎么去市图书馆？'],
        ['Passant 1: Tut mir leid, ich bin auch fremd hier.','路人1：抱歉，我也不是本地人。'],
        ['Wang: Wissen Sie vielleicht, wo die Stadtbibliothek ist?','Wang：您知道市图书馆在哪里吗？'],
        ['Passant 2: Sie wollen zur Staatsbibliothek, nicht zur Stadtbibliothek. Sie liegt am Karlsplatz.','路人2：您要去的是国家图书馆，不是市图书馆。它在 Karlsplatz。'],
        ['Passant 2: Nehmen Sie zuerst den Bus Linie 16 in Richtung Hauptbahnhof.','路人2：先乘16路公交往火车总站方向。'],
        ['Passant 2: Am Hauptbahnhof steigen Sie in die S6 ein und fahren bis zum Rathaus.','路人2：在火车总站换乘S6，坐到市政厅。'],
        ['Passant 2: Dort steigen Sie in die U2 um und fahren bis zum Karlsplatz.','路人2：在那里换乘U2，坐到 Karlsplatz。'],
        ['Passant 2: Dann gehen Sie noch 100 Meter geradeaus. Gehen Sie um die Kirche, dann sehen Sie die Staatsbibliothek.','路人2：再直走100米，绕过教堂就能看到国家图书馆。'],
        ['Wang: Wo finde ich die Bushaltestelle?','Wang：公交站在哪里？']
      ])
    ]),
    20:lesson('Einheit 10 · Orientierung in der Stadt（下）','教材第213–229页；学习指南第165–169页','步行路线、城市导览、地点介词和情态动词复习。',[
      'durch/um + Akkusativ；gegenüber + Dativ；entlang 常放名词后并用第四格。',
      '静态地点继续用 Dativ，方向移动用 Akkusativ；路线题必须先判 wo 还是 wohin。',
      '公共交通：in den Bus einsteigen, aus dem Bus aussteigen, in die U-Bahn umsteigen。',
      '情态动词总复习：dürfen, können, mögen/möchte, müssen, sollen, wollen。',
      '城市导览要交代顺序、景点、方向、停留时间和集合地点。'
    ],[
      dialogue('Text · Auskunft auf der Straße · 步行到车站','教材第213页（PDF 219）','路人继续说明怎样步行到公交站。',[
        ['Passant: Hier an der Kreuzung biegen Sie rechts in die Schillerstraße ab.','路人：在这个路口右转进入 Schillerstraße。'],
        ['Passant: Gehen Sie die Straße entlang, zuerst über eine Brücke, dann durch das Stadttor und danach an einem Theater vorbei.','路人：沿街走，先过桥，再穿过城门，然后经过一家剧院。'],
        ['Passant: Auf der linken Seite sehen Sie schließlich eine Post. Die Haltestelle ist vor der Post.','路人：最后左边会看到邮局，车站就在邮局前。'],
        ['Wang: Ist es weit? Wie lange muss ich gehen?','Wang：远吗？要走多久？'],
        ['Passant: Fünf Minuten. Ich kann Sie ein Stück begleiten.','路人：五分钟。我可以陪您走一段。'],
        ['Wang: Das ist sehr nett von Ihnen. Vielen Dank.','Wang：您太好了，非常感谢。']
      ]),
      article('Leseverstehen · Stadtrundfahrt in Hangzhou','教材第222–223页（PDF 228–229）','导游介绍杭州、西湖、龙井茶和灵隐寺。',[
        ['Guten Morgen, meine Damen und Herren! Mein Name ist Liu Fang und ich bin Ihre Reiseleiterin. Ich begrüße Sie zu unserer Stadtrundfahrt in Hangzhou.','女士们先生们早上好！我是导游 Liu Fang，欢迎参加杭州城市游。'],
        ['Hangzhou, die Hauptstadt der Provinz Zhejiang, ist durch ihre malerische Landschaft im In- und Ausland bekannt.','浙江省会杭州以秀丽风景闻名中外。'],
        ['Der Westsee ist das Wahrzeichen der Stadt. Jeden Tag sitzen viele Menschen in den Teehäusern am Ufer und genießen die Landschaft.','西湖是杭州的象征，人们在湖边茶馆品茶赏景。'],
        ['Heute Nachmittag machen wir eine Bootsfahrt auf dem See und trinken danach den bekannten Long-Jing-Tee.','下午乘船游湖，之后品尝著名的龙井茶。'],
        ['Nach der Besichtigung des Lingyin-Tempels treffen wir uns am Parkplatz und fahren zum Mittagessen.','参观灵隐寺后在停车场集合，再去吃午饭。']
      ])
    ])
  };

  window.DEUTSCH_TEXTBOOK_REVIEW_V2=Object.freeze({
    version:'2026-08-19',
    book:1,
    courseLevel:'A1',
    coveredLessons:Object.keys(lessons).length,
    totalLessons:20,
    source:'《新编大学德语》第1册 + 配套学习指南',
    lessons:Object.freeze(lessons)
  });
})();
