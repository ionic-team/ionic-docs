---
previousText: 'Guardando fotos en el sistema de archivos'
previousUrl: '/docs/angular/your-first-app/3-loading-photos'
nextText: 'Añadiendo soporte móvil'
nextUrl: '/docs/angular/your-first-app/5-deploying-mobile'
---

# Cargando fotos desde el sistema de archivos

Hemos implementado la toma de fotos y su guardado en el sistema de archivos. Falta una última pieza de funcionalidad: las fotos se almacenan en el sistema de archivos, pero necesitamos una forma de guardar punteros en cada archivo para que puedan mostrarse nuevamente en la galería de fotos.

Afortunadamente, esto es fácil: aprovecharemos la [API Storage ](https://capacitor.ionicframework.com/docs/apis/storage) de Capacitor para almacenar nuestro arreglo de fotos en un formato clave-valor.

## API Storage

Comience definiendo una variable constante que actuará como la clave para el almacenamiento de las fotografias:

```typescript
export class PhotoService {
 public photos: Photo[] = [];
 private PHOTO_STORAGE: string = "photos";

  // otro código
}
```

Luego, al final de la funcion `addNewToGallery`, hará una llamada a `Storage.set()` para guardar el arreglo de fotografias "photos". Al agregarlo aquí, la matriz de Fotos se almacena cada vez que se toma una nueva foto. De esta forma, no importa cuando el usuario, cierre la app o se cambie a una app distinta todas las fotografias estan guardadas.

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

Con los datos del arreglo de fotos guardados, crearemos una función llamada `loadSaved()` que pueda recuperar esos datos. Utilizamos la misma clave para recuperar el array de fotos en formato JSON, luego analizarlo en una matriz:

```typescript
public async loadSaved() {
  // Recuperar datos de array de fotos almacenados en caché
  const photos = await Storage.get({ key: this.PHOTO_STORAGE });
  this.photos = JSON.parse(photos.value) || [];

  // más por venir...
}
```

En móvil (¡próximamente!), podemos establecer directamente la fuente de una etiqueta de imagen - `<img src=”x” />` - a cada archivo de foto en el sistema de archivos, desplegándolos automáticamente. En la web, sin embargo, debemos leer cada imagen desde el sistema de archivos en formato base64, usando una nueva propiedad `base64` en el objeto `Photo`. Esto se debe a que la API Filesystem utiliza [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) bajo la cubierta. Debajo del código que acabas de añadir en la función `loadSaved()` , añadir:

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

Después, llama a este nuevo método en `tab2.page. s` de modo que cuando el usuario navega por primera vez a Tab 2 (la Galería de fotos), todas las fotos se cargan y se muestran en la pantalla.

```typescript
ngOnInit() {
  this.photoService.loadSaved();
}
```

¡Eso es! Hemos construido una función completa de Galería de Fotos en nuestra aplicación Ionic que funciona en la web. ¡Próximamente, lo transformaremos en una aplicación móvil para iOS y Android!