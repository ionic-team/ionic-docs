---
sidebar_label: Live Reload
---

# Rapid App Development with Live Reload

So far, we’ve seen how easy it is to develop a cross-platform app that works everywhere. The development experience is pretty quick, but what if I told you there was a way to go faster?

We can use the Ionic CLI’s [Live Reload functionality](https://ionicframework.com/docs/cli/livereload) to boost our productivity when building Ionic apps. When active, Live Reload will reload the browser and/or WebView when changes in the app are detected.

## Live Reload

Remember `ionic serve`? That was Live Reload working in the browser, allowing us to iterate quickly.

We can also use it when developing on iOS and Android devices. This is particularly useful when writing code that interacts with native plugins. Since we need to run native plugin code on a device in order to verify that it works, having a way to quickly write code, build and deploy it, then test it is crucial to keeping up our development speed.

Let’s use Live Reload to implement photo deletion, the missing piece of our Photo Gallery feature. Select your platform of choice (iOS or Android) and connect a device to your computer. Next, run either command in a terminal, based on your chosen platform:

```shell
$ ionic cap run ios -l --external

$ ionic cap run android -l --external
```

The Live Reload server will start up, and the native IDE of choice will open if not opened already. Within the IDE, click the Play button to launch the app onto your device.

## Deleting Photos

With Live Reload running and the app is open on your device, let’s implement photo deletion functionality. We'll display an [IonActionSheet](https://ionicframework.com/docs/api/action-sheet) with the option to delete a photo.

Open `Tab2Page.vue` and add `actionSheetController` to the imports from `@ionic/vue`. We also need to add a reference to the `deletePhoto` method, which we'll create soon in `usePhotoGallery()`:

```html
<template>
  <!-- template code -->
</template>

<script setup lang="ts">
  import { camera, trash, close } from 'ionicons/icons';
  import {
    // CHANGE: Add the `actionSheetController` import.
    actionSheetController,
    IonPage,
    IonHeader,
    IonFab,
    IonFabButton,
    IonIcon,
    IonToolbar,
    IonTitle,
    IonContent,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
  } from '@ionic/vue';
  import { usePhotoGallery, UserPhoto } from '@/composables/usePhotoGallery';

  // CHANGE: Add reference to the `deletePhoto` method.
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();
</script>
```

When a user clicks/taps on an image, we will show the action sheet. Add a click handler to the `<ion-img>` element:

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Photo Gallery</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Photo Gallery</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <ion-row>
          <ion-col size="6" :key="photo.filepath" v-for="photo in photos">
            <!-- CHANGE: Add a click event listener to each image. -->
            <ion-img :src="photo.webviewPath" @click="showActionSheet(photo)"></ion-img>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="takePhoto()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  // script setup code
</script>
```

Next, within `script setup`, create a new function called `showActionSheet`. `showActionSheet` will call the `create` method on the `actionSheetController` to open a dialog with the option to either delete the selected photo or cancel (close) the dialog:

```html
<template>
  <!-- template code -->
</template>

<script setup lang="ts">
  import { camera, trash, close } from 'ionicons/icons';
  import {
    actionSheetController,
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
  } from '@ionic/vue';
  import { usePhotoGallery, UserPhoto } from '@/composables/usePhotoGallery';

  const { photos, takePhoto, deletePhoto } = usePhotoGallery();

  // CHANGE: Add the `showActionSheet` function.
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

Next, open `usePhotoGallery.ts`. We need to implement the `deletePhoto` method in the `usePhotoGallery` function. We also need to update the return statement to include `deletePhoto`:

```tsx
import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { isPlatform } from '@ionic/vue';
import { Capacitor } from '@capacitor/core';

export const usePhotoGallery = () => {
  const PHOTO_STORAGE = 'photos';
  const photos = ref<UserPhoto[]>([]);

  const takePhoto = async () => {
    // Same old code from before.
  };

  const convertBlobToBase64 = (blob: Blob) => {
    // Same old code from before.
  };

  const cachePhotos = () => {
    // Same old code from before.
  };

  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    // Same old code from before.
  };

  const loadSaved = async () => {
    // Same old code from before.
  };

  // CHANGE: Add the `deletePhoto` method.
  const deletePhoto = async (photo: UserPhoto) => {
    // Remove this photo from the Photos reference data array
    photos.value = photos.value.filter((p) => p.filepath !== photo.filepath);

    // delete photo file from filesystem
    const filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);
    await Filesystem.deleteFile({
      path: filename,
      directory: Directory.Data,
    });
  };

  onMounted(loadSaved);
  watch(photos, cachePhotos);

  // CHANGE: Add `deletePhoto` to the return statement.
  return {
    photos,
    takePhoto,
    deletePhoto,
  };
};

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

The selected photo is removed from the `photos` array first, then we delete the photo file using the Filesystem API.

Remember that removing the photo from the `photos` array triggers the `cachePhotos` function for us automatically:

```tsx
const cachePhotos = () => {
  Preferences.set({
    key: PHOTO_STORAGE,
    value: JSON.stringify(photos.value),
  });
};

watch(photos, cachePhotos);
```

Save this file, then tap on a photo again and choose the "Delete" option. This time, the photo is deleted! Implemented much faster using Live Reload. 💪

In the final portion of this tutorial, we’ll walk you through the basics of the Appflow product used to build and deploy your application to users' devices.
