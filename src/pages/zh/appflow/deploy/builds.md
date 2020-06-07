---
previousText: '设置'
previousUrl: '/docs/appflow/deploy/setup'
nextText: 'Channels'
nextUrl: '/docs/appflow/deploy/channels'
---

# Live Update Builds

## 概览

A Live Update build of your application includes only the web assets (JavaScript, HTML, fonts, and images) which can be shipped out to customer via a [Live Update](/docs/appflow/deploy/intro) deployment. Live Update builds can be created manually from the Ionic Dashboard, in the **Builds** section under **Build** in the sidebar. 您将能够从Appflow知道的可用提交列表中进行选择。 If there are no available commits you will need to push a new commit to your Git remote in order for it to show up in Appflow. 在选择提交后，从 `Target platform` 下拉菜单中选择 `Web Deploy`。

![Navigating to Live Update Builds](/docs/assets/img/appflow/deploy-builds-create-location.png)

A Live Update build will do the following:

* `npm install` 运行以安装任何依赖。
* `npm run build` 如果 `build` 脚本在您的 `package.json` `scripts`中检测到，以便为您的应用程序构建web资源。
* The `www` directory with your built application will be stored and made available for live updates.
* You can find the history and status of your Live Update builds in the side menu under `Builds` in the `Build` tab.

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