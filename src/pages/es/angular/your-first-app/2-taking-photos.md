---
previousText: 'Tu primera Aplicación'
previousUrl: '/docs/angular/your-first-app'
nextText: 'Guardando fotos en el sistema de archivos'
nextUrl: '/docs/angular/your-first-app/3-deploying-mobile'
---

# Capturando fotos con la cámara

Ahora viene la parte divertida: añadiendo la capacidad de tomar fotos con la cámara del dispositivo usando el plugin [API de cámara](https://capacitor.ionicframework.com/docs/apis/camera) de Capacitor. Empezaremos por construirlo para la web, luego haremos algunos pequeños ajustes para que funcione en móviles (iOS y Android).

## Servicio de fotos

Toda la lógica de Capacitor (uso de la cámara y otras características nativas) serán encapsuladas en una clase servicio. Crea `PhotoService` usando el comando `ionic generate`:

```bash
$ ionic g service services/photo
```

Abre el nuevo archivo `services/photo.service.ts`, y agreguemos la lógica de la funcionalidad de la cámara. Primero, importa las dependencias de Capacitor y obtén las referencias a los plugins de Camera, Filesystem y Storage:

```typescript
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
         CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;
```

A continuación, define una nueva función, `addNewToGallery`, que contendrá la lógica para tomar una foto del dispositivo y guardarla en un archivo. Comencemos abriendo la cámara de dispositivo:

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

Observe la magia: no hay un código específico para cada plataforma (web, iOS o Android)! El plugin de Capacitor Camera lo obtiene para nosotros, haciendo una sola llamada al método - `Camera.getPhoto()` - que abrirá la cámara del dispositivo y nos permitirá tomar fotos.

A continuación, abre `tab2.page.ts`, e importa la clase PhotoService y añade un método que llama al método `addNewToGallery` de la clase importada:

```typescript
import { PhotoService } from '../services/photo.service';

constructor(public photoService: PhotoService) { }

addPhotoToGallery() {
  this.photoService.addNewToGallery();
}
```

Luego, abra `tab2.page.html` y llame a la función `addNewToGallery()` cuando se toque o de clic en FAB:

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
export interface Photo {
  filepath: string;
  webviewPath: string;
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

A continuación, vayamos a `tab2.page.html` de modo que podamos desplegar la imagen en pantalla. Agrega un [componente Grid](https://ionicframework.com/docs/api/grid) de modo que cada foto se muestre bien, a medida que se agreguen fotos a la galería, y recorras cada foto en el arreglo Photos de `PhotoServices`, agregando un componente Image (`<ion-img>`) para cada una de ellas. Apunta `src` (la fuente) hacia la ruta de la foto:

```html
<ion-content>
 <ion-grid>
  <ion-row>
   <ion-col size="6" 
      *ngFor="let photo of photoService.photos; index as position">
   <ion-col size="6" 
      *ngFor="let photo of photoService.photos; index as position">
   <ion-col size="6" 
      *ngFor="let photo of photoService.photos; index as position">
    <ion-img [src]="photo.webviewPath">
   </ion-col>
  </ion-row>
 </ion-grid>

  <!-- ion-fab markup  -->
</ion-content>
```

Guardar todos los archivos. Dentro del navegador, haz clic en el botón Camera y toma otra foto. Esta vez, la foto es desplegada en la Galería de Fotos!

Hasta la próxima, agregaremos soporte para guardar las fotos al sistema de archivos, de forma que puedan ser recuperadas y desplegadas en nuestra app en otro momento.
