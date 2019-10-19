---
title: '添加证书'
previousText: '生成证书'
previousUrl: '/docs/appflow/package/credentials'
nextText: '原生配置'
nextUrl: '/docs/appflow/package/native-configs'
---

在生成安全配置文件后，必须上传到 Ionic Appflow。

## 上传证书

导航到应用程序，然后到左侧标签的 `Package > 证书`。

点击 `添加个人资料` 按钮，创建一个iOS和安卓认证都可以使用 的配置文件，所以我们建议制作“Real App Store Profile”等。

<blockquote>
  
<b>注意：</b> 配置文件创建为`Development` 的`生产`并只能拥有
<a href="/docs/appflow/package/build-types">构建类型</a> 与配置文件类型关联。 </br>
<b>例如:</b> <a href="/docs/appflow/package/build-types#app-store">App Store构建</a>需要iOS生产证书和分配配置配置文件，因此必须使用</b>Production</b>类型配置文件。
</blockquote>

![添加配置文件](/docs/assets/img/appflow/ss-add-profile.png)

您需要选择上传 [生成的证书文件](/docs/appflow/package/credentials)，并输入访问证书所需的任何密码。

一旦配置文件创建，可以点击 `编辑` 按钮来删除和/或上传您的 iOS 和 Android 证书。