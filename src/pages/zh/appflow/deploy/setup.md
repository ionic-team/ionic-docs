---
previousText: '简介'
previousUrl: '/docs/appflow/deploy/intro'
nextText: '部署构建任务'
nextUrl: '/docs/appflow/deploy/builds'
---

# Using Live Update

Ionic Appflow's Live Update feature makes it easy to deploy app updates in real time without going through a traditional app store submission process for the vast majority of business logic, UI, and style changes.

The Deploy feature works with the Ionic Appflow and requires your app is [connected to a git repo](/docs/appflow/quickstart/connect/) in order for Appflow to access your source code and deploy new code updates..

<blockquote>
  
<b>Note:</b> The Live Update feature only works on binary compatible changes (HTML, CSS, JS), meaning if you rely on native code updates you must resubmit to the app store first before using Live Update.
</blockquote>

## 安装

In order to use Ionic Appflow's Live Update feature you'll need to [install and configure the Appflow SDK](/docs/appflow/quickstart/installation).

## 高级用法。

想要做些什么，比如允许用户订阅一个特殊的 Beta 频道而不是默认的生产频道？ 是否进行了一些分割测试？ 自定义更新方式(如每30分钟检查，或在登录/登出)? Check out our detailed [Live Update API Documentation](/docs/appflow/deploy/api)!