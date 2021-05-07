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

Excellent ! Nous avons maintenant une galerie de photos de base qui fonctionne.

## Enregistrement des photos sur l'appareil

Disposer d'une galerie de photos fonctionnelle est plutôt cool, mais vous remarquerez sans doute que lorsque l'application est fermée, les photos sont perdues à jamais. Ce n'est pas bon, alors ajoutons le [ plugin Ionic Storage](https://ionicframework.com/docs/storage/), comme moyen facile de stocker des paires clé/valeur et des objets JSON. Lorsqu'il est exécuté dans le contexte d'une application native, Storage utilisera en priorité SQLite, l'une des bases de données basées sur des fichiers les plus stables et les plus utilisées. Lors de l'exécution sur le web ou en tant que Progressive Web App, Storage tentera d'utiliser IndexedDB, WebSQL et localstorage, dans cet ordre.

Le plugin Storage fonctionne parfaitement pour nos données d'image en base64. Pour commencer, ajoutez le plugin SQLite pour natif :

```shell
$ ionic cordova plugin add cordova-sqlite-storage
```

Ensuite, ajoutez la bibliothèque JavaScript pour le web:

```shell
$ npm install --save @ionic/storage
```

Enfin, importez le module Storage et ajoutez-le à la liste des importations dans `app.module.ts` :

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

Il est maintenant prêt à être utilisé dans notre classe PhotoService. Importez-le :

```Javascript
import { Storage } from '@ionic/storage-angular';
```

Puis l'injecter via le constructeur :

```Javascript
constructor(private camera: Camera, private storage: Storage) { }
```

Pour ajouter la possibilité d'enregistrer des photos, il ne reste que quelques étapes à franchir. Mettez à jour la méthode `takePicture()` pour sauvegarder l'ensemble du tableau de photos après la prise de chaque photo à l'aide de la méthode storage.set :

```Javascript
this.camera.getPicture(options).then((imageData) => {
  // Ajouter une nouvelle photo à la galerie
  this.photos.unshift({
    data: 'data:image/jpeg;base64,' + imageData
  });

  // Enregistrez toutes les photos pour les consulter plus tard
  this.storage.set('photos', this.photos);
}, (err) => {
  // Gérer l'erreur
  console.log("Camera issue: " + err);
});
```

Nous devons encore charger les photos enregistrées lors de la première ouverture de l'application. C'est assez simple - récupérer la clé "photos" puis affecter sa valeur au tableau des photos :

```Javascript
loadSaved() {
  this.storage.get('photos').then((photos) => {
    this.photos = photos || [];
  });
}
```

Dans la page Tab2, appelez la méthode loadSaved dès que le chargement commence :

```Javascript
ngOnInit() {
  this.photoService.loadSaved();
}
```

Super! Les photos sont maintenant enregistrées sur votre appareil. Pour démontrer qu'ils sont effectivement enregistrés, forcez la fermeture de DevApp, rouvrez le et ouvrez la page Tab2.  Ou bien, secouez votre appareil pour faire apparaître le menu de contrôle, puis appuyez sur "Quitter l'aperçu". Ensuite, rechargez cette application pour voir les photos.

Ensuite, nous allons voir comment appliquer un thème personnalisé à une application Ionic.

<div style="text-align:right;">
  <docs-button href="/docs/angular/your-first-app/theming">Continuer <svg viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></docs-button>
</div>