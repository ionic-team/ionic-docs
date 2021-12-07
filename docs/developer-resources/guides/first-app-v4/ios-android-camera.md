# Android, iOS, and the Camera - Oh My!

Previously, we got an Ionic app up and running locally in a web browser. Now, let’s get it onto your iOS or Android device, then start building the photo gallery feature.

## Add Cordova iOS and Android Platforms

Ionic leverages the open source [Cordova project](https://cordova.apache.org/docs/en/latest/guide/overview/) to provide native hardware support. We begin by adding the iOS and Android _platforms_ then will add specific _plugins_ like the Camera afterwards:

```shell
$ ionic cordova platform add ios
$ ionic cordova platform add android
```

These commands will create a `config.xml` file, which is used to define Cordova iOS and Android settings. Cordova reads this file and applies each setting as it builds each native app binary.

There are more steps to configure [iOS](../../../developing/ios.md) and [Android](../../../developing/android.md) native tooling.

Much better! Now we can add the camera functionality. By the way, you can find reference code for this [on GitHub](https://github.com/ionic-team/photo-gallery-tutorial-ionic4).

Back in `tab2.page.html`, add the following:

```html
<ion-content>
  <img />

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
$ npm install @awesome-cordova-plugins/camera
```

In `package.json`, you’ll notice a new JavaScript dependency has been added, with a version number similar to the following:

`"@awesome-cordova-plugins/camera": "^5.4.0"`

Next, run this command to add the native iOS and Android code, effectively allowing the Camera to work on a mobile device. For more info on how this works, read up on [Cordova](https://cordova.apache.org/docs/en/latest/guide/overview/) and [Ionic Native](https://ionicframework.com/docs/native).

```shell
$ ionic cordova plugin add cordova-plugin-camera
```

The `config.xml` file is now updated with an entry similar to the following for the native camera code:

```xml
<plugin name="cordova-plugin-camera" spec="^4.0.3" />
```

The next step is only required for iOS users. As of iOS 10, developers must provide a reason for why the app wishes to access the device camera. Add this inside the ios platform section (<platform name="ios"></platform>) of `config.xml`:

```xml
<!-- Required for iOS 10: Camera permission prompt -->
<edit-config file="*-Info.plist" mode="merge" target="NSCameraUsageDescription">
    <string>Used to take pictures</string>
</edit-config>
```

## Add Camera plugin to Angular App Module

There’s one more step we need to do since this is an Angular project: register the Camera in the App Module (`src/app/app.module.ts`). First, import the Camera module:

```Javascript
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
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
<img [src]="currentImage" *ngIf="currentImage" />
```

Open `tab2.page.ts` next and import the Camera library:

```Javascript
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
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
