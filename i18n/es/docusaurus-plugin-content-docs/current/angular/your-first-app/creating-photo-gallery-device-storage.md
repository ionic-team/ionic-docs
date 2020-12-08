---
previousText: 'Android, iOS y la Cámara, otra vez!'
previousUrl: '/docs/angular/your-first-app/ios-android-camera'
nextText: 'Tema'
nextUrl: '/docs/angular/your-first-app/theming'
contributors:
  - jsonMartin
---

# Creando una galería de fotos con almacenamiento de dispositivos

La última vez, agregamos con éxito el plugin de la cámara a la página Tab2 de nuestra aplicación Tabs. Actualmente, la foto se reemplaza cada vez que se toma una nueva. ¿Qué pasa si queremos mostrar varias fotos juntas? Vamos a crear una galería de fotos. Puedes ver el código completo para esto [en GitHub](https://github.com/ionic-team/photo-gallery-tutorial-ionic4).

## Creando un Servicio de Fotos Dedicado

Desde una terminal, navegue a su proyecto Ionic y ejecute:

```shell
$ ionic g service services/Photo
```

Esto crea una clase llamada PhotoService en una carpeta dedicada de "servicios":

```Javascript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor() { }
}
```

Dentro de este archivo, agregue una clase de fotografía. La propiedad "data" representa los datos de la imagen base64 de una foto capturada:

```Javascript
class Photo {
  data: any;
}
```

Luego, cree una matriz de fotos para representar nuestra galería de fotos:

```Javascript
export class PhotoService {

  public photos: Photo[] = [];

  constructor() { }
}
```

De vuelta en `tab2.page.ts`, importe PhotoService:

```Javascript
import { PhotoService } from '../services/photo.service';
```

Añádelo al Constructor:

```Javascript
constructor(private camera: Camera, public photoService: PhotoService) {  }
```

A continuación, mueva todo el código correspondiente al plugin de la cámara a la clase PhotoService. Esto incluye el método takePicture, las importaciones de Camera y CameraOptions, y el constructor de páginas Tab2Page.

Continuando, necesitamos convertir las referencias de la variable currentImage a la nueva matriz de fotos. Comience añadiendo los datos de la foto capturada en la matriz de fotos:

```Javascript
this.camera.getPicture(options).then((imageData) => {
    // Add new photo to gallery
    this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
    }); }, (err) => {
    // Handle error
    console.log("Camera issue: " + err);
});
```

En `tab2.page.ts`, elimine la variable currentImage y la referencia a la cámara en el constructor, dejando sólo PhotoService:

```Javascript
export class Tab2Page {
  constructor(public photoService: PhotoService) {  }
}
```

A continuación, en `tab2.page.html`, elimine la etiqueta currentImage img. En su lugar, utilice un componente de red de iones, que proporciona una gran manera de organizar los elementos en una página. En este caso, lo usaremos para mostrar 2 fotos por fila.

```html
<ion-grid>
  <ion-row>
    <ion-col size="6" *ngFor="let photo of photoService.photos">
      <img [src]="photo.data" />
    </ion-col>
  </ion-row>
</ion-grid>
```

Aquí, hacemos un bucle a través de cada foto en la matriz de fotos de PhotoServices, añadiendo una nueva columna para cada una. Como una fila de iones consiste en 12 "bloques" de espacio, y estamos ajustando el tamaño a 6 (`size="6"`), sólo se muestran 2 fotos por fila.

Por último, actualice el botón Fab para llamar al método `takePicture` del PhotoService:

```Html
<ion-fab-button (click)="photoService.takePicture()">
  <ion-icon name="camera"></ion-icon>
</ion-fab-button>
```

¡Estupendo! Ahora tenemos una galería de fotos básica funcionando.

## Guardar fotos en el dispositivo

Tener una galería de fotos que funcione está bastante bien, pero es probable que te des cuenta de que cuando la aplicación se cierra, las fotos se pierden para siempre. Esto no es bueno, así que añadamos el [Ionic Storage plugin](https://ionicframework.com/docs/storage/), como una forma fácil de almacenar pares clave/valor y objetos JSON. Cuando se ejecuta en un contexto de aplicación nativo, Storage prioriza el uso de SQLite, una de las bases de datos basadas en archivos más estables y ampliamente utilizadas. Cuando se ejecuta en la Web o como una aplicación Web progresiva, Storage intentará utilizar IndexedDB, WebSQL y localstorage, en ese orden.

El plugin de almacenamiento funciona perfectamente para nuestros datos de imagen base64. Para empezar, añada el plugin SQLite para nativo:

```shell
$ ionic cordova plugin add cordova-sqlite-storage
```

A continuación, agregue la biblioteca JavaScript para la Web:

```shell
$ npm install --save @ionic/storage
```

Por último, importe el módulo Storage y añádelo a la lista de importaciones en `app.module.ts`:

```Javascript
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Ahora está listo para ser utilizado en nuestra clase de PhotoService. Impórtate:

```Javascript
import { Storage } from '@ionic/storage-angular';
```

Luego insertar a través del constructor:

```Javascript
constructor(private camera: Camera, private storage: Storage) { }
```

Para añadir la capacidad de guardar fotos, sólo quedan un par de pasos. Actualice el método `takePicture()` para guardar toda la matriz de fotos después de tomar cada foto utilizando el método storage.set:

```Javascript
this.camera.getPicture(options).then((imageData) => {
  // Add new photo to gallery
  this.photos.unshift({
    data: 'data:image/jpeg;base64,' + imageData
  });

  // Save all photos for later viewing
  this.storage.set('photos', this.photos);
}, (err) => {
  // Handle error
  console.log("Camera issue: " + err);
});
```

Todavía tenemos que cargar las fotos guardadas cuando se abre la aplicación por primera vez. Esto es bastante simple - recuperar la tecla "photos" y luego asignar su valor a la matriz de fotos:

```Javascript
loadSaved() {
  this.storage.get('photos').then((photos) => {
    this.photos = photos || [];
  });
}
```

En la página Tab2, llame al método loadSaved una vez que comience a cargarse:

```Javascript
ngOnInit() {
  this.photoService.loadSaved();
}
```

¡Genial! Las fotos se guardan ahora en su dispositivo. Para demostrar que están siendo efectivamente guardados, forzaremos el cierre de DevApp, reabrirlo y abrir la página Tab2. O, agita tu dispositivo para que el menú de control se apague, y luego pulsa “Salir de vista previa”. Después, recarga esta aplicación para ver las fotos.

Seguidamente, estudiaremos cómo aplicar un tema personalizado a una aplicación Ionic.

<div style="text-align:right;">
  <docs-button href="/docs/angular/your-first-app/theming">Continuar <svg viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></docs-button>
</div>
