---
sidebar_label: Loading Photos
---

# Loading Photos from the Filesystem

We’ve implemented photo taking and saving to the filesystem. There’s one last piece of functionality missing: the photos are stored in the filesystem, but we need a way to save pointers to each file so that they can be displayed again in the photo gallery.

Fortunately, this is easy: we’ll leverage the Capacitor [Preferences API](https://capacitorjs.com/docs/apis/preferences) to store our array of Photos in a key-value store.

## Preferences API

Begin by defining a constant variable that will act as the key for the store at the top of the `usePhotoGallery` function in `src/composables/usePhotoGallery.ts`:

```tsx
export const usePhotoGallery = () => {
  // CHANGE: Add the `PHOTO_STORAGE` key.
  const PHOTO_STORAGE = 'photos';
  const photos = ref<UserPhoto[]>([]);

  const takePhoto = async () => {
    // Same old code from before.
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
```

Next, add a `cachePhotos` method that saves the Photos array as JSON to preferences:

```tsx
export const usePhotoGallery = () => {
  const PHOTO_STORAGE = 'photos';
  const photos = ref<UserPhoto[]>([]);

  const takePhoto = async () => {
    // Same old code from before.
  };

  const convertBlobToBase64 = (blob: Blob) => {
    // Same old code from before.
  };

  // CHANGE: Add the `cachePhotos` method.
  const cachePhotos = () => {
    Preferences.set({
      key: PHOTO_STORAGE,
      value: JSON.stringify(photos.value),
    });
  };

  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    // Same old code from before.
  };

  return {
    photos,
    takePhoto
  };
};
```

Next, use the Vue [watch function](https://vuejs.org/api/reactivity-core.html#watch) to watch the `photos` array. Whenever the array is modified (in this case, taking or deleting photos), trigger the `cachePhotos` method. Not only do we get to reuse code, but it also doesn’t matter when the app user closes or switches to a different app - photo data is always saved.

Add the call to the `watch` function above the return statement in `usePhotoGallery`:

```tsx
export const usePhotoGallery = () => {
  const PHOTO_STORAGE = 'photos';
  const photos = ref<UserPhoto[]>([]);

  const takePhoto = async () => {
    // Same old code from before.
  };

  const convertBlobToBase64 = (blob: Blob) => {
    // Same old code from before.
  };

  const cachePhotos = () => {
    // Same old code from before.
  };

  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    // Same old code from before.
  };

  // CHANGE: Add call to `watch` with `photos` array and `cachePhotos` method.
  watch(photos, cachePhotos);
  
  return {
    photos,
    takePhoto
  };
};
```

Now that the photo array data is saved, we need a way to retrieve the data when Tab2 loads. Create a new method in `usePhotoGallery` called `loadSaved` which will first retrieve photo data from Preferences, then convert each photo's data to base64 format:

```tsx
export const usePhotoGallery = () => {
  const PHOTO_STORAGE = 'photos';
  const photos = ref<UserPhoto[]>([]);

  const takePhoto = async () => {
    // Same old code from before.
  };

  const convertBlobToBase64 = (blob: Blob) => {
    // Same old code from before.
  };

  const cachePhotos = () => {
    // Same old code from before.
  };

  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    // Same old code from before.
  };

  // CHANGE: Add the `loadSaved` method.
  const loadSaved = async () => {
    const photoList = await Preferences.get({ key: PHOTO_STORAGE });
    const photosInPreferences = photoList.value ? JSON.parse(photoList.value) : [];

    for (const photo of photosInPreferences) {
      const file = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });
      photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
    }

    photos.value = photosInPreferences;
  };

  watch(photos, cachePhotos);
  
  return {
    photos,
    takePhoto
  };
};
```

On mobile (coming up next!), we can directly set the source of an image tag - `<img src="x" />` - to each photo file on the Filesystem, displaying them automatically. On the web, however, we must read each image from the Filesystem into base64 format, because the Filesystem API stores them in base64 within [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) under the hood.

Finally, we need a way to call the `loadSaved` method when the Photo Gallery page is loaded. To do so, use the Vue [mounted lifecycle hook](https://vuejs.org/api/options-lifecycle.html#mounted). Above the `usePhotoGallery` return statement where we added the call to `watch` earlier, add a call to the `onMounted` function and pass in the `loadSaved` method created above:

```tsx
export const usePhotoGallery = () => {
  const PHOTO_STORAGE = 'photos';
  const photos = ref<UserPhoto[]>([]);

  const takePhoto = async () => {
    // Same old code from before.
  };

  const convertBlobToBase64 = (blob: Blob) => {
    // Same old code from before.
  };

  const cachePhotos = () => {
    // Same old code from before.
  };

  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    // Same old code from before.
  };

  const loadSaved = async () => {
    // Same old code from before.
  };

  // CHANGE: Add call to `onMounted` with the `loadSaved` method.
  onMounted(loadSaved);
  watch(photos, cachePhotos);
  
  return {
    photos,
    takePhoto
  };
};
```

After these updates to the `usePhotoGallery` function, your `usePhotoGallery.ts` file should look like this:

```tsx
import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export const usePhotoGallery = () => {
  const PHOTO_STORAGE = 'photos';
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

  const cachePhotos = () => {
    Preferences.set({
      key: PHOTO_STORAGE,
      value: JSON.stringify(photos.value),
    });
  };

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

  const loadSaved = async () => {
    const photoList = await Preferences.get({ key: PHOTO_STORAGE });
    const photosInPreferences = photoList.value ? JSON.parse(photoList.value) : [];

    for (const photo of photosInPreferences) {
      const file = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });
      photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
    }

    photos.value = photosInPreferences;
  };

  onMounted(loadSaved);
  watch(photos, cachePhotos);

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

:::note
If you're seeing broken image links or missing photos after following these steps, you may need to open your browser's dev tools and clear both [localStorage](https://developer.chrome.com/docs/devtools/storage/localstorage) and [IndexedDB](https://developer.chrome.com/docs/devtools/storage/indexeddb).

In localStorage, look for domain `http://localhost:8100` and key `CapacitorStorage.photos`. In IndexedDB, find a store called "FileStorage". Your photos will have a key like `/DATA/123456789012.jpeg`.
:::

That’s it! We’ve built a complete Photo Gallery feature in our Ionic app that works on the web. Next up, we’ll transform it into a mobile app for iOS and Android!
