---
title: '渠道'
previousText: 'Deploy Builds'
previousUrl: '/docs/appflow/deploy/builds'
nextText: 'Deploy API'
nextUrl: '/docs/appflow/deploy/api'
---

Channel指向应用程序的特定部署构建，该构建将与任何配置为侦听该channel进行更新的设备共享。 您可以随时更改channel指向的构建，也可以回滚更改。

当你在应用程序中(通过点击channel中的下载介绍)[下载了Appflow SDK](/docs/appflow/quickstart/installation)，任何配置到该channel的本机二进制文件都将在加载通道时检查该通道是否有可用的更新

## 设置Channel

每个应用都有两个默认channel： **Master**和**Production**。

常见的用例是将**Production** Channel 用于App Store二进制文件，并使用** Master ** Channel 是在开发过程中自动在手机上运行本机二进制文件。

Once you've set up a Channel, just click **Install Instructions** next to that Channel and it will walk you through the options available and generate the Command Line command that you should run.

要创建这两个以上的新channel，必须拥有付费的Ionic Appflow成员资格。 To add new channels, simply view the channels list by going to Deploy -> Destinations, and then click the `New destination` button.

## 构建Channel

Once you have created a Channel, go back to the **Builds** section of your app. On the right side of each Build, you'll see a "Deploy live updates" button.

![构建Channel](/docs/assets/img/appflow/assign-to-channel.png)

点击此处设置 Build为Channel的活动。

将Build设置为Channel激活后，使用Ionic Deploy设置的所有本机二进制文件 该Channel将在他们下次签入时收到新的更新。

## 从Git分支自动部署

如果您有兴趣从git自动化部署到将其部署到某个channel，请使用我们的[Automation](/docs/appflow/automation/intro)功能，如果您的[计划](/pricing)包含这些功能，。