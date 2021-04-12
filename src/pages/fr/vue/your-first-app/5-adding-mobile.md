---
previousText: 'Chargement des photos sur le système de fichiers'
previousUrl: '/docs/vue/your-first-app/4-loading-photos'
nextText: 'Déploiement du mobile'
nextUrl: '/docs/vue/your-first-app/6-deploying-mobile'
---

# Ajouter un mobile

Notre application de galerie de photos ne sera pas complète tant qu'elle ne fonctionnera pas sur iOS, Android et le web - le tout en utilisant une base de code. Il suffit de quelques petites modifications logiques pour prendre en charge les plateformes mobiles, d'installer des outils natifs, puis d'exécuter l'application sur un appareil. C'est parti !

Let’s start with making some small code changes - then our app will "just work" when we deploy it to a device.

## Logique spécifique à la plate-forme

Tout d’abord, nous mettrons à jour la fonctionnalité d’enregistrement de photos pour prendre en charge le mobile. Nous exécuterons un code légèrement différent en fonction de la plateforme - mobile ou web. Importer l'API `Platform` depuis Ionic Vue:

```typescript
import { isPlatform } from '@ionic/vue';
```

Dans la fonction `savePicture`, vérifiez sur quelle plateforme l'application fonctionne. Si c'est "hybride" (Capacitor, le runtime natif), alors lisez le fichier photo au format base64 en utilisant la méthode `readFile`. Vous pouvez également renvoyer le chemin d'accès complet au fichier de la photo à l'aide de l'API Système de fichiers. Lors de la définition du `webviewPath`, utilisez la méthode spéciale `Capacitor.convertFileSrc` ([détails ici](https://capacitorjs.com/docs/basics/utilities#convertfilesrc)). Sinon, utilisez la même logique que précédemment pour exécuter l'application sur le Web.

```typescript
const savePicture = async (photo: CameraPhoto, fileName: string): Promise<Photo> => {
  let base64Data: string;
  // "hybride" détectera le mobile - iOS ou Android
  if (isPlatform('hybrid')) {
    const file = await Filesystem.readFile({
      path: photo.path!
    });
    base64Data = file.data;
  } else {
    // Récupère la photo, la lit comme un blob, puis la convertit au format base64.
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    base64Data = await convertBlobToBase64(blob) as string;
  }
  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: FilesystemDirectory.Data
  });

  if (isPlatform('hybrid')) {
    // Affichez la nouvelle image en réécrivant le chemin 'file://' en HTTP.
    // Détails : https://ionicframework.com/docs/building/webview#file-protocol
    return {
      filepath: savedFile.uri,
      webviewPath: Capacitor.convertFileSrc(savedFile.uri),
    };
  }
  else {
      // Utiliser webPath pour afficher la nouvelle image au lieu de base64 puisqu'elle est 
    // déjà chargée en mémoire
    return {
      filepath: fileName,
      webviewPath: photo.webPath
    };
  }
};
```

Ensuite, ajoutez un nouveau bout de logique dans la fonction `loadSaved`. Sur le mobile, nous pouvons pointer directement sur chaque fichier photo dans le système de fichiers et les afficher automatiquement. Sur le web, cependant, nous devons lire chaque image du système de fichiers au format base64. Cela est dû au fait que l'API du système de fichiers utilise [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) sous le capot. Mise à jour de la fonction `loadSaved` :

```typescript
const loadSaved = async () => {
  const photoList = await Storage.get({ key: PHOTO_STORAGE });
  const photosInStorage = photoList.value ? JSON.parse(photoList.value) : [];

  // Si l'on fonctionne sur le web...
  if (!isPlatform('hybrid')) {
    for (const photo of photosInStorage) {
      const file = await Filesystem.readFile({
        path: photo.filepath,
        directory: FilesystemDirectory.Data
      });
      // Plate-forme Web uniquement : Chargez la photo en tant que données base64
      photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
    }
  }

  photos.value = photosInStorage;
}
```

Notre galerie de photos est désormais constituée d'une seule base de code qui fonctionne sur le web, Android et iOS. Ensuite, la partie que vous attendiez - déployer l'application sur un appareil.
