---
title: 'Adding Certificates'
previousText: 'Generating Certificates'
previousUrl: '/docs/appflow/package/credentials'
nextText: '原生配置'
nextUrl: '/docs/appflow/package/native-configs'
---

After you have generated your Signing Certificate, you must upload it to Ionic Appflow.

## Uploading Certificates

浏览到您的应用，然后到左侧的 `构建 > 证书` 选项卡。

Click the `Add certificate` button to create a new signing certificate. Both iOS and Android certifications can be used with one signing certificate, so we recommend making things like "Real App Store Certificate", etc.

<blockquote>
  
<b>Note:</b> Signing certificates are created as either `Production` of `Development` and can only house the the
<a href="/docs/appflow/package/build-types">build types</a> associated with the signing certificate type. <br />
<b>例如：</b> <a href="/docs/appflow/package/build-types#app-store">App Store 版本</a> 需要一个 iOS 生产证书和发行配给配置配置文件 因此必须使用 </b>生产</b> 类型配置文件。
</blockquote>

![添加配置文件](/docs/assets/img/appflow/ss-add-profile.png)

You'll need to choose the [certificate files you generated](/docs/appflow/package/credentials) and upload them as well as put in any passwords needed to access the certificates.

Specifically for iOS, use [the generated](/docs/appflow/package/credentials) `.p12` file for the certificate, the `.mobileprovision` file for the Provisioning Profile, and the password used to generate the `.p12` file for the password.

Once that signing certificate has been created, can click the `Edit` button to remove and/or upload your iOS and Android certs.