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
import React, { useState } from 'react';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
// other imports
```

Next, reference the `deletePhoto` function, which we'll create soon:

```tsx
const { photos, takePhoto, deletePhoto } = usePhotoGallery();
```

Next, add a state value to store information about the photo to delete:

```tsx
const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();
```

When a user clicks on an image, we will show the action sheet by changing the state value to the photo. Update the `<IonImg>` element to:

```tsx
<IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />
```

Next, add an [IonActionSheet](https://ionicframework.com/docs/api/action-sheet) dialog with the option to either delete the selected photo or cancel (close) the dialog. We will set the isOpen property based on if photoToDelete has a value or not.

In the JSX, put the following component before the closing `</IonContent>` tag.

```tsx
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
```

Above, we added two options: `Delete` that calls `deletePhoto` function (to be added next) and `Cancel`, which when given the role of “cancel” will automatically close the action sheet. It's also important to set the onDidDismiss function and set our photoToDelete back to undefined when the modal goes away. That way, when another image is clicked, the action sheet notices the change in the value of photoToDelete.

Next, we need to implement the deletePhoto method that will come from the `usePhotoGallery` hook. Open the file and paste in the following function in the hook:

```tsx
const deletePhoto = async (photo: UserPhoto) => {
  // Remove this photo from the Photos reference data array
  const newPhotos = photos.filter((p) => p.filepath !== photo.filepath);

  // Update photos array cache by overwriting the existing photo array
  Storage.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });

  // delete photo file from filesystem
  const filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);
  await Filesystem.deleteFile({
    path: filename,
    directory: Directory.Data,
  });
  setPhotos(newPhotos);
};
```

The selected photo is removed from the Photos array first. Then, we use the Capacitor Storage API to update the cached version of the Photos array. Finally, we delete the actual photo file itself using the Filesystem API.

Make sure to return the `deletePhoto` function so it is as a part of the hook API that we expose:

```tsx
return {
  deletePhoto,
  photos,
  takePhoto,
};
```

Save this file, then tap on a photo again and choose the “Delete” option. This time, the photo is deleted! Implemented much faster using Live Reload. 💪

## What’s Next?

Congratulations! You created a complete cross-platform Photo Gallery app that runs on the web, iOS, and Android.

There are many paths to follow from here. Try adding another [Ionic UI component](https://ionicframework.com/docs/components) to the app, or more [native functionality](https://capacitor.ionicframework.com/docs/apis). The sky’s the limit.

Happy app building! 💙
