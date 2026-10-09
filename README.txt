LMU Dashboard V17
Unofficial customizable dashboard for LMU students

V17 更新
- 设置中增加“显示卡片说明”开关，默认开启，支持德语、英语、中文。
- 关闭时隐藏服务卡片标题下的短说明；图标、标题、悬停说明和无障碍描述保留。
- 不影响“我的专业”的 Hauptfach / Nebenfach 标记。
- 切换后立即生效并保存在 localStorage，刷新后仍记住选择；重置设置会恢复开启。
- 旧版本没有此选项的用户更新后默认开启，专业、排序和隐藏状态不变。

V16 更新
- 移除 Workspace 和 Sprachenzentrum 卡片及其设置项。
- 在“校园”下方新增“信息”分组，放入 Vorlesungszeiten、eduroam 和 eduVPN。
- 补充五个官方信息入口：Rückmeldung、Semesterticket、Beratung、Studienfinanzierung、Wohnen。
- 将 IT-Servicedesk 移到“学生事务”。
- 每张卡片使用精确、简短的三语言说明，例如 LSF 的“课程和考试报名”。
- 五个分组标题和短说明随德语、英语、中文切换，模块标题保持德语。
- 较长的德语标题和说明可完整换行，不使用省略号。
- 保留组内拖拽排序、隐藏和上下移动，控制按钮只出现在设置中。
- 更新页面和 service worker 的缓存版本。
- 保留专业选择、原有排序和隐藏状态；移除入口会自动从旧设置中清理，新增入口默认显示。
- 保留 iPhone 安全区域修复、暗色主题、官方页眉 Logo 和单方块 App 图标。

服务分组
学习：LSF、Moodle。
学生事务：Mailbox、Studienverwaltung、Benutzerkonto、IT-Servicedesk、LMUcard。
图书馆：UB、OPAC、Bibliothekskonto、E-Medien-Login、Platzfinder、Leseplatzreservierung。
校园：CloudPrinting、Mensa、ZHS、LMU、Raumfinder。
信息：eduroam、eduVPN、Vorlesungszeiten、Rückmeldung、Semesterticket、Beratung、Studienfinanzierung、Wohnen。
另保留“我的专业”区域。

GitHub Pages 上传
1. 解压 lmu-dashboard-v17.zip，打开里面的 lmu-dashboard-v17 文件夹。
2. 将该文件夹内的所有文件和 assets 文件夹上传到仓库根目录。
3. 用新版覆盖同名文件，不需要删除仓库。
4. 不要把整个 lmu-dashboard-v17 文件夹作为额外一层上传。
5. GitHub Pages 设置继续保持 main 分支、/(root)。
6. 部署完成后打开 https://xielogic.github.io/lmu-dashboard/?v=17。

文件结构
lmu-dashboard-v17/
  index.html
  app.css
  app.js
  manifest.webmanifest
  sw.js
  README.txt
  assets/
    icons/
      Logo_LMU.svg
      favicon.ico
      lmu-*-v11.svg / lmu-*-v11.png
      lucide-LICENSE.txt
      其他保留的兼容图标

使用和隐私
- 第一次进入时不预选专业；可搜索 Hauptfach / Nebenfach，也可跳过。
- 专业、语言、外观、卡片说明、卡片可见状态和顺序只存于当前浏览器的 localStorage。
- 更新时沿用原本的设置键，无需重新配置。新增入口会自动补入。
- Dashboard 不保存、收集或要求 LMU 用户名、密码、学号等凭据。
- 登录只发生在打开的 LMU、LRZ、UB 或官方指定合作方页面。
- 这是非官方项目；页面底部保留非官方说明。
- 可继续使用 Safari 添加到 iPhone 主屏幕或 Mac 程序坞。
- 若已安装的网页 App 暂时仍显示旧版，先在 Safari 打开上面的 V17 地址，关闭并重新打开网页 App。
- 删除的是 Workspace 总入口卡片；仍保留位于官方 Workspace 路径下的具体信息页。

官方入口核对（2026-10-09）
Raumfinder：https://www.lmu.de/raumfinder/
UB：https://www.ub.lmu.de/de/
OPAC：https://opac.ub.lmu.de/
Bibliothekskonto：https://opac.ub.lmu.de/MyResearch/Home?lng=de
Platzfinder：https://www.ub.lmu.de/de/standorte/platzfinder/
座位预约和电子资源登录入口来源：https://www.ub.lmu.de/de/standorte/
邮箱入口来源：https://www.lmu.de/de/die-lmu/struktur/zentrale-universitaetsverwaltung/it-services-division/it-servicedesk/zentrale-it-angebote/e-mail-mailbox/
账户、校园卡和校园网络入口来源：https://www.lmu.de/de/die-lmu/struktur/zentrale-universitaetsverwaltung/it-services-division/it-servicedesk/zentrale-it-angebote/
Vorlesungszeiten：https://www.lmu.de/de/workspace-fuer-studierende/1x1-des-studiums/vorlesungszeiten/
Rückmeldung：https://www.lmu.de/de/workspace-fuer-studierende/1x1-des-studiums/rueckmeldung/
Semesterticket：https://www.lmu.de/de/workspace-fuer-studierende/1x1-des-studiums/semesterticket/
Beratung：https://www.lmu.de/de/workspace-fuer-studierende/support-angebote/
Studienfinanzierung：https://www.lmu.de/de/workspace-fuer-studierende/support-angebote/studienfinanzierung/
Wohnen：https://www.lmu.de/de/workspace-fuer-studierende/studieren-und-leben/wohnen/
信息入口只提供官方页面跳转，不在 Dashboard 内复制可能变化的费用、政策或截止日期。

新增服务图标使用 Lucide，授权文本位于 assets/icons/lucide-LICENSE.txt。
