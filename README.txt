LMU Dashboard V15
Unofficial customizable dashboard for LMU students

V15 更新
- 新增独立“图书馆”分组，集中显示 UB、OPAC、Bibliothekskonto、E-Medien-Login、Platzfinder、Leseplatzreservierung。
- 新增 Raumfinder、LMUcard、eduroam、eduVPN、Vorlesungszeiten、Sprachenzentrum。
- 全部新增服务默认显示，旧用户隐藏过的卡片仍保持隐藏。
- 四个分组：学习、学生事务、图书馆、校园。分组标题和短说明随德语、英语、中文切换，模块标题保持德语。
- Mailbox 改为 LRZ Webmail 直接入口，Benutzerkonto 改为官方账户入口。
- 设置界面也按分组显示；支持组内拖拽和上下移动。
- 手机端较长的德语模块名称会换行，不使用省略号。
- 更新页面和 service worker 的缓存版本。
- 继续保留 V14 的 iPhone 安全区域修复、暗色主题、官方页眉 Logo 和单方块 App 图标。

服务分组
学习：LSF、Moodle、Workspace、Vorlesungszeiten、Sprachenzentrum。
学生事务：Mailbox、Studienverwaltung、Benutzerkonto、LMUcard。
图书馆：UB、OPAC、Bibliothekskonto、E-Medien-Login、Platzfinder、Leseplatzreservierung。
校园：CloudPrinting、Mensa、ZHS、LMU、IT-Servicedesk、Raumfinder、eduroam、eduVPN。
另保留“我的专业”区域。

GitHub Pages 上传
1. 解压 lmu-dashboard-v15.zip，打开里面的 lmu-dashboard-v15 文件夹。
2. 将该文件夹内的所有文件和 assets 文件夹上传到仓库根目录。
3. 用新版覆盖同名文件，不需要删除仓库。
4. 不要把整个 lmu-dashboard-v15 文件夹作为额外一层上传。
5. GitHub Pages 设置继续保持 main 分支、/(root)。
6. 部署完成后打开 https://xielogic.github.io/lmu-dashboard/?v=15。

文件结构
lmu-dashboard-v15/
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
- 专业、语言、外观、卡片可见状态和顺序只存于当前浏览器的 localStorage。
- 更新时沿用原本的设置键，无需重新配置。新增入口会自动补入。
- Dashboard 不保存、收集或要求 LMU 用户名、密码、学号等凭据。
- 登录只发生在打开的 LMU、LRZ、UB 或官方指定合作方页面。
- 这是非官方项目；页面底部保留非官方说明。
- 可继续使用 Safari 添加到 iPhone 主屏幕或 Mac 程序坞。
- 若已安装的网页 App 暂时仍显示旧版，先在 Safari 打开上面的 V15 地址，关闭并重新打开网页 App。

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
Sprachenzentrum：https://www.lmu.de/sprachenzentrum/de/

新增服务图标使用 Lucide，授权文本位于 assets/icons/lucide-LICENSE.txt。
