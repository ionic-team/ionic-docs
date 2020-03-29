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

首先定义一个常变量作为商店的密钥：

```typescript
export class PhotoService {
  public photos: Photo[] = [];
  private PHOTO_STORAGE: string = "photos";

  // other code
}
```

接下来，在 `addNewToGallery` 函数的末尾，调用 `Storage.set()` 来保存照片数组。 每次拍摄新照片时，都会在这里添加照片。 这样的话，无论是用户关闭应用程序还是切换到另一个应用程序时，所有照片数据都已经保存了。

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

保存照片后，创建一个名为 `loadSaved()` 的能够检索该数据的方法。 然后我们使用同一密钥以JSON格式检索照片阵列，然后解析为数组：

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