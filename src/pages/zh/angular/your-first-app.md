---
previousText: '概览'
previousUrl: '/docs/angular/overview'
nextText: 'iOS, Android, 以及相机'
nextUrl: '/docs/angular/your-first-app/ios-android-camera'
---

# 您的第一个 Ionic App： Angular

Ionic强大的地方是，拥有一个代码库，你可以利用熟悉的网络工具和语言建立任何平台的App。 跟随我们创建一个可以工作的照片库。 这是前后对比：

![Before and after going through this tutorial](/docs/assets/img/guides/first-app-v3/gallery-combined.png)

开始时很容易。 本章引用的所有代码都可以在[GitHub](https://github.com/ionic-team/photo-gallery-tutorial-ionic4/)上找到。

## 所需工具

下载/安装这些以确保最佳的 Ionic 开发体验：

* [Git](https://git-scm.com/downloads) 用于版本控制。
* **SSH 客户端**，例如 [PuTTy](https://www.putty.org/)，用于安全登录 Ionic Appflow。
* **Node.js** for interacting with the Ionic ecosystem. [Download the LTS version here](https://nodejs.org/en/).
* **A code editor** for... writing code! We are fans of [Visual Studio Code](https://code.visualstudio.com/).
* **Command-line terminal (CLI)**: FYI **Windows** users, for the best Ionic experience, we recommend the built-in command line (cmd) or the Powershell CLI, running in Administrator mode. For **Mac/Linux** users, virtually any terminal will work.

## Install Ionic and Cordova

Run the following in the command line:

```shell
$ npm install -g ionic cordova
```

> The `-g` option means *install globally*. When packages are installed globally, permission errors can occur. Consider [setting up npm](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) to operate globally without elevated permissions. Running the command prompt as an Admin (or using `sudo` on Mac & Linux) with npm is not recommended.

## Create an App

Next, create an Ionic Angular app using our “Tabs” app template:

```shell
$ ionic start photo-gallery tabs
```

This starter project comes complete with three pre-built pages and best practices for Ionic development. With common building blocks already in place, we can add more features easily!

Next, change into the app folder:

```shell
$ cd photo-gallery
```

That’s it! Now for the fun part - let’s see the app in action.

## Run the App

Run this command next:

```shell
ionic serve
```

And voilà! Your Ionic app is now running in a web browser. Most of your app can be built right in the browser, greatly increasing development speed.

## Photo Gallery!!!

There are three tabs. Click on the Tab2 tab. It’s a blank canvas, aka the perfect spot to add camera functionality. Let’s begin to transform this page into a Photo Gallery. Ionic features LiveReload, so when you make changes and save them, the app is updated immediately!

![Before and after going through this tutorial](/docs/assets/img/guides/first-app-v3/email-photogallery.gif)

Open the photo-gallery app folder in your favorite code editor of choice, then navigate to `/src/app/tab2/tab2.page.html`. We see:

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Tab Two</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content padding></ion-content>
```

`ion-header` represents the top navigation and toolbar, with "Tab 2" as the title. We put our app code into `ion-content`. In this case, it’s where we’ll add a button that opens the device’s camera and shows the image captured by the camera. But first, let’s start with something obvious: renaming the Tab Two page:

```html
<ion-title>Photo Gallery</ion-title>
```

Next, open `src/app/tabs/tabs.page.html`. Change the label to “Gallery” and the icon name to “images”:

```html
<ion-tab-button tab="tab2">
  <ion-icon name="images"></ion-icon>
  <ion-label>Gallery</ion-label>
</ion-tab-button>
```

That’s just the start of all the cool things we can do with Ionic. Up next, we’ll deploy the app to your iOS or Android device, then continue building the photo gallery.

<div style="text-align:right;">
  <docs-button href="/docs/angular/your-first-app/ios-android-camera">Continue <svg viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></docs-button>
</div>
