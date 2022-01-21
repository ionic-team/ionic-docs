---
sidebar_label: Saving Photos
---

# Saving Photos to the Filesystem

We’re now able to take multiple photos and display them in a photo gallery on the second tab of our app. These photos, however, are not currently being stored permanently, so when the app is closed, they will be deleted.

## Filesystem API

Fortunately, saving them to the filesystem only takes a few steps. Begin by creating a new class method, `savePicture()`, in the `PhotoService` class (`src/app/services/photo.service.ts`). We pass in the `photo` object, which represents the newly captured device photo:

```tsx
private async savePicture(photo: Photo) { }
```

We can use this new method immediately in `addNewToGallery()`:

```tsx
public async addNewToGallery() {
  // Take a photo
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri, // file-based data; provides best performance
    source: CameraSource.Camera, // automatically take a new photo with the camera
    quality: 100 // highest quality (0 to 100)
  });

  // Save the picture and add it to photo collection
  const savedImageFile = await this.savePicture(capturedPhoto);
  this.photos.unshift(savedImageFile);
}
```

We’ll use the Capacitor [Filesystem API](https://capacitor.ionicframework.com/docs/apis/filesystem) to save the photo to the filesystem. To start, convert the photo to base64 format, then feed the data to the Filesystem’s `writeFile` function. As you’ll recall, we display each photo on the screen by setting each image’s source path (`src` attribute) in `tab2.page.html` to the webviewPath property. So, set it then return the new Photo object.

```tsx
private async savePicture(photo: Photo) {
  // Convert photo to base64 format, required by Filesystem API to save
  const base64Data = await this.readAsBase64(photo);

  // Write the file to the data directory
  const fileName = new Date().getTime() + '.jpeg';
  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data
  });

  // Use webPath to display the new image instead of base64 since it's
  // already loaded into memory
  return {
    filepath: fileName,
    webviewPath: photo.webPath
  };
}
```

`readAsBase64()` is a helper function we’ll define next. It's useful to organize via a separate method since it requires a small amount of platform-specific (web vs. mobile) logic - more on that in a bit. For now, implement the logic for running on the web:

```tsx
private async readAsBase64(photo: Photo) {
  // Fetch the photo, read as a blob, then convert to base64 format
  const response = await fetch(photo.webPath!);
  const blob = await response.blob();

  return await this.convertBlobToBase64(blob) as string;
}

private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onerror = reject;
  reader.onload = () => {
      resolve(reader.result);
  };
  reader.readAsDataURL(blob);
});
```

Obtaining the camera photo as base64 format on the web appears to be a bit trickier than on mobile. In reality, we’re just using built-in web APIs: [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) as a neat way to read the file into blob format, then FileReader’s [readAsDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL) to convert the photo blob to base64.

There we go! Each time a new photo is taken, it’s now automatically saved to the filesystem.
