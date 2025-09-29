```tsx
import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { heart } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonButton>Default</IonButton>
      <IonButton shape="round">Round</IonButton>
      <IonButton>
        <IonIcon slot="icon-only" icon={heart}></IonIcon>
      </IonButton>
      <IonButton shape="round">
        <IonIcon slot="icon-only" icon={heart}></IonIcon>
      </IonButton>
    </>
  );
}
export default Example;
```
