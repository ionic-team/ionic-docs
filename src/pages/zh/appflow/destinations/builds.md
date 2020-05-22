---
title: '编译/自动化'
previousText: '部署到 Google Play 商店'
previousUrl: '/docs/appflow/destinations/google'
nextText: '命令行部署'
nextUrl: '/docs/appflow/destinations/cli'
---

可以将由于手动构建或自动化导致的新构建部署到应用商店。

必须仔细选择构建类型和安全配置文件才能生成可以正确上传到应用商店的构建。

![/docs/assets/img/appflow/deploy-to-appstore-builds.png](/docs/assets/img/appflow/deploy-to-appstore-builds.png)

- 构建类型
    - 对于iOS Xcode版本，必须为` App Store `或` Enterprise `，对于Android版本，必须为` Release `。

- 安全配置文件
    - 安全配置文件必须是正确签名构建的文件，以便上传到正确的应用商店。

- 目标
    - 对于Xcode版本，您可以选择 Apple App Store， Android版本可以选择 Google Play 商店。
