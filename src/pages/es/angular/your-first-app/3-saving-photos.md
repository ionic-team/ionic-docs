---
previousText: 'Tomar fotos'
previousUrl: '/docs/angular/your-first-app/2-taking-photos'
nextText: 'Guardando fotos en el sistema de archivos'
nextUrl: '/docs/angular/your-first-app/4-loading-photos'
---

# Guardando fotos en el sistema de archivos

Ahora podemos tomar varias fotos y mostrarlas en una galería de fotos en la segunda pestaña de nuestra aplicación. Sin embargo, estas fotos no se almacenan de forma permanente, por lo que cuando la aplicación se cierre, se eliminarán.

## API FileSystem

Afortunadamente, guardarlos en el sistema de archivos sólo toma unos pocos pasos. Comience creando una nueva función, `savePicture()`, en la clase `Photo Service` (`src/app/services/photo.service.ts`). Pasamos al objeto `cameraPhoto`, que representa la foto del dispositivo recién capturado:

```typescript
private async savePicture(cameraPhoto: CameraPhoto) { }
```

Podemos utilizar esta nueva función inmediatamente en `addNewToGallery()`:

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

Utilizaremos el Capacitor [Filesystem API](https://capacitor.ionicframework.com/docs/apis/filesystem) para guardar la foto en el sistema de archivos. Para empezar, convierte la foto en formato base64, luego envía los datos a la función `writeFile` de Filesystem. Finalmente, haz una llamada a getPhotoFile (que implementaremos en un momento), que devuelve un objeto Photo.

```typescript
private async savePicture(cameraPhoto: CameraPhoto) {
  // Convierte foto a formato base64, requerido por la API del sistema de archivos para guardar
  const base64Data = await this.readAsBase64(cameraPhoto);

  // Escribe el archivo en el directorio de datos
  const fileName = new Date().getTime() + '.jpeg';
  await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: FilesystemDirectory.Data
  });

  // Obtener rutas de archivos de fotos específicas de la plataforma
  return await this.getPhotoFile(cameraPhoto, fileName);
}
```

`readAsBase64()` y `getPhoto File()` son dos funciones ayudantes que definiremos a continuación. Se dividen en métodos separados porque requieren una pequeña cantidad de plataforma específica (web vs. mobile) lógica - más sobre eso en un poco.  Por ahora, implementarlos para ejecutarse en la web:

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

Obtaining the camera photo as base64 format on the web appears to be a bit trickier than on mobile. In reality, we’re just using built-in web APIs: [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) as a neat way to read the file into blob format, then FileReader’s [readAsDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL) to convert the photo blob to base64.

`getPhotoFile()` is much simpler. As you’ll recall, we display each photo on the screen by setting each image’s source path (`src` attribute) in `tab2.page.html` to the webviewPath property. So, it gets set here:

```typescript
private async getPhotoFile(cameraPhoto: CameraPhoto, 
                           fileName: string): Promise<Photo> {
  return {
    filepath: fileName,
    webviewPath: cameraPhoto.webPath
  };
}
```

Finally, change the way pictures become visible in the template file `tab2.page.html`.
```html
<ion-img src="{{ photo.base64 ? photo.base64 : photo.webviewPath }}"></ion-img>
```

There we go! Each time a new photo is taken, it’s now automatically saved to the filesystem.
