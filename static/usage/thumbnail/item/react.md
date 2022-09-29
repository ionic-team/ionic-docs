```tsx
import React from 'react';
import { IonItem, IonLabel, IonThumbnail } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem>
        <IonThumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </IonThumbnail>
        <IonLabel>Item Thumbnail</IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```
