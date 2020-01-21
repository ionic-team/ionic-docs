---
previousText: 'Loading Photos on Filesystem'
previousUrl: '/docs/angular/your-first-app/4-loading-photos'
nextText: 'Deploying Mobile'
nextUrl: '/docs/angular/your-first-app/6-deploying-mobile'
---

# Adding Mobile

Our photo gallery app won’t be complete until it runs on iOS, Android, and the web - all using one codebase. All it takes is some small logic changes to support mobile platforms, installing some native tooling, then running the app on a device. Let’s go!

## Import Platform API

Let’s start with making some small code changes - then our app will “just work” when we deploy it to a device.

Import the Ionic [Platform API](https://ionicframework.com/docs/angular/platform) into `photo.service.ts`, which is used to retrieve information about the current device. In this case, it’s useful for selecting which code to execute based on the platform the app is running on (web or mobile):

```typescript
import { Platform } from '@ionic/angular';

export class PhotoService {
  public photos: Photo[] = [];
  private PHOTO_STORAGE: string = "photos";
  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform;
  }

  // other code
}
```

## Platform-specific Logic

First, we’ll update the photo saving functionality to support mobile. In the `readAsBase64()` function, check which platform the app is running on. If it’s “hybrid” (Capacitor or Cordova, two native runtimes), then read the photo file into base64 format using the Filesystem `readFile()` method. Otherwise, use the same logic as before when running the app on the web:

```typescript
private async readAsBase64(cameraPhoto: CameraPhoto) {
  // "hybrid" will detect Cordova or Capacitor
  if (this.platform.is('hybrid')) {
    // Read the file into base64 format
    const file = await Filesystem.readFile({
      path: cameraPhoto.path
    });

    return file.data;
  }
  else {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(cameraPhoto.webPath);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;  
  }
}
```

Next, update the `getPhotoFile()` method. When running on mobile, return the complete file path to the photo using the Filesystem API. When setting the `webviewPath`, use the special `Capacitor.convertFileSrc()` method ([details here](https://ionicframework.com/docs/building/webview#file-protocol)).

```typescript
private async getPhotoFile(cameraPhoto, fileName) {
  if (this.platform.is('hybrid')) {
    // Get the new, complete filepath of the photo saved on filesystem
    const fileUri = await Filesystem.getUri({
      directory: FilesystemDirectory.Data,
      path: fileName
    });

    // Display the new image by rewriting the 'file://' path to HTTP
    // Details: https://ionicframework.com/docs/building/webview#file-protocol
    return {
      filepath: fileUri.uri,
      webviewPath: Capacitor.convertFileSrc(fileUri.uri),
    };
  }
  else {
    // Use webPath to display the new image instead of base64 since it's 
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: cameraPhoto.webPath
    };
  }
}
```

Next, head back over to the `loadSaved()` function we implemented for the web earlier. On mobile, we can directly set the source of an image tag - `<img src=”x” />` - to each photo file on the Filesystem, displaying them automatically. Thus, only the web requires reading each image from the Filesystem into base64 format. Update this function to add an _if statement_ around the Filesystem code:

```typescript
public async loadSaved() {
  // Retrieve cached photo array data
  const photos = await Storage.get({ key: this.PHOTO_STORAGE });
  this.photos = JSON.parse(photos.value) || [];

  // Easiest way to detect when running on the web: 
  // “when the platform is NOT hybrid, do this”
  if (!this.platform.is('hybrid')) {
    // Display the photo by reading into base64 format
    for (let photo of this.photos) {
      // Read each saved photo's data from the Filesystem
      const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: FilesystemDirectory.Data
      });

      // Web platform only: Save the photo into the base64 field
      photo.base64 = `data:image/jpeg;base64,${readFile.data}`;
    }
  }
}
```

At the bottom of the `addNewtoGallery()` function, update the Storage API logic. If running on the web, there’s a slight optimization we can add. Even though we must read the photo data in base64 format in order to display it, there’s no need to save in that form, since it’s already saved on the Filesystem:

```typescript
Storage.set({
  key: this.PHOTO_STORAGE,
  value: this.platform.is('hybrid')
          ? JSON.stringify(this.photos)  
          : JSON.stringify(this.photos.map(p => {
            // Don't save the base64 representation of the photo data, 
            // since it's already saved on the Filesystem
            const photoCopy = { ...p };
            delete photoCopy.base64;

            return photoCopy;
        }))
```

Finally, a small change to `tab2.page.html` is required to support both web and mobile. If running the app on the web, the `base64` property will contain the photo data to display. If on mobile, the `webviewPath` will be used:

```html
<ion-col size="6" 
    *ngFor="let photo of photoService.photos; index as position">
  <ion-img src="{{ photo.base64 ? photo.base64 : photo.webviewPath }}">
  </ion-img>
</ion-col>
```

Our Photo Gallery now consists of one codebase that runs on the web, Android, and iOS. Next up, the part you’ve been waiting for - deploying the app to a device.