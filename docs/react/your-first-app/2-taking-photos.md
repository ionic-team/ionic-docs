---
title: Taking Photos with the Camera
sidebar_label: Taking Photos
---

<head>
  <title>Take Photos with Camera API for iOS, Android & Web with React | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="Add the ability to take photos with your device's camera using the Ionic Capacitor Camera API for mobile iOS, Android, and the web. Learn how here."
  />
</head>

Now for the fun part - adding the ability to take photos with the device’s camera using the Capacitor [Camera API](../../native/camera.md). We’ll begin with building it for the web, then make some small tweaks to make it work on mobile (iOS and Android).

## Photo Gallery Hook

We will create a [custom React hook](https://react.dev/learn/reusing-logic-with-custom-hooks#extracting-your-own-custom-hook-from-a-component) to manage the photos for the gallery.

Create a new file at `src/hooks/usePhotoGallery.ts` and open it up.

Next, define a new method, `usePhotoGallery()`, that will contain the core logic to take a device photo and save it to the filesystem. Let’s start by opening the device camera.

```ts
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export function usePhotoGallery() {
  const addNewToGallery = async () => {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
  };

  return {
    addNewToGallery,
  };
}
```

Notice the magic here: there's no platform-specific code (web, iOS, or Android)! The Capacitor Camera plugin abstracts that away for us, leaving just one method call - `Camera.getPhoto()` - that will open up the device's camera and allow us to take photos.

Next, in `Tab2.tsx`, import the `usePhotoGallery()` method and destructure it to call its `addNewToGallery()` method.

```tsx
import { camera } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon } from '@ionic/react';
// CHANGE: Add `usePhotoGallery` import
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import './Tab2.css';

const Tab2: React.FC = () => {
  // CHANGE: Destructure `addNewToGallery()` from `usePhotoGallery()`
  const { addNewToGallery } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Photo Gallery</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          {/* CHANGE: Add a click event listener to the floating action button */}
          <IonFabButton onClick={() => addNewToGallery()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
```

If it's not running already, restart the development server in your browser by running `ionic serve`. On the Photo Gallery tab, click the Camera button. If your computer has a webcam of any sort, a modal window appears. Take a selfie!

![A photo gallery app displaying a webcam selfie.](/img/guides/first-app-cap-ng/camera-web.png 'Webcam Selfie in Photo Gallery')

_(Your selfie is probably much better than mine)_

After taking a photo, it disappears right away. We need to display it within our app and save it for future access.

## Displaying Photos

Return to `usePhotoGallery.ts`.

Outside of the `usePhotoGallery()` method definition (the very bottom of the file), create a new interface, `UserPhoto`, to hold our photo metadata.

```ts
export function usePhotoGallery {
  // ...existing code...
}

// CHANGE: Add the `UserPhoto` interface
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

Above the `addNewToGallery()` method, define an array of `UserPhoto`, which will contain a reference to each photo captured with the Camera. Make it a state variable using React's [useState hook](https://react.dev/reference/react/useState).

```ts
// CHANGE: Add import
import { useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export function usePhotoGallery {
  // CHANGE: Add the `photos` array
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  // ...existing code...
}
```

Over in the `addNewToGallery()` method, add the newly captured photo to the beginning of the `photos` array. Then, update the `userPhotoGallery()` return statement with the `photos` array.

```ts
export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  // CHANGE: Update `addNewToGallery()` method
  const addNewToGallery = async () => {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    // CHANGE: Create the `fileName` with current timestamp
    const fileName = Date.now() + '.jpeg';
    // CHANGE: Create `savedImageFile` matching `UserPhoto` interface
    const savedImageFile = [
      {
        filepath: fileName,
        webviewPath: capturedPhoto.webPath,
      },
      ...photos,
    ];

    // CHANGE: Update the `photos` array with the new photo
    setPhotos(savedImageFile);
  };

  return {
    addNewToGallery,
    // CHANGE: Update return statement to include `photos` array
    photos,
  };
}
```

`usePhotoGallery.ts` should now look like this:

```ts
import { useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  const addNewToGallery = async () => {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = Date.now() + '.jpeg';
    const savedImageFile = [
      {
        filepath: fileName,
        webviewPath: capturedPhoto.webPath,
      },
      ...photos,
    ];

    setPhotos(savedImageFile);
  };

  return {
    addNewToGallery,
    photos,
  };
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

Next, switch to `Tab2.tsx` to display the images. We'll add a [Grid component](../../api/grid.md) to ensure the photos display neatly as they're added to the gallery. Inside the grid, loop through each photo in the `UserPhoto`'s `photos` array. For each item, add an [Image component](../../api/img.md) and set its `src` property to the photo's path.

```tsx
import { camera } from 'ionicons/icons';
// CHANGE: Update import
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from '@ionic/react';
import { usePhotoGallery } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {
  // CHANGE: Add `photos` array to destructure from `usePhotoGallery()`
  const { photos, addNewToGallery } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Photo Gallery</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* CHANGE: Add a grid component to display the photos */}
        <IonGrid>
          <IonRow>
            {/* CHANGE: Create a new column and image component for each photo */}
            {photos.map((photo) => (
              <IonCol size="6" key={photo.filepath}>
                <IonImg src={photo.webviewPath} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => addNewToGallery()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};
```

Within the web browser, click the camera button and take another photo. This time, the photo is displayed in the Photo Gallery!

Up next, we’ll add support for saving the photos to the filesystem, so they can be retrieved and displayed in our app at a later time.
