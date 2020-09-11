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

Next, update the `savePicture()` method. When running on mobile, set `filepath` to the result of the `writeFile()` operation - `savedFile.uri`. Al configurar la `webviewPath`, utilice el método especial `Capacitor.convertFileSrc()` ([detalles aquí](https://ionicframework.com/docs/core-concepts/webview#file-protocol)).

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
      directory: FilesystemDirectory.Data
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

A continuación, vuelve a la función `loadSaved()` que implementamos para la web anteriormente. On mobile, we can directly set the source of an image tag - `<img src="x" />` - to each photo file on the Filesystem, displaying them automatically. Por lo tanto, sólo la web requiere leer cada imagen del sistema de archivos en formato base64. Update this function to add an _if statement_ around the Filesystem code:

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
          directory: FilesystemDirectory.Data
      });

      // Web platform only: Load the photo as base64 data
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }
}
```

Our Photo Gallery now consists of one codebase that runs on the web, Android, and iOS. Next up, the part you’ve been waiting for - deploying the app to a device.
