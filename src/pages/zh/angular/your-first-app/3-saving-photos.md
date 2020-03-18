---
previousText: 'Taking Photos'
previousUrl: '/docs/angular/your-first-app/2-taking-photos'
nextText: 'Loading Photos on Filesystem'
nextUrl: '/docs/angular/your-first-app/4-loading-photos'
---

# 保存照片到文件系统

我们现在可以拍摄多张照片，并且在我们应用程序第二个选项卡上的照片库中显示它们。 然而， 目前并未永久存储，因此在关闭应用程序时，它们将会被删除。

## Filesystem API

幸运的是，将它们保存到文件系统只需要几个步骤。 首先，在 `PhotoService` (`src/app/services/photo.service.ts`) 类中创建一个新函数 `savePicture()` 。 我们传入 `cameraPhoto` 对象，该对象代表新捕获的设备照片：

```typescript
private async savePicture(cameraPhoto: CameraPhoto) { }
```

我们可以在 `addNewToGallery()` 中立即使用这个新函数：

```typescript
public async addNewToGallery() {
  // Take a photo 拍照
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri, // file-based data; provides best performance
    source: CameraSource.Camera, // automatically take a new photo with the camera 用相机自动拍摄新照片
    quality: 100 // highest quality (0 to 100)  图片质量
  });

  // Save the picture and add it to photo collection  保存图片并将其添加到照片集
  const savedImageFile = await this.savePicture(capturedPhoto);
  this.photos.unshift(savedImageFile);
}
```

我们将使用 Capacitor [Filesystem API](https://capacitor.ionicframework.com/docs/apis/filesystem) 将照片保存到文件系统中。 首先，将照片转换为 base64 格式，然后将数据输入文件系统的 ` writeFile ` 函数。 最后，调用 getPhotoFile (我们稍后将实现此方法)，该方法返回一个Photo对象。

```typescript
private async savePicture(cameraPhoto: CameraPhoto) {
  // Convert photo to base64 format, required by Filesystem API to save
  const base64Data = await this.readAsBase64(cameraPhoto);

  // Write the file to the data directory
  const fileName = new Date().getTime() + '.jpeg';
  await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: FilesystemDirectory.Data
  });

  // Get platform-specific photo filepaths
  return await this.getPhotoFile(cameraPhoto, fileName);
}
```

`readAsBase64()` 和 `getPhotoFile()` 是我们接下来要定义的两个帮助函数。 由于它们需要少量的特定于平台的内容（Web 与 移动）逻辑，因此将它们划分为单独的方法-对此进行了更多介绍。  现在，实现它们在 Web 上的运行：

```typescript
private async readAsBase64(cameraPhoto: CameraPhoto) {
  // Fetch the photo, read as a blob, then convert to base64 format
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

在 web 上以 base64 格式获取相机照片似乎比在移动设备上更为棘手。 实际上，我们只需使用内置 web APIs: [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 一种将文件读取为Blob格式的简洁方法，然后使用 FileReader 的 [ readAsDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL) 将Blob格式照片转换为base64格式。

` getPhotoFile()`简单得多。 As you’ll recall, we display each photo on the screen by setting each image’s source path (`src` attribute) in `tab2.page.html` to the webviewPath property. 因此，它在这里设置：

```typescript
private async getPhotoFile(cameraPhoto: CameraPhoto, 
                           fileName: string): Promise<Photo> {
  return {
    filepath: fileName,
    webviewPath: cameraPhoto.webPath
  };
}
```

Finally, change the way pictures become visible in the template file `tab2.page.html`.
```html
<ion-img src="{{ photo.base64 ? photo.base64 : photo.webviewPath }}"></ion-img>
```

There we go! Each time a new photo is taken, it’s now automatically saved to the filesystem.
