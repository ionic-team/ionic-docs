---
title: '构建不同类型包'
previousText: '构建原生工具包'
previousUrl: '/docs/appflow/package/builds'
nextText: '生成证书'
nextUrl: '/docs/appflow/package/credentials'
---

对于具有不同特征和需求的每个平台(iOS、Android)，您可以选择几种不同类型的构建。

## Android 构建类型

### 调试

Android 构建Debug类型不需要签名证书或安全配置文件，可以直接安装到 Android 设备。

### 发布

如果您想要在谷歌Play商店发布 `apk` ，请使用Android构建Release类型 。 他们需要创建 [android签名证书](/docs/appflow/package/credentials#android-credentials) 并将他们上传到`Production` 类型 [安全资料](/docs/appflow/package/adding-credentials#uploading-credentials)。

## iOS 构建类型

### 开发

开发型号代码签名允许您的应用通过Xcode 在设备上运行。 开发类型 iOS 构建需要 [生成签名凭据和预配配置](/docs/appflow/package/credentials#android-credentials)：

* iOS 开发预配配置文件
* iOS 开发签名证书 并应存储在一个 `开发` 类型 [安全配置](/docs/appflow/package/adding-credentials#uploading-credentials)

### 特別

Code Signing with a Ad Hoc type builds allows you to distribute your app to devices specified in the provisioning profile. And are also needed in order to test push notifications. Ad Hoc type iOS builds require [generating signing credentials and a provisioning profile](/docs/appflow/package/credentials#android-credentials) using:

* iOS distribution provisioning profile
* iOS production signing certificate and should be stored in a `Production` type [security profile](/docs/appflow/package/adding-credentials#uploading-credentials)

### 应用市场

Code Signing with a App Store type builds allows you to distribute you app using Testflight and the App Store. App Store type iOS builds require [generating signing credentials and a provisioning profile](/docs/appflow/package/credentials#android-credentials) using:

* iOS distribution provisioning profile
* iOS production signing certificate and should be stored in a `Production` type [security profile](/docs/appflow/package/adding-credentials#uploading-credentials)

### 企业

<blockquote>
  <p>Enterprise iOS builds are only available on our scale plan and require you to have an
  <a href="https://developer.apple.com/programs/enterprise/" target="_blank">Apple Developer Enterprise Account</a>
  Please <a href="/sales">contact us</a> if you require this feature.</p>
</blockquote>

Code Signing with Enterprise type builds allows you to distribute your app to devices outside of the App Store if you are building apps for internal use and distribution. Enterprise type iOS builds require [generating signing credentials and a provisioning profile](/docs/appflow/package/credentials#android-credentials) using:

* iOS distribution provisioning profile
* iOS production signing certificate and should be stored in a `Production` type [security profile](/docs/appflow/package/adding-credentials#uploading-credentials)