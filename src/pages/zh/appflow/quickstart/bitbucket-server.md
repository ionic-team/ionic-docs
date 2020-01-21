---
title: '使用 Bitbucket 服务器连接'
previousText: '连接你的仓库'
previousUrl: '/文档/Appflow/快速开始/连接'
nextText: '安装 Appflow SDK'
nextUrl: '/文档/Appflow/快速开始/安装'
---

<blockquote>
  <p>Bitbucket 服务器集成仅适用于我们的 **Scale** 计划。
  如果您需要此功能，请<a href="/sales">联系我们</a>。
  </p>
</blockquote>

如果您已使用Bitbucket服务器，您可以将你的本地仓库与Appflow连接以自动推送代码。

## 基础要求

为了启用与Appflow的集成，您需要在Bitbucket 服务器远程仓库上有一个实例。

## 集成配置

在Appflow面板上导航到你的应用程序设置选项卡中的`Git`区域并选择Bitbucket服务器选项卡

如果这是您第一次连接，您需要：

* 输入Bitbucket服务器实例地址
* 为你的个人仓库输入[个人访问令牌](https://confluence.atlassian.com/bitbucketserver/personal-access-tokens-939515499.html)

<blockquote>
  <p>
    <b>注意：</b>如果您的个人访问令牌具有只读权限，您需要 <a href="https://confluence.atlassian.com/bitbucketserver/managing-webhooks-in-bitbucket-server-938025878.html" target="_blank">创建您自己的 webhook</a>才能让Appfliow接受推送事件。 当您连接到您的仓库，将弹出模态窗并给您提供创建webhook 所需的的详细信息。 如果您使用具有管理员权限的个人访问令牌，这将自动为您完成 。
  </p>
</blockquote>

* 点击 `连接到 Bitbucket 服务器` 按钮

![Bitbucket 服务器连接](/docs/assets/img/appflow/bitbucket-server-connect-app.png)

然后您可以从可用仓库列表中选择要链接的存储库。

当您连接到远程仓库时，将创建 webhook, 您的提交将被推送到Appflow。