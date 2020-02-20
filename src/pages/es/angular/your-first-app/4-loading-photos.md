---
previousText: 'Guardando fotos en el sistema de archivos'
previousUrl: '/docs/angular/your-first-app/3-saving-photos'
nextText: 'Adding Mobile'
nextUrl: '/docs/angular/your-first-app/5-adding-mobile'
---

# Cargando fotos desde el sistema de archivos

Hemos implementado la toma de fotos y guardarlas en el sistema de archivos. Falta una última pieza de funcionalidad: las fotos se almacenan en el sistema de archivos, pero necesitamos una forma de guardar punteros en cada archivo para que puedan mostrarse nuevamente en la galería de fotos.

Afortunadamente, esto es fácil: aprovecharemos la API de Capacitor Storage para almacenar nuestra variedad de fotos en una tienda de valor clave.

## API de almacenamiento

Comience definiendo una variable constante que actuará como la clave para la tienda:

```typescript
export class PhotoService {
 public photos: Photo[] = [];
 private PHOTO_STORAGE: string = "photos";

  // otro código
}
```

Next, at the end of the `addNewToGallery` function, add a call to `Storage.set()` to save the Photos array. By adding it here, the Photos array is stored each time a new photo is taken. This way, it doesn’t matter when the app user closes or switches to a different app - all photo data is saved.

```typescript
Storage.set({
  key: this.PHOTO_STORAGE,
  value: JSON.stringify(this.photos.map(p => {
          // No guardar la representación base64 de los datos de las fotos, 
          // dado que ya ha sido guardado en el Filesystem
          const photoCopy = { ...p };
          delete photoCopy.base64;

          return photoCopy;
          }))
});
```

With the photo array data saved, create a function called `loadSaved()` that can retrieve that data. We use the same key to retrieve the photos array in JSON format, then parse it into an array:

```typescript
public async loadSaved() {
  // Recuperar datos de array de fotos almacenados en caché
  const photos = await Storage.get({ key: this.PHOTO_STORAGE });
  this.photos = JSON.parse(photos.value) || [];

  // más por venir...
}
```

On mobile (coming up next!), we can directly set the source of an image tag - `<img src=”x” />` - to each photo file on the Filesystem, displaying them automatically. On the web, however, we must read each image from the Filesystem into base64 format, using a new `base64` property on the `Photo` object. This is because the Filesystem API uses [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) under the hood. Below the code you just added in the `loadSaved()` function, add:

```typescript
// Mostrar la foto leyendo en formato base64
for (let photo of this.photos) {
  // Lee los datos de cada foto guardada en el sistema de ficheros
  const readFile = await Filesystem.readFile({
      path: photo.filepath,
      directory: FilesystemDirectory.Data
  });

  // Plataforma web solamente: Guardar la foto en el campo base64
  photo.base64 = `data:image/jpeg;base64,${readFile.data}`;
}
```

After, call this new method in `tab2.page.ts` so that when the user first navigates to Tab 2 (the Photo Gallery), all photos are loaded and displayed on the screen.

```typescript
ngOnInit() {
  this.photoService.loadSaved();
}
```

¡Eso es! We’ve built a complete Photo Gallery feature in our Ionic app that works on the web. Next up, we’ll transform it into a mobile app for iOS and Android!