---
previousText: 'Créer votre première application mobile'
previousUrl: '/fr/docs/angular/votre-première application'
nextText: 'Charger une image dépuis le fichier système'
nextUrl: '/docs/angular/your-first-app/3-saving-photos'
---

# Prendre une photo avec la caméra

Maintenant pour la partie amusante - ajouter la possibilité de prendre des photos avec l'appareil photo en utilisant le Capacitor [API Caméra](https://capacitor.ionicframework.com/docs/apis/camera). Nous allons commencer par le développer pour le web, puis faire quelques petites améliorations pour le faire fonctionner sur mobile (iOS et Android).

## Service Photo

Toute la logique du condensateur (utilisation de la caméra et autres fonctionnalités natives) sera encapsulée dans une classe de service. Créez ` PhotoService ` à l'aide de la commande ` ionic generate `:

```bash
$ ionic g service services/photo
```

Ouvrez le fichier `services/photo.service.ts` nouvellement créé et ajoutons la logique qui alimentera la fonctionnalité de la caméra. Tout d'abord, importez les dépendances Capacitor et obtenez les références aux plugins Caméra, Système de fichiers et Stockage :

```typescript
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
         CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;
```

Next, define a new class method, `addNewToGallery`, that will contain the core logic to take a device photo and save it to the filesystem. Let’s start by opening the device camera:

```typescript
public async addNewToGallery() {
  // Take a photo
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri, 
    source: CameraSource.Camera, 
    quality: 100 
  });
}
```

Remarquez la magie ici: il n'y a pas de code spécifique à la plateforme (web, iOS, ou Android)! Le plugin Capacitor Camera résume cela pour nous, laissant un seul appel de méthode - `Caméra. getPhoto()` - qui ouvrira la caméra de l'appareil et nous permettra de prendre des photos.

Next, open up `tab2.page.ts` and import the PhotoService class and add a method that calls the `addNewToGallery` method on the imported servce:

```typescript
import { PhotoService } from '../services/photo.service';

constructor(public photoService: PhotoService) { }

addPhotoToGallery() {
  this.photoService.addNewToGallery();
}
```

Then, open `tab2.page.html` and call the `addPhotoToGallery()` function when the FAB is tapped/clicked:

```html
<ion-content>
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button (click)="addPhotoToGallery()">
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

Enregistrez le fichier, et si cela ne fonctionne pas déjà, redémarrez le serveur de développement dans votre navigateur en exécutant `ionic serve`. Dans l’onglet Galerie de photos, cliquez sur le bouton Caméra. Si votre ordinateur possède une webcam de quelque nature que ce soit, une fenêtre modale apparaît. Prendre un selfie!

![L'API des photos sur le web](/docs/assets/img/guides/first-app-cap-ng/camera-web.png)

_(Votre selfie est probablement bien meilleur que le mien)_

Après avoir pris une photo, elle disparaît immédiatement. Nous devons l'afficher dans notre application et l'enregistrer pour un accès futur.

## Affichage des photos

En dehors de la définition de classe `PhotoService` (le tout en bas du fichier), créer une nouvelle interface, `Photo`, pour tenir nos métadonnées photo:

```typescript
export interface Photo {
  filepath: string;
  webviewPath: string;
}
```

De retour en haut du fichier, définissez un tableau de Photos, qui contiendra une référence à chaque photo capturée avec la Caméra.

```typescript
export class PhotoService {
  public photos: Photo[] = [];

  // other code
}
```

Fini dans la fonction `addNewToGallery` , ajoutez la nouvelle photo capturée au début du tableau Photos.

```typescript
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri, 
    source: CameraSource.Camera, 
    quality: 100 
  });

  this.photos.unshift({
    filepath: "soon...",
    webviewPath: capturedPhoto.webPath
  });
}
```

Next, move over to `tab2.page.html` so we can display the image on the screen. Add a [Grid component](https://ionicframework.com/docs/api/grid) so that each photo will display nicely as photos are added to the gallery, and loop through each photo in the `PhotoServices`'s Photos array, adding an Image component (`<ion-img>`) for each. Point the `src` (source) at the photo’s path:

```html
<ion-content>
  <ion-grid>
    <ion-row>
    <ion-col size="6" 
      *ngFor="let photo of photoService.photos; index as position">
        <ion-img [src]="photo.webviewPath"></ion-img>
    </ion-col>
    </ion-row>
  </ion-grid>

  <!-- ion-fab markup  -->
</ion-content>
```

Save all files. Within the web browser, click the Camera button and take another photo. This time, the photo is displayed in the Photo Gallery!

Up next, we’ll add support for saving the photos to the filesystem, so they can be retrieved and displayed in our app at a later time.
