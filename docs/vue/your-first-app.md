---
title: 'Your First Ionic App: Vue'
sidebar_label: Build Your First App
---

<head>
  <title>Build Your First Ionic Mobile App: Vue Development Tutorial</title>
  <meta
    name="description"
    content="This Vue tutorial, teaches the fundamentals of Ionic app development by creating a realistic app step-by-step. Learn to run your first Ionic app with Vue."
  />
</head>

The great thing about Ionic is that with one codebase, you can build for any platform using just HTML, CSS, and JavaScript. Follow along as we learn the fundamentals of Ionic app development by creating a realistic app step by step.

Here’s the finished app running on all 3 platforms:

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/0ASQ13Y1Rk4"
  frameBorder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

## What We'll Build

We'll create a Photo Gallery app that offers the ability to take photos with your device's camera, display them in a grid, and store them permanently on the device.

Highlights include:

- One Vue-based codebase that runs on the web, iOS, and Android using Ionic Framework [UI components](https://ionicframework.com/docs/components).
- Deployed as a native iOS and Android mobile app using [Capacitor](https://capacitorjs.com), Ionic's official native app runtime.
- Photo Gallery functionality powered by the Capacitor [Camera](https://capacitorjs.com/docs/apis/camera), [Filesystem](https://capacitorjs.com/docs/apis/filesystem), and [Preferences](https://capacitorjs.com/docs/apis/preferences) APIs.

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
npm install -g @ionic/cli@latest native-run
```

:::note
The `-g` option means _install globally_. When packages are installed globally, `EACCES` permission errors can occur.

Consider setting up npm to operate globally without elevated permissions. See [Resolving Permission Errors](../developing/tips.md#resolving-permission-errors) for more information.
:::

## Create an App

Next, create an Ionic Vue app that uses the "Tabs" starter template and adds Capacitor for native functionality:

```shell
ionic start photo-gallery tabs --type vue
```

This starter project comes complete with three pre-built pages and best practices for Ionic development. With common building blocks already in place, we can add more features easily!

Next, change into the app folder:

```shell
cd photo-gallery
```

Next we'll need to install the necessary Capacitor plugins to make the app's native functionality work:

```shell
npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem
```

### PWA Elements

Some Capacitor plugins, including the Camera API, provide the web-based functionality and UI via the Ionic [PWA Elements library](https://github.com/ionic-team/pwa-elements).

It's a separate dependency, so install it next:

```shell
npm install @ionic/pwa-elements
```

After installation, open up the project in your code editor of choice.

Next, import `@ionic/pwa-elements` by editing `src/main.ts`.

```tsx
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { IonicVue } from '@ionic/vue';
// CHANGE: Add the following import.
import { defineCustomElements } from '@ionic/pwa-elements/loader';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

// CHANGE: Call the element loader before the createApp() call
defineCustomElements(window);
const app = createApp(App).use(IonicVue).use(router);

router.isReady().then(() => {
  app.mount('#app');
});
```

That’s it! Now for the fun part - let’s see the app in action.

## Run the App

Run this command in your shell:

```shell
ionic serve
```

And voilà! Your Ionic app is now running in a web browser. Most of your app can be built and tested right in the browser, greatly increasing development and testing speed.

## Photo Gallery!!!

There are three tabs. Click on the Tab2 tab. It’s a blank canvas, aka the perfect spot to transform into a Photo Gallery. The Ionic CLI features Live Reload, so when you make changes and save them, the app is updated immediately!

![Animated GIF showing the live reload feature in an Ionic app, with changes in code immediately updating the app in a web browser.](/img/guides/vue/first-app/live-reload.gif 'Live Reload Feature in Ionic App')

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

<script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
```

`ion-header` represents the top navigation and toolbar, with "Tab 2" as the title (there are two of them due to iOS [Collapsible Large Title](https://ionicframework.com/docs/api/title#collapsible-large-titles) support). Rename both `ion-title` elements to:

```html
<ion-title>Photo Gallery</ion-title>
```

We put the visual aspects of our app into `<ion-content>`. In this case, it’s where we’ll add a button that opens the device’s camera as well as displays the image captured by the camera. But first, remove both the `ExploreContainer` component and its import statement:

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Photo Gallery</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Photo Gallery</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- CHANGE: Remove or comment out <ExploreContainer /> -->
      <!-- <ExploreContainer name="Tab 2 page" /> -->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  // CHANGE: Remove or comment out ExploreContainer import.
  // import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
```

We'll replace it with a [floating action button](https://ionicframework.com/docs/api/fab) (FAB). First, update the imports within the `<script setup>` tag to include the Camera icon as well as some of the Ionic components we'll use shortly:

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Photo Gallery</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Photo Gallery</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  // CHANGE: Add import from `ionicons/icons`
  import { camera, trash, close } from 'ionicons/icons';
  // CHANGE: Update import from `@ionic/vue` to include necessary Ionic components
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
</script>
```

Since our pages are generated as [Vue Single File Components](https://vuejs.org/api/sfc-spec.html) using the [`<script setup>`](https://vuejs.org/api/sfc-script-setup.html#script-setup) syntax these items are now exposed for use in our template.

Add the FAB to the bottom of the page. Use the camera image as the icon, and call the `takePhoto()` function when this button is clicked (to be implemented soon):

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Photo Gallery</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Photo Gallery</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- CHANGE: Add the floating action button. -->
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="takePhoto()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
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
</script>
```

We’ll be creating the `takePhoto` method and the logic to use the Camera and other native features in a moment.

Next, open `src/views/TabsPage.vue`. Remove the `ellipse` icon from the import and import the `images` icon instead. Then, within the tab bar (`<ion-tab-bar>`), change the label to "Photos" and the `ellipse` icon to `images` for the middle tab button:

```html
<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <!-- CHANGE: Replace `ellipse` icon with `images` -->
          <ion-icon aria-hidden="true" :icon="images" />
          <!-- CHANGE: Update `tab2` label to `Photos` -->
          <ion-label>Photos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
  // CHANGE: Update import by removing `ellipse` and adding `images`.
  import { images, square, triangle } from 'ionicons/icons';
</script>
```

That’s just the start of all the cool things we can do with Ionic. Up next, implementing camera taking functionality on the web, then building for iOS and Android.
