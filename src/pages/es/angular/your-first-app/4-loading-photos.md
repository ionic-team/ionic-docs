---
previousText: 'Guardando fotos en el sistema de archivos'
previousUrl: '/docs/angular/your-first-app/3-loading-photos'
nextText: 'Añadiendo soporte móvil'
nextUrl: '/docs/angular/your-first-app/5-deploying-mobile'
---

# Cargando fotos desde el sistema de archivos

Hemos implementado la toma de fotos y su guardado en el sistema de archivos. Falta una última pieza de funcionalidad: las fotos se almacenan en el sistema de archivos, pero necesitamos una forma de guardar punteros en cada archivo para que puedan mostrarse nuevamente en la galería de fotos.

Afortunadamente, esto es fácil: aprovecharemos la [API Storage ](https://capacitor.ionicframework.com/docs/apis/storage) de Capacitor para almacenar nuestro arreglo de fotos en un formato clave-valor.

## API Almacenamiento

Comience definiendo una variable constante que actuará como la clave para el almacenamiento de las fotografias:

```typescript
export class PhotoService {
 public photos: Photo[] = [];
 private PHOTO_STORAGE: string = "photos";

  // otro código
}
```

Luego, al final de la función `addNewToGallery`, hará una llamada a `Storage.set()` para guardar el arreglo de fotografías "photos". Al agregarlo aquí, el arreglo de Fotos se almacena cada vez que se toma una nueva foto. De esta forma, no importa cuando el usuario, cierre la app o se cambie a una app distinta todas las fotografías están guardadas.

```typescript
Storage.set({
  key: this.PHOTO_STORAGE,
  value: JSON.stringify(this.photos)
});
```

Con los datos del arreglo de fotos guardados, crear una función llamada `loadSaved()` que pueda recuperar esos datos. Utilizamos la misma clave para recuperar el array de fotos en formato JSON, luego analizarlo en una matriz:

```typescript
public async loadSaved() {
  // Retrieve cached photo array data
  const photoList = await Storage.get({ key: this.PHOTO_STORAGE });
  this.photos = JSON.parse(photoList.value) || [];

  // más por venir...
}
```

En  móvil (próximamente!), directamente podremos establecer el origen de una etiqueta de imagen - `<img src="x" />` - a cada archivo de foto en el Sistema de Archivos, mostrándolos automáticamente. En la web, sin embargo, debemos leer cada imagen desde el sistema de archivos en formato base64, usando una nueva propiedad `base64` en el objeto `Photo`. Esto se debe a que la API Sistema de Archivos utiliza [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) bajo la cubierta. Debajo está el código que necesitas añadir en la función `loadSaved()`, que acabas de añadir:

```typescript
// Mostrar la foto en formato base64
for (let photo of this.photos) {
  // Lee los datos de cada foto guardada en el sistema de archivos
  const readFile = await Filesystem.readFile({
      path: photo.filepath,
      directory: FilesystemDirectory.Data
  });

  // Plataforma web solamente: Guardar la foto en base64
  photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
}
```

Después, llama a este nuevo método en `tab2.page. s` de modo que cuando el usuario navega por primera vez a Tab 2 (la Galería de fotos), todas las fotos se cargan y se muestran en la pantalla.

```typescript
ngOnInit() {
  this.photoService.loadSaved();
}
```

¡Eso es! Hemos construido una función completa de Galería de Fotos en nuestra aplicación Ionic que funciona en la web. ¡Próximamente, lo transformaremos en una aplicación móvil para iOS y Android!
