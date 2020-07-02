---
previousText: '设置'
previousUrl: '/docs/appflow/deploy/setup'
nextText: 'Channels'
nextUrl: '/docs/appflow/deploy/channels'
---

# 实时更新版本

## 概览

应用程序的实时更新仅包括网页资源 (JavaScript, HTML, 字体) 可以通过 [实时更新](/docs/appflow/deploy/intro) 部署发送给客户。 实时更新构建可以从Iond Dashboard手动创建，在 **Builds** 部分在 **构建** 在侧边栏中。 您将能够从Appflow知道的可用提交列表中进行选择。 如果没有可用的提交，您需要将新的提交推送到您的 Git 远程，以便它在应用流程中显示。 在选择提交后，从 `Target platform` 下拉菜单中选择 `Web Deploy`。

![导航到实时更新版本](/docs/assets/img/appflow/deploy-builds-create-location.png)

实时更新构建将执行以下操作：

* `npm install` 运行以安装任何依赖。
* `npm run build` 如果 `build` 脚本在您的 `package.json` `scripts`中检测到，以便为您的应用程序构建web资源。
* `www` 目录与您的内置应用程序将被存储并可用于实时更新。
* 您可以在 `Builds` 在 `Building` 标签页中的侧边菜单中找到您在线更新版本的历史和状态。

## 并行限制

每个账户计划都有允许的并行构建的最大数量 (见 [详细计划信息](/pricing))。 这一限制是在不同应用程序的账户一级强制执行的。

当您触发构建时，在Appflow Dashboard 将会注意到，构建在处理之前可能有不同的状态：

* **Queued**：这意味着您的构建将排队等待下一个可用的运行程序。 通常您的构建不应该处于此状态时间超过几秒。
* **Pending**：这意味着您已达到了您的同时建造限制，当您当前版本完成时，你的构建将会继续。

在建筑开始处理后，状态为：

* **Running**：正在处理构建。 您可以在构建细节中读取日志。
* **Successful**：构建在正确的状态下终止。
* **Failed**：构建在错误状态下终止。

可以将更多并发构建添加到您的计划中。 如果您有一个Starter或 Starter + Add-on计划，您可以通过 [升级您的计划](https://dashboard.ionicframework.com/settings/billing) 获得更多构建。

如果你有一个增长或扩张计划，请 [联系我们](https://ionic.zendesk.com/hc/en-us/requests/new)。