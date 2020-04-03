---
previousText: 'Cargando fotos desde el sistema de archivos'
previousUrl: '/docs/angular/your-first-app/4-loading-photos'
nextText: 'Despliegue a móviles'
nextUrl: '/docs/angular/your-first-app/6-deploying-mobile'
---

# Añadiendo soporte móvil

Nuestra aplicación de galería de fotos no estará completa hasta que se ejecute en iOS, Android y la web - todo usando un código base. Todo lo que se necesita son algunos pequeños cambios lógicos para soportar plataformas móviles, instalar algunas herramientas nativas y luego ejecutar la aplicación en un dispositivo. ¡Comencemos!

## Importando el API de plataforma

Empecemos por hacer pequeños cambios de código - entonces nuestra aplicación “funcionará” cuando la despleguemos en un dispositivo.

Importa el [API de Plataforma](https://ionicframework.com/docs/angular/platform) de Ionic en `photo.service.ts`, el cual se utiliza para obtener información sobre el dispositivo actual. En este caso, es útil para seleccionar qué código se ejecutara basándose en la plataforma en la que se está ejecutando la aplicación (web o móvil):

```typescript
import { Platform } from '@ionic/angular';

export class PhotoService {
  public photos: Photo[] = [];
  private PHOTO_STORAGE: string = "photos";
  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform;
  }

  // otro código
}
```

## Lógica específica para cada Plataforma

En primer lugar, actualizaremos la funcionalidad de guardar fotos para que sea compatible con dispositivos móviles. En la función `readAsBase64()`, compruebe en qué plataforma se está ejecutando la aplicación. Si es "híbrida" (Capacitor o Cordova, dos runtime nativos), entonces obtenga la foto en formato base64 utilizando el método de Filesystem `readFile()`. De lo contrario, utilice la misma lógica de antes cuando ejecute la aplicación en la web:

```typescript
private async readAsBase64(cameraPhoto: CameraPhoto) {
  // "hybrid" detectara si es Cordova o Capacitor
  if (this.platform.is('hybrid')) {
    // Lee el archivo en formato base64
    const file = await Filesystem.readFile({
      path: cameraPhoto.path
    });

    return file.data;
  }
  else {
    // Obtiene la foto, como blob, entonces la convierte en formato base64
    const response = await fetch(cameraPhoto.webPath);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }
}
```

A continuación, actualice el método `getPhotoFile()`. Cuando se ejecute en móvil, devuelva la ruta completa del archivo de la foto usando la API de sistemas de archivos. Al configurar la `webviewPath`, utilice el método especial `Capacitor.convertFileSrc()` ([detalles aquí](https://ionicframework.com/docs/core-concepts/webview#file-protocol)).

```typescript
private async getPhotoFile(cameraPhoto, fileName) {
  if (this.platform.is('hybrid')) {
    // Get the new, complete filepath of the photo saved on filesystem
    const fileUri = await Filesystem.getUri({
      directory: FilesystemDirectory.Data,
      path: fileName
    });

    // Display the new image by rewriting the 'file://' path to HTTP
    // Details: https://ionicframework.com/docs/core-concepts/webview#file-protocol
    return {
      filepath: fileUri.uri,
      webviewPath: Capacitor.convertFileSrc(fileUri.uri),
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

A continuación, vuelve a la función `loadSaved()` que implementamos para la web anteriormente. On mobile, we can directly set the source of an image tag - `<img src=”x” />` - to each photo file on the Filesystem, displaying them automatically. Por lo tanto, sólo la web requiere leer cada imagen del sistema de archivos en formato base64. Update this function to add an _if statement_ around the Filesystem code:

```typescript
public async loadSaved() {
  // Obtenga el listado de fotos cacheadas
  const photos = await Storage.get({ key: this.PHOTO_STORAGE });
  this.photos = JSON.parse(photos.value) || [];

  // La forma mas fácil de detectar cuando se ejecuta en la web:
  // “cuando la plataforma NO es híbrida, hacer esto”
  if (!this.platform.is('hybrid')) {
    // Mostrar las foto leyéndolas en formato base64
    for (let photo of this.photos) {
      // Lea cada foto guardada desde el sistema de archivos
      const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: FilesystemDirectory.Data
      });

      // Solo para Web: Guarde la foto en el campo base64
      photo.base64 = `data:image/jpeg;base64,${readFile.data}`;
    }
  }
}
```

At the bottom of the `addNewtoGallery()` function, update the Storage API logic. Si se ejecuta en la web, hay una ligera optimización que podemos añadir. A pesar de que debemos leer los datos de las fotos en formato base64 para poder mostrarlos, no hay necesidad de guardarla de esa forma, ya que ya está guardado en el sistema de archivos:

```typescript
Storage.set({
  key: this.PHOTO_STORAGE,
  value: this.platform.is('hybrid')
          ? JSON.stringify(this.photos)
          : JSON.stringify(this.photos.map(p => {
            // Don't save the base64 representation of the photo data,
            // since it's already saved on the Filesystem
            const photoCopy = { ...p };
            delete photoCopy.base64;

            return photoCopy;
        }))
```

Finalmente, se requiere un pequeño cambio en `tab2.page.html` para soportar web y móvil. Si se ejecuta la aplicación en la web, la propiedad `base64` contendrá los datos de la foto para mostrar. Si en el móvil, se utilizará la `webviewPath`:

```html
<ion-col size="6"
    *ngFor="let photo of photoService.photos; index as position">
  <ion-img src="{{ photo.base64 ? photo.base64 : photo.webviewPath }}">
  </ion-img>
</ion-col>
```

Nuestra Galería de Fotos ahora consiste de un código base que se ejecuta en la web, Android e iOS. Luego, la parte que has estado esperando, desplegando la aplicación a un dispositivo.