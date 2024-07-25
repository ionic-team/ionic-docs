```tsx
import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem>
        <IonLabel>Default Item</IonLabel>
      </IonItem>
      <IonItem color="primary">
        <IonLabel>Primary Item</IonLabel>
      </IonItem>
      <IonItem color="secondary">
        <IonLabel>Secondary Item</IonLabel>
      </IonItem>
      <IonItem color="tertiary">
        <IonLabel>Tertiary Item</IonLabel>
      </IonItem>
      <IonItem color="success">
        <IonLabel>Success Item</IonLabel>
      </IonItem>
      <IonItem color="warning">
        <IonLabel>Warning Item</IonLabel>
      </IonItem>
      <IonItem color="danger">
        <IonLabel>Danger Item</IonLabel>
      </IonItem>
      <IonItem color="light">
        <IonLabel>Light Item</IonLabel>
      </IonItem>
      <IonItem color="medium">
        <IonLabel>Medium Item</IonLabel>
      </IonItem>
      <IonItem color="dark">
        <IonLabel>Dark Item</IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```
