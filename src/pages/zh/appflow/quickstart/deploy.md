---
title: '部署实时更新'
previousText: '推送提交'
previousUrl: '/docs/appflow/quickstart/push'
nextText: '构建一个本地二进制文件'
nextUrl: '/docs/appflow/quickstart/package'
---

现在，我们已经[安装了Appflow SDK ](/docs/appflow/quickstart/installation)，并[按下了提交](/docs/appflow/quickstart/push)对于仪表板，我们将逐步完成将实时更新部署到设备的过程。

## 概述

在线更新功能可以通过在您的本地应用程序中使用已安装的 Appflows SDK 来监听特定的部署 [频道](/docs/appflow/deploy/channels) 目的地。

When a Web build is assigned to a Channel Destination, that update will be deployed to user devices running binaries that are configured to listen to the specified Channel Destination.

<blockquote>
<b>Nomenclature note:</b> The terms "Web build", "deploy build", "live deploy" and "live update" can be used interchangeably. 他们都引用了通过Appflow的部署功能向您的设备提供的更新。
</blockquote>

## 触发部署版本

In order to deploy a live update, you will first need to create a [Web build](/docs/appflow/deploy/builds).

这样做有两种方法：

* 点击 `开始从 <code>提交` 选项卡生成</code> 图标 ![从提交开始Web Building](/docs/assets/img/appflow/ss-start-web-build-commits.png)
* 点击右上角的 `新版本` 按钮 `构建 > 版本` 标签页 ![新建Web 版本](/docs/assets/img/appflow/ss-new-web-build.png)

您将需要确保您选择了正确的部署承诺。 Then select the `Web` target platform and the `Latest` build stack. 如果您的计划包含 [个自定义环境](/docs/appflow/automation/environments#custom-environments) 并且您至少配置了一个，您可以从提供的下拉列表中选择一个。 Finally, you can also enable the `Live Update` and pick a [Channel](/docs/appflow/deploy/channels) to automatically assign the build to once it completes successfully. 为了本教程的目的，我们将留空两个选项。

Once the build begins you will be able to watch its progress and look at the logs if you encounter errors.

![正在运行 Web 版本](/docs/assets/img/appflow/gif-start-web-build.gif)

## 网页构建版本

Web 构建完成后，它可以被限制在 Web 构建详细信息中指定的本地构建号码。 指定了最小和最大等效的构建版本号，指的是更新是否兼容。 在这么做之后，新的本地构建在应用商店中分布，与当前从 AppFlow中可用的更新没有冲突。

![网页构建版本](/docs/assets/img/appflow/web-build-versioning.png)

欲了解更多详细信息和简单的使用情况，请参阅 [此文章](https://ionic.zendesk.com/hc/en-us/articles/360003567694-How-to-restrict-Deploy-updates-by-native-version)。

## 将构建分配给频道

<blockquote>
  
<b>注意：</b> 如果您在上一步中无法成功地完成构建。 您可以在 找到常见部署系统构建错误的答案<a href="https://ionic.zendesk.com/hc/en-us/categories/360000410474-Deploy-Builds-Git-" target="_blank">我们知识库的这一部分</a>。
</blockquote>

一旦你有一个成功的部署版本， 您可以将其分配到您配置了 Appflow SDK 的同一频道。当您安装了 时，您可以在构建详细信息 页面中点击 `部署实时更新` 按钮来监听。 您也可以点击 `部署实时更新` 图标在 `构建 > 版本` 标签页上选择频道 按钮。

![分配到频道](/docs/assets/img/appflow/gif-assign-to-channel.gif)

## 在设备上接收实时更新

您的应用程序需要在设备上或仿真器上运行应用程序才能收到来自痛惜的实时更新。 最简单的 方法就是只需使用 [ionic cordova 运行](/docs/cli/commands/cordova-run) 命令就能在仿真器或连接到您计算机的设备中启动 您的本地应用程序。

<command-line> <command-prompt> ionic cordova 运行 \[ios | android\] \[options\] </command-prompt> </command-line>

If the app is configured correctly to listen to the channel you deployed it to, the application should update immediately on startup if you're using the [auto update method](/docs/appflow/deploy/api#update_method).

如果您正在使用 [背景更新方法](/docs/appflow/deploy/api#update_method)， 仅在应用程序中保持30秒左右，更新 在后台下载。 然后关闭应用程序，重新打开它，你应该看到你的更新应用 🎉。

## 禁用开发部署

一般来说，如果你正在使用仿真器开发并在线重新加载，你可能不希望部署处于活动状态。 因为它可以与你的本地开发整数。

我们建议在本地开发过程中设置 [禁用部署](/docs/appflow/deploy/api#disabledeploy) 首选为 `true` 的 `config.xml` 文件。 然后您可以在构建您的二进制文件之前先将其设置为 `fals` ，方法是手动设置 还是使用 [本机配置功能](/docs/appflow/package/native-configs) 如果您正在构建您的二进制文件包 [](/docs/appflow/package/intro)