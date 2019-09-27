---
title: Community Plugins
---

Community Plugins are a collection of open source Cordova plugins that make it easy to add native functionality to any Ionic app.

Community Plugins are submitted and maintained by the Ionic community. While community members are generally quick to find and fix issues, certain plugins may not function properly. For teams that require dedicated native plugin support, please explore Ionic Native and request a free trial.

> Note: These docs are for apps built with Ionic Framework 4.0.0 and greater. For older Ionic v3 projects, please [see here](/docs/v3/native).

## Usage

All plugins have two components - the native code (Cordova) and the JavaScript code. Cordova plugins are also wrapped in a `Promise` or `Observable` in order to provide a common plugin interface. Below are various framework options using the Camera plugin as an example.

## Angular

Import the plugin in a `@NgModule` and add it to the list of Providers. For Angular, the import path should end with `/ngx`. Angular's change detection is automatically handled.

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

## Vanilla JavaScript

Ionic Native can also be used in a vanilla JavaScript app targeting ES2015+ and/or TypeScript. To use any plugin, import the class from the appropriate package and use its static methods:

```js
import { Camera } from '@ionic-native/camera';

document.addEventListener('deviceready', () => {
  Camera.getPicture()
    .then(data => console.log('Took a picture!', data))
    .catch(e => console.log('Error occurred while taking a picture', e));
});
```