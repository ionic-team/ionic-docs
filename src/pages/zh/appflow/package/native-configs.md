---
previousText: 'Adding Certificates'
previousUrl: '/docs/appflow/package/adding-credentials'
nextText: '使用 Ionic CLI'
nextUrl: '/docs/appflow/package/cli'
---

# 原生配置

<blockquote>
  <p><b>注:</b>此功能仅适用于我们的<a href="/pricing">Growth plans</a>及以上。</p>
</blockquote>

本机配置允许您覆盖某些配置，而不必在每个版本/自动化的基础上对版本控制进行更改，如：

* 覆盖唯一的捆绑包标识符或` config.xml `中的[ id属性](https://cordova.apache.org/docs/en/latest/config_ref/#widget)
* 覆盖应用名称，因为它会出现在主屏幕上
* 覆盖 [应用程序流SDK 或部署插件变量和首选项](/docs/appflow/deploy/api#plugin-variables)

这使得在同一版本的代码中为多个环境构建您的应用变得容易。 如果使用[自动化](/docs/appflow/automation/intro)，则可以从同一分支触发多个自动化，这将产生不同的版本。

常用案例如下：

* 使用不同的 Bundle ID，应用程序名称来制作您应用的Staging、QA 和生产版本， 和 部署频道，以便您可以在单个设备上安装所有环境并轻松地告诉拆分
* 正在离开 [禁用部署](/docs/appflow/deploy/api#disabledeploy) `true` 进行开发，并在构建要发布的二进制文件时自动将其设置为 `false`

<blockquote>
  <b>Note:</b> If you plan to use Native Configurations to modify Bundle IDs with your iOS Package builds, you will need to setup code signing certificates using those alternate Bundle IDs. See our section on <a href="/docs/appflow/package/credentials">Generating Certificates</a> for more information.
</blockquote>

若要创建一个，请前往侧边栏中的 `构建 > 本地配置` 标签，然后点击 `新本地配置`。

![本机配置](/docs/assets/img/appflow/ss-native-configs.png)