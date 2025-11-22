---
title: Adding Mobile
sidebar_label: モバイルデバイス機能の追加
---

<head>
  <title>Adding Mobile Support with React | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="Learn how to add mobile support to your Ionic Capacitor photo gallery app, enabling it to run on iOS, Android, and the web using one codebase."
  />
</head>

Our photo gallery app won’t be complete until it runs on iOS, Android, and the web - all using one codebase. All it takes is some small logic changes to support mobile platforms, installing some native tooling, then running the app on a device. Let’s go!

## Import Platform API

Let’s start with making some small code changes - then our app will “just work” when we deploy it to a device.

Import the Ionic [Platform API](../platform.md) into `usePhotoGallery.ts`, which is used to retrieve information about the current device. In this case, it’s useful for selecting which code to execute based on the platform the app is running on (web or mobile).

Add `isPlatform` to the imports at the top of the file to use the `isPlatform` method. `Capacitor` is also imported to help with file paths on mobile devices.

```ts
import { useState, useEffect } from 'react';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
// CHANGE: Add import
import { isPlatform } from '@ionic/react';
import { Capacitor } from '@capacitor/core';

// ...existing code...
```

## Platform-specific Logic

First, we’ll update the photo saving functionality to support mobile. In the `savePicture()` method, check which platform the app is running on. If it’s “hybrid” (Capacitor, the native runtime), then read the photo file into base64 format using the `Filesystem.readFile()` method. Otherwise, use the same logic as before when running the app on the web.

Update `savePicture()` to look like the following:

```ts
// CHANGE: Update the `savePicture()` method
const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
  let base64Data: string | Blob;
  // CHANGE: Add platform check
  // "hybrid" will detect mobile - iOS or Android
  if (isPlatform('hybrid')) {
    const readFile = await Filesystem.readFile({
      path: photo.path!,
    });
    base64Data = readFile.data;
  } else {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    base64Data = (await convertBlobToBase64(blob)) as string;
  }

  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data,
  });

  // CHANGE: Add platform check
  if (isPlatform('hybrid')) {
    // Display the new image by rewriting the 'file://' path to HTTP
    return {
      filepath: savedFile.uri,
      webviewPath: Capacitor.convertFileSrc(savedFile.uri),
    };
  } else {
    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  }
};
```

Next, add a new bit of logic in the `loadSaved()` method. On mobile, we can directly point to each photo file on the Filesystem and display them automatically. On the web, however, we must read each image from the Filesystem into base64 format. This is because the Filesystem API uses [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) under the hood. Update the `loadSaved()` method:

```ts
// CHANGE: Update `loadSaved` method
const loadSaved = async () => {
  const { value: photoList } = await Preferences.get({ key: PHOTO_STORAGE });
  const photosInPreferences = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];

  // CHANGE: Add platform check
  // If running on the web...
  if (!isPlatform('hybrid')) {
    for (const photo of photosInPreferences) {
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }

  setPhotos(photosInPreferences);
};
```

Our Photo Gallery now consists of one codebase that runs on the web, Android, and iOS.

`usePhotoGallery.ts` should now look like this:

```ts
import { useState, useEffect } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { isPlatform } from '@ionic/react';
import { Capacitor } from '@capacitor/core';

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  const PHOTO_STORAGE = 'photos';

  useEffect(() => {
    const loadSaved = async () => {
      const { value: photoList } = await Preferences.get({ key: PHOTO_STORAGE });
      const photosInPreferences = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];

      // If running on the web...
      if (!isPlatform('hybrid')) {
        for (const photo of photosInPreferences) {
          const readFile = await Filesystem.readFile({
            path: photo.filepath,
            directory: Directory.Data,
          });
          photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
        }
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
    let base64Data: string | Blob;
    // "hybrid" will detect mobile - iOS or Android
    if (isPlatform('hybrid')) {
      const readFile = await Filesystem.readFile({
        path: photo.path!,
      });
      base64Data = readFile.data;
    } else {
      // Fetch the photo, read as a blob, then convert to base64 format
      const response = await fetch(photo.webPath!);
      const blob = await response.blob();
      base64Data = (await convertBlobToBase64(blob)) as string;
    }

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    if (isPlatform('hybrid')) {
      // Display the new image by rewriting the 'file://' path to HTTP
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    } else {
      // Use webPath to display the new image instead of base64 since it's
      // already loaded into memory
      return {
        filepath: fileName,
        webviewPath: photo.webPath,
      };
    }
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

Next up, the part you’ve been waiting for - deploying the app to a device.
