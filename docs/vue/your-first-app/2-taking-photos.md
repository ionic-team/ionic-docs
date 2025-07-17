---
sidebar_label: Taking Photos
---

# Taking Photos with the Camera

Now for the fun part - adding the ability to take photos with the device’s camera using the Capacitor [Camera API](https://capacitorjs.com/docs/apis/camera). We’ll begin with building it for the web, then make some small tweaks to make it work on mobile (iOS and Android).

To do so, we will create a standalone composition function paired with Vue's Composition API to manage the photos for the gallery.

:::note
If you are not familiar with Vue's Composition API, [Why Composition API?](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api) from the official Vue docs is a good resource to start with.
:::

Create a new file at `src/composables/usePhotoGallery.ts` and open it up.

We will start by importing the various utilities we will use from Vue core and Capacitor:

```typescript
// CHANGE: Add imports from `vue` and `capacitor`.
import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
```

Next, create a function named `usePhotoGallery`:

```typescript
import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

// CHANGE: Create `usePhotoGallery` function.
export const usePhotoGallery = () => {
  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
  };

  return {
    takePhoto,
  };
};
```

Our `usePhotoGallery` function exposes a method called takePhoto, which in turn calls the Capacitor Camera API's `getPhoto` method.

Notice the magic here: there's no platform-specific code (web, iOS, or Android)! The Capacitor Camera plugin abstracts that away for us, leaving just one method call - `getPhoto()` - that will open up the device's camera and allow us to take photos.

The last step we need to take is to use the new function in the Tab2 page. Go back to `Tab2Page.vue`.

Import `usePhotoGallery` and destructure the `takePhoto` function so we can use it in our `template`:

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
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="takePhoto()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

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
  } from '@ionic/vue';
  // CHANGE: Add `usePhotoGallery` import.
  import { usePhotoGallery } from '@/composables/usePhotoGallery';

  // CHANGE: Destructure `takePhoto` from `usePhotoGallery().
  const { takePhoto } = usePhotoGallery();
</script>
```

Save the file. Start the development server via `ionic serve` if it is not already running. In your browser, on the Photo Gallery tab, click the Camera button. If your computer has a webcam of any sort, a modal window appears. Take a selfie!

![A photo gallery app displaying a webcam selfie.](/img/guides/first-app-cap-ng/camera-web.png 'Webcam Selfie in Photo Gallery')

_(Your selfie is probably much better than mine)_

After taking a photo, it disappears right away. We still need to display it within our app and save it for future access.

## Displaying Photos

First we will create a new type to define our Photo, which will hold specific metadata. Back in `usePhotoGallery.ts`, add the following `UserPhoto` interface below the main function:

```typescript
export const usePhotoGallery = () => {
  // Same old code from before.
};

// CHANGE: Add the `UserPhoto` interface.
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

At the top of the `usePhotoGallery` function, define an array so we can store each photo captured with the Camera. Make it a reactive variable using Vue's [ref function](https://vuejs.org/api/reactivity-core.html#ref).

```typescript
export const usePhotoGallery = () => {
  // CHANGE: Add the `photos` array.
  const photos = ref<UserPhoto[]>([]);

  // other code
};
```

When the camera is done taking a picture, the resulting `Photo` returned from Capacitor will be added to the `photos` array. Update the `takePhoto` function with the following:

```typescript
const takePhoto = async () => {
  const photo = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100,
  });
  // CHANGE: Create the `fileName` with current timestamp.
  const fileName = Date.now() + '.jpeg';
  // CHANGE: Create `savedFileImage` matching `UserPhoto` interface.
  const savedFileImage = {
    filepath: fileName,
    webviewPath: photo.webPath,
  };

  // CHANGE: Update the `photos` array with the new photo.
  photos.value = [savedFileImage, ...photos.value];
};
```

Next, update the `userPhotoGallery` return statement to include the `photos` array:

```typescript
export const usePhotoGallery = () => {
  // other code

  // CHANGE: Update return statement to include `photos` array.
  return {
    photos,
    takePhoto,
  };
};
```

`usePhotoGallery.ts` should now look like this:

```typescript
import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export const usePhotoGallery = () => {
  const photos = ref<UserPhoto[]>([]);

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    const fileName = Date.now() + '.jpeg';
    const savedFileImage = {
      filepath: fileName,
      webviewPath: photo.webPath,
    };

    photos.value = [savedFileImage, ...photos.value];
  };

  return {
    photos,
    takePhoto,
  };
};

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

Back in `Tab2Page.vue`, update the import statement to include the `UserPhoto` interface and get access to the `photos` array:

```html
<template>
  <!-- template code -->
</template>

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
  } from '@ionic/vue';
  // CHANGE: Update import to include `UserPhoto` interface.
  import { usePhotoGallery, UserPhoto } from '@/composables/usePhotoGallery';

  // CHANGE: Add `photos` array to destructure from `usePhotoGallery()`.
  const { photos, takePhoto } = usePhotoGallery();
</script>
```

With the photo(s) stored into the main array we can now display the images on the screen. Add a [Grid component](https://ionicframework.com/docs/api/grid) so that each photo will display nicely as they are added to the gallery, and loop through each photo in the Photos array, adding an Image component (`<ion-img>`) for each. Point the `src` (source) to the photo's path:

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
      <!-- CHANGE: Add a grid component to display the photos. -->
      <ion-grid>
        <ion-row>
          <!-- CHANGE: Create a new column and image component for each photo. -->
          <ion-col size="6" :key="photo.filepath" v-for="photo in photos">
            <ion-img :src="photo.webviewPath"></ion-img>
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
  } from '@ionic/vue';
  import { usePhotoGallery, UserPhoto } from '@/composables/usePhotoGallery';

  const { photos, takePhoto } = usePhotoGallery();
</script>
```

Save all files. Within the web browser, click the Camera button and take another photo. This time, the photo is displayed in the Photo Gallery!

Up next, we’ll add support for saving the photos to the filesystem, so they can be retrieved and displayed in our app at a later time.
