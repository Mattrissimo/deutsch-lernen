/*
 * 《新编大学德语》第2册逐课复习资料。
 * A2 两个完整视频课对应一个教材单元；课文和阅读按教材顺序整理。
 */
(function(){
  const line=(de,zh='')=>({de,zh});
  const passage=(kind,title,pages,summary,rows)=>({title,pages,kind,summary,lines:rows.map(row=>Array.isArray(row)?line(row[0],row[1]||''):line(row))});
  const dialogue=(title,pages,summary,rows)=>passage('dialogue',title,pages,summary,rows);
  const article=(title,pages,summary,rows)=>passage('article',title,pages,summary,rows);
  const lesson=(title,pages,overview,knowledge,passages)=>({title,pages,overview,knowledge,passages});

  const lessons={
    21:lesson('Einheit 1 · Aussehen und Persönlichkeit（上）','教材第12–23页；学习指南第6–17页','通过三位教师的学生评价学习外貌、性格和教学特点，避免只背孤立形容词。',[
      '人物描述分两条线：Aussehen（外貌）与 Persönlichkeit（性格）；形容词作表语时不加词尾。',
      '形容词放在名词前时必须结合冠词、性别、格数和单复数选择词尾。',
      '不定冠词、物主冠词和 kein 后采用混合变化：ein guter Lehrer, eine gute Lehrerin, ein gutes Beispiel。',
      '人物评价常用 weil 说明理由；从句的变位动词放在句末。',
      '描述老师要把特点与具体行为连起来：geduldig sein → etwas noch einmal erklären。'
    ],[
      article('Text · Ich habe gerne Unterricht bei …','教材第12–13页','三组学生用具体课堂行为评价自己喜欢的老师。',[
        ['Die Schüler einer deutschen Schule sprechen über ihre Lieblingslehrer.','一所德国学校的学生谈论自己最喜欢的老师。'],
        ['Frau Maier kann alles so einfach erklären, dass jeder Schüler es schon beim ersten Mal verstehen kann.','迈尔老师能把一切讲得很简单，学生第一次就能听懂。'],
        ['Wir haben gerne Unterricht bei ihr, weil sie nicht so viele Hausaufgaben aufgibt.','我们喜欢上她的课，因为她布置的作业不多。'],
        ['Sie ist geduldig und hilft gerne, wenn ein Schüler nicht mitkommt.','她很有耐心，学生跟不上时她愿意帮助。'],
        ['Herr Koch gibt zwar viele Hausaufgaben auf, aber er kann Mathe super erklären.','科赫老师虽然作业布置得多，但数学讲得特别好。'],
        ['Wenn wir ein neues Thema anfangen, gibt er immer gute Beispiele und einfache Erklärungen.','开始新主题时，他总会给出好例子和简单说明。'],
        ['Frau Zimmermann ist nett, freundlich und gerecht; ihr Unterricht wird nie langweilig.','齐默尔曼老师亲切、友好且公正，她的课从不无聊。'],
        ['Vor den Ferien bringt sie der Klasse immer Eis mit.','放假前她总会给全班带冰淇淋。']
      ])
    ]),
    22:lesson('Einheit 1 · Aussehen und Persönlichkeit（下）','教材第24–31页；学习指南第18–22页','把外貌、性格、理由和条件组织成完整人物介绍。',[
      '零冠词形容词变化直接承担性别和格的信息：heißer Kaffee, warme Milch, kaltes Wasser, gute Noten。',
      'weil 引出真实原因：Ich mag sie, weil sie geduldig ist；动词 ist 在从句末。',
      'wenn 可表示条件或反复发生的时间：Wenn man nicht hübsch ist, ist es auch nicht schlimm。',
      'wenn 从句在前时，整个从句占主句第一位，主句变位动词紧接在后。',
      '描述身体和外貌常用 mit + Dativ：ein Junge mit braunen Haaren。'
    ],[
      article('Leseverstehen · Es ist auch nicht so schlimm, wenn …','教材第25–26页','Manfred 和 Hanna 分别介绍外貌、性格及自己对“好看”的态度。',[
        ['Ich heiße Manfred Kohl, bin 19 Jahre alt, 1,70 Meter groß und wiege 70 Kilo.','我叫曼弗雷德·科尔，19岁，身高1.70米，体重70公斤。'],
        ['Ich finde es nicht wichtig, ob man schlank ist und gut aussieht.','我认为一个人是否苗条、好看并不重要。'],
        ['Wenn man nicht hübsch ist, ist es auch nicht so schlimm.','不漂亮也没有那么糟。'],
        ['Ich bin fröhlich und offen, nehme mir gerne Zeit für andere und habe viele Freunde.','我开朗坦率，愿意为别人花时间，也有很多朋友。'],
        ['Mein Name ist Hanna Lehmann. Ich bin 17 Jahre alt, braunhaarig und habe blaue Augen.','我叫汉娜·莱曼，17岁，棕色头发、蓝色眼睛。'],
        ['Ich esse alles und nehme nicht zu. Ich bin sportlich und treibe gerne Sport.','我什么都吃却不会变胖；我喜欢运动。'],
        ['Ein Mädchen soll nicht nur eine schöne Figur, sondern auch einen intelligenten Kopf, ein warmes Herz und einen guten Charakter haben.','一个女孩不只要身材好，也应聪明、热心且性格好。']
      ])
    ]),
    23:lesson('Einheit 2 · Deutschland und Europa（上）','教材第34–45页；学习指南第23–30页','用德国的地理、地形、气候和人口材料学习比较表达。',[
      '德国位于欧洲中部，由16个联邦州组成，并有9个邻国。',
      '比较级通常加 -er，最高级用 am …-sten；gut → besser → am besten 等形式需单独记。',
      '比较相同用 so … wie，不同用比较级 + als：kleiner als, so groß wie。',
      '地理专名通常不用冠词，但 die Schweiz、die Türkei 等固定带冠词。',
      '数据表达要连单位一起读：357 000 Quadratkilometer, 2 963 Meter hoch。'
    ],[
      article('Text · In der Mitte Europas','教材第34–35页','从国土、地形、气候和人口四方面介绍德国。',[
        ['Die Bundesrepublik Deutschland ist ein Bundesstaat und besteht aus 16 Bundesländern.','德意志联邦共和国是联邦制国家，由16个联邦州组成。'],
        ['Deutschland liegt in der Mitte Europas und hat neun Nachbarländer.','德国位于欧洲中部，有9个邻国。'],
        ['Im Vergleich zu Russland, Frankreich und Spanien ist Deutschland ein kleineres Land.','与俄罗斯、法国和西班牙相比，德国国土较小。'],
        ['Die Zugspitze ist der höchste Berg und der Bodensee der größte See Deutschlands.','楚格峰是德国最高峰，博登湖是德国最大的湖。'],
        ['Der Rhein, die Elbe und die Donau sind die drei größten Flüsse in Deutschland.','莱茵河、易北河和多瑙河是德国三条最大的河流。'],
        ['Der kälteste Monat ist der Januar, der wärmste der Juli.','最冷的月份是一月，最暖的是七月。'],
        ['In Deutschland leben etwa 82,5 Millionen Menschen.','德国约有8250万人口。']
      ])
    ]),
    24:lesson('Einheit 2 · Deutschland und Europa（下）','教材第46–57页；学习指南第31–35页','通过瑞士的语言和城市数据继续比较，并学习第一将来时。',[
      '瑞士有德语、法语、意大利语和罗曼什语四种官方语言。',
      'Futur I = werden 的现在时 + 句末不定式：Ich werde morgen arbeiten。',
      '有明确将来时间时，德语常直接用现在时；Futur I 更强调预测、计划或推测。',
      '序数和排名表达：die zweitgrößte Stadt；形容词仍需按名词形式变尾。',
      '百分比和人口数据要分清单复数：64 Prozent der Bevölkerung sprechen Deutsch。'
    ],[
      article('Leseverstehen · Die Schweiz','教材第47–49页','介绍瑞士的位置、多语言、城市、山地和旅游。',[
        ['Die Schweiz ist ein Bundesstaat in Mitteleuropa.','瑞士是位于中欧的联邦国家。'],
        ['Die Schweiz hat vier offizielle Sprachen: Deutsch, Französisch, Italienisch und Rätoromanisch.','瑞士有德语、法语、意大利语和罗曼什语四种官方语言。'],
        ['Auf einer Zugfahrt durch die Schweiz kann die Sprache zwei-, drei- oder sogar viermal wechseln.','乘火车穿越瑞士时，所用语言可能变化两次、三次甚至四次。'],
        ['Alle offiziellen Dokumente bekommt man in seiner Muttersprache.','所有官方文件都可以用自己的母语获得。'],
        ['Zürich ist die größte Stadt, Bern ist die Hauptstadt.','苏黎世是最大城市，伯尔尼是首都。'],
        ['Fast die Hälfte des Landes liegt höher als 1 200 Meter.','瑞士近一半国土海拔超过1200米。'],
        ['Die Schweizer Alpen sind ein beliebter Erholungsort für Menschen aus aller Welt.','瑞士阿尔卑斯山是世界各地游客喜爱的度假地。']
      ])
    ]),
    25:lesson('Einheit 3 · Deutsche und Ausländer（上）','教材第60–71页；学习指南第36–47页','比较外国学生对德国人的观察，区分个人经历与刻板印象。',[
      '评价群体时使用“来源 + 具体经历 + 限定语”，不要把个别经历写成绝对规律。',
      '带 zu 不定式可依附于动词、名词或形容词：versuchen, Lust haben, es ist wichtig。',
      '可分动词的 zu 放在前缀和词干之间：kennenzulernen, zurückzugehen。',
      '完成时不定式表示更早完成：die Prüfung bestanden zu haben。',
      '表达目的时先判断主语是否相同，再选择 um … zu 或 damit。'
    ],[
      article('Text · Sind alle Deutschen so?','教材第60–61页','四名外国学生从守时、性别观念、聚会和偏见谈自己的德国经历。',[
        ['Mir ist aufgefallen, dass die Deutschen sehr sauber, ordentlich und pünktlich sind.','我注意到德国人很整洁、守秩序而且守时。'],
        ['Wenn Sie eine Verabredung mit Deutschen haben, verspäten Sie sich nie mehr als fünf Minuten.','和德国人约好时，千万不要迟到超过五分钟。'],
        ['Deutsche Mädchen bestehen auf ihrer Gleichberechtigung und interessieren sich für Politik.','德国女孩坚持平等权利，也关心政治。'],
        ['Auf deutschen Partys wird oft Bier getrunken; diese Beobachtung ist aber eine persönliche Erfahrung.','德国聚会上常喝啤酒，但这只是个人经历。'],
        ['Manche Deutsche meinen, dass Ausländer ihnen die Arbeit weggenommen haben.','有些德国人认为外国人抢走了他们的工作。'],
        ['Warum versuchen die Deutschen nicht, uns besser kennenzulernen?','为什么德国人不试着更深入地了解我们呢？'],
        ['Der Text zeigt unterschiedliche Stimmen und keine allgemeingültige Wahrheit.','课文呈现的是不同声音，并非普遍真理。']
      ])
    ]),
    26:lesson('Einheit 3 · Deutsche und Ausländer（下）','教材第72–79页；学习指南第48–52页','用调查中的不同意见练习目的句和跨文化观点表达。',[
      'damit 引出有独立主语的目的从句，变位动词置末。',
      'um … zu 用于主句和目的部分主语相同：Er lernt Deutsch, um in Deutschland zu studieren。',
      'nicht nur … sondern auch、zwar … aber 用于并列对照，语义比单纯 aber 更清楚。',
      '介词支配要和词组一起记：beitragen zu + D, sich interessieren für + A, erfahren von/über。',
      '回答文化话题时区分 Tatsache、Meinung 和 Vorurteil。'
    ],[
      article('Leseverstehen · Deutsche über Ausländer','教材第71–72页','报刊调查中三名德国受访者表达正反两面的看法。',[
        ['In Deutschland lebten zur Zeit der Erhebung etwa 7,3 Millionen Ausländerinnen und Ausländer.','调查时德国约有730万外国人。'],
        ['Katharina wohnt mit einer Studentin aus Spanien zusammen und kommt gut mit ihr aus.','卡塔琳娜与一名西班牙学生合住，两人相处很好。'],
        ['Sie hat vor, mit ihrer Mitbewohnerin eine Reise nach Berlin zu machen.','她计划和室友一起去柏林旅行。'],
        ['Inge meint, es gebe zu viele Ausländer und dadurch entstünden Konflikte.','英格认为外国人太多，并因此产生冲突。'],
        ['Stephan findet die vielen Nationalitäten positiv, weil die Gesellschaft dadurch internationaler wird.','施特凡认为多种国籍是好事，因为社会因此更国际化。'],
        ['Ausländer haben zur Entwicklung Deutschlands viel beigetragen.','外国人为德国的发展作出了许多贡献。']
      ])
    ]),
    27:lesson('Einheit 4 · Märchen und Geschichten（上）','教材第82–93页；学习指南第53–64页','通过《狼和七只小山羊》建立过去时叙事框架。',[
      '规则动词过去时：词干 + -te；人称词尾接在 -te 后。',
      '不规则动词过去时常换元音：geben → gab, kommen → kam, finden → fand。',
      '情态动词过去时常见于叙事：musste, durfte, sollte, wollte。',
      '过去完成时 = hatte/war + Partizip II，用来标记“过去之前已经发生”。',
      '故事复述先抓人物、地点、冲突、转折和结局，再补时间连接词。'
    ],[
      article('Text · Der Wolf und die sieben Geißlein','教材第82–83页','童话全文主线：识破狼、受骗开门、母羊救出孩子。',[
        ['Vor vielen Jahren hatte eine alte Geiß sieben junge Geißlein.','很久以前，一只老山羊有七只小山羊。'],
        ['Bevor die Mutter in den Wald ging, warnte sie die Kinder vor dem Wolf.','母羊去森林前警告孩子们提防狼。'],
        ['Die Geißlein erkannten den Wolf zuerst an seiner groben Stimme und dann an seinen schwarzen Füßen.','小山羊先从粗哑声音、后从黑脚认出了狼。'],
        ['Der Wolf fraß Kreide und steckte seine Füße in Mehl, damit Stimme und Füße wie die der Mutter wirkten.','狼吃了粉笔、把脚伸进面粉，让声音和脚像母羊。'],
        ['Als die Geißlein die weißen Füße sahen, öffneten sie die Tür.','小山羊看到白脚后打开了门。'],
        ['Der Wolf fraß sechs Geißlein; nur das jüngste blieb im Uhrenkasten versteckt.','狼吃掉了六只，只有最小的一只躲在钟柜里。'],
        ['Die Mutter schnitt den Bauch des schlafenden Wolfs auf und rettete ihre Kinder.','母羊剖开熟睡的狼的肚子，救出了孩子们。'],
        ['Sie legten Steine in den Wolfsbauch; am Brunnen fiel der Wolf ins Wasser und ertrank.','他们在狼肚子里放进石头；狼到井边时掉入水中淹死了。']
      ])
    ]),
    28:lesson('Einheit 4 · Märchen und Geschichten（下）','教材第94–105页；学习指南第65–69页','用海力布故事练习过去事件的先后关系。',[
      'als 表示过去一次性事件；wenn 表示重复发生、现在/将来条件。',
      'nachdem 从句中的动作先发生，主句动作后发生；过去叙事常搭配过去完成时。',
      'bis 表示动作持续到某个界限；从句动词仍置末。',
      '叙事连接词：eines Tages, danach, schließlich, von da an, am nächsten Tag。',
      '复述时保持时态统一，人物话语可改为间接内容从句。'
    ],[
      article('Leseverstehen · Der Jäger Hailibu','教材第94–95页','蒙古族民间故事：海力布因救人而牺牲并化为石头。',[
        ['Hailibu war ein hilfsbereiter Jäger und teilte seine Beute mit den Menschen im Dorf.','海力布是乐于助人的猎人，会把猎物分给村民。'],
        ['Eines Tages rettete er eine weiße Schlange vor einem Kranich.','一天，他从灰鹤爪下救出一条白蛇。'],
        ['Die Schlange war die Tochter des Drachenkönigs und versprach ihm einen Edelstein.','白蛇是龙王的女儿，答应送他宝石。'],
        ['Mit dem Edelstein konnte Hailibu alle Sprachen der Tiere verstehen.','有了宝石，海力布能听懂所有动物的语言。'],
        ['Er durfte das Geheimnis niemandem erzählen, sonst würde er zu Stein.','他不能把秘密告诉任何人，否则会变成石头。'],
        ['Als er von einer kommenden Überschwemmung hörte, warnte er die Dorfbewohner.','听说洪水将至后，他警告村民。'],
        ['Um alle zu retten, erzählte er das Geheimnis und verwandelte sich sofort in einen Stein.','为了救大家，他说出秘密，立刻化为石头。'],
        ['Die Menschen verließen das Dorf und stellten den Stein später auf einen Berggipfel.','人们离开村庄，后来把石头立在山顶纪念他。']
      ])
    ]),
    29:lesson('Einheit 5 · Leute und Städte（上）','教材第108–121页；学习指南第70–79页','用歌德、贝多芬、奔驰及城市介绍学习关系从句。',[
      '关系代词性数由先行词决定，格由它在关系从句中的作用决定。',
      '第一格 der/die/das/die；第四格 den/die/das/die；第三格 dem/der/dem/denen。',
      '关系从句用逗号隔开，变位动词置末。',
      '介词放在关系代词前：die Stadt, in der …；der Freund, mit dem …。',
      '人物生平常用 am + 日期、im Jahr、seit + D、mit + 年龄。'
    ],[
      article('Text · Berühmte Deutsche und ihre Städte','教材第108–110页','人物与城市成对出现：歌德—法兰克福、贝多芬—波恩、奔驰—斯图加特。',[
        ['Goethe wurde 1749 in Frankfurt am Main geboren und verbrachte einen großen Teil seines Lebens in Weimar.','歌德1749年出生于法兰克福，一生很长时间在魏玛度过。'],
        ['Seine Werke „Die Leiden des jungen Werther“ und „Faust“ machten ihn weltberühmt.','《少年维特的烦恼》和《浮士德》使他闻名世界。'],
        ['Frankfurt ist ein internationales Finanzzentrum, in dem viele Banken ihren Sitz haben.','法兰克福是国际金融中心，许多银行总部设在这里。'],
        ['Beethoven erhielt von seinem Vater den ersten Musikunterricht und ging später nach Wien.','贝多芬先从父亲那里接受音乐教育，后来去了维也纳。'],
        ['Obwohl er völlig taub wurde, hinterließ er neun Sinfonien und viele Kompositionen.','尽管后来完全失聪，他仍留下九部交响曲和许多作品。'],
        ['Bonn, wo Beethoven geboren wurde, war bis 1990 Hauptstadt der Bundesrepublik Deutschland.','贝多芬出生地波恩在1990年前是联邦德国首都。'],
        ['Carl Benz baute 1885 das erste Benzinauto; seine Erfindung veränderte die Welt.','卡尔·本茨1885年造出第一辆汽油汽车，这项发明改变了世界。'],
        ['Stuttgart ist eng mit Daimler, Benz, Maybach und Porsche verbunden.','斯图加特与戴姆勒、本茨、迈巴赫和保时捷紧密相连。']
      ])
    ]),
    30:lesson('Einheit 5 · Leute und Städte（下）','教材第122–129页；学习指南第80–85页','用北京城市介绍巩固关系代词和地点关系从句。',[
      'wo 可指地点：Berlin, wo …；正式表达也可用 in dem/in der。',
      '带属格的关系代词 dessen/deren 表“其”：der Mann, dessen Sohn …。',
      '先行词是人还是物不决定格，必须看从句里缺主语、宾语还是介词补语。',
      '介绍城市按“位置—历史—景点—现代特点—个人建议”组织。',
      '景点名词连冠词记：die Große Mauer, die Verbotene Stadt, der Sommerpalast。'
    ],[
      article('Leseverstehen · Beijing','教材第122–125页','从历史景点、胡同和奥运建筑介绍北京。',[
        ['Beijing ist die Hauptstadt Chinas und hat eine über dreitausendjährige Geschichte.','北京是中国首都，拥有三千多年的历史。'],
        ['Zu den bekanntesten Sehenswürdigkeiten gehören die Große Mauer, die Verbotene Stadt und der Sommerpalast.','著名景点包括长城、故宫和颐和园。'],
        ['Der Tian’anmen-Platz bildet das Zentrum der Metropole.','天安门广场构成这座大都市的中心。'],
        ['In historischen Vierteln kann man Hutongs und traditionelle Häuser mit Innenhöfen sehen.','在历史街区可以看到胡同和传统四合院。'],
        ['Das „Vogelnest“ und der „Wasserwürfel“ wurden durch ihre originelle Bauweise zu Architekturdenkmälern.','鸟巢和水立方凭借独特设计成为建筑地标。'],
        ['Es ist faszinierend, modernes Wachstum und dreitausendjährige Geschichte in einer Stadt zu erleben.','在同一座城市感受现代发展与三千年历史十分迷人。']
      ])
    ]),
    31:lesson('Einheit 6 · Computer und Internet（上）','教材第132–145页；学习指南第86–95页','跟随66岁的 Dietrich 学电脑，学习如何客观描述操作和过程。',[
      '过程被动态现在时 = werden + Partizip II：Programme werden installiert。',
      '过去时被动态 = wurden + Partizip II；完成时被动态 = sind + Partizip II + worden。',
      '施事不重要时用被动态；需要说明施事时用 von + Dativ。',
      '电脑操作词按可分形式记：einschalten, ausschalten, herunterladen, ausdrucken。',
      '客观解释先说用途，再说操作步骤和结果。'
    ],[
      article('Text · So habe ich angefangen','教材第132–133页','66岁的 Dietrich 从不会开机到成为朋友眼中的电脑高手。',[
        ['Heute kann mit dem Computer gearbeitet, gezeichnet, geschrieben und nach Informationen gesucht werden.','如今可以用电脑工作、画图、写信和查找信息。'],
        ['Dietrichs Kinder saßen täglich lange vor dem Computer und nutzten das Internet auch für ihre Arbeit.','迪特里希的孩子每天长时间用电脑，也用网络工作。'],
        ['Mit 65 Jahren kaufte er sich einen Computer, obwohl er anfangs nicht einmal wusste, wie man ihn einschaltet.','65岁时他买了电脑，起初甚至不知道怎样开机。'],
        ['Seine Kinder halfen ihm; Programme wurden installiert und er begann täglich zu üben.','孩子们帮助他安装程序，他开始每天练习。'],
        ['Er lernte, Texte zu bearbeiten, Dateien zu speichern und E-Mails zu schicken.','他学会编辑文本、保存文件和发送邮件。'],
        ['Später bestellte er Bücher im Internet, rief Sportergebnisse ab und druckte Bilder aus.','后来他上网买书、查询比赛结果并打印图片。'],
        ['Inzwischen fragen ihn seine Freunde um Rat, wenn sie Computerprobleme haben.','如今朋友遇到电脑问题时会向他求助。'],
        ['Seine Kinder sind stolz auf ihn.','他的孩子们为他感到骄傲。']
      ])
    ]),
    32:lesson('Einheit 6 · Computer und Internet（下）','教材第146–155页；学习指南第96–103页','用电子书文章巩固被动态并比较纸书与数字阅读。',[
      '状态被动态 sein + Partizip II 描述结果状态，与过程被动态 werden + Partizip II 区分。',
      '被动态中原第四格宾语成为第一格主语，原第三格宾语保持不变。',
      '带情态动词时：Das Buch kann gelesen werden；两个非限定成分放句末。',
      '科技比较要说明优点、限制和适用人群，不只给“好/坏”结论。',
      '固定搭配：Konkurrenz machen + D, ausgestattet sein mit + D, suchen nach + D。'
    ],[
      article('Leseverstehen · Elektronische Bücher','教材第147–148页','介绍电子书市场、科研用途、阅读设备和未来发展。',[
        ['E-Books machen den gedruckten Büchern zunehmend Konkurrenz.','电子书正越来越多地与纸质书竞争。'],
        ['Besonders gefragt sind elektronische Bücher bei jungen Menschen.','电子书尤其受到年轻人欢迎。'],
        ['Elektronische Fachbücher können günstiger angeboten und leichter durchsucht werden.','电子专业书可以更便宜，也更容易检索。'],
        ['Wie in einem Word-Dokument kann nach Stichwörtern gesucht werden.','可以像在Word文档中一样搜索关键词。'],
        ['Zum Lesen sind spezielle Geräte nötig, die mit digitalem Speicher ausgestattet sind.','阅读需要带数字存储的专用设备。'],
        ['Neue Bücher werden auf den Reader überspielt und auf dem Display gelesen.','新书可传到阅读器上并在屏幕中阅读。'],
        ['Ganze Bibliotheken können in die Tasche gepackt werden.','整座图书馆都可以装进口袋。']
      ])
    ]),
    33:lesson('Einheit 7 · Beruf und Arbeit（上）','教材第158–169页；学习指南第104–113页','比较四个人的职业选择和满意度，学习让步与义务表达。',[
      'obwohl 引出让步从句：事实存在，但主句结果与预期相反；动词置末。',
      'haben zu + Infinitiv 表主动义务，近似 müssen；sein zu + Infinitiv 可表必须或可以。',
      'scheinen zu + Infinitiv 表“似乎”：Mehr Freizeit scheint wichtiger zu sein。',
      '职业作表语通常不用冠词：Sie ist Krankenschwester；有定语时可出现冠词。',
      '工作满意度要同时说 Tätigkeit、Arbeitszeit、Kollegen、Einkommen 和 Privatleben。'
    ],[
      article('Text · Sind Sie mit Ihrem Beruf zufrieden?','教材第158–159页','四名受访者解释职业选择与满意或不满意的原因。',[
        ['Tobias wollte Bürokaufmann werden, musste aber die Kfz-Werkstatt seines Vaters übernehmen.','托比亚斯原想做办公室职员，却必须接手父亲的汽车修理厂。'],
        ['Er ist unzufrieden, weil die Arbeit schmutzig und anstrengend ist.','他不满意，因为工作又脏又累。'],
        ['Saskia arbeitet als Krankenschwester und ist trotz Schichtarbeit mit ihrem Beruf zufrieden.','萨斯基娅是护士，尽管轮班，她仍对工作满意。'],
        ['Annika konnte ihren Beruf selbst bestimmen und arbeitet gern als Reiseleiterin.','安妮卡能自主选择职业，喜欢做导游。'],
        ['Obwohl die Reisen anstrengend sind, lernt sie viele Menschen und Orte kennen.','尽管旅行辛苦，她能认识许多人和地方。'],
        ['Markus verdient gut, ist aber wegen der vielen Geschäftsreisen unzufrieden.','马库斯收入不错，却因商务旅行太多而不满意。'],
        ['Er hat kaum Familienleben und möchte die Stelle wechseln.','他几乎没有家庭生活，因此想换工作。'],
        ['Mehr Geld zu haben scheint schön zu sein, aber mehr Freizeit findet er noch schöner.','钱多似乎很好，但他觉得更多闲暇更重要。']
      ])
    ]),
    34:lesson('Einheit 7 · Beruf und Arbeit（下）','教材第170–181页；学习指南第114–120页','通过德国双元制理解 Ausbildung、Betrieb、Berufsschule 和考试。',[
      '双元制由企业实践和职业学校理论两部分组成。',
      'Auszubildende/Azubi、Ausbildungsvertrag、Zwischenprüfung、Abschlussprüfung 是核心制度词。',
      '目的与要求继续使用 zu 结构：eine Lehrstelle zu finden, einen Vertrag zu unterschreiben。',
      'obwohl 与 trotzdem 不同：obwohl 引从句，trotzdem 是主句副词并占第一位。',
      '说明制度时按“条件—流程—时长—考试—优缺点”组织。'
    ],[
      article('Leseverstehen · Das duale Ausbildungssystem in Deutschland','教材第169–170页','介绍双元制职业教育的结构、时长、考试和现实问题。',[
        ['Nach der Schule können junge Leute eine Lehrstelle suchen und einen Ausbildungsvertrag unterschreiben.','年轻人毕业后可以寻找学徒岗位并签培训合同。'],
        ['Die Praxis lernen die Auszubildenden im Betrieb, die Theorie in der Berufsschule.','学员在企业学习实践，在职业学校学习理论。'],
        ['Meist arbeiten sie drei oder vier Tage im Betrieb und besuchen ein oder zwei Tage die Schule.','通常每周三四天在企业工作，一两天上学。'],
        ['Eine Ausbildung dauert bei den meisten Berufen drei bis dreieinhalb Jahre.','多数职业培训持续三到三年半。'],
        ['Nach etwa 18 Monaten findet eine Zwischenprüfung, am Ende die Abschlussprüfung statt.','约18个月后有期中考试，最后有结业考试。'],
        ['Das System bereitet die Menschen gut auf ihren Beruf vor.','这一制度能让人们很好地为职业做准备。'],
        ['Einige Betriebe finden die Ausbildung zu teuer oder können nicht alle Inhalte vermitteln.','一些企业认为培训太贵，或无法教授全部内容。']
      ])
    ]),
    35:lesson('Einheit 8 · Studium und Studierende（上）','教材第180–189页；学习指南第121–128页','学习德国高校制度、学期、学位、费用和住宿。',[
      '结果从句 so …, dass / so dass 表示前因导致的结果，变位动词在从句末。',
      'bevor 表“在……之前”，während 表同时发生，seitdem 表从过去延续至今。',
      'während 还可表对比“而”，需根据两部分是否对照判断。',
      '高校搭配：sich einschreiben, einen Studienplan zusammenstellen, eine Prüfung ablegen。',
      '时间段：vom 1. Oktober bis zum 31. März；日期介词和缩合形式一起记。'
    ],[
      article('Text · Das Studium in Deutschland','教材第180–181页','介绍德国学制改革、学习自主性、学期、学费和住宿。',[
        ['Bachelor- und Masterstudiengänge haben das deutsche Hochschulsystem stark verändert.','学士和硕士学制深刻改变了德国高校体系。'],
        ['Die Studierenden sollen besser betreut werden, so dass sich die Studienzeiten verkürzen.','学生应得到更好指导，从而缩短学习时间。'],
        ['Das Bachelorstudium dauert meistens sechs Semester, das Masterstudium vier.','学士通常六学期，硕士四学期。'],
        ['Bevor das Semester beginnt, stellen die Studierenden ihren Studienplan selbst zusammen.','学期开始前，学生自己制定课程计划。'],
        ['Während der vorlesungsfreien Zeit bereiten sie sich auf Praktika und Prüfungen vor.','无课期间，学生准备实习和考试。'],
        ['In manchen Bundesländern werden Studiengebühren und Semesterbeiträge verlangt.','一些州收取学费和学期杂费。'],
        ['Viele Studierende wohnen im Studentenwohnheim, in einer Mietwohnung oder in einer WG.','很多学生住学生宿舍、租房或合租。']
      ])
    ]),
    36:lesson('Einheit 8 · Studium und Studierende（下）','教材第189–197页；学习指南第129–135页','通过荷兰学生 Alberta 的科隆留学经历复习时间、结果和对比从句。',[
      '先后顺序：bevor + 同时尚未发生；nachdem + 先完成；seitdem + 起点至今。',
      'während 可连接同时动作，也可对比德国和荷兰学制。',
      'so …, dass 结果从句不能与 deshalb 重复堆叠。',
      '留学手续词组：sich einschreiben, Unterkunft finden, Kosten tragen, sich für einen Kurs anmelden。',
      '复盘经历按“决定—手续—困难—收获—现在影响”组织。'
    ],[
      article('Leseverstehen · Eine Niederländerin erzählt','教材第189–190页','Alberta 讲述自己以 Free Mover 身份到科隆学习一学期。',[
        ['Alberta de Vries studierte Betriebswirtschaftslehre an der Universität Amsterdam.','阿尔贝塔·德弗里斯在阿姆斯特丹大学学习企业经济学。'],
        ['Nach einem Gegenbesuch beschloss sie, ein Auslandssemester in Köln zu verbringen.','一次回访后，她决定去科隆交换一学期。'],
        ['Als Free Mover musste sie Formalitäten, Kosten und Aufenthalt selbst organisieren.','作为自由流动学生，她必须自己处理手续、费用和生活。'],
        ['Unterkunft, Einschreibung, Geld und die Anmeldung zum Deutschkurs klappten schließlich.','住宿、注册、资金和德语课报名最终都办妥了。'],
        ['Durch den Aufenthalt lernte sie die deutsche und andere Kulturen besser kennen.','这段经历让她更了解德国和其他文化。'],
        ['Während niederländische Studierende sich früher spezialisieren, ist das deutsche Studium anders aufgebaut.','荷兰学生更早确定专业方向，而德国学制结构不同。'],
        ['Sie bereute ihre Entscheidung nicht und freute sich später auf weitere Reisen nach Deutschland.','她不后悔这个决定，后来仍期待再次去德国。']
      ])
    ]),
    37:lesson('Einheit 9 · Feste und Feiertage（上）','教材第200–211页；学习指南第136–145页','认识 Advent、Weihnachten、Neujahr、Oktoberfest 和 Karneval。',[
      '代副词 da(r)+介词指事物：sich darüber freuen；wo(r)+介词提问：Worauf wartest du?。',
      '指人不用代副词，而用介词 + 人称/疑问代词：auf ihn, auf wen。',
      '无人称被动态：Am Sonntag wird nicht gearbeitet；不需要形式主语 es。',
      '状态被动态 sein + Partizip II：Die Tür ist geöffnet；强调结果状态。',
      '节日日期常用 am，节期常用 zu/zu Weihnachten 或 an Weihnachten，需按固定搭配记。'
    ],[
      article('Text · Feste und Feiertage in Deutschland','教材第200–201页','按时间介绍降临节、圣诞、新年、啤酒节和狂欢节。',[
        ['Vier Sonntage vor Weihnachten beginnt der Advent.','圣诞节前四个星期日开始降临节。'],
        ['An jedem Adventssonntag wird eine weitere Kerze am Adventskranz angezündet.','每个降临节星期日都会再点亮一根花环蜡烛。'],
        ['Am Heiligen Abend versammelt sich die Familie am Weihnachtsbaum, singt und verteilt Geschenke.','平安夜一家人围在圣诞树旁唱歌、送礼物。'],
        ['An Silvester wird getanzt, gesungen und um Mitternacht mit Sekt angestoßen.','除夕人们跳舞唱歌，午夜用起泡酒庆祝。'],
        ['Das Oktoberfest beginnt Mitte September und zieht jedes Jahr Millionen Besucher an.','慕尼黑啤酒节九月中旬开始，每年吸引数百万游客。'],
        ['In den Festzelten werden Bier und bayerische Speisen angeboten.','节庆大棚中供应啤酒和巴伐利亚食物。'],
        ['Der Karneval wird besonders im Rheinland gefeiert; der Rosenmontagszug ist ein Höhepunkt.','狂欢节在莱茵地区尤其隆重，玫瑰星期一游行是高潮。']
      ])
    ]),
    38:lesson('Einheit 9 · Feste und Feiertage（下）','教材第212–219页；学习指南第146–154页','用中国传统节日巩固代副词、无人称被动和状态被动。',[
      '传统活动可用无人称被动态：Am Laternenfest werden Ausstellungen veranstaltet。',
      '状态被动态描述已完成结果：Das Zimmer ist geschmückt。',
      '代副词可接 dass 从句或 zu 不定式：Ich freue mich darauf, die Familie zu sehen。',
      '描述节日按“日期—意义—人物—活动—食物”五项组织。',
      '节日名词与复数需核对：das Fest/die Feste, der Feiertag/die Feiertage, die Laterne/die Laternen。'
    ],[
      article('Leseverstehen · Chinesische traditionelle Feiertage','教材第211–212页','介绍春节、元宵节、端午节和中秋节。',[
        ['Das Frühlingsfest ist das wichtigste chinesische Fest und richtet sich nach dem Mondkalender.','春节是中国最重要的节日，按农历计算。'],
        ['Am Vorabend kommt die Familie zum Festessen zusammen; um Mitternacht werden Knaller angezündet.','除夕全家团聚吃年夜饭，午夜放鞭炮。'],
        ['Am Laternenfest werden Laternenausstellungen veranstaltet und Tangyuan gegessen.','元宵节举办灯展并吃汤圆。'],
        ['Das Drachenbootfest erinnert an den Dichter Qu Yuan; man veranstaltet Rennen und isst Zongzi.','端午节纪念屈原，人们赛龙舟、吃粽子。'],
        ['Am Mondfest betrachtet die Familie den Vollmond und isst Mondkuchen.','中秋节家人赏月、吃月饼。'],
        ['Der runde Mond gilt als Zeichen für das Zusammensein der Familie.','圆月被视为家庭团聚的象征。']
      ])
    ]),
    39:lesson('Einheit 10 · Wünsche und Sorgen（上）','教材第220–233页；学习指南第155–163页','通过火星人 Walli 的来信学习愿望、担忧和第二虚拟式。',[
      'Konjunktiv II 表非现实假设、愿望和委婉建议。',
      '常用强变化形式：sein → wäre, haben → hätte, können → könnte, müssen → müsste。',
      '多数动词口语中用 würde + Infinitiv：Ich würde anders leben。',
      '非现实条件句：Wenn ich … wäre/hätte, würde ich …；wenn 从句动词置末。',
      '担忧词组：Angst haben vor + D, sich Sorgen machen um + A, sich Gedanken machen über + A。'
    ],[
      article('Text · Brief an die Bewohner der Erde','教材第222–223页','火星人 Walli 介绍自己、表达对地球的担忧并提出警告。',[
        ['Walli lebt auf dem Mars und schreibt einen Brief an die Bewohner der Erde.','瓦利用火星居民的身份给地球人写信。'],
        ['Er würde die Erde gern besuchen, fürchtet aber, in ein Labor gebracht oder geklont zu werden.','他想访问地球，却害怕被带进实验室或被克隆。'],
        ['Wenn er diese Ängste nicht hätte, wäre er längst gekommen.','如果没有这些恐惧，他早就来了。'],
        ['Er erinnert an sauberes Wasser, frische Luft, blaue Himmel und grüne Wälder.','他提醒人们地球本有清水、新鲜空气、蓝天和森林。'],
        ['Kriege, Umweltverschmutzung und verantwortungslose Biotechnologie machen ihm Sorgen.','战争、污染和不负责任的生物技术令他担忧。'],
        ['Wenn die Marsbewohner auf der Erde lebten, würden sie friedlich zusammenleben und die Natur schützen.','如果火星人生活在地球，他们会和平共处并保护自然。'],
        ['Walli bittet die Menschen, über den Sinn ihres Handelns nachzudenken.','瓦利请人类思考自身行为的意义。'],
        ['Er warnt: Bitte zerstört euch nicht!','他警告：请不要毁灭自己！']
      ])
    ]),
    40:lesson('Einheit 10 · Wünsche und Sorgen（下）','教材第234–242页；学习指南第164–170页','比较不同人的新年愿望，并把虚拟式用于自己的生活和开店计划。',[
      '规则动词虚拟式II与过去时形式相同，易混时优先用 würde + Infinitiv。',
      '不规则动词常加变音和 -e：kommen → käme, geben → gäbe；高频形式需单独记。',
      '礼貌请求可用 könnten/würden：Könnten Sie mir helfen?。',
      '愿望表达：Ich wünsche mir …；Ich hoffe, dass …；Es wäre schön, wenn …。',
      '现实计划与假设分开：明天确定做什么用现在/将来时，不确定条件用虚拟式。'
    ],[
      article('Leseverstehen · Neujahrswünsche','教材第234–235页','Lena、Sarah、Marko、Roland 和 Natalie 写下不同的新年愿望。',[
        ['Lena wünscht sich einen guten Job, der ihre Existenz und die ihrer Kinder sichert.','莱娜希望得到一份能保障自己和孩子生活的好工作。'],
        ['Sie hofft, ihren Partner zu heiraten und mit der Familie glücklich zusammenzuleben.','她希望和伴侣结婚，让一家人幸福生活。'],
        ['Sarah wünscht sich mehr Freizeit und eine freundlichere, sauberere Welt.','萨拉希望有更多闲暇，也希望世界更友好、更清洁。'],
        ['Marko wünscht sich, dass alle Menschen trotz ihrer Unterschiede friedlich zusammenleben.','马尔科希望不同的人都能和平共处。'],
        ['Roland wünscht seiner Freundin Zeit zum Freuen, Hoffen, Lieben und Leben.','罗兰祝愿女友有时间快乐、希望、爱与生活。'],
        ['Natalie wünscht sich eine normale Familie und eine gute Lehrstelle.','娜塔莉希望拥有正常的家庭和好的培训岗位。'],
        ['Es wäre sehr nett, wenn ihr jemand helfen würde.','如果有人愿意帮助她，那会非常好。']
      ])
    ])
  };

  window.DEUTSCH_TEXTBOOK_REVIEW_A2_V2=Object.freeze({
    version:'2026-08-19',
    book:2,
    courseLevel:'A2',
    coveredLessons:Object.keys(lessons).length,
    totalLessons:20,
    source:'《新编大学德语》第2册 + 配套学习指南',
    lessons:Object.freeze(lessons)
  });
})();
