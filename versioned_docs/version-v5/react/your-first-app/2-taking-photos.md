---
sidebar_label: Taking Photos
---

# Taking Photos with the Camera

Now for the fun part - adding the ability to take photos with the device’s camera using the Capacitor [Camera API](https://capacitor.ionicframework.com/docs/apis/camera). We’ll begin with building it for the web, then make some small tweaks to make it work on mobile (iOS and Android).

To do so, we will create our own custom React hook that will manage the photos for the gallery.

:::note
If you are not familiar with React Hooks, [Introducing React Hooks](https://reactjs.org/docs/hooks-intro.html) from the official React docs is a good resource to start with.
:::

Create a new file at `src/hooks/usePhotoGallery.ts` and open it up.

A custom hook is just a function that uses other React hooks. And that's what we will be doing! We will start by importing the various hooks and utilities we will be using from React core, the Ionic React Hooks project, and Capacitor:

```tsx
import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Capacitor } from '@capacitor/core';
```

Next, create a function named usePhotoGallery:

```tsx
export function usePhotoGallery() {
  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
  };

  return {
    takePhoto,
  };
}
```

Our `usePhotoGallery` hook exposes a method called takePhoto, which in turn calls into Capacitor's getPhoto method.

Notice the magic here: there's no platform-specific code (web, iOS, or Android)! The Capacitor Camera plugin abstracts that away for us, leaving just one method call - `getPhoto()` - that will open up the device's camera and allow us to take photos.

The last step we need to take is to use the new hook from the Tab2 page. Go back to Tab2.tsx and import the hook:

```tsx
import { usePhotoGallery } from '../hooks/usePhotoGallery';
```

And right before the return statement in the functional component, get access to the `takePhoto` method by using the hook:

```tsx
const Tab2: React.FC = () => {
  const { takePhoto } = usePhotoGallery();

  // snip - rest of code
```

Save the file, and if you’re not already, restart the development server in your browser by running `ionic serve`. On the Photo Gallery tab, click the Camera button. If your computer has a webcam of any sort, a modal window appears. Take a selfie!

![Camera API on the web](/img/guides/first-app-cap-ng/camera-web.png)

_(Your selfie is probably much better than mine)_

After taking a photo, it disappears. We still need to display it within our app and save it for future access.

## Displaying Photos

First we will create a new type to define our Photo, which will hold specific metadata. Add the following UserPhoto interface to the `usePhotoGallery.ts` file, somewhere outside of the main function:

```tsx
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

Back at the top of the function (right after the call to `usePhotoGallery`, we will define a state variable to store the array of each photo captured with the Camera.

```tsx
const [photos, setPhotos] = useState<UserPhoto[]>([]);
```

When the camera is done taking a picture, the resulting Photo returned from Capacitor will be stored in the `photo` variable. We want to create a new photo object and add it to the photos state array. We make sure we don't accidently mutate the current photos array by making a new array, and then call `setPhotos` to store the array into state. Update the `takePhoto` method and add this code after the getPhoto call:

```tsx
const fileName = new Date().getTime() + '.jpeg';
const newPhotos = [
  {
    filepath: fileName,
    webviewPath: photo.webPath,
  },
  ...photos,
];
setPhotos(newPhotos);
```

Next, let's expose the photos array from our hook. Update the return statement to include the photos:

```tsx
return {
  photos,
  takePhoto,
};
```

And back in the Tab2 component, get access to the photos:

```tsx
const { photos, takePhoto } = usePhotoGallery();
```

With the photo(s) stored into the main array we can display the images on the screen. Add a [Grid component](https://ionicframework.com/docs/api/grid) so that each photo will display nicely as photos are added to the gallery, and loop through each photo in the Photos array, adding an Image component (`<IonImg>`) for each. Point the `src` (source) to the photo’s path:

```tsx
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
