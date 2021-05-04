---
title: '编译/自动化'
previousText: '部署到 Google Play 商店'
previousUrl: '/docs/appflow/destinations/google'
nextText: '命令行部署'
nextUrl: '/docs/appflow/destinations/cli'
---

可以将由于手动构建或自动化导致的新构建部署到应用商店。

Careful selection of build type and signing certificates must be made to produce a build that can be properly uploaded to the app store selected.

![/docs/assets/img/appflow/deploy-to-appstore-builds.png](/docs/assets/img/appflow/deploy-to-appstore-builds.png)

- 构建类型
    - 对于iOS Xcode版本，必须为` App Store `或` Enterprise `，对于Android版本，必须为` Release `。

- Signing Certificate
    - The signing certificate must the one that will sign the build properly for uploading to the correct app store.

- 目标
    - 对于Xcode版本，您可以选择 Apple App Store， Android版本可以选择 Google Play 商店。
