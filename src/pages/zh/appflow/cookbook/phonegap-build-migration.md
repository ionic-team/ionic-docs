---
previousText: "简介"
previousUrl: "/docs/appflow/cookbook/intro"
nextText: "使用私有的Git仓库"
nextUrl: "/docs/appollow/cookbook/private_git"
contributors:
  - chrisgriffith
meta:
  image: /docs/assets/img/appflow/cookbook/meta-pgb.png
  description: 从 PhoneGap 构建迁移到 Ionic Appflow 涉及几个简单步骤。
---

# 从 PhoneGap 构建迁移到 Ionic Appflow

从Adobe的 [PhoneGap 构建](https://build.phonegap.com) 迁移到 Ionic Appflow 只涉及几个简单的步骤。 在本指南中，我们将从开始到完成整个迁移过程。 还可以选择的是，您也可以将应用程序迁移到Ionic框架。

## 迁移摘要

- Appflow是Ionic的移动DevOps服务，可帮助开发团队构建，发布和管理其iOS，Android和Web应用程序。 具有连续的本机版本，实时应用程序部署，一键式部署到App Store和CI/CD自动化的功能。
- PhoneGap/Cordova 应用程序以 jQuery Mobile, Framework 7, Sencha, KendoUI, 或者甚至您自己的自定义解决方案都可以迁移。 <strong>不需要现有的Ionic应用程序。</strong>
- 如果您需要迁移援助，Ionic提供[咨询服务](https://ionicframework.com/advisory)

## 关于 PhoneGap 版本

开发基于 PhoneGap/Cordova 的应用程序时遇到的挑战之一是，为了让您使用您的 web 应用程序为iOS 和 Android 创建本机应用程序。 您还需要安装所有与传统移动开发者相同的工具。 例如，如果您想要创建 iOS 应用程序 您必须下载并安装 Xcode ，假定您有一个Mac电脑来运行它。 如果您也在计划创建您的应用程序的 Android 版本， 然后您不仅安装了 Android Studio ，而且安装 Java SDK 以及其他工具。 学习和使用这些复杂的注重成果的企业，确保它们得到适当的配置(和更新)，可能是一项艰巨的挑战。

此安装挑战 早在2012年，这些工具的配置和运行就是Adobe引入一个称为“PhoneGap Build”的新服务的原因之一。 这个云托管平台允许用户只需压缩他们的网页应用程序，包括一个定义各种应用程序元素的 xml 文件 像图标和初始屏幕一样，让它编译和创建本机应用程序。 虽然它没有给予与当地建筑相同程度的控制，但对许多人来说，这是一个很好的解决办法。 尤其是对于那些不想编译本机iOS应用程序的 Mac 开发者。 这也意味着你不再有特殊的编译器， 而是使用允许任何获得授权的团队成员能够创建他们的应用的服务。

然而，PhoneGap 构建有一些局限性，最突出的是无法获得今天可用的一些现代配置选项。 这个问题的一个很好的例子是当你尝试整合推送通知时。 由于Adobe将其焦点从开发者转向创造者，支持PhoneGap 构建的资源也在减少。 这使许多人想知道可能存在哪些解决方案以允许基于云的本机移动应用程序编译。

### 输入Ionic Appflow

所幸的是，Ionic的Appflow服务已经发展到满足这一需要。 多年来，Ionic公司一直在探索各种云服务，这些服务可以帮助开发基于Ionic的应用。 Ionic Appflow背后的基本思想与 PhoneGap 相同； 使用您的本地Web应用程序，将其传输到云端并为您生成本地应用程序。 这篇短篇文章将让你走过为刚刚开始的人或想要从 PhoneGap 建筑迁移的人使用Ionic Appflow所需的过程。 如果您使用 Ionc Framework 开发您的移动应用程序，那么我们很喜欢它，但 IonAppflow 是独立的解决方案。

这意味着 <strong>您可以迁移一个 jQuery Mobile，Framework 7, KendoUI，甚至您自己的自定义解决方案。</strong>

## Appflow 准备

要开始使用Ionic Appflow，我们将对您现有应用的目录结构和config.xml文件进行一些简单的更新，然后使用Git配置源代码控制。

### 迁移您的 config.xml 文件

在这个步骤中，我们将迁移一些文件，然后更新config.xml 文件以反映更改。

<strong>首先，将 config.xml 文件移动到项目的根目录。</strong>

因此，可能需要调整指向图标和启动屏幕文件的各种路径。 另外，根据您上次使用config.xml文件的时间，可能需要进行一些更改。 例如，在较旧的版本中，当定义资产的平台或密度时，我们可能使用了 gap: 前缀。

```xml
<icon src="icons/icon_36.png" gap:platform="android" gap:density="ldpi" />
```

现在，我们可以将特定平台使用的所有资产包装在 `<platform name="X"></platform>` 标签中。 在这个例子中，"resources"文件夹是该项目的根源。 文件夹名称不必完全匹配，只需确认 `src` 路径符合目录结构。

```xml
<platform name="android">
    <icon density="ldpi" src="resources/android/icon/drawable-ldpi-icon.png" />
    <icon density="mdpi" src="resources/android/icon/drawable-mdpi-icon.png" />
    <icon density="hdpi" src="resources/android/icon/drawable-hdpi-icon.png" />
    <icon density="xhdpi" src="resources/android/icon/drawable-xhdpi-icon.png" />
    <icon density="xxhdpi" src="resources/android/icon/drawable-xxhdpi-icon.png" />
    <icon density="xxxhdpi" src="resources/android/icon/drawable-xxxhdpi-icon.png" />
    <splash density="land-ldpi" src="resources/android/splash/drawable-land-ldpi-screen.png" />
    <splash density="land-mdpi" src="resources/android/splash/drawable-land-mdpi-screen.png" />
    <splash density="land-hdpi" src="resources/android/splash/drawable-land-hdpi-screen.png" />
    <splash density="land-xhdpi" src="resources/android/splash/drawable-land-xhdpi-screen.png" />
    <splash density="land-xxhdpi" src="resources/android/splash/drawable-land-xxhdpi-screen.png" />
    <splash density="land-xxxhdpi" src="resources/android/splash/drawable-land-xxxhdpi-screen.png" />
    <splash density="port-ldpi" src="resources/android/splash/drawable-port-ldpi-screen.png" />
    <splash density="port-mdpi" src="resources/android/splash/drawable-port-mdpi-screen.png" />
    <splash density="port-hdpi" src="resources/android/splash/drawable-port-hdpi-screen.png" />
    <splash density="port-xhdpi" src="resources/android/splash/drawable-port-xhdpi-screen.png" />
    <splash density="port-xxhdpi" src="resources/android/splash/drawable-port-xxhdpi-screen.png" />
    <splash density="port-xxxhdpi" src="resources/android/splash/drawable-port-xxxhdpi-screen.png" />
</platform>
<platform name="ios">
    <icon height="57" src="resources/ios/icon/icon.png" width="57" />
    <icon height="114" src="resources/ios/icon/icon@2x.png" width="114" />
    <icon height="29" src="resources/ios/icon/icon-small.png" width="29" />
    <icon height="58" src="resources/ios/icon/icon-small@2x.png" width="58" />
    <icon height="87" src="resources/ios/icon/icon-small@3x.png" width="87" />
    <icon height="20" src="resources/ios/icon/icon-20.png" width="20" />
    <icon height="40" src="resources/ios/icon/icon-20@2x.png" width="40" />
    <icon height="60" src="resources/ios/icon/icon-20@3x.png" width="60" />
    <icon height="48" src="resources/ios/icon/icon-24@2x.png" width="48" />
    <icon height="55" src="resources/ios/icon/icon-27.5@2x.png" width="55" />
    <icon height="29" src="resources/ios/icon/icon-29.png" width="29" />
    <icon height="58" src="resources/ios/icon/icon-29@2x.png" width="58" />
    <icon height="87" src="resources/ios/icon/icon-29@3x.png" width="87" />
    <icon height="40" src="resources/ios/icon/icon-40.png" width="40" />
    <icon height="80" src="resources/ios/icon/icon-40@2x.png" width="80" />
    <icon height="120" src="resources/ios/icon/icon-40@3x.png" width="120" />
    <icon height="88" src="resources/ios/icon/icon-44@2x.png" width="88" />
    <icon height="50" src="resources/ios/icon/icon-50.png" width="50" />
    <icon height="100" src="resources/ios/icon/icon-50@2x.png" width="100" />
    <icon height="60" src="resources/ios/icon/icon-60.png" width="60" />
    <icon height="120" src="resources/ios/icon/icon-60@2x.png" width="120" />
    <icon height="180" src="resources/ios/icon/icon-60@3x.png" width="180" />
    <icon height="72" src="resources/ios/icon/icon-72.png" width="72" />
    <icon height="144" src="resources/ios/icon/icon-72@2x.png" width="144" />
    <icon height="76" src="resources/ios/icon/icon-76.png" width="76" />
    <icon height="152" src="resources/ios/icon/icon-76@2x.png" width="152" />
    <icon height="167" src="resources/ios/icon/icon-83.5@2x.png" width="167" />
    <icon height="172" src="resources/ios/icon/icon-86@2x.png" width="172" />
    <icon height="196" src="resources/ios/icon/icon-98@2x.png" width="196" />
    <icon height="1024" src="resources/ios/icon/icon-1024.png" width="1024" />
    <splash height="480" src="resources/ios/splash/Default~iphone.png" width="320" />
    <splash height="960" src="resources/ios/splash/Default@2x~iphone.png" width="640" />
    <splash height="1024" src="resources/ios/splash/Default-Portrait~ipad.png" width="768" />
    <splash height="768" src="resources/ios/splash/Default-Landscape~ipad.png" width="1024" />
    <splash height="1125" src="resources/ios/splash/Default-Landscape-2436h.png" width="2436" />
    <splash height="1242" src="resources/ios/splash/Default-Landscape-736h.png" width="2208" />
    <splash height="2048" src="resources/ios/splash/Default-Portrait@2x~ipad.png" width="1536" />
    <splash height="1536" src="resources/ios/splash/Default-Landscape@2x~ipad.png" width="2048" />
    <splash height="2732" src="resources/ios/splash/Default-Portrait@~ipadpro.png" width="2048" />
    <splash height="2048" src="resources/ios/splash/Default-Landscape@~ipadpro.png" width="2732" />
    <splash height="1136" src="resources/ios/splash/Default-568h@2x~iphone.png" width="640" />
    <splash height="1334" src="resources/ios/splash/Default-667h.png" width="750" />
    <splash height="2208" src="resources/ios/splash/Default-736h.png" width="1242" />
    <splash height="2436" src="resources/ios/splash/Default-2436h.png" width="1125" />
    <splash height="2732" src="resources/ios/splash/Default@2x~universal~anyany.png" width="2732" />
</platform>
```

您可能还会发现您需要生成一些额外的图标和启动屏幕来支持最新的设备。

> Ionic提供了一个有用的工具，可以从单个源图标和启动屏幕生成图标和初始屏幕。 [查看这里](https://github.com/ionic-team/cordova-res) 了解详情。

Config.xml 文件可能需要一些额外的更改才能正常运行。 我会查看您现有的 config.xml 中的每个元素，看看它是否使用 [最新的语法](https://cordova.apache.org/docs/en/latest/config_ref/index.html)。 您需要意识到的其他更改是访问某些功能，如位置、 摄像机或麦克风需要额外的元素才能使用。 如果您现有的应用程序使用了其中的任何功能，您需要添加新元素以使它们能够运行。

最后。 你还要确定你所使用的Cordova插件都是最新版本，以确保与当前版本的 Cordova兼容。

### 迁移代码

当我们的图标，splash屏幕和config.xml 就绪后，我们就可以将注意力转向应用本身。 Ionic Appflow 期望整个应用程序都在名为 `www` 的目录内。 设置完成！ 创建相应目录，然后将所有相关文件移动到目录中，包括HTML、CSS 、JavaScript、图像和任何其他相关资源文件。

以下是应用的目录结构：

![App应用结构](/docs/assets/img/appflow/cookbook/app_structure.png)

### 设置 Git 仓库

> 如果您已经在 Git 仓库中拥有您的应用，您可以跳过此部分。

PhoneGap 构建的一个呼吁是它简单地触发一座建筑，把你的应用压缩进去， 然后上传到 PhoneGap 构建，然后自动开启。 虽然可以将 PhoneGap 构建与 Git 仓库连接，但这是一个可选步骤。 Ionic Appflow 需要使用 Git 作为其工作流程的一部分。

如果您在 Mac 上，Git 已经安装。 但如果尚未安装 Git ，Windows用户将需要安装 Git 。 我推荐使用 https://gitforwindows.org/ 或者那些不适合使用 CLI 的人，GitHub 的 [桌面应用程序](https://desktop.github.com)。 它使得与 Git 的合作更加容易。

如果您从一个新项目开始，我们需要通过运行此命令来初始化一个新的仓库：

```shell
$ git init
```

当仓库生成时，我们需要将文件添加到它。 如果你的项目包括你不想在源代码控制下的项目, 像一个 node_modules 文件夹，您需要包含一个 。 您的项目文件夹中的简化文件。 一旦准备就绪，运行以下命令：

```shell
$ git add .
```

您的文件已经被分阶段提交到仓库中。 要执行实际承诺，我们需要运行git提交命令并提供提交消息：

```shell
$ git commit -m "初始提交"
```

您将会看到在终端中用于仓库的所有文件。

接下来, Ionic建议使用 [GitHub](https://github.com) 或 [BitBucket](https://bitbucket.org) 来托管您的 Git 存储库。 如果您没有帐户， 注册其中任何一种，然后按照所提供的指示在他们的站点中创建一个新的存储库。

有各种方式可以将您的本地存储库添加到他们的站点，但最终您可以从命令行创建一个：

```shell
$ git push origin master
```

## Appflow 配置

随着您的应用程序准备好 Appflow 集成，现在是注册的时候了，链接您的 Git 仓库，然后生成原生的 iOS 和 Android 版本。 由 [开始注册 Appflow 帐户](https://dashboard.ionicframework.com)。

一旦您登录到 Appflow，导航到应用页面，然后点击"New App"按钮。 输入您的应用名称，然后点击"Create App"按钮。

### 连接到 Git 主机

接下来, 导航到 Settings -> Git 页面。 在“GitHub ”或“Bitbucket Cloud”标签下， 点击"连接"按钮将您的GitHub 或 BitBitket 账户连接到Ionic Appflow，然后使用标准的 OAuth 登录过程进行身份验证。

在连接您的帐户后，您的代码仓库列表将会出现。 选择您早些时候创建的一个。 一旦被选中，成功信息将出现：“连接到 GitHub/Bitbucket的[仓库名称]。”

您的应用程序的 Git 仓库现在已链接到 Appflow，随后的代码提交将自动被检测。

### 创建一个本地版本

只有新的提交到您的资源库才会显示在Appflow中。 在 GitHub/BitBucket 建立连接之前做出的承诺将不会被显示。 因此，我们必须做出新的承诺，才能建立一个 iOS 或 Android 应用程序。

对您的应用文件进行更改，然后将更改推送到您的 Git 主机：

```shell
$ git add .
$ git commit -m “准备构建原生应用”
$ git push origin master
```

回到 Ionic Appflow 站点，导航到提交页面。 你会看到你刚才推送的新代码提交 - 点击页面右边的"Start build"框图标开始一个新的构建。

> 当您推送更多更新时， 您可以导航到提交列表然后通过单击右侧的构建图标来触发某项提交的构建。

现在我们可以选择我们想要构建的平台：iOS (使用 Xcode 11 或 10)，Android, 或者甚至是一个网络部署 (使用 Appflow's [在线部署](/docs/appflow/deploy/intro) 功能)。 为简单起见，（更详细的证书细节见下文） 选择 Android 作为目标平台 - 它不需要安全证书来生成本地应用文件。

> 要了解更多关于生成安全配置文件的信息，请在[这里](/docs/appflow/package/credentials)查看。

接下来，我们可以选择构建类型，在我们的情况下，选择Debug。 其他选项需要签名证书。 在选择这些选项后，点击蓝色构建按钮。

这将会旋转一个虚拟机来执行我们的构建。 在这里，我们可以非常详细地观察正在为我们执行的各种构建步骤。 构建完成需要几分钟时间。 看到这个进程的所有这些细节的好事是当某些事情发生时，你对这个问题有了更深入的了解。 完成后，您可以下载本地应用程序并将其安装到您的移动设备上。

就是这样！ <strong>您已成功地将您的应用从 PhoneGap 构建迁移到 Ionic Appflow。</strong>

当您可以在这里停止并使用Appflow作为您原生的 iOS 和 Android 版本时， 继续阅读关于如何将您的应用转换为Ionic app的详细信息。虽然不是必需的，它提供了一个现代应用开发体验，展示了一个 [开放源码用户界面工具包](/docs/) 与最新的 iOS 和 Android 设计， 动画和手势。

## 迁移到Ionic

要开始将您现有的应用程序转换为 Ionic, 请先安装Ionic CLI

> 如果您的电脑上没有安装Node或npm，您需要先安装Node或npm，然后再继续。 如果您需要安装Node，请选择[当前的LTS版本](https://nodejs.org)。

打开您的命令行并运行：

```shell
$ npm i -g @ionic/cli
```

这将安装 Ionic CLI 供全局使用。 我们将使用 Ionic CLI 的命令来创建和初始化我们的项目，然后将它链接到我们的Ionic Appflow 帐户。 说到 Ionic Appflow 帐户，如果您没有创建一个帐户，让我们这样做。 转到 Ionic 仪表盘并 [创建您的帐户](https://dashboard.ionicframework.com/signup)。 完成此操作后，我们可以返回命令行并继续下一步。

### 创建一个 Ionic 应用程序

随着Ioncon CLI 安装，我们现在可以初始化项目。 如果您正在启动一个新项目，只需创建一个我们将能够工作的新项目目录。 如果你有一个现有的项目，你也可能想要创建一个新的项目目录并将你的项目移动到它。 但是，如果您的项目已经在git的源代码控制下，则建议将项目保留在原位置，并在该目录中运行。

现在我们已经设置了我们的活动目录，我们可以运行 `ionic init` 命令：

```shell
$ ionic init
```

此命令将询问您的项目名称，例如"Ionic App Flow Demo"。 然后，它将通知我们它无法确定项目类型。 由于我们正在迁移一个非Ionic应用程序, 请选择自定义选项。 如果您正在将 Ionic Applow 添加到现有的Ionic应用程序中，您将使用 Ionic Appflow [安装指南](/docs/appflow/quickstart)。 CLI 然后会在我们的目录中生成一个 `ionic.config.json`。 内容相当直截了当：

```json
{
  "name": "Ionic App Flow Demo",
  "integrations": {},
  "type": "custom"
}
```

我们将在稍后讨论该集成价值，但让我们完成基础配置的设置。 另一个将需要的元素是 `package.json` 文件。 如果你的项目已经有一个，你可以跳过这个步骤。只需记住你将需要包含在这个目录中。 如果您没有，请运行 `npm init`。 像 `ionic init` 命令一样，它会问您一系列问题，继续前进并使用建议的答复。 `package.json` 看起来类似于：

```json
{
  "name": "ionic-app-flow-demo",
  "version": "1.0.0",
  "description": "Appflow demo",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

## 整合 Cordova

下一步是将 Cordova 添加到我们的项目。 用这个本地运行解决方案来帮助开发者完成他们可能需要解决的一些更常见的复杂任务。 其中包括信息解决、支付系统、认证等等。 由于我们正在迁移一个基于Cordova的现有应用程序，我们需要运行以下命令：

```shell
$ ionic integrations enable cordova
```

现在，如果你没有将你的 config.xml 移动到这个目录，它将为我们生成一个。 这是有用的，因为您现在有一个当前的参考文献，可以与当您将现有的 config.xml 迁移过来时进行比较。 此外，它将生成一个资源文件夹，它将包含占位符应用程序图标和安卓系统的初始屏幕。

## 正在连接到Ionic Appflow

通过我们的应用程序配置为使用Ionic Appflow，我们现在可以将它连接到服务上。 从命令行我们需要登录到Ionic Dashboard：

```shell
$ ionic login
```

请先输入您用来创建 Ionic Appflow 帐户的电子邮件和密码。

现在我们已登录，我们可以将此应用链接到我们的帐户。 要执行这一步，请运行：

```shell
$ ionic link
```

这会促使我们选择通过使用 Ionic Appflow 控制面板或创建一个新应用程序来连接我们已定义的现有应用程序。 选择"Create new app"选项。

CLI 现在提示应用程序的名称。这应该是您应用程序的真实名称。 接下来，您将被提示选择您要使用的Git主机，GitHub 或 Ionic。 如果您选择 GitHub，它将引导您完成安全地将您的仓库连接到 Ionic Appflow s服务所需的步骤。 这里我们将选择Ionic Appflow, 但注意此选项不是想要做一个 Git 主机。 Ionic强烈建议使用 GitHub 、 Bitbucket 或其他官方的 git 托管服务备份您的源代码存储库。

然后，CLI 将询问您的 SSH(Secure SHell) 设置。 这将允许您的系统和Ionic Appflow之间的安全连接。 我将选择自动设置新的 SSH 密钥对的默认选项。 与此相关，我们的应用与Ionic Appflow相连。 如果您跳转到 Appflow控制面板，您现在应该看到我们的应用程序在控制面板中列出(https://dashboard.ionicframework.com)。

## 最后"推送"

既然我们终于有了我们的所有物品，我们就可以把我们的第一座远距离建筑拆除。 基于 Appflow的构建是由 git 推送事件触发的。 根据哪个git主机，您选择的命令略有不同。 如果你选择Ionic作为你的主机，则命令是：

```shell
$ git push ionic master
```

否则，通常是：

```shell
$ git push origin master
```

它应该促使您获取分配给 SSH 密钥的口令，然后开始将文件传输到 Ionic Appflow系统的过程。 现在我们准备告诉Appflow来创建我们的第一个构建。 切换到Ionic Appflow面板，选择您的应用，然后从左侧的选项中选择构建菜单项。

如果你还没有进行构建，它将促使我们创建我们的第一个，所以继续前进并点击按钮！ 接下来，我们必须选择我们想要使用哪个承诺来构建。 目前，我们只有一项承诺，因此选择很简单。

现在我们可以选择我们想要构建的平台： iOS (使用 Xcode 11 或 10) 或 Android 。 接下来，我们可以选择构建类型，在我们的情况下，它将是调试的。 The other options require a signing certificate. With those choices selected, click the blue Build button.

This will spin up a virtual machine to perform our build(s) on. Here we can watch in great detail the various build steps that are being executed for us. It will take a few minutes for the build to complete. The nice thing about seeing all these details of the process is when something goes amiss, you have far better insight into the issue. Once the process is done, you can download your native application and install it on your mobile device.

That’s it! You’ve migrated your app to Ionic. To learn more about Ionic Framework’s UI components, [see here](/docs/). To explore the Ionic CLI, [see here](/docs/cli).

## Next Steps

You’ve created your first native application with Ionic Appflow, but that’s just the tip of the iceberg! Appflow offers many more features for teams building multiple apps quickly and easily. Feel free to explore the rest of the service, which includes Automations (robust CI/CD options including multiple environments and native configurations), Live Deploy (update the UI and business logic of your app remotely in real time) and recently, [1-click publish to app stores](https://ionicframework.com/blog/announcing-1-click-publish-to-app-stores-from-ionic-appflow/).

### Migrating Apple and Google Certificates

As seen above, Android debug builds are the easiest to get working, since they do not require a security certificate. However, Android release builds and all iOS build types require the application to be properly signed. If you have your certificates already stored on PhoneGap Build, there is no method to download them from the service. Thankfully, Apple certificates can be regenerated using Apple’s developer portal.

For Android certificates, since these were originally created locally by you, there is unfortunately no way to regenerate them. Since the Google Play Store requires updates to an app be signed with the same key, creating a new key will not work. If you are unable to locate the original key, a suggestion is to build a version of the app that alerts the current users of the new version and ask them to migrate to it.

For more information about signing certificates and security profiles, please check out the details [here](/docs/appflow/package/credentials).

### Migrate from Cordova to Capacitor

While this article highlighted the steps you need to take to migrate your Cordova/PhoneGap based application to use Ionic's Appflow, there is another option worth considering: [Capacitor](https://capacitor.ionicframework.com/docs/).

For those unfamiliar with this solution, it is in many ways the spiritual successor to Cordova. While still leveraging web technologies to code your application, Capacitor allows the development to move close to the native tooling and capabilities providing an even better user experience and performance.

Fortunately, the migration process is easy and the majority of Cordova plugins are backward compatible with Capacitor. [Start migrating here](https://capacitor.ionicframework.com/docs/cordova/migrating-from-cordova-to-capacitor).

### Have Questions? Stuck? Migration Assistance Available

If you have any questions or run into issues working with Ionic Appflow, visit the [Ionic Forums](https://forum.ionicframework.com/c/ionic-appflow/). If you need migration assistance, Ionic has [Advisory services](https://ionicframework.com/advisory) available as well.
