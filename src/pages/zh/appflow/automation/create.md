---
previousText: '简介'
previousUrl: '/docs/appflow/automation/intro'
nextText: '环境'
nextUrl: '/docs/appflow/automation/environments'
---

# 自动化

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
* **自动化类型：** 此自动化操作的类型。

除了名称和git 分支外，自动化还有一些根据选定的工作类型可以进行的定制。

##### 关于 Git 分支命名的说明

可以指定一个或多个 `*` 通配符字符，在一个单一的自动化内匹配多个分支；例如：

* 分支只设置为 `*` 将与所有分支匹配，并且将触发任何单一的 git 推送的自动化
* 一个分支设置为 `dev*` 将与任何以 `dev` 开头名称包括 `dev` 本身的分支匹配
* 一个分支设置为 `dev*` 将与任何名称以 `dev` 开始，以`other`结束包括 `devother`本身的分支匹配

### Package自动化

Package自动化创建可以在设备上下载和运行的本地构建。 他们有下列自定义：

![创建软件包自动化](/docs/assets/img/appflow/ss-automation-create-package.png)

#### 字段

* **环境:**[自定义构建环境](/docs/appflow/environments/#custom-environments)(如果有的话)，以便在触发此自动化时使用。
* **原生配置：** [本地配置](/docs/appflow/package/intro#native-configs) (如果有任何) 触发此自动化时使用。
* **目标平台：** 目标平台，可以是 Android 或 iOS (对于 Xcode 8 或 9)
* **构建类型：** 要创建的构建类型。 选项取决于所选平台。
* **安全配置文件：** 哪些安全配置文件需要使用。 在[这里](/docs/appflow/package/credentials)了解更多关于他们。
* **Webhook:** (可选) 如果指定，将会发送一个包含已完成构建信息的POST 到输入的 URL。 在[这里](/docs/appflow/automation/webhooks)了解更多关于其内容。

### Web自动化

Web自动化使用Deploy服务构建应用程序的javascript部分，并与[Deploy](/docs/appflow/deploy/intro)服务进行接口以启用实时应用程序更新。

![创建web自动化](/docs/assets/img/appflow/ss-automation-create-web.png)

#### 字段

* **环境:**[自定义构建环境](/docs/appflow/environments/#custom-environments)(如果有的话)，以便在触发此自动化时使用。
* **通道：** [部署通道](/docs/appflow/deploy/channels) 将分配来自此自动化的网页版本。
* **Webhook:** (可选) 如果指定，将会发送一个包含已完成构建信息的POST 到输入的 URL。 在[这里](/docs/appflow/automation/webhooks)了解更多关于其内容。