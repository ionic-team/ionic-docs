---
title: '苹果应用商店'
previousText: '目标概述'
previousUrl: '/docs/appflow/destinations/destinations'
nextText: '部署到 Google Play 商店'
nextUrl: '/docs/appflow/destinations/google'
---

Apple App Store目标允许您上传您已完成的二进制文件到 App Store Connect 为iOS 设备提供的服务。


![/docs/assets/img/appflow/apple-add-destination.png](/docs/assets/img/appflow/apple-add-destination.png)

对于这个目标您需要：

> **Prerequisite:** In order to build a binary that you can upload to the Apple App Store you will need a production signing certificate configured in App Flow, details [here](https://ionicframework.com/docs/appflow/package/credentials#ios-credentials)


- **Apple App Store目标的实例名称**
    - 用户将引用此配置的内容为
- **您的 Apple ID**
    - 不需要是所有者帐户，但需要是一个可以上传二进制文件并更新应用程序的帐户。
- **您的 Apple ID 的专用密码**
    - 要设置一个特定应用程序密码，您需要为您的帐户启用两步验证。
    - 一旦启用，登录到 [https://appleid.apple.com/](https://appleid.apple.com/) 并且在安全部分有一个创建/管理专用密码的选项
- **App Store Connect 中应用的Apple ID**
    - 这是一个由苹果生成的值，这是您的应用程序所独有的。 要找到它：
        1. 登录到 App Store 连接: [https://appstoreconnect.apple.com/](https://appstoreconnect.apple.com/)
        2. 导航到应用程序
        3. 在应用程序的页面上，在一般信息下，Apple ID (应全部为数字)

    ![/docs/assets/img/appflow/apple-apple-id.png](/docs/assets/img/appflow/apple-apple-id.png)

- **(Optional) Team ID for the App from App Store Connect**
> Usually not required. But if you belong to multiple teams and are getting upload failures with error `1627`, fill out this field.
    - You can find in the <a href="https://developer.apple.com/account/#/membership" target="_blank">Membership Details</a> page in your Apple Developer account Your team name for your Apple ID (if your account is in more than one team.)
    - In most cases the correct team will be used automatically without this field being specified, but rarely it cannot be determined and needs to be set.