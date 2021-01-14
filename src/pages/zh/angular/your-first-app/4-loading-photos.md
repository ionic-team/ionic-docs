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
  value: this.photos')
});
```

保存照片后，创建一个名为 `loadSaved()` 的能够检索该数据的方法。 然后我们使用同一密钥以JSON格式检索照片阵列，然后解析为数组：

```typescript
public async loadSaved() {
  // 检索缓存的照片阵列数据
  const photos = await Storage.get({ key: this.PHOTO_STORAGE });
  this.photos = JSON.parse(photos.value) || [];

  // 还有更多...
}
```

接下来在手机上, 我们可以直接将图像标签- `<img src="x" />` - 的源设置为文件系统上的每个照片文件，并自动显示它们。 但在网上，我们必须从文件系统读取每张图像到base64格式。 在` Photo `对象上使用新的` base64 `属性。 这是因为文件系统 API 使用了 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)。 在你刚刚在 `loadSaved()` 函数中添加的代码下，添加：

```typescript
// 通过读取为base64格式显示照片
for (let photo of this.photos) {
  // 从文件系统读取每张保存的照片数据
  const readFile = await Filesystem.readFile({
      path: photo.filepath,
      directory: FilesystemDirectory.Data
  });

  // 仅限Web平台：将照片保存到base64字段中
  photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
}
```

然后在` tab2.page.ts `中调用此新方法，以便当用户首次导航至选项卡2 (照片库)时，所有照片均被加载并显示在屏幕上。

```typescript
ngOnInit() {
  this.photoService.loadSaved();
}
```

就是这样！ 我们已经在web上运行的Ionic应用程序中建立了完整的Photo Gallery功能。 下一步，我们将把它变成iOS和Android移动应用！
