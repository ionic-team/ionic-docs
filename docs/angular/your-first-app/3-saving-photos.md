---
title: Saving Photos to the Filesystem
sidebar_label: Saving Photos
---

# Saving Photos to the Filesystem

We’re now able to take multiple photos and display them in a photo gallery on the second tab of our app. These photos, however, are not currently being stored permanently, so when the app is closed, they will be deleted.

## Filesystem API

Fortunately, saving them to the filesystem only takes a few steps. Begin by creating a new class method, `savePicture()`, in the `PhotoService` class. We pass in the `photo` object, which represents the newly captured device photo:

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  // Same old code from before.

  // CHANGE: Add the `savePicture` method.
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
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos: UserPhoto[] = [];

  constructor() {}

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    // CHANGE: Add `savedImageFile` to save the picture and add it to photo collection.
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

We'll use the Capacitor [Filesystem API](../../native/filesystem.md) to save the photo. First, convert the photo to base64 format using a helper method we'll define: `readAsBase64()`.

Then, pass the data to the Filesystem's `writeFile` method. Recall that we display photos by setting the image's source path (`src`) to the `webviewPath` property. So, set the `webviewPath` and return the new `Photo` object.

The `readAsBase64()` method is necessary because it isolates a small amount of platform-specific logic (more on that soon). For now, create two new helper methods, `readAsBase64()` and `convertBlobToBase64()`, to implement the necessary logic for running on the web.

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  // Same old code from before.

  // CHANGE: Update the `savePicture` method.
  private async savePicture(photo: Photo) {
    // Convert photo to base64 format, required by Filesystem API to save
    const base64Data = await this.readAsBase64(photo);

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

  // CHANGE: Add the `readAsBase64` method.
  private async readAsBase64(photo: Photo) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();

    return (await this.convertBlobToBase64(blob)) as string;
  }

  // CHANGE: Add the `convertBlobToBase64` method.
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
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

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
    // Convert photo to base64 format, required by Filesystem API to save
    const base64Data = await this.readAsBase64(photo);

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

  private async readAsBase64(photo: Photo) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();

    return (await this.convertBlobToBase64(blob)) as string;
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

There we go! Each time a new photo is taken, it’s now automatically saved to the filesystem.

Next up, we'll load and display our saved images.
