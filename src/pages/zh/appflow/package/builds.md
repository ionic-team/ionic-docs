---
previousText: 'Introduction'
previousUrl: '/docs/appflow/package/intro'
nextText: 'Package Build Types'
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

在Package界面中,你可以选择你要构建的类型进行构建以及您要使用的证书。 You'll then be taken to the History tab while the build completes. After the build completes, click Download and you'll get your native binary!

## Concurrency limits

Each account plan has a defined maximum amount of concurrent builds allowed (see [Plans Details](/pricing)). This limit is enforced at the account level across different apps.

When you trigger a build, in the Appflow Dashboard you will notice that a build can have different statuses before it is processed:

* **Queued**: this means that your build is queued for the next available runner. Usually your build should not be in this state for more than few seconds.
* **Pending**: this means that you have reached your concurrent build limit and your build will continue when your current builds are completed.

After the build starts to be processed the statuses are:

* **Running**: the build is currently being processed. You can read the logs in the build details.
* **Successful**: the build terminated in a correct state.
* **Failed**: the build terminated in an incorrect state.

More concurrent builds can be added to your plan. If you have a Starter or Developer plan, you can get more builds by [upgrading plan](https://dashboard.ionicframework.com/settings/billing). If you have a Teams or Business plan, please [contact us](https://ionic.zendesk.com/hc/en-us/requests/new).