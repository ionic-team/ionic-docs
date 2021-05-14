---
previousText: '你的第一个 App'
previousUrl: '/docs/vue/your-first-app'
nextText: '保存照片到文件系统中'
nextUrl: '/docs/vue/your-first-app/3-saving-photos'
---

# 使用相机拍照

接下来是有趣的部分 - 使用Capacitor Camera API 调用设备的相机，为你的应用添加拍照功能。 我们以此构建Web，然后做小的调整，使其能够在移动设备 (iOS和Android) 上面运行。

为此，我们将创建一个与Vue的Composition API 配对的独立合成函数，以管理照片库的照片。

> If you are not familiar with Vue's Composition API, [Why Composition API?](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api) from the official Vue docs is a good resource to start with.

Create a new file at `src/composables/usePhotoGallery.ts` and open it up.

We will start by importing the various utilities we will use from Vue core and Capacitor:

```typescript
import { ref, onMounted, watch } from 'vue';
import { Plugins, CameraResultType, CameraSource, CameraPhoto, 
Capacitor, FilesystemDirectory } from "@capacitor/core";
```

Next, create a function named usePhotoGallery:

```typescript
export function usePhotoGallery() {
  const { Camera } = Plugins;

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

Our `usePhotoGallery` function exposes a method called takePhoto, which in turn calls the Capacitor Camera API's `getPhoto` method.

Notice the magic here: there's no platform-specific code (web, iOS, or Android)! The Capacitor Camera plugin abstracts that away for us, leaving just one method call - `getPhoto()` - that will open up the device's camera and allow us to take photos.

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
export interface Photo {
  filepath: string;
  webviewPath?: string;
}
```

Back at the top of the function (right after referencing the Capacitor Camera plugin), define an array so we can store each photo captured with the Camera. Make it a reactive variable using Vue's [ref function](https://v3.vuejs.org/guide/composition-api-introduction.html#reactive-variables-with-ref).

```typescript
const photos = ref<Photo[]>([]);
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
import { usePhotoGallery, Photo } from '@/composables/usePhotoGallery';
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
