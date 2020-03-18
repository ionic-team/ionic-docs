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

我们将使用 Capacitor [Filesystem API](https://capacitor.ionicframework.com/docs/apis/filesystem) 将照片保存到文件系统中。 首先，将照片转换为 base64 格式，然后将数据输入文件系统的 ` writeFile ` 函数。 Finally, make a call to getPhotoFile (which we will implement in a moment), which returns a Photo object.

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

`readAsBase64()` and `getPhotoFile()` are two helper functions we’ll define next. They are split into separate methods because they require a small amount of platform-specific (web vs. mobile) logic - more on that in a bit.  For now, implement them for running on the web:

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

Obtaining the camera photo as base64 format on the web appears to be a bit trickier than on mobile. In reality, we’re just using built-in web APIs: [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) as a neat way to read the file into blob format, then FileReader’s [readAsDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL) to convert the photo blob to base64.

`getPhotoFile()` is much simpler. As you’ll recall, we display each photo on the screen by setting each image’s source path (`src` attribute) in `tab2.page.html` to the webviewPath property. So, it gets set here:

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
