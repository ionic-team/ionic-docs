---
title: Taking Photos with the Camera
sidebar_label: Taking Photos
---

<head>
  <title>Take Photos From The Camera on React Apps - Ionic Documentation</title>
  <meta
    name="description"
    content="To take photos from the device's camera on a React app, begin by building it for the web, then make some small tweaks for mobile use on iOS and Android devices."
  />
</head>

Now for the fun part - adding the ability to take photos with the device’s camera using the Capacitor [Camera API](https://capacitorjs.com/docs/apis/camera). We’ll begin with building it for the web, then make some small tweaks to make it work on mobile (iOS and Android).

To do so, we will create our own custom React hook that will manage the photos for the gallery.

:::note
If you are not familiar with React Hooks, [Introducing React Hooks](https://react.dev/reference/react/hooks) from the official React docs is a good resource to start with.
:::

Create a new file at `src/hooks/usePhotoGallery.ts` and open it up.

A custom hook is just a function that uses other React hooks. And that's what we will be doing! We will start by importing the various hooks and utilities we will be using from React core, the Ionic React Hooks project, and Capacitor:

```tsx
// CHANGE: Add the following imports
import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';

// CHANGE: Add the following imports
import {
	Camera,
	CameraResultType,
	CameraSource,
	Photo,
} from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';

export function usePhotoGallery() {}
```

Next, create a function named usePhotoGallery:

```tsx
import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';

import {
	Camera,
	CameraResultType,
	CameraSource,
	Photo,
} from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';

export function usePhotoGallery() {
	// CHANGE: ADd the usePhotoGallery function.
	const takePhoto = async () => {
		// Take a photo
		const photo = await Camera.getPhoto({
			resultType: CameraResultType.Uri,
			source: CameraSource.Camera,
			quality: 100,
		});
	};

	return {
		takePhoto,
	};
}
```

Our `usePhotoGallery` hook exposes a method called takePhoto, which in turn calls into Capacitor's getPhoto method.

Notice the magic here: there's no platform-specific code (web, iOS, or Android)! The Capacitor Camera plugin abstracts that away for us, leaving just one method call - `getPhoto()` - that will open up the device's camera and allow us to take photos.

The last step we need to take is to use the new hook from the Tab2 page. Go back to Tab2.tsx and import the hook:

```tsx
// Keep the other imports

// CHANGE: Import the usePhotoGallery hook
import { usePhotoGallery } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {
	// CHANGE: Get access to `takePhoto` method by using the hook
	const { takePhoto } = usePhotoGallery();

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Tab 2</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonFab vertical='bottom' horizontal='center' slot='fixed'>
					<IonFabButton onClick={() => takePhoto()}>
						<IonIcon icon={camera}></IonIcon>
					</IonFabButton>
				</IonFab>
			</IonContent>
		</IonPage>
	);
};

export default Tab2;
```

Save the file, and if you’re not already, restart the development server in your browser by running `ionic serve`. On the Photo Gallery tab, click the Camera button. If your computer has a webcam of any sort, a modal window appears. Take a selfie!

![A photo gallery app displaying a webcam selfie.](/img/guides/first-app-cap-ng/camera-web.png 'Webcam Selfie in Photo Gallery')

_(Your selfie is probably much better than mine)_

After taking a photo, it disappears. We still need to display it within our app and save it for future access.

## Displaying Photos

First we will create a new type to define our Photo, which will hold specific metadata. Add the following UserPhoto interface to the `usePhotoGallery.ts` file, somewhere outside of the main function:

```tsx
export functino usePhotoGallery {
    // Old code from before.
}

// CHANGE: Add the interface.
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

Back at the top of the function (right after the call to `usePhotoGallery`, we will define a state variable to store the array of each photo captured with the Camera.

```tsx
export function usePhotoGallery {
    // CHANGE: Add the photos array.
    const [photos, setPhotos] = useState<UserPhoto[]>([]);

    // Old code from before. 
}
```

When the camera is done taking a picture, the resulting Photo returned from Capacitor will be stored in the `photo` variable. We want to create a new photo object and add it to the photos state array. We make sure we don't accidentally mutate the current photos array by making a new array, and then call `setPhotos` to store the array into state. Update the `takePhoto` method and add this code after the getPhoto call:

```tsx
// Old code from before.

export function usePhotoGallery() {
    const [photos, setPhotos] = useState<UserPhoto[]>([]);
	// CHANGE: Create new fileName variable with date and .jpeg 
    const fileName = Date.now() + '.jpeg';
    
    const takePhoto = async () => {
		// Photo Code 
        
		// CHANGE: Add in newPhotos after getPhoto call
		const newPhotos = [
				{
					filepath: fileName,
					webviewPath: photo.webPath,
				},
				...photos,
			];
		setPhotos(newPhotos);
		};

		// CHANGE: Update return statement to include photos. 
		return {
			photos,
			takePhoto,
    };
}

// Old code from before.
```

`usePhotoGallery.ts` should now look like this:

```tsx
import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';

export function usePhotoGallery() {
    const [photos, setPhotos] = useState<UserPhoto[]>([]);
    const fileName = Date.now() + '.jpeg';
	
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
      };
    
      return {
        photos,
        takePhoto,
    };
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

Next, move over to `Tab2.tsx` so we can display the image on the screen. With the photo(s) stored into the main array we can display the images on the screen. Add a [Grid component](https://ionicframework.com/docs/api/grid) so that each photo will display nicely as photos are added to the gallery, and loop through each photo in the Photos array, adding an Image component (`<IonImg>`) for each. Point the `src` (source) to the photo’s path:

```tsx
// Old code

// CHANGE: Import usePhotoGallery Hook
import { usePhotoGallery } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {
    // CHANGE: Get access to photos from usePhotoGallery
    const { photos, takePhoto } = usePhotoGallery();

    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonTitle>Tab 2</IonTitle>
            </IonToolbar>
        </IonHeader>
            <IonContent>
                <!-- CHANGE: Add grid component and loop through each photo in the Photos Array. -->
                <IonGrid>
                    <IonRow>
                        {photos.map((photo, index) => (
                        <IonCol size="6" key={photo.filepath}>
                            <IonImg src={photo.webviewPath} />
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

Save all files. Within the web browser, click the Camera button and take another photo. This time, the photo is displayed in the Photo Gallery!

Up next, we’ll add support for saving the photos to the filesystem, so they can be retrieved and displayed in our app at a later time.
