---
previousText: 'Android, iOS, and the Camera - Oh My!'
previousUrl: '/docs/developer-resources/guides/first-app-v4/ios-android-camera'
nextText: 'Thématisation'
nextUrl: '/docs/developer-resources/guides/first-app-v4/theming'
contributors:
  - jsonMartin
---

# Création d'une galerie de photos avec le stockage de périphériques

La dernière fois, nous avons ajouté le plugin Camera à la page Tab2 de notre application Tabs. Currently, the photo is replaced each time a new one is taken. Et si nous voulions afficher plusieurs photos ensemble ? Créons une galerie de photos. Vous pouvez suivre le code complet de cette [sur GitHub](https://github.com/ionic-team/photo-gallery-tutorial-ionic4).

## Créer un service photo dédié
Dans une fenêtre de terminal, naviguez vers votre projet Ionic et exécutez :

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

Dans ce fichier, ajoutez une classe Photo. La propriété "data" représente les données d'image base64 d'une photo capturée :

```Javascript
class Photo {
  data: any;
}
```

Ensuite, créez un tableau Photos pour représenter notre galerie de photos :

```Javascript
export class PhotoService {

  public photos: Photo[] = [];

  constructor() { }
}
```

De retour dans `tab2.page.ts`, importez PhotoService :

```Javascript
import { PhotoService } from '../services/photo.service';
```

Ajoutez-le au constructeur :

```Javascript
constructor(private camera: Camera, public photoService: PhotoService) {  }
```

Ensuite, déplacez tout le code se rapportant au plugin Camera vers la classe PhotoService. Cela inclut la méthode takePicture, les importations de Camera et CameraOptions, et le constructeur de page Tab2Page.

En poursuivant, nous devons convertir les références de la variable currentImage en un nouveau tableau de photos. Commencez par ajouter les données des photos capturées dans le tableau des photos :

```Javascript
this.camera.getPicture(options).then((imageData) => {
    // Ajouter une nouvelle photo à la galerie
    this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
    }); }, (err) => {
    // Gérer l'erreur
    console.log("Camera issue: " + err);
});
```

Dans `tab2.page.ts`, supprimez la variable currentImage et la référence à Camera dans le constructeur, ne laissant que PhotoService :

```Javascript
export class Tab2Page {
  constructor(public photoService: PhotoService) {  }
}
```

Ensuite, dans `tab2.page.html`, supprimez la balise img currentImage. À sa place, utilisez un composant ion-grid, qui offre un excellent moyen de disposer les éléments sur une page. Dans ce cas, nous allons l'utiliser pour afficher 2 photos par ligne.

```html
<ion-grid>
  <ion-row>
    <ion-col size="6" *ngFor="let photo of photoService.photos">
      <img [src]="photo.data" />
    </ion-col>
  </ion-row>
</ion-grid>
```

Ici, nous parcourons en boucle chaque photo du tableau PhotoServices photos, en ajoutant une nouvelle colonne pour chacune. Étant donné qu'une rangée d'ions est constituée de 12 "blocs" d'espace, et que nous fixons la taille à 6 (`size="6"`), seules 2 photos sont affichées par rangée.

Enfin, mettez à jour le bouton Fab pour appeler la méthode `takePicture` du PhotoService :

```Html
<ion-fab-button (click)="photoService.takePicture()">
  <ion-icon name="camera"></ion-icon>
</ion-fab-button>
```

Excellent ! We now have a basic photo gallery working.

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

Sweet! Photos are now saved to your device. To demonstrate that they are indeed being saved, force close DevApp, reopen it, and open the Tab2 page.  Or, shake your device to have the Control Menu pop up, then tap “Exit preview.” Afterwards, reload this app to view the photos.

Next up, we’ll look at how to apply a custom theme to an Ionic app.

<div style="text-align:right;">
  <docs-button href="/docs/angular/your-first-app/theming">Continue <svg viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></docs-button>
</div>