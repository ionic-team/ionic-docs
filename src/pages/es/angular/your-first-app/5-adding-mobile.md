---
previousText: 'Cargando fotos desde el sistema de archivos'
previousUrl: '/docs/angular/your-first-app/4-loading-photos'
nextText: 'Despliegue a móviles'
nextUrl: '/docs/angular/your-first-app/6-deploying-mobile'
---

# Añadiendo soporte móvil

Nuestra aplicación de galería de fotos no estará completa hasta que se ejecute en iOS, Android y la web - todo usando un código base. Todo lo que se necesita son algunos pequeños cambios lógicos para soportar plataformas móviles, instalar algunas herramientas nativas y luego ejecutar la aplicación en un dispositivo. ¡Comencemos!

## Import Platform API

Empecemos por hacer pequeños cambios de código - entonces nuestra aplicación “funcionará” cuando la despleguemos en un dispositivo.

Import the Ionic [Platform API](https://ionicframework.com/docs/angular/platform) into `photo.service.ts`, which is used to retrieve information about the current device. En este caso, es útil para seleccionar qué código se ejecutara basándose en la plataforma en la que se está ejecutando la aplicación (web o móvil):

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

En primer lugar, actualizaremos la funcionalidad de guardar fotos para que sea compatible con dispositivos móviles. En la función `readAsBase64()`, compruebe en qué plataforma se está ejecutando la aplicación. Si es "híbrida" (Capacitor o Cordova, dos runtime nativos), entonces obtenga la foto en formato base64 utilizando el método Filesystem `readFile()`. De lo contrario, utilice la misma lógica de antes cuando ejecute la aplicación en la web:

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

A continuación, actualice el método `getPhotoFile()`. Cuando se ejecute en móvil, devuelva la ruta completa del archivo de la foto usando la API de sistemas de archivos. When setting the `webviewPath`, use the special `Capacitor.convertFileSrc()` method ([details here](https://ionicframework.com/docs/core-concepts/webview#file-protocol)).

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

A continuación, vuelve a la función `loadSaved()` que implementamos para la web anteriormente. On mobile, we can directly set the source of an image tag - `<img src=”x” />` - to each photo file on the Filesystem, displaying them automatically. Thus, only the web requires reading each image from the Filesystem into base64 format. Update this function to add an _if statement_ around the Filesystem code:

```typescript
public async loadSaved() {
  // Retrieve cached photo array data
  const photos = await Storage.get({ key: this.PHOTO_STORAGE });
  this.photos = JSON.parse(photos.value) || [];

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

      // Web platform only: Save the photo into the base64 field
      photo.base64 = `data:image/jpeg;base64,${readFile.data}`;
    }
  }
}
```

At the bottom of the `addNewtoGallery()` function, update the Storage API logic. If running on the web, there’s a slight optimization we can add. Even though we must read the photo data in base64 format in order to display it, there’s no need to save in that form, since it’s already saved on the Filesystem:

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

Finally, a small change to `tab2.page.html` is required to support both web and mobile. If running the app on the web, the `base64` property will contain the photo data to display. If on mobile, the `webviewPath` will be used:

```html
<ion-col size="6"
    *ngFor="let photo of photoService.photos; index as position">
  <ion-img src="{{ photo.base64 ? photo.base64 : photo.webviewPath }}">
  </ion-img>
</ion-col>
```

Our Photo Gallery now consists of one codebase that runs on the web, Android, and iOS. Next up, the part you’ve been waiting for - deploying the app to a device.