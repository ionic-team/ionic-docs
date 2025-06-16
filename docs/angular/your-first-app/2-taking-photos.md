---
title: Taking Photos with the Camera
sidebar_label: Taking Photos
---

<head>
  <title>Build Camera API for iOS, Android & Web | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="Add the ability to take photos with your device's camera using the Ionic Capacitor Camera API for mobile iOS, Android, and the web. Learn how here."
  />
</head>

Now for the fun part - adding the ability to take photos with the device’s camera using the Capacitor [Camera API](https://capacitorjs.com/docs/apis/camera). We’ll begin with building it for the web, then make some small tweaks to make it work on mobile (iOS and Android).

## Photo Service

All Capacitor logic (Camera usage and other native features) will be encapsulated in a service class. Create `PhotoService` using the `ionic generate` command:

```shell
ionic g service services/photo
```

Open the new `services/photo.service.ts` file, and let’s add the logic that will power the camera functionality. First, import Capacitor dependencies and get references to the Camera, Filesystem, and Storage plugins:

```tsx
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
```

Next, define a new class method, `addNewToGallery`, that will contain the core logic to take a device photo and save it to the filesystem. Let’s start by opening the device camera:

```tsx
public async addNewToGallery() {
  // Take a photo
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100
  });
}
```

Notice the magic here: there's no platform-specific code (web, iOS, or Android)! The Capacitor Camera plugin abstracts that away for us, leaving just one method call - `Camera.getPhoto()` - that will open up the device's camera and allow us to take photos.

Your updated `photo.service.ts` should now look like this:

```tsx
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor() {}

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
  }
}
```

Next, open up `tab2.page.ts` and import the PhotoService class and add a method that calls the `addNewToGallery` method on the imported service:

```tsx
import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  // update constructor to include photoService
  constructor(public photoService: PhotoService) {}

  // add addNewToGallery method
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
```

Then, open `tab2.page.html` and call the `addPhotoToGallery()` function when the FAB is tapped/clicked:

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title> Tab 2 </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Tab 2</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <!-- add click event listener to floating action button -->
    <ion-fab-button (click)="addPhotoToGallery()">
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

Save the file, and if it's not running already, restart the development server in your browser by running `ionic serve`. On the Photo Gallery tab, click the Camera button. If your computer has a webcam of any sort, a modal window appears. Take a selfie!

![A photo gallery app displaying a webcam selfie.](/img/guides/first-app-cap-ng/camera-web.png 'Webcam Selfie in Photo Gallery')

_(Your selfie is probably much better than mine)_

After taking a photo, it disappears right away. We need to display it within our app and save it for future access.

## Displaying Photos

Return to `photo.service.ts`. Outside of the `PhotoService` class definition (the very bottom of the file), create a new interface, `UserPhoto`, to hold our photo metadata:

```tsx
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

Back at the top of the `PhotoService` class definition, define an array of Photos, which will contain a reference to each photo captured with the Camera.

```tsx
export class PhotoService {
  public photos: UserPhoto[] = [];

  constructor() {}

  // other code
}
```

Over in the `addNewToGallery` function, add the newly captured photo to the beginning of the Photos array.

```tsx
public async addNewToGallery() {
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100
  });

  // add new photo to photos array
  this.photos.unshift({
    filepath: "soon...",
    webviewPath: capturedPhoto.webPath!
  });
}
```

`photo.service.ts` should now look like this:

```tsx
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos: UserPhoto[] = [];
  constructor() {}

  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    // add new photo to photos array
    this.photos.unshift({
      filepath: 'soon...',
      webviewPath: capturedPhoto.webPath!,
    });
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

Next, move over to `tab2.page.html` so we can display the image on the screen. Add a [Grid component](https://ionicframework.com/docs/api/grid) so that each photo will display nicely as photos are added to the gallery, and loop through each photo in the `PhotoServices`'s Photos array, adding an Image component (`<ion-img>`) for each. Point the `src` (source) at the photo’s path:

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title> Tab 2 </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Tab 2</ion-title>
    </ion-toolbar>
  </ion-header>

  <!-- add grid component to display array of photos -->
  <ion-grid>
    <ion-row>
      <!-- create new column and image component for each photo -->
      <ion-col size="6" *ngFor="let photo of photoService.photos; index as position">
        <ion-img [src]="photo.webviewPath"></ion-img>
      </ion-col>
    </ion-row>
  </ion-grid>

  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button (click)="addPhotoToGallery()">
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

:::note
Learn more about the [ngFor core directive](https://blog.angular-university.io/angular-2-ngfor/).
:::

Save all files. Within the web browser, click the Camera button and take another photo. This time, the photo is displayed in the Photo Gallery!

Up next, we’ll add support for saving the photos to the filesystem, so they can be retrieved and displayed in our app at a later time.
