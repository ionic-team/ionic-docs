---
title: Using Automations
sidebar_label: Create Automations
previousText: 'Introduction'
previousUrl: '/docs/appflow/automation/intro'
nextText: 'Environments'
nextUrl: '/docs/appflow/automation/environments'
---

## 自动化管理

创建和自定义自动化是简单的。 首先，导航到应用程序中的`Automate`选项卡。

要**创建一个新的automation**，点击位于`Automate`仪表板右上角的`New Automation`按钮。 单击后，将出现自动化定制表单，其中有几个字段可用来定制自动化(请参阅[下面的](#customizing-automations))。

要**编辑自动化**，请点击您要修改的点旁边的三个点。

## 自定义自动化

有许多自定义可用来指定给定自动化的特定行为。 它们显示在下面的创建/编辑自动化表单中。

### 基本自动化信息

所有自动化都需要一个名称和git分支来触发。 当代码被推到选定的分支时，自动化将运行。

![选择自动化类型](/docs/assets/img/appflow/ss-automation-create-type.png)

#### 字段

* **名称：** 识别自动化任务的名称。
* **Git 分支：** 触发自动化的分支。 这将在`git push`到达指定分支时运行构建。
* **Target Platform:** The platform of the jobs this automation will run.

除了名称和git 分支外，自动化还有一些根据选定的工作类型可以进行的定制。

##### 关于 Git 分支命名的说明

可以指定一个或多个 `*` 通配符字符，在一个单一的自动化内匹配多个分支；例如：

* 分支只设置为 `*` 将与所有分支匹配，并且将触发任何单一的 git 推送的自动化
* 一个分支设置为 `dev*` 将与任何以 `dev` 开头名称包括 `dev` 本身的分支匹配
* 一个分支设置为 `dev*` 将与任何名称以 `dev` 开始，以`other`结束包括 `devother`本身的分支匹配

### iOS and Android Automations

iOS and Android automations create native builds which can be downloaded and run on devices. 他们有下列自定义：

![Creating a ios or android automation](/docs/assets/img/appflow/ss-automation-create-package.png)

#### 字段

* **Build Stack:** The [build stack](/docs/appflow/build-stacks) where the job created by this automation will run.
* **Build Type:** The type of build to create. Options depend on the selected platform.
* **Signing Certificate:** Which signing certificate to use. Learn more about them [here](/docs/appflow/package/credentials).
* **Environment:** The [custom build environment](/docs/appflow/environments/#custom-environments) (if any) to use when this automations is triggered.
* **Native Config:** The [native config](/docs/appflow/package/intro#native-configs) (if any) to use when this automations is triggered.
* **Webhook:** (optional) If enabled, a POST with information about completed builds will be sent to the entered URL. 在[这里](/docs/appflow/automation/webhooks)了解更多关于其内容。

### Web自动化

Web自动化使用Deploy服务构建应用程序的javascript部分，并与[Deploy](/docs/appflow/deploy/intro)服务进行接口以启用实时应用程序更新。

![创建web自动化](/docs/assets/img/appflow/ss-automation-create-web.png)

#### 字段

* **环境:**[自定义构建环境](/docs/appflow/environments/#custom-environments)(如果有的话)，以便在触发此自动化时使用。
* **Web preview** (optional) If enabled, a web preview of the app will be published to a public URL.
* **Live update:** (optional) The [Deploy Channel](/docs/appflow/deploy/channels) where web builds from this automation will be assigned.
* **Webhook:** (optional) If specified, a POST with information about completed builds will be sent to the entered URL. Learn more about their content [here](/docs/appflow/automation/webhooks).

##### Note about Build Stacks

It is possible to choose one of two different options for the Build Stack:

1. always be on the latest Build Stack 
2. always be on a specific Build Stack.

If the 1. is chosen, the automation will always create jobs using the latest build stack. When the "latest" build stack is updated to a newer version nothing needs to be done and the automation will keep working.

If the 2. is chosen, the automation will always create jobs using the specified build stack until the build stack is deprecated. A clear deprecation date will be shown in the dashboard to give users time to update the automation. If a new build stack has not been chosen by the deprecation date, the automation will be automatically updated to the latest build stack on the deprecation date.