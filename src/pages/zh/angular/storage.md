---
previousText: '测试'
previousUrl: '/docs/angular/testing'
nextText: '性能'
nextUrl: '/docs/angular/performance'
---

# 数据存储

有多种选项可用于在Ionic应用程序中存储数据。

这里有两个官方Ionic选项:

## Ionic安全存储

对于开发关键任务应用或需要加密支持的团队来说，[Ionic Secure Storage](https://ionic.io/docs/secure-storage)是Ionic team提供的官方高级解决方案，它提供了一个跨平台的数据存储系统，可在iOS和Android上运行

它可以很容易地在iOS、Android和web上构建高性能、离线的Ionic应用程序。

[了解更多](https://ionic.io/products/secure-storage)

## @ionic/storage

For developers not requiring encryption nor relational data support, [@ionic/storage](https://github.com/ionic-team/ionic-storage) is an open source key/value API for building apps that work across storage engines on multiple platforms.

Additionally, Ionic Secure Storage has a driver that works with the key/value API in `@ionic/storage` while providing encryption and SQLite support.

Learn more about [@ionic/storage](https://github.com/ionic-team/ionic-storage)
