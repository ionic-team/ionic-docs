---
previousText: '你的第一个 App'
previousUrl: '/docs/vue/your-first-app'
nextText: '保存照片到文件系统中'
nextUrl: '/docs/vue/your-first-app/3-saving-photos'
---

# 使用相机拍照

接下来是有趣的部分 - 使用Capacitor Camera API 调用设备的相机，为你的应用添加拍照功能。 我们以此构建Web，然后做小的调整，使其能够在移动设备 (iOS和Android) 上面运行。

为此，我们将创建一个与Vue的Composition API 配对的独立合成函数，以管理照片库的照片。

> 如果您不熟悉Vue的组合式API， [什么是组合式 API？](https://v3.cn.vuejs.org/guide/composition-api-introduction.html#什么是组合式-api) 来自 Vue 的官方文档就是一个很好的入门资源。

在 `src/composables` 目录下创建一个名为 `usePhotogallery.ts` 的新文件然后打开它。

我们首先从 Vue core 和 Capacitor 中导入我们将要使用的各种实用程序：

```typescript
import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem'
import { Storage } from '@capacitor/storage'

```

接下来，创建一个名为 usePhotoGallerery 的钩子函数：

```typescript
// 1.创建名为 usePhotoGallery 的钩子函数
export function usePhotoGallery() {

  // 2.创建一个 takePhoto 方法
  const takePhoto = async () => {

    // 3.调用 Camera.getPhoto 方法
    const cameraPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  };

// 4.返回 takePhoto 方法
  return {
    takePhoto
  };
}
```

我们创建的 `usePhotoGallery` 钩子函数暴露一个叫 takePhoto 的方法，该方法主要用来调用 Capactior Camera API 中的 `getPhoto` 方法。

请注意这里的神奇之处：代码中并没有出现任何跟平台有关的代码（web、iOS或是安卓）。 Capacitor 相机插件为我们抽象出了相关函数，而我们只需要调用 `Camera.getPhoto()` 便可以开始使用设备的拍照功能。

最后一步我们需要使用我们在Tab2页面中新创建的钩子函数。 返回Tab2.vue，并导入钩子函数：

```typescript
import { usePhotoGallery } from '@/composables/usePhotoGallery';
```

接下来，在默认导出的对象中添加 `setup` 方法，这部分在文档中的 [组合式 API](https://v3.cn.vuejs.org/guide/composition-api-setup.html#setup)。 从导入的`usePhotoGallery` 钩子函数中解构 `takePhoto`方法，然后返回出去：

```typescript
<script lang="ts">
import { camera, trash, close } from 'ionicons/icons';
import { IonPage, IonHeader, IonFab, IonFabButton, IonIcon,
         IonToolbar, IonTitle, IonContent, IonGrid, IonRow,
         IonCol, IonImg } from '@ionic/vue';
import { usePhotoGallery } from '@/composables/usePhotoGallery';

export default  {
  name: 'Tab2',
  components: { IonPage, IonHeader, IonFab, IonFabButton, IonIcon,
         IonToolbar, IonTitle, IonContent, IonGrid, IonRow,
         IonCol, IonImg },
  setup() {
    //  1.从 usePhotoGallery 解构 takePhoto
    const { takePhoto } = usePhotoGallery();

    //  2.导出 takePhoto 到模板
    return {
      takePhoto,
      camera, trash, close
    }
  }
}
</script>
```

保存文件，如果服务还没有运行的话，可以通过`ionic serve`命令运行服务。 在图库标签页里边，点击一下相机按钮。 如果你的电脑有任何类型的摄像头，就会弹出一个窗口。 来，试着给自己来张自拍！

![Camera API on the web](/docs/assets/img/guides/first-app-cap-ng/camera-web.png)

_（你的自怕应该会比我好看很多）_

但拍摄完成之后，这张照片会立即消失。 我们需要在应用中保存这张照片，以便我们以后查看。

## 展示照片

首先我们要创建一个新的接口来定义我们的照片类型，它将保存特定的元数据。 将下面的照片接口添加到 `usePhotoGallery.ts` 文件中，在 `usePhotoGallery` 函数以外的地方：

```typescript
// 导出 UserPhoto 接口
export interface UserPhoto{
  filepath: string;
  webviewPath: string;
}
```

回到函数的顶部（在引用 Capacitor 相机插件之后）定义一个数组，以便我们能够将拍摄到的每张照片存储在相机中。 Make it a reactive variable using Vue's [ref function](https://v3.vuejs.org/guide/composition-api-introduction.html#reactive-variables-with-ref).

```typescript
const photos = ref<UserPhoto[]>([]);
```

When the camera is done taking a picture, the resulting `CameraPhoto` returned from Capacitor will be added to the `photos` array. Update the `takePhoto` method, adding this code after the `Camera.getPhoto` line:

```typescript
const fileName = new Date().getTime() + '.jpeg';
const savedFileImage = {
  filepath: fileName,
  webviewPath: cameraPhoto.webPath
};

photos.value = [savedFileImage, ...photos.value];
```

Next, update the return statement to include the photos array:

```typescript
return {
  photos,
  takePhoto
};
```

Back in the Tab2 component, update the import statement to include the `Photo` interface:

```typescript
import { usePhotoGallery, UserPhoto } from '@/composables/usePhotoGallery';
```

Then, get access to the photos array:

```typescript
const { photos, takePhoto } = usePhotoGallery();
```

Last, add `photos` to `setup()` return:

```typescript
return {
  photos,
  takePhoto,
  camera, trash, close
}
```

With the photo(s) stored into the main array we can now display the images on the screen. Add a [Grid component](https://ionicframework.com/docs/api/grid) so that each photo will display nicely as they are added to the gallery, and loop through each photo in the Photos array, adding an Image component (`<ion-img>`) for each. Point the `src` (source) to the photo's path:

```typescript
<ion-content>
  <ion-grid>
    <ion-row>
      <ion-col size="6" :key="photo" v-for="photo in photos">
        <ion-img :src="photo.webviewPath"></ion-img>
      </ion-col>
    </ion-row>
  </ion-grid>

  <!-- <ion-fab> markup  -->
</ion-content>
```

Save all files. Within the web browser, click the Camera button and take another photo. This time, the photo is displayed in the Photo Gallery!

Up next, we’ll add support for saving the photos to the filesystem, so they can be retrieved and displayed in our app at a later time.
