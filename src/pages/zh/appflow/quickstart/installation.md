---
title: '安装 Appflow SDK'
previousText: '连接您的代码仓库'
previousUrl: '/docs/appflow/quickstart/connect'
nextText: '推送提交'
nextUrl: '/docs/appflow/quickstart/push'
---

为了利用一些最好的 Appflow 功能，如部署您的 应用程序的实时更新和绕过应用商店， 您需要安装 Appflow SDK (又称 Ionic Deploy 插件)。 Appflow SDK 带有Ionic Appflow 的部署功能，用于检测和同步 您的应用程序与您推送到频道的更新。

## 从仪表盘板安装 Appflow SDK (推荐)

从 Dashboard 安装 Appflow SDK 插件。 按照应用流程面板中目标列表中点击“安装说明” 提供的说明。

![安装说明](/docs/assets/img/appflow/ss-appflow-sdk-install.png)

## 手动安装 Appflow SDK

要手动安装插件，请在您的Ion应用程序的根目录中运行以下命令。 确保为您的应用替换正确的值：

```shell
ionic deploy add  \
    --app-id="YOUR_APP_ID" \
    --channel-name="YOUR_CHANNEL_NAME" \
    --update-method="background|auto|none" \
```

您也可以运行 `离子部署添加` 并且CLI 会促使您获得花蜜值。

<blockquote>
  注意： 插件延迟了 cordova 准备好的事件直到它完成更新检查 并设置首选项 <b>AutoHideSplashScreen</b> cordova 首选项在配置中设置为 false。 ml 使闪烁屏幕不会自动消失。 所有的音效模板都运行
<code>this.splashScreen.hide();</code> 默认情况下在 cordova 准备好的事件中，但如果它被删除，它应该被添加。 或者，应用程序可以在您的配置中将 <b>自动隐藏屏幕</b> cordova 首选项设置为 true。 ml 将覆盖插件添加的值，但这可能导致在下载完成之前跳过屏幕。
</blockquote>

### 插件变量

* `--app-id` 是IonAppflow应用的ID。
* `--channel-name` 是 [Channel](/docs/appflow/deploy/channels) 你喜欢应用程序听取更新。 
 * 确保使用您的频道的 *精确* 个名字，包括确切的外壳！
* `--update-method` 是 `background | auto | none`其中的一个。 这决定了当新的实时更新可供下载时您的应用程序是如何响应的。

您可以在我们的 API 文档</a> 中阅读更多关于可用的 插件变量的信息。</p> 

## 提交您的更改

安装插件后，一定要提交对您的 `config.xml` 和 `package.json` 文件的更改。

<command-line> <command-prompt>git add . # 阶段任何更改</command-prompt> <command-prompt>git commit -m "添加appflow sdk" # 提交了分阶段更改</command-prompt> </command-line>