---
sidebar_label: Saving Photos
---

# Saving Photos to the Filesystem

We’re now able to take multiple photos and display them in a photo gallery on the second tab of our app. These photos, however, are not currently being stored permanently, so when the app is closed, they will be lost.

## Filesystem API

Fortunately, saving them to the filesystem only takes a few steps. Begin by opening the `usePhotoGallery` function (`src/composables/usePhotoGallery.ts`).

The Filesystem API requires that files written to disk are passed in as base64 data, so this helper function will be used in a moment to assist with that:

```typescript
import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export const usePhotoGallery = () => {
  const photos = ref<UserPhoto[]>([]);

  const takePhoto = async () => {
    // Same old code from before.
  };

  // CHANGE: Add the `convertBloblToBase64` method.
  const convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
  });

  return {
    photos,
    takePhoto
  };
};

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

Next, we'll add a function to save the photo to the filesystem. We pass in the `photo` object, which represents the newly captured device photo, as well as the fileName, the path where the file will be stored.

We use the Capacitor [Filesystem API](https://capacitorjs.com/docs/apis/filesystem) to save the photo to the filesystem. Create a new method inside `usePhotoGallery` called `savePicture`. This method will first convert the photo to base64 format, then feed the data to the Filesystem’s `writeFile` function:

```typescript
import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export const usePhotoGallery = () => {
  const photos = ref<UserPhoto[]>([]);

  const takePhoto = async () => {
    // Same old code from before.
  };

  const convertBlobToBase64 = (blob: Blob) => {
    // Same old code from before.
  };

  // CHANGE: Add the `savePicture` method.
  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    const base64Data = (await convertBlobToBase64(blob)) as string;

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  };

  return {
    photos,
    takePhoto
  };
};

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

Last, update the `takePhoto` function to call `savePicture`:

```typescript
import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export const usePhotoGallery = () => {
  const photos = ref<UserPhoto[]>([]);

  // CHANGE: Update the `takePhoto` method.
  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    const fileName = Date.now() + '.jpeg';
    // CHANGE: Update to call `savePicture` method.
    const savedFileImage = await savePicture(photo, fileName);

    photos.value = [savedFileImage, ...photos.value];
  };

  const convertBlobToBase64 = (blob: Blob) => {
    // Same old code from before.
  };

  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    // Same old code from before.
  };

  return {
    photos,
    takePhoto
  };
};

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

There we go! Each time a new photo is taken, it’s now automatically saved to the filesystem.

`usePhotoGallery.ts` should now look like this:

```tsx
import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export const usePhotoGallery = () => {
  const photos = ref<UserPhoto[]>([]);

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    const fileName = Date.now() + '.jpeg';
    const savedFileImage = await savePicture(photo, fileName);

    photos.value = [savedFileImage, ...photos.value];
  };

  const convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
  });

  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    const base64Data = (await convertBlobToBase64(blob)) as string;

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  };

  return {
    photos,
    takePhoto
  };
};

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

Next up, we'll load and display our saved images.
