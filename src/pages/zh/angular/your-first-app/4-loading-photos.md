---
previousText: '保存照片到文件系统中'
previousUrl: '/docs/angular/your-first-app/3-saving-photos'
nextText: '添加移动版'
nextUrl: '/docs/angular/your-first app/5-adding-mobile'
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

  // 其他代码
}
```

接下来，在 `addNewToGallery` 函数的末尾，调用 `Storage.set()` 来保存照片数组。 每次拍摄新照片时，都会在这里添加照片。 这样的话，无论是用户关闭应用程序还是切换到另一个应用程序时，所有照片数据都已经保存了。

```typescript
Storage.set({
  key: this.PHOTO_STORAGE,
  value: JSON.stringify(this.photos)
});
```

保存照片后，创建一个名为 `loadSaved()` 的能够检索该数据的方法。 然后我们使用同一密钥以JSON格式检索照片阵列，然后解析为数组：

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

然后在` tab2.page.ts `中调用此新方法，以便当用户首次导航至选项卡2 (照片库)时，所有照片均被加载并显示在屏幕上。

```typescript
async ngOnInit() {
  await this.photoService.loadSaved();
}
```

就是这样！ 我们已经在web上运行的Ionic应用程序中建立了完整的Photo Gallery功能。 下一步，我们将把它变成iOS和Android移动应用！
