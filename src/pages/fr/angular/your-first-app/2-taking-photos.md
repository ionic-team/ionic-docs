---
previousText: 'Votre première application'
previousUrl: '/docs/angular/your-first-app'
nextText: 'Sauvegarde des photos sur le système de fichiers'
nextUrl: '/docs/angular/your-first-app/3-saving-photos'
---

# Prendre une photo avec la caméra

Maintenant pour la partie amusante - ajouter la possibilité de prendre des photos avec l'appareil photo en utilisant le Capacitor [API Caméra](https://capacitor.ionicframework.com/docs/apis/camera). Nous allons commencer par le développer pour le web, puis faire quelques petites améliorations pour le faire fonctionner sur mobile (iOS et Android).

Toute la logique du Capacitor sera encapsulée dans une classe de service. Créez `PhotoService` en utilisant la commande `ionic generate`:

```bash
$ ionic g service services/photo
```

Ouvrez le fichier `services/photo.service.ts` nouvellement créé et ajoutons la logique qui alimentera la fonctionnalité de la caméra. First, import Capacitor dependencies and get references to the Camera, Filesystem, and Storage plugins:

```typescript
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
         CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;
```

Next, define a new function, `addNewToGallery`, that will contain the core logic to take a device photo and save it to the filesystem. Let’s start by opening the device camera:

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

Notice the magic here: there's no platform-specific code (web, iOS, or Android)! The Capacitor Camera plugin abstracts that away for us, leaving just one method call - `Camera.getPhoto()` - that will open up the device's camera and allow us to take photos.

Save the file, and if it's not running already, restart the development server in your browser by running `ionic serve`. On the Photo Gallery tab, click the Camera button. If your computer has a webcam of any sort, a modal window appears. Take a selfie!

![Camera API on the web](/docs/assets/img/guides/first-app-cap-ng/camera-web.png)

_(Your selfie is probably much better than mine)_

After taking a photo, it disappears right away. We need to display it within our app and save it for future access.

## Displaying Photos

Outside of the `PhotoService` class definition (the very bottom of the file), create a new interface, `Photo`, to hold our photo metadata:

```typescript
interface Photo {
  filepath: string;
  webviewPath: string;
  base64?: string;
}
```

Back at the top of the file, define an array of Photos, which will contain a reference to each photo captured with the Camera.

```typescript
export class PhotoService {
  public photos: Photo[] = [];

  // other code
}
```

Over in the `addNewToGallery` function, add the newly captured photo to the beginning of the Photos array.

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

With the photo(s) stored into the main array, move over to `tab2.page.html` so we can display the image on the screen. Add a [Grid component](https://ionicframework.com/docs/api/grid) so that each photo will display nicely as photos are added to the gallery, and loop through each photo in the Photos array, adding an Image component (`<ion-img>`) for each. Point the `src` (source) at the photo’s path:

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

   <!-- <ion-fab> markup  -->
</ion-content>
```

Save all files. Within the web browser, click the Camera button and take another photo. This time, the photo is displayed in the Photo Gallery!

Up next, we’ll add support for saving the photos to the filesystem, so they can be retrieved and displayed in our app at a later time.