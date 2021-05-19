---
previousText: '在文件系统上加载照片'
previousUrl: '/docs/angular/your-first-app/4-loading-photos'
nextText: '部署移动设备'
nextUrl: '/docs/angular/your-first-app/6-deploying-mobile'
---

# 添加移动版

我们的照片库应用还不能完美运行在iOS、Android和网页中，因为现在所有的照片库都使用了同一个代码。 我们需要改变一些小的逻辑来支持移动平台，安装一些本地工具，就可以在设备上运行这些应用程序了。 让我们开始吧！

## 导入平台 API

让我们开始进行一些小的代码更改-然后，当我们将其部署到设备上时，我们的应用程序将“正常运行”。

将Ionic [平台API ](https://ionicframework.com/docs/angular/platform)导入到` photo.service.ts `中，该信息用于检索有关 当前设备。 在这种情况下，它有助于根据应用程序运行的平台选择要执行的代码 (web 或 mobile):

```typescript
import { Platform } from '@ionic/angular';

export class PhotoService {
  public photos: Photo[] = [];
  private PHOTO_STORAGE: string = "photos";
  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform;
  }

  // 其他代码
}
```

## 平台特定逻辑：

首先，我们将更新照片保存功能以支持移动设备。 在 `readAsBase64()` 函数中，检查应用程序正在运行哪个平台。 如果是“混合型”(Capacitor或Cordova，两个本机运行时)，则使用Filesystem ` readFile()`方法将照片文件读取为base64格式。 否则，在网络上运行应用程序时使用与以前相同的逻辑：

```typescript
private async readAsBase64(cameraPhoto: CameraPhoto) {
  // “hybrid”将检测Cordova或Capacitor
  if (this.platform.is('hybrid')) {
    // 将文件读取为base64格式
    const file = await Filesystem.readFile({
      path: cameraPhoto.path
    });

    return file.data;
  }
  else {
    // 提取照片，读取为blob，然后转换为base64格式
    const response = await fetch(cameraPhoto.webPath);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }
}
```

接下来，更新 `savePicture()` 方法。 在移动设备上运行时，将`filepath`设置为`writeFile()`操作的结果 - `savedFile.uri`。 设置`webviewPath`时，请使用特殊的`Capacitor.convertFileSrc()`方法([详细信息](https://ionicframework.com/docs/core-concepts/webview# file-protocol))。

```typescript
// Save picture to file on device
  private async savePicture(cameraPhoto: CameraPhoto) {
    // Convert photo to base64 format, required by Filesystem API to save
    const base64Data = await this.readAsBase64(cameraPhoto);

    // Write the file to the data directory
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    if (this.platform.is('hybrid')) {
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
        webviewPath: cameraPhoto.webPath
      };
    }
  }
```

接下来，回到我们之前为web实现的` loadSaved()`函数。 在移动设备上，我们可以直接将图像标签的来源 - `<img src="x" />` - 设置为Filesystem上的每个照片文件，并自动显示它们。 因此，只有Web才需要将每个图像从Filesystem中读取为base64格式。 更新此函数以在文件系统代码周围添加<em x-id =“ 4”> if语句</em>：

```typescript
public async loadSaved() {
  // Retrieve cached photo array data
  const photoList = await Storage.get({ key: this.PHOTO_STORAGE });
  this.photos = JSON.parse(photoList.value) || [];

  // Easiest way to detect when running on the web:
  // “when the platform is NOT hybrid, do this”
  if (!this.platform.is('hybrid')) {
    // Display the photo by reading into base64 format
    for (let photo of this.photos) {
      // Read each saved photo's data from the Filesystem
      const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data
      });

      // Web platform only: Load the photo as base64 data
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }
}
```

我们的照片库现在包括一个在web、Android和iOS上运行的代码库。 下一步，您一直在等待的部分 - 将应用程序部署到设备。
