---
previousText: 'Your First Ionic App'
previousUrl: '/docs/angular/your-first-app'
nextText: 'Creating a Photo Gallery'
nextUrl: '/docs/angular/your-first-app/creating-photo-gallery-device-storage'
---

# Android, iOS, and the Camera - Oh My!

Previously, we got an Ionic app up and running locally in a web browser. Now, let’s get it onto your iOS or Android device, then start building the photo gallery feature.

## Add Cordova iOS and Android Platforms

Ionic leverages the open source [Cordova project](https://cordova.apache.org/docs/en/latest/guide/overview/) to provide native hardware support. We begin by adding the iOS and Android *platforms* then will add specific *plugins* like the Camera afterwards:

```shell
$ ionic cordova platform add ios
$ ionic cordova platform add android
```

These commands will create a `config.xml` file, which is used to define Cordova iOS and Android settings. Cordova reads this file and applies each setting as it builds each native app binary.

To run your app on DevApp, you will first need to add a reference to `cordova.js` in your `index.html` file. Open up the file at `src/index.html` and add the following tag into the `head` section:

```html
<head>
  <!-- ... Other HTML tags... -->

  <script src="cordova.js"></script>
</head>
```

> Note: Usually, building the app with Cordova will add this script tag into the index.html file for us. Since we are skipping that step and using DevApp instead, we have to do it manually ourselves.

## Install DevApp

There are more steps to configure [iOS](/docs/installation/ios) and [Android](/docs/installation/android) native tooling. Let's skip that for now. Fortunately, Ionic provides a way to bypass the frustration of dealing with native SDK tooling: Ionic DevApp!

The Ionic DevApp is a free app that makes it easy to run your Ionic app directly on your iOS or Android device. Download it from one of the app stores, then open it on your device:

<a href="https://itunes.apple.com/us/app/ionic-devapp/id1233447133?ls=1&mt=8"><img src="/docs/assets/img/guides/first-app-v3/appstore.png"></a>

<p></p>

<a href="https://play.google.com/store/apps/details?id=io.ionic.devapp&hl=en"><img src="/docs/assets/img/guides/first-app-v3/playstore.png"></a>

Next, sign into your Ionic account.

> Don't have an Ionic account? Tap the `Sign Up` link at the bottom of the screen. Creating an account not only gives you access to DevApp, but also the latest Ionic news, live events, and tutorials. Also, it unlocks access to live code updates (deliver bug fixes and new features faster) and native cloud builds (skip complicated build steps).

Afterwards, open a terminal and navigate to your Ionic project. Execute the following:

```shell
$ ionic serve --devapp
```

In DevApp, you should now see the app appear. Tap on it to load the app.

> If it doesn't appear, or you have any issues throughout creating this app, [see here](https://ionicframework.com/docs/appflow/devapp/).

Much better! Now we can add the camera functionality. By the way, you can find reference code for this [on GitHub](https://github.com/ionic-team/photo-gallery-tutorial-ionic4).

Back in `tab2.page.html`, add the following:

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

Save the file and watch - a camera button appears! Tap on it and notice that it doesn’t do anything. Let’s fix that next.

## Add the Camera Dependencies via the CLI

In order to use the Camera, we need to bring in its JavaScript and native library dependencies. Back over in your Terminal window, run the following command, which adds the JavaScript library to the project, thus exposing the Camera API in TypeScript code:

```shell
$ npm install @ionic-native/camera
```

In `package.json`, you’ll notice a new JavaScript dependency has been added, with a version number similar to the following:

`"@ionic-native/camera": "^5.4.0"`

Next, run this command to add the native iOS and Android code, effectively allowing the Camera to work on a mobile device. For more info on how this works, read up on [Cordova](https://cordova.apache.org/docs/en/latest/guide/overview/) and [Ionic Native](https://ionicframework.com/docs/native).

```shell
$ ionic cordova plugin add cordova-plugin-camera
```

The `config.xml` file is now updated with an entry similar to the following for the native camera code:

```xml
<plugin name="cordova-plugin-camera" spec="^4.0.3" />
```

The next step is only required for iOS users. As of iOS 10, developers must provide a reason for why the app wishes to access the device camera. Add this to the bottom of `config.xml`:

```xml
<!-- Required for iOS 10: Camera permission prompt -->
<edit-config file="*-Info.plist" mode="merge" target="NSCameraUsageDescription">
    <string>Used to take pictures</string>
</edit-config>
```

## Add Camera plugin to Angular App Module

There’s one more step we need to do since this is an Angular project: register the Camera in the App Module (`src/app/app.module.ts`). First, import the Camera module:

```Javascript
import { Camera } from '@ionic-native/camera/ngx';
```

Then, add it as a Provider:

```Javascript
providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
```

It can now be used on any of our App pages.

## Add the Camera to the Gallery page

Our camera button doesn’t do anything yet. Over in `tab2.page.html`, add a click handler to the button:

```html
<ion-fab vertical="bottom" horizontal="center" slot="fixed">
  <ion-fab-button (click)="takePicture()">
    <ion-icon name="camera"></ion-icon>
  </ion-fab-button>
</ion-fab>
```

Then, update the image placeholder. The following binds the “currentImage” variable (which we’ll work on next) to the image to display to the user.

```html
<img [src]="currentImage" *ngIf="currentImage">
```

Open `tab2.page.ts` next and import the Camera library:

```Javascript
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
```

Next, define the “currentImage” variable and inject the Camera into this class via the constructor:

```Javascript
export class Tab2Page {
  currentImage: any;

  constructor(private camera: Camera) { }
}
```

Finally, add the “takePicture” method in `tab2.page.ts`. It is already wired up to execute once the camera button has been tapped:

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

Take notice: there’s no mention of iOS or Android! This is the awesome power of plugins: you use one API (`camera.getPicture()` in this case) and the plugin takes care of the platform differences for you. Write once, run everywhere. 😀

Save this file then tap the Camera button in DevApp. Voila! The camera should open on your device. Once a photo has been taken, it displays on the Photo Gallery page.

Next, we’ll look at how to transform the app into a photo gallery, as well as how to save the photos to your device!

<div style="text-align:right;">
  <docs-button href="/docs/angular/your-first-app/creating-photo-gallery-device-storage">Continue <svg viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></docs-button>
</div>
