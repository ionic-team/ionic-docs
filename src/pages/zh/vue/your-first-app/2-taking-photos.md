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

接下来，创建一个名为 usePhotoGallerery 的函数：

```typescript
export function usePhotoGallery() {

  const takePhoto = async () => {
    const cameraPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  };

  return {
    takePhoto
  };
}
```

我们创建的 `usePhotoGallery` 钩子函数暴露一个叫 takePhoto 的方法，该方法主要用来调用 Capactior Camera API 中的 `getPhoto` 方法。

请注意这里的神奇之处：代码中并没有出现任何跟平台有关的代码（web、iOS或是安卓）。 Capacitor 相机插件为我们抽象出了相关函数，而我们只需要调用 `Camera.getPhoto()` 便可以开始使用设备的拍照功能。

The last step we need to take is to use the new function from the Tab2 page. Go back to Tab2.vue and import it:

```typescript
import { usePhotoGallery } from '@/composables/usePhotoGallery';
```

Next, within the default export, add a setup method, part of the [Composition API](https://v3.vuejs.org/guide/composition-api-setup.html#setup). Destructure the `takePhoto` function from `usePhotoGallery`, then return it:

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
    const { takePhoto } = usePhotoGallery();

    return {
      takePhoto,
      camera, trash, close
    }
  }
}
</script>
```

Save the file, and if you’re not already, restart the development server in your browser by running `ionic serve`. On the Photo Gallery tab, click the Camera button. If your computer has a webcam of any sort, a modal window appears. Take a selfie!

![Camera API on the web](/docs/assets/img/guides/first-app-cap-ng/camera-web.png)

_(Your selfie is probably much better than mine)_

After taking a photo, it disappears right away. We still need to display it within our app and save it for future access.

## Displaying Photos

First we will create a new type to define our Photo, which will hold specific metadata. Add the following Photo interface to the `usePhotoGallery.ts` file, somewhere outside of the main function:

```typescript
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

Back at the top of the function (right after referencing the Capacitor Camera plugin), define an array so we can store each photo captured with the Camera. Make it a reactive variable using Vue's [ref function](https://v3.vuejs.org/guide/composition-api-introduction.html#reactive-variables-with-ref).

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
