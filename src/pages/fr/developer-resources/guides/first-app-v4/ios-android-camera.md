---
previousText: 'Votre première application Ionic'
previousUrl: '/docs/developer-resources/guides/first-app-v4/your-first-app'
nextText: 'Création d''une galerie de photos'
nextUrl: '/docs/developer-resources/guides/first-app-v4/creating-photo-gallery-device-storage'
---

# Android, iOS, et la caméra - Oh My!

Auparavant, nous avions une application Ionic qui fonctionnait localement dans un navigateur web. Maintenant, mettons-le sur ton appareil iOS ou Android, puis commençons à construire la fonctionnalité de galerie de photos.

## Ajouter des plateformes iOS et Android Cordova

Ionic tire parti du projet open source [Cordova](https://cordova.apache.org/docs/en/latest/guide/overview/) pour fournir un support matériel natif. Nous commençons par ajouter les plateformes iOS et Android __ puis nous ajouterons des _plugins spécifiques_ comme la Caméra ensuite:

```shell
$ ionic cordova platform add ios
$ ionic cordova platform add android
```

Ces commandes vont créer un fichier `config.xml` qui est utilisé pour définir les paramètres de Cordova iOS et Android. Cordova lit ce fichier et applique chaque paramètre comme il construit chaque binaire d'application native.

Il existe d'autres étapes pour configurer [iOS](/docs/developing/ios) et [Android](/docs/developing/android) l'outillage natif.



Beaucoup mieux! Maintenant nous pouvons ajouter la fonctionnalité de caméra. À propos, vous pouvez trouver le code de référence de cette [sur GitHub](https://github.com/ionic-team/photo-gallery-tutorial-ionic4).

De retour dans `tab2.page.html`, ajoutez ce qui suit :

```html
<ion-content>
<img>

<ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button>
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
</ion-fab>
</ion-content>
```

Enregistrez le fichier et regardez - un bouton de caméra apparaît ! Tapez dessus et remarquez qu'il ne fait rien. Réparons ça ensuite.

## Ajouter les Dépendances de la Caméra via la CLI

Afin d'utiliser la Caméra, nous devons introduire ses dépendances JavaScript et natives de la bibliothèque. Retourner dans votre fenêtre de terminal, exécuter la commande suivante, qui ajoute la bibliothèque JavaScript au projet, exposant ainsi l'API de la caméra dans le code TypeScript :

```shell
$ npm install @ionic-native/camera
```

Dans `package.json`, vous remarquerez qu'une nouvelle dépendance JavaScript a été ajoutée, avec un numéro de version similaire à ce qui suit :

`"@ionic-native/camera": "^5.4.0"`

Ensuite, exécutez cette commande pour ajouter le code natif iOS et Android, permettant ainsi à la caméra de fonctionner sur un appareil mobile. Pour plus d'informations sur comment cela fonctionne, lisez les pages [Cordova](https://cordova.apache.org/docs/en/latest/guide/overview/) et [Ionic Native](https://ionicframework.com/docs/native).

```shell
$ ionic cordova plugin add cordova-plugin-camera
```

Le fichier `config.xml` est maintenant mis à jour avec une entrée similaire à ce qui suit pour le code de caméra native:

```xml
<plugin name="cordova-plugin-camera" spec="^4.0.3" />
```

L'étape suivante n'est requise que pour les utilisateurs d'iOS. Depuis iOS 10, les développeurs doivent fournir une raison pour laquelle l'application souhaite accéder à la caméra de l'appareil. Ajoutez ceci à l'intérieur de la section de la plateforme ios (<platform name="ios"></platform>) de `config.xml` :

```xml
<!-- Required for iOS 10: Camera permission prompt -->
<edit-config file="*-Info.plist" mode="merge" target="NSCameraUsageDescription">
    <string>Used to take pictures</string>
</edit-config>
```

## Ajouter un plugin de caméra au module d'application Angular

Il nous reste une étape à franchir, puisqu'il s'agit d'un projet Angular : enregistrer la caméra dans le module de l'application (`src/app/app.module.ts`). Tout d'abord, importez le module Caméra :

```Javascript
import { Camera } from '@ionic-native/camera/ngx';
```

Ensuite, ajoutez-le en tant que fournisseur :

```Javascript
providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
```

Il peut maintenant être utilisé sur n'importe laquelle de nos pages d'application.

## Ajouter la caméra à la page de la galerie

Notre bouton appareil photo ne fait rien pour le moment. Plus dans `tab2.page.html`, ajoutez un gestionnaire de clics au bouton:

```html
<ion-fab vertical="bottom" horizontal="center" slot="fixed">
  <ion-fab-button (click)="takePicture()">
    <ion-icon name="camera"></ion-icon>
  </ion-fab-button>
</ion-fab>
```

Ensuite, mettez à jour l'emplacement de l'image. Ce qui suit lie la variable "currentImage" (sur laquelle nous travaillerons ensuite) à l'image à afficher à l'utilisateur.

```html
<img [src]="currentImage" *ngIf="currentImage">
```

Ouvrez ensuite `tab2.page.ts` et importez la bibliothèque Camera :

```Javascript
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
```

Ensuite, définissez la variable “currentImage” et injectez la Caméra dans cette classe via le constructeur:

```Javascript
export class Tab2Page {
  currentImage: any;

  constructor(private camera: Camera) { }
}
```

Enfin, ajoutez la méthode "takePicture" dans `tab2.page.ts`. Il est déjà branché pour être exécuté une fois que le bouton de la caméra a été cliqué :

```Javascript
export class Tab2Page {
  currentImage: any;

  constructor(private camera: Camera) { }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Gérer l'erreur
      console.log("Camera issue:" + err);
    });
  }
}
```

Prenez note : il n’y a aucune mention d’iOS ou d’Android ! C'est la puissance géniale des plugins: vous utilisez une API (`caméra. etPicture()` dans ce cas) et le plugin s'occupe des différences de plate-forme pour vous. Écrivez une fois, publiez partout. 😀

Enregistrez ce fichier puis appuyez sur le bouton Appareil photo dans DevApp. Voila! La caméra devrait s'ouvrir sur votre appareil. Une fois la photo prise, elle s'affiche sur la page Galerie de photos.

Ensuite, nous allons examiner comment transformer l'application en une galerie de photos, ainsi que comment enregistrer les photos sur votre appareil!
