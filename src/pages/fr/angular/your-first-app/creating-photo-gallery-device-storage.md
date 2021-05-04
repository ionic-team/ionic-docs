---
previousText: 'Android, iOS et la caméra de votre smartphone - Impressionnant !'
previousUrl: '/docs/angular/your-first-app/ios-android-camera'
nextText: 'Thématisation'
nextUrl: '/docs/angular/your-first-app/theming'
contributors:
  - jsonMartin
---

# Création d'une galerie de photos en utilisant le stockage interne de l'appareil

La dernière fois, nous avons ajouté le plugin Camera à la page Tab2 de notre application Tabs. Actuellement, la photo précédente est remplacée chaque fois qu'une nouvelle photo est prise. Que se passe-t-il si nous voulions afficher plusieurs photos ensemble ? Créeons une galerie de photos. Vous pouvez obtenir le code complet pour ce projet [sur GitHub](https://github.com/ionic-team/photo-gallery-tutorial-ionic4).

## Création d'un service appelé Photo

Depuis une fenêtre de terminal, naviguez vers votre projet Ionic et exécutez :

```shell
$ ionic g service services/Photo
```

Ceci crée une classe PhotoService dans un dossier dédié "services" :

```Javascript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor() { }
}
```

Dans ce fichier, ajoutez une classe Photo. La propriété « data » représente les données d'image base64 d'une photo capturée :

```Javascript
class Photo {
  data: any;
}
```

Ensuite, créez un tableau Photos pour représenter notre galerie photo :

```Javascript
export class PhotoService {

  public photos: Photo[] = [];

  constructor() { }
}
```

Retour dans `tab2.page.ts` et importer PhotoService :

```Javascript
import { PhotoService } from '../services/photo.service';
```

Ajouter au Constructeur :

```Javascript
constructor(private camera: Camera, public photoService: PhotoService) {  }
```

Ensuite, déplacez tout le code relatif au plugin Camera dans la classe PhotoService. Cela inclut la méthode takePicture, les importations de Camera, de CameraOptions et le constructeur de page Tab2Page.

En continuant, nous devons convertir les références de variables currentImage vers le nouveau tableau de photos. Commencez par ajouter les données de photos capturées dans le tableau de photos :

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

Dans `tab2.page.ts`, supprimez la variable currentImage et la référence à Camera dans le constructeur, laissant seulement PhotoService :

```Javascript
export class Tab2Page {
  constructor(public photoService: PhotoService) {  }
}
```

Ensuite, dans `tab2.page.html`, supprimez la balise img contenant currentImage. À sa place, utilisez le composant appelé ion-grid, qui fournit une excellente façon d'organiser des éléments sur une page. Dans ce cas, nous l’utiliserons pour afficher 2 photos par ligne.

```html
<ion-grid>
  <ion-row>
    <ion-col size="6" *ngFor="let photo of photoService.photos">
      <img [src]="photo.data" />
    </ion-col>
  </ion-row>
</ion-grid>
```

Ici, nous parcourons le tableau photos du service PhotoServices en ajoutant une colonne pour chaque photo. Puisque le composant ion-row consiste en 12 "blocs" d'espace, et que nous fixons la taille à 6 (`size="6"`), seules 2 photos sont affichées sur chaque ligne.

Enfin, mettez à jour le bouton Fab pour appeler la méthode `takePicture` de PhotoService :

```Html
<ion-fab-button (click)="photoService.takePicture()">
  <ion-icon name="camera"></ion-icon>
</ion-fab-button>
```

Super ! Nous avons à présent une galerie de photo basique fonctionnelle.

## Sauvegarde des photos sur l'appareil

Avoir une galerie de photo fonctionnelle est plutôt cool, mais vous remarquerez probablement que quand l'application est fermée, les photos sont perdues à jamais. Pour éviter cela, il faut ajouter le [plugin de stockage ionic](https://ionicframework.com/docs/storage/), facilement avec le stockage clef/valeur et objets JSON. When running in a native app context, Storage will prioritize using SQLite, one of the most stable and widely used file-based databases. When running on the web or as a Progressive Web App, Storage will attempt to use IndexedDB, WebSQL, and localstorage, in that order.

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
