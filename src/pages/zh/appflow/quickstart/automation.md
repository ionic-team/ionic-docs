---
title: '创建自动化脚本'
previousText: '打包原生APP'
previousUrl: '/docs/appflow/quickstart/package'
nextText: '创建环境'
nextUrl: '/docs/appflow/quickstart/environment'
---

<blockquote>
  <p><b>注意：</b> 此功能仅在我们 <a href="/pricing">增长计划</a> 及以上版本中可用。</p>
</blockquote>

[自动化](/docs/appflow/automation/intro) 使您和您的团队能够使用完整的 CI/CD 应用流程。 您可以创建 自动触发 [软件包构建](/docs/appflow/package/builds) 和 [每当您的团队向指定分支提交新代码时，您都可以部署](/docs/appflow/deploy/builds) 并且您甚至可以配置不同的自动化使用 [环境](/docs/appflow/automation/environments#custom-environments) 和 [本机配置](/docs/appflow/package/native-configs) 来构建不同版本的应用供开发， 临时议程和说明

请注意，我们只是在这里创建一个自动化。 但您可以为不同的分支或工作流创建多个自动化并自定义它们以满足您的需要。

## 为 Android 开发分支创建自动化

因为我们能够 [成功地使用软件包](/docs/appflow/quickstart/package)构建了一个 Android 二进制软件包， 我们现在可以创建 自动化触发了Android `调试` 每次开发者推送代码到 `开发` git 分支时都会构建。 这样整个团队就可以轻松地看到构建何时中断并追踪准确的承诺以进行快速和有效的调试.

开始， 导航到所需应用内的 `自动为` 标签，然后单击右上角的 `新自动化` 按钮。

![新建自动化](/docs/assets/img/appflow/ss-new-automation.png)

接下来，填写配置选项：

* **名称：** 自动化的名称。
* **Git 分支：** 您想要触发自动化的分支。 **注意：星号 (*) 是一个通配符。**
* **自动化类型：** 决定您是想要构建一个 [软件包构建](/docs/appflow/package) (bin) 还是一个 [部署版本](/docs/appflow/deploy) (实时更新)。
* 添加与自动化类型相关的任何附加配置详细信息

![新建自动化表单](/docs/assets/img/appflow/gif-new-automation.gif)

## 测试自动化

现在自动化已创建，任何开发者都会推送该应用程序的 `开发` 分支。 新的 Android `调试` 类型构建将自动启动。 只需将新的承诺推到你的 `开发` 分支来尝试自动化。

您可以通过导航到应用流程面板中的 `自动化` 页面并点击列表中的自动化来查看与特定自动化相关的所有构建。 🚀

![自动化详细信息](/docs/assets/img/appflow/ss-automation-detail.png)