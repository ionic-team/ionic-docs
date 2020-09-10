---
previousText: 'Prendre une photo'
previousUrl: '/docs/angular/your-first-app/2-saving-photos'
nextText: 'Charger une image dépuis le fichier système'
nextUrl: '/docs/angular/your-first-app/4-loading-photos'
---

# Enregistrement des photos dans le système de fichiers

Nous sommes maintenant en mesure de prendre plusieurs photos et de les afficher dans une galerie de photos dans le deuxième onglet de notre application. Cependant, ces photos ne sont pas stockées de façon permanente, donc lorsque l'application est fermée, elles seront supprimées.

## API du système de fichiers

Heureusement, les enregistrer dans le système de fichiers ne prend que quelques étapes. Commencez par créer une nouvelle méthode de classe, `savePicture()`, in the `PhotoService` class (`src/app/services/photo.service.ts`). Nous passons l'objet `cameraPhoto` , qui représente la photo du nouvel appareil capturé :

```typescript
private async savePicture(cameraPhoto: CameraPhoto) { }
```

Nous pouvons utiliser cette nouvelle méthode immédiatement dans `addNewToGallery()` :

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

Nous utiliserons l'API du système de fichiers [Capacitor](https://capacitor.ionicframework.com/docs/apis/filesystem) pour enregistrer la photo dans le système de fichiers. Pour commencer, convertissez la photo au format base64, puis donnez les données à la fonction `writeFile` du système de fichiers. Comme vous vous en souvenez, nous affichons chaque photo à l'écran en définissant le chemin source de chaque image (`src` attribut) dans `tab2.page.html` à la propriété webviewPath. Donc, réglez-le puis rendez le nouvel objet Photo.

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

`readAsBase64()` est une fonction d'aide que nous allons définir ensuite. Il est utile de s'organiser selon une méthode distincte car elle nécessite une petite quantité d'informations spécifiques à la plate-forme (web vs. mobile) - plus d'informations à ce sujet dans un instant. Pour l'instant, mettez en œuvre la logique de fonctionnement sur le web :

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

Obtenir la photo de l'appareil photo au format base64 sur le web semble un peu plus délicat que sur le mobile. En réalité, nous n'utilisons que des API web intégrées : [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) pour lire le fichier au format blob, puis FileReader's [readAsDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL) pour convertir la photo blob en base64.

There we go! Each time a new photo is taken, it’s now automatically saved to the filesystem.
