---
title: '构建不同类型包'
previousText: '构建原生工具包'
previousUrl: '/docs/appflow/package/builds'
nextText: 'Generating Certificates'
nextUrl: '/docs/appflow/package/credentials'
---

对于具有不同特征和需求的每个平台(iOS、Android)，您可以选择几种不同类型的构建。

## 构建Android类型

### 调试

Debug type Android builds do not require any signing certificates or signing certificates and can be sideloaded directly onto Android devices.

### 发布

如果您想要在谷歌Play商店发布 `apk` ，请使用Android构建Release类型 。 They require creating [android signing certificates](/docs/appflow/package/credentials#android-credentials) and uploading them to a `Production` type [signing certificate](/docs/appflow/package/adding-credentials#uploading-credentials).

## 构建iOS类型

### 开发

开发型号代码签名允许您的应用通过Xcode 在设备上运行。 Development type iOS builds require [generating signing certificates and a provisioning profile](/docs/appflow/package/credentials#android-credentials) using:

* iOS 开发预配配置文件
* iOS development signing certificate and should be stored in a `Development` type [signing certificate](/docs/appflow/package/adding-credentials#uploading-credentials)

### 特別

使用特定类型版本的代码签名允许您将您的应用程序分发到预配配置文件中指定的设备。 还需要测试推送通知。 Ad Hoc type iOS builds require [generating signing certificates and a provisioning profile](/docs/appflow/package/credentials#android-credentials) using:

* iOS 发行预配配置文件
* iOS production signing certificate and should be stored in a `Production` type [signing certificate](/docs/appflow/package/adding-credentials#uploading-credentials)

### 应用市场

使用 App Store 类型版本的代码签名允许您使用 Testflight 和 App Store 向您分发。 App Store type iOS builds require [generating signing certificates and a provisioning profile](/docs/appflow/package/credentials#android-credentials) using:

* iOS 发行预配配置文件
* iOS production signing certificate and should be stored in a `Production` type [signing certificate](/docs/appflow/package/adding-credentials#uploading-credentials)

### 企业

<blockquote>
  <p>Enterprise iOS 版本仅在我们的比额表计划中可用，并且要求您有一个
  <a href="https://developer.apple.com/programs/enterprise/" target="_blank">Apple Developer Enterprise 帐户</a>
  如果您需要此功能，请 <a href="/sales">联系我们</a></p>
</blockquote>

如果您正在构建内部使用和分发的应用程序，使用企业类型的代码签名允许您将您的应用发布到应用商店以外的设备。 Enterprise type iOS builds require [generating signing certificates and a provisioning profile](/docs/appflow/package/credentials#android-credentials) using:

* iOS 发行预配配置文件
* iOS production signing certificate and should be stored in a `Production` type [signing certificate](/docs/appflow/package/adding-credentials#uploading-credentials)