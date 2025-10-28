---
title: Loading Photos from the Filesystem
sidebar_label: Loading Photos
---

<head>
  <title>Loading Photos from the Filesystem with React | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="We’ve implemented photo taking and saving to the filesystem, now learn how Ionic leverages Capacitor Preferences API for loading our photos in a key-value store."
  />
</head>

# Loading Photos from the Filesystem

We’ve implemented photo taking and saving to the filesystem. There’s one last piece of functionality missing: the photos are stored in the filesystem, but we need a way to save pointers to each file so that they can be displayed again in the photo gallery.

Fortunately, this is easy: we’ll leverage the Capacitor [Preferences API](../../native/preferences.md) to store our array of Photos in a key-value store.

## Preferences API

Open `usePhotoGallery.ts` and begin by defining a constant variable that will act as the key for the store.

```ts
export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);
  // CHANGE: Add a key for photo storage.
  const PHOTO_STORAGE = 'photos';

  // Same old code from before.
}
```

Next, at the end of the `addNewToGallery()` method, add a call to the `Preferences.set()` method to save the `photos` array. By adding it here, the `photos` array is stored each time a new photo is taken. This way, it doesn’t matter when the app user closes or switches to a different app - all photo data is saved.

```ts
const addNewToGallery = async () => {
  // Same old code from before.

  // CHANGE: Add method to cache all photo data for future retrieval.
  Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
};
```

With the photo array data saved, create a new method in the `usePhotoGallery()` called `loadSaved()` that can retrieve the photo data. We use the same key to retrieve the `photos` array in JSON format, then parse it into an array.

```ts
export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  const PHOTO_STORAGE = 'photos';

  // CHANGE: Add useEffect hook.
  useEffect(() => {
    // CHANGE: Add `loadSaved()` method.
    const loadSaved = async () => {
      const { value: photoList } = await Preferences.get({ key: PHOTO_STORAGE });
      const photosInPreferences = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];
    };

    loadSaved();
  }, []);

  // Same old code from before.
}
```

The second parameter, the empty dependency array (`[]`), is what tells React to only run the function once. Normally, [useEffect hooks](https://react.dev/reference/react/useEffect) run after every render, but passing an empty array prevents it from running again because none of the dependencies, the values the hook relies on, will ever change.

On mobile (coming up next!), we can directly set the source of an image tag - `<img src="x" />` - to each photo file on the `Filesystem`, displaying them automatically. On the web, however, we must read each image from the `Filesystem` into base64 format, using a new `base64` property on the `Photo` object. This is because the `Filesystem` API uses [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) under the hood. Add the following code to complete the `loadSaved()` method.

```ts
export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  const PHOTO_STORAGE = 'photos';

  useEffect(() => {
    // CHANGE: Update `loadSaved()` method.
    const loadSaved = async () => {
      const { value: photoList } = await Preferences.get({ key: PHOTO_STORAGE });
      const photosInPreferences = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];

      // CHANGE: Display the photo by reading into base64 format.
      for (const photo of photosInPreferences) {
        const file = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data,
        });
        photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
      }

      setPhotos(photosInPreferences);
    };

    loadSaved();
  }, []);

  // Same old code from before.
}
```

`usePhotoGallery.ts` should now look like this:

```ts
import { useState, useEffect } from 'react';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  const PHOTO_STORAGE = 'photos';

  useEffect(() => {
    const loadSaved = async () => {
      const { value: photoList } = await Preferences.get({ key: PHOTO_STORAGE });
      const photosInPreferences = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];

      for (const photo of photosInPreferences) {
        const file = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data,
        });
        photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
      }

      setPhotos(photosInPreferences);
    };

    loadSaved();
  }, []);

  const addNewToGallery = async () => {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = Date.now() + '.jpeg';
    // Save the picture and add it to photo collection
    const savedImageFile = await savePicture(capturedPhoto, fileName);

    const newPhotos = [savedImageFile, ...photos];
    setPhotos(newPhotos);

    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
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

  return {
    addNewToGallery,
    photos,
  };
}

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
