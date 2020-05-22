---
previousText: '原生配置'
previousUrl: '/docs/appflow/package/native-configs'
nextText: '自动化'
nextUrl: '/docs/appflow/automation/intro'
---

# 软件包在应用程序流上使用 Ionic CLI

<blockquote>
  <p><b>注意：</b> 此功能仅适用于我们的 <b>等级</b> 计划。 请 <a href="/sales">联系我们</a> 来启用此功能。</p>
</blockquote>

直接从 CLI 的 Appflow触发软件包是可能的。 如果您需要整合软件包构建步骤作为现有外部CI/CD进程的一部分，这将是极为有用的。

### 必备条件

将 Ionic CLI 升级到至少版本 `4.7.0`。

要触发软件包依赖于Ionic CLI的Appflow，需要正确订阅运行软件包构建。

为了使用环境，需要一个允许使用自动化的适当订阅。

### 认证

Ionic CLI 必须在 Appflow上进行身份验证才能触发软件包构建。

登录类型：

```bash
$ ionic login <email> <password>
```

这将提示Appflow用户名/密码。

CLI 也可以通过环境变量进行身份验证(例如，如果它是在 CI/CD 任务中使用的)。

通过环境变量建立身份验证， 第一次通过 CLI 登录 Appflow用户，用户可以访问您想要触发部署的应用程序构建：

```bash
$ ionic login <email> <password>
```

然后导出认证令牌：

```bash
$ ionic config get tokens.user
```

最后，导出令牌到您的 shell 或CI/CD 服务的环境变量。

```bash
$ export IONIC_TOKEN=<your token>
```

### 链接应用程序

您的应用必须链接到Appflow上的远程应用。 如果应用程序尚未链接，请运行：

```bash
$ ionic link <app id>
```

并将更改提交到 `ionic.config.json`。

### 触发软件包构建。

目前，软件包构建只能从根项目目录触发：

```bash
$ cd /path/to/your/app
```

假定CLI 已被身份验证，以触发软件包构建，运行：

```bash
$ ionic package Building
```

这将会提示所需的平台 (`ios`/`android`) 并构建平台的类型。

对于iOS 或 Android `版本` 版本，需要一个有效的安全配置文件，可以使用 `--security-profile=<name>` 选项。

关于设置安全配置文件的信息，请参阅 [这里](/docs/appflow/package/credentials)。

上一个命令可以单步执行：

```bash
$ ionic package buildios development --security profile="My Security Profile"
```

一旦构建成功触发，CLI将自动开始从 Appflow 尾随日志， 如果构建成功，请下载当前目录中的 `apk`/`ipa` 文件。

### 自定义软件包构建选项

可自定义构建的选项包括：

* `--environment=<name>` 指定要接触构建的环境变量组 (仅自动可用)； 更多关于环境的信息 [这里](/docs/appflow/environments/))
* `--native-config=<name>` 来指定要暴露于您的 编译的本地配置变量组 [这里](/docs/appflow/package/intro/#native-configs))

### 自定义软件包构建高级选项

可自定义构建的高级选项包括：

* `--commit=<sha1>` 提交默认值为 HEAD; 使用不同的提交，您可以使用此选项 与提交的完整的 SHA1
* `--target-platform=<name>` 如果基于任何原因需要使用 特定版本的 Xcode ，这个选项对iOS 构建非常有用。 如果省略，则使用首选版本。
* `--build-file-name=<name>` 要覆盖下载的文件名使用此选项。 例如，在一个 CI 构建中，这可能是有用的，可以为制作的艺术品提供一个一致的名称。

### 按名称说明引用选项值

名称是区分大小写的，需要指定包含空格，例如：

```bash
$ ionic package buildios development --security-profile="iOS Dev"
```

除了 `--commit` 选项以外，所有其他选项都需要在 Appflow 控制面板中设置全名。

在 Appflow中在 Security Profiles, Environments and Native Configs 页面上查找名字：

![安全配置](/docs/assets/img/appflow/cli-security-profile-list.png) ![环境](/docs/assets/img/appflow/cli-environments-list.png) ![原生配置](/docs/assets/img/appflow/cli-native-config-list.png)

对于目标平台，请在应用流程包构建表格中使用用于识别平台的字符串之一：

![目标平台](/docs/assets/img/appflow/cli-target-platform.png)