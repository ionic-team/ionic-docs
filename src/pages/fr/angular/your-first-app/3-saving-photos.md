---
previousText: 'Taking Photos'
previousUrl: '/docs/angular/your-first-app/2-taking-photos'
nextText: 'Loading Photos on Filesystem'
nextUrl: '/docs/angular/your-first-app/4-loading-photos'
---

# Enregistrement des photos dans le système de fichiers

Nous sommes maintenant en mesure de prendre plusieurs photos et de les afficher dans une galerie de photos dans le deuxième onglet de notre application. Cependant, ces photos ne sont pas stockées de façon permanente, donc lorsque l'application est fermée, elles seront supprimées.

## API du système de fichiers

Heureusement, les enregistrer dans le système de fichiers ne prend que quelques étapes. Begin by creating a new class method, `savePicture()`, in the `PhotoService` class (`src/app/services/photo.service.ts`). Nous passons l'objet `cameraPhoto` , qui représente la photo du nouvel appareil capturé :

```typescript
private async savePicture(cameraPhoto: CameraPhoto) { }
```

We can use this new method immediately in `addNewToGallery()`:

```typescript
public async addNewToGallery() {
  // Take a photo
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri, // file-based data; provides best performance
    source: CameraSource.Camera, // automatically take a new photo with the camera
    quality: 100 // highest quality (0 to 100)
  });

  // Save the picture and add it to photo collection
  const savedImageFile = await this.savePicture(capturedPhoto);
  this.photos.unshift(savedImageFile);
}
```

Nous utiliserons l'API du système de fichiers [Capacitor](https://capacitor.ionicframework.com/docs/apis/filesystem) pour enregistrer la photo dans le système de fichiers. Pour commencer, convertissez la photo au format base64, puis donnez les données à la fonction `writeFile` du système de fichiers. As you’ll recall, we display each photo on the screen by setting each image’s source path (`src` attribute) in `tab2.page.html` to the webviewPath property. So, set it then return the new Photo object.

```typescript
private async savePicture(cameraPhoto: CameraPhoto) {
  // Convert photo to base64 format, required by Filesystem API to save
  const base64Data = await this.readAsBase64(cameraPhoto);

  // Write the file to the data directory
  const fileName = new Date().getTime() + '.jpeg';
  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: FilesystemDirectory.Data
  });

  // Use webPath to display the new image instead of base64 since it's
  // already loaded into memory
  return {
    filepath: fileName,
    webviewPath: cameraPhoto.webPath
  };
}
```

`readAsBase64()` is a helper function we’ll define next. It's useful to organize via a separate method since it requires a small amount of platform-specific (web vs. mobile) logique - plus sur cela dans un peu. For now, implement the logic for running on the web:

```typescript
private async readAsBase64(cameraPhoto: CameraPhoto) {
  // Fetch the photo, read as a blob, then convert to base64 format
  const response = await fetch(cameraPhoto.webPath!);
  const blob = await response.blob();

  return await this.convertBlobToBase64(blob) as string;  
}

convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
  const reader = new FileReader;
  reader.onerror = reject;
  reader.onload = () => {
      resolve(reader.result);
  };
  reader.readAsDataURL(blob);
});
```

Obtenir la photo de l'appareil au format base64 sur le web semble être un peu plus difficile que sur mobile. En réalité, nous utilisons simplement des API Web intégrées: [ fetch () ](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) comme une bonne façon de lire le fichier au format blob, puis [ readAsDataURL () ](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL) de FileReader pour convertir le blob photo en base64.

Finally, change the way pictures become visible in the template file `tab2.page.html`.

```html
<ion-img src="{{ photo.base64 ? photo.base64 : photo.webviewPath }}"></ion-img>
```

There we go! Each time a new photo is taken, it’s now automatically saved to the filesystem.
