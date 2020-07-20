---
title: '添加证书'
previousText: '生成证书'
previousUrl: '/docs/appflow/package/credentials'
nextText: '原生配置'
nextUrl: '/docs/appflow/package/native-configs'
---

在生成安全配置文件后，必须上传到 Ionic Appflow。

## 上传证书

浏览到您的应用，然后到左侧的 `构建 > 证书` 选项卡。

点击 `添加个人资料` 按钮，创建一个iOS和安卓认证都可以使用 的配置文件，所以我们建议制作“Real App Store Profile”等。

<blockquote>
  
<b>注意：</b> 配置文件创建为`Development` 的`生产`并只能拥有
<a href="/docs/appflow/package/build-types">构建类型</a> 与配置文件类型关联。 <br />
<b>例如：</b> <a href="/docs/appflow/package/build-types#app-store">App Store 版本</a> 需要一个 iOS 生产证书和发行配给配置配置文件 因此必须使用 </b>生产</b> 类型配置文件。
</blockquote>

![添加配置文件](/docs/assets/img/appflow/ss-add-profile.png)

您需要选择上传 [生成的证书文件](/docs/appflow/package/credentials)，并输入访问证书所需的任何密码。

Specifically for iOS, use [the generated](/docs/appflow/package/credentials) `.p12` file for the certificate, the `.mobileprovision` file for the Provisioning Profile, and the password used to generate the `.p12` file for the password.

Once that Profile has been created, can click the `Edit` button to remove and/or upload your iOS and Android certs.