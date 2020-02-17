---
previousText: 'Votre première application'
previousUrl: '/docs/angular/your-first-app'
nextText: 'Sauvegarde des photos sur le système de fichiers'
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

Ensuite, définissez une nouvelle fonction, `addNewToGallery`, qui contiendra la logique de base pour prendre une photo du périphérique et l'enregistrer dans le système de fichiers. Let’s start by opening the device camera:

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

Ensuite, ouvrez `tab2.page.ts` et importez la classe PhotoService :

```typescript
import { PhotoService } from '../services/photo.service';

constructor(public photoService: PhotoService) { }
```

Ensuite, ouvrez `tab2.page.html` et appelez la fonction `addNewToGallery()` lorsque le FAB est cliqué ou cliqué :

```html
<ion-content>
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button (click)="photoService.addNewToGallery()">
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

Enregistrez le fichier, et si cela ne fonctionne pas déjà, redémarrez le serveur de développement dans votre navigateur en exécutant `ionic serve`. Dans l’onglet Galerie de photos, cliquez sur le bouton Caméra. Si votre ordinateur possède une webcam de quelque nature que ce soit, une fenêtre modale apparaît. Prendre un selfie!

![API de l'appareil photo sur le web](/docs/assets/img/guides/first-app-cap-ng/camera-web.png)

_(Votre selfie est probablement bien meilleur que le mien)_

Après avoir pris une photo, elle disparaît immédiatement. Nous devons l'afficher dans notre application et l'enregistrer pour un accès futur.

## Affichage des photos

En dehors de la définition de classe `PhotoService` (le tout en bas du fichier), créer une nouvelle interface, `Photo`, pour tenir nos métadonnées photo:

```typescript
interface Photo {
  filepath: string;
  webviewPath: string;
  base64?: string;
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

With the photo(s) stored into the main array, move over to `tab2.page.html` so we can display the image on the screen. Ajouter un composant de la grille [](https://ionicframework.com/docs/api/grid) pour que chaque photo s'affiche bien lorsque des photos sont ajoutées à la galerie, et boucler chaque photo dans le tableau Photos, en ajoutant un composant Image (`<ion-img>`) pour chacune. Pointez le `src` (source) sur le chemin de la photo :

```html
<ion-content>
  <ion-grid>
    <ion-row>
    <ion-col size="6" 
      *ngFor="let photo of photoService.photos; index as position">
        <ion-img src="{{ photo.webviewPath }}"></ion-img>
    </ion-col>
    </ion-row>
  </ion-grid>

  <!-- ion-fab markup  -->
</ion-content>
```

Enregistrer tous les fichiers. Dans le navigateur Web, cliquez sur le bouton Caméra et prenez une autre photo. Cette fois-ci, la photo est affichée dans la Galerie de photos !

Ensuite, nous ajouterons la prise en charge de l'enregistrement des photos dans le système de fichiers, pour qu'ils puissent être récupérés et affichés ultérieurement dans notre application.
