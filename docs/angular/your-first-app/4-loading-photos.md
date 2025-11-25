---
title: Loading Photos from the Filesystem
sidebar_label: 写真の読み込み
---

<head>
  <title>Loading Photos from the Filesystem with Angular | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="We’ve implemented photo taking and saving to the filesystem, now learn how Ionic leverages Capacitor Preferences API for loading our photos in a key-value store."
  />
</head>

We’ve implemented photo taking and saving to the filesystem. There’s one last piece of functionality missing: the photos are stored in the filesystem, but we need a way to save pointers to each file so that they can be displayed again in the photo gallery.

Fortunately, this is easy: we’ll leverage the Capacitor [Preferences API](../../native/preferences.md) to store our array of Photos in a key-value store.

## Preferences API

Open `photo.service.ts` and begin by defining a new property in the `PhotoService` class that will act as the key for the store.

```ts
export class PhotoService {
  public photos: UserPhoto[] = [];

  // CHANGE: Add a key for photo storage
  private PHOTO_STORAGE: string = 'photos';

  // ...existing code...
}
```

Next, at the end of the `addNewToGallery()` method, add a call to `Preferences.set()` to save the `photos` array. By adding it here, the `photos` array is stored each time a new photo is taken. This way, it doesn’t matter when the app user closes or switches to a different app - all photo data is saved.

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
// CHANGE: Add import
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  // ...existing code...

  // CHANGE: Update `addNewToGallery()` method
  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const savedImageFile = await this.savePicture(capturedPhoto);

    this.photos.unshift(savedImageFile);

    // CHANGE: Add method to cache all photo data for future retrieval
    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });
  }

  // ...existing code...
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

With the photo array data saved, create a new public method in the `PhotoService` class called `loadSaved()` that can retrieve the photo data. We use the same key to retrieve the `photos` array in JSON format, then parse it into an array:

```ts
export class PhotoService {
  // ...existing code...

  // CHANGE: Add the method to load the photo data
  public async loadSaved() {
    // Retrieve cached photo array data
    const { value: photoList } = await Preferences.get({ key: this.PHOTO_STORAGE });
    this.photos = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];
  }
}
```

On mobile (coming up next!), we can directly set the source of an image tag - `<img src="x" />` - to each photo file on the `Filesystem`, displaying them automatically. On the web, however, we must read each image from the `Filesystem` into base64 format, using a new `base64` property on the `Photo` object. This is because the `Filesystem` API uses [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) under the hood. Add the following code to complete the `loadSaved()` method:

```ts
export class PhotoService {
  // ...existing code...

  // CHANGE: Update the `loadSaved()` method
  public async loadSaved() {
    // Retrieve cached photo array data
    const { value: photoList } = await Preferences.get({ key: this.PHOTO_STORAGE });
    this.photos = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];

    // CHANGE: Display the photo by reading into base64 format
    for (let photo of this.photos) {
      // Read each saved photo's data from the Filesystem
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });

      // Web platform only: Load the photo as base64 data
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }
}
```

`photo.service.ts` should now look like this:

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos: UserPhoto[] = [];

  private PHOTO_STORAGE: string = 'photos';

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

    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });
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

  public async loadSaved() {
    // Retrieve cached photo array data
    const { value: photoList } = await Preferences.get({ key: this.PHOTO_STORAGE });
    this.photos = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];

    for (let photo of this.photos) {
      // Read each saved photo's data from the Filesystem
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });

      // Web platform only: Load the photo as base64 data
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

Our `PhotoService` can now load the saved images, but we'll need to update `tab2.page.ts` to put that new code to work. We'll call `loadSaved()` within the [ngOnInit](https://angular.dev/guide/components/lifecycle#ngoninit) lifecycle method so that when the user first navigates to the Photo Gallery, all photos are loaded and displayed on the screen.

Update `tab2.page.ts` to look like the following:

```ts
import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  constructor(public photoService: PhotoService) {}

  // CHANGE: Add call to `loadSaved()` when navigating to the Photos tab
  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
```

:::note
If you're seeing broken image links or missing photos after following these steps, you may need to open your browser's dev tools and clear both [localStorage](https://developer.chrome.com/docs/devtools/storage/localstorage) and [IndexedDB](https://developer.chrome.com/docs/devtools/storage/indexeddb).

In localStorage, look for domain `http://localhost:8100` and key `CapacitorStorage.photos`. In IndexedDB, find a store called "FileStorage". Your photos will have a key like `/DATA/123456789012.jpeg`.
:::

That’s it! We’ve built a complete Photo Gallery feature in our Ionic app that works on the web. Next up, we’ll transform it into a mobile app for iOS and Android!
