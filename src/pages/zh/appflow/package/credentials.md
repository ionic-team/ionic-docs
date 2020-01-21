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
$ keytool -genkey -v -keystore MY-RELEASE-KEY.keystore -alias MY_ALIAS_NAME -keyalg RSA -keysize 2048 -validity 10000
```

## iOS 证书

您将需要 Apple Developer 帐户(个人或组织)。 查看 [会员对比](https://developer.apple.com/support/compare-memberships/)。

### 注册您的苹果账户

每个应用必须注册苹果的 ID。

* 导航到 [证书 ID ](https://developer.apple.com/account/ios/identifier/bundle)& [苹果开发者中心](https://developer.apple.com/account) 中注册一个新的应用ID。

![iOS App id](/docs/assets/img/appflow/ss-profiles-ios-app-id.png)

* 在明确应用ID下，将Bundle ID设置为您在应用 `config.xml` 文件中指定的 ID。 iOS Bundle ID 是一个反转地址，例如 `com.ionicframework.MyIonicApp`。

### 设备绑定

开发过程中发送推送通知的设备必须在 Apple 中明确注册。

* Navigate to [Certificates, Identifiers & Profiles › Devices › All](https://developer.apple.com/account/ios/device/) in the [Apple Developer Center](https://developer.apple.com/account) and register a new Device.

![iOS Register Device](/docs/assets/img/appflow/ss-profiles-ios-device-register-1.png)

* Give your device a name and enter the device's UDID. [Find your UDID](ios-udid).

### Certificate Signing Request

Before you can get a certificate from Apple, you'll need to generate a certificate signing request file. It can be created on Mac OSX by using Keychain Access and on other platforms by using OpenSSL.

#### Using Keychain Access

* Navigate to Keychain Access › Certificate Assistant › Request a Certificate From a Certificate Authority on your Mac.

![iOS CSR](/docs/assets/img/appflow/ss-profiles-ios-csr.png)

* Enter your name and email address. Leave the CA Email blank.
* Select Saved to disk and hit continue. This will generate your `.certSigningRequest` file.

#### Using OpenSSL

* Generate a private RSA key file.

```bash
$ openssl genrsa -out keyname.key 2048
```

* Create the certificate signing request file by filling out the interactive form.

```bash
$ openssl req -new -key keyname.key -out CertificateSigningRequest.certSigningRequest
```

### iOS App Certificate & Provisioning Profile

Before you can generate App Certificates & Provisioning Profiles, you'll need to [register your app and any devices, and obtain a `.certSigningRequest`](#ios-setup).

App Certificates & Provisioning Profiles are for signing your app and giving it access to certain devices.

#### Certificate

There are two types of Apple certificates: development and production. We'll guide you through generating credentials with a development certificate.

* Navigate to [Certificates, Identifiers & Profiles › Certificates › Development](https://developer.apple.com/account/ios/certificate/development) in the [Apple Developer Center](https://developer.apple.com/account) and create a new certificate. Under Development, select iOS App Development.

![iOS Cert](/docs/assets/img/appflow/ss-profiles-ios-cert-1.png)

* Step through the steps. Upload the `.certSigningRequest` you created to generate a certificate. Then, download your certificate. It should be a `.cer` file.

Next, we'll need to convert the certificate from a `.cer` file to a `.p12` file. It can be converted on Mac OSX by using Keychain Access and on other platforms by using OpenSSL.

#### Using Keychain Access

* Drag your `.cer` file into your login keychain.
* Right click on your imported certificate and click Export.

![iOS Cert](/docs/assets/img/appflow/ss-profiles-ios-cert-2.png)

* Select Personal Information Exchange (.p12) for File Format.
* Save the certificate, giving it a strong password.

#### 使用 OpenSSL

* Download your iOS certificate to the same directory as your private RSA key.
* Change the format of the iOS certificate to PEM.

```bash
$ openssl x509 -inform DER -outform PEM -in ios_development.cer -out ios_development.cer.pem
```

* Export the certificate as a `.p12` file, giving it a strong password.

```bash
$ openssl pkcs12 -export -inkey keyname.key -in ios_development.cer.pem -out Certificates.p12
```

### 置备配置文件

Provisioning profiles give your app access to be installed, or *provisioned*, on specific devices. For iOS App Development provisioning profiles, devices are selected manually.

* Navigate to [Certificates, Identifiers & Profiles › Provisioning Profiles › Development](https://developer.apple.com/account/ios/profile/limited) in the [Apple Developer Center](https://developer.apple.com/account) and create a new provisioning profile.

![iOS Provisioning Profile](/docs/assets/img/appflow/ss-profiles-ios-pp-1.png)

* Under **Development**, select **iOS App Development**.
* Select the correct App ID (with the Bundle ID matching your app's `config.xml` file)
* Select the certificate you generated.
* Select any and all development devices.
* Download the `.mobileprovision` file, which is your provisioning profile file.