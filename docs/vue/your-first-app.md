---
sidebar_label: Build Your First App
---

# Your First Ionic App: Vue

The great thing about Ionic is that with one codebase, you can build for any platform using just HTML, CSS, and JavaScript. Follow along as we learn the fundamentals of Ionic app development by creating a realistic app step by step.

Here’s the finished app running on all 3 platforms:

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/0ASQ13Y1Rk4"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

## What We'll Build

We'll create a Photo Gallery app that offers the ability to take photos with your device's camera, display them in a grid, and store them permanently on the device.

Highlights include:

- One Vue-based codebase that runs on the web, iOS, and Android using Ionic Framework [UI components](https://ionicframework.com/docs/components).
- Deployed as a native iOS and Android mobile app using [Capacitor](https://capacitor.ionicframework.com), Ionic's official native app runtime.
- Photo Gallery functionality powered by the Capacitor [Camera](https://capacitor.ionicframework.com/docs/apis/camera), [Filesystem](https://capacitor.ionicframework.com/docs/apis/filesystem), and [Storage](https://capacitor.ionicframework.com/docs/apis/storage) APIs.

Find the complete app code referenced in this guide [on GitHub](https://github.com/ionic-team/photo-gallery-capacitor-vue).

## Download Required Tools

Download and install these right away to ensure an optimal Ionic development experience:

- **Node.js** for interacting with the Ionic ecosystem. [Download the LTS version here](https://nodejs.org/en/).
- **A code editor** for... writing code! We are fans of [Visual Studio Code](https://code.visualstudio.com/).
- **Command-line interface/terminal (CLI)**:
  - **Windows** users: for the best Ionic experience, we recommend the built-in command line (cmd) or the Powershell
    CLI, running in Administrator mode.
  - **Mac/Linux** users, virtually any terminal will work.

## Install Ionic Tooling

Run the following in the command line terminal to install the Ionic CLI (`ionic`), `native-run`, used to run native binaries on devices and simulators/emulators, and `cordova-res`, used to generate native app icons and splash screens:

:::note
To open a terminal in Visual Studio Code, go to Terminal -> New Terminal.
:::

```shell
$ npm install -g @ionic/cli@latest native-run cordova-res
```

:::note
The `-g` option means _install globally_. When packages are installed globally, `EACCES` permission errors can occur.

Consider setting up npm to operate globally without elevated permissions. See [Resolving Permission Errors](../developing/tips.md#resolving-permission-errors) for more information.
:::

## Create an App

Next, create an Ionic Vue app that uses the "Tabs" starter template and adds Capacitor for native functionality:

```shell
$ ionic start photo-gallery tabs --type vue --capacitor
```

This starter project comes complete with three pre-built pages and best practices for Ionic development. With common building blocks already in place, we can add more features easily!

Next, change into the app folder:

```shell
$ cd photo-gallery
```

Next we'll need to install the necessary Capacitor plugins to make the app's native functionality work:

```shell
npm install @capacitor/camera @capacitor/storage @capacitor/filesystem
```

### PWA Elements

Some Capacitor plugins, including the Camera API, provide the web-based functionality and UI via the Ionic [PWA Elements library](https://github.com/ionic-team/pwa-elements).

It's a separate dependency, so install it next:

```shell
$ npm install @ionic/pwa-elements
```

After installation, open up the project in your code editor of choice.

Next, import `@ionic/pwa-elements` by editing `src/main.ts`.

```tsx
// Above the createApp() line
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);
```

That’s it! Now for the fun part - let’s see the app in action.

## Run the App

Run this command in your shell:

```shell
$ ionic serve
```

And voilà! Your Ionic app is now running in a web browser. Most of your app can be built and tested right in the browser, greatly increasing development and testing speed.

## Photo Gallery!!!

There are three tabs. Click on the Tab2 tab. It’s a blank canvas, aka the perfect spot to transform into a Photo Gallery. The Ionic CLI features Live Reload, so when you make changes and save them, the app is updated immediately!

![Before and after going through this tutorial](/img/guides/vue/first-app/live-reload.gif)

Open `/src/views/Tab2.vue`. We see:

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>
```

`ion-header` represents the top navigation and toolbar, with "Tab 2" as the title. Let’s rename it:

```html
<ion-title>Photo Gallery</ion-title>
```

We put the visual aspects of our app into `<ion-content>`. In this case, it’s where we’ll add a button that opens the device’s camera as well as displays the image captured by the camera. But first, remove the `ExploreContainer` component, beginning with the import statement:

```tsx
import ExploreContainer from '@/components/ExploreContainer.vue';
```

Next, remove the component name (`ExploreContainer`) from the `components` list in the Default Export and the HTML:

```html
<ExploreContainer name="Tab 2 page" />
```

We'll replace it with a [floating action button](https://ionicframework.com/docs/api/fab) (FAB). First, update the imports within the `<script>` tag to include the Camera icon as well as some of the Ionic components we'll use shortly:

```tsx
import { camera, trash, close } from 'ionicons/icons';
import {
  IonPage,
  IonHeader,
  IonFab,
  IonFabButton,
  IonIcon,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from '@ionic/vue';
```

Next, add the new Ionic components we'll be using to the default export as well as returning the Ionicons in the `setup()` method (part of the [Composition API](https://v3.vuejs.org/api/composition-api.html#setup)):

```tsx
export default {
  name: 'Tab2',
  components: {
    IonPage,
    IonHeader,
    IonFab,
    IonFabButton,
    IonIcon,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
  },
  setup() {
    return {
      camera,
      trash,
      close,
    };
  },
};
```

Then, add the FAB to the bottom of the page. Use the camera image as the icon, and call the `takePhoto()` function when this button is clicked (to be implemented soon):

```html
<ion-content :fullscreen="true">
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button @click="takePhoto()">
      <ion-icon :icon="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

We’ll be creating the `takePhoto` method and the logic to use the Camera and other native features in a moment.

Next, open `src/views/Tabs.vue` then import the `images` icon:

```tsx
import { images, square, triangle } from 'ionicons/icons';
```

Within the tab bar (`<ion-tab-bar>`), change the label to "Photos" and the icon to `images` for the middle tab button:

```html
<ion-tab-button tab="tab2" href="/tabs/tab2">
  <ion-icon :icon="images" />
  <ion-label>Photos</ion-label>
</ion-tab-button>
```

That’s just the start of all the cool things we can do with Ionic. Up next, implementing camera taking functionality on the web, then building for iOS and Android.
