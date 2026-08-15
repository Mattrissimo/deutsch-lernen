/*
 * 40 课语法追踪与扩展动词数据。
 * 资料基线：《新编大学德语》第 1、2 册教材目录/语法清单 + B 站 BV1uk4y1W7EZ 分P目录。
 * B 站该视频全部分P目前均无公开字幕；videoTranscriptVerified=false 不得解释为逐字听写已完成。
 */
(function(){
  const makeVerb=(meaning,group,stem,forms,past,pastSentence,example,note)=>Object.freeze({meaning,group,stem,forms,past,pastSentence,example,note});
  window.DEUTSCH_EXTENDED_VERBS=Object.freeze({
    buchstabieren:makeVerb('拼写；逐字母念','regular','buchstabier-',['buchstabiere','buchstabierst','buchstabiert','buchstabieren','buchstabiert','buchstabieren'],'habe buchstabiert','Ich habe meinen Namen buchstabiert.',{person:5,de:'Buchstabieren Sie bitte Ihren Namen.',zh:'请拼写一下您的名字。'},'-ieren 结尾：现在时照常加人称词尾；第二分词不加 ge-。'),
    studieren:makeVerb('上大学；攻读','regular','studier-',['studiere','studierst','studiert','studieren','studiert','studieren'],'habe studiert','Ich habe in Dresden studiert.',{person:0,de:'Ich studiere Deutsch.',zh:'我学习德语。'},'-ieren 动词的第二分词不加 ge-：studiert。'),
    fragen:makeVerb('询问','regular','frag-',['frage','fragst','fragt','fragen','fragt','fragen'],'habe gefragt','Ich habe die Kundin gefragt.',{person:0,de:'Ich frage die Kundin.',zh:'我询问这位女顾客。'},'规则动词；fragen + Akkusativ。'),
    antworten:makeVerb('回答','spelling','antwort-',['antworte','antwortest','antwortet','antworten','antwortet','antworten'],'habe geantwortet','Ich habe dem Kunden geantwortet.',{person:0,de:'Ich antworte dem Kunden.',zh:'我回复这位顾客。'},'词干以 -t 结尾，du/er/ihr 前加入 e；antworten + Dativ。'),
    hören:makeVerb('听；听见','regular','hör-',['höre','hörst','hört','hören','hört','hören'],'habe gehört','Ich habe die Frage gehört.',{person:3,de:'Wir hören den Dialog.',zh:'我们听对话。'},'规则动词；不要把 ö 写成 o。'),
    lesen:makeVerb('阅读','vowel','les- → lies-',['lese','liest','liest','lesen','lest','lesen'],'habe gelesen','Ich habe den Text gelesen.',{person:1,de:'Du liest den Text.',zh:'你读这篇课文。'},'du、er/sie/es 中 e→ie；wir/ihr/Sie 保留 les-。'),
    öffnen:makeVerb('打开','spelling','öffn-',['öffne','öffnest','öffnet','öffnen','öffnet','öffnen'],'habe geöffnet','Ich habe das Geschäft geöffnet.',{person:0,de:'Ich öffne das Geschäft um zehn Uhr.',zh:'我十点开店。'},'词干以难连读的 -ffn 结尾，du/er/ihr 加过渡音 e。'),
    schließen:makeVerb('关闭','vowel','schließ-',['schließe','schließt','schließt','schließen','schließt','schließen'],'habe geschlossen','Ich habe die Tür geschlossen.',{person:3,de:'Wir schließen um achtzehn Uhr.',zh:'我们18点关门。'},'词干已有 ß 音，du 只加 -t；第二分词是不规则 geschlossen。'),
    spielen:makeVerb('玩；进行比赛','regular','spiel-',['spiele','spielst','spielt','spielen','spielt','spielen'],'habe gespielt','Wir haben Fußball gespielt.',{person:2,de:'Das Kind spielt Fußball.',zh:'这个孩子踢足球。'},'标准规则动词。'),
    suchen:makeVerb('寻找','regular','such-',['suche','suchst','sucht','suchen','sucht','suchen'],'habe gesucht','Ich habe ein Geschenk gesucht.',{person:5,de:'Suchen Sie etwas Bestimmtes?',zh:'您在找特定的东西吗？'},'规则动词；suchen + Akkusativ。'),
    schreiben:makeVerb('写','regular','schreib-',['schreibe','schreibst','schreibt','schreiben','schreibt','schreiben'],'habe geschrieben','Ich habe eine E-Mail geschrieben.',{person:2,de:'Er schreibt eine E-Mail.',zh:'他写一封电子邮件。'},'现在时词尾规则；第二分词 geschrieben 不规则。'),
    schlafen:makeVerb('睡觉','vowel','schlaf- → schläf-',['schlafe','schläfst','schläft','schlafen','schlaft','schlafen'],'habe geschlafen','Ich habe acht Stunden geschlafen.',{person:1,de:'Du schläfst acht Stunden.',zh:'你睡八小时。'},'du、er/sie/es 中 a→ä；复数不换音。'),
    essen:makeVerb('吃','vowel','ess- → iss-',['esse','isst','isst','essen','esst','essen'],'habe gegessen','Wir haben zu Mittag gegessen.',{person:1,de:'Du isst zu Mittag.',zh:'你吃午饭。'},'du、er/sie/es 中 e→i；du 形式不是 isstst。'),
    trinken:makeVerb('喝','regular','trink-',['trinke','trinkst','trinkt','trinken','trinkt','trinken'],'habe getrunken','Ich habe Kaffee getrunken.',{person:3,de:'Wir trinken zusammen Kaffee.',zh:'我们一起喝咖啡。'},'现在时规则；第二分词 getrunken 不规则。'),
    treiben:makeVerb('从事；做（运动）','regular','treib-',['treibe','treibst','treibt','treiben','treibt','treiben'],'habe getrieben','Ich habe Sport getrieben.',{person:0,de:'Ich treibe jeden Morgen Sport.',zh:'我每天早晨运动。'},'现在时规则；固定搭配 Sport treiben。'),
    frühstücken:makeVerb('吃早餐','regular','frühstück-',['frühstücke','frühstückst','frühstückt','frühstücken','frühstückt','frühstücken'],'habe gefrühstückt','Ich habe um sieben Uhr gefrühstückt.',{person:0,de:'Ich frühstücke um sieben Uhr.',zh:'我七点吃早餐。'},'规则动词；ü 必须保留。'),
    kennen:makeVerb('认识；熟悉','regular','kenn-',['kenne','kennst','kennt','kennen','kennt','kennen'],'habe gekannt','Ich habe ihn schon lange gekannt.',{person:0,de:'Ich kenne Frau Schmidt.',zh:'我认识施密特女士。'},'现在时规则；过去形式属于混合变化：kannte / gekannt。'),
    stehen:makeVerb('站；处于直立位置','regular','steh-',['stehe','stehst','steht','stehen','steht','stehen'],'habe gestanden','Die Ware hat hier gestanden.',{person:2,de:'Die Kasse steht neben dem Eingang.',zh:'收银台在入口旁边。'},'现在时规则；第二分词 gestanden 不规则。'),
    stellen:makeVerb('放置（使直立）','regular','stell-',['stelle','stellst','stellt','stellen','stellt','stellen'],'habe gestellt','Ich habe die Vase auf den Tisch gestellt.',{person:0,de:'Ich stelle die Vase auf den Tisch.',zh:'我把花瓶放到桌上。'},'规则动词；表示方向时常与 Akkusativ 搭配。'),
    liegen:makeVerb('躺；位于','regular','lieg-',['liege','liegst','liegt','liegen','liegt','liegen'],'habe gelegen','Die Ware hat im Lager gelegen.',{person:2,de:'Die Ware liegt im Lager.',zh:'货物在仓库里。'},'现在时规则；静态位置常用 Dativ。'),
    legen:makeVerb('放置（使平放）','regular','leg-',['lege','legst','legt','legen','legt','legen'],'habe gelegt','Ich habe die Rechnung auf den Tisch gelegt.',{person:0,de:'Ich lege die Rechnung auf den Tisch.',zh:'我把账单放到桌上。'},'规则动词；动作方向常用 Akkusativ。'),
    hängen:makeVerb('悬挂；挂着','regular','häng-',['hänge','hängst','hängt','hängen','hängt','hängen'],'habe gehängt','Ich habe das Schild an die Tür gehängt.',{person:2,de:'Das Schild hängt an der Tür.',zh:'牌子挂在门上。'},'现在时形式相同；静态 hängt 常配 Dativ，悬挂动作常配 Akkusativ。'),
    mieten:makeVerb('租用','spelling','miet-',['miete','mietest','mietet','mieten','mietet','mieten'],'habe gemietet','Wir haben ein Geschäft gemietet.',{person:3,de:'Wir mieten ein kleines Geschäft.',zh:'我们租一间小店。'},'词干以 -t 结尾，du/er/ihr 加过渡音 e。'),
    besichtigen:makeVerb('参观；看房','regular','besichtig-',['besichtige','besichtigst','besichtigt','besichtigen','besichtigt','besichtigen'],'habe besichtigt','Wir haben die Wohnung besichtigt.',{person:3,de:'Wir besichtigen morgen die Wohnung.',zh:'我们明天看房。'},'不可分前缀 be-，第二分词不加 ge-。'),
    reisen:makeVerb('旅行','spelling','reis-',['reise','reist','reist','reisen','reist','reisen'],'bin gereist','Ich bin nach Berlin gereist.',{person:0,de:'Ich reise morgen nach Berlin.',zh:'我明天去柏林旅行。'},'词干以 s 音结尾，du 只加 -t；表示移动时 Perfekt 用 sein。'),
    besuchen:makeVerb('拜访；参观；上课','regular','besuch-',['besuche','besuchst','besucht','besuchen','besucht','besuchen'],'habe besucht','Ich habe eine Vorlesung besucht.',{person:0,de:'Ich besuche heute eine Vorlesung.',zh:'我今天去听一场讲座。'},'不可分前缀 be-，第二分词不加 ge-。'),
    fühlen:makeVerb('感觉；感到','regular','fühl-',['fühle','fühlst','fühlt','fühlen','fühlt','fühlen'],'habe mich gefühlt','Ich habe mich gestern schlecht gefühlt.',{person:0,de:'Ich fühle mich heute besser.',zh:'我今天感觉好些了。'},'常作反身动词 sich fühlen；反身代词随主语变化。'),
    tun:makeVerb('做；使；疼','core','不规则 tu-',['tue','tust','tut','tun','tut','tun'],'habe getan','Was haben Sie getan?',{person:2,de:'Der Rücken tut mir weh.',zh:'我的背疼。'},'高频不规则动词；weh tun 中感受者常用 Dativ。'),
    empfehlen:makeVerb('推荐','vowel','empfehl- → empfiehl-',['empfehle','empfiehlst','empfiehlt','empfehlen','empfehlt','empfehlen'],'habe empfohlen','Ich habe der Kundin dieses Produkt empfohlen.',{person:0,de:'Ich empfehle Ihnen dieses Produkt.',zh:'我向您推荐这件商品。'},'du、er/sie/es 中 e→ie；人用 Dativ，物用 Akkusativ。'),
    gehen:makeVerb('走；去','regular','geh-',['gehe','gehst','geht','gehen','geht','gehen'],'bin gegangen','Ich bin nach Hause gegangen.',{person:0,de:'Ich gehe geradeaus.',zh:'我直走。'},'现在时规则；表示移动时 Perfekt 用 sein，第二分词 gegangen。'),
    abbiegen:makeVerb('转弯','separable','bieg- + ab',['biege ab','biegst ab','biegt ab','biegen ab','biegt ab','biegen ab'],'bin abgebogen','Ich bin links abgebogen.',{person:5,form:'biegen',cloze:'Sie ___ an der Kreuzung links ab.',de:'Sie biegen an der Kreuzung links ab.',zh:'您在路口向左转。'},'可分前缀 ab- 到句末；Perfekt 为 abgebogen。'),
    einsteigen:makeVerb('上车','separable','steig- + ein',['steige ein','steigst ein','steigt ein','steigen ein','steigt ein','steigen ein'],'bin eingestiegen','Ich bin am Hauptbahnhof eingestiegen.',{person:5,form:'steigen',cloze:'Sie ___ am Hauptbahnhof ein.',de:'Sie steigen am Hauptbahnhof ein.',zh:'您在中央车站上车。'},'可分前缀 ein- 到句末；移动用 sein。'),
    aussteigen:makeVerb('下车','separable','steig- + aus',['steige aus','steigst aus','steigt aus','steigen aus','steigt aus','steigen aus'],'bin ausgestiegen','Ich bin am Postplatz ausgestiegen.',{person:5,form:'steigen',cloze:'Sie ___ am Postplatz aus.',de:'Sie steigen am Postplatz aus.',zh:'您在邮政广场下车。'},'可分前缀 aus- 到句末；移动用 sein。'),
    umsteigen:makeVerb('换乘','separable','steig- + um',['steige um','steigst um','steigt um','steigen um','steigt um','steigen um'],'bin umgestiegen','Ich bin am Bahnhof umgestiegen.',{person:5,form:'steigen',cloze:'Sie ___ am Bahnhof um.',de:'Sie steigen am Bahnhof um.',zh:'您在火车站换乘。'},'可分前缀 um- 到句末；移动用 sein。'),
    ankommen:makeVerb('到达','separable','komm- + an',['komme an','kommst an','kommt an','kommen an','kommt an','kommen an'],'bin angekommen','Die Lieferung ist gestern angekommen.',{person:2,form:'kommt',cloze:'Die Lieferung ___ morgen an.',de:'Die Lieferung kommt morgen an.',zh:'货物明天到。'},'可分前缀 an- 到句末；Perfekt 用 sein：angekommen。'),
    aussehen:makeVerb('看起来；外貌是','separable','seh- → sieh- + aus',['sehe aus','siehst aus','sieht aus','sehen aus','seht aus','sehen aus'],'habe ausgesehen','Das Schaufenster hat schön ausgesehen.',{person:2,form:'sieht',cloze:'Das Schaufenster ___ modern aus.',de:'Das Schaufenster sieht modern aus.',zh:'橱窗看起来很现代。'},'sehen 的 du/er 发生 e→ie；可分前缀 aus- 到句末。'),
    finden:makeVerb('找到；认为','regular','find-',['finde','findest','findet','finden','findet','finden'],'habe gefunden','Ich habe das Angebot gut gefunden.',{person:0,de:'Ich finde das Angebot interessant.',zh:'我觉得这个商品方案很有趣。'},'词干以 -d 结尾，du/er/ihr 加 e；第二分词 gefunden。'),
    glauben:makeVerb('相信；认为','regular','glaub-',['glaube','glaubst','glaubt','glauben','glaubt','glauben'],'habe geglaubt','Ich habe das geglaubt.',{person:0,de:'Ich glaube, dass das stimmt.',zh:'我认为这是对的。'},'规则动词；dass 从句的变位动词放句末。'),
    meinen:makeVerb('认为；意思是','regular','mein-',['meine','meinst','meint','meinen','meint','meinen'],'habe gemeint','Ich habe das anders gemeint.',{person:1,de:'Was meinst du?',zh:'你是什么意思？'},'规则动词；注意不要与 mein（我的）混淆。'),
    wissen:makeVerb('知道','core','完全不规则',['weiß','weißt','weiß','wissen','wisst','wissen'],'habe gewusst','Ich habe das nicht gewusst.',{person:0,de:'Ich weiß die Antwort.',zh:'我知道答案。'},'单数词干 weiß-，复数回到 wiss-；必须整排记。'),
    dürfen:makeVerb('可以；获准','modal','dürf- → darf-',['darf','darfst','darf','dürfen','dürft','dürfen'],'durfte','Ich durfte das Geschäft früher öffnen.',{person:0,de:'Darf ich Ihnen helfen?',zh:'我可以帮助您吗？'},'情态动词：单数换词干，另一个动词原形放句末。'),
    wollen:makeVerb('想要；打算','modal','woll- → will-',['will','willst','will','wollen','wollt','wollen'],'wollte','Ich wollte die Ware bestellen.',{person:3,de:'Wir wollen morgen bestellen.',zh:'我们打算明天下单。'},'单数使用 will-；对顾客直接用 wollen 可能生硬，礼貌请求优先 möchten。'),
    sollen:makeVerb('应该；据说','modal','soll-',['soll','sollst','soll','sollen','sollt','sollen'],'sollte','Ich sollte den Lieferanten anrufen.',{person:0,de:'Ich soll den Lieferanten anrufen.',zh:'我应该给供应商打电话。'},'ich/er 无额外词尾；另一个动词原形放句末。'),
    mögen:makeVerb('喜欢','modal','mög- → mag-',['mag','magst','mag','mögen','mögt','mögen'],'mochte','Ich mochte dieses Design.',{person:0,de:'Ich mag dieses Design.',zh:'我喜欢这个设计。'},'单数换为 mag-；礼貌愿望通常使用 möchte。'),
    erzählen:makeVerb('讲述','regular','erzähl-',['erzähle','erzählst','erzählt','erzählen','erzählt','erzählen'],'habe erzählt','Ich habe von Dresden erzählt.',{person:0,de:'Ich erzähle von unserem Geschäft.',zh:'我介绍我们的店。'},'不可分前缀 er-，第二分词不加 ge-：erzählt。'),
    verstehen:makeVerb('理解','regular','versteh-',['verstehe','verstehst','versteht','verstehen','versteht','verstehen'],'habe verstanden','Ich habe die Frage verstanden.',{person:0,de:'Ich verstehe die Frage.',zh:'我理解这个问题。'},'现在时规则；不可分前缀 ver-，第二分词 verstanden。'),
    vergleichen:makeVerb('比较','regular','vergleich-',['vergleiche','vergleichst','vergleicht','vergleichen','vergleicht','vergleichen'],'habe verglichen','Ich habe die Preise verglichen.',{person:3,de:'Wir vergleichen die Preise.',zh:'我们比较价格。'},'现在时规则；第二分词 verglichen。'),
    beschreiben:makeVerb('描述','regular','beschreib-',['beschreibe','beschreibst','beschreibt','beschreiben','beschreibt','beschreiben'],'habe beschrieben','Ich habe das Produkt beschrieben.',{person:0,de:'Ich beschreibe das Produkt genau.',zh:'我准确描述这件商品。'},'现在时规则；不可分前缀 be-，第二分词 beschrieben。'),
    fotografieren:makeVerb('拍照','regular','fotografier-',['fotografiere','fotografierst','fotografiert','fotografieren','fotografiert','fotografieren'],'habe fotografiert','Ich habe das Produkt fotografiert.',{person:0,de:'Ich fotografiere das Produkt.',zh:'我给商品拍照。'},'-ieren 动词第二分词不加 ge-。'),
    unterschreiben:makeVerb('签字','regular','unterschreib-',['unterschreibe','unterschreibst','unterschreibt','unterschreiben','unterschreibt','unterschreiben'],'habe unterschrieben','Ich habe den Vertrag unterschrieben.',{person:0,de:'Ich unterschreibe den Vertrag.',zh:'我签合同。'},'不可分前缀 unter- 在此不分；第二分词 unterschrieben。'),
    teilnehmen:makeVerb('参加','separable','nehm- → nimm- + teil',['nehme teil','nimmst teil','nimmt teil','nehmen teil','nehmt teil','nehmen teil'],'habe teilgenommen','Ich habe an der Besprechung teilgenommen.',{person:0,form:'nehme',cloze:'Ich ___ an der Besprechung teil.',de:'Ich nehme an der Besprechung teil.',zh:'我参加会议。'},'可分动词；teilnehmen an + Dativ；du/er 使用 nimm-。'),
    anmelden:makeVerb('报名；登记','separable','meld- + an',['melde an','meldest an','meldet an','melden an','meldet an','melden an'],'habe angemeldet','Ich habe mich für den Kurs angemeldet.',{person:0,form:'melde',cloze:'Ich ___ mich für den Kurs an.',de:'Ich melde mich für den Kurs an.',zh:'我报名参加课程。'},'词干以 -d 结尾需过渡音 e；常作反身动词 sich anmelden。'),
    feiern:makeVerb('庆祝','regular','feier-',['feiere','feierst','feiert','feiern','feiert','feiern'],'habe gefeiert','Wir haben Weihnachten gefeiert.',{person:3,de:'Wir feiern heute zusammen.',zh:'我们今天一起庆祝。'},'-ern 类似形式，ich 使用 feiere。'),
    wünschen:makeVerb('祝愿；希望','regular','wünsch-',['wünsche','wünschst','wünscht','wünschen','wünscht','wünschen'],'habe gewünscht','Ich habe Ihnen alles Gute gewünscht.',{person:0,de:'Ich wünsche Ihnen alles Gute.',zh:'我祝您一切顺利。'},'规则动词；接受祝愿的人用 Dativ。')
  });

  window.DEUTSCH_ARTICLE_REFERENCE=Object.freeze({
    cases:Object.freeze([
      Object.freeze({key:'N',name:'第一格 Nominativ',question:'wer / was?',use:'主语；表语名词',example:'Der Kunde sucht ein Geschenk.'}),
      Object.freeze({key:'A',name:'第四格 Akkusativ',question:'wen / was?',use:'直接宾语；部分介词后',example:'Ich sehe den Kunden.'}),
      Object.freeze({key:'D',name:'第三格 Dativ',question:'wem?',use:'间接宾语；mit、zu、aus 等介词后',example:'Ich helfe dem Kunden.'}),
      Object.freeze({key:'G',name:'第二格 Genitiv',question:'wessen?',use:'所属关系；A1 后期了解',example:'Das ist die Bestellung des Kunden.'})
    ]),
    headers:Object.freeze(['格','阳性 der','阴性 die','中性 das','复数']),
    definite:Object.freeze([
      ['N','der','die','das','die'],['A','den','die','das','die'],['D','dem','der','dem','den + 名词-n'],['G','des + 名词-s/es','der','des + 名词-s/es','der']
    ]),
    indefinite:Object.freeze([
      ['N','ein','eine','ein','—'],['A','einen','eine','ein','—'],['D','einem','einer','einem','—'],['G','eines','einer','eines','—']
    ]),
    negative:Object.freeze([
      ['N','kein','keine','kein','keine'],['A','keinen','keine','kein','keine'],['D','keinem','keiner','keinem','keinen + 名词-n'],['G','keines','keiner','keines','keiner']
    ]),
    notes:Object.freeze([
      '冠词不按现在时、过去时变化；它只按格、性别和单复数变化。',
      '不定冠词 ein 没有复数；否定词 kein 和物主冠词 mein/dein/sein/ihr/unser/euer/Ihr 按 ein 的词尾变化。',
      '只有阳性第四格最早出现明显变化：der/ein → den/einen。第三格复数通常还要给名词补 -n。'
    ])
  });

  const lessonVerbs=[
    ['buchstabieren','heißen','sprechen'],['buchstabieren','sprechen','lesen','hören'],
    ['heißen','kommen','wohnen','sein'],['lernen','studieren','arbeiten','machen','lesen','sprechen','sein'],
    ['aufstehen','anfangen','frühstücken','essen','treiben','fahren'],['haben','schlafen','essen','sprechen','fahren','schreiben'],
    ['haben','sein','arbeiten','wohnen','spielen'],['haben','sein','kennen','suchen','finden'],
    ['möchten','nehmen','essen','trinken','kosten'],['geben','helfen','bezahlen','bestellen','empfehlen'],
    ['wohnen','kosten','mieten','besichtigen'],['stellen','stehen','legen','liegen','hängen'],
    ['suchen','kaufen','nehmen','passen'],['anprobieren','zurückgeben','umtauschen','verpacken'],
    ['fahren','reisen','besuchen','machen'],['fahren','reisen','besuchen','trinken','essen'],
    ['fühlen','tun','brauchen','dürfen'],['geben','helfen','nehmen','empfehlen'],
    ['gehen','fahren','abbiegen'],['einsteigen','aussteigen','umsteigen','ankommen'],
    ['aussehen','sein','haben','finden'],['finden','gefallen','glauben','meinen'],
    ['liegen','grenzen','vergleichen','sein'],['wohnen','sprechen','heißen','kommen'],
    ['finden','glauben','meinen','wissen'],['verstehen','erzählen','denken','meinen'],
    ['sein','haben','werden','erzählen'],['erzählen','geschehen','beginnen','enden'],
    ['reisen','besuchen','beschreiben','fotografieren'],['liegen','heißen','beschreiben','empfehlen'],
    ['werden','öffnen','speichern','drucken'],['benutzen','herunterladen','schicken','lesen'],
    ['arbeiten','suchen','bewerben','verdienen'],['wollen','sollen','dürfen','werden'],
    ['studieren','teilnehmen','anmelden','bestehen'],['planen','wünschen','können','müssen'],
    ['feiern','schenken','einladen','wünschen'],['feiern','öffnen','schließen','werden'],
    ['wünschen','hoffen','können','werden'],['wünschen','haben','sein','werden']
  ];
  const lessonRules=[
    ['phonetics'],['phonetics'],['present','core','articleN'],['present','spelling','articleN','imperative'],
    ['present','separable','wordOrder'],['present','vowel','articleA','numbers'],['present','possessive'],['core','negation','possessive'],
    ['modal','articleA'],['articleD','articleA','imperative'],['present','articleD'],['twoWay','articleD','articleA'],
    ['demonstrative','articleA'],['articles','adjective'],['perfect','separable'],['perfect'],
    ['reflexive','modal'],['articleD','articleA','doubleObject'],['imperative','articleD'],['separable','articleD'],
    ['adjective','comparison'],['subordinate','adjective'],['comparison','articles'],['twoWay','articles'],
    ['subordinate','present'],['zuInfinitive','negation'],['preterite','pluperfect'],['subordinate','preterite'],
    ['relative','articles'],['relative','articleD','articleA'],['passive','perfect'],['passive','preterite'],
    ['zuInfinitive','subordinate'],['subjunctive','modal'],['prepositions','perfect'],['subjunctive','subordinate'],
    ['pronounAdverb','articleD','articleA'],['passive','articles'],['subjunctive','future'],['subjunctive','future','core']
  ];
  const articleLabels={articleN:'第一格冠词',articleA:'第四格冠词',articleD:'第三格冠词',articles:'冠词四格',possessive:'物主冠词',demonstrative:'dieser/welcher',twoWay:'双向介词与格',doubleObject:'第三格+第四格双宾语',adjective:'形容词词尾'};
  window.DEUTSCH_COURSE_GRAMMAR_TRACKER=Object.freeze((window.DEUTSCH_COURSE_40||[]).map((row,index)=>{
    const [level,lesson,unit,half,duration,title,grammar,focus]=row;
    const rules=lessonRules[index]||[];
    return Object.freeze({
      page:index+1,level,lesson,unit,half,duration,title,grammar,focus,
      videoPart:index+2,
      videoTitle:`${index+1}.【课时${index+1}】第${unit}课${half}`,
      verbs:Object.freeze(lessonVerbs[index]||[]),
      rules:Object.freeze(rules),
      articleTopics:Object.freeze(rules.filter(rule=>articleLabels[rule]).map(rule=>articleLabels[rule])),
      textbookVerified:true,
      videoPartVerified:true,
      videoTranscriptVerified:false
    });
  }));
})();
