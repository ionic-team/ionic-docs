---
previousText: 'Taking Photos'
previousUrl: '/docs/angular/your-first-app/2-taking-photos'
nextText: 'Loading Photos on Filesystem'
nextUrl: '/docs/angular/your-first-app/4-loading-photos'
---

# Enregistrement des photos dans le système de fichiers

Nous sommes maintenant en mesure de prendre plusieurs photos et de les afficher dans une galerie de photos dans le deuxième onglet de notre application. Cependant, ces photos ne sont pas stockées de façon permanente, donc lorsque l'application est fermée, elles seront supprimées.

## API du système de fichiers

Heureusement, les enregistrer dans le système de fichiers ne prend que quelques étapes. Commencez par créer une nouvelle fonction, `savePicture()`, dans la classe `PhotoService` (`src/app/services/photo.service.ts`). Nous passons l'objet `cameraPhoto` , qui représente la photo du nouvel appareil capturé :

```typescript
private async savePicture(cameraPhoto: CameraPhoto) { }
```

Nous pouvons utiliser cette nouvelle fonction immédiatement dans ` addNewToGallery () `:

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

Nous utiliserons l'API du système de fichiers [Capacitor](https://capacitor.ionicframework.com/docs/apis/filesystem) pour enregistrer la photo dans le système de fichiers. Pour commencer, convertissez la photo au format base64, puis donnez les données à la fonction `writeFile` du système de fichiers. Enfin, faites un appel à getPhotoFile (que nous allons implémenter dans un moment), qui renvoie un objet Photo.

```typescript
private async savePicture(cameraPhoto: CameraPhoto) {
  // Convert photo to base64 format, required by Filesystem API to save
  const base64Data = await this.readAsBase64(cameraPhoto);

  // Write the file to the data directory
  const fileName = new Date().getTime() + '.jpeg';
  await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: FilesystemDirectory.Data
  });

  // Get platform-specific photo filepaths
  return await this.getPhotoFile(cameraPhoto, fileName);
}
```

`readAsBase64()` et `getPhotoFile()` sont deux fonctions auxiliaires que nous allons définir ensuite. Ils sont divisés en méthodes séparées car ils nécessitent une petite quantité de plates-formes spécifiques (web vs. mobile) logique - plus sur cela dans un peu.  Pour l'instant, implémentez-les pour fonctionner sur le web:

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

`getPhotoFile()` est beaucoup plus simple. Comme vous vous en souviendrez, nous affichons chaque photo à l’écran en définissant le chemin source de chaque image ( attribut`src` ) dans l’onglet `. age.html` à la propriété webviewPath. Il est donc défini ici :

```typescript
private async getPhotoFile(cameraPhoto: CameraPhoto, 
                           fileName: string): Promise<Photo> {
  return {
    filepath: fileName,
    webviewPath: cameraPhoto.webPath
  };
}
```

Enfin, changez la façon dont les images deviennent visibles dans le fichier de template `tab2.page.html`.
```html
<ion-img src="{{ photo.base64 ? photo.base64 : photo.webviewPath }}"></ion-img>
```

Nous y sommes ! Chaque fois qu'une nouvelle photo est prise, elle est maintenant automatiquement enregistrée dans le système de fichiers.
