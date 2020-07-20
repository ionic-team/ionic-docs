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

Notice the magic here: there's no platform-specific code (web, iOS, or Android)! The Capacitor Camera plugin abstracts that away for us, leaving just one method call - `getPhoto()` - that will open up the device's camera and allow us to take photos.

The last step we need to take is to use the new hook from the Tab2 page. Go back to Tab2.tsx and import the hook:

```typescript
import { usePhotoGallery } from '../hooks/usePhotoGallery';
```

And right before the return statement in the functional component, get access to the `takePhoto` method by using the hook:

```typescript
const Tab2: React.FC = () => {
  const { takePhoto } = usePhotoGallery();

  // snip - rest of code
```

Save the file, and if you’re not already, restart the development server in your browser by running `ionic serve`. On the Photo Gallery tab, click the Camera button. If your computer has a webcam of any sort, a modal window appears. Take a selfie!

![Camera API on the web](/docs/assets/img/guides/first-app-cap-ng/camera-web.png)

_(Your selfie is probably much better than mine)_

After taking a photo, it disappears. We still need to display it within our app and save it for future access.

## Displaying Photos

First we will create a new type to define our Photo, which will hold specific metadata. Add the following Photo interface to the `usePhotoGallery.ts` file, somewhere outside of the main function:

```typescript
export interface Photo {
  filepath: string;
  webviewPath?: string;
  base64?: string;
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
