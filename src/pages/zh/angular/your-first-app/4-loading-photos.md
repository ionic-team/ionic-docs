---
previousText: 'Saving Photos on Filesystem'
previousUrl: '/docs/angular/your-first-app/3-saving-photos'
nextText: 'Adding Mobile'
nextUrl: '/docs/angular/your-first-app/5-adding-mobile'
---

# 从文件系统中加载图片

我们已经实现拍照并保存的功能， 现在还剩最后一步了：把照片存储后我们需要指定存储的位置，以便他们能够正确的显示在照片库中。

幸运的是，这很容易：我们可以通过调用 [存储 API](https://capacitor.ionicframework.com/docs/apis/storage) 来将我们的数组照片存储在一个密钥值存储器中。

## 存储 API

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