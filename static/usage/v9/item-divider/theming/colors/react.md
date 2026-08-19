```tsx
import React from 'react';
import { IonItemDivider, IonLabel } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItemDivider>
        <IonLabel>Default</IonLabel>
      </IonItemDivider>
      <IonItemDivider color="primary">
        <IonLabel>Primary</IonLabel>
      </IonItemDivider>
      <IonItemDivider color="secondary">
        <IonLabel>Secondary</IonLabel>
      </IonItemDivider>
      <IonItemDivider color="tertiary">
        <IonLabel>Tertiary</IonLabel>
      </IonItemDivider>
      <IonItemDivider color="success">
        <IonLabel>Success</IonLabel>
      </IonItemDivider>
      <IonItemDivider color="warning">
        <IonLabel>Warning</IonLabel>
      </IonItemDivider>
      <IonItemDivider color="danger">
        <IonLabel>Danger</IonLabel>
      </IonItemDivider>
      <IonItemDivider color="light">
        <IonLabel>Light</IonLabel>
      </IonItemDivider>
      <IonItemDivider color="medium">
        <IonLabel>Medium</IonLabel>
      </IonItemDivider>
      <IonItemDivider color="dark">
        <IonLabel>Dark</IonLabel>
      </IonItemDivider>
    </>
  );
}
export default Example;
```
