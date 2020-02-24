---
previousText: 'Saving Photos on Filesystem'
previousUrl: '/docs/angular/your-first-app/3-saving-photos'
nextText: 'Adding Mobile'
nextUrl: '/docs/angular/your-first-app/5-adding-mobile'
---

# Enregistrement des photos dans le système de fichiers

Nous avons implémenté la prise de photos et l'enregistrement sur le système de fichiers. Il y a une dernière fonctionnalité manquante : les photos sont stockées dans le système de fichiers, mais nous avons besoin d'un moyen d'enregistrer des pointeurs vers chaque fichier afin qu'ils puissent être affichés à nouveau dans la galerie de photos.

Heureusement, c'est facile : nous allons mettre à profit le [Storage API](https://capacitor.ionicframework.com/docs/apis/storage) de Capacitor pour stocker notre tableau de photos dans un tableau clé/valeur.

## Storage API

Commencez par définir une variable constante qui servira de clé pour le tableau :

```typescript
export class PhotoService {
  photos publiques : Photo[] = [];
  private PHOTO_STORAGE: string = "photos";

  // autre code
}
```

Next, at the end of the `addNewToGallery` function, add a call to `Storage.set()` to save the Photos array. By adding it here, the Photos array is stored each time a new photo is taken. This way, it doesn’t matter when the app user closes or switches to a different app - all photo data is saved.

```typescript
Storage.set({
  key: this.PHOTO_STORAGE,
  value: JSON.stringify(this.photos.map(p => {
          // Don't save the base64 representation of the photo data, 
          // since it's already saved on the Filesystem
          const photoCopy = { ...p };
          delete photoCopy.base64;

          return photoCopy;
          }))
});
```

With the photo array data saved, create a function called `loadSaved()` that can retrieve that data. We use the same key to retrieve the photos array in JSON format, then parse it into an array:

```typescript
public async loadSaved() {
  // Retrieve cached photo array data
  const photos = await Storage.get({ key: this.PHOTO_STORAGE });
  this.photos = JSON.parse(photos.value) || [];

  // more to come...
}
```

On mobile (coming up next!), we can directly set the source of an image tag - `<img src=”x” />` - to each photo file on the Filesystem, displaying them automatically. On the web, however, we must read each image from the Filesystem into base64 format, using a new `base64` property on the `Photo` object. This is because the Filesystem API uses [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) under the hood. Below the code you just added in the `loadSaved()` function, add:

```typescript
// Display the photo by reading into base64 format
for (let photo of this.photos) {
  // Read each saved photo's data from the Filesystem
  const readFile = await Filesystem.readFile({
      path: photo.filepath,
      directory: FilesystemDirectory.Data
  });

  // Web platform only: Save the photo into the base64 field
  photo.base64 = `data:image/jpeg;base64,${readFile.data}`;
}
```

After, call this new method in `tab2.page.ts` so that when the user first navigates to Tab 2 (the Photo Gallery), all photos are loaded and displayed on the screen.

```typescript
ngOnInit() {
  this.photoService.loadSaved();
}
```

That’s it! We’ve built a complete Photo Gallery feature in our Ionic app that works on the web. Next up, we’ll transform it into a mobile app for iOS and Android!