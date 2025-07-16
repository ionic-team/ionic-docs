---
sidebar_label: Live Reload
---

# Rapid App Development with Live Reload

So far, we’ve seen how easy it is to develop a cross-platform app that works everywhere. The development experience is pretty quick, but what if I told you there was a way to go faster?

We can use the Ionic CLI’s [Live Reload functionality](https://ionicframework.com/docs/cli/livereload) to boost our productivity when building Ionic apps. When active, Live Reload will reload the browser and/or WebView when changes in the app are detected.

## Live Reload

Remember `ionic serve`? That was Live Reload working in the browser, allowing us to iterate quickly.

We can also use it when developing on iOS and Android devices. This is particularly useful when writing code that interacts with native plugins. Since we need to run native plugin code on a device in order to verify that it works, having a way to quickly write code, build and deploy it, then test it is crucial to keeping up our development speed.

Let’s use Live Reload to implement photo deletion, the missing piece of our Photo Gallery feature. Select your platform of choice (iOS or Android) and connect a device to your computer. Next, run either command in a terminal, based on your chosen platform:

```shell
$ ionic cap run ios -l --external

$ ionic cap run android -l --external
```

The Live Reload server will start up, and the native IDE of choice will open if not opened already. Within the IDE, click the Play button to launch the app onto your device.

## Deleting Photos

With Live Reload running and the app is open on your device, let’s implement photo deletion functionality. Open `Tab2.tsx` then import `useState` from React and `UserPhoto` from the `usePhotoGallery` hook:

```tsx
// Other Imports

// CHANGE: Import UserPhoto, usePhotoGallery hook and useState from react. 
import React, { useState } from 'react';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {
};
```

Next, reference the `deletePhoto` function, which we'll create soon:

```tsx
// Same old code from before.

const Tab2: React.FC = () => {
  // CHANGE: Reference deletePhoto function 
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();

  // Same old code from before. 
};

```

Next, add a state value to store information about the photo to delete:

```tsx
// Same old code from before. 

const Tab2: React.FC = () => {
    // Same old code from before. 

    // CHANGE: Add a state value for photo deletion. 
    const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();

    // Same old code from before. 
};
```

When a user clicks on an image, we will show the action sheet by changing the state value to the photo. Update the `<IonImg>` element to:

```tsx
// Same old code from before. 

const Tab2: React.FC = () => {
    // Same old code from before. 

    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonTitle>Tab 2</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonGrid>
            <IonRow>
                {photos.map((photo, index) => (
                <IonCol size="6" key={photo.filepath}>
                    <!-- CHANGE: Update IonImg -->
                    <IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />
                </IonCol>
                ))}
            </IonRow>
            </IonGrid>
            <IonFab vertical="bottom" horizontal="center" slot="fixed">
            <IonFabButton onClick={() => takePhoto()}>
                <IonIcon icon={camera}></IonIcon>
            </IonFabButton>
            </IonFab>
        </IonContent>
        </IonPage>
    );
};
```

Next, add an [IonActionSheet](https://ionicframework.com/docs/api/action-sheet) dialog with the option to either delete the selected photo or cancel (close) the dialog. We will set the isOpen property based on if photoToDelete has a value or not.

In the JSX, put the following component before the closing `</IonContent>` tag.

```tsx
// Same old code from before.

const Tab2: React.FC = () => {
    // Same old code from before. 

    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonTitle>Tab 2</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonGrid>
            <IonRow>
                {photos.map((photo, index) => (
                <IonCol size="6" key={photo.filepath}>
                    <IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />
                </IonCol>
                ))}
            </IonRow>
            </IonGrid>
            <IonFab vertical="bottom" horizontal="center" slot="fixed">
            <IonFabButton onClick={() => takePhoto()}>
                <IonIcon icon={camera}></IonIcon>
            </IonFabButton>
            </IonFab>
            <!-- CHANGE: Add an IonActionSheet component -->
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
                },
            ]}
            onDidDismiss={() => setPhotoToDelete(undefined)}
            />
        </IonContent>
        </IonPage>
    );
};
```

Above, we added two options: `Delete` that calls `deletePhoto` function (to be added next) and `Cancel`, which when given the role of “cancel” will automatically close the action sheet. It's also important to set the onDidDismiss function and set our photoToDelete back to undefined when the modal goes away. That way, when another image is clicked, the action sheet notices the change in the value of photoToDelete.

Next, we need to implement the deletePhoto method that will come from the `usePhotoGallery` hook. Open the file and paste in the following function in the hook:

```tsx
// Same old code from before. 

export function usePhotoGallery() {
    // Same old code from before. 

    // CHANGE: Implement deletePhoto method within usePhotoGallery hook.
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

    // CHANGE: Update return and add deletePhoto function
    return {
        photos,
        takePhoto,
        deletePhoto,
    };
}

// Same old code from before.
```

The selected photo is removed from the Photos array first. Then, we use the Capacitor Preferences API to update the cached version of the Photos array. Finally, we delete the actual photo file itself using the Filesystem API.

Save this file, then tap on a photo again and choose the “Delete” option. This time, the photo is deleted! Implemented much faster using Live Reload. 💪

In the final portion of this tutorial, we’ll walk you through the basics of the Appflow product used to build and deploy your application to users' devices.


`Tab2.tsx` should look like this: 

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
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={photo.filepath}>
                <IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
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
            },
          ]}
          onDidDismiss={() => setPhotoToDelete(undefined)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
```


`usePhotoGallery.ts` should look like this:

```tsx
import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera'; 
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';


const PHOTO_STORAGE = 'photos';

export function usePhotoGallery() {
    const [photos, setPhotos ] = useState<UserPhoto[]>([]);

    const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
        let base64Data: string | Blob;
        // "hybrid" will detect Cordova or Capacitor:
        if (isPlatform('hybrid')) {
            const file = await Filesystem.readFile({
                path: photo.path!,
            });
            base64Data = file.data;
        } else {
            base64Data = await base64FromPath(photo.webPath!);
        }
        

        const savedFile = await Filesystem.writeFile({
            path: fileName,
            data: base64Data,
            directory: Directory.Data,
        });

        if (isPlatform('hybrid')) {
            // Display the new image by rewriting the 'file://' path to HTTP
            // Details: https://ionicframework.com/docs/building/webview#file-protocol
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
    }

    useEffect(() => {
        const loadSaved = async() => {
            const { value } = await Preferences.get({ key: PHOTO_STORAGE });
            const photosInPreferences = (value? JSON.parse(value) : []) as UserPhoto[];
            
            if (!isPlatform('hybrid')) {
                for (let photo of photosInPreferences) {
                    const file = await Filesystem.readFile({
                        path: photo.filepath,
                        directory: Directory.Data,
                    });
                    // Web platform only: Load the photo as base64 data
                    photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
                }
            }
            setPhotos(photosInPreferences);
        };
        loadSaved();
    }, []);
    
    const takePhoto = async () => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100,
        });
        
        const fileName = Date.now() + '.jpeg';
        const savedFileImage = await savePicture(photo, fileName);
        const newPhotos = [savedFileImage, ...photos];
        setPhotos(newPhotos);
        Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
    };

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
        deletePhoto,
    };
}

export async function base64FromPath(path: string): Promise<string> {
    const response = await fetch(path);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
            if (typeof reader.result === 'string') {
                resolve(reader.result);
            } else {
                reject('method did not return a string');
            }
        };
        reader.readAsDataURL(blob);
    });
}

export interface UserPhoto {
    filepath: string;
    webviewPath?: string;
}
```