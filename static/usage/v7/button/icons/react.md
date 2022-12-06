```tsx
import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonButton>
        <IonIcon slot="start" icon={star}></IonIcon>
        Left Icon
      </IonButton>

      <IonButton>
        Right Icon
        <IonIcon slot="end" icon={star}></IonIcon>
      </IonButton>

      <IonButton>
        <IonIcon slot="icon-only" icon={star}></IonIcon>
      </IonButton>
    </>
  );
}
export default Example;
```
