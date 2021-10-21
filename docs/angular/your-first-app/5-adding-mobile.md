---
strip_number_prefixes: false
---

# Adding Mobile

Our photo gallery app won’t be complete until it runs on iOS, Android, and the web - all using one codebase. All it takes is some small logic changes to support mobile platforms, installing some native tooling, then running the app on a device. Let’s go!

## Import Platform API

Let’s start with making some small code changes - then our app will “just work” when we deploy it to a device.

Import the Ionic [Platform API](https://ionicframework.com/docs/angular/platform) into `photo.service.ts`, which is used to retrieve information about the current device. In this case, it’s useful for selecting which code to execute based on the platform the app is running on (web or mobile):

```tsx
import { Platform } from '@ionic/angular';

export class PhotoService {
  public photos: UserPhoto[] = [];
  private PHOTO_STORAGE: string = 'photos';
  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform;
  }

  // other code
}
```

## Platform-specific Logic

First, we’ll update the photo saving functionality to support mobile. In the `readAsBase64()` function, check which platform the app is running on. If it’s “hybrid” (Capacitor or Cordova, two native runtimes), then read the photo file into base64 format using the Filesystem `readFile()` method. Otherwise, use the same logic as before when running the app on the web:

```tsx
private async readAsBase64(photo: Photo) {
  // "hybrid" will detect Cordova or Capacitor
  if (this.platform.is('hybrid')) {
    // Read the file into base64 format
    const file = await Filesystem.readFile({
      path: photo.path
    });

    return file.data;
  }
  else {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }
}
```

Next, update the `savePicture()` method. When running on mobile, set `filepath` to the result of the `writeFile()` operation - `savedFile.uri`. When setting the `webviewPath`, use the special `Capacitor.convertFileSrc()` method ([details here](https://ionicframework.com/docs/core-concepts/webview#file-protocol)).

```tsx
// Save picture to file on device
  private async savePicture(photo: Photo) {
    // Convert photo to base64 format, required by Filesystem API to save
    const base64Data = await this.readAsBase64(photo);

    // Write the file to the data directory
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    if (this.platform.is('hybrid')) {
      // Display the new image by rewriting the 'file://' path to HTTP
      // Details: https://ionicframework.com/docs/building/webview#file-protocol
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    }
    else {
      // Use webPath to display the new image instead of base64 since it's
      // already loaded into memory
      return {
        filepath: fileName,
        webviewPath: photo.webPath
      };
    }
  }
```

Next, head back over to the `loadSaved()` function we implemented for the web earlier. On mobile, we can directly set the source of an image tag - `<img src="x" />` - to each photo file on the Filesystem, displaying them automatically. Thus, only the web requires reading each image from the Filesystem into base64 format. Update this function to add an _if statement_ around the Filesystem code:

```tsx
public async loadSaved() {
  // Retrieve cached photo array data
  const photoList = await Storage.get({ key: this.PHOTO_STORAGE });
  this.photos = JSON.parse(photoList.value) || [];

  // Easiest way to detect when running on the web:
  // “when the platform is NOT hybrid, do this”
  if (!this.platform.is('hybrid')) {
    // Display the photo by reading into base64 format
    for (let photo of this.photos) {
      // Read each saved photo's data from the Filesystem
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

Our Photo Gallery now consists of one codebase that runs on the web, Android, and iOS. Next up, the part you’ve been waiting for - deploying the app to a device.
