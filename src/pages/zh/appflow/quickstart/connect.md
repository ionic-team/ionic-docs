---
title: '连接您的代码仓库'
previousText: '快速启动首页'
previousUrl: '/docs/appflow/quickstart'
nextText: '使用 GitHub 连接'
nextUrl: '/docs/appflow/quickstart/github'
tableOfContents: false
---

Appflow直接使用 Git 版本控制并使用您的代码库 作为部署和软件包构建的真理来源。 为了让Appflow 访问您的代码，您可以选择直接使用 GitHub 或 Bitbucket 等托管服务集成。 或者您可以直接将您的代码推送到 Appflow。

## 基础要求

在您可以将您的应用程序连接到 Appflow之前，请确保您已经做了以下工作：

* [本地安装IonCLI](/docs/cli#installation)
* 拥有一个现有的音效应用或 [启动一个新的](/docs/cli/commands/start/)

## 在应用流程面板中创建一个应用

您需要在 [Appflow 控制面板](https://dashboard.ionicframework.com) 中创建一个应用才能将其连接到您的 git repo。 从主页上，您应该在右上角看到 `新应用` 按钮。 如果您还没有任何应用， 您会看到一个按钮在屏幕中间创建您的第一个应用程序。 只需输入您的应用程序 的名称，然后点击 `创建`

![创建一个新的应用程序](/docs/assets/img/appflow/ss-create-app.png)

## 选择您的Git集成

接下来，您需要决定Appflow如何访问您的源代码。 我们建议使用 [GitHub](https://github.com/), [GitLab](https://gitlab.com/), [Bitbucket](https://bitbucket.org/), 或 [Bitbucket 服务器](https://bitbucket.org/product/enterprise) 如果您已在使用它们。 与这些服务的集成很容易配置，您将 获得一些额外的好处，如能够查看您的构建和您的 Git 远程更改等。

如果您没有使用这些供应商之一，您也可以直接推送到Ionic。 Ionic git 是 *不是 Git 主机的* ，我们强烈建议使用 GitHub Bitbucket 或其他官方的 git 托管服务备份您的源代码存储库。

<docs-cards> <docs-card header="Connect using GitHub" href="/docs/appflow/quickstart/github" icon="/docs/assets/icons/guide-github-icon.png"> 

将您的应用连接到 GitHub 上的repo 上。</docs-card>

<docs-card header="Connect using GitLab" href="/docs/appflow/quickstart/gitlab" icon="/docs/assets/icons/guide-gitlab-icon.png"> 

Connect your app to a repo on GitLab.</docs-card>

<docs-card header="Connect using Bitbucket" href="/docs/appflow/quickstart/bitbucket" icon="/docs/assets/icons/guide-bitbucket-icon.png"> 

Connect your app to a repo on Bitbucket.</docs-card>

<docs-card header="Connect using Bitbucket Server" href="/docs/appflow/quickstart/bitbucket-server" icon="/docs/assets/icons/guide-bitbucket-icon.png"> 

Connect your app to a repo using an on-premise Bitbucket Server instance.

**Note: This feature is only available on our Scale plan.** </docs-card>

<docs-card header="Connect using Ionic" href="/docs/appflow/quickstart/ionic-remote" icon="/docs/assets/icons/guide-ionic-icon.png"> 

Connect your app directly to Ionic if you are not using one of the supported Git hosting services.</docs-card> </docs-cards>