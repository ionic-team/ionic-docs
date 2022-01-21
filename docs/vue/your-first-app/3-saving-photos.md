---
sidebar_label: Saving Photos
---

# Saving Photos to the Filesystem

We’re now able to take multiple photos and display them in a photo gallery on the second tab of our app. These photos, however, are not currently being stored permanently, so when the app is closed, they will be lost.

## Filesystem API

Fortunately, saving them to the filesystem only takes a few steps. Begin by opening the `usePhotoGallery` function (`src/composables/usePhotoGallery.ts`), and get access to the `writeFile` method from the `Filesystem` class:

Next, create a couple of new functions. The Filesystem API requires that files written to disk are passed in as base64 data, so this helper function will be used in a moment to assist with that:

```tsx
const convertBlobToBase64 = (blob: Blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
```

Next, add a function to save the photo to the filesystem. We pass in the `photo` object, which represents the newly captured device photo, as well as the fileName, which will provide a path for the file to be stored to.

Next we use the Capacitor [Filesystem API](https://capacitor.ionicframework.com/docs/apis/filesystem) to save the photo to the filesystem. We start by converting the photo to base64 format, then feed the data to the Filesystem’s `writeFile` function:

```tsx
const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
  let base64Data: string;

  // Fetch the photo, read as a blob, then convert to base64 format
  const response = await fetch(photo.webPath!);
  const blob = await response.blob();
  base64Data = (await convertBlobToBase64(blob)) as string;

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
```

Last, update the `takePhoto` function to call `savePicture`. Once the photo has been saved, insert it into the front of reactive `photos` array:

```tsx
const takePhoto = async () => {
  const photo = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100,
  });

  const fileName = new Date().getTime() + '.jpeg';
  const savedFileImage = await savePicture(photo, fileName);

  photos.value = [savedFileImage, ...photos.value];
};
```

There we go! Each time a new photo is taken, it’s now automatically saved to the filesystem.
