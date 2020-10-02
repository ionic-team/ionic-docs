---
previousText: 'Salvando fotos no sistema de arquivos'
previousUrl: '/docs/angular/seu-primeiro-app/3-salvando-fotos'
nextText: 'Adicionando pro celular'
nextUrl: 'docs/angular/seu-primeiro-app/5-adicionando-no-mobile'
---

# Carregando fotos do sistema de arquivos

Nós já temos implementado a captura e salvamento de fotos no sistema de arquivos. Falta um último pedaço de funcionalidade: as fotos são armazenadas no sistema de arquivos, mas precisamos de uma forma de salvar ponteiros para cada arquivo para que eles possam ser exibidos novamente na galeria de fotos.

Felizmente, isso é fácil: vamos usar a [API de Armazenamento](https://capacitor.ionicframework.com/docs/apis/storage) do Capacitor para armazenar nossa matriz de Fotos em uma loja chave-valor.

## API de Armazenamento

Begin by defining a constant variable that will act as the key for the store:

```typescript
export class PhotoService {
  public photos: Photo[] = [];
  private PHOTO_STORAGE: string = "photos";

  // other code
}
```

Next, at the end of the `addNewToGallery` function, add a call to `Storage.set()` to save the Photos array. By adding it here, the Photos array is stored each time a new photo is taken. This way, it doesn’t matter when the app user closes or switches to a different app - all photo data is saved.

```typescript
Storage.set({
  key: this.PHOTO_STORAGE,
  value: JSON.stringify(this.photos)
});
```

With the photo array data saved, create a function called `loadSaved()` that can retrieve that data. We use the same key to retrieve the photos array in JSON format, then parse it into an array:

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

After, call this new method in `tab2.page.ts` so that when the user first navigates to Tab 2 (the Photo Gallery), all photos are loaded and displayed on the screen.

```typescript
async ngOnInit() {
  await this.photoService.loadSaved();
}
```

That’s it! We’ve built a complete Photo Gallery feature in our Ionic app that works on the web. Next up, we’ll transform it into a mobile app for iOS and Android!
