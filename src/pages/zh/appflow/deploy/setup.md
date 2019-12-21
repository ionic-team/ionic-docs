---
previousText: '简介'
previousUrl: '/docs/appflow/deploy/intro'
nextText: '部署构建任务'
nextUrl: '/docs/appflow/deploy/builds'
---

# 使用Ionic部署

Ionic Appflow的Deploy 部署特性使得实时部署应用程序更新变得很容易，而无需通过传统的应用商店提交流程来处理绝大多数业务逻辑、UI和样式更改。

Deploy 特性与Ionic Appflow一起工作，要求您的应用程序 [连接到一个 git 仓库](/docs/appflow/quickstart/connect/)，以便Appflow访问您的源代码并部署新的代码更新。

<blockquote>
<b>注:</b> Deploy功能只适用于二进制兼容更改(HTML, CSS, JS)，这意味着如果你依赖原生代码更新，你必须先重新提交到app store再使用部署。
</blockquote>

## 安装

为了使用 Ionic Approck 的部署功能，您需要 [安装并配置 Appflow SDK](/docs/appflow/quickstart/installation)。

## 高级用法。

想要做些什么，比如允许用户订阅一个特殊的 Beta 频道而不是默认的生产频道？ 是否进行了一些分割测试？ 自定义更新方式(如每30分钟检查，或在登录/登出)? 查看详细的 [Deploy API 文档](/docs/appflow/deploy/api)！