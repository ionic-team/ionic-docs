---
title: Community Plugins
tableOfContents: false
---

Community Plugins are a collection of open source Cordova plugins that make it easy to add native functionality to any Ionic app.

Community Plugins are submitted and maintained by the Ionic community. While community members are generally quick to find and fix issues, certain plugins may not function properly. For teams that require dedicated native plugin support, please explore Ionic Native then [request a free trial](https://ionicframework.com/enterprise/contact).

> Note: These docs are for apps built with Ionic Framework 4.0.0 and greater. For older Ionic v3 projects, please [see here](/docs/v3/native).

## Capacitor Support

In addition to Cordova, Ionic Native also works with [Capacitor](https://capacitor.ionicframework.com), Ionic's official native runtime. Basic usage below. For complete details, [see the Capacitor documentation](https://capacitor.ionicframework.com/docs/cordova/using-cordova-plugins).

## Usage
All plugins have two components - the native code (Cordova) and the TypeScript code (Ionic Native). Cordova plugins are also wrapped in a `Promise` or `Observable` in order to provide a common plugin interface and modernized development approach.

Using the [Camera plugin](/docs/native/camera) as an example, first install it:

<docs-tabs> <docs-tab tab="Cordova">

```shell
// Install Cordova plugin
$ ionic cordova plugin add cordova-plugin-camera

// Install Ionic Native TypeScript wrapper
$ npm install @ionic-native/camera

// Install Ionic Native core library (once per project) 
$ npm install @ionic-native/core
```

</docs-tab> <docs-tab tab="Capacitor">

For complete details, [see the Capacitor documentation](https://capacitor.ionicframework.com/docs/cordova/using-cordova-plugins).

```shell
// Install Ionic Native TypeScript wrapper
$ npm install @ionic-native/camera

// Install Cordova plugin
$ npm install cordova-plugin-camera

// Update native platform project(s) to include newly added plugin
$ ionic cap sync
```

</docs-tab> </docs-tabs>

Next, begin using the plugin, following the various framework usage options below. For FAQ, see [here](/docs/native/faq).

## Angular
Angular apps can use either Cordova or Capacitor to build native mobile apps. Import the plugin in a `@NgModule` and add it to the list of Providers. For Angular, the import path should end with `/ngx`.  Angular's change detection is automatically handled.

```typescript
// app.module.ts
import { Camera } from '@ionic-native/camera/ngx';

...

@NgModule({
  ...

  providers: [
    ...
    Camera
    ...
  ]
  ...
})
export class AppModule { }
```

After the plugin has been declared, it can be imported and injected like any other service:

```typescript
// camera.service.ts
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private camera: Camera) { }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // Do something with the new photo

    }, (err) => {
     // Handle error
     console.log("Camera issue: " + err);
    });
  }
}
```

## React

React apps must use Capacitor to build native mobile apps. However, Ionic Native (and therefore, Cordova plugins) can still be used.

<command-line> <div>// Install Core library (once per project)</div>
  <command-prompt>npm install @ionic-native/core</command-prompt>
  <br /><div>// Install Ionic Native TypeScript wrapper</div>
  <command-prompt>npm install @ionic-native/barcode-scanner</command-prompt>
  <br/><div>// Install Cordova plugin</div>
  <command-prompt>npm install phonegap-plugin-barcodescanner</command-prompt>
  <br/><div>// Update native platform project(s) to include newly added plugin</div>
  <command-prompt>ionic cap sync</command-prompt> </command-line>

Import the plugin object then use its static methods:

```typescript
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

const Tab1: React.FC = () => {
  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    console.log(`Barcode data: ${data.text}`);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={openScanner}>Scan barcode</IonButton>
      </IonContent>
    </IonPage>
  );
};
```

## Vanilla JavaScript
Vanilla JavaScript apps, targeting ES2015+ and/or TypeScript, can use either Cordova or Capacitor to build native mobile apps. To use any plugin, import the class from the appropriate package and use its static methods:

```js
import { Camera } from '@ionic-native/camera';

document.addEventListener('deviceready', () => {
  Camera.getPicture()
    .then(data => console.log('Took a picture!', data))
    .catch(e => console.log('Error occurred while taking a picture', e));
});
```
