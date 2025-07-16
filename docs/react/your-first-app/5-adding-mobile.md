---
sidebar_label: Adding Mobile
---

# Adding Mobile

Our photo gallery app won’t be complete until it runs on iOS, Android, and the web - all using one codebase. All it takes is some small logic changes to support mobile platforms, installing some native tooling, then running the app on a device. Let’s go!

Let’s start with making some small code changes - then our app will “just work” when we deploy it to a device.

## Platform-specific Logic

First, we’ll update the photo saving functionality to support mobile. In the `savePicture` function, check which platform the app is running on. If it’s “hybrid” (Capacitor or Cordova, the two native runtimes), then read the photo file into base64 format using the `readFile` method. Also, return the complete file path to the photo using the Filesystem API. When setting the `webviewPath`, use the special `Capacitor.convertFileSrc` method ([details here](https://ionicframework.com/docs/core-concepts/webview#file-protocol)). Otherwise, use the same logic as before when running the app on the web.

```tsx
// Old code from before. 
export function usePhotoGallery() {
    // Old code from before.

    // CHANGE: Update savePicture function 
    const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
        let base64Data: string | Blob;
        // "hybrid" will detect Cordova or Capacitor;
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
      };
    
    // Old code from before. 
}

// Old code from before.
```

Next, add a new bit of logic in the `loadSaved` function. On mobile, we can directly point to each photo file on the Filesystem and display them automatically. On the web, however, we must read each image from the Filesystem into base64 format. This is because the Filesystem API uses [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) under the hood. Update the `loadSaved` function inside of `useEffect` to:

```tsx
// Old code from before. 
export function usePhotoGallery() {
    // Old code from before.

    useEffect(() => {
        // CHANGE: Update loadSaved function within useEffect
        const loadSaved = async () => {
            const { value } = await Preferences.get({ key: PHOTO_STORAGE });
          
            const photosInPreferences = (value ? JSON.parse(value) : []) as UserPhoto[];
            // If running on the web...
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
          
          
          
      }, []);
    
    // Old code from before. 
}

// Old code from before.
```

Our Photo Gallery now consists of one codebase that runs on the web, Android, and iOS. Next up, the part you’ve been waiting for - deploying the app to a device.

`usePhotoGallery.ts` should now look like this:

```tsx
import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';

const PHOTO_STORAGE = 'photos';

export function usePhotoGallery() {
    const [photos, setPhotos] = useState<UserPhoto[]>([]);
    const fileName = Date.now() + '.jpeg';
    const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
        let base64Data: string | Blob;
        // "hybrid" will detect Cordova or Capacitor;
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
      };

    useEffect(() => {
        const loadSaved = async () => {
            const { value } = await Preferences.get({ key: PHOTO_STORAGE });
          
            const photosInPreferences = (value ? JSON.parse(value) : []) as UserPhoto[];
            // If running on the web...
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
          
          
          
      }, []);
    
    const takePhoto = async () => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100,
        });

        const newPhotos = [
            {
                filepath: fileName,
                webviewPath: photo.webPath,
            },
            ...photos,
        ];
        setPhotos(newPhotos);
        Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
      };
    
      return {
        photos,
        takePhoto,
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
