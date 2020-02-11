---
previousText: 'Tu primera Aplicación'
previousUrl: '/docs/angular/your-first-app'
nextText: 'Guardando fotos en el sistema de archivos'
nextUrl: '/docs/angular/your-first-app/3-saving-photos'
---

# Capturando fotos con la cámara

Now for the fun part - adding the ability to take photos with the device’s camera using the Capacitor [Camera API](https://capacitor.ionicframework.com/docs/apis/camera). We’ll begin with building it for the web, then make some small tweaks to make it work on mobile (iOS and Android).

## Photo Service

Toda la lógica de Capacitor (uso de la cámara y otras características nativas) se encapsulará en un servicio. Create `PhotoService` using the `ionic generate` command:

```bash
$ ionic g service services/photo
```

Open the new `services/photo.service.ts` file, and let’s add the logic that will power the camera functionality. First, import Capacitor dependencies and get references to the Camera, Filesystem, and Storage plugins:

```typescript
importar { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
         CameraPhoto, Cámara de Cámara } de '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;
```

Next, define a new function, `addNewToGallery`, that will contain the core logic to take a device photo and save it to the filesystem. Let’s start by opening the device camera:

```typescript
public async addNewToGallery() {
  // Hacer una foto
  const capturedPhoto = await Camera.getPhoto ({
    resultType: CameraResultType.Uri, 
    source: CameraSource.Camera, 
    quality: 100 
  });
}
```

Notice the magic here: there's no platform-specific code (web, iOS, or Android)! The Capacitor Camera plugin abstracts that away for us, leaving just one method call - `Camera.getPhoto()` - that will open up the device's camera and allow us to take photos.

Next, open up `tab2.page.ts` and import the PhotoService class:

```typescript
importar { PhotoService } de '../services/photo.service';

constructor (public photoService: Photo Service) { }
```

Then, open `tab2.page.html` and call the `addNewToGallery()` function when the FAB is tapped/clicked:

```html
<ion-content>
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button (click)="photoService.addNewToGallery()">
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

Save the file, and if it's not running already, restart the development server in your browser by running `ionic serve`. On the Photo Gallery tab, click the Camera button. If your computer has a webcam of any sort, a modal window appears. Take a selfie!

![Camera API on the web](/docs/assets/img/guides/first-app-cap-ng/camera-web.png)

_(Probablemente tu selfie sea mucho mejor que el mío)_

Después de tomar una foto, desaparece de inmediato. We need to display it within our app and save it for future access.

## Mostrando fotos

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

  // otro código
}
```

Over in the `addNewToGallery` function, add the newly captured photo to the beginning of the Photos array.

```typescript
  const capturedPhoto = await Camera.getPhoto ({
    resultType: CameraResultType.Uri, 
    source: CameraSource.Camera, 
    quality: 100 
  });

  this.photos.unshift({
    filepath: "pronto...",
    webviewPath: capturedPhoto .webPath
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

  <!-- ion-fab markup  -->
</ion-content>
```

Save all files. Dentro del navegador web, haga clic en el botón Cámara y haga otra foto. Esta vez, la foto se muestra en la Galería de Fotos!

Up next, we’ll add support for saving the photos to the filesystem, so they can be retrieved and displayed in our app at a later time.
