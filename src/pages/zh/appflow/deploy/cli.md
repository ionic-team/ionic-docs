---
previousText: '教程和视频'
previousUrl: '/docs/appflow/deploy/tutorials'
nextText: '原生工具包'
nextUrl: '/docs/appflow/package/intro'
---

# 在Appflow上使用 Ionic CLI 的 部署构建

<blockquote>
  <p><b>注:</b>此功能仅适用于我们的<b>Scale</b>计划。 要启用此功能请 <a href="/sales">联系我们</a>。</p>
</blockquote>

可以直接从CLI触发基于Appflow的部署构建。 如果您需要将部署构建步骤集成到现有的外部CI/CD进程中，这将非常有用。

### 基本要求

将Ionic CLI升级到版本 `4.8.0`以上。

要使用环境，需要一个允许使用自动化的Appflow订阅。

### 身份验证

必须在Appflow上对Ionic CLI进行身份验证，才能触发部署构建。

登录类型：

```bash
$ ionic login <email> <password>
```

这将提示输入Appflow的用户名/密码。

CLI还可以通过环境变量进行身份验证(例如，如果在CI/CD任务期间使用它)。

要设置通过环境变量的身份验证，首先通过CLI以Appflow用户登录，该用户可以访问您想要触发部署构建的应用程序:

```bash
$ ionic login <email> <password>
```

然后导出验证令牌：

```bash
$ ionic config get -g tokens.user
```

最后，导出令牌到你的 shell 或你的 CI/CD 服务的环境变量。

```bash
$ export IONIC_TOKEN=<your token>
```

### 链接应用程序

应用程序必须链接到Appflow上的远程应用程序。 如果应用尚未链接，请运行：

```bash
$ ionic link <app id>
```

并且将修改提交到 `ionic.config.json`。

### 触发部署构建

目前，只能从根项目目录触发部署构建：

```bash
$ cd /path/to/your/app
```

假设 CLI 被验证，触发部署构建，运行：

```bash
$ ionic deploy build
```

一旦成功触发构建，CLI将自动开始跟踪Appflow中的日志。

### 自定义部署构建选项

自定义构建选项包括：

* `--environment=<name>` 指定要公开给构建的环境变量组 (仅可用于自动化; 更多有关环境的信息可以看 [这里](/docs/appflow/environments/))
* `--channel=<name>` 指定您想自动部署到构建的channel 。 如果需要指定多个频道，可以重复多次；更多有关频道的信息可以查看 [这里](/docs/appflow/deploy/channels/)

### 使用高级选项自定义部署构建

可以自定义构建的高级选项包括：

* `--commit=<sha1>` 提交默认为HEAD;要使用不同的提交，可以将此选项与提交的完整SHA1一起使用。

### 请注意按名称引用选项值

名称是大小写敏感的，需要指定包括空格，例如:

```bash
$ ionic deploy build --channel="My Custom Channel"
```

除了`--commit`选项外，其他所有选项都需要在Appflow Dashboard中设置全名。

在Appflow的Environments 和Channels页面中查找名称:

![CLI 环境列表](/docs/assets/img/appflow/cli-environments-list.png) ![CLI Channel列表](/docs/assets/img/appflow/cli-channels-list.png)