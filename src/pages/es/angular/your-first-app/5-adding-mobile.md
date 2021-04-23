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

A continuación, actualice el método `savePicture()`. Cuando se ejecuta en un dispositivo móvil, establezca la variable `filepath` al resultado de la operación `writeFile()` - `savedFile.uri`. Al configurar la `webviewPath`, utilice el método especial `Capacitor.convertFileSrc()` ([detalles aquí](https://ionicframework.com/docs/core-concepts/webview#file-protocol)).

```typescript
// Guardar imagen en el dispositivo
  private async savePicture(cameraPhoto: CameraPhoto ) {
    // Convertir foto a formato base64, requerido por el Filesystem API 
    const base64Data = esperar esto. eadAsBase64(cameraPhoto );

    // Crear el archivo en el directorio de datos
    const fileName = new Date(). etTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: FilesystemDirectory.Data
    });

    if (this.platform. s('hybrid')) {
      // Muestra la nueva imagen reescribiendo la ruta 'file://' a HTTP
      // Más información: https://ionicframework. om/docs/building/webview#file-protocol
      return {
        filepath: savedFile. ri,
        webviewPath: Capacitor. onvertFile► c(savedFile. ri),
      };
    }
    else {
      // Usar el webPath para mostrar la nueva imagen en lugar de base64
      return {
        filepath: fileName,
        webviewPath: cameraPhoto.webPath
      };
    }
}
```

A continuación, vuelve a la función `loadSaved()` que implementamos para la web anteriormente. En móvil, podremos establecer directamente el origen de una etiqueta de imagen - `<img src="x" />` - a cada archivo de foto en el Sistema de Archivos, mostrándolos automáticamente. Por lo tanto, sólo la web requiere leer cada imagen del sistema de archivos en formato base64. Actualiza esta función para añadir una _declaración If_ alrededor del código del sistema de archivos:

```typescript
public async loadSaved() {
  // Se obtiene el listado de fotos en caché
  const photoList = await Storage.get({ key: this.PHOTO_STORAGE });
  this.photos = JSON.parse(photoList.value) || [];

  // La forma mas fácil de detectar cuando se ejecuta en la web:
  // “cuando la plataforma NO es hybrida, haga esto”
  if (!this.platform.is('hybrid')) {
    // Muestra la foto leyéndola en fomato base64
    for (let photo of this.photos) {
      // Lee los datos de cada foto guardada por el Archivo de Sistema
      const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: FilesystemDirectory.Data
      });

      // Solo para Web: Carga la foto como datos en base64
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }
}
```

Nuestra Galería de Fotos ahora consiste de un código base que se ejecuta en la web, Android e iOS. Luego, la parte que has estado esperando, desplegando la aplicación a un dispositivo.
