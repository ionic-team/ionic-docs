---
previousText: 'Tomar fotos'
previousUrl: '/docs/angular/your-first-app/2-taking-photos'
nextText: 'Guardando fotos en el sistema de archivos'
nextUrl: '/docs/angular/your-first-app/4-loading-photos'
---

# Guardando fotos en el sistema de archivos

Ahora podemos tomar varias fotos y mostrarlas en una galería de fotos en la segunda pestaña de nuestra aplicación. Sin embargo, estas fotos no se almacenan de forma permanente, por lo que cuando la aplicación se cierre, se eliminarán.

## API FileSystem

Afortunadamente, guardarlos en el sistema de archivos sólo toma unos pocos pasos. Comience creando una nueva función, `savePicture()`, en la clase `Photo Service` (`src/app/services/photo.service.ts`). We pass in the `cameraPhoto` object, which represents the newly captured device photo:

```typescript
private async savePicture(cameraPhoto: CameraPhoto) { }
```

We can use this new function immediately in `addNewToGallery()`:

```typescript
public async addNewToGallery() {
  // Hacer una foto
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri, // datos basados en archivos; proporciona el mejor rendimiento
    source: CameraSource.Camera, // tomar automáticamente una nueva foto con la cámara
    quality: 100 // la calidad más alta (0 a 100)
  });

  // Guardar la imagen y añadirla a la colección de fotos
  const savedImageFile = await this.savePicture(capturedPhoto);
  this.photos.unshift(savedImageFile);
}
```

We’ll use the Capacitor [Filesystem API](https://capacitor.ionicframework.com/docs/apis/filesystem) to save the photo to the filesystem. To start, convert the photo to base64 format, then feed the data to the Filesystem’s `writeFile` function. Finally, make a call to getPhotoFile (which we will implement in a moment), which returns a Photo object.

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

`readAsBase64()` and `getPhotoFile()` are two helper functions we’ll define next. They are split into separate methods because they require a small amount of platform-specific (web vs. mobile) logic - more on that in a bit.  For now, implement them for running on the web:

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
