---
title: Saving Photos to the Filesystem
sidebar_label: Saving Photos
---

<head>
  <title>Saving Photos to the Filesystem with React | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="We’re now able to take multiple photos and display them in a photo gallery. Learn how to save these photos to the filesystem using the Ionic Capacitor Filesystem API."
  />
</head>

# Saving Photos to the Filesystem

We’re now able to take multiple photos and display them in a photo gallery on the second tab of our app. These photos, however, are not currently being stored permanently, so when the app is closed, they will be deleted.

## Filesystem API

Fortunately, saving them to the filesystem only takes a few steps. Begin by creating a new class method, `savePicture()`, in the `usePhotoGallery()` method in `usePhotoGallery.ts`.

```ts
import { useState, useEffect } from 'react';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export function usePhotoGallery() {
  // Same old code from before.

  // CHANGE: Add the `savePicture()` method
  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    return {
      filepath: 'soon...',
      webviewPath: 'soon...',
    };
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

We can use this new method immediately in `addNewToGallery()`.

```ts
import { useState, useEffect } from 'react';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  const addNewToGallery = async () => {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = Date.now() + '.jpeg';
    // CHANGE: Add `savedImageFile`
    // Save the picture and add it to photo collection
    const savedImageFile = await savePicture(capturedPhoto, fileName);

    // CHANGE: Update state with new photo
    const newPhotos = [savedImageFile, ...photos];
    setPhotos(newPhotos);
  };

  // CHANGE: Add `savePicture()` method
  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    return {
      filepath: 'soon...',
      webviewPath: 'soon...',
    };
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

We'll use the Capacitor [Filesystem API](../../native/filesystem.md) to save the photo. First, convert the photo to base64 format.

Then, pass the data to the Filesystem's `writeFile` method. Recall that we display photos by setting the image's source path (`src`) to the `webviewPath` property. So, set the `webviewPath` and return the new `Photo` object.

For now, create a new helper method, `convertBlobToBase64()`, to implement the necessary logic for running on the web.

```ts
import { useState, useEffect } from 'react';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export function usePhotoGallery() {
  // Same old code from before.

  // CHANGE: Update the `savePicture()` method
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

  // CHANGE: Add `convertBlobToBase64()` method
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

`usePhotoGallery.ts` should now look like this:

```ts
import { useState, useEffect } from 'react';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

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

Obtaining the camera photo as base64 format on the web appears to be a bit trickier than on mobile. In reality, we’re just using built-in web APIs: [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) as a neat way to read the file into blob format, then FileReader’s [readAsDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL) to convert the photo blob to base64.

There we go! Each time a new photo is taken, it’s now automatically saved to the filesystem. Next up, we'll load and display our saved images.
