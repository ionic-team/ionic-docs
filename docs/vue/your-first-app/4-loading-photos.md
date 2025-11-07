---
title: Loading Photos from the Filesystem
sidebar_label: Loading Photos
---

<head>
  <title>Loading Photos from the Filesystem with Vue | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="We’ve implemented photo taking and saving to the filesystem, now learn how Ionic leverages Capacitor Preferences API for loading our photos in a key-value store."
  />
</head>

We’ve implemented photo taking and saving to the filesystem. There’s one last piece of functionality missing: the photos are stored in the filesystem, but we need a way to save pointers to each file so that they can be displayed again in the photo gallery.

Fortunately, this is easy: we’ll leverage the Capacitor [Preferences API](../../native/preferences.md) to store our array of Photos in a key-value store.

## Preferences API

Open `usePhotoGallery.ts` and begin by defining a constant variable that will act as the key for the store.

```ts
export const usePhotoGallery = () => {
  const photos = ref<UserPhoto[]>([]);

  // CHANGE: Add a key for photo storage
  const PHOTO_STORAGE = 'photos';

  // ...existing code...
};
```

Next, at the end of the `usePhotoGallery()` method, add a call to the `cachePhotos` method to save the `photos` array. By adding it here, the `photos` array is stored each time a new photo is taken. This way, it doesn’t matter when the app user closes or switches to a different app - all photo data is saved.

```ts
export const usePhotoGallery = () => {
  // ...existing code...

  // CHANGE: Add `cachePhotos()` method
  const cachePhotos = () => {
    Preferences.set({
      key: PHOTO_STORAGE,
      value: JSON.stringify(photos.value),
    });
  };

  return {
    photos,
    addNewToGallery,
  };
};
```

Next, use the Vue [watch method](https://vuejs.org/api/reactivity-core.html#watch) to watch the `photos` array. Whenever the array is modified (in this case, taking or deleting photos), trigger the `cachePhotos` method. Not only do we get to reuse code, but it also doesn’t matter when the app user closes or switches to a different app - photo data is always saved.

Add the call to the `watch()` method above the return statement in `usePhotoGallery()`.

```ts
export const usePhotoGallery = () => {
  // ...existing code...

  // CHANGE: Add call to `watch` with `photos` array and `cachePhotos` method
  watch(photos, cachePhotos);

  return {
    photos,
    addNewToGallery,
  };
};
```

With the photo array data saved, create a new method in the `usePhotoGallery()` called `loadSaved()` that can retrieve the photo data. We use the same key to retrieve the `photos` array in JSON format, then parse it into an array.

```ts
export const usePhotoGallery = () => {
  // ...existing code...

  // CHANGE: Add `loadSaved()` method
  const loadSaved = async () => {
    const photoList = await Preferences.get({ key: PHOTO_STORAGE });
    const photosInPreferences = photoList.value ? JSON.parse(photoList.value) : [];
  };

  watch(photos, cachePhotos);

  return {
    photos,
    addNewToGallery,
  };
};
```

On mobile (coming up next!), we can directly set the source of an image tag - `<img src="x" />` - to each photo file on the `Filesystem`, displaying them automatically. On the web, however, we must read each image from the `Filesystem` into base64 format, using a new `base64` property on the `Photo` object. This is because the `Filesystem` API uses [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) under the hood. Add the following code to complete the `loadSaved()` method.

```ts
export const usePhotoGallery = () => {
  // ...existing code...

  // CHANGE: Update `loadSaved()` method
  const loadSaved = async () => {
    const photoList = await Preferences.get({ key: PHOTO_STORAGE });
    const photosInPreferences = photoList.value ? JSON.parse(photoList.value) : [];

    // CHANGE: Display the photo by reading into base64 format
    for (const photo of photosInPreferences) {
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }

    photos.value = photosInPreferences;
  };

  watch(photos, cachePhotos);

  return {
    photos,
    addNewToGallery,
  };
};
```

`usePhotoGallery.ts` should now look like this:

```ts
import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export const usePhotoGallery = () => {
  const photos = ref<UserPhoto[]>([]);

  const PHOTO_STORAGE = 'photos';

  const addNewToGallery = async () => {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = Date.now() + '.jpeg';
    const savedImageFile = await savePicture(capturedPhoto, fileName);

    photos.value = [savedImageFile, ...photos.value];
  };

  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    const base64Data = (await convertBlobToBase64(blob)) as string;

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  };

  const convertBlobToBase64 = (blob: Blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  };

  const cachePhotos = () => {
    Preferences.set({
      key: PHOTO_STORAGE,
      value: JSON.stringify(photos.value),
    });
  };

  const loadSaved = async () => {
    const photoList = await Preferences.get({ key: PHOTO_STORAGE });
    const photosInPreferences = photoList.value ? JSON.parse(photoList.value) : [];

    for (const photo of photosInPreferences) {
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }

    photos.value = photosInPreferences;
  };

  watch(photos, cachePhotos);

  return {
    addNewToGallery,
    photos,
  };
};

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

Our `usePhotoGallery()` can now load the saved images, but we'll need to update the file to put that new code to work. We'll call `loadSaved` within the [onMounted](https://vuejs.org/api/composition-api-lifecycle.html#onmounted) lifecycle method so that when the user first navigates to the Photo Gallery, all photos are loaded and displayed on the screen.

Update `usePhotoGallery.ts` to look like the following:

```ts
import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export const usePhotoGallery = () => {
  const photos = ref<UserPhoto[]>([]);

  const PHOTO_STORAGE = 'photos';

  const addNewToGallery = async () => {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = Date.now() + '.jpeg';
    const savedImageFile = await savePicture(capturedPhoto, fileName);

    photos.value = [savedImageFile, ...photos.value];
  };

  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    const base64Data = (await convertBlobToBase64(blob)) as string;

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  };

  const convertBlobToBase64 = (blob: Blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  };

  const cachePhotos = () => {
    Preferences.set({
      key: PHOTO_STORAGE,
      value: JSON.stringify(photos.value),
    });
  };

  const loadSaved = async () => {
    const photoList = await Preferences.get({ key: PHOTO_STORAGE });
    const photosInPreferences = photoList.value ? JSON.parse(photoList.value) : [];

    for (const photo of photosInPreferences) {
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }

    photos.value = photosInPreferences;
  };

  // CHANGE: Add call to `onMounted()` with the `loadSaved()` method
  onMounted(loadSaved);
  watch(photos, cachePhotos);

  return {
    addNewToGallery,
    photos,
  };
};

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

:::note
If you're seeing broken image links or missing photos after following these steps, you may need to open your browser's dev tools and clear both [localStorage](https://developer.chrome.com/docs/devtools/storage/localstorage) and [IndexedDB](https://developer.chrome.com/docs/devtools/storage/indexeddb).

In localStorage, look for domain `http://localhost:8100` and key `CapacitorStorage.photos`. In IndexedDB, find a store called "FileStorage". Your photos will have a key like `/DATA/123456789012.jpeg`.
:::

That’s it! We’ve built a complete Photo Gallery feature in our Ionic app that works on the web. Next up, we’ll transform it into a mobile app for iOS and Android!
