---
title: '使用 Bitbucket 连接'
previousText: '连接您的代码仓库'
previousUrl: '/docs/appflow/quickstart/connect'
nextText: '安装 Appflow SDK'
nextUrl: '/docs/appflow/quickstart/installation'
---

如果您已经在使用 [Bitbucket 云](https://bitbucket.org/) 您可以将您的资源库链接到您的Appflow 应用程序来自动推送代码。

## 先决条件

为了启用与您的Appflow应用的集成，您将需要在 Bitbucket 上的现有存储库。

## 集成配置

在 Appflow 控制面板上的应用程序设置选项卡中导航到 `Git` 部分选择Bitbucket 云选项卡。 如果这是您第一次连接 ，您需要点击 `Connect` 按钮。 然后您可以从可用仓库列表中选择要链接的存储库。

![Bitbucket 连接](/docs/assets/img/appflow/bitbucket-connect-app.png)

当您链接仓库时，将为仓库 创建 webhook ，并且事件将被发送到 Appflow ，以便我们能够访问任何提交的你 推送到你的仓库中。

只显示新的提交。 建立与 BitBucket 连接之前的历史提交将不会被显示。