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

Here, we loop through each photo in the PhotoServices photos array, adding a new column for each. Since an ion-row consists of 12 “blocks” of space, and we’re setting the size to 6 (`size="6"`), only 2 photos are displayed per row.

Last, update the Fab button to call the PhotoService’s `takePicture` method:

```Html
<ion-fab-button (click)="photoService.takePicture()">
  <ion-icon name="camera"></ion-icon>
</ion-fab-button>
```

Excellent! We now have a basic photo gallery working.

## Saving photos to the device

Having a working photo gallery is pretty cool, but you’ll likely notice that when the app is closed, the photos are lost forever. That’s no good, so let’s add the [Ionic Storage plugin](https://ionicframework.com/docs/storage/), as easy way to store key/value pairs and JSON objects. When running in a native app context, Storage will prioritize using SQLite, one of the most stable and widely used file-based databases. When running on the web or as a Progressive Web App, Storage will attempt to use IndexedDB, WebSQL, and localstorage, in that order.

The Storage plugin works perfectly for our base64 image data. To begin, add the SQLite plugin for native:

```shell
$ ionic cordova plugin add cordova-sqlite-storage
```

Next, add the JavaScript library for the web:

```shell
$ npm install --save @ionic/storage
```

Last, import the Storage module and add it to the imports list in `app.module.ts`:

```Javascript
import { IonicStorageModule } from '@ionic/storage';

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
```

It’s now ready to be used in our PhotoService class. Import it:

```Javascript
import { Storage } from '@ionic/storage';
```

Then inject it via the constructor:

```Javascript
constructor(private camera: Camera, private storage: Storage) { }
```

To add the capability to save photos, there’s only a couple steps left. Update the `takePicture()` method to save the entire photos array after each photo is taken using the storage.set method:

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

We still need to load the saved photos when the app is first opened. This is simple enough - retrieve the “photos” key then assign its value to the photos array:

```Javascript
loadSaved() {
  this.storage.get('photos').then((photos) => {
    this.photos = photos || [];
  });
}
```

Over in the Tab2 page, call the loadSaved method once it begins loading:

```Javascript
ngOnInit() {
  this.photoService.loadSaved();
}
```

Sweet! Photos are now saved to your device. To demonstrate that they are indeed being saved, force close DevApp, reopen it, and open the Tab2 page. Or, shake your device to have the Control Menu pop up, then tap “Exit preview.” Afterwards, reload this app to view the photos.

Next up, we’ll look at how to apply a custom theme to an Ionic app.

<div style="text-align:right;">
  <docs-button href="/docs/angular/your-first-app/theming">Continue <svg viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></docs-button>
</div>
