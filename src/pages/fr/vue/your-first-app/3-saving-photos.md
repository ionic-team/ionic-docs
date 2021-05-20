---
previousText: 'Prendre des photos'
previousUrl: '/docs/vue/your-first-app/2-taking-photos'
nextText: 'Chargement des photos sur le système de fichiers'
nextUrl: '/docs/vue/your-first-app/4-loading-photos'
---

# Enregistrement des photos dans le système de fichiers

Nous sommes maintenant en mesure de prendre plusieurs photos et de les afficher dans une galerie de photos dans le deuxième onglet de notre application. Cependant, ces photos ne sont pas stockées de façon permanente, donc lorsque l'application est fermée, elles seront perdues.

## API pour les systèmes de fichiers

Heureusement, les enregistrer dans le système de fichiers ne prend que quelques étapes. Begin by opening the `usePhotoGallery` function (`src/composables/usePhotoGallery.ts`), and get access to the `writeFile` method from the `FileSystem` class:


Ensuite, créez quelques nouvelles fonctions. L'API du système de fichiers exige que les fichiers écrits sur le disque soient transmis sous forme de données en base64. Cette fonction d'aide sera donc utilisée dans un moment pour y remédier :

```typescript
const convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onerror = reject;
  reader.onload = () => {
      resolve(reader.result);
  };
  reader.readAsDataURL(blob);
});
```

Ensuite, ajoutez une fonction pour enregistrer la photo dans le système de fichiers. Nous passons dans l'objet `cameraPhoto`, qui représente la photo de l'appareil nouvellement capturée, ainsi que le fileName, qui fournira un chemin pour le fichier à stocker.

Ensuite, nous utilisons le Capacitor [Filesystem API](https://capacitor.ionicframework.com/docs/apis/filesystem) pour enregistrer la photo dans le système de fichiers. Nous commençons par convertir la photo au format base64, puis nous transmettons les données à la fonction `writeFile` du Filesystem :

```typescript
const savePicture = async (photo: CameraPhoto, fileName: string): Promise<Photo> => {
  let base64Data: string;

  // Fetch the photo, read as a blob, then convert to base64 format
  const response = await fetch(photo.webPath!);
  const blob = await response.blob();
  base64Data = await convertBlobToBase64(blob) as string;

  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data
  });

  // Use webPath to display the new image instead of base64 since it's
  // already loaded into memory
  return {
    filepath: fileName,
    webviewPath: photo.webPath
  };
}
```

Enfin, mettez à jour la fonction `takePhoto` pour appeler `savePicture`. Une fois la photo sauvegardée, insérez-la à l'avant du tableau réactif `photos` :

```typescript
const takePhoto = async () => {
  const cameraPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100
  });

  const fileName = new Date().getTime() + '.jpeg';
  const savedFileImage = await savePicture(cameraPhoto, fileName);

  photos.value = [savedFileImage, ...photos.value];
};
```

Nous y voilà ! Chaque fois qu'une nouvelle photo est prise, elle est maintenant automatiquement enregistrée dans le système de fichiers.
