```tsx
import React from 'react';
import { IonItem, IonLabel, IonList } from '@ionic/react';

function Example() {
  return (
    <>
      <IonList lines="full">
        <IonItem>
          <IonLabel>Full Lines</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Full Lines</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Full Lines</IonLabel>
        </IonItem>
      </IonList>

      <IonList lines="inset">
        <IonItem>
          <IonLabel>Inset Lines</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Inset Lines</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Inset Lines</IonLabel>
        </IonItem>
      </IonList>

      <IonList lines="none">
        <IonItem>
          <IonLabel>No Lines</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>No Lines</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>No Lines</IonLabel>
        </IonItem>
      </IonList>
    </>
  );
}
export default Example;
```
