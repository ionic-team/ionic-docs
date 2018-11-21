---
nextText: 'iOS, Android, and the Camera'
nextUrl: '/docs/developer-resources/guides/first-app-v4/ios-android-camera'
---

# Your First Ionic App - Framework v4

<p class="intro">
The great thing about Ionic is that with one codebase, you can build for any platform using familiar web tools and languages. Follow along as we create a working Photo Gallery. Here’s the before and after:
</p>

![Before and after going through this tutorial](/docs/assets/img/guides/first-app-v3/gallery-combined.png)

It’s easy to get started. Note that all code referenced in this guide can be [found on GitHub](https://github.com/ionic-team/photo-gallery-tutorial-ionic4/).

## Required Tools
Download/install these right away to ensure an optimal Ionic development experience:
* [Git](https://git-scm.com/downloads) for version control.
* <strong>SSH client</strong>, such as [PuTTy](https://www.putty.org/), for secure login to Ionic Appflow.
* <strong>Node.js</strong> for interacting with the Ionic ecosystem. [Download the LTS version here](https://nodejs.org/en/).
* <strong>A code editor</strong> for... writing code! We are fans of [Visual Studio Code](https://code.visualstudio.com/).
* <strong>Command-line terminal (CLI)</strong>: FYI <strong>Windows</strong> users, for the best Ionic experience, we recommend the built-in command line (cmd) or the Powershell CLI, running in Administrator mode. For <strong>Mac/Linux</strong> users, virtually any terminal will work.

## Install Ionic and Cordova
Run the following in the command line (you may need to prepend “sudo” on a Mac):

```shell
$ npm install -g ionic cordova
```

## Create an App
Next, create an Ionic v4 app using our “Tabs” app template:

```shell
$ ionic start photo-gallery tabs --type=angular
```

This starter project comes complete with three pre-built pages and best practices for Ionic development. With common building blocks already in place, we can add more features easily!

<strong>“Install the free Ionic Appflow SDK and connect your app?”</strong>

Type “y” and press Enter. [Ionic Appflow](https://ionicframework.com/Appflow) is a powerful set of services and features built on top of the flagship Ionic Framework. This includes updating your app instantly (skipping the app store review process!), packaging apps in the cloud, and error monitoring.

<strong>Log into your Ionic Account</strong>

Sign in now to easily access awesome features like building native apps in the cloud and Live Deploys later in this tutorial. 

<strong>What would you like to do?</strong>

Choose “Create a new app on Ionic Appflow.”

<strong>Which git host would you like to use?</strong>

Choose “Ionic Appflow.”

<strong>“How would you like to connect to Ionic Appflow?”</strong>

* Choose “Automatically setup a new SSH key pair for Ionic Appflow” if you haven’t used SSH before.
* Choose “Use an existing SSH key pair” if you’ve used SSH before. 

Next, change into the app folder, then push your code to Ionic Appflow:

```shell
$ cd photo-gallery
$ git push ionic master
```

That’s it! Now for the fun part - let’s see it in action.

## Run the App
Run this command next:

```shell
ionic serve
```

And voilà! Your Ionic app is now running in a web browser. Most of your app can be built right in the browser, greatly increasing development speed.

## Photo Gallery!!!
There are three tabs: “Home”, “About”, and “Contact.” Click on the About tab. It’s a blank canvas, aka the perfect spot to add camera functionality. Let’s begin to transform the About page into a Photo Gallery. Ionic features LiveReload, so when you make changes and save them, the app is updated immediately!

![Before and after going through this tutorial](/docs/assets/img/guides/first-app-v3/email-photogallery.gif)

Open the photo-gallery app folder in your favorite code editor of choice, then navigate to `/src/app/about/about.page.html`. We see:

```html
<ion-header>
  <ion-toolbar>
    <ion-title>About</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content padding></ion-content>
```

`ion-header` represents the top navigation and toolbar, with “About” as the title. We put our app code into `ion-content`. In this case, it’s where we’ll add a button that opens the device’s camera and shows the image captured by the camera. But first, let’s start with something obvious: renaming the About page:

```html
<ion-title>Photo Gallery</ion-title>
```

Next, open `src/app/tabs/tabs.page.html`. Change the label to “Gallery” and the icon name to “images”:

```html
<ion-tab-button tab="about" href="/tabs/(about:about)">
  <ion-icon name="images"></ion-icon>
  <ion-label>Gallery</ion-label>
</ion-tab-button>
```

Now, back up your changes to Ionic Appflow:

```shell
$ git add .
$ git commit -m "converting about page to photo gallery"
$ git push ionic master
```

That’s just the start of all the cool things we can do with Ionic. Up next, we’ll deploy the app to iOS and Android, then continue building the photo gallery.