```tsx
import React from 'react';
import { IonAvatar, IonItem, IonLabel } from '@ionic/react';
function Example() {
  return (
    <>
      <IonItem>
        <IonAvatar slot="start">
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </IonAvatar>
        <IonLabel>Item Avatar</IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```
