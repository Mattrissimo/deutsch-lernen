/* 跟课变位手册 UI：依赖主页面已初始化的课程、动词与朗读函数。 */
(function(){
  const tracker=window.DEUTSCH_COURSE_GRAMMAR_TRACKER||[];
  const articles=window.DEUTSCH_ARTICLE_REFERENCE||{};
  const ruleNames={present:'规则现在时',spelling:'拼写例外',vowel:'换音动词',core:'核心不规则',modal:'情态动词',separable:'可分动词',reflexive:'反身动词',perfect:'完成时',preterite:'过去时',pluperfect:'过去完成时',subjunctive:'虚拟式',passive:'被动态',future:'将来时',imperative:'命令式',wordOrder:'语序',subordinate:'从句语序',relative:'关系从句',zuInfinitive:'zu 不定式',prepositions:'介词与格',pronounAdverb:'代副词',phonetics:'语音入门',negation:'否定',articleN:'第一格冠词',articleA:'第四格冠词',articleD:'第三格冠词',articles:'冠词四格',possessive:'物主冠词',demonstrative:'指示/疑问冠词',twoWay:'双向介词与格',doubleObject:'第三格+第四格双宾语',adjective:'形容词词尾',comparison:'比较级'};
  const ruleDetails={
    regular:['原形通常去掉 -en 得词干，再加 -e / -st / -t / -en / -t / -en。','-ieren 仍按现在时规则变位，但第二分词不加 ge-：studiert、fotografiert。','-eln：ich 常省掉词干中的 e，例如 sammeln → ich sammle；-ern：ich wandere。'],
    spelling:['词干以 -d/-t 或 -chn/-ffn/-gn/-tm/-dm 结尾：du、er/sie/es、ihr 前加过渡音 e。','词干以 -s/-ß/-ss/-x/-z/-tz 结尾：du 只加 -t，例如 reisen → du reist。','“是否加 e”是发音和拼写规则，不代表动词不规则。'],
    vowel:['只有 du 和 er/sie/es 常换音：a→ä、e→i 或 e→ie。','ich、wir、ihr、Sie/sie 通常保留词典词干。','换音必须随单词一起记，不能只靠词尾猜。'],
    core:['sein、haben、werden、wissen 等高频词要整排记。','它们同时又是完成时、被动态、将来时或虚拟式的重要助动词。'],
    modal:['现在时单数常换词干；ich 与 er/sie/es 通常没有普通的 -e/-t。','情态动词在第二位，真正动作的原形到句末：Ich muss heute arbeiten.','过去叙述常直接用 Präteritum：konnte、musste、wollte、durfte、sollte。'],
    separable:['现在时只变位动词主体，前缀放到主句末尾。','第二分词通常把 ge 放在前缀与词干之间：aufgestanden、eingeladen。','以 -ieren 结尾仍不加 ge：anprobiert。'],
    reflexive:['反身代词随主语变化：mich / dich / sich / uns / euch / sich。','sich fühlen、sich anmelden、sich bewerben 要把反身代词和动词一起记。','反身代词用 Akkusativ 还是 Dativ 要看句中是否已有另一个第四格宾语。'],
    perfect:['结构是 haben/sein 的现在时 + 第二分词；第二分词通常在句末。','大多数动词用 haben；表示位移或状态变化的一部分不及物动词用 sein。','不可分前缀 be-/ge-/er-/ver-/zer- 与 -ieren 动词的第二分词不加 ge-。'],
    preterite:['A1/A2 先掌握 sein、haben、werden 与情态动词：war、hatte、wurde、konnte。','弱变化动词常用词干 + -te；强变化动词通常换词干，需单独记。'],
    subjunctive:['礼貌请求最常用 könnte、würde、hätte、wäre：Könnten Sie mir helfen?','würde + 原形适合表达假设或委婉愿望，原形放句末。'],
    passive:['过程被动：werden + Partizip II；状态被动：sein + Partizip II。','执行者可用 von + Dativ；不知道执行者时可以省略。'],
    articles:['冠词不随现在时、过去时变化；只随格、性别、单复数变化。','先判断名词性别，再判断它在句中是主语、直接宾语、间接宾语还是所属关系。','最先熟记阳性：der → den → dem → des；ein → einen → einem → eines。']
  };
  const articleLabels={definite:'定冠词 der/die/das',indefinite:'不定冠词 ein/eine',negative:'否定冠词 kein/keine'};
  let articleMode='definite';

  function articleHtml(){
    const rows=articles[articleMode]||[];
    return `<div class="article-reference"><div class="article-reference-tabs">${Object.entries(articleLabels).map(([key,label])=>`<button type="button" data-article-mode="${key}" class="${key===articleMode?'active':''}">${esc(label)}</button>`).join('')}</div><div class="article-table-wrap"><table class="article-table"><thead><tr>${(articles.headers||[]).map(value=>`<th>${esc(value)}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map(value=>`<td lang="de">${esc(value)}</td>`).join('')}</tr>`).join('')}</tbody></table></div><div class="article-case-notes">${(articles.cases||[]).map(item=>`<p class="article-case-note"><strong>${esc(item.name)}：</strong>${esc(item.use)} · 问 ${esc(item.question)}<br><span lang="de">${esc(item.example)}</span></p>`).join('')}</div>${(articles.notes||[]).map(note=>`<p class="hint">${esc(note)}</p>`).join('')}</div>`;
  }
  function enhanceRule(rule){
    const root=document.getElementById('verbRuleLesson'); if(!root)return;
    const list=ruleDetails[rule]||[];
    let details=root.querySelector('#verbRuleDetails');
    if(!details){details=document.createElement('div');details.id='verbRuleDetails';root.appendChild(details);}
    details.innerHTML=`${list.length?`<ul class="verb-rule-detail-list">${list.map(line=>`<li>${esc(line)}</li>`).join('')}</ul>`:''}${rule==='articles'?articleHtml():''}`;
  }
  const originalRuleRender=renderVerbRuleLesson;
  renderVerbRuleLesson=function(rule=activeVerbRule){originalRuleRender(rule);enhanceRule(rule);};

  function statusChip(label,done){return `<span class="source-check ${done?'done':'pending'}">${done?'✓':'△'} ${esc(label)}</span>`;}
  function renderCourseTracker(page=currentCoursePage){
    const select=document.getElementById('conjugationCourseSelect'); if(!select||!tracker.length)return;
    if(select.options.length!==tracker.length)select.innerHTML=tracker.map(item=>`<option value="${item.page}">${item.level} 课时 ${item.lesson} · 第${item.unit}课${item.half} · ${esc(item.title)}</option>`).join('');
    const row=tracker[Math.max(0,Math.min(tracker.length-1,Number(page||1)-1))]; select.value=String(row.page);
    document.getElementById('courseGrammarCurrent').textContent=`${row.level} 课时 ${row.lesson} · 第${row.unit}课${row.half}`;
    document.getElementById('courseGrammarStatus').innerHTML=statusChip('教材语法目录已核对',row.textbookVerified)+statusChip(`视频分P ${row.videoPart} 已对应`,row.videoPartVerified)+statusChip('逐字字幕尚未取得',row.videoTranscriptVerified);
    const ruleList=row.rules.map(key=>ruleNames[key]||key); const articleText=row.articleTopics.length?`<p><strong>本课冠词/格数：</strong>${row.articleTopics.map(esc).join('、')}</p>`:'';
    document.getElementById('courseGrammarFocus').innerHTML=`<h4>${esc(row.title)}</h4><p><strong>教材语法：</strong>${esc(row.grammar)}</p><p><strong>本课重点：</strong>${esc(row.focus)}</p><div class="course-rule-chips"><strong>规则索引：</strong>${ruleList.map(label=>`<span>${esc(label)}</span>`).join('')}</div>${articleText}<p class="source-warning">该视频没有公开字幕：这里严格展示已核对的教材语法目录与视频分P；老师口头补充尚未逐字核实的内容不会冒充已完成。</p>`;
    document.getElementById('courseGrammarVerbs').innerHTML=row.verbs.map(verb=>`<button type="button" data-course-verb="${esc(verb)}" class="${verbConjugationData[verb]?'':'missing'}">${verbConjugationData[verb]?'✓':'△'} ${esc(verb)}</button>`).join('');
  }
  window.renderConjugationCourseTracker=renderCourseTracker;

  function selectCourseVerb(verb){
    const meta=verbConjugationData[verb]; if(!meta){toast(`“${verb}”尚未完成六人称人工校对。`);return;}
    const select=document.getElementById('verbSelect'); select.value=verb;
    activeVerbRule=meta.group; activateVerbRule(meta.group,false); renderVerbReference(); nextVerbQuiz({verb});
    document.querySelector('.verb-reference')?.scrollIntoView({block:'nearest',behavior:'smooth'});
  }
  function regularAnalysis(verb){
    const lower=String(verb||'').trim().toLocaleLowerCase('de-DE');
    if(!/^[a-zäöüß-]+$/u.test(lower)||!/(?:en|n)$/.test(lower))return null;
    const ending=lower.endsWith('en')?'en':'n'; let stem=lower.slice(0,-ending.length); const sibilant=/(?:s|ß|ss|x|z|tz)$/.test(stem); const needsE=/(?:d|t|chn|ffn|gn|tm|dm)$/.test(stem);
    let ich=`${stem}e`,du=`${stem}${sibilant?'t':needsE?'est':'st'}`,er=`${stem}${needsE?'et':'t'}`,wir=lower,ihr=`${stem}${needsE?'et':'t'}`,sie=lower; let subtype='标准规则词尾';
    if(lower.endsWith('eln')){ich=`${stem.slice(0,-2)}le`;subtype='-eln：ich 常省掉词干中的 e';}
    else if(lower.endsWith('ern')){ich=`${stem}e`;subtype='-ern：按词干 + 人称词尾';}
    else if(lower.endsWith('ieren'))subtype='-ieren：现在时规则，第二分词不加 ge-';
    else if(needsE)subtype='词干末尾难连读：du/er/ihr 加过渡音 e';
    else if(sibilant)subtype='词干已有 s 音：du 只加 -t';
    return {verb:lower,stem,forms:[ich,du,er,wir,ihr,sie],subtype};
  }
  function renderAutomaticVerb(result){
    document.getElementById('verbTableHead').textContent=result.verb;
    document.getElementById('verbMeta').innerHTML=`<span>原形：${esc(result.verb)}</span><span>词干：${esc(result.stem)}-</span><span>${esc(result.subtype)}</span><span>自动规则分析</span>`;
    document.getElementById('verbTableBody').innerHTML=verbPersons.map((person,index)=>`<tr><td lang="de">${esc(person[0])}</td><td>${esc(person[1])}</td><td><strong lang="de">${esc(result.forms[index])}</strong></td><td>${esc(result.subtype)}</td><td><button type="button" data-verb-speak="${esc(verbSpokenPersons[index]+' '+result.forms[index])}">▶</button></td></tr>`).join('');
    document.getElementById('verbExampleCard').innerHTML='<p class="source-warning"><strong>规则推导，不是词典校对：</strong>六个人称可按规则生成；系统不能只凭拼写判断它是否还会换音、不规则过去式、可分前缀或使用 sein/haben。课程词请优先使用上方人工校对表。</p>';
    document.getElementById('verbPastCard').innerHTML='<p class="hint">自动分析不猜过去式，避免把强变化动词错误地当成规则动词。</p>';
  }
  function analyseTypedVerb(){
    const input=document.getElementById('verbAnalyzerInput'); const verb=input.value.trim().toLocaleLowerCase('de-DE'); if(!verb){toast('先输入一个德语动词原形。');return;}
    if(verbConjugationData[verb]){selectCourseVerb(verb);document.getElementById('verbAnalyzerResult').textContent=`已找到人工校对表：${verbConjugationData[verb].note}`;return;}
    const result=regularAnalysis(verb); if(!result){document.getElementById('verbAnalyzerResult').textContent='暂时不能可靠判断：请输入以 -en 或 -n 结尾的动词原形。';return;}
    renderAutomaticVerb(result); document.getElementById('verbAnalyzerResult').textContent=`${result.subtype}。注意：未知词只推导现在时规则，不猜不规则过去式。`;
  }
  function bind(){
    const courseSelect=document.getElementById('conjugationCourseSelect');
    courseSelect?.addEventListener('change',()=>renderCourseTracker(Number(courseSelect.value)));
    document.getElementById('syncConjugationCourse')?.addEventListener('click',()=>renderCourseTracker(currentCoursePage));
    document.getElementById('openConjugationLesson')?.addEventListener('click',()=>openFlowLesson(Number(courseSelect.value)||currentCoursePage));
    document.getElementById('courseGrammarVerbs')?.addEventListener('click',event=>{const button=event.target.closest('[data-course-verb]');if(button)selectCourseVerb(button.dataset.courseVerb);});
    document.getElementById('verbRuleLesson')?.addEventListener('click',event=>{const button=event.target.closest('[data-article-mode]');if(!button)return;articleMode=button.dataset.articleMode;enhanceRule('articles');});
    document.getElementById('analyzeVerb')?.addEventListener('click',analyseTypedVerb);
    document.getElementById('verbAnalyzerInput')?.addEventListener('keydown',event=>{if(event.key==='Enter'){event.preventDefault();analyseTypedVerb();}});
    const originalFlow=renderLessonFlow;
    renderLessonFlow=function(){originalFlow();renderCourseTracker(currentCoursePage);};
    renderCourseTracker(currentCoursePage); renderVerbRuleLesson(activeVerbRule);
  }
  bind();
})();
