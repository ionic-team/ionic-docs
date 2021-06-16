---
previousText: '你的第一个 App'
previousUrl: '/docs/react/your-first-app'
nextText: '保存照片到文件系统中'
nextUrl: '/docs/react/your-first-app/3-saving-photos'
---

# 使用相机拍照

接下来是有趣的部分 - 使用Capacitor [Camera API](https://capacitor.ionicframework.com/docs/apis/camera)调用设备的相机，为你的应用添加拍照功能。 我们以此构建Web，然后做小的调整，使其能够在移动设备 (iOS和Android) 上面运行。

为此，我们创建我们自定义的React钩子，用于管理照片库的照片。

> 如果你不熟悉React Hooks, 这篇来自官方的文档[介绍 React Hooks](https://reactjs.org/docs/hooks-intro.html) ，会是个很好的开端。

创建文件 `src/hooks/usePhotoGallery.ts` ，然后打开它。

自定义钩子只是用其它React的一个函数。 这就是我们要做的事情！ 我们将首先从React核心库，Ionic React Hooks, Capacitor 导入各种钩子和工具。

```typescript
import { useState, useEffect } from "react";
import { useCamera } from '@ionic/react-hooks/camera';
import { useFilesystem, base64FromPath } from '@ionic/react-hooks/filesystem';
import { useStorage } from '@ionic/react-hooks/storage';
import { isPlatform } from '@ionic/react';
import { CameraResultType, CameraSource, CameraPhoto, Capacitor, FilesystemDirectory } from "@capacitor/core";
```
接下来，创建一个函数，命名为usePhotoGallery：

```typescript
export function usePhotoGallery() {

  const { getPhoto } = useCamera();

  const takePhoto = async () => {
    const cameraPhoto = await getPhoto({
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

我们的 `usePhotoGallery`钩子暴露一个名叫takePhoto的方法，它会call Capactior的getPhoto方法。

注意神奇的地方在这里：不存在平台相关的代码(Web，iOS，Android)！ Capacitor相机插件抽象了相关函数，我们只需调用 `getPhoto()`，它将会打开设备相机，允许我们拍照。

我们需要采取的最后一步是使用Tab2页面中的新钩子。 返回Tab2.tsx，重新导入钩子：

```typescript
import { usePhotoGallery } from '../hooks/usePhotoGallery';
```

并且在函数组件返回语句之前, 通过使用钩子访问 ` takePhoto ` 方法:

```typescript
const Tab2: React.FC = () => {
  const { takePhoto } = usePhotoGallery();

  // snip - rest of code
```

保存文件，如果您尚未运行，请通过运行 `ionic service` 来重新启动您的浏览器中的开发服务器。 在照片库选项卡上，点击相机按钮。 如果您的计算机有任何类型的摄像头，就会出现一个模态窗口。 自拍！

![Camera API on the web](/docs/assets/img/guides/first-app-cap-ng/camera-web.png)

_(你的自拍可能比我强)_

After taking a photo, it disappears. We still need to display it within our app and save it for future access.

## Displaying Photos

First we will create a new type to define our Photo, which will hold specific metadata. Add the following Photo interface to the `usePhotoGallery.ts` file, somewhere outside of the main function:

```typescript
export interface Photo {
  filepath: string;
  webviewPath?: string;
}
```

Back at the top of the function (right after the call to `useCamera`, we will define a state variable to store the array of each photo captured with the Camera.

```typescript
const [photos, setPhotos] = useState<Photo[]>([]);
```

When the camera is done taking a picture, the resulting CameraPhoto returned from Capacitor will be stored in the `photo` variable. We want to create a new photo object and add it to the photos state array. We make sure we don't accidently mutate the current photos array by making a new array, and then call `setPhotos` to store the array into state. Update the `takePhoto` method and add this code after the getPhoto call:

```typescript
const fileName = new Date().getTime() + '.jpeg';
const newPhotos = [{
  filepath: fileName,
  webviewPath: cameraPhoto.webPath
}, ...photos];
setPhotos(newPhotos)
```

Next, let's expose the photos array from our hook. Update the return statement to include the photos:

```typescript
return {
  photos,
  takePhoto
};
```

And back in the Tab2 component, get access to the photos:

```typescript
const { photos, takePhoto } = usePhotoGallery();
```

With the photo(s) stored into the main array we can display the images on the screen. Add a [Grid component](https://ionicframework.com/docs/api/grid) so that each photo will display nicely as photos are added to the gallery, and loop through each photo in the Photos array, adding an Image component (`<IonImg>`) for each. Point the `src` (source) to the photo’s path:

```typescript
<IonContent>
  <IonGrid>
    <IonRow>
      {photos.map((photo, index) => (
        <IonCol size="6" key={index}>
          <IonImg src={photo.webviewPath} />
        </IonCol>
      ))}
    </IonRow>
  </IonGrid>
   <!-- <IonFab> markup  -->
</IonContent>
```

Save all files. Within the web browser, click the Camera button and take another photo. This time, the photo is displayed in the Photo Gallery!

Up next, we’ll add support for saving the photos to the filesystem, so they can be retrieved and displayed in our app at a later time.
