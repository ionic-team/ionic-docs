```tsx
import React from 'react';
import { IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';

function Example() {
  return (
    <>
      <IonList>
        <IonListHeader>
          <IonLabel>Default</IonLabel>
        </IonListHeader>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
      </IonList>

      <IonList>
        <IonListHeader lines="inset">
          <IonLabel>Inset</IonLabel>
        </IonListHeader>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
      </IonList>

      <IonList>
        <IonListHeader lines="full">
          <IonLabel>Full</IonLabel>
        </IonListHeader>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
      </IonList>
    </>
  );
}
export default Example;
```
