```tsx
import React from 'react';
import { IonAvatar, IonItem, IonLabel, IonThumbnail } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem>
        <IonAvatar slot="start">
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </IonAvatar>
        <IonLabel>
          Avatar Item
        </IonLabel>
      </IonItem>

      <IonItem>
        <IonThumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </IonThumbnail>
        <IonLabel>
          Thumbnail Item
        </IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```
