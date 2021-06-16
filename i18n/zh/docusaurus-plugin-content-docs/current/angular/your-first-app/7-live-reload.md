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

在导入语句中添加 `Photo`

```typescript
import { Photo, PhotoService } from '../services/photo.service';
```

接下来，实现`showActionSheet()`函数。 我们往ActionSheet里面添加两个选项：`Delete`和`Cancel`，`Delete`选项可以调用照片服务的`deletePicture()`函数（我们后面要添加的功能），当按钮的`role`属性被赋值为"cancel"时，它将具有能关闭ActionSheet的功能。

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
        // 不处理任何逻辑，Action Sheet会自动关闭
        }
    }]
  });
  await actionSheet.present();
}
```

保存好我们刚刚编辑的那两个文件后， 应用将自动刷新，现在我们在图库的照片上面单击，Action Sheet按照预期显示了出来。 点击“Delete”选项之后，并没有触发任何效果，所以再回到编辑器中。

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

祝贺您！ 你已经构建了一个可以同时在web、iOS以及Android上跨平台运行的图库应用。 这里提供了一些其他路径。 试试在你的应用中添加其他的[Ionic UI 组件](https://ionicframework.com/docs/components), 或者是 [原生功能](https://capacitor.ionicframework.com/docs/apis)， 利用他们，你可以创造出无限可能。

祝您编码愉快！ 💙
