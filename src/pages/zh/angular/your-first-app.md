---
previousText: '概述'
previousUrl: '/docs/angular/overview'
nextText: '拍照'
nextUrl: '/docs/angular/your-first-app/2-taking-photos'
---

# 你的第一个Ionic应用：Angular

Ionic强大之处在于，你只需要用HTML，CSS和JavaScript一套代码，就能构建任何平台的应用。 通过我们一步一步的指引，来学习如何用Ionic开发出一个完整的应用。

这里有一个已经开发完成并且可以在三个平台上运行的应用。 <iframe width="560" height="315" src="https://www.youtube.com/embed/0ASQ13Y1Rk4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe> 

> 如果你正在寻找之前的Ionic 4和Cordova版本指南， [看看这里](/docs/developer-resources/guides/first-app-v4/intro)。

## 我们要做哪些事

我们会创建一个图库应用，它能够调用设备进行拍照，在网格中显示所有已拍摄的照片，持久化数据。

重点包括：

* 只使用Angular以及Ionic Framework[UI组件](https://ionicframework.com/docs/components)一套代码，构建出能在web、iOS和Android运行的应用。
* 使用官方提供的原生应用运行环境[Capacitor](https://capacitor.ionicframework.com)发布原生iOS和Android移动应用。
* 图库应用的功能由[相机](https://capacitor.ionicframework.com/docs/apis/camera)，[文件系统](https://capacitor.ionicframework.com/docs/apis/filesystem)和[存储](https://capacitor.ionicframework.com/docs/apis/storage)几个API实现。

起步非常容易， 本章引用的所有代码都可以在[GitHub](https://github.com/ionic-team/photo-gallery-capacitor-ng)上找到。

## 下载必要的工具

下载安装如下工具，以保障你的Ionic应用开发体验保持最佳：

* **Node.js**与Ionic进行交互。 [下载永久支持版本](https://nodejs.org/en/)
* **一款代码编辑器** 用于编写代码 我们强烈推荐[Visual Studio Code](https://code.visualstudio.com/)。
* **命令行工具/终端（CLI）** 
 * **Windows**用户：为了保证体验，我们建议使用管理员权限启动命令行（cmd）或者Powershell CLI。
 * **Mac/Linux**用户，可以使用任意终端。

## 安装Ionic工具

在命令行工具或终端中运行以下命令以安装Ionic CLI（`ionic`），`native-run`用于在设备以及模拟器/仿真器上运行本地二进制文件，还有`cordova-res`用于生成本地应用图标以及落地页：

> 若要在Visual Studio中打开终端，可以通过 Terminal -> New Terminal。

```shell
$ npm install -g @ionic/cli native-run cordova-res
```

> `-g`的选项代表*全局安装*， 当我们通过全局进行安装包的时候，有可能会发生`无读取权限`的错误。
> 
> 这时候我们应该排查npm是否有设置能操作全局的权限， 可以查看[解决权限错误](/docs/developing/tips#resolving-permission-errors)以获取更多解决问题的信息。

## 创建应用

接下来，我们要创建一个带有“Tabs”的Ionic Angular模板应用，并且为与原生交互的功能添加Capacitor：

```shell
$ ionic start photo-gallery tabs --type=angular --capacitor
```

这个初始项目创建完成后，预置了三个页面，这是Ionic开发推崇的模式。 有了可以遵循的构建模式，我们可以很轻松地添加其他更多功能进去。

接下来，我们在命令行工具或者终端中切换到应用文件夹：

```shell
$ cd photo-gallery
```

### PWA模块

某些例如相机的Capacitor插件，通过Ionic的[PWA模块库](https://github.com/ionic-team/ionic-pwa-elements)提供基于web功能和用户界面。

这是一个单独的依赖，接下来我们安装它：

```shell
$ npm install @ionic/pwa-elements
```

Next, import `@ionic/pwa-elements` by editing `src/main.ts`.

```typescript
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);
```

That’s it! Now for the fun part - let’s see the app in action.

## Run the App

Run this command next:

```shell
$ ionic serve
```

And voilà! Your Ionic app is now running in a web browser. Most of your app can be built and tested right in the browser, greatly increasing development and testing speed.

## Photo Gallery!!!

There are three tabs. Click on the Tab2 tab. It’s a blank canvas, aka the perfect spot to transform into a Photo Gallery. The Ionic CLI features Live Reload, so when you make changes and save them, the app is updated immediately!

![Before and after going through this tutorial](/docs/assets/img/guides/first-app-cap-ng/email-photogallery.gif)

Open the photo-gallery app folder in your code editor of choice, then navigate to `/src/app/tab2/tab2.page.html`. We see:

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Tab 2</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Tab 2</ion-title>
    </ion-toolbar>
  </ion-header>
</ion-content>
```

`ion-header` represents the top navigation and toolbar, with "Tab 2" as the title (there are two of them due to iOS [Collapsible Large Title](https://ionicframework.com/docs/api/title#collapsible-large-titles) support). Rename both `ion-title` elements to:

```html
<ion-title>Photo Gallery</ion-title>
```

We put the visual aspects of our app into `<ion-content>`. In this case, it’s where we’ll add a button that opens the device’s camera as well as displays the image captured by the camera. Start by adding a [floating action button](https://ionicframework.com/docs/api/fab) (FAB) to the bottom of the page and set the camera image as the icon.

```html
<ion-content>
<ion-fab vertical="bottom" horizontal="center" slot="fixed">

    <ion-fab-button>
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

Next, open `src/app/tabs/tabs.page.html`. Change the label to “Photos” and the icon name to “images”:

```html
<ion-tab-button tab="tab2">
  <ion-icon name="images"></ion-icon>
  <ion-label>Photos</ion-label>
</ion-tab-button>
```

Save all changes to see them automatically applied in the browser. That’s just the start of all the cool things we can do with Ionic. Up next, implement camera taking functionality on the web, then build it for iOS and Android.