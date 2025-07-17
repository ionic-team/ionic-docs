---
title: Loading Photos from the Filesystem
sidebar_label: Loading Photos
---

<head>
  <title>Loading Photos from the Filesystem Using A Key-Value Store</title>
  <meta
    name="description"
    content="We’ve implemented photo taking and saving to the filesystem, now learn how Ionic leverages Capacitor Preferences API for loading our photos in a key-value store."
  />
</head>

We’ve implemented photo taking and saving to the filesystem. There’s one last piece of functionality missing: the photos are stored in the filesystem, but we need a way to save pointers to each file so that they can be displayed again in the photo gallery.

Fortunately, this is easy: we’ll leverage the Capacitor [Preferences API](https://capacitorjs.com/docs/apis/preferences) to store our array of Photos in a key-value store.

## Preferences API

Begin by defining a constant variable that will act as the key for the store before the `usePhotoGallery` function definition in `src/hooks/usePhotoGallery.ts`:

```tsx
// CHANGE: Create a constant variable that will act as a key to store
const PHOTO_STORAGE = 'photos';

// Same old code from before
export function usePhotoGallery() {}
```

Then, use the `Storage` class to get access to the get and set methods for reading and writing to device storage:

At the end of the `takePhoto` function, add a call to `Preferences.set()` to save the Photos array. By adding it here, the Photos array is stored each time a new photo is taken. This way, it doesn’t matter when the app user closes or switches to a different app - all photo data is saved.

```tsx
// Same old code from before.
export function usePhotoGallery() {
  // Same old code from before.

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const newPhotos = [
      {
        filepath: fileName,
        webviewPath: photo.webPath,
      },
      ...photos,
    ];
    setPhotos(newPhotos);
    // CHANGE: Add a call to save the photos array
    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
  };
  // Same old code from before
  return {
    photos,
    takePhoto,
  };
}

// Same old code from before.
```

With the photo array data saved, we will create a method that will retrieve the data when the hook loads. We will do so by using React's `useEffect` hook. Insert this above the `takePhoto` declaration. Here is the code, and we will break it down:

```tsx
// Same old code from before.
export function usePhotoGallery() {
  // Same old code from before.

  // CHANGE: Add useEffect hook
  useEffect(() => {
    const loadSaved = async () => {
      const { value } = await Preferences.get({ key: PHOTO_STORAGE });
      const photosInPreferences = (value ? JSON.parse(value) : []) as UserPhoto[];

      for (let photo of photosInPreferences) {
        const file = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data,
        });
        // Web platform only: Load the photo as base64 data
        photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
      }
      setPhotos(photosInPreferences);
    };
    loadSaved();
  }, []);

  const takePhotos = async () => {
    // Same old code from before.
  };
}

// Same old code from before.
```

This seems a bit scary at first, so let's walk through it, first by looking at the second parameter we pass into the hook: the dependency array `[]`.

The useEffect hook, by default, gets called each time a component renders, unless, we pass in a dependency array. In that case, it will only run when a dependency gets updated. In our case we only want it to be called once. By passing in an empty array, which will not be changed, we can prevent the hook from being called multiple times.

The first parameter to `useEffect` is the function that will be called by the effect. We pass in an anonymous arrow function, and inside of it we define another asynchronous method and then immediately call this. We have to call the async function from within the hook as the hook callback can't be asynchronous itself.

On mobile (coming up next!), we can directly set the source of an image tag - `<img src=”x” />` - to each photo file on the Filesystem, displaying them automatically. On the web, however, we must read each image from the Filesystem into base64 format, because the Filesystem API stores them in base64 within [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) under the hood.

`usePhotoGallery.ts` should now look like this:

```tsx
import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';

const PHOTO_STORAGE = 'photos';

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);
  const fileName = Date.now() + '.jpeg';
  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    const base64Data = await base64FromPath(photo.webPath!);
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

  useEffect(() => {
    const loadSaved = async () => {
      const { value } = await Preferences.get({ key: PHOTO_STORAGE });
      const photosInPreferences = (value ? JSON.parse(value) : []) as UserPhoto[];

      for (let photo of photosInPreferences) {
        const file = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data,
        });
        // Web platform only: Load the photo as base64 data
        photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
      }
      setPhotos(photosInPreferences);
    };
    loadSaved();
  }, []);

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const newPhotos = [
      {
        filepath: fileName,
        webviewPath: photo.webPath,
      },
      ...photos,
    ];
    setPhotos(newPhotos);
    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
  };

  return {
    photos,
    takePhoto,
  };
}

export async function base64FromPath(path: string): Promise<string> {
  const response = await fetch(path);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject('method did not return a string');
      }
    };
    reader.readAsDataURL(blob);
  });
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

That’s it! We’ve built a complete Photo Gallery feature in our Ionic app that works on the web. Next up, we’ll transform it into a mobile app for iOS and Android!
