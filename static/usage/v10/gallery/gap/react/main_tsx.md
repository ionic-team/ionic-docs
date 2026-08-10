```tsx
import React from 'react';
import { IonGallery, IonGalleryItem } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonGallery
      gap={{
        xs: '2px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '10px',
        xxl: '12px',
      }}
    >
      <IonGalleryItem>1</IonGalleryItem>
      <IonGalleryItem>2</IonGalleryItem>
      <IonGalleryItem>3</IonGalleryItem>
      <IonGalleryItem>4</IonGalleryItem>
      <IonGalleryItem>5</IonGalleryItem>
      <IonGalleryItem>6</IonGalleryItem>
    </IonGallery>
  );
}
export default Example;
```
