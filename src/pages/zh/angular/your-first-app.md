---
previousText: '概览'
previousUrl: '/docs/angular/overview'
nextText: 'iOS, Android, 以及相机'
nextUrl: '/docs/angular/your-first-app/ios-android-camera'
---

# 您的第一个 Ionic App： Angular

Ionic强大的地方是，拥有一个代码库，你可以利用熟悉的网络工具和语言建立任何平台的App。 跟随我们创建一个可以工作的照片库。 这是前后对比：

![在此教程之前和之后](/docs/assets/img/guides/first-app-v3/gallery-combined.png)

开始时很容易。 本章引用的所有代码都可以在[GitHub](https://github.com/ionic-team/photo-gallery-tutorial-ionic4/)上找到。

## 所需工具

下载/安装这些以确保最佳的 Ionic 开发体验：

* [Git](https://git-scm.com/downloads) 用于版本控制。
* **SSH 客户端**，例如 [PuTTy](https://www.putty.org/)，用于安全登录 Ionic Appflow。
* **Node.js** 与Ionic生态系统互动。 [在此下载LTS版本](https://nodejs.org/en/)。
* **代码编辑器** 编写代码 我们是 [Visual Studio Code](https://code.visualstudio.com/) 的粉丝。
* **命令行终端 (CLI)**: 对于**Windows** 用户，为了最佳Ionic体验，我们建议在管理员模式下运行内建的命令行 (cmd) 或 PowerShell CLI。 对于**Mac/Linux** 用户，几乎任何终端都可以使用。

## 安装 Ionic 和 Cordova

在命令行运行以下命令：

```shell
$ npm install -g ionic cordova
```

> `-g` 选项意味着在 *全局* 安装。 当全局安装软件包时，可能发生权限错误。 在没有升级权限的情况下考虑全局 [设置 npm](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) 。 以管理员权限(或者使用 `sudo` Mac & Linux) 运行npm命令是不被推荐的。

## 创建应用

下一步，使用我们的“Tabs”应用模板创建一个 Ionic Angular 应用程序：

```shell
$ ionic start photo-gallery tabs
```

该入门项目包含三个预先构建的页面和Ionic开发的最佳实践 有了通用的构建模块，我们可以轻松地添加更多的特性!

接下来，切换到应用文件夹:

```shell
$ cd photo-gallery
```

就是这样。 现在，我们可以看一下这个应用。

## 运行应用程序。

运行这个命令：

```shell
ionic serve
```

看！ 您的 Ionic 应用程序正在一个网页浏览器中运行。 您的应用程序大多可以在浏览器中构建，大大增加开发速度。

## 照片墙

有三个标签页。 点击Tab2 标签页。 这是一个空白画布，一个可以添加摄像机功能完美的地点。 让我们把这个页面变为照片库。 Ionic的实时更新功能，使您更改并保存它们时，该应用程序立即更新！

![在此教程之前和之后](/docs/assets/img/guides/first-app-v3/email-photogallery.gif)

在您最喜欢的代码编辑器中打开应用文件夹，然后导航到 `/src/app/tab2/tab2.page.html`。 我们看到：

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Tab Two</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding"></ion-content>
```

`ion-header` 表示顶部导航和工具栏，标题为“Tab 2”。 将我们的应用程序代码放入 `ion-content`。 接下来，我们会添加一个按钮，并打开设备相机并显示摄像头捕获的图像。 但首先，让我们做一个显而易见的事：重新命名标签页2：

```html
<ion-title>Photo Gallery</ion-title>
```

接下来打开 `src/app/tab/tables.page.html`。 将标签改为“Gallery”和图标名称改为“images”：

```html
<ion-tab-button tab="tab2">
  <ion-icon name="images"></ion-icon>
  <ion-label>Gallery</ion-label>
</ion-tab-button>
```

这只是我们可以使用Ionic做的事情的开始。 下一步，我们将部署应用到你的iOS或 Android 设备，然后继续构建照片库app。

<div style="text-align:right;">
  <docs-button href="/docs/angular/your-first-app/ios-android-camera">继续 <svg viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></docs-button>
</div>
