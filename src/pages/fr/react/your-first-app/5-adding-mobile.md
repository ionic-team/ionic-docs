---
previousText: 'Loading Photos on Filesystem'
previousUrl: '/docs/react/your-first-app/4-loading-photos'
nextText: 'Deploying Mobile'
nextUrl: '/docs/react/your-first-app/6-deploying-mobile'
---

# Adding Mobile

Our photo gallery app won’t be complete until it runs on iOS, Android, and the web - all using one codebase. All it takes is some small logic changes to support mobile platforms, installing some native tooling, then running the app on a device. Let’s go!

Let’s start with making some small code changes - then our app will “just work” when we deploy it to a device.

## Platform-specific Logic

First, we’ll update the photo saving functionality to support mobile. In the `savePicture` function, check which platform the app is running on. If it’s “hybrid” (Capacitor or Cordova, the two native runtimes), then read the photo file into base64 format using the `readFile` method. Otherwise, use the same logic as before when running the app on the web:

```typescript
const savePicture = async (photo: CameraPhoto, fileName: string) => {
  let base64Data: string;
  // "hybrid" will detect Cordova or Capacitor;
  if (isPlatform('hybrid')) {
    const file = await readFile({
      path: photo.path!
    });
    base64Data = file.data;
  } else {
    base64Data = await base64FromPath(photo.webPath!);
  }
  await writeFile({
    path: fileName,
    data: base64Data,
    directory: FilesystemDirectory.Data
  });
  return getPhotoFile(photo, fileName);
};
```

Next, update the `getPhotoFile` method. When running on mobile, return the complete file path to the photo using the Filesystem API. When setting the `webviewPath`, use the special `Capacitor.convertFileSrc` method ([details here](https://ionicframework.com/docs/building/webview#file-protocol)). Replace the existing `getPhotoFile` function with:

```typescript
const getPhotoFile = async (cameraPhoto: CameraPhoto, fileName: string): Promise<Photo> => {
  if (isPlatform('hybrid')) {
    // Get the new, complete filepath of the photo saved on filesystem
    const fileUri = await getUri({
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
};
```

Next, add a new bit of logic in the `loadSaved` function. On mobile, we can directly point to each photo file on the Filesystem and display them automatically. On the web, however, we must read each image from the Filesystem into base64 format, using a new `base64` property on the `Photo` object. This is because the Filesystem API uses [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) under the hood. Update the `loadSaved` function inside of `useEffect` to:

```typescript
const loadSaved = async () => {
  const photosString = await get('photos');
  const photosInStorage = (photosString ? JSON.parse(photosString) : []) as Photo[];
  // If running on the web...
  if (!isPlatform('hybrid')) {
    for (let photo of photosInStorage) {
      const file = await readFile({
        path: photo.filepath,
        directory: FilesystemDirectory.Data
      });
      // Web platform only: Save the photo into the base64 field
      photo.base64 = `data:image/jpeg;base64,${file.data}`;
    }
  }
  setPhotos(photosInStorage);
};
```

At the bottom of the `takePhoto` function, update the Storage API `set` logic. If running on the web, there’s a slight optimization we can add. Even though we must read the photo data in base64 format in order to display it, there’s no need to save in that form, since it’s already saved on the Filesystem. Update the call to `set` to the following:

```typescript
set(PHOTO_STORAGE,
  isPlatform('hybrid')
    ? JSON.stringify(newPhotos)
    : JSON.stringify(newPhotos.map(p => {
      // Don't save the base64 representation of the photo data, 
      // since it's already saved on the Filesystem
      const photoCopy = { ...p };
      delete photoCopy.base64;
      return photoCopy;
    })));
```

Our Photo Gallery now consists of one codebase that runs on the web, Android, and iOS. Next up, the part you’ve been waiting for - deploying the app to a device.
