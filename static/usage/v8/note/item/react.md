```tsx
import React from 'react';
import { IonItem, IonLabel, IonNote } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem>
        <IonLabel>Label</IonLabel>
        <IonNote slot="end">Note (End)</IonNote>
      </IonItem>

      <IonItem>
        <IonNote slot="start">Note (Start)</IonNote>
        <IonLabel>Label</IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```
