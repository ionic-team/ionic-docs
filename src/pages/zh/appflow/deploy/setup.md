---
previousText: '简介'
previousUrl: '/docs/appflow/deploy/intro'
nextText: '部署构建任务'
nextUrl: '/docs/appflow/deploy/builds'
---

# 使用实时更新

Ionic Appflow的实时更新功能使得在大多数业务逻辑上可以轻松地实时部署应用更新，而无需经过传统的应用商店提交流程， 界面和风格更改。

部署功能与Ionce Appflow 兼容，需要您的应用与 [连接到 git repo](/docs/appflow/quickstart/connect/) ，以便Appflow 访问您的源代码并部署新代码更新。

<blockquote>
  
<b>注意：</b> 实时更新功能仅适用于二进制的更改 (HTML, CSS, JS), 表示如果您依赖本机代码更新，您必须先重新提交到应用商店，然后才能使用在线更新。
</blockquote>

## 安装

为了使用IonAppflow的实时更新功能，您需要 [安装并配置 Appflow SDK](/docs/appflow/quickstart/installation).

## 高级用法。

想要做些什么，比如允许用户订阅一个特殊的 Beta 频道而不是默认的生产频道？ 是否进行了一些分割测试？ 自定义更新方式(如每30分钟检查，或在登录/登出)? 查看我们的详细信息 [实时更新 API 文档](/docs/appflow/deploy/api)！