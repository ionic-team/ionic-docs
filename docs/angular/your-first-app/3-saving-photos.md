---
title: Saving Photos to the Filesystem
sidebar_label: 写真の保存
---

<head>
  <title>Saving Photos to the Filesystem with Angular | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="We’re now able to take multiple photos and display them in a photo gallery. Learn how to save these photos to the filesystem using the Ionic Capacitor Filesystem API."
  />
</head>

We’re now able to take multiple photos and display them in a photo gallery on the second tab of our app. These photos, however, are not currently being stored permanently, so when the app is closed, they will be deleted.

## Filesystem API

Fortunately, saving them to the filesystem only takes a few steps. Begin by creating a new class method, `savePicture()`, in the `PhotoService` class. We pass in the `photo` object, which represents the newly captured device photo:

```ts
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
// CHANGE: Add import
import type { Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  // ...existing code...

  // CHANGE: Add the `savePicture()` method
  private async savePicture(photo: Photo) {
    return {
      filepath: 'soon...',
      webviewPath: 'soon...',
    };
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

We can use this new method immediately in `addNewToGallery()`.

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos: UserPhoto[] = [];

  // CHANGE: Update the `addNewToGallery()` method
  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    // CHANGE: Add `savedImageFile`
    // Save the picture and add it to photo collection
    const savedImageFile = await this.savePicture(capturedPhoto);

    // CHANGE: Update argument to unshift array method
    this.photos.unshift(savedImageFile);
  }

  private async savePicture(photo: Photo) {
    return {
      filepath: 'soon...',
      webviewPath: 'soon...',
    };
  }
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
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
// CHANGE: Add import
import { Filesystem, Directory } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  // ...existing code...

  // CHANGE: Update the `savePicture()` method
  private async savePicture(photo: Photo) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    const base64Data = (await this.convertBlobToBase64(blob)) as string;

    // Write the file to the data directory
    const fileName = Date.now() + '.jpeg';
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
  }

  // CHANGE: Add the `convertBlobToBase64` method
  private convertBlobToBase64(blob: Blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

`photo.service.ts` should now look like this:

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos: UserPhoto[] = [];

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    // Save the picture and add it to photo collection
    const savedImageFile = await this.savePicture(capturedPhoto);

    this.photos.unshift(savedImageFile);
  }

  private async savePicture(photo: Photo) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    const base64Data = (await this.convertBlobToBase64(blob)) as string;

    // Write the file to the data directory
    const fileName = Date.now() + '.jpeg';
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
  }

  private convertBlobToBase64(blob: Blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

Obtaining the camera photo as base64 format on the web appears to be a bit trickier than on mobile. In reality, we’re just using built-in web APIs: [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) as a neat way to read the file into blob format, then FileReader’s [readAsDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL) to convert the photo blob to base64.

There we go! Each time a new photo is taken, it’s now automatically saved to the filesystem. Next up, we'll load and display our saved images.
