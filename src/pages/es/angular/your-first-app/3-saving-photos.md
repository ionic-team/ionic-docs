---
previousText: 'Tomar fotos'
previousUrl: '/docs/angular/your-first-app/2-taking-photos'
nextText: 'Guardando fotos en el sistema de archivos'
nextUrl: '/docs/angular/your-first-app/4-loading-photos'
---

# Guardando fotos en el sistema de archivos

Ahora podemos tomar varias fotos y mostrarlas en una galería de fotos en la segunda pestaña de nuestra aplicación. Sin embargo, estas fotos no se almacenan de forma permanente, por lo que cuando la aplicación se cierre, se eliminarán.

## API FileSystem

Afortunadamente, guardarlos en el sistema de archivos sólo toma unos pocos pasos. Begin by creating a new class method, `savePicture()`, in the `PhotoService` class (`src/app/services/photo.service.ts`). Pasamos al objeto `cameraPhoto`, que representa la foto del dispositivo recién capturado:

```typescript
private async savePicture(cameraPhoto: CameraPhoto) { }
```

We can use this new method immediately in `addNewToGallery()`:

```typescript
public async addNewToGallery() {
  // Tomar una foto
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri, // file-based data; provides best performance
    source: CameraSource.Camera, // automatically take a new photo with the camera
    quality: 100 // highest quality (0 to 100)
  });

  // Guardar la foto y agregarla a la colección de fotos.
  const savedImageFile = await this.savePicture(capturedPhoto);
  this.photos.unshift(savedImageFile);
}
```

Utilizaremos el Capacitor [Filesystem API](https://capacitor.ionicframework.com/docs/apis/filesystem) para guardar la foto en el sistema de archivos. Para empezar, convierte la foto en formato base64, luego envía los datos a la función `writeFile` de Filesystem. Como recordarás, mostramos cada foto en la pantalla configurando cada ruta origen de la imagen (atributo *src*) en *tab2.page.html* a la propiedad webviewPath. Entonces, configúrelo y luego devuelva el nuevo objeto Photo.

```typescript
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

  // Use webPath to display the new image instead of base64 since it's
  // already loaded into memory
  return {
    filepath: fileName,
    webviewPath: cameraPhoto.webPath
  };
}
```

`readAsBase64()` es una función ayudante que definiremos a continuación. Es util organizar un método por separado, ya que requiere un poco de lógica especifica de la plataforma (web vs. mobile) -  en breve profundizaremos en ello.  Por ahora, implementaremos la lógica para la plataforma web.

```typescript
private async readAsBase64(cameraPhoto: CameraPhoto) {
  // Obtener la foto, leer como un blob, luego convertir a formato base64
  const response = await fetch(cameraPhoto.webPath!);
 const blob = await response.blob();

  return await this.convertBlobToBase64(blob) as string;  
}

convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
  const reader = new FileReader;
  reader.onerror = reject;
  reader.onload = () => {
      resolve(reader.result);
  };
  reader.readAsDataURL(blob);
});
```

Obtener la foto de la camara en formato base64, parece ser más complicado en web que en mobile. En realidad, solo estamos usando las APIs Web incorporadas [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) como una forma ordenada de leer el archivo en formato blob, luego [readAsDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL) de FileReader, convierte la foto en blob a base64.

Finalmente, cambie la forma en que las imágenes se vuelven visibles en el archivo de plantilla `tab2.page.html`.

```html
<ion-img src="{{ photo.base64 ? photo.base64 : photo.webviewPath }}"></ion-img>
```

Aquí vamos!. Cada vez que se toma una nueva foto, se guarda automáticamente en el sistema de archivos.
