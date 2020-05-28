---
title: '创建本地配置'
previousText: '创建环境'
previousUrl: '/docs/appflow/quickstart/environment'
nextText: 'Live Updates'
nextUrl: '/docs/appflow/deploy/intro'
---

<blockquote>
  <p><b>注意：</b> 此功能仅在我们 <a href="/pricing">增长计划</a> 及以上版本中可用。</p>
</blockquote>

[本机配置](/docs/appflow/package/native-configs) 允许您轻松修改共同的配置值，可以在不同环境之间更改 (开发) 制作、分级等 所以您不需要使用额外逻辑或手动将它们 导入版本控制。 本地配置可以附加到任何 [软件包构建](/doc/appflow/package) 或 [自动化](/doc/appflow/automation)。

您可以使用本机配置到：

* 覆盖唯一的捆绑包标识符或` config.xml `中的[ id属性](https://cordova.apache.org/docs/en/latest/config_ref/#widget)
* 覆盖应用名称，因为它将出现在设备主屏幕上
* 覆盖 [应用程序流SDK (部署插件) 变量和首选项](/docs/appflow/deploy/api#plugin-variables)

在教程的这一部分，我们将为 `开发` 设置一个本地配置：

* 使用唯一的 bundle id 以便我们可以在同一设备上安装应用程序的开发版本和生产版本
* 更改应用程序名称，以便在设备上安装后我们可以分别告诉这两个安装
* 我们还将修改应用程序监听的开发版本的 [部署频道](/docs/appflow/deploy/channels) ，以便我们能够先指派更新到该频道以确保它们正常工作(在我们 将它们分配到 `生产` 频道)

## 创建本地配置

创建本机配置， 前往应用流程面板侧边栏中的 `Build > Native Configs` 标签，然后点击右上角的 `New native config`

下一步：

* 命名配置 `Development`
* 用 `com.snapcats.demo.development` 覆盖唯一的捆包id
* 使用` Snapcats-Dev `覆盖应用名称
* 覆盖部署频道为 `开发`

![创建本地配置](/docs/assets/img/appflow/gif-new-native-configs.gif)

## 将本机配置添加到自动化

为了充分利用您的开发环境自动化，您将想要将本机配置添加到我们早些时候创建的自动化 中。

在您的` Automations `标签中，点击自动化右侧的` Options `图标中的` Edit `，从中选择配置 在` Native Config `下拉菜单中，单击` Save `。

![向自动添加本地配置](/docs/assets/img/appflow/gif-add-native-config.gif)

现在，您的应用应该自动有一个不同的 `bundle id`，应用程序名称，并在您的开发与生产 构建之间部署通道。 这意味着你可以在同一设备上安装你的开发和生产应用程序并轻松地告诉他们！ 🔥

<blockquote>
  <b>注意：</b> 如果您打算使用本地配置来使用您的 iOS 软件包版本修改 Bundle ID， 您需要使用这些备选Bundle ID设置代码签名凭据。 查看我们关于 <a href="/docs/appflow/package/credentials">生成证书的部分</a> 获取更多信息。
</blockquote>

![设备上的多个镜头](/docs/assets/img/appflow/ss-multiple-envs-device.png)