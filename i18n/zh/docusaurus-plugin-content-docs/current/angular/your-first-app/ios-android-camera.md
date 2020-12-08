---
previousText: '你的第一个Ionic应用'
previousUrl: '/docs/angular/your-first-app'
nextText: '创建一个照片墙app'
nextUrl: '/docs/angular/your-first-app/creating-photo-gallery-device-storage'
---

# Android, iOS相机

以前，我们安装并运行一个ionic应用程序在本地浏览器。 现在，让我们把它运行在您的iOS或 Android 设备上，然后开始构建照片墙功能。

## 添加 Cordova iOS 和 Android 平台

Ionic使用开源 [Cordova 项目](https://cordova.apache.org/docs/en/latest/guide/overview/) 提供本地硬件支持。 我们开始添加iOS和Android *平台* ，然后添加特定的 *插件* ，然后像相机一样：

```shell
$ ionic cordova platform add ios
$ ionic cordova platform add android
```

这些命令将创建一个 `config.xml` 文件，用于定义 Cordova iOS 和 Android 设置。 Cordova 读到这个文件，并在构建每个本地应用程序二进制文件时应用每个设置。

若要在 DevApp 上运行您的应用，首先您需要添加一个`cordova.js` 到您的 `index.html` 文件。 打开`src/index.html`文件，并将以下标签添加到 `head` 部分：

```html
<head>
  <!-- ... 其他 HTML 标签... -->

  <script src="cordova.js"></script>
</head>
```

> 注意：通常，使用Cordova构建应用程序将会添加此脚本到我们的index.html文件。 由于我们正在跳过这一步，并且使用DevApp，我们必须手动完成。

## 安装 DevApp

配置 [iOS](/docs/installation/ios) 和 [Android](/docs/installation/android) 的工具有很多步骤。 现在让我们跳过这一步。 Ionic DevApp 是一个免费的应用程序，可以轻松地在您的iOS或 Android 设备上直接运行您的 Ionic 应用。

Ionic DevApp 是一个免费的应用程序，可以轻松地在您的iOS或 Android 设备上直接运行您的 Ionic 应用。 从应用商店中下载，然后在您的设备上打开它：

<a href="https://itunes.apple.com/us/app/ionic-devapp/id1233447133?ls=1&mt=8"><img src="/docs/assets/img/guides/first-app-v3/appstore.png"></a>

<p></p>

<a href="https://play.google.com/store/apps/details?id=io.ionic.devapp&hl=en"><img src="/docs/assets/img/guides/first-app-v3/playstore.png"></a>

下一步，登录您的 Ionic 帐户。

> 还没有帐户吗？ 点击在屏幕底部的 `Sign Up` 链接。 创建一个帐户不仅可以让您访问DevApp，而且也有最新的 Ionic 新闻、直播事件和教程。 此外，它还解锁实时代码更新(提供错误修复和更快更快的新功能) 以及本地云构建(跳过复杂的构建步骤)。

随后打开终端并打开您的 Ionic 项目目录。 执行以下命令：

```shell
$ ionic serve --devapp
```

在 DevApp 中，您现在应该看到应用程序出现。 点击以载入应用。

> 如果没有出现，或者您创建此应用程序时遇到任何问题， [在这里查看](https://ionicframework.com/docs/appflow/devapp/)。

好多了！ 现在我们可以添加相机功能。 顺便提一下，你可以在 [GitHub](https://github.com/ionic-team/photo-gallery-tutorial-ionic4)上找到参考代码。

回到 `tab2.page.html`，添加以下内容：

```html
<ion-content>
<img>

<ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button>
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
</ion-fab>
</ion-content>
```

保存文件，观看到出现摄像头按钮！ 点击，注意它不做任何事情。 让我们下一步修复。

## 通过 CLI 添加相机依赖

为了使用相机，我们需要引入 JavaScript 和本地库依赖。 返回您的终端窗口，运行以下命令，将JavaScript库添加到项目中，从而在TypeScript代码中公开Camera API：

```shell
$ npm install @ionic-native/camera
```

在 `package.json`中，您会注意到新的 JavaScript 依赖性已经添加，版本号类似于以下版本：

`"@ionic-native/camera": "^5.4.0"`

下一步，运行此命令来添加本地的 iOS 和 Android 代码，允许相机在移动设备上有效地工作。 关于如何运行的更多信息，在 [Cordova](https://cordova.apache.org/docs/en/latest/guide/overview/) 和 [Ionic Native](https://ionicframework.com/docs/native) 上查看。

```shell
$ ionic cordova plugin add cordova-plugin-camera
```

`config.xml` 文件现在更新成类似于下列本地相机代码的条目：

```xml
<plugin name="cordova-plugin-camera" spec="^4.0.3" />
```

下一步仅需要 iOS 用户。 在 iOS 10 中，开发者必须提供应用程序访问设备相机的理由。 添加到这个至 `config.xml` 的底部：

```xml
<!-- Required for iOS 10: Camera permission prompt -->
<edit-config file="*-Info.plist" mode="merge" target="NSCameraUsageDescription">
    <string>Used to take pictures</string>
</edit-config>
```

## 将相机插件添加到Angular的App Module

我们需要采取的另一步，因为这是一个 Angular 化项目：在App Module注册Camera (`src/app/app.module.ts`)。 首先，导入Camera模块：

```Javascript
import { Camera } from '@ionic-native/camera/ngx';
```

然后，添加到Provider中：

```Javascript
providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
```

现在可以在我们的任何应用页面上使用。

## 将Camera添加到相册页面

我们的相机按钮还没有做任何事情。 在 `tab2.page.html`中，添加点击按钮事件：

```html
<ion-fab vertical="bottom" horizontal="center" slot="fixed">
  <ion-fab-button (click)="takePicture()">
    <ion-icon name="camera"></ion-icon>
  </ion-fab-button>
</ion-fab>
```

然后修改img标签。 以下代码将“HerrentsImage”变量（我们的下一个工作）绑定到要显示给用户的图像上。

```html
<img [src]="currentImage" *ngIf="currentImage">
```

打开 `tab2.page.ts` 下一步导入Camera库：

```Javascript
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
```

下面定义“CurrentImage”变量，并通过构造器将Camera注入到这个类：

```Javascript
export class Tab2Page {
  currentImage: any;

  constructor(private camera: Camera) { }
}
```

最后，在 `tab2.page.ts`中添加“takePicture”方法。 在该摄像头按钮被点击后将被连接执行：

```Javascript
export class Tab2Page {
  currentImage: any;

  constructor(private camera: Camera) { }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log("Camera issue:" + err);
    });
  }
}
```

注意：没有提到iOS或 Android！ 这是插件的优势：您使用一个API (`camera.getPicture()`) ，插件会兼容不同的平台。 编写一次，运行在不同平台。 😀

保存此文件然后点击DevApp 中的相机按钮。 摄像头应该在您的设备上已经打开。 一旦拍摄了一张照片，它显示在Photo Gallery页面上。

下一步，我们将研究如何将应用转换成照片库，以及如何将照片保存到您的设备！

<div style="text-align:right;">
  <docs-button href="/docs/angular/your-first-app/creating-photo-gallery-device-storage">继续 <svg viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></docs-button>
</div>
