---
title: Rapid App Development with Live Reload
sidebar_label: Live Reload
---

<head>
  <title>Rapid App Development with Live Reload with Vue | Ionic Capacitor Camera</title>
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

In `usePhotoGallery.ts`, add the `deletePhoto()` method. The selected photo is removed from the `photos` array first. Then, we delete the actual photo file itself using the Filesystem API.

```ts
import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { isPlatform } from '@ionic/vue';
import { Capacitor } from '@capacitor/core';

export const usePhotoGallery = () => {
  // ...existing code...

  // CHANGE: Add `deletePhoto()` method.
  const deletePhoto = async (photo: UserPhoto) => {
    // Remove this photo from the Photos reference data array
    photos.value = photos.value.filter((p) => p.filepath !== photo.filepath);

    // Delete photo file from filesystem
    const filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);
    await Filesystem.deleteFile({
      path: filename,
      directory: Directory.Data,
    });
  };

  onMounted(loadSaved);
  watch(photos, cachePhotos);

  return {
    photos,
    addNewToGallery,
    // CHANGE: Add `deletePhoto()` to the return statement.
    deletePhoto,
  };
};

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

Next, in `Tab2Page.vue`, implement the `showActionSheet()` method. We're adding two options: "Delete", which calls `usePhotoGallery.deletePicture()`, and "Cancel". The cancel button will automatically closes the action sheet when assigned the "cancel" role.

```vue
<!-- ...existing code... -->

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
  // CHANGE: Add the `actionSheetController` import.
  actionSheetController,
} from '@ionic/vue';

// CHANGE: Add `UserPhoto` type import.
import type { UserPhoto } from '@/composables/usePhotoGallery';
import { usePhotoGallery } from '@/composables/usePhotoGallery';

// CHANGE: Add `deletePhoto()` method.
const { photos, addNewToGallery, deletePhoto } = usePhotoGallery();

// CHANGE: Add `showActionSheet()` method.
const showActionSheet = async (photo: UserPhoto) => {
  const actionSheet = await actionSheetController.create({
    header: 'Photos',
    buttons: [
      {
        text: 'Delete',
        role: 'destructive',
        icon: trash,
        handler: () => {
          deletePhoto(photo);
        },
      },
      {
        text: 'Cancel',
        icon: close,
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
        },
      },
    ],
  });
  await actionSheet.present();
};
</script>
```

Add a click handler to the `<ion-img>` element. When the app user taps on a photo in our gallery, we’ll display an [Action Sheet](../../api/action-sheet.md) dialog with the option to either delete the selected photo or cancel (close) the dialog.

```vue
<ion-grid>
  <ion-row>
    <ion-col size="6" :key="photo.filepath" v-for="photo in photos">
      <!-- CHANGE: Add a click event listener to each image. -->
      <ion-img :src="photo.webviewPath" @click="showActionSheet(photo)"></ion-img>
    </ion-col>
  </ion-row>
</ion-grid>
```

Remember that removing the photo from the `photos` array triggers the `cachePhotos` method for us automatically.

Tap on a photo again and choose the “Delete” option. The photo is deleted! Implemented much faster using Live Reload. 💪

In the final portion of this tutorial, we’ll walk you through the basics of the Appflow product used to build and deploy your application to users' devices.
