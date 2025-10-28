---
title: Rapid App Development with Live Reload
sidebar_label: Live Reload
---

<head>
  <title>Rapid App Development with Live Reload with React | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="Use the Ionic CLI’s Live Reload functionality to boost your productivity when building Ionic apps. Learn how you can utilize rapid app development."
  />
</head>

# Rapid App Development with Live Reload

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
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { isPlatform } from '@ionic/react';
import { Capacitor } from '@capacitor/core';

export function usePhotoGallery() {
  // Same old code from before.

  // CHANGE: Add `deletePhoto()` method.
  const deletePhoto = async (photo: UserPhoto) => {
    // Remove this photo from the Photos reference data array
    const newPhotos = photos.filter((p) => p.filepath !== photo.filepath);

    // Update photos array cache by overwriting the existing photo array
    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });

    // delete photo file from filesystem
    const filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);
    await Filesystem.deleteFile({
      path: filename,
      directory: Directory.Data,
    });

    setPhotos(newPhotos);
  };

  return {
    photos,
    takePhoto,
    // CHANGE: Add `deletePhoto()` to the return statement.
    deletePhoto,
  };
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

Next, in `Tab2.tsx`, implement the `IonActionSheet` component. We're adding two options: "Delete", which calls `usePhotoGallery.deletePicture()`, and "Cancel". The cancel button will automatically closes the action sheet when assigned the "cancel" role.

```tsx
// Same old code from before.
// change: Add React import.
import { useState } from 'react';
// CHANGE: Add `UserPhoto` type import.
import type { UserPhoto } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {
  // CHANGE: Add `deletePhoto()` method.
  const { photos, addNewToGallery, deletePhoto } = usePhotoGallery();
  // CHANGE: Add state for the photo to delete.
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();

  return (
    <IonPage>
      <IonContent>
        {/* Same old code from before. */}

        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => addNewToGallery()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>

        {/* CHANGE: Add action sheet for deleting photos. */}
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

Remember that removing the photo from the `photos` array triggers the `cachePhotos` method for us automatically.

Tap on a photo again and choose the “Delete” option. The photo is deleted! Implemented much faster using Live Reload. 💪

In the final portion of this tutorial, we’ll walk you through the basics of the Appflow product used to build and deploy your application to users' devices.

<details>
  <summary>Full code for `usePhotoGallery.ts`</summary>

```ts
import { useState, useEffect } from 'react';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { isPlatform } from '@ionic/react';
import { Capacitor } from '@capacitor/core';

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  const PHOTO_STORAGE = 'photos';

  useEffect(() => {
    const loadSaved = async () => {
      const { value: photoList } = await Preferences.get({ key: PHOTO_STORAGE });
      const photosInPreferences = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];

      // If running on the web...
      if (!isPlatform('hybrid')) {
        for (const photo of photosInPreferences) {
          const file = await Filesystem.readFile({
            path: photo.filepath,
            directory: Directory.Data,
          });
          photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
        }
      }

      setPhotos(photosInPreferences);
    };

    loadSaved();
  }, []);

  const addNewToGallery = async () => {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = Date.now() + '.jpeg';
    // Save the picture and add it to photo collection
    const savedImageFile = await savePicture(capturedPhoto, fileName);

    const newPhotos = [savedImageFile, ...photos];
    setPhotos(newPhotos);

    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
  };

  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    let base64Data: string | Blob;
    // "hybrid" will detect mobile - iOS or Android
    if (isPlatform('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path!,
      });
      base64Data = file.data;
    } else {
      // Fetch the photo, read as a blob, then convert to base64 format
      const response = await fetch(photo.webPath!);
      const blob = await response.blob();
      base64Data = (await convertBlobToBase64(blob)) as string;
    }

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    if (isPlatform('hybrid')) {
      // Display the new image by rewriting the 'file://' path to HTTP
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    } else {
      // Use webPath to display the new image instead of base64 since it's
      // already loaded into memory
      return {
        filepath: fileName,
        webviewPath: photo.webPath,
      };
    }
  };

  const convertBlobToBase64 = (blob: Blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  };

  // CHANGE: Add `deletePhoto()` method.
  const deletePhoto = async (photo: UserPhoto) => {
    // Remove this photo from the Photos reference data array
    const newPhotos = photos.filter((p) => p.filepath !== photo.filepath);

    // Update photos array cache by overwriting the existing photo array
    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });

    // delete photo file from filesystem
    const filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);
    await Filesystem.deleteFile({
      path: filename,
      directory: Directory.Data,
    });

    setPhotos(newPhotos);
  };

  return {
    addNewToGallery,
    photos,
    // CHANGE: Add `deletePhoto()` to the return statement.
    deletePhoto,
  };
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

</details>

<details>
  <summary>Full code for `Tab2.tsx`</summary>

```tsx
import { camera, trash, close } from 'ionicons/icons';
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
import { useState } from 'react';
import type { UserPhoto } from '../hooks/usePhotoGallery';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import './Tab2.css';

const Tab2: React.FC = () => {
  const { photos, addNewToGallery, deletePhoto } = usePhotoGallery();
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
                {/* CHANGE: Add a click event listener to each image. */}
                <IonImg src={photo.webviewPath} onClick={() => setPhotoToDelete(photo)} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => addNewToGallery()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>

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

</details>
