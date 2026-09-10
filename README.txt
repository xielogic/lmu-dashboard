LMU Dashboard V12
Unofficial customizable dashboard for LMU students

重要定位
- 这是非官方项目，不属于 LMU München 官方网站。
- 页面只保存本地设置：语言、外观、专业选择、卡片显示状态和卡片顺序。
- 不保存、不收集、不要求任何 LMU 用户名、密码、学号或其他登录凭据。

文件结构
上传到 GitHub Pages 仓库根目录时，请保留这个结构：

lmu-dashboard-v12/
  index.html
  app.css
  app.js
  manifest.webmanifest
  sw.js
  assets/
    icons/
      app-icon.svg
      favicon.svg
      favicon-16.png
      favicon-32.png
      favicon.ico
      lmu-app-icon-v9.svg
      lmu-favicon-v9.svg
      lmu-favicon-16-v9.png
      lmu-favicon-32-v9.png
      lmu-icon-192-v9.png
      lmu-icon-512-v9.png
      lmu-maskable-512-v9.png
      lmu-apple-touch-icon-v9.png
      lmu-app-icon-v10.svg
      lmu-favicon-v10.svg
      lmu-favicon-16-v10.png
      lmu-favicon-32-v10.png
      lmu-icon-192-v10.png
      lmu-icon-512-v10.png
      lmu-maskable-512-v10.png
      lmu-apple-touch-icon-v10.png
      lmu-app-icon-v11.svg
      lmu-favicon-v11.svg
      lmu-favicon-16-v11.png
      lmu-favicon-32-v11.png
      lmu-icon-192-v11.png
      lmu-icon-512-v11.png
      lmu-maskable-512-v11.png
      lmu-apple-touch-icon-v11.png
      Logo_LMU.svg
      apple-touch-icon.png
      icon-192.png
      icon-512.png
      maskable-512.png
  README.txt

从 V11 更新到 V12
1. 解压 ZIP。
2. 打开解压后的 lmu-dashboard-v12 文件夹。
3. 把里面的 index.html、app.css、app.js、manifest.webmanifest、sw.js 和 assets 文件夹一起上传到 GitHub 仓库根目录。
4. 如果仓库里已有旧版 index.html、manifest.webmanifest、sw.js，请用新版替换。
5. GitHub Pages 设置继续保持：
   Source: Deploy from a branch
   Branch: main
   Folder: /(root)

首次使用
- 第一次打开会进入设置向导。
- 用户需要搜索并选择 Hauptfach，可选 Nebenfach。
- 系统不会默认显示某个用户的专业。
- 用户可以之后继续添加专业、隐藏服务、调整卡片顺序、切换语言和外观。

V12 更新重点
- 校园分组新增 ZHS，链接到 https://kurse.zhs-muenchen.de/de。
- ZHS 卡片使用运动图标，短标签为 Sport / 运动。

V11 更新重点
- favicon 和 PWA 图标改为官方 Logo 左侧的单个 LMU 方块。
- 不再使用两个方块横版 Logo 作为 App 小图标。
- 保留页眉里的完整 LMU 横版 Logo。

V10 更新重点
- 修正上一版 PWA 图标过于简化、看起来不像官方 Logo 的问题。
- iPhone 主屏幕图标改为白底居中的完整 LMU 官方 Logo。
- favicon 和 PWA 图标使用 V10 专用文件名，继续减少浏览器旧缓存影响。

V9 更新重点
- 为浏览器小图标使用全新的文件名，减少旧 favicon 缓存不更新的问题。
- 新增 favicon.ico 兜底文件，兼容会自动寻找传统图标的浏览器。
- manifest 和启动图标也改用 V9 专用文件名。

V8 更新重点
- 语言切换按钮的选中颜色改为 LMU Logo 官方绿色 #00883A。
- 浏览器 favicon 改为 LMU 方形标识。
- PWA 和 iPhone 主屏幕图标改为 LMU 风格绿色图标。

V7 更新重点
- 去掉页眉下方的绿色/蓝色横线。
- 去掉主页标题区域右侧重复的设置按钮，只保留页眉右上角的设置入口。

V6 更新重点
- 分组标题恢复随语言切换：德语、英语、中文分别显示对应语言。
- 服务模块标题固定使用德语名称，例如 Benutzerkonto、Studienverwaltung、IT-Servicedesk。
- 校园分组新增 CloudPrinting，链接到 LMU 打印服务。
- 继续优化 LMU 风格视觉：更正式的页眉、更干净的页面背景、更克制的卡片和分组样式。

V5 更新重点
- 主页移除“常用入口”标题、说明文字和服务数量标签。
- QISSOS 显示名称改为 Studienverwaltung。
- Meine Fächer 板块加回主页，但不显示长介绍。

V4 更新重点
- 页眉使用提供的官方 LMU Logo 文件。
- 页眉不再显示介绍文字和 Unofficial 标签；非官方说明保留在页面底部。
- 主页卡片小标签改为每个入口自己的极短说明，不再重复分组名。
- 主页去掉“我的专业”区域，专业仍可在设置里修改。

V3 更新重点
- 首次配置完成后，主页不再显示“个人配置”侧栏。
- 服务卡片恢复按板块分组：学习、学生事务、校园。
- 主页卡片不再显示长描述，避免德语文字被省略号截断。
- 隐藏、显示和排序服务统一放到设置里。
- 页眉加入更精致的 LMU 风格标识，并继续明确标注 Unofficial。

iPhone 添加到主屏幕
1. 等 GitHub Pages 部署完成后，用 iPhone Safari 打开网站。
2. 点击分享按钮。
3. 选择“添加到主屏幕”。
4. 名称可以填 LMU 或 LMU Dashboard。

缓存提示
PWA 会使用 service worker 缓存文件。更新旧版本后，如果手机仍然显示旧界面：
- 先刷新网页。
- 如果已经添加到主屏幕，可以删除旧图标后重新添加。
- 桌面浏览器也可以清除该网站缓存后再打开。
