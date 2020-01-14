---
previousText: 'Package Build Types'
previousUrl: '/docs/appflow/package/build-types'
nextText: 'Adding Credentials'
nextUrl: '/docs/appflow/package/adding-credentials'
---

# Generating Credentials

Security Profiles securely store your credentials so you can easily reference them when building your app in the cloud.

## Overview

You'll need two sets of Apple certificates when your app goes to production, which means you'll eventually need two Security Profiles: one for development and one for production.

We'll guide you through creating a development profile with the credentials that you need for the desired platform below.

## Android Credentials

The [Android keystore](https://developer.android.com/training/articles/keystore.html), used for signing apps, can be generated using keytool, which is included in the [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html). Change `MY-RELEASE-KEY` and `MY_ALIAS_NAME` to be relevant to your app. The tool will ask you to enter a keystore password and a key password.

```bash
$ keytool -genkey -v -keystore MY-RELEASE-KEY.keystore -alias MY_ALIAS_NAME -keyalg RSA -keysize 2048 -validity 10000
```

## iOS Credentials

You'll need an Apple Developer account (Individual or Organization). See [comparing memberships](https://developer.apple.com/support/compare-memberships/).

### Registering your App ID

Every app must register an ID with Apple.

* Navigate to [Certificates, Identifiers & Profiles › Identifiers › App IDs](https://developer.apple.com/account/ios/identifier/bundle) in the [Apple Developer Center](https://developer.apple.com/account) and register a new App ID.

![iOS App id](/docs/assets/img/appflow/ss-profiles-ios-app-id.png)

* Under Explicit App ID, set the Bundle ID to the ID you've specified in your app's `config.xml` file. iOS Bundle IDs are represented as a reversed address, such as `com.ionicframework.MyIonicApp`.

### Device Registration

Devices must be explicitly registered with Apple for sending push notifications during development.

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

#### Using OpenSSL

* Download your iOS certificate to the same directory as your private RSA key.
* Change the format of the iOS certificate to PEM.

```bash
$ openssl x509 -inform DER -outform PEM -in ios_development.cer -out ios_development.cer.pem
```

* Export the certificate as a `.p12` file, giving it a strong password.

```bash
$ openssl pkcs12 -export -inkey keyname.key -in ios_development.cer.pem -out Certificates.p12
```

### Provisioning Profile

Provisioning profiles give your app access to be installed, or *provisioned*, on specific devices. For iOS App Development provisioning profiles, devices are selected manually.

* Navigate to [Certificates, Identifiers & Profiles › Provisioning Profiles › Development](https://developer.apple.com/account/ios/profile/limited) in the [Apple Developer Center](https://developer.apple.com/account) and create a new provisioning profile.

![iOS Provisioning Profile](/docs/assets/img/appflow/ss-profiles-ios-pp-1.png)

* Under **Development**, select **iOS App Development**.
* Select the correct App ID (with the Bundle ID matching your app's `config.xml` file)
* Select the certificate you generated.
* Select any and all development devices.
* Download the `.mobileprovision` file, which is your provisioning profile file.