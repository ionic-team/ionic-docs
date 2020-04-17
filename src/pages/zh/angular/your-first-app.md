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

接下来，我们要创建一个带有“标签”的Ionic Angular模板应用，并且为与原生交互的功能添加Capacitor：

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

然后，我们编辑`src/main.ts`文件，导入`@ionic/pwa-elements`

```typescript
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// 在平台被引导后，调用模块加载器
defineCustomElements(window);
```

就这么多！ 接下来是比较有意思的时候，我们看看应用究竟是什么样子的。

## 运行应用

运行这个命令：

```shell
$ ionic serve
```

看吧， 你的Ionic应用现在已经运行在浏览器里面了。 大多数应用开发构建以及测试你都可以放在浏览器里面进行，这可以大大提升开发和测试的速度。

## 图库应用

这里有三个标签， 点击Tab2标签， 这个画布上一片空白，我们可以将它变成一个图库。 Ionic的实时重载功能，可以让你修改代码并保存时，应用能够立即更新！

![本教程将头从尾构建好一个完整的应用](/docs/assets/img/guides/first-app-cap-ng/email-photogallery.gif)

在你选择的代码编辑器中打开图库应用的文件夹，然后转到`/src/app/tab2/tab2.page.html`文件。 我们看到：

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

`ion-header` 表示顶部导航和工具栏，标题为 "Tab 2"(其余两个因为iOS [可折叠大标题](https://ionicframework.com/docs/api/title#collapsible-large-titles) 支持而被折叠)。 将两个`ion-title`模块重命名为：

```html
<ion-title>Photo Gallery</ion-title>
```

我们将看到的主要内容放到`<ion-content>`中， 接下来，我们会添加一个按钮，通过这个按钮打开设备相机并显示摄像头所捕捉到的画面。 我们现在页面底部添加一个[悬浮按钮](https://ionicframework.com/docs/api/fab)(FAB)，并且给按钮设置一个摄像头图标。

```html
<ion-content>
<ion-fab vertical="bottom" horizontal="center" slot="fixed">

    <ion-fab-button>
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

接下来，打开`src/app/tabs/tabs.page.html`文件。 将标签改为“Photos”并将图标名称改为“images”：

```html
<ion-tab-button tab="tab2">
  <ion-icon name="images"></ion-icon>
  <ion-label>Photos</ion-label>
</ion-tab-button>
```

保存所有修改过的文件，应用会在浏览器自动应用。 这仅仅是我们用Ionic做的一些开始， 接下来，我们在web上加上拍照功能，然后在iOS和Android构建。