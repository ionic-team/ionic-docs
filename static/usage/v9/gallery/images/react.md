```tsx
import React from 'react';
import { IonContent, IonGallery, IonGalleryItem, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGallery layout="masonry">
          <IonGalleryItem>
            <img src="https://ionicframework.com/docs/img/demos/gallery/01.png" alt="Image 1" />
          </IonGalleryItem>
          <IonGalleryItem>
            <img src="https://ionicframework.com/docs/img/demos/gallery/02.png" alt="Image 2" />
          </IonGalleryItem>
          <IonGalleryItem>
            <img src="https://ionicframework.com/docs/img/demos/gallery/03.png" alt="Image 3" />
          </IonGalleryItem>
          <IonGalleryItem>
            <img src="https://ionicframework.com/docs/img/demos/gallery/04.png" alt="Image 4" />
          </IonGalleryItem>
          <IonGalleryItem>
            <img src="https://ionicframework.com/docs/img/demos/gallery/05.png" alt="Image 5" />
          </IonGalleryItem>
          <IonGalleryItem>
            <img src="https://ionicframework.com/docs/img/demos/gallery/06.png" alt="Image 6" />
          </IonGalleryItem>
          <IonGalleryItem>
            <img src="https://ionicframework.com/docs/img/demos/gallery/07.png" alt="Image 7" />
          </IonGalleryItem>
          <IonGalleryItem>
            <img src="https://ionicframework.com/docs/img/demos/gallery/08.png" alt="Image 8" />
          </IonGalleryItem>
          <IonGalleryItem>
            <img src="https://ionicframework.com/docs/img/demos/gallery/09.png" alt="Image 9" />
          </IonGalleryItem>
          <IonGalleryItem>
            <img src="https://ionicframework.com/docs/img/demos/gallery/10.png" alt="Image 10" />
          </IonGalleryItem>
          <IonGalleryItem>
            <img src="https://ionicframework.com/docs/img/demos/gallery/11.png" alt="Image 11" />
          </IonGalleryItem>
          <IonGalleryItem>
            <img src="https://ionicframework.com/docs/img/demos/gallery/12.png" alt="Image 12" />
          </IonGalleryItem>
        </IonGallery>
      </IonContent>
    </>
  );
}
export default Example;
```
