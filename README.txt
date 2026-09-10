LMU Dashboard V2
Unofficial customizable dashboard for LMU students

重要定位
- 这是非官方项目，不属于 LMU München 官方网站。
- 页面只保存本地设置：语言、外观、专业选择、卡片显示状态和卡片顺序。
- 不保存、不收集、不要求任何 LMU 用户名、密码、学号或其他登录凭据。

文件结构
上传到 GitHub Pages 仓库根目录时，请保留这个结构：

lmu-dashboard-v2/
  index.html
  app.css
  app.js
  manifest.webmanifest
  sw.js
  assets/
    icons/
      app-icon.svg
      apple-touch-icon.png
      icon-192.png
      icon-512.png
      maskable-512.png
  README.txt

从 V1 更新到 V2
1. 解压 ZIP。
2. 打开解压后的 lmu-dashboard-v2 文件夹。
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
