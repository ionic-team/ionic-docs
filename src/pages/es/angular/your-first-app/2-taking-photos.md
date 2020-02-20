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

A continuación, abra `tab2.page.ts` e importe la clase PhotoService:

```typescript
import { PhotoService } from '../services/photo.service';

constructor(public photoService: PhotoService) { }
```

Luego, abra `tab2.page.html` y llame a la función `addNewToGallery()` cuando se toque o de clic en FAB:

```html
<ion-content>
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button (click)="photoService.addNewToGallery()">
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

Con las fotos almacenadas en el arreglo principal, muévete a `tab2.page.html` para que podamos mostrar la imagen en la pantalla. Añade [ Grid component](https://ionicframework.com/docs/api/grid) para que cada foto se muestre de forma agradable como se agregan fotos a la galería, y bucle por cada foto en la matriz fotos, añadiendo un componente Image (`<ion-img>`) para cada una. Apunte la `src` (fuente) a la ruta de la foto:

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

Guardar todos los archivos. Dentro del navegador web, haga clic en el botón Cámara y haga otra foto. Esta vez, la foto se muestra en la Galería de Fotos!

A continuación, añadiremos soporte para guardar las fotos en el sistema de archivos, para que puedan ser recuperados y mostrados en nuestra aplicación más adelante.
