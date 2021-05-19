---
previousText: 'Charger une image dépuis le fichier système'
previousUrl: '/docs/angular/your-first-app/4-loading-photos'
nextText: 'Déployer le Mobile'
nextUrl: '/docs/angular/your-first-app/6-deploying-mobile'
---

# Ajout du mobile

Notre application de galerie de photos ne sera pas complète tant qu'elle ne fonctionnera pas sur iOS, Android et le web - le tout en utilisant une base de code. Il suffit de quelques petits changements de logique pour prendre en charge les plates-formes mobiles, installer quelques outils natifs, puis exécuter l'application sur un appareil. C’est parti

## Importer l'API Plateforme

Commençons par faire quelques petites modifications de code - alors notre application « fonctionnera simplement » lorsque nous la déployerons sur un appareil.

Importez l'API [Plateforme Ionic](https://ionicframework.com/docs/angular/platform) dans `photo.service.ts`, qui est utilisé pour récupérer des informations sur l'appareil actuel. Dans ce cas, il est utile de sélectionner le code à exécuter en fonction de la plateforme sur laquelle l'application est en cours d'exécution (web ou mobile) :

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

## Logique spécifique à la plateforme

Tout d’abord, nous mettrons à jour la fonctionnalité d’enregistrement de photos pour prendre en charge le mobile. Dans la fonction `readAsBase64()` , vérifiez la plate-forme sur laquelle l'application s'exécute. Si c'est « hybride » (Capacitor ou Cordova, deux exécutions natives), alors lisez le fichier photo au format base64 en utilisant la méthode du système de fichiers `readFile()`. Sinon, utilisez la même logique qu'avant lors de l'exécution de l'application sur le web:

```typescript
private async readAsBase64(cameraPhoto: CameraPhoto) {
  // "hybrid" détectera Cordova ou Capacitor
  if (this.platform.is('hybrid')) {
    // Lire le fichier au format base64
    const file = await Filesystem.readFile({
      path: cameraPhoto.path
    });

    return file.data;
  }
  else {
    // Récupérer la photo, la lire comme un blob, puis la convertir au format base64.
    const response = await fetch(cameraPhoto.webPath);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }
}
```

Ensuite, mettez à jour la méthode `savePicture()`. Lors de l'exécution sur mobile, définissez `filepath` au résultat de l'opération `writeFile()` - `savedFile.uri`. Lors de la configuration du `webviewPath`, utilisez la méthode spéciale `Capacitor.convertFileSrc()` ([détails ici](https://ionicframework.com/docs/core-concepts/webview#file-protocol)).

```typescript
// Save picture to file on device
  private async savePicture(cameraPhoto: CameraPhoto) {
    // Convert photo to base64 format, required by Filesystem API to save
    const base64Data = await this.readAsBase64(cameraPhoto);

    // Write the file to the data directory
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    if (this.platform.is('hybrid')) {
      // Display the new image by rewriting the 'file://' path to HTTP
      // Details: https://ionicframework.com/docs/building/webview#file-protocol
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
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

Ensuite, retournez à la fonction `loadSaved()` que nous avons implémentée pour le web plus tôt. Sur mobile, nous pouvons directement définir la source d'une balise image - `<img src="x" />` - à chaque fichier photo du Filesystem, les affichant automatiquement. Ainsi, seul le web nécessite de lire chaque image du système de fichiers au format base64. Mettre à jour cette fonction pour ajouter une instruction _if_ autour du code du système de fichiers :

```typescript
public async loadSaved() {
  // Retrieve cached photo array data
  const photoList = await Storage.get({ key: this.PHOTO_STORAGE });
  this.photos = JSON.parse(photoList.value) || [];

  // Easiest way to detect when running on the web:
  // “when the platform is NOT hybrid, do this”
  if (!this.platform.is('hybrid')) {
    // Display the photo by reading into base64 format
    for (let photo of this.photos) {
      // Read each saved photo's data from the Filesystem
      const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data
      });

      // Web platform only: Load the photo as base64 data
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }
}
```

Notre galerie de photos est désormais constituée d'une seule base de code qui fonctionne sur le web, Android et iOS. Ensuite, la partie que vous attendiez - le déploiement de l'application sur un appareil.
