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
    // Fetch the photo, read as a blob, then convert to base64 format
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
    // Display the new image by rewriting the 'file://' path to HTTP
    // Details: https://ionicframework.com/docs/building/webview#file-protocol
    return {
      filepath: savedFile.uri,
      webviewPath: Capacitor.convertFileSrc(savedFile.uri),
    };
  }
  else {
    // Use webPath to display the new image instead of base64 since it's 
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: photo.webPath
    };
  }
};
```

Next, add a new bit of logic in the `loadSaved` function. On mobile, we can directly point to each photo file on the Filesystem and display them automatically. On the web, however, we must read each image from the Filesystem into base64 format. This is because the Filesystem API uses [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) under the hood. Update the `loadSaved` function:

```typescript
const loadSaved = async () => {
  const photoList = await Storage.get({ key: PHOTO_STORAGE });
  const photosInStorage = photoList.value ? JSON.parse(photoList.value) : [];

  // If running on the web...
  if (!isPlatform('hybrid')) {
    for (const photo of photosInStorage) {
      const file = await Filesystem.readFile({
        path: photo.filepath,
        directory: FilesystemDirectory.Data
      });
      // Web platform only: Load the photo as base64 data
      photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
    }
  }

  photos.value = photosInStorage;
}
```

Our Photo Gallery now consists of one codebase that runs on the web, Android, and iOS. Next up, the part you’ve been waiting for - deploying the app to a device.
