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

Next, add a `cachePhotos` function that saves the Photos array as JSON to file storage:

```typescript
const cachePhotos = () => {
  Storage.set({
    key: PHOTO_STORAGE,
    value: JSON.stringify(photos.value)
  });
}
```

Next, use the Vue [watch function](https://v3.vuejs.org/guide/composition-api-introduction.html#reacting-to-changes-with-watch) to watch the `photos` array. Whenever the array is modified (in this case, taking or deleting photos), trigger the `cachePhotos` function. Not only do we get to reuse code, but it also doesn’t matter when the app user closes or switches to a different app - photo data is always saved.

```typescript
watch(photos, cachePhotos);
```

Now that the photo array data is saved, create a function to retrieve the data when Tab2 loads. First, retrieve photo data from Storage, then each photo's data into base64 format:

```typescript
const loadSaved = async () => {
  const photoList = await Storage.get({ key: PHOTO_STORAGE });
  const photosInStorage = photoList.value ? JSON.parse(photoList.value) : [];

  for (const photo of photosInStorage) {
    const file = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data
    });
    photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
  }

  photos.value = photosInStorage;
}
```

On mobile (coming up next!), we can directly set the source of an image tag - `<img src="x" />` - to each photo file on the Filesystem, displaying them automatically. On the web, however, we must read each image from the Filesystem into base64 format, because the Filesystem API stores them in base64 within [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) under the hood.

Finally, we need a way to call the `loadSaved` function when the Photo Gallery page is loaded. To do so, use the Vue [mounted lifecycle hook](https://v3.vuejs.org/guide/composition-api-introduction.html#lifecycle-hook-registration-inside-setup). First, import `onMounted` from Vue:

```typescript
import { ref, onMounted, watch } from 'vue';
```

Then, within the `usePhotoGallery` function, add the `onMounted` function and call `loadSaved`:

```typescript
onMounted(loadSaved);
```

That’s it! We’ve built a complete Photo Gallery feature in our Ionic app that works on the web. Next up, we’ll transform it into a mobile app for iOS and Android!
