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

设置好通道后，只需单击该通道旁边的**Set Up Deploy**，它将显示可用选项并生成应该运行的命令行命令。

要创建这两个以上的新channel，必须拥有付费的Ionic Appflow成员资格。 要添加新通道，只需通过Deploy ->Channels查看channel列表，然后单击new Channel按钮。

## 构建Channel

一旦您创建了一个Channel，回到应用的 **Builds**部分。 在每个Build的正面侧，您将看到一个“Assign to Channel”图标。

![构建Channel](/docs/assets/img/appflow/assign-to-channel.png)

点击此处设置 Build为Channel的活动。

将Build设置为Channel激活后，使用Ionic Deploy设置的所有本机二进制文件 该Channel将在他们下次签入时收到新的更新。

## 从Git分支自动部署

如果您有兴趣从git自动化部署到将其部署到某个channel，请使用我们的[Automation](/docs/appflow/automation/intro)功能，如果您的[计划](/pricing)包含这些功能，。