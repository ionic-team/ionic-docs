---
previousText: 'Taking Photos'
previousUrl: '/docs/react/your-first-app/2-taking-photos'
nextText: 'Loading Photos on Filesystem'
nextUrl: '/docs/react/your-first-app/4-loading-photos'
---

# Saving Photos to the Filesystem

We’re now able to take multiple photos and display them in a photo gallery on the second tab of our app. These photos, however, are not currently being stored permanently, so when the app is closed, they will be lost.

## Filesystem API

Fortunately, saving them to the filesystem only takes a few steps. Begin by opening the `usePhotoGallery` hook (`src/hooks/usePhotoGallery.ts`), and get access to the `writeFile` method from the `useFileSystem` hook:

```typescript
const { deleteFile, getUri, readFile, writeFile } = useFilesystem();
```

> We will use the `writeFile` method initially, but we will use the others coming up shortly, so we'll go ahead and import them now.

Next, create a couple of new functions in `usePhotoGallery`:

```typescript
const savePicture = async (photo: CameraPhoto, fileName: string): Promise<Photo> => {
  const base64Data = await base64FromPath(photo.webPath!);
  const savedFile = await writeFile({
    path: fileName,
    data: base64Data,
    directory: FilesystemDirectory.Data
  });

  // Use webPath to display the new image instead of base64 since it's
  // already loaded into memory
  return {
    filepath: fileName,
    webviewPath: photo.webPath
  };
};
```

> The base64FromPath method is a helper util imported from "@ionic/react-hooks/filesystem". It downloads a file from the supplied path and returns a base64 representation of that file.

We pass in the `cameraPhoto` object, which represents the newly captured device photo, as well as the fileName, which will provide a path for the file to be stored to.

Next we use the Capacitor [Filesystem API](https://capacitor.ionicframework.com/docs/apis/filesystem) to save the photo to the filesystem. We start by converting the photo to base64 format, then feed the data to the Filesystem’s `writeFile` function.

Last, call `savePicture` and pass in the cameraPhoto object and filename directly underneath the call to `setPhotos` in the `takePhoto` method. Here is the full method:

```typescript
const takePhoto = async () => {
  const cameraPhoto = await getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100
  });

  const fileName = new Date().getTime() + '.jpeg';
  const savedFileImage = await savePicture(cameraPhoto, fileName);
  const newPhotos = [savedFileImage, ...photos];
  setPhotos(newPhotos);
};
```

There we go! Each time a new photo is taken, it’s now automatically saved to the filesystem.
