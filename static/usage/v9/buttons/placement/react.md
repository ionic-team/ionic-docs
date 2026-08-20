```tsx
import React from 'react';
import { IonButton, IonButtons, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton>Start</IonButton>
        </IonButtons>
        <IonTitle>Buttons</IonTitle>
        <IonButtons slot="end">
          <IonButton>End</IonButton>
        </IonButtons>
      </IonToolbar>

      <IonToolbar>
        <IonButtons slot="secondary">
          <IonButton>Secondary</IonButton>
        </IonButtons>
        <IonTitle>Buttons</IonTitle>
        <IonButtons slot="primary">
          <IonButton>Primary</IonButton>
        </IonButtons>
      </IonToolbar>
    </>
  );
}
export default Example;
```
