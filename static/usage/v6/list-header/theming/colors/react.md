```tsx
import React from 'react';
import { IonLabel, IonListHeader } from '@ionic/react';

function Example() {
  return (
    <>
      <IonListHeader>
        <IonLabel>Default</IonLabel>
      </IonListHeader>
      <IonListHeader color="primary">
        <IonLabel>Primary</IonLabel>
      </IonListHeader>
      <IonListHeader color="secondary">
        <IonLabel>Secondary</IonLabel>
      </IonListHeader>
      <IonListHeader color="tertiary">
        <IonLabel>Tertiary</IonLabel>
      </IonListHeader>
      <IonListHeader color="success">
        <IonLabel>Success</IonLabel>
      </IonListHeader>
      <IonListHeader color="warning">
        <IonLabel>Warning</IonLabel>
      </IonListHeader>
      <IonListHeader color="danger">
        <IonLabel>Danger</IonLabel>
      </IonListHeader>
      <IonListHeader color="light">
        <IonLabel>Light</IonLabel>
      </IonListHeader>
      <IonListHeader color="medium">
        <IonLabel>Medium</IonLabel>
      </IonListHeader>
      <IonListHeader color="dark">
        <IonLabel>Dark</IonLabel>
      </IonListHeader>
    </>
  );
}
export default Example;
```
