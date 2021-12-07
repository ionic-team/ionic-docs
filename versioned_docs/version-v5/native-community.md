---
title: 'Cordova Plugins | Cordova Community Core Plugins for Ionic Apps'
description: 'For the Cordova user community, our collection of TypeScript wrappers for open source Cordova core plugins easily add native functionality to any Ionic app.'
sidebar_label: Setup
hide_table_of_contents: true
slug: /native/community
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cordova Community Plugins

[Apache Cordova](https://cordova.apache.org/) is an open source native runtime that allows developers to build native mobile apps with HTML, CSS, and JavaScript. Similar to [Capacitor](https://capacitorjs.com/), Ionic’s own native runtime, Cordova allows developers to access native device features, such as camera, keyboard, and geolocation, using a system of plugins. A plugin is a small amount of add-on code that provides JavaScript interface to native components. They allow your app to use native device capabilities beyond what is available to pure web apps.

For developers using Ionic with Cordova, our team has developed a collection of TypeScript wrappers for open source Cordova plugins that make it easy to add native functionality to any Ionic app. See [Ionic Native](https://github.com/ionic-team/ionic-native).

These plugins are submitted and maintained by the Ionic community. While community members are generally quick to find and fix issues, certain plugins may not function properly.

For professional developers and teams that require dedicated native plugin support & SLAs, ongoing maintenance, and security patches, please explore our [premium options](https://ionicframework.com/native), including plugin support and pre-built solutions for common native use cases.

<intro-end />

:::note
These docs are for apps built with Ionic Framework 4.0.0 and greater. For older Ionic v3 projects, please [see here](https://ionicframework.com/docs/v3/native).
:::

## Capacitor Support

In addition to Cordova, Ionic Native also works with [Capacitor](https://capacitor.ionicframework.com), Ionic's official native runtime. Basic usage below. For complete details, [see the Capacitor documentation](https://capacitor.ionicframework.com/docs/cordova/using-cordova-plugins).

## Usage

All plugins have two components - the native code (Cordova) and the TypeScript code (Ionic Native).
Cordova plugins are also wrapped in a `Promise` or `Observable` in order to provide a common plugin interface and modernized development approach.

Using the [Camera plugin](native/camera.md) as an example, first install it:

````mdx-code-block
<Tabs
  groupId="runtime"
  defaultValue="cordova"
  values={[
    { value: 'cordova', label: 'Cordova' },
    { value: 'capacitor', label: 'Capacitor' },
  ]
}>
<TabItem value="cordova">

```shell
// Install Cordova plugin
$ ionic cordova plugin add cordova-plugin-camera

// Install Ionic Native TypeScript wrapper
$ npm install @awesome-cordova-plugins/camera

// Install Ionic Native core library (once per project)
$ npm install @awesome-cordova-plugins/core
```

</TabItem>
<TabItem value="capacitor">

For complete details, [see the Capacitor documentation](https://capacitor.ionicframework.com/docs/cordova/using-cordova-plugins).

```shell
// Install Ionic Native TypeScript wrapper
$ npm install @awesome-cordova-plugins/camera

// Install Cordova plugin
$ npm install cordova-plugin-camera

// Update native platform project(s) to include newly added plugin
$ ionic cap sync
```

</TabItem>
</Tabs>
````

Next, begin using the plugin, following the various framework usage options below. For FAQ, see [here](native-faq.md).

## Angular

Angular apps can use either Cordova or Capacitor to build native mobile apps. Import the plugin in a `@NgModule` and add it to the list of Providers. For Angular, the import path should end with `/ngx`. Angular's change detection is automatically handled.

```tsx
// app.module.ts
import { Camera } from '@awesome-cordova-plugins/camera/ngx';

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

```tsx
// camera.service.ts
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private camera: Camera) {}

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // Do something with the new photo
      },
      (err) => {
        // Handle error
        console.log('Camera issue: ' + err);
      }
    );
  }
}
```

## React

React apps must use Capacitor to build native mobile apps. However, Ionic Native (and therefore, Cordova plugins) can still be used.

```shell-session
// Install Core library (once per project)
$ npm install @awesome-cordova-plugins/core

// Install Ionic Native TypeScript wrapper
$ npm install @awesome-cordova-plugins/barcode-scanner

// Install Cordova plugin
$ npm install phonegap-plugin-barcodescanner

// Update native platform project(s) to include newly added plugin
$ ionic cap sync
```

Import the plugin object then use its static methods:

```tsx
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';

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
import { Camera } from '@awesome-cordova-plugins/camera';

document.addEventListener('deviceready', () => {
  Camera.getPicture()
    .then((data) => console.log('Took a picture!', data))
    .catch((e) => console.log('Error occurred while taking a picture', e));
});
```
