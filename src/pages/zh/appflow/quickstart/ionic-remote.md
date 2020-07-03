---
title: '使用Ionic远程连接'
previousText: '连接您的代码仓库'
previousUrl: '/docs/appflow/quickstart/connect'
nextText: '安装 Appflow SDK'
nextUrl: '/docs/appflow/quickstart/installation'
---

如果你不使用支持的 git repo 集成，你可以直接将你的源代码推到 Ional Appflow使用Git。

<blockquote>
  转化
</blockquote>

## 链接您的仓库

![Ionic 链接命令](/docs/assets/img/appflow/ionic-link.gif)

To link your local repo, simply run `ionic link` in the root directory of your existing project and choose `Ionic Appflow` as your git remote. 这将允许您选择您想要链接到的仪表板应用程序： 在您本地的 git 配置中创建一个 `离子` 远程， 并在将更改推送到Ionic Appflow时创建或使用 现有的 SSH 密钥对进行身份验证。

您可以在这里了解更多关于git远程 [的信息。](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)

## 建立到一个Appflow链接存储库的传送器远程连接

如果你的资源库以前已经链接到使用 Iond 远程应用的Appflow，你只需要重新建立一个新机器上的连接或作为应用程序的团队成员， 您可以运行以下命令：

```bash
$ ionic git remote
```

## 配置您的 SSH 密钥

具有象征意义的远程身份验证是通过公共/私有的 SSH 密钥对来进行的，目的是实现最安全的身份验证。 您需要上传一个公钥到IonAppflow 来验证自己。 这可以在 `离子链接` 进程中自动完成，也可以手动完成。

一旦您选择了正确的应用， `IonApp流程` 远程， 您将被提示创建一个 SSH 密钥对 或使用现有密钥。 如果您不熟悉SSH密钥，我们建议让CLI自动创建 并为您添加它们。 否则，您可以选择使用一个现有密钥，并为CLI提供一个路径，让它在您的本地机器上使用 公钥。 您也可以在 个人设置区域的 Appflow 控制面板上上传一个现有的公钥。 您可以通过点击系统仪表左下方的个人资料图标来找到它。