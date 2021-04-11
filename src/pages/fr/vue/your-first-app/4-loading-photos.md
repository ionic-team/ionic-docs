---
previousText: 'Sauvegarde des photos sur le système de fichiers'
previousUrl: '/docs/vue/your-first-app/3-saving-photos'
nextText: 'Ajout d''un Mobile'
nextUrl: '/docs/vue/your-first-app/5-adding-mobile'
---

# Chargement des photos à partir du système de fichiers

Nous avons implémenté la prise de photos et l'enregistrement sur le système de fichiers. Il manque une dernière fonctionnalité : les photos sont stockées dans le système de fichiers, mais nous avons besoin d'un moyen de sauvegarder les pointeurs vers chaque fichier afin de pouvoir les afficher à nouveau dans la galerie de photos.

Heureusement, c'est facile : nous allons exploiter l'API de stockage de Capacitor [Storage API](https://capacitor.ionicframework.com/docs/apis/storage) pour stocker notre tableau de photos dans un magasin clé-valeur.

## API de stockage

Commencez par définir une variable constante qui servira de clé pour le magasin en haut de la fonction `usePhotoGallery` dans `src/composables/usePhotoGallery.ts` :

```typescript
const PHOTO_STORAGE = "photos";
```

Ensuite, importez l'API de stockage pour avoir accès aux méthodes de lecture et d'écriture sur le stockage de l'appareil :

```typescript
export function usePhotoGallery() {
  const { Camera, Filesystem, Storage } = Plugins;
  const photos = ref<Photo[]>([]);
  const PHOTO_STORAGE = "photos";
```

Ensuite, ajoutez une fonction `cachePhotos` qui enregistre le tableau Photos en JSON dans le stockage de fichiers:

```typescript
const cachePhotos = () => {
  Storage.set({
    key: PHOTO_STORAGE,
    value: JSON.stringify(photos.value)
  });
}
```

Ensuite, utilisez la fonction Vue [watch](https://v3.vuejs.org/guide/composition-api-introduction.html#reacting-to-changes-with-watch) pour observer le tableau `photos`. Chaque fois que le tableau est modifié (dans ce cas, prise ou suppression de photos), déclenchez la fonction `cachePhotos`. Non seulement nous pouvons réutiliser le code, mais il importe peu que l'utilisateur de l'application la ferme ou passe à une autre application : les données des photos sont toujours sauvegardées.

```typescript
watch(photos, cachePhotos);
```

Maintenant que les données du tableau photo sont sauvegardées, créez une fonction pour récupérer les données lorsque Tab2 se charge. Tout d'abord, récupérer les données de la photo depuis la mémoire de stockage, puis les données de chaque photo au format base64 :

```typescript
const loadSaved = async () => {
  const photoList = await Storage.get({ key: PHOTO_STORAGE });
  const photosInStorage = photoList.value ? JSON.parse(photoList.value) : [];

  for (const photo of photosInStorage) {
    const file = await Filesystem.readFile({
        path: photo.filepath,
        directory: FilesystemDirectory.Data
    });
    photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
  }

  photos.value = photosInStorage;
}
```

Sur mobile (à venir !), nous pouvons directement définir la source d'une balise image - `<img src="x" />` - à chaque fichier photo du Filesystem, les affichant automatiquement. Sur le web, cependant, nous devons lire chaque image du Filesystem au format base64, car l'API Filesystem les stocke en base64 dans [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) sous le capot.

Enfin, nous avons besoin d'un moyen d'appeler la fonction `loadSaved` lorsque la page de la galerie de photos est chargée. Pour ce faire, utilisez le crochet Vue [mounted lifecycle hook](https://v3.vuejs.org/guide/composition-api-introduction.html#lifecycle-hook-registration-inside-setup). Tout d'abord, importez `onMounted` de Vue:

```typescript
import { ref, onMounted, watch } from 'vue';
```

Ensuite, dans la fonction `usePhotoGallery`, ajoutez la fonction `onMounted` et appelez `loadSaved` :

```typescript
onMounted(loadSaved);
```

C'est fait! Nous avons créé une fonctionnalité complète de la Galerie de photos dans notre application Ionic qui fonctionne sur le Web. Ensuite, nous le transformerons en une application mobile pour iOS et Android !
