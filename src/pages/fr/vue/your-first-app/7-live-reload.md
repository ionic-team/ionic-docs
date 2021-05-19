---
previousText: 'Déploiement du mobile'
previousUrl: '/docs/vue/your-first-app/6-deploying-mobile'
nextText: 'Cycle de Vie'
nextUrl: '/docs/vue/lifecycle'
---

# Développement rapide d'applications avec Live Reload

Jusqu'à présent, nous avons vu à quel point il est facile de développer une application multi-plateforme qui fonctionne partout. L'expérience de développement est assez rapide, mais que se passerait-il si je vous disais qu'il y avait un moyen d'aller plus vite?

Nous pouvons utiliser la fonctionnalité [Live Reload](https://ionicframework.com/docs/cli/livereload) de Ionic CLI pour augmenter notre productivité lors de la construction d'applications Ionic. Lorsqu'il est actif, Live Reload rechargera le navigateur et/ou le WebView lorsque des changements sont détectés dans l'application.

## Recharge en direct

Vous vous souvenez de `service ionique`? C’était Live Reload qui travaillait dans le navigateur, nous permettant d’itérer rapidement.

Nous pouvons également l'utiliser lors du développement sur les appareils iOS et Android. Ceci est particulièrement utile pour écrire du code qui interagit avec des plugins natifs. Étant donné que nous devons exécuter le code du plugin natif sur un appareil afin de vérifier qu'il fonctionne, il est essentiel de disposer d'un moyen d'écrire rapidement le code, de le construire et de le déployer, puis de le tester pour maintenir la vitesse de notre développement.

Utilisons Live Reload pour mettre en œuvre la suppression des photos, la pièce manquante de notre fonctionnalité de galerie de photos. Sélectionnez la plate-forme de votre choix (iOS ou Android) et connectez un appareil à votre ordinateur. Ensuite, exécutez l'une ou l'autre commande dans un terminal, en fonction de la plate-forme choisie :

```shell
$ ionic cap run ios -l --external

$ ionic cap run android -l --external
```

Le serveur Live Reload démarre et l'IDE natif de votre choix s'ouvre s'il n'est pas déjà ouvert. Dans l'IDE, cliquez sur le bouton Play pour lancer l'application sur votre appareil.

## Suppression de photos

Lorsque Live Reload est en cours d'exécution et que l'application est ouverte sur votre appareil, mettons en œuvre la fonctionnalité de suppression des photos. Ouvrez `Tab2.vue` puis importez le `actionSheetController`. Nous allons afficher une [Fiche d'action](https://ionicframework.com/docs/api/action-sheet) avec la possibilité de supprimer une photo :

```typescript
import { actionSheetController, IonPage, IonHeader, IonFab, IonFabButton,
         IonIcon, IonToolbar, IonTitle, IonContent, IonImg, IonGrid,
         IonRow, IonCol } from '@ionic/vue';
// other imports
```

Ensuite, référencez la fonction `deletePhoto`, que nous allons créer prochainement :

```typescript
setup() {}
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();
}
```

Lorsqu'un utilisateur clique/touche sur une image, nous affichons la feuille d'action. Ajouter un gestionnaire de clic à l'élément `<ion-img>`:

```html
<ion-img :src="photo.webviewPath" @click="showActionSheet(photo)"></ion-img>
```

Ensuite, dans `setup()`, appelez la fonction `create` pour ouvrir un dialogue avec l'option de supprimer la photo sélectionnée ou d'annuler (fermer) le dialogue :

```typescript
const showActionSheet = async (photo: Photo) => {
  const actionSheet = await actionSheetController.create({
    header: 'Photos',
    buttons: [{
      text: 'Delete',
      role: 'destructive',
      icon: trash,
      handler: () => {
        deletePhoto(photo);
    }}, {
      text: 'Cancel',
      icon: close,
      role: 'cancel',
      handler: () => {
        // Rien à faire, la feuille d'action est automatiquement fermée.
      }
    }]
  });
  await actionSheet.present();
}
```

Ensuite, renvoie la fonction `showActionSheet`:

```typescript
return {
  photos,
  takePhoto,
  showActionSheet,
  camera, trash, close
}
```

Ensuite, nous devons implémenter la méthode `deletePhoto` dans la fonction `usePhotoGallery`. Ouvrez le fichier puis ajoutez:

```typescript
const deletePhoto = async (photo: Photo) => {
  // Remove this photo from the Photos reference data array
  photos.value = photos.value.filter(p => p.filepath !== photo.filepath);

  // delete photo file from filesystem
  const filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);
  await Filesystem.deleteFile({
    path: filename,
    directory: Directory.Data
  });
};
```

La photo sélectionnée est d'abord retirée du tableau `photos`, puis nous supprimons le fichier photo en utilisant l'API Filesystem.

Rappelez-vous que la suppression de la photo du tableau `photos` déclenche pour nous automatiquement la fonction `cachePhotos` :

```typescript
const cachePhotos = () => {
  Storage.set({
    key: PHOTO_STORAGE,
    value: JSON.stringify(photos.value)
  });
}

watch(photos, cachePhotos);
```

Enfin, renvoie la fonction `deletePhoto`:

```typescript
return {
  photos,
  takePhoto,
  deletePhoto
};
```

Enregistrez ce fichier, puis appuyez à nouveau sur une photo et choisissez l'option "Supprimer". Cette fois-ci, la photo est supprimée! Mise en œuvre beaucoup plus rapide en utilisant Live Reload. 💪

## Quelle est la prochaine étape ?

Félicitations ! Vous avez créé une application complète de galerie de photos multiplateforme qui fonctionne sur le web, iOS et Android.

Il y a de nombreux chemins à suivre à partir de là. Essayez d'ajouter un autre [composant Ionic UI](https://ionicframework.com/docs/components) à l'application, ou plus de [fonctionnalités natives](https://capacitor.ionicframework.com/docs/apis). Le ciel est la limite.

Bonne construction d'applications ! 💙
