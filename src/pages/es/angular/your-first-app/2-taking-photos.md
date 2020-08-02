---
previousText: 'Tu primera Aplicación'
previousUrl: '/docs/angular/your-first-app'
nextText: 'Guardando fotos en el sistema de archivos'
nextUrl: '/docs/angular/your-first-app/3-saving-photos'
---

# Capturando fotos con la cámara

Ahora por la parte divertida: añadiendo la capacidad de tomar fotos con la cámara del dispositivo usando el Capacitor [API de cámara](https://capacitor.ionicframework.com/docs/apis/camera). Empezaremos por construirlo para la web, luego haremos algunos pequeños ajustes para que funcione en móviles (iOS y Android).

## Servicio de fotos

Toda la lógica de Capacitor (uso de la cámara y otras características nativas) se encapsulará en un servicio. Crea `Photo Service` usando el comando `ionic generate`:

```bash
$ ionic g service services/photo
```

Abre el nuevo archivo `services/photo.service.ts`, y añadamos la lógica que iniciará la funcionalidad de la cámara. Primero, importa las dependencias de Capacitor y obtén las referencias a los plugins de Camera, Filesystem, and Storage:

```typescript
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
         CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;
```

A continuación, defina una nueva función, `addNewToGallery`, que contendrá la lógica para tomar una foto del dispositivo y guardarla en los archivos del sistema. Comencemos abriendo la cámara de dispositivo:

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

Observe la magia aquí: no hay un código específico para cada plataforma (web, iOS o Android)! El plugin de Capacitor Camera lo obtiene para nosotros, dejandolo a solo una llamada al método - `Camera.getPhoto()` - que abrirá la cámara del dispositivo y nos permitirá tomar fotos.

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

Guarda el archivo, y si no se está ejecutando, reinicia el servidor de desarrollo en tu navegador ejecutando `ionic serve`. En la pestaña Galería de fotos, haga clic en el botón de la cámara. Si su computadora tiene una webcam de cualquier tipo, aparece una ventana modal. ¡Toma una selfie!

![API de cámara en la web](/docs/assets/img/guides/first-app-cap-ng/camera-web.png)

_(Probablemente tu selfie sea mucho mejor que el mío)_

Después de tomar una foto, desaparece de inmediato. Necesitamos mostrarlo en nuestra aplicación y guardarlo para un acceso futuro.

## Mostrando fotos

Fuera de la definición de clase `Photo Service` (la parte inferior del archivo), crea una nueva interfaz, `Photo`para mantener nuestros metadatos fotográficos:

```typescript
interface Photo {
  filepath: string;
  webviewPath: string;
  base64?: string;
}
```

Volver a la parte superior del archivo, definir una matriz de fotos, que contendrá una referencia a cada foto capturada con la cámara.

```typescript
export class PhotoService {
  public photos: Photo[] = [];

  // otro código
}
```

Terminada la función `addNewToGallery`, añade la nueva foto capturada al principio del arreglo de fotos.

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
Crearemos una propiedad local ` photos ` en nuestro componente ` Tab2Page ` para que podamos hacer referencia a la colección Photos dentro de nuestra plantilla.

```typescript
export class Tab2Page {
  photos = this.photoService.photos;

  constructor(public photoService: PhotoService) { }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
```

With the photo(s) stored into the main array, move over to `tab2.page.html` so we can display the image on the screen. Add a [Grid component](https://ionicframework.com/docs/api/grid) so that each photo will display nicely as photos are added to the gallery, and loop through each photo in the Photos array, adding an Image component (`<ion-img>`) for each. Point the `src` (source) at the photo’s path:

```html
<ion-content>
  <ion-grid>
    <ion-row>
    <ion-col size="6" 
      *ngFor="let photo of photos; index as position">
        <ion-img src="{{ photo.webviewPath }}"></ion-img>
    </ion-col>
    </ion-row>
  </ion-grid>

  <!-- ion-fab markup  -->
</ion-content>
```

Save all files. Within the web browser, click the Camera button and take another photo. This time, the photo is displayed in the Photo Gallery!

Up next, we’ll add support for saving the photos to the filesystem, so they can be retrieved and displayed in our app at a later time.
