---
previousText: '拍照'
previousUrl: '/docs/angular/your-first-app/2-taking-photos'
nextText: '利用文件系统加载照片'
nextUrl: '/docs/angular/your-first-app/4-loading-photos'
---

# 保存照片到文件系统

在应用程序中，我们已经可以拍摄多张照片。并且在第二个标签页的图库中显示它们。不足的是，现在我们还无法进行永久存储，因此在关闭应用程序时，它们都会被删除。

## 文件系统 API

幸运的是，将它们保存到文件系统只需要几个步骤。 首先，在 `PhotoService`类 (`src/app/services/photo.service.ts`) 中新建一个函数`savePicture()`。 我们将相机拍摄到的照片传入到`cameraPhoto`对象中：

```typescript
private async savePicture(cameraPhoto: CameraPhoto) { }
```

我们可以在`addNewToGallery()`中立即调用刚刚才创建的函数：

```typescript
public async addNewToGallery() {
  // 拍照
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri, // 基于文件数据，提供最好的性能
    source: CameraSource.Camera, // 默认使用拍照功能
    quality: 100 // 清晰度最高 (0 to 100)
  });

  // 保存图片并将其添加到照片集
  const savedImageFile = await this.savePicture(capturedPhoto);
  this.photos.unshift(savedImageFile);
}
```

我们将使用Capacitor[文件系统API](https://capacitor.ionicframework.com/docs/apis/filesystem) 将其保存到文件系统中。 首先，将照片转换为base64格式，然后使用`writeFile`函数将其保存起来。 你得记得，我们在`tab2.page.html`文件里，为每张显示的图片源路径（`src`属性）都设置了一个webviewPath的参数， 所以我们要返回一个照片的对象。

```typescript
private async savePicture(cameraPhoto: CameraPhoto) {
  // 要将照片转成base64格式，必须要通过文件系统保存
  const base64Data = await this.readAsBase64(cameraPhoto);

  // 在数据文件夹中写入数据
  const fileName = new Date().getTime() + '.jpeg';
  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: FilesystemDirectory.Data
  });

  // 用webPath去显示图片，而不是用base64，因为base64需要在内存里加载
  return {
    filepath: fileName,
    webviewPath: cameraPhoto.webPath
  };
}
```

接下来我们要定义一个很有用的函数`readAsBase64()`。 我们把他抽取成一个单独的方法，因为它的兼容性很不错（web、 移动）。 现在该实现在web上运行的业务：

```typescript
private async readAsBase64(cameraPhoto: CameraPhoto) {
  // 取得照片之后，将其读取成二进制大对象，然后转换成base64格式
  const response = await fetch(cameraPhoto.webPath!);
  const blob = await response.blob();

  return await this.convertBlobToBase64(blob) as string;  
}

convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
  const reader = new FileReader;
  reader.onerror = reject;
  reader.onload = () => {
      resolve(reader.result);
  };
  reader.readAsDataURL(blob);
});
```

在web上想要获取照片的base64格式数据比在移动端上更复杂一下。 实际上，我们只需使用内置 web APIs: [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 一种将文件读取为Blob格式的简洁方法，然后使用 FileReader 的 [ readAsDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL) 将Blob格式照片转换为base64格式。

最后，我们在模板文件`tab2.page.html`中修改图片的显示方式。

```html
<ion-img src="{{ photo.base64 ? photo.base64 : photo.webviewPath }}"></ion-img>
```

到此为止， 我们已经实现每次拍照就能自动保存在文件系统中了。
