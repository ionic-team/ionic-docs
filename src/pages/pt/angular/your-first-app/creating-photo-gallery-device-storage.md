---
previousText: 'Android, iOS, and the Camera - Oh My!'
previousUrl: '/docs/angular/your-first-app/ios-android-camera'
nextText: 'Temas'
nextUrl: '/docs/angular/your-first-app/theming'
contributors:
  - jsonMartin
---

# Criando uma Galeria de Fotos com o Armazenamento do Dispositivo

Da última vez, adicionamos com sucesso o plugin Câmera à página Tab2 de nosso aplicativo Tabs. Atualmente, a foto é substituída cada vez que uma nova é tirada. E se quiséssemos exibir várias fotos juntas? Vamos criar uma galeria de fotos. Você pode acompanhar com o código completo para este tutorial [no GitHub](https://github. com/ionic-team/photo-gallery-tutorial-ionic4).

## Criando um Serviço de Foto Dedicado

Em um terminal, navegue até seu projeto Ionic e execute:

```shell
$ ionic g service services/Photo
```

Isto cria uma classe PhotoService em uma pasta dedicada "services":

```Javascript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor() { }
}
```

Dentro deste arquivo, adicione uma classe de fotos. A propriedade "data" representa os dados da imagem base64 da foto capturada:

```Javascript
class Photo {
  data: any;
}
```

Agora, crie um array de fotos para representar nossa galeria de fotos:

```Javascript
export class PhotoService {

  public photos: Photo[] = [];

  constructor() { }
}
```

Volte ao arquivo `tab2.page.ts`, e importe o serviço "PhotoService":

```Javascript
import { PhotoService } from '../services/photo.service';
```

Adicione-o ao Construtor:

```Javascript
constructor(private camera: Camera, public photoService: PhotoService) {  }
```

Em seguida, mova todo o código relacionado ao plugin Câmera para a classe PhotoService. Isto inclui o método de "takePicture", os imports de "Camera" e CameraOptions", e o construtor de página "Tab2Page".

Continuando, precisamos converter a variável "currentImage" para o novo array de fotos. Comece adicionando os dados das fotos capturadas no array de fotos:

```Javascript
this.camera.getPicture(options).then((imageData) => {
    // Adiciona uma nova foto à galeria
    this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
    }); }, (err) => {
    // Handle error
    console.log("Erro na Camera: " + err);
});
```

No `tab2.page.ts.`, remova a variável "currentImage" e a referência "Camera" no construtor, deixando apenas o "PhotoService":

```Javascript
export class Tab2Page {
  constructor(public photoService: PhotoService) {  }
}
```

Em seguida, em `tab2.page.html`, remova a tag img com bind para currentImage e. Em seu lugar, use um componente de ion-grid, que fornece uma ótima maneira de organizar elementos em uma página. Neste caso, usaremos para exibir 2 fotos por linha.

```html
<ion-grid>
  <ion-row>
    <ion-col size="6" *ngFor="let photo of photoService.photos">
      <img [src]="photo.data" />
    </ion-col>
  </ion-row>
</ion-grid>
```

Here, we loop through each photo in the PhotoServices photos array, adding a new column for each. Since an ion-row consists of 12 “blocks” of space, and we’re setting the size to 6 (`size="6"`), only 2 photos are displayed per row.

Last, update the Fab button to call the PhotoService’s `takePicture` method:

```Html
<ion-fab-button (click)="photoService.takePicture()">
  <ion-icon name="camera"></ion-icon>
</ion-fab-button>
```

Excelente! We now have a basic photo gallery working.

## Saving photos to the device

Having a working photo gallery is pretty cool, but you’ll likely notice that when the app is closed, the photos are lost forever. That’s no good, so let’s add the [Ionic Storage plugin](https://ionicframework.com/docs/storage/), as easy way to store key/value pairs and JSON objects. When running in a native app context, Storage will prioritize using SQLite, one of the most stable and widely used file-based databases. When running on the web or as a Progressive Web App, Storage will attempt to use IndexedDB, WebSQL, and localstorage, in that order.

The Storage plugin works perfectly for our base64 image data. To begin, add the SQLite plugin for native:

```shell
$ ionic cordova plugin add cordova-sqlite-storage
```

Next, add the JavaScript library for the web:

```shell
$ npm install --save @ionic/storage
```

Last, import the Storage module and add it to the imports list in `app.module.ts`:

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

It’s now ready to be used in our PhotoService class. Import it:

```Javascript
import { Storage } from '@ionic/storage-angular';
```

Then inject it via the constructor:

```Javascript
constructor(private camera: Camera, private storage: Storage) { }
```

To add the capability to save photos, there’s only a couple steps left. Update the `takePicture()` method to save the entire photos array after each photo is taken using the storage.set method:

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

We still need to load the saved photos when the app is first opened. This is simple enough - retrieve the “photos” key then assign its value to the photos array:

```Javascript
loadSaved() {
  this.storage.get('photos').then((photos) => {
    this.photos = photos || [];
  });
}
```

Over in the Tab2 page, call the loadSaved method once it begins loading:

```Javascript
ngOnInit() {
  this.photoService.loadSaved();
}
```

Sweet! Photos are now saved to your device. To demonstrate that they are indeed being saved, force close DevApp, reopen it, and open the Tab2 page. Or, shake your device to have the Control Menu pop up, then tap “Exit preview.” Afterwards, reload this app to view the photos.

Next up, we’ll look at how to apply a custom theme to an Ionic app.

<div style="text-align:right;">
  <docs-button href="/docs/angular/your-first-app/theming">Continue <svg viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></docs-button>
</div>
