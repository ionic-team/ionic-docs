---
title: Loading Photos from the Filesystem
sidebar_label: Loading Photos
---

<head>
  <title>Loading Photos from the Filesystem Using A Key-Value Store</title>
  <meta
    name="description"
    content="We’ve implemented photo taking and saving to the filesystem, now learn how Ionic leverages Capacitor Storage API for loading our photos in a key-value store."
  />
</head>

We’ve implemented photo taking and saving to the filesystem. There’s one last piece of functionality missing: the photos are stored in the filesystem, but we need a way to save pointers to each file so that they can be displayed again in the photo gallery.

Fortunately, this is easy: we’ll leverage the Capacitor [Storage API](https://capacitor.ionicframework.com/docs/apis/storage) to store our array of Photos in a key-value store.

## Storage API

Begin by defining a constant variable that will act as the key for the store before the `usePhotoGallery` function definition in `src/hooks/usePhotoGallery.ts`:

```tsx
const PHOTO_STORAGE = 'photos';
export function usePhotoGallery() {}
```

Then, use the `Storage` class to get access to the get and set methods for reading and writing to device storage:

At the end of the `takePhoto` function, add a call to `Storage.set()` to save the Photos array. By adding it here, the Photos array is stored each time a new photo is taken. This way, it doesn’t matter when the app user closes or switches to a different app - all photo data is saved.

```tsx
Storage.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
```

With the photo array data saved, we will create a method that will retrieve the data when the hook loads. We will do so by using React's `useEffect` hook. Insert this above the `takePhoto` declaration. Here is the code, and we will break it down:

```tsx
useEffect(() => {
  const loadSaved = async () => {
    const { value } = await Storage.get({ key: PHOTO_STORAGE });
    const photosInStorage = (value ? JSON.parse(value) : []) as UserPhoto[];

    for (let photo of photosInStorage) {
      const file = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });
      // Web platform only: Load the photo as base64 data
      photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
    }
    setPhotos(photosInStorage);
  };
  loadSaved();
}, []);
```

This seems a bit scary at first, so let's walk through it, first by looking at the second parameter we pass into the hook: the dependency array `[]`.

The useEffect hook, by default, gets called each time a component renders, unless, we pass in a dependency array. In that case, it will only run when a dependency gets updated. In our case we only want it to be called once. By passing in an empty array, which will not be changed, we can prevent the hook from being called multiple times.

The first parameter to `useEffect` is the function that will be called by the effect. We pass in an anonymous arrow function, and inside of it we define another asynchronous method and then immediately call this. We have to call the async function from within the hook as the hook callback can't be asynchronous itself.

On mobile (coming up next!), we can directly set the source of an image tag - `<img src=”x” />` - to each photo file on the Filesystem, displaying them automatically. On the web, however, we must read each image from the Filesystem into base64 format, because the Filesystem API stores them in base64 within [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) under the hood.

That’s it! We’ve built a complete Photo Gallery feature in our Ionic app that works on the web. Next up, we’ll transform it into a mobile app for iOS and Android!
