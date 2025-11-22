---
title: Rapid App Development with Live Reload
sidebar_label: ライブリロード
---

<head>
  <title>Rapid App Development with Live Reload with React | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="Use the Ionic CLI’s Live Reload functionality to boost your productivity when building Ionic apps. Learn how you can utilize rapid app development."
  />
</head>

So far, we’ve seen how easy it is to develop a cross-platform app that works everywhere. The development experience is pretty quick, but what if I told you there was a way to go faster?

We can use the Ionic CLI’s [Live Reload functionality](../../cli/livereload.md) to boost our productivity when building Ionic apps. When active, Live Reload will reload the browser and/or WebView when changes in the app are detected.

## Live Reload

Remember `ionic serve`? That was Live Reload working in the browser, allowing us to iterate quickly.

We can also use it when developing on iOS and Android devices. This is particularly useful when writing code that interacts with native plugins - we must run it on a device to verify that it works. Therefore, being able to quickly write, build, test, and deploy code is crucial to keeping up our development speed.

Let’s use Live Reload to implement photo deletion, the missing piece of our Photo Gallery feature. Select your platform of choice (iOS or Android) and connect a device to your computer. Next, run either command in a terminal, based on your chosen platform:

```shell
ionic cap run ios -l --external

ionic cap run android -l --external
```

The Live Reload server will start up, and the native IDE of choice will open if not opened already. Within the IDE, click the Play button to launch the app onto your device.

## Deleting Photos

With Live Reload running and the app open on your device, let’s implement photo deletion functionality.

In `usePhotoGallery.ts`, add the `deletePhoto()` method. The selected photo is removed from the `photos` array first. Then, we delete the actual photo file itself using the Filesystem API.

```ts
import { useState, useEffect } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { isPlatform } from '@ionic/react';
import { Capacitor } from '@capacitor/core';

export function usePhotoGallery() {
  // ...existing code...

  // CHANGE: Add `deletePhoto()` method
  const deletePhoto = async (photo: UserPhoto) => {
    // Remove this photo from the Photos reference data array
    const newPhotos = photos.filter((p) => p.filepath !== photo.filepath);

    // Update photos array cache by overwriting the existing photo array
    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });

    // Delete photo file from filesystem
    const filename = photo.filepath.slice(photo.filepath.lastIndexOf('/') + 1);
    await Filesystem.deleteFile({
      path: filename,
      directory: Directory.Data,
    });

    setPhotos(newPhotos);
  };

  return {
    photos,
    addNewToGallery,
    // CHANGE: Add `deletePhoto()` to the return statement
    deletePhoto,
  };
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

Next, in `Tab2.tsx`, implement the `IonActionSheet` component. We're adding two options: "Delete", which calls `usePhotoGallery.deletePhoto()`, and "Cancel". The cancel button will automatically close the action sheet when assigned the "cancel" role.

```tsx
// CHANGE: Add import
import { useState } from 'react';
// CHANGE: Update import
import { camera, trash, close } from 'ionicons/icons';
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
  IonActionSheet,
} from '@ionic/react';
// CHANGE: Add import
import type { UserPhoto } from '../hooks/usePhotoGallery';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import './Tab2.css';

const Tab2: React.FC = () => {
  // CHANGE: Add `deletePhoto()` method
  const { photos, addNewToGallery, deletePhoto } = usePhotoGallery();
  // CHANGE: Add state for the photo to delete
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();

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

        <IonGrid>
          <IonRow>
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

        {/* CHANGE: Add action sheet for deleting photos */}
        <IonActionSheet
          isOpen={!!photoToDelete}
          buttons={[
            {
              text: 'Delete',
              role: 'destructive',
              icon: trash,
              handler: () => {
                if (photoToDelete) {
                  deletePhoto(photoToDelete);
                  setPhotoToDelete(undefined);
                }
              },
            },
            {
              text: 'Cancel',
              icon: close,
              role: 'cancel',
              handler: () => {
                // Nothing to do, action sheet is automatically closed
              },
            },
          ]}
          onDidDismiss={() => setPhotoToDelete(undefined)}
        ></IonActionSheet>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
```

Add a click handler to the `<IonImg>` element. When the app user taps on a photo in our gallery, we’ll display an [Action Sheet](../../api/action-sheet.md) dialog with the option to either delete the selected photo or cancel (close) the dialog.

```tsx
<IonGrid>
  <IonRow>
    {photos.map((photo) => (
      <IonCol size="6" key={photo.filepath}>
        {/* CHANGE: Add a click event listener to each image. */}
        <IonImg src={photo.webviewPath} onClick={() => setPhotoToDelete(photo)} />
      </IonCol>
    ))}
  </IonRow>
</IonGrid>
```

Remember that removing the photo from the `photos` array triggers the `setPhotos` method for us automatically.

Tap on a photo again and choose the “Delete” option. The photo is deleted! Implemented much faster using Live Reload. 💪

:::note
Remember, you can find the complete source code for this app [here](https://github.com/ionic-team/tutorial-photo-gallery-react).
:::

In the final portion of this tutorial, we’ll walk you through the basics of the Appflow product used to build and deploy your application to users' devices.
