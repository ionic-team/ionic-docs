---
title: '使用 GitHub 连接'
previousText: '连接您的仓库...'
previousUrl: '/docs/appflow/quickstart/connect'
nextText: '安装 Appflow SDK'
nextUrl: '/docs/appflow/quickstart/installation'
---

如果你已经在使用 [GitHub](https://github.com/) 你可以将你的资源库与你的应用流程应用程序链接起来自动推送代码。 <iframe src="//fast.wistia.net/embed/iframe/mjequ3rpwu" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen style="width: 100%; max-width: 100%" width="100%" height="349" mark="crwd-mark"></iframe>

<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>

## 必备条件

为了启用与您的 Appflow 应用程序的集成，您将需要在 GitHub 上的现有存储库。

## 集成配置

浏览至您的应用程序设置选项卡中的 `Git` 部分 应用程序流控制面板选择 GitHub 选项卡。 如果这是您第一次连接 ，您需要点击 `Connect` 按钮。 然后您可以从可用仓库列表中选择要链接的存储库。

![Git 设置](/docs/assets/img/appflow/github-connect-app.png)

当您链接仓库时，将为仓库 创建 webhook ，并且事件将被发送到 Appflow ，以便我们能够访问任何提交的你 推送到你的仓库中。