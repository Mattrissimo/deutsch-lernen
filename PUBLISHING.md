# 德语学习平台 V2 发布说明（2026-07-23）

> V2 已于 2026-07-21 发布到 GitHub 仓库 `main`，GitHub Pages 构建成功；最新 Supabase SQL 与正式跳转 URL 已配置。账号完整云进度只剩双账号、跨设备实际验收。

## 已实现

- Supabase 邮箱注册、登录和跨设备完整进度同步：生词、复习、课程、闯关、今日计划和已掌握词
- 每个账号使用独立浏览器存储空间，并在数据库中按 `user_id` 独立成行；不同账号不再共用本机进度
- 页面最上方新增账号进度栏：访客明确显示“仅本机”，登录后显示“邮箱的独立云进度”、生词数、课程数和已掌握数；登录、注册、同步、退出/换账号集中在同一处
- 艾宾浩斯复习队列：1、3、7、14、30 天；答错 10 分钟后重现
- 每日学习计划、DW《Nicos Weg》入口和《走遍德国》A1 Bilibili 60 集课程笔记
- 60 集逐集教材主题/语法摘要、240 个摘要词汇按需导入与当前第 4 集直达入口
- 顶部快速生词、固定快速导航、动词变位抽查和自定义数字朗读
- 本课一条龙路线：课程目标 → 知识点 → 选择/填空 → 德国生活拓展 → 地道词汇预习 → 本课听写
- 听音拼写闯关只考本课已经展示的单词与句子，预习后才解锁；错误提示包含核心词长度、开头/结尾和逐级拼写轮廓
- 德语输入辅助：答题框内置 ä/ö/ü/ß 快捷键，并提供可随时打开的 Windows、Mac、iPhone/iPad 德语键盘图
- 单词卡中文与全部补充例句常驻显示；每一句都有独立播放按钮
- 完整德语发音课：A–Z、Ä/Ö/Ü/ß 共 30 个字母名称，以及 sch、两种 ch、词尾 -ig、sp/st、ei/eu/au、pf/tsch/ng 等 18 组规则
- 字母与重点规则使用可在站内直接播放的公开母语者真人录音，并在每张卡显示录音来源与许可；真人录音、AI 合成音和设备备用音不再混称
- 首页“今天学什么”总入口：自动列出当日 4 项推荐顺序、预计时间与完成勾选，并提供 12 个学习大类的一键入口
- AI 德语老师：Gemini 免费额度优先、离线老师兜底；连续对话会携带最近上下文，重复请求受限并短时缓存；网页不保存长期密钥
- AI 网站评估顾问：检查课程覆盖、练习质量、发音、学习画像和同步缺口；未登录或在线服务失败时自动提供本地专业评估
- 德国生活与店铺经营场景、学习统计仪表盘、语音朗读和本机离线进度

## 课程内容边界

- 已通过 Bilibili 公开元数据核实该合集共 60 集，总时长约 52.8 小时；60 集均没有公开字幕轨道。
- 页面中的 60 集内容是依据教材目录整理的知识摘要，不是老师讲课逐字稿。不能把它描述成“视频里老师讲的所有内容”。
- 若要补齐老师讲解细节，需要合法取得的字幕、讲义或用户提供的课程笔记，再逐集核对。当前页面会明确显示这一状态。

## GitHub Pages 发布

1. 把 `index.html`、`deutsch-boutique-lernapp.html`、`supabase-setup.sql` 和本说明放到仓库根目录。
2. 在 GitHub 仓库打开 **Settings → Pages**。
3. 在 **Build and deployment** 选择 **Deploy from a branch**，分支选 `main`，目录选 `/ (root)`，保存。
4. 等待 Pages 发布完成后打开仓库显示的网址。`index.html` 会自动跳转到 V2 单文件。

## Supabase 设置

1. 在 Supabase 项目的 SQL Editor 执行 `supabase-setup.sql`。
2. Authentication → URL Configuration 中，把 GitHub Pages 正式网址加入 Site URL / Redirect URLs。
3. HTML 中只能使用项目 URL 与 publishable/anon key。不要使用或提交 `service_role` key。
4. 使用两个不同邮箱各自完成一课、加入不同生词，然后退出并交叉登录验收；两个账号应显示不同进度。同一个邮箱在另一台设备登录后应合并到同一进度。

## 零付费语音与可选自然合成音

固定字母和规则的真人录音不需要密钥，网页发布后即可使用。任意新增单词、数字和完整句子不可能事先全部由真人录好；没有公开录音时，零付费模式会明确切换到设备德语语音，不能把合成音写成“真人录音”。

默认零付费模式直接使用公开许可录音和设备德语语音，不调用付费接口。安全代理位于 `supabase/functions/german-tts/index.ts`，且只有管理员明确设置 `ENABLE_PAID_TTS=true` 后才会调用付费语音：

1. 在 Supabase Dashboard → **Edge Functions** 新建并部署名为 `german-tts` 的函数，或在仓库根目录运行 `supabase functions deploy german-tts --no-verify-jwt`。
2. 零付费运行无需新增任何语音密钥，也不要设置 `ENABLE_PAID_TTS`。
3. 如果以后主动启用付费自然合成音，再在 Supabase 服务端设置 `OPENAI_API_KEY`、`ENABLE_PAID_TTS=true`，并可选设置 `TTS_MODEL`、`TTS_VOICE`。不要把密钥粘到 HTML、GitHub 文件或截图中。
4. 未启用、未登录或请求失败时，网站继续使用设备德语语音，并明确标为机器语音备用。

函数会再次验证 Supabase 登录、限制每个登录用户每小时 60 次、限制每次 700 字符，并且不会把服务端密钥返回浏览器。

## 免费 AI 德语老师（需要部署一次）

安全后端位于 `supabase/functions/german-teacher/index.ts`。它会验证本站 Supabase 登录、按用户限流、短时缓存重复请求，并优先通过 Gemini 免费额度返回 A1 连续对话纠正或匿名网站评估。网页中没有长期模型密钥，也不显示接口地址和令牌输入框。

1. 在 Google AI Studio 创建 Gemini API key。
2. 在 Supabase Dashboard → **Edge Function Secrets Management** 新增 `GEMINI_API_KEY`，并设置 `AI_PROVIDER=gemini`。不要把 key 粘到 HTML、GitHub 文件或截图中。
3. 在仓库根目录运行 `supabase functions deploy german-teacher --no-verify-jwt`，或在 Supabase Dashboard 的 Edge Functions 中部署同名函数。
4. 可选设置 `GEMINI_MODEL=gemini-3.5-flash`；不设置时函数使用该默认模型。
5. 刷新网站并登录。点击“检查免费 AI”，显示“免费 AI（Gemini）已连接”即完成。免费额度用完或服务不可用时会自动回到离线老师，不影响课程、生词本和练习。

只有明确设置 `AI_PROVIDER=openai` 时，函数才会读取 `OPENAI_API_KEY` 并调用付费 OpenAI API。零付费模式不要设置这个值。语音函数 `german-tts` 仍是可选付费增强；不部署时网站会继续使用公开许可录音和设备德语语音。
