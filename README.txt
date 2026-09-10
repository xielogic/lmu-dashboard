LMU Dashboard V5
Unofficial customizable dashboard for LMU students

重要定位
- 这是非官方项目，不属于 LMU München 官方网站。
- 页面只保存本地设置：语言、外观、专业选择、卡片显示状态和卡片顺序。
- 不保存、不收集、不要求任何 LMU 用户名、密码、学号或其他登录凭据。

文件结构
上传到 GitHub Pages 仓库根目录时，请保留这个结构：

lmu-dashboard-v5/
  index.html
  app.css
  app.js
  manifest.webmanifest
  sw.js
  assets/
    icons/
      app-icon.svg
      Logo_LMU.svg
      apple-touch-icon.png
      icon-192.png
      icon-512.png
      maskable-512.png
  README.txt

从 V4 更新到 V5
1. 解压 ZIP。
2. 打开解压后的 lmu-dashboard-v5 文件夹。
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

V5 更新重点
- 主页移除“常用入口”标题、说明文字和服务数量标签。
- QISSOS 显示名称改为 Studienverwaltung。
- 主页分组标题在德语、英语、中文下都固定显示德语：Studium、Studierendenservice、Campus、Meine Fächer。
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
