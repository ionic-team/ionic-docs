---
previousText: 'Votre première application'
previousUrl: '/docs/vue/your-first-app'
nextText: 'Sauvegarde des photos sur le système de fichiers'
nextUrl: '/docs/vue/your-first-app/3-saving-photos'
---

# Prendre des photos avec la caméra

Passons maintenant à la partie amusante : ajouter la possibilité de prendre des photos avec l'appareil photo de l'appareil en utilisant l'API Capacitor [Camera API](https://capacitor.ionicframework.com/docs/apis/camera). Nous commencerons par le construire pour le web, puis nous apporterons quelques petites modifications pour le faire fonctionner sur mobile (iOS et Android).

Pour ce faire, nous allons créer une fonction de composition autonome associée à l'API de composition de Vue pour gérer les photos de la galerie.

> Si vous n'êtes pas familier avec l'API de composition de Vue, [Why Composition API?](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api) de la doc officielle de Vue est une bonne ressource pour commencer.

Créez un nouveau fichier à `src/composables/usePhotoGallery.ts` et ouvrez-le.

Nous allons commencer par importer les différents utilitaires que nous utiliserons depuis Vue core et Capacitor:

```typescript
import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem'
import { Storage } from '@capacitor/storage'

```

Ensuite, créez une fonction nommée usePhotoGallery:

```typescript
export function usePhotoGallery() {

  const takePhoto = async () => {
    const cameraPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  };

  return {
    takePhoto
  };
}
```

Notre fonction `usePhotoGallery` expose une méthode appelée takePhoto, qui appelle à son tour la méthode `getPhoto` de l'API de caméra Capacitor.

Remarquez la magie ici: il n'y a pas de code spécifique à la plateforme (web, iOS, ou Android)! Le plugin Capacitor Camera fait abstraction de cela pour nous, laissant un seul appel de méthode - `getPhoto()` - qui ouvrira l'appareil photo de l'appareil et nous permettra de prendre des photos.

La dernière étape que nous devons faire est d'utiliser la nouvelle fonction de la page Tab2. Retournez à Tab2.vue et importez-le :

```typescript
import { usePhotoGallery } from '@/composables/usePhotoGallery';
```

Ensuite, dans l'exportation par défaut, ajoutez une méthode d'installation, qui fait partie de l'API [Composition API](https://v3.vuejs.org/guide/composition-api-setup.html#setup). Déstructure la fonction `takePhoto` de `usePhotoGallery`, puis la retourne :

```typescript
<script lang="ts">
import { camera, trash, close } from 'ionicons/icons';
import { IonPage, IonHeader, IonFab, IonFabButton, IonIcon,
         IonToolbar, IonTitle, IonContent, IonGrid, IonRow,
         IonCol, IonImg } from '@ionic/vue';
import { usePhotoGallery } from '@/composables/usePhotoGallery';

export default  {
  name: 'Tab2',
  components: { IonPage, IonHeader, IonFab, IonFabButton, IonIcon,
         IonToolbar, IonTitle, IonContent, IonGrid, IonRow,
         IonCol, IonImg },
  setup() {
    const { takePhoto } = usePhotoGallery();

    return {
      takePhoto,
      camera, trash, close
    }
  }
}
</script>
```

Sauvegardez le fichier, et si ce n'est pas déjà fait, redémarrez le serveur de développement dans votre navigateur en exécutant `ionic serve`. Dans l’onglet Galerie de photos, cliquez sur le bouton Caméra. Si votre ordinateur possède une webcam de quelque nature que ce soit, une fenêtre modale apparaît. Prendre un selfie!

![API de caméra sur le web](/docs/assets/img/guides/first-app-cap-ng/camera-web.png)

_(Votre selfie est probablement bien meilleur que le mien)_

Après avoir pris une photo, elle disparaît immédiatement. Nous devons encore l'afficher dans notre application et l'enregistrer pour un accès ultérieur.

## Affichage des photos

Nous allons d'abord créer un nouveau type pour définir notre photo, qui contiendra des métadonnées spécifiques. Ajoutez l'interface Photo suivante au fichier `usePhotoGallery.ts`, quelque part en dehors de la fonction principale :

```typescript
export interface Photo {
  filepath: string;
  webviewPath?: string;
}
```

En haut de la fonction (juste après avoir référencé le plugin Capacitor Camera), définissez un tableau afin de pouvoir stocker chaque photo capturée avec l'appareil photo. Faites-en une variable réactive à l'aide de la fonction [ref de Vue](https://v3.vuejs.org/guide/composition-api-introduction.html#reactive-variables-with-ref).

```typescript
const photos = ref<Photo[]>([]);
```

Lorsque l'appareil photo a fini de prendre une photo, le `CameraPhoto` résultant retourné par Capacitor sera ajouté au tableau `photos`. Mettez à jour la méthode `takePhoto` , en ajoutant ce code après la ligne `Camera.getPhoto`:

```typescript
const fileName = new Date().getTime() + '.jpeg';
const savedFileImage = {
  filepath: fileName,
  webviewPath: cameraPhoto.webPath
};

photos.value = [savedFileImage, ...photos.value];
```

Ensuite, mettez à jour l'instruction de retour pour inclure le tableau photos :

```typescript
return {
  photos,
  takePhoto
};
```

De retour dans le composant Tab2, mettez à jour l'instruction d'importation pour inclure l'interface `Photo`:

```typescript
import { usePhotoGallery, Photo } from '@/composables/usePhotoGallery';
```

Ensuite, accédez au tableau des photos :

```typescript
const { photos, takePhoto } = usePhotoGallery();
```

Enfin, ajoutez `photos` au retour de `setup()` :

```typescript
return {
  photos,
  takePhoto,
  camera, trash, close
}
```

Une fois la ou les photo(s) stockées dans le tableau principal, nous pouvons maintenant afficher les images à l'écran. Ajoutez un [Grid component](https://ionicframework.com/docs/api/grid) afin que chaque photo s'affiche joliment au fur et à mesure qu'elle est ajoutée à la galerie, et parcourez en boucle chaque photo dans le tableau Photos, en ajoutant un composant Image (`<ion-img>`) pour chacune. Pointez le `src` (source) sur le chemin de la photo :

```typescript
<ion-content>
  <ion-grid>
    <ion-row>
      <ion-col size="6" :key="photo" v-for="photo in photos">
        <ion-img :src="photo.webviewPath"></ion-img>
      </ion-col>
    </ion-row>
  </ion-grid>

  <!-- <ion-fab> markup  -->
</ion-content>
```

Sauvegarder tous les fichiers. Dans le navigateur Web, cliquez sur le bouton Appareil photo et prenez une autre photo. Cette fois, la photo est affichée dans la galerie de photos !

Ensuite, nous ajouterons la prise en charge de l'enregistrement des photos dans le système de fichiers, afin qu'elles puissent être récupérées et affichées dans notre application à un moment ultérieur.
