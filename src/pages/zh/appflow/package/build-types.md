---
title: '构建不同类型包'
previousText: '构建原生工具包'
previousUrl: '/docs/appflow/package/builds'
nextText: '生成证书'
nextUrl: '/docs/appflow/package/credentials'
---

对于具有不同特征和需求的每个平台(iOS、Android)，您可以选择几种不同类型的构建。

## 构建Android类型

### 调试

Android 构建Debug类型不需要签名证书或安全配置文件，可以直接安装到 Android 设备。

### 发布

如果您想要在谷歌Play商店发布 `apk` ，请使用Android构建Release类型 。 他们需要创建 [android签名证书](/docs/appflow/package/credentials#android-credentials) 并将他们上传到`Production` 类型 [安全资料](/docs/appflow/package/adding-credentials#uploading-credentials)。

## 构建iOS类型

### 开发

开发型号代码签名允许您的应用通过Xcode 在设备上运行。 开发类型 iOS 构建需要 [生成签名凭据和预配配置](/docs/appflow/package/credentials#android-credentials)：

* iOS 开发预配配置文件
* iOS 开发签名证书 并应存储在一个 `开发` 类型 [安全配置](/docs/appflow/package/adding-credentials#uploading-credentials)

### 特別

使用特定类型版本的代码签名允许您将您的应用程序分发到预配配置文件中指定的设备。 还需要测试推送通知。 特设类型 iOS 构建需要 [生成签名凭据和预配配置](/docs/appflow/package/credentials#android-credentials)：

* iOS 发行预配配置文件
* iOS 生产签名证书 并应存储在 `生产` 类型 [安全配置](/docs/appflow/package/adding-credentials#uploading-credentials)

### 应用市场

使用 App Store 类型版本的代码签名允许您使用 Testflight 和 App Store 向您分发。 App Store 类型 iOS 构建需要 [生成签名凭据和预配配置](/docs/appflow/package/credentials#android-credentials) 使用：

* iOS 发行预配配置文件
* iOS 生产签名证书 并应存储在 `生产` 类型 [安全配置](/docs/appflow/package/adding-credentials#uploading-credentials)

### 企业

<blockquote>
  <p>Enterprise iOS 版本仅在我们的比额表计划中可用，并且要求您有一个
  <a href="https://developer.apple.com/programs/enterprise/" target="_blank">Apple Developer Enterprise 帐户</a>
  如果您需要此功能，请 <a href="/sales">联系我们</a></p>
</blockquote>

如果您正在构建内部使用和分发的应用程序，使用企业类型的代码签名允许您将您的应用发布到应用商店以外的设备。 企业类型 iOS 构建需要 [生成签名凭据和配置文件](/docs/appflow/package/credentials#android-credentials) 使用：

* iOS 发行预配配置文件
* iOS 生产签名证书 并应存储在 `生产` 类型 [安全配置](/docs/appflow/package/adding-credentials#uploading-credentials)