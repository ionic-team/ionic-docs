---
sidebar_label: Saving Photos
---

# Saving Photos to the Filesystem

We’re now able to take multiple photos and display them in a photo gallery on the second tab of our app. These photos, however, are not currently being stored permanently, so when the app is closed, they will be lost.

## Filesystem API

Fortunately, saving them to the filesystem only takes a few steps. Begin by opening the `usePhotoGallery` hook (`src/hooks/usePhotoGallery.ts`), and get access to the `writeFile` method from the `Filesystem` class:

:::note
We will use the `writeFile` method initially, but we will use the others coming up shortly, so we'll go ahead and import them now.
:::

Next, create a couple of new functions in `usePhotoGallery`:

```tsx
export function usePhotoGallery() {
  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    const base64Data = await base64FromPath(photo.webPath!);
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
}

export async function base64FromPath(path: string): Promise<string> {
  const response = await fetch(path);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject('method did not return a string');
      }
    };
    reader.readAsDataURL(blob);
  });
}
```

:::note
The base64FromPath method is a helper util that downloads a file from the supplied path and returns a base64 representation of that file.
:::

We pass in the `photo` object, which represents the newly captured device photo, as well as the fileName, which will provide a path for the file to be stored to.

Next we use the Capacitor [Filesystem API](https://capacitor.ionicframework.com/docs/apis/filesystem) to save the photo to the filesystem. We start by converting the photo to base64 format, then feed the data to the Filesystem’s `writeFile` function.

Last, call `savePicture` and pass in the photo object and filename directly underneath the call to `setPhotos` in the `takePhoto` method. Here is the full method:

```tsx
const takePhoto = async () => {
  const photo = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100,
  });

  const fileName = new Date().getTime() + '.jpeg';
  const savedFileImage = await savePicture(photo, fileName);
  const newPhotos = [savedFileImage, ...photos];
  setPhotos(newPhotos);
};
```

There we go! Each time a new photo is taken, it’s now automatically saved to the filesystem.
