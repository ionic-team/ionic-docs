---
previousText: '简介'
previousUrl: '/docs/appflow/package/intro'
nextText: '构建不同类型原生包'
nextUrl: '/docs/appflow/package/build-types'
---

# 构建原生工具包

## 概览

构建原生工具包可以构建为特定平台原生工具包. 软件包构建为 Android 生成 `apk` 文件和 `ipa` iOS 文件。 当前软件包构建只能在付费计划中为客户提供，且只能在面板手动触发。 构建的基本步骤如下：

* `npm install` 安装依赖包。
* `npm run build` 如果 `build` 脚本在您的 `package.json` `scripts`中检测到，以便为您的应用程序构建web资源。
* `cordova platform add [ios|android]` 添加你要的平台 `注意：` *不要* 提交您的 `platforms` 目录，因为这将导致您的构建失败。
* `cordova build[ios|android]` 编译并生成您配置的平台，并生成 `ipa` 或 `apk` 文件
* 生成的 `ipa` 或 `apk` 将被存储并可供您从仪表盘下载
* 您可以在侧菜单中找到你的部署版本的历史和状态，在`Builds`的 `Deploy` 选项中。

## 开始构建

点击您应用中 **Code** 标签，在 **Builds** 列表中. 点击 **Package** 按钮,编译并获你想要的本地二进制包 。

在Package界面中,你可以选择你要构建的类型进行构建以及您要使用的证书。 在构建完成后，您将被带到历史选项卡。 在构建完成后，点击下载，你会得到你的本地二进制！

## 并行限制

每个账户计划都有一个定义的允许并行构建的最大数量(见 [Plans details](/pricing))。 这个限制是在不同应用的账户级别强制执行的。

当您触发构建时，在Appflow仪表盘中，您会注意到构建在处理之前可能有不同的状态：

* **队列**: 这意味着你的构建已排队到下一个可用的运行器。 通常您的构建不应超过几秒钟。
* **挂起**: 这意味着您已经达到了同时构建的上限，您的构建将在您当前构建完成后继续。

在构建开始处理后，状态为：

* **运行**: 目前正在处理构建。 您可以在构建详细信息中读取日志。
* **成功**: 构建在正确状态下终止。
* **失败**: 构建以不正确的状态终止。

可以将更多并行构建添加到您的计划。 如果您有一个启动者或开发者计划，您可以通过[升级计划](https://dashboard.ionicframework.com/settings/billing)获得更多构建。 如果您有团队或业务计划，请 [联系我们](https://ionic.zendesk.com/hc/en-us/requests/new)。