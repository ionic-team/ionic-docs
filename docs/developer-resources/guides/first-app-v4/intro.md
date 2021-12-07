# Your First Ionic App: Angular

The great thing about Ionic is that with one codebase, you can build for any platform using familiar web tools and languages. Follow along as we create a working Photo Gallery. Here’s the before and after:

![Before and after going through this tutorial](/img/guides/first-app-v3/gallery-combined.png)

It’s easy to get started. Note that all code referenced in this guide can be [found on GitHub](https://github.com/ionic-team/photo-gallery-tutorial-ionic4/).

## Required Tools

Download/install these right away to ensure an optimal Ionic development experience:

- [Git](https://git-scm.com/downloads) for version control.
- <strong>SSH client</strong>, such as [PuTTy](https://www.putty.org/), for secure login to Appflow.
- <strong>Node.js</strong> for interacting with the Ionic ecosystem. [Download the LTS version here](https://nodejs.org/en/).
- <strong>A code editor</strong> for... writing code! We are fans of [Visual Studio Code](https://code.visualstudio.com/).
- <strong>Command-line terminal (CLI)</strong>: FYI <strong>Windows</strong> users, for the best Ionic experience, we
  recommend the built-in command line (cmd) or the Powershell CLI, running in Administrator mode. For <strong>
    Mac/Linux
  </strong> users, virtually any terminal will work.

## Install Ionic and Cordova

Run the following in the command line:

```shell
$ npm install -g @ionic/cli cordova
```

:::note
The `-g` option means _install globally_. When packages are installed globally, `EACCES` permission errors can occur.

Consider setting up npm to operate globally without elevated permissions. See [Resolving Permission Errors](../../../developing/tips.md#resolving-permission-errors) for more information.
:::

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

![Before and after going through this tutorial](/img/guides/first-app-v3/email-photogallery.gif)

Open the photo-gallery app folder in your favorite code editor of choice, then navigate to `/src/app/tab2/tab2.page.html`. We see:

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Tab Two</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding"></ion-content>
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
