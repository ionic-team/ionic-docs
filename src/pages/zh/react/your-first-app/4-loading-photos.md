---
previousText: 'Saving Photos on Filesystem'
previousUrl: '/docs/react/your-first-app/3-saving-photos'
nextText: 'Adding Mobile'
nextUrl: '/docs/react/your-first-app/5-adding-mobile'
---

# Loading Photos from the Filesystem

We’ve implemented photo taking and saving to the filesystem. There’s one last piece of functionality missing: the photos are stored in the filesystem, but we need a way to save pointers to each file so that they can be displayed again in the photo gallery.

Fortunately, this is easy: we’ll leverage the Capacitor [Storage API](https://capacitor.ionicframework.com/docs/apis/storage) to store our array of Photos in a key-value store.

## Storage API

Begin by defining a constant variable that will act as the key for the store before the `usePhotoGallery` function definition in `src/hooks/usePhotoGallery.ts`:

```typescript
const PHOTO_STORAGE = "photos";
export function usePhotoGallery() {}
```

Then, use the `useStorage` hook to get access to handy get and set methods for reading and writing to device storage:

```typescript
const { get, set } = useStorage();
```

Next, at the end of the `takePhoto` function, add a call to `set()` to save the Photos array. By adding it here, the Photos array is stored each time a new photo is taken. This way, it doesn’t matter when the app user closes or switches to a different app - all photo data is saved.

```typescript
set(PHOTO_STORAGE, JSON.stringify(newPhotos));
```

With the photo array data saved, we will create a method that will retrieve the data when the hook loads. We will do so by using React's `useEffect` hook. Insert this above the `takePhoto` declaration. Here is the code, and we will break it down:

```typescript
useEffect(() => {
  const loadSaved = async () => {
    const photosString = await get(PHOTO_STORAGE);
    const photos = (photosString ? JSON.parse(photosString) : []) as Photo[];
    for (let photo of photos) {
      const file = await readFile({
        path: photo.filepath,
        directory: FilesystemDirectory.Data
      });
      photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
    }
    setPhotos(photos);
  };
  loadSaved();
}, [get, readFile]);
```

This seems a bit scary at first, so let's walk through it, first by looking at the second parameter we pass into the hook: the dependency array `[get, readFile]`.

The useEffect hook, by default, gets called each time a component renders, unless, we pass in a dependency array. In that case, it will only run when a dependency gets updated. In our case we only want it to be called once. The `get` and `readFile` methods will never change so the callback will only be run once.

The dependency array should pass in any external references the hook will use internally, which is why we pass in the `get` and `readFile` methods.

The first parameter to `useEffect` is the function that will be called by the effect. We pass in an anonymous arrow function, and inside of it we define another asynchronous method and then immediately call this. We have to call the async function from within the hook as the hook callback can't be asynchronous itself.

On mobile (coming up next!), we can directly set the source of an image tag - `<img src=”x” />` - to each photo file on the Filesystem, displaying them automatically. On the web, however, we must read each image from the Filesystem into base64 format, because the Filesystem API stores them in base64 within [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) under the hood.

That’s it! We’ve built a complete Photo Gallery feature in our Ionic app that works on the web. Next up, we’ll transform it into a mobile app for iOS and Android!
