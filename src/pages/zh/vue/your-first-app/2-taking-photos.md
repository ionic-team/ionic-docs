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

![相机API](/docs/assets/img/guides/first-app-cap-ng/camera-web.png)

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

回到函数的顶部（在引用 Capacitor 相机插件之后）定义一个数组，以便我们能够将拍摄到的每张照片存储在相机中。 我们使它变成响应式变量应该使用 Vue 中的 [ref 函数](https://v3.cn.vuejs.org/guide/composition-api-introduction.html#带-ref-的响应式变量)。

```typescript
const photos = ref<UserPhoto[]>([]);
```

当相机完成拍照后，从 Capacitor 返回的 `CameraPhoto`  将会被添加到 `photos` 数组中。 更新 `takePhoto` 方法，在 `Camera.getPhoto` 行后添加此代码：

```typescript
const fileName = new Date().getTime() + '.jpeg';
const savedFileImage = {
  filepath: fileName,
  webviewPath: cameraPhoto.webPath
};

photos.value = [savedFileImage, ...photos.value];
```

接下来，返回 `photos` 数组：

```typescript
return {
  photos,
  takePhoto
};
```

返回Tab2组件，导入 `UserPhoto` 接口：

```typescript
import { usePhotoGallery, UserPhoto } from '@/composables/usePhotoGallery';
```

然后，访问 `photos` 数组：

```typescript
const { photos, takePhoto } = usePhotoGallery();
```

最后，将 `photos` 添加到 `setup()` 中返回出去：

```typescript
return {
  photos,
  takePhoto,
  camera, trash, close
}
```

当照片存储到数组之后我们就能够在屏幕上看到显示的图像了。 在页面上添加一个[网格组件](https://ionicframework.com/docs/api/grid)，以便每张照片都能很好地展示。通过数组的循环，我们为每张照片加上一个图片组件（`<ion-img>`）。 给 `src`（源）指定照片的路径：

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

保存好我们编辑的所有文件， 在网页浏览器中，点击相机按钮开始拍照。 这一次，照片就显示在了图库里面！

下一步，我们要给应用添加一个能将照片保存在文件系统里面的功能，这样照片就能够在应用中检索以及显示了。
