---
title: Rapid App Development with Live Reload
sidebar_label: Live Reload
---

<head>
  <title>Rapid App Development with Live Reload with Angular | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="Use the Ionic CLI’s Live Reload functionality to boost your productivity when building Ionic apps. Learn how you can utilize rapid app development."
  />
</head>

So far, we’ve seen how easy it is to develop a cross-platform app that works everywhere. The development experience is pretty quick, but what if I told you there was a way to go faster?

We can use the Ionic CLI’s [Live Reload functionality](../../cli/livereload.md) to boost our productivity when building Ionic apps. When active, Live Reload will reload the browser and/or WebView when changes in the app are detected.

## Live Reload

Remember `ionic serve`? That was Live Reload working in the browser, allowing us to iterate quickly.

We can also use it when developing on iOS and Android devices. This is particularly useful when writing code that interacts with native plugins - we must run it on a device to verify that it works. Therefore, being able to quickly write, build, test, and deploy code is crucial to keeping up our development speed.

Let’s use Live Reload to implement photo deletion, the missing piece of our Photo Gallery feature. Select your platform of choice (iOS or Android) and connect a device to your computer. Next, run either command in a terminal, based on your chosen platform:

```shell
ionic cap run ios -l --external

ionic cap run android -l --external
```

The Live Reload server will start up, and the native IDE of choice will open if not opened already. Within the IDE, click the Play button to launch the app onto your device.

## Deleting Photos

With Live Reload running and the app open on your device, let’s implement photo deletion functionality.

In `photo.service.ts`, add the `deletePhoto()` method. The selected photo is removed from the `photos` array first. Then, we use the Capacitor Preferences API to update the cached version of the `photos` array. Finally, we delete the actual photo file itself using the Filesystem API.

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Platform } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  // Same old code from before.

  // CHANGE: Add `deletePhoto()` method.
  public async deletePhoto(photo: UserPhoto, position: number) {
    // Remove this photo from the Photos reference data array
    this.photos.splice(position, 1);

    // Update photos array cache by overwriting the existing photo array
    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });

    // Delete photo file from filesystem
    const filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);

    await Filesystem.deleteFile({
      path: filename,
      directory: Directory.Data,
    });
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

Next, in `tab2.page.ts`, implement the `showActionSheet()` method. We're adding two options: "Delete", which calls `PhotoService.deletePhoto()`, and "Cancel". The cancel button will automatically closes the action sheet when assigned the "cancel" role.

```ts
import { Component } from '@angular/core';
// Change: Add import.
import type { UserPhoto } from '../services/photo.service';
import { PhotoService } from '../services/photo.service';
// CHANGE: Add import.
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  // CHANGE: Update constructor.
  constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController) {}

  // Same old code from before.

  // CHANGE: Add `showActionSheet` method.
  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.photoService.deletePhoto(photo, position);
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            // Nothing to do, action sheet is automatically closed
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
```

Open `tab2.page.html` and add a new click handler to each `<ion-img>` element. When the app user taps on a photo in our gallery, we’ll display an [Action Sheet](../../api/action-sheet.md) dialog with the option to either delete the selected photo or cancel (close) the dialog.

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title> Photo Gallery </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Photo Gallery</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-grid>
    <ion-row>
      <ion-col size="6" *ngFor="let photo of photoService.photos; index as position">
        <!-- CHANGE: Add a click event listener to each image. -->
        <ion-img [src]="photo.webviewPath" (click)="showActionSheet(photo, position)"></ion-img>
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

Tap on a photo again and choose the “Delete” option. The photo is deleted! Implemented much faster using Live Reload. 💪

In the final portion of this tutorial, we’ll walk you through the basics of the Appflow product used to build and deploy your application to users' devices.
