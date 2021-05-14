---
previousText: '你的第一个 APP'
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

接下来，定义一个新的类方法，`addNewToGallery`，该方法将包含获取设备照片并将其保存到文件系统的核心逻辑。 我们得从调用设备的相机开始：

```typescript
public async addNewToGallery() {
  // 拍一张照片
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri, 
    source: CameraSource.Camera, 
    quality: 100 
  });
}
```

我们注意到这里的神奇之处：代码中没有出现跟平台有关的代码（web、iOS或是安卓）。 Capacitor相机插件为我们抽象出了相关函数，而我们只需要调用`Camera.getPhoto()`便可以开始使用设备的拍照功能。

接着，打开`tab2.page.ts`导入PhotoService类，并在导入的类中添加一个调用 `addNewToGallery`的方法：

```typescript
import { PhotoService } from '../services/photo.service';

constructor(public photoService: PhotoService) { }

addPhotoToGallery() {
  this.photoService.addNewToGallery();
}
```

然后，打开`tab2.page.html` ，当FAB按钮被点击时调用`addPhotoToGallery()`。

```html
<ion-content>
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button (click)="addPhotoToGallery()">
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

保存文件，如果服务还没有运行的话，可以通过`ionic serve`命令运行服务。 在图库标签页里边，点击一下相机按钮。 如果你的电脑有任何类型的摄像头，就会弹出一个窗口。 给自己来张自拍试试吧！

![相机API](/docs/assets/img/guides/first-app-cap-ng/camera-web.png)

_（你的自怕可能会比我好看很多）_

拍摄完成之后，这张照片会立即消失。 我们需要在应用中保存这张照片，以便我们以后查看。

## 展示照片

在`PhotoService`文件里的最底部并且类的外边，创建一个名为`Photo`的interface，用于存放我们的照片数据：

```typescript
// 导出接口照片
export interface Photo{
  filepath: string;
  webviewPath: string;
}
```

回到文件的顶部，定义一个照片数组，其中包含每张照片的拍摄信息。

```typescript
export class PhotoService {
  public photos: Photo[] = [];

  // 其他代码
}
```

在`addNewToGallery`函数中，将新拍摄的照片放在数组的首位。

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

接下来，移动到 `tab2.page.html` ，以便我们可以在屏幕上显示图像。 在页面上添加一个[网格组件](https://ionicframework.com/docs/api/grid)，以便每张照片都能很好地展示。通过数组的循环，我们为每张照片加上一个图片组件（`<ion-img>`）。 给`src`（源）指定照片的路径：

```html
<ion-content>
  <ion-grid>
    <ion-row>
    <ion-col size="6" 
      *ngFor="let photo of photoService.photos; index as position">
        <ion-img [src]="photo.webviewPath"></ion-img>
    </ion-col>
    </ion-row>
  </ion-grid><!-- ion-fab 标记  --></ion-content>
```

保存好我们编辑的所有文件， 在网页浏览器中，点击相机按钮开始拍照。 这一次，照片被显示在了图库里面。

下一步，我们要给应用添加一个能将照片保存在文件系统里面的功能，这样照片就能够在应用中检索以及显示了。
