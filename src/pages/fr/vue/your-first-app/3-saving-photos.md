---
previousText: 'Prendre des photos'
previousUrl: '/docs/vue/your-first-app/2-taking-photos'
nextText: 'Chargement des photos sur le système de fichiers'
nextUrl: '/docs/vue/your-first-app/4-loading-photos'
---

# Enregistrement des photos dans le système de fichiers

Nous sommes maintenant en mesure de prendre plusieurs photos et de les afficher dans une galerie de photos dans le deuxième onglet de notre application. Cependant, ces photos ne sont pas stockées de façon permanente, donc lorsque l'application est fermée, elles seront perdues.

## API pour les systèmes de fichiers

Heureusement, les enregistrer dans le système de fichiers ne prend que quelques étapes. Begin by opening the `usePhotoGallery` function (`src/composables/usePhotoGallery.ts`), and extract the `Filesystem` API:

```typescript
const { Camera, Filesystem } = Plugins;
```

Next, create a couple of new functions. The Filesystem API requires that files written to disk are passed in as base64 data, so this helper function will be used in a moment to assist with that:

```typescript
const convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
  const reader = new FileReader;
  reader.onerror = reject;
  reader.onload = () => {
      resolve(reader.result);
  };
  reader.readAsDataURL(blob);
});
```

Next, add a function to save the photo to the filesystem. We pass in the `cameraPhoto` object, which represents the newly captured device photo, as well as the fileName, which will provide a path for the file to be stored to.

Next we use the Capacitor [Filesystem API](https://capacitor.ionicframework.com/docs/apis/filesystem) to save the photo to the filesystem. We start by converting the photo to base64 format, then feed the data to the Filesystem’s `writeFile` function:

```typescript
const savePicture = async (photo: CameraPhoto, fileName: string): Promise<Photo> => {
  let base64Data: string;

  // Fetch the photo, read as a blob, then convert to base64 format
  const response = await fetch(photo.webPath!);
  const blob = await response.blob();
  base64Data = await convertBlobToBase64(blob) as string;

  const savedFile = await Filesystem.writeFile({
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
}
```

Last, update the `takePhoto` function to call `savePicture`. Once the photo has been saved, insert it into the front of reactive `photos` array:

```typescript
const takePhoto = async () => {
  const cameraPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100
  });

  const fileName = new Date().getTime() + '.jpeg';
  const savedFileImage = await savePicture(cameraPhoto, fileName);

  photos.value = [savedFileImage, ...photos.value];
};
```

There we go! Each time a new photo is taken, it’s now automatically saved to the filesystem.
