# Android, iOS, and the Camera - Oh My!

Previously, we got an Ionic app up and running locally in a web browser. Now, let’s get it onto your iOS or Android device, then start building the photo gallery feature. Fortunately, Ionic provides a way to skip the frustration of dealing with native SDK installations: Ionic DevApp!

The Ionic DevApp is a free app that makes it easy to run your Ionic app directly on your iOS or Android device. Download it here, then open on your device:

<a href="https://itunes.apple.com/us/app/ionic-devapp/id1233447133?ls=1&mt=8">
  <img src={require('@site/static/img/guides/first-app-v3/appstore.png').default} />
</a>
<a href="https://play.google.com/store/apps/details?id=io.ionic.devapp&hl=en">
  <img src={require('@site/static/img/guides/first-app-v3/playstore.png').default} />
</a>

Afterwards, open a terminal and navigate to your Ionic project. Execute the following:

```shell
$ ionic serve -c
```

In DevApp, you should now see the app appear. If it doesn't, or you have any issues throughout creating this app, [see here](https://ionicframework.com/docs/pro/devapp/).

Much better! Now we can add the camera functionality. By the way, you can find reference code for this in [the “part 1” folder](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/tree/master/part1) on GitHub.

Back in `about.html`, add the following:

```html
<ion-content>
  <img />

  <ion-fab center bottom>
    <button ion-fab>
      <ion-icon name="camera"></ion-icon>
    </button>
  </ion-fab>
</ion-content>
```

Save the file and watch - a camera button appears! Tap on it and notice that it doesn’t do anything. Let’s fix that next.

## Add the Camera Dependencies via the CLI

In order to use the Camera, we need to bring in its JavaScript and native library dependencies. Back over in your Terminal window, run the following command, which adds the JavaScript library to the project, thus exposing the Camera API in TypeScript code:

```shell
$ npm install --save @awesome-cordova-plugins/camera
```

In `package.json`, you’ll notice a new JavaScript dependency has been added:

`"@awesome-cordova-plugins/camera": "^4.12.0"`

Next, run this command to add the native iOS and Android code, effectively allowing the Camera to work on a mobile device:

```shell
$ ionic cordova plugin add cordova-plugin-camera
```

In `config.xml`, a new plugin entry is created:

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
import { Camera } from '@awesome-cordova-plugins/camera';
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

## Add the Camera to the About page

Our camera button doesn’t do anything yet. Over in `about.html`, add a click handler to the button:

```html
<button ion-fab (click)="takePicture()"></button>
```

Then, update the image placeholder. The following binds the “currentImage” variable (which we’ll work on next) to the image to display to the user.

```html
<img [src]="currentImage" *ngIf="currentImage" />
```

Open `about.ts` next and import the Camera library:

```Javascript
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera';
```

Next, define the “currentImage” variable and inject the Camera into this class via the constructor:

```Javascript
export class AboutPage {
  currentImage: any;

  constructor(public navCtrl: NavController, private camera: Camera) {
}
```

Finally, add the “takePicture” method, already wired up to execute once the camera button has been tapped:

```Javascript
takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
     console.log("Camera issue:" + err);
    });
  }
```

Take notice: there’s no mention of iOS or Android! This is the awesome power of plugins: you use one API (`camera.getPicture()` in this case) and the plugin takes care of the platform differences for you. Write once, run everywhere `:)`

Save this file then tap the Camera button in DevApp. Voila! The camera should open on your device. Once a photo has been taken, it displays on the Photo Gallery page.

Finally, back up your changes to Appflow:

```shell
git add .
git commit -m “added camera functionality”
git push ionic master
```

Next, we’ll look at how to transform the app into a photo gallery, as well as how to save the photos to your device!
