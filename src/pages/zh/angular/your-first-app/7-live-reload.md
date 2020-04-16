---
previousText: '部署移动应用'
previousUrl: '/docs/angular/your-first-app/6-deploying-mobile'
nextText: '生命周期'
nextUrl: '/docs/angular/lifecycle'
---

# 利用实时重载进行应用的快速开发

到目前为止，我们了解到开发一款跨平台应用是很容易的。 开发过程十分迅速，不过接下来我要介绍一种能让开发变得更快的方式。

我们可以使用Ionic CLI的实时重载功能来提升我们在开发Ionic应用时的效率。 当激活该选项时，浏览器或是WebView会检测到应用的修改，从而实时刷新并应用最新代码。

## 实时重载

还记得`ionic serve`这条命令吗？ 它可以让实时重载在浏览器中运行，使得我们可以对代码进行快速迭代。

实时重载不仅能在浏览器中使用，我们还能在开发IOS和Android应用中用到。 This is particularly useful when writing code that interacts with native plugins - we must run it on a device to verify that it works. Therefore, being able to quickly write, build, test, and deploy code is crucial to keeping up our development speed.

Let’s use Live Reload to implement photo deletion, the missing piece of our Photo Gallery feature. Select your platform of choice (iOS or Android) and connect a device to your computer. Next, run either command in a terminal, based on your chosen platform:

```shell
$ ionic cap run ios -l --external

$ ionic cap run android -l --external
```

The Live Reload server will start up, and the native IDE of choice will open if not opened already. Within the IDE, click the Play button to launch the app onto your device.

## Deleting Photos

With Live Reload running and the app open on your device, let’s implement photo deletion functionality. Open `tab2.page.html` and add a new click handler to each `<ion-img>` element. When the app user taps on a photo in our gallery, we’ll display an [Action Sheet](https://ionicframework.com/docs/api/action-sheet) dialog with the option to either delete the selected photo or cancel (close) the dialog.

```html
<ion-col size="6" 
    *ngFor="let photo of photoService.photos; index as position">
  <ion-img src="{{ photo.base64 ? photo.base64 : photo.webviewPath }}" 
           (click)="showActionSheet(photo, position)"></ion-img>
</ion-col>
```

Over in `tab2.page.ts`, import Action Sheet and add it to the constructor:

```typescript
import { ActionSheetController } from '@ionic/angular';

constructor(public photoService: PhotoService, 
            public actionSheetController: ActionSheetController) {}
```

Next, implement the `showActionSheet()` function. We add two options: `Delete` that calls PhotoService’s `deletePicture()` function (to be added next) and `Cancel`, which when given the role of “cancel” will automatically close the action sheet:

```typescript
public async showActionSheet(photo, position) {
  const actionSheet = await this.actionSheetController.create({
    header: 'Photos',
    buttons: [{
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        this.photoService.deletePicture(photo, position);
      }
    }, {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        // Nothing to do, action sheet is automatically closed
        }
    }]
  });
  await actionSheet.present();
}
```

Save both of the files we just edited. The Photo Gallery app will reload automatically, and now when we tap on one of the photos in the gallery, the action sheet displays. Tapping “Delete” doesn’t do anything yet, so head back into your code editor.

在`src/app/services/photo.service.ts`里面，我们将`deletePicture()`函数添加进去：

```typescript
public async deletePicture(photo: Photo, position: number) {
  // 从保存照片的数组中移除一条照片记录
  this.photos.splice(position, 1);

  // 通过修改照片数组数据更新缓存
  Storage.set({
    key: this.PHOTO_STORAGE,
    value: JSON.stringify(this.photos)
  });

  // 从文件系统中删除照片
  const filename = photo.filepath
                      .substr(photo.filepath.lastIndexOf('/') + 1);

  await Filesystem.deleteFile({
    path: filename,
    directory: FilesystemDirectory.Data
  });
}

```

这张选中的照片从数组首位被移除， 然后我们使用永久存储API将被操作后的数组缓存起来。 最后，我们使用文件系统API物理删除了照片。

保存此文件，然后再次点击照片并选择“删除”选项。 此时，这张照片就被删除了。 通过使用实时重载，让这一切都更快实现了。 💪

## 接下来呢？

祝贺您！ 你已经构建了一个可以同时在web、iOS以及Android上跨平台运行的图库应用。 这里提供了一些其他路径。 试试在你的应用中添加其他的[Ionic UI 组件](https://ionicframework.com/docs/components), 或者是 [原生功能](https://capacitor.ionicframework.com/docs/apis)， 利用他们，您可以创造出无限可能。

祝您编码愉快！ 💙
