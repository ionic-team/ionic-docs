---
previousText: 'Android, iOS相机'
previousUrl: '/docs/angular/your-first-app/ios-android-camera'
nextText: '主题'
nextUrl: '/docs/angular/your-first-app/theming'
contributors:
  - jsonMartin
---

# 用设备储存创建一个图片库

最后，我们成功地将Camera插件添加到我们的标签页的Tab2 页。目前，每当拍摄一个新的照片时，该照片将被替换。 如果我们想要一起显示多个照片，我们怎么办？ 让我们创建一个照片库。 您可以按照[在 GitHub](https://github.com/ionic-team/photo-gallery-tutorial-ionic4)上的完整代码进行操作 。

## 创建专用Photo Service

从终端窗口，导航到您的 Ionic 项目并运行：

```shell
$ ionic g service services/Photo
```

这将在专用的“services”文件夹中创建一个PhotoService类:

```Javascript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor() { }
}
```

在此文件内添加Photo类。 “data”属性表示捕获的照片的base64格式的图像数据:

```Javascript
class Photo {
  data: any;
}
```

然后，创建一个Photos数组来代表我们的照片库：

```Javascript
export class PhotoService {

  public photos: Photo[] = [];

  constructor() { }
}
```

返回 `tab2.page.ts`, 导入PhotoService:

```Javascript
import { PhotoService } from '../services/photo.service';
```

将其添加到Constructor：

```Javascript
constructor(private camera: Camera, public photoService: PhotoService) {  }
```

下一步，将Camera插件的所有代码移动到 PhotoService 类。 这包括takePicture方法、Camera和CameraOptions导入以及Tab2Page页面构造函数。

继续，我们需要将currentImage变量引用转换为新的photos数组。 开始，将捕获的照片数据添加到photos数组里：

```Javascript
this.camera.getPicture(options).then((imageData) => {
    // Add new photo to gallery
    this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
    }); }, (err) => {
    // Handle error
    console.log("Camera issue: " + err);
});
```

在 `tab2.page.ts`, 移除 the currentImage 变量以及构造函数中对Camera的引用, 只留下 PhotoService:

```Javascript
下一步， <code>tab2.page.html</code>，移除当前图像标签。
```，移除当前图像标签。
</code>

下一步， `tab2.page.html`，移除当前图像标签。 取而代之的是使用一个ion-grid组件，它提供了在页面上排列元素的好方法。 在这种情况下，我们将使用它来显示每行2张照片。

```html
<ion-grid>
  <ion-row>
    <ion-col size="6" *ngFor="let photo of photoService.photos">
      <img [src]="photo.data" />
    </ion-col>
  </ion-row>
</ion-grid>
```

在这里，我们循环遍历PhotoServices photos数组中的每张照片，为每张照片添加一个新列。 因为一个ion-row包含12个“blocks”空间，我们将大小设置为6 (`size="6"`)，所以每一行只显示2张照片。

最后，更新Fab按钮调用PhotoService的`takePicture`方法:

```Html
<ion-fab-button (click)="photoService.takePicture()">
  <ion-icon name="camera"></ion-icon>
</ion-fab-button>
```

非常好！ 我们现在有一个基本可用的photo gallery。

## 保存照片到设备

拥有一个可用的photo gallery非常酷，但你可能会注意到，当应用程序关闭时，这些照片将永远丢失。 这样不行，所以让我们添加[Ionic Storage 插件](https://ionicframework.com/docs/storage/)，作为存储键/值对和JSON对象的简单方法。 当在本机应用程序上下文中运行时，Storage将优先使用SQLite，SQLite是最稳定和使用最广泛的基于文件的数据库之一。 当运行在web上或渐进的web应用程序时，Storage将尝试按照IndexedDB、WebSQL和localstorage这个顺序使用。

Storage插件对于base64图像数据非常有效。 首先，为native添加SQLite插件:

```shell
$ ionic cordova plugin add cordova-sqlite-storage
```

下面，添加 JavaScript 库：

```shell
$ npm install --save @ionic/storage
```

最后，导入Storage模块，并将其添加到`app.module.ts`的imports列表中:`</p>

<pre><code class="Javascript">import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
`</pre> 

现在可以在PhotoService类中使用了。 导入它：

```Javascript
import { Storage } from '@ionic/storage-angular';
```

然后通过构造函数注入它：

```Javascript
constructor(private camera: Camera, private storage: Storage) { }
```

要添加保存照片的能力，只剩下几个步骤。 更新`takePicture()` 方法，以便在拍摄每张照片后使用storage.set方法保存整个照片数组：

```Javascript
this.camera.getPicture(options).then((imageData) => {
  // Add new photo to gallery
  this.photos.unshift({
    data: 'data:image/jpeg;base64,' + imageData
  });

  // Save all photos for later viewing
  this.storage.set('photos', this.photos);
}, (err) => {
  // Handle error
  console.log("Camera issue: " + err);
});
```

当应用程序首次打开时，我们仍然需要加载已保存的照片。 这足够简单 - 检索“photos”键，然后将其值分配给照片数组：

```Javascript
loadSaved() {
  this.storage.get('photos').then((photos) => {
    this.photos = photos || [];
  });
}
```

在Tab2页面中，当开始加载时，调用loadSaved方法：

```Javascript
ngOnInit() {
  this.photoService.loadSaved();
}
```

好极了！ 照片现在已保存到您的设备。 为了证明它们确实已经保存，强制关闭 DevApp，重新打开它，打开Tab2 页。 或者，摇动你的设备，弹出控制菜单，然后点击“Exit preview”。然后，重新加载这个应用程序来查看照片。

接下来，我们将研究如何将自定义主题应用于Ionic 应用程序。

<div style="text-align:right;">
  <docs-button href="/docs/angular/your-first-app/theming">继续 <svg viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></docs-button>
</div>
