---
previousText: '你的第一个应用'
previousUrl: '/docs/angular/your-first-app'
nextText: '保存照片到文件系统中'
nextUrl: '/docs/angular/your-first-app/3-saving-photos'
---

# 用相机拍照

接下来是有趣的部分，使用Capacitor的[相机API](https://capacitor.ionicframework.com/docs/apis/camera)调用设备的相机，为你的应用添加拍照功能。 我们将从web上开始构建，随后做一些小的调整，使其能在移动设备（iOS和Android）上面运行。

## 照片服务

我们将会把所有有关Capacitor的业务（包括相机的使用以及其他原生特性）封装在一个服务类里面， 使用 `ionic generate` 命令创建 `照片服务`：

```bash
$ ionic g service services/photo
```

打开新创建的`services/photo.service.ts`文件，然后开始为它添加相机相关的功能。 首先，我们导入Capacitor相关依赖，并获取相机、文件系统以及存储插件的引用：

```typescript
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
         CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;
```

接下来，定义一个新函数，`addNewToGallery`，用它来做拍照并保存到文件系统的核心逻辑。 我们得从调用设备的相机开始：

```typescript
public async addNewToGallery() {
  // 拍照
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri, 
    source: CameraSource.Camera, 
    quality: 100 
  });
}
```

我们注意到这里的神奇之处：代码中没有出现跟平台有关的代码（web、iOS或是安卓）。 Capacitor相机插件为我们抽象出了相关函数，而我们只需要调用`Camera.getPhoto()`便可以开始使用设备的拍照功能。

下一步，打开`tab2.page.ts`文件，并导入PhotoService类：

```typescript
import { PhotoService } from '../services/photo.service';

constructor(public photoService: PhotoService) { }
```

然后打开`tab2.page.html`文件，当标签被点击的时候调用`addNewToGallery()`函数：

```html
<ion-content>
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button (click)="photoService.addNewToGallery()">
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

保存文件，如果服务还没有运行的话，可以通过`ionic serve`命令运行服务。 在图库标签页里边，点击一下相机按钮。 如果你的电脑有任何类型的摄像头，就会弹出一个窗口。 给自己来张自拍试试吧！

![Camera API on the web](/docs/assets/img/guides/first-app-cap-ng/camera-web.png)

_（你的自怕可能会比我好看很多）_

After taking a photo, it disappears right away. We need to display it within our app and save it for future access.

## Displaying Photos

Outside of the `PhotoService` class definition (the very bottom of the file), create a new interface, `Photo`, to hold our photo metadata:

```typescript
interface Photo {
  filepath: string;
  webviewPath: string;
  base64?: string;
}
```

Back at the top of the file, define an array of Photos, which will contain a reference to each photo captured with the Camera.

```typescript
export class PhotoService {
  public photos: Photo[] = [];

  // other code
}
```

Over in the `addNewToGallery` function, add the newly captured photo to the beginning of the Photos array.

```typescript
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri, 
    source: CameraSource.Camera, 
    quality: 100 
  });

  this.photos.unshift({
    filepath: "soon...",
    webviewPath: capturedPhoto.webPath
  });
}
```

With the photo(s) stored into the main array, move over to `tab2.page.html` so we can display the image on the screen. Add a [Grid component](https://ionicframework.com/docs/api/grid) so that each photo will display nicely as photos are added to the gallery, and loop through each photo in the Photos array, adding an Image component (`<ion-img>`) for each. Point the `src` (source) at the photo’s path:

```html
<ion-content>
  <ion-grid>
    <ion-row>
    <ion-col size="6" 
      *ngFor="let photo of photoService.photos; index as position">
        <ion-img src="{{ photo.webviewPath }}"></ion-img>
    </ion-col>
    </ion-row>
  </ion-grid>

  <!-- ion-fab markup  -->
</ion-content>
```

Save all files. Within the web browser, click the Camera button and take another photo. This time, the photo is displayed in the Photo Gallery!

Up next, we’ll add support for saving the photos to the filesystem, so they can be retrieved and displayed in our app at a later time.
