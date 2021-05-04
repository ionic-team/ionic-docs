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
  public photos : Photo[] = [];
  private PHOTO_STORAGE: string = "photos";

  // autre code
}
```

Ensuite, à la fin de la fonction `addNewToGallery` , ajoutez un appel à `Storage.set()` pour enregistrer le tableau Photos. En l'ajoutant ici, le tableau Photos est stocké chaque fois qu'une nouvelle photo est prise. De cette façon, peu importe si l'utilisateur de l'application ferme ou passe à une autre application, toutes les données photo sont enregistrées.

```typescript
Storage.set({
  key: this.PHOTO_STORAGE,
  value: JSON.stringify(this.photos)
});
```

Avec le tableau de photos enregistré, créez une fonction appelée `loadSaved()` qui peut récupérer ces données. We use the same key to retrieve the photos array in JSON format, then parse it into an array:

```typescript
public async loadSaved() {
  // Retrieve cached photo array data
  const photoList = await Storage.get({ key: this.PHOTO_STORAGE });
  this.photos = JSON.parse(photoList.value) || [];

  // more to come...
}
```

On mobile (coming up next!), we can directly set the source of an image tag - `<img src="x" />` - to each photo file on the Filesystem, displaying them automatically. On the web, however, we must read each image from the Filesystem into base64 format, using a new `base64` property on the `Photo` object. This is because the Filesystem API uses [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) under the hood. Below is the code you need to add in the `loadSaved()` function you just added:

```typescript
// Display the photo by reading into base64 format
for (let photo of this.photos) {
  // Read each saved photo's data from the Filesystem
  const readFile = await Filesystem.readFile({
      path: photo.filepath,
      directory: FilesystemDirectory.Data
  });

  // Web platform only: Load the photo as base64 data
  photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
}
```

Ensuite, appelez cette nouvelle méthode dans l'onglet `2.page. s` de sorte que lorsque l'utilisateur navigue pour la première fois à l'onglet 2 (la Galerie Photo), toutes les photos sont chargées et affichées à l'écran.

```typescript
async ngOnInit() {
  await this.photoService.loadSaved();
}
```

That’s it! Nous avons créé une fonctionnalité complète de la Galerie de photos dans notre application Ionic qui fonctionne sur le Web. Ensuite, nous le transformerons en une application mobile pour iOS et Android !
