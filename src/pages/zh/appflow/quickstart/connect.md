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

您需要在 [Appflow 控制面板](https://dashboard.ionicframework.com) 中创建一个应用才能将其连接到您的 git repo。 From the main page, you should see a `New App` button in the top right corner. If you don't have any apps yet, you'll see a button to create your first one in the middle of the screen. Simply enter a name for your application and click `Create`.

![Create A New App](/docs/assets/img/appflow/ss-create-app.png)

## Choose your Git Integration

Next, you'll need to decide how Appflow will access your source code. We suggest using [GitHub](https://github.com/), [Bitbucket](https://bitbucket.org/), or [Bitbucket Server](https://bitbucket.org/product/enterprise) if you're using them already. The integrations with these services are easy to configure and you'll get some additional benefits like being able view the commits your builds came from and the changes on your Git remote.

If you're not using one of these providers, you can also choose to push directly to Ionic. Ionic git is *not* intended to be a Git host and we strongly suggest using GitHub, Bitbucket or another official git hosting service to backup your source code repository.

<docs-cards> <docs-card header="Connect using GitHub" href="/docs/appflow/quickstart/github" icon="/docs/assets/icons/guide-github-icon.png"> 

Connect your app to a repo on GitHub.</docs-card>

<docs-card header="Connect using Bitbucket" href="/docs/appflow/quickstart/bitbucket" icon="/docs/assets/icons/guide-bitbucket-icon.png"> 

Connect your app to a repo on Bitbucket.</docs-card>

<docs-card header="Connect using Bitbucket Server" href="/docs/appflow/quickstart/bitbucket-server" icon="/docs/assets/icons/guide-bitbucket-icon.png"> 

Connect your app to a repo using an on-premise Bitbucket Server instance.

**Note: This feature is only available on our Scale plan.** </docs-card>

<docs-card header="Connect using Ionic" href="/docs/appflow/quickstart/ionic-remote" icon="/docs/assets/icons/guide-ionic-icon.png"> 

Connect your app directly to Ionic if you are not using one of the supported Git hosting services.</docs-card> </docs-cards>