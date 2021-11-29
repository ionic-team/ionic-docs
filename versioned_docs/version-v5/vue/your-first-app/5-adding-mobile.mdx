# Adding Mobile

Our photo gallery app won’t be complete until it runs on iOS, Android, and the web - all using one codebase. All it takes is some small logic changes to support mobile platforms, installing some native tooling, then running the app on a device. Let’s go!

Let’s start with making some small code changes - then our app will "just work" when we deploy it to a device.

## Platform-specific Logic

First, we’ll update the photo saving functionality to support mobile. We'll run slightly different code depending on the platform - mobile or web. Import the `Platform` API from Ionic Vue:

```tsx
import { isPlatform } from '@ionic/vue';
```

In the `savePicture` function, check which platform the app is running on. If it’s "hybrid" (Capacitor, the native runtime), then read the photo file into base64 format using the `readFile` method. Also, return the complete file path to the photo using the Filesystem API. When setting the `webviewPath`, use the special `Capacitor.convertFileSrc` method ([details here](https://capacitorjs.com/docs/basics/utilities#convertfilesrc)). Otherwise, use the same logic as before when running the app on the web.

```tsx
const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
  let base64Data: string;
  // "hybrid" will detect mobile - iOS or Android
  if (isPlatform('hybrid')) {
    const file = await Filesystem.readFile({
      path: photo.path!,
    });
    base64Data = file.data;
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
    // Details: https://ionicframework.com/docs/building/webview#file-protocol
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

Next, add a new bit of logic in the `loadSaved` function. On mobile, we can directly point to each photo file on the Filesystem and display them automatically. On the web, however, we must read each image from the Filesystem into base64 format. This is because the Filesystem API uses [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) under the hood. Update the `loadSaved` function:

```tsx
const loadSaved = async () => {
  const photoList = await Storage.get({ key: PHOTO_STORAGE });
  const photosInStorage = photoList.value ? JSON.parse(photoList.value) : [];

  // If running on the web...
  if (!isPlatform('hybrid')) {
    for (const photo of photosInStorage) {
      const file = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });
      // Web platform only: Load the photo as base64 data
      photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
    }
  }

  photos.value = photosInStorage;
};
```

Our Photo Gallery now consists of one codebase that runs on the web, Android, and iOS. Next up, the part you’ve been waiting for - deploying the app to a device.
