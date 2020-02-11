---
previousText: 'Quickstart'
previousUrl: '/docs/react/quickstart'
nextText: 'Taking Photos'
nextUrl: '/docs/react/your-first-app/2-taking-photos'
---

# Your First Ionic App: React

The great thing about Ionic is that with one codebase, you can build for any platform using just HTML, CSS, and JavaScript. Follow along as we learn the fundamentals of Ionic app development by creating a realistic app step by step.

Here’s the finished app running on all 3 platforms: <iframe width="560" height="315" src="https://www.youtube.com/embed/0ASQ13Y1Rk4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe> 

## What We'll Build

We'll create a Photo Gallery app that offers the ability to take photos with your device's camera, display them in a grid, and store them permanently on the device.

Highlights include:

* One React-based codebase that runs on the web, iOS, and Android using Ionic Framework [UI components](https://ionicframework.com/docs/components).
* Deployed as a native iOS and Android mobile app using [Capacitor](https://capacitor.ionicframework.com), Ionic's official native app runtime.
* Photo Gallery functionality powered by the Capacitor [Camera](https://capacitor.ionicframework.com/docs/apis/camera), [Filesystem](https://capacitor.ionicframework.com/docs/apis/filesystem), and [Storage](https://capacitor.ionicframework.com/docs/apis/storage) APIs.

It’s easy to get started. Find the complete app code referenced in this guide [on GitHub](https://github.com/ionic-team/photo-gallery-capacitor-react).

## Download Required Tools

Download and install these right away to ensure an optimal Ionic development experience:

* **Node.js** for interacting with the Ionic ecosystem. [Download the LTS version here](https://nodejs.org/en/).
* **A code editor** for... writing code! We are fans of [Visual Studio Code](https://code.visualstudio.com/) or [Ionic Studio](https://ionicframework.com/studio).
* **Command-line interface/terminal (CLI)**: 
 * **Windows** users: for the best Ionic experience, we recommend the built-in command line (cmd) or the Powershell CLI, running in Administrator mode. 
 * **Mac/Linux** users, virtually any terminal will work.

## Install Ionic Tooling

Run the following in the command line terminal to install the Ionic CLI (`ionic`), `native-run`, used to run native binaries on devices and simulators/emulators, and `cordova-res`, used to generate native app icons and splash screens:

> To open a terminal in either Visual Studio Code or Ionic Studio, go to Terminal -> New Terminal.

```shell
$ npm install -g ionic native-run cordova-res
```

> The `-g` option means install globally. When packages are installed globally, permission errors can occur. Consider [setting up npm](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) to operate globally without elevated permissions. Running the command prompt as an Admin (or using `sudo` on Mac & Linux) with npm is not recommended.

## Create an App

Next, create an Ionic React app that uses the “Tabs” starter template and adds Capacitor for native functionality:

```shell
$ ionic start photo-gallery tabs --type=react --capacitor
```

This starter project comes complete with three pre-built pages and best practices for Ionic development. With common building blocks already in place, we can add more features easily!

Next, change into the app folder:

```shell
$ cd photo-gallery
```

### React Hooks and PWA Elements

Next, we will install a couple of helper libraries for working with Capacitor.

The React Hooks library makes working with Capacitor in React a breeze by providing some custom hooks for each of the specific plugins.

Some Capacitor plugins, including the Camera API, provide the web-based functionality and UI via the Ionic [PWA Elements library](https://github.com/ionic-team/ionic-pwa-elements).

Both packages are separate dependencies, so install them next:

```shell
$ npm install @ionic/react-hooks @ionic/pwa-elements
```

After installation, open up the project in your code editor of choice.

Next, import `@ionic/pwa-elements` by editing `src/index.tsx`.

```typescript
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

![Before and after going through this tutorial](/docs/assets/img/guides/first-app-cap-ng/email-photogallery.gif)

Open `/src/pages/Tab2.tsx`. We see:

```typescript
<IonPage>
  <IonHeader>
    <IonToolbar>
      <IonTitle>Tab Two</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent>
 <!-- some filler -->
  </IonContent>
</IonPage>
```

`IonHeader` represents the top navigation and toolbar, with "Tab 2" as the title. Let’s rename it:

```typescript
<IonTitle>Photo Gallery</IonTitle>
```

We put the visual aspects of our app into `<IonContent>`. In this case, it’s where we’ll add a button that opens the device’s camera as well as displays the image captured by the camera. Start by adding a [floating action button](https://ionicframework.com/docs/api/fab) (FAB). First, update the imports at the top of the page to include the Camera icon as well as the some Ionic components we'll use shortly:

```typescript
import { camera, trash, close } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
         IonFab, IonFabButton, IonIcon, IonGrid, IonRow, 
         IonCol, IonImg, IonActionSheet } from '@ionic/react';
```

Then, add the FAB to the bottom of the page. Use the camera image as the icon, and call the `takePhoto()` function when this button is clicked (to be implemented soon):

```typescript
<IonContent>
  <IonFab vertical="bottom" horizontal="center" slot="fixed">
    <IonFabButton onClick={() => takePhoto()}>
      <IonIcon icon={camera}></IonIcon>
    </IonFabButton>
  </IonFab>
</IonContent>
```

We’ll be creating the `takePhoto` method and the logic to use the Camera and other native features in a moment.

Next, open `src/App.tsx` then import the `images` icon:

```typescript
import { images, flash, send } from 'ionicons/icons';
```

Within the tab bar (`<IonTabBar>`), change the label to “Photos” and the icon to `images` for the middle tab button:

```typescript
<IonTabButton tab="tab2" href="/tab2">
  <IonIcon icon={images} />
  <IonLabel>Photos</IonLabel>
</IonTabButton>
```

> In Ionic React, icons are imported individually from `ionicons/icons` and set to the icon prop.

That’s just the start of all the cool things we can do with Ionic. Up next, implement camera taking functionality on the web, then build it for iOS and Android.