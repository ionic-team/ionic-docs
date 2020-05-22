---
previousText: '软件包构建类型'
previousUrl: '/docs/appflow/package/build-types'
nextText: '添加证书'
nextUrl: '/docs/appflow/package/adding-credentials'
---

# 生成证书

安全配置文件安全地存储您的证书，以便您能够在云端构建应用程序时轻松引用 。

## 综述

当您的应用投入生产时，您需要两套苹果证书。 这意味着你最终需要两个安全配置文件：一个用于开发 和一个用于生产。

我们将引导您创建一个包含您需要的下面平台的 证书的开发配置文件。

## Android 证书

[Android keystore](https://developer.android.com/training/articles/keystore.html)用于签名应用，可以使用包含在 [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) 中的键盘工具来生成。 更改 `MY-RELEASE-KEY` and `MY_ALIAS_NAME` 以便与您的应用相关。 工具将要求您输入密钥存储密码和密钥密码。

```bash
$ keytool-genkey-v -keystore MY-RELEASE-KEY.keystore -alias MY_ALIAS_NAME -keyalg RSA -keysize 2048 -validity 10000 -storetype jks
```

## iOS 证书

您将需要 Apple Developer 帐户(个人或组织)。 查看 [会员对比](https://developer.apple.com/support/compare-memberships/)。

### 注册您的苹果账户

每个应用必须注册苹果的 ID。

* 导航到 [证书 ID ](https://developer.apple.com/account/ios/identifier/bundle)& [苹果开发者中心](https://developer.apple.com/account) 中注册一个新的应用ID。

![iOS 应用程序 id](/docs/assets/img/appflow/ss-profiles-ios-app-id.png)

* 在明确应用ID下，将Bundle ID设置为您在应用 `config.xml` 文件中指定的 ID。 iOS Bundle ID 是一个反转地址，例如 `com.ionicframework.MyIonicApp`。

### 设备绑定

开发过程中发送推送通知的设备必须在 Apple 中明确注册。

* 导航到 [证书 ID ](https://developer.apple.com/account/ios/device/)&ampd [苹果开发者中心](https://developer.apple.com/account) 中注册一个新的应用ID。

![iOS注册设备](/docs/assets/img/appflow/ss-profiles-ios-device-register-1.png)

* 给您的设备命名并输入设备的 UDID。 [找到您的 UDID](ios-udid)。

### 证书签名请求

在您可以从苹果获得证书之前，您需要生成证书签名请求文件。 它可以通过使用 Keychain Access 和 OpenSSL 在其他平台上创建 Mac OSX 。

#### 使用 Keychain 访问

* 浏览至Keychain 访问 JavaScript 的证书助理 Jereme 请求您的 Mac 证书颁发机构颁发证书。

![iOS CSR](/docs/assets/img/appflow/ss-profiles-ios-csr.png)

* 请输入您的姓名和电子邮件地址。 CA 电子邮件留空。
* 选择保存到磁盘并点击继续。 这将生成您的 `.certSigningRequest` 文件。

#### 使用 OpenSSL

* 生成私有的 RSA 密钥文件。

```bash
$ openssl genrsa out keyname.key 2048
```

* 填写交互式表单创建证书签名请求文件。

```bash
$ $ openssl req -new -key keyname.key -out CertificateSigningRequest.certSigningRequest
```

### iOS 应用程序证书 & 预置配置文件

在生成应用证书之前 & Profiling Profiles， 您需要 [注册您的应用程序和任何设备，并获得一个 `ertSigningRequest`](#ios-setup)

应用证书 & Profiling Profiles 用于签署您的应用并授予它访问某些设备的权限。

#### 证书

有两种苹果证书：开发和生产。 我们将通过生成开发证书来引导您。

* 导航到 [证书 ID ](https://developer.apple.com/account/ios/certificate/development)&ampd [苹果开发者中心](https://developer.apple.com/account) 中注册一个新的应用ID。 正在开发中，选择 iOS 应用程序开发。

![iOS Cert](/docs/assets/img/appflow/ss-profiles-ios-cert-1.png)

* 逐步执行步骤。 上传 `.certSigningRequest` 您创建的创建是为了生成证书。 然后下载您的证书。 它应该是一个 `.cer` 文件。

接下来，我们需要将证书从 `.cer` 文件转换为 `.p12` 文件。 它可以通过使用 Keychain 访问 Mac OSX 和使用 OpenSSL 在其他平台上转换。

#### 使用 Keychain 访问

* 将您的 `.cer` 文件拖入您的登录密钥链。
* 右键点击您导入的证书并单击出口。

![iOS Cert](/docs/assets/img/appflow/ss-profiles-ios-cert-2.png)

* 选择文件格式的个人信息交换(.p12)。
* 保存证书，给它一个强大的密码。

#### 使用 OpenSSL

* 下载您的 iOS 证书到您的私有RSA密钥相同的目录。
* 将 iOS 证书格式更改为 PEM。

```bash
$ openssl x509 -inform DER -outform PEM -in ios_development.cer -out ios_development.cer.pem
```

* 将证书导出为 `.p12` 文件，给它一个强大的密码。

```bash
$ openssl pkcs12 -export -inkey keyname.key -in ios_development.cer.pem out 证书. p12
```

### 置备配置文件

配置配置文件可以让您的应用访问被安装，或者 *在特定设备上预配了*。 对于iOS 应用程序开发预配文件，设备是手动选择的。

* 导航到 [证书 标识符 & 在 [苹果开发中 心](https://developer.apple.com/account) 中的释义赤纬开发](https://developer.apple. com/ac count/ios/profile/limited) 并创建一个新的配套配置文件。

![iOS 预置配置文件](/docs/assets/img/appflow/ss-profiles-ios-pp-1.png)

* 在 **开发**之下，选择 **iOS 应用程序开发**。
* 选择正确的App ID (与你的应用程序的 `config.xml` 文件匹配)
* 选择您生成的证书。
* 选择任何和所有开发设备。
* 下载 `.mobilepropose` 文件，这是您的预配配置文件文件。