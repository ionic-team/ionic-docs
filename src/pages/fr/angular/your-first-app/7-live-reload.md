---
previousText: 'Deploying Mobile'
previousUrl: '/docs/angular/your-first-app/6-deploying-mobile'
nextText: 'Lifecycle'
nextUrl: '/docs/angular/lifecycle'
---

# Développement rapide des applications avec Rechargement en Direct

Jusqu'à présent, nous avons vu à quel point il est facile de développer une application multi-plateforme qui fonctionne partout. L'expérience de développement est assez rapide, mais que se passerait-il si je vous disais qu'il y avait un moyen d'aller plus vite?

Nous pouvons utiliser la [fonctionnalité Live Reload de Ionic CLI](https://ionicframework.com/docs/cli/livereload) pour améliorer notre productivité lors de la construction d'applications Ionic. Lorsque cette option est activée, Rechargement en direct rechargera le navigateur et/ou WebView lorsque les modifications de l'application sont détectées.

## Recharge en direct

Vous vous souvenez de `service ionique`? C’était Live Reload qui travaillait dans le navigateur, nous permettant d’itérer rapidement.

Nous pouvons également l'utiliser lors du développement sur les appareils iOS et Android. Ceci est particulièrement utile lors de l'écriture de code qui interagit avec les plugins natifs - nous devons l'exécuter sur un appareil pour vérifier que cela fonctionne. Par conséquent, il est crucial de pouvoir écrire rapidement, construire, tester et déployer du code rapidement pour maintenir notre vitesse de développement.

Nous allons utiliser Live Reload pour implémenter la suppression de photos, la pièce manquante de notre fonctionnalité de Galerie de Photos. Sélectionnez votre plateforme de choix (iOS ou Android) et connectez un périphérique à votre ordinateur. Ensuite, exécutez l'une ou l'autre des commandes dans un terminal, basé sur la plateforme que vous avez choisie :

```shell
$ ionic cap run ios -l --external

$ ionic cap run android -l --external
```

Le serveur Live Reload va démarrer, et l'IDE natif de choix s'ouvrira s'il n'est pas déjà ouvert. Dans l'IDE, cliquez sur le bouton Play pour lancer l'application sur votre appareil.

## Effacement des photos

Avec Live Reload en cours d'exécution et l'application s'ouvre sur votre appareil, implémentons la fonctionnalité de suppression de photos. Ouvrez `tab2.page.html` et ajoutez un nouveau gestionnaire de clic à chaque élément `<ion-img>`. Lorsque l'utilisateur de l'application clique sur une photo dans notre galerie, nous afficherons une boîte de dialogue [Feuille d'Action](https://ionicframework.com/docs/api/action-sheet) avec l'option de supprimer la photo sélectionnée ou d'annuler (fermer) la boîte de dialogue.

```html
<ion-col size="6" 
    *ngFor="let photo of photoService.photos; index as position">
  <ion-img [src]="photo.webviewPath" 
           (click)="showActionSheet(photo, position)"></ion-img>
</ion-col>
```

Over in `tab2.page.ts`, import Action Sheet and add it to the constructor:

```typescript
import { ActionSheetController } from '@ionic/angular';

constructor(public photoService: PhotoService, 
            public actionSheetController: ActionSheetController) {}
```

Next, implement the `showActionSheet()` function. We add two options: `Delete` that calls PhotoService’s `deletePicture()` function (to be added next) and `Cancel`, which when given the role of “cancel” will automatically close the action sheet:

```typescript
public async showActionSheet(photo: Photo, position: number) {
  const actionSheet = await this.actionSheetController.create({
    header: 'Photos',
    buttons: [{
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        this.photoService.deletePicture(photo, position);
      }
    }, {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        // Nothing to do, action sheet is automatically closed
        }
    }]
  });
  await actionSheet.present();
}
```

Enregistrez les deux fichiers que nous venons de modifier. L'application Galerie de photos se rechargera automatiquement, et maintenant que nous appuyons sur l'une des photos de la galerie, la feuille d'action s'affiche. Taper sur « Supprimer» ne fait rien pour le moment, alors revenez dans votre éditeur de code.

Dans `src/app/services/photo.service.ts`, ajoutez la fonction `deletePicture()`:

```typescript
public async deletePicture(photo: Photo, position: number) {
  // Remove this photo from the Photos reference data array
  this.photos.splice(position, 1);

  // Update photos array cache by overwriting the existing photo array
  Storage.set({
    key: this.PHOTO_STORAGE,
    value: JSON.stringify(this.photos)
  });

  // delete photo file from filesystem
  const filename = photo.filepath
                      .substr(photo.filepath.lastIndexOf('/') + 1);

  await Filesystem.deleteFile({
    path: filename,
    directory: FilesystemDirectory.Data
  });
}
```

La photo sélectionnée est retirée du tableau Photos. Ensuite, nous utilisons l'API Capacitor Storage pour mettre à jour la version mise en cache du tableau Photos. Enfin, nous supprimons le fichier photo lui-même en utilisant l'API du système de fichiers.

Enregistrez ce fichier, puis appuyez à nouveau sur une photo et choisissez l'option "Supprimer". Cette fois-ci, la photo est supprimée! Implémenté beaucoup plus rapidement en utilisant Live Reload. 💪

## Et ensuite ?

Félicitations ! Vous avez construit une application de Photo Gallery multi-plateforme qui fonctionne sur le web, iOS et Android. Il y a beaucoup de chemins à suivre à partir d'ici. Essayez d'ajouter un autre [composant Ionic UI](https://ionicframework.com/docs/components) à l'application, ou plus de [fonctionnalités natives](https://capacitor.ionicframework.com/docs/apis). Le ciel est la limite.

Bonne construction d'application! 💙
