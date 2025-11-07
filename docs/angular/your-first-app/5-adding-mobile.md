---
title: Adding Mobile
strip_number_prefixes: false
---

<head>
  <title>Adding Mobile Support with Angular | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="Learn how to add mobile support to your Ionic Capacitor photo gallery app, enabling it to run on iOS, Android, and the web using one codebase."
  />
</head>

Our photo gallery app won’t be complete until it runs on iOS, Android, and the web - all using one codebase. All it takes is some small logic changes to support mobile platforms, installing some native tooling, then running the app on a device. Let’s go!

## Import Platform API

Let’s start with making some small code changes - then our app will “just work” when we deploy it to a device.

Import the Ionic [Platform API](../platform.md) into `photo.service.ts`, which is used to retrieve information about the current device. In this case, it’s useful for selecting which code to execute based on the platform the app is running on (web or mobile).

Add `Platform` to the imports at the top of the file and a new property `platform` to the `PhotoService` class. We'll also need to update the constructor to set the user's platform.

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
// CHANGE: Add import
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos: UserPhoto[] = [];

  private PHOTO_STORAGE: string = 'photos';

  // CHANGE: Add a property to track the app's running platform
  private platform: Platform;

  // CHANGE: Update constructor to set `platform`
  constructor(platform: Platform) {
    this.platform = platform;
  }

  // ...existing code...
}
```

## Platform-specific Logic

First, we’ll update the photo saving functionality to support mobile. In the `savePicture()` method, check which platform the app is running on. If it’s “hybrid” (Capacitor, the native runtime), then read the photo file into base64 format using the `Filesystem.readFile()` method. Otherwise, use the same logic as before when running the app on the web.

Update `savePicture()` to look like the following:

```ts
// CHANGE: Update the `savePicture()` method
private async savePicture(photo: Photo) {
  let base64Data: string | Blob;

  // CHANGE: Add platform check
  // "hybrid" will detect Cordova or Capacitor
  if (this.platform.is('hybrid')) {
    // Read the file into base64 format
    const file = await Filesystem.readFile({
      path: photo.path!
    });
    base64Data = file.data;
  } else {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    base64Data = await this.convertBlobToBase64(blob) as string;
  }

  // Write the file to the data directory
  const fileName = Date.now() + '.jpeg';
  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data
  });

  // Use webPath to display the new image instead of base64 since it's
  // already loaded into memory
  return {
    filepath: fileName,
    webviewPath: photo.webPath,
  };
}
```

When running on mobile, set `filepath` to the result of the `writeFile()` operation - `savedFile.uri`. When setting the `webviewPath`, use the special `Capacitor.convertFileSrc()` method ([details on the File Protocol](../../core-concepts/webview.md#file-protocol)). To use this method, we'll need to import Capacitor into `photo.service.ts`.

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
// Change: Add import
import { Capacitor } from '@capacitor/core';

// ...existing code...
```

Then update `savePicture()` to look like the following:

```ts
// CHANGE: Update `savePicture()` method
private async savePicture(photo: Photo) {
  let base64Data: string | Blob;
  // "hybrid" will detect mobile - iOS or Android
  if (this.platform.is('hybrid')) {
    const file = await Filesystem.readFile({
      path: photo.path!,
    });
    base64Data = file.data;
  } else {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    base64Data = await this.convertBlobToBase64(blob) as string;
  }

  // Write the file to the data directory
  const fileName = Date.now() + '.jpeg';
  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data,
  });

  // CHANGE: Add platform check
  if (this.platform.is('hybrid')) {
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
}
```

Next, add a new bit of logic in the `loadSaved()` method. On mobile, we can directly point to each photo file on the Filesystem and display them automatically. On the web, however, we must read each image from the Filesystem into base64 format. This is because the Filesystem API uses [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) under the hood. Update the `loadSaved()` method:

```ts
// CHANGE: Update `loadSaved()` method
public async loadSaved() {
  const { value: photoList } = await Preferences.get({ key: this.PHOTO_STORAGE });
  this.photos = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];

  // CHANGE: Add platform check
  // If running on the web...
  if (!this.platform.is('hybrid')) {
    for (let photo of this.photos) {
      const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data
      });

      // Web platform only: Load the photo as base64 data
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }
}
```

Our Photo Gallery now consists of one codebase that runs on the web, Android, and iOS.

`photos.service.ts` should now look like this:

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos: UserPhoto[] = [];

  private PHOTO_STORAGE: string = 'photos';

  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform;
  }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const savedImageFile = await this.savePicture(capturedPhoto);

    this.photos.unshift(savedImageFile);

    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });
  }

  private async savePicture(photo: Photo) {
    let base64Data: string | Blob;

    // "hybrid" will detect Cordova or Capacitor
    if (this.platform.is('hybrid')) {
      // Read the file into base64 format
      const file = await Filesystem.readFile({
        path: photo.path!,
      });

      base64Data = file.data;
    } else {
      // Fetch the photo, read as a blob, then convert to base64 format
      const response = await fetch(photo.webPath!);
      const blob = await response.blob();

      base64Data = (await this.convertBlobToBase64(blob)) as string;
    }

    // Write the file to the data directory
    const fileName = Date.now() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    if (this.platform.is('hybrid')) {
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

  public async loadSaved() {
    // Retrieve cached photo array data
    const { value: photoList } = await Preferences.get({ key: this.PHOTO_STORAGE });
    this.photos = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];

    // If running on the web...
    if (!this.platform.is('hybrid')) {
      for (let photo of this.photos) {
        const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data,
        });
        // Web platform only: Load the photo as base64 data
        photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
      }
    }
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

Next up, the part you’ve been waiting for - deploying the app to a device.
