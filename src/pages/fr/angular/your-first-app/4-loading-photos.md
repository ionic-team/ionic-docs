---
previousText: 'Saving Photos on Filesystem'
previousUrl: '/docs/angular/your-first-app/3-saving-photos'
nextText: 'Ajout d''un Mobile'
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

Avec le tableau de photos enregistré, créez une fonction appelée `loadSaved()` qui peut récupérer ces données. Nous utilisons la même clé pour récupérer le tableau de photos au format JSON, puis nous l'analysons dans un tableau :

```typescript
public async loadSaved() {
  // Récupérer les données du tableau des photos mises en cache
  const photoList = await Storage.get({ key: this.PHOTO_STORAGE });
  this.photos = JSON.parse(photoList.value) || [];

  // plus à venir...
}
```

Sur mobile (à venir !), nous pouvons directement définir la source d'une balise image - `<img src="x" />` - à chaque fichier photo du Filesystem, les affichant automatiquement. Sur le web, cependant, nous devons lire chaque image du Filesystem au format base64, en utilisant une nouvelle propriété `base64` sur l'objet `Photo`. Cela est dû au fait que l'API du système de fichiers utilise [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) sous le capot. Voici le code que vous devez ajouter dans la fonction `loadSaved()` que vous venez d'ajouter :

```typescript
// Afficher la photo en la lisant au format base64
for (let photo of this.photos) {
  // Lire les données de chaque photo sauvegardée à partir du système de fichiers.
  const readFile = await Filesystem.readFile({
      path: photo.filepath,
      directory: FilesystemDirectory.Data
  });

  // Plate-forme Web uniquement : Charger la photo en tant que données base64
  photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
}
```

Ensuite, appelez cette nouvelle méthode dans l'onglet `2.page. s` de sorte que lorsque l'utilisateur navigue pour la première fois à l'onglet 2 (la Galerie Photo), toutes les photos sont chargées et affichées à l'écran.

```typescript
async ngOnInit() {
  await this.photoService.loadSaved();
}
```

C'est fait! Nous avons créé une fonctionnalité complète de la Galerie de photos dans notre application Ionic qui fonctionne sur le Web. Ensuite, nous le transformerons en une application mobile pour iOS et Android !
