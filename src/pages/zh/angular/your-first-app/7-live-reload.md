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

实时重载不仅能在浏览器中使用，我们还能在开发IOS和Android应用中用到。 在编写与原生插件交互的代码时，我们必须要在真实设备上运行，以验证这些相关代码是否可以正常运行。 因此，能够快速编码、构建、测试以及发布，对于保持我们的开发效率至关重要。

我们的图库应用还缺少删除功能，现在用实时重载来实现他。 首先选择好平台（iOS或者Android），然后将设备与电脑连接好。 接下来，根据你选择好的平台，在命令行或是终端中运行其中的一条命令：

```shell
$ ionic cap run ios -l --external

$ ionic cap run android -l --external
```

当实时重载服务启动之后，所选平台原生对应的、开发工具将会被自动打开，即便之前没有启动。 在开发工具中，点击启动按钮，应用将会在你的设备中运行。

## 删除照片

实时重载运行后，应用会在你的设备上打开，接下来我们该实现照片的删除功能了。 打开`tab2.page.html`文件，在每个`<ion-img>`标签上添加新的点击事件。 当用户在我们的图库中点击了一张照片，我们会弹出一个[Action Sheet](https://ionicframework.com/docs/api/action-sheet)浮窗，他们可以删除选中的照片或是关闭这个浮窗。

```html
<ion-col size="6" 
    *ngFor="let photo of photoService.photos; index as position">
  <ion-img [src]="photo.webviewPath" 
           (click)="showActionSheet(photo, position)"></ion-img>
</ion-col>
```

在`tab2.page.ts`文件中，我们把Action Sheet导入并添加到构造函数中。

```typescript
import { ActionSheetController } from '@ionic/angular';

constructor(public photoService: PhotoService, 
            public actionSheetController: ActionSheetController) {}

```

Add `Photo` to the import statement.

```typescript
import { Photo, PhotoService } from '../services/photo.service';
```

Next, implement the `showActionSheet()` function. We add two options: `Delete` that calls PhotoService’s `deletePicture()` function (to be added next) and `Cancel`, which when given the role of “cancel” will automatically close the action sheet:

```typescript
public async showActionSheet(photo: Photo, position: number) {
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

In `src/app/services/photo.service.ts`, add the `deletePicture()` function:

```typescript
public async deletePicture(photo: Photo, position: number) {
  // Remove this photo from the Photos reference data array
  this.photos.splice(position, 1);

  // Update photos array cache by overwriting the existing photo array
  Storage.set({
    key: this.PHOTO_STORAGE,
    value: JSON.stringify(this.photos)
  });

  // delete photo file from filesystem
  const filename = photo.filepath
                      .substr(photo.filepath.lastIndexOf('/') + 1);

  await Filesystem.deleteFile({
    path: filename,
    directory: FilesystemDirectory.Data
  });
}
```

The selected photo is removed from the Photos array first. Then, we use the Capacitor Storage API to update the cached version of the Photos array. Finally, we delete the actual photo file itself using the Filesystem API.

Save this file, then tap on a photo again and choose the “Delete” option. This time, the photo is deleted! Implemented much faster using Live Reload. 💪

## 接下来呢？

Congratulations! You built a complete cross-platform Photo Gallery app that runs on the web, iOS, and Android. There are many paths to follow from here. Try adding another [Ionic UI component](https://ionicframework.com/docs/components) to the app, or more [native functionality](https://capacitor.ionicframework.com/docs/apis). The sky’s the limit.

Happy app building! 💙
