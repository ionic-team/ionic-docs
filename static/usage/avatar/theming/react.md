```tsx
import React from 'react';
import { IonAvatar, IonItem, IonLabel } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
        </IonAvatar>
        <IonLabel>Item Avatar</IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```
