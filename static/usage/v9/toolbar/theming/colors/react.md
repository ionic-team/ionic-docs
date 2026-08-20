```tsx
import React from 'react';
import { IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonToolbar>
        <IonTitle>Default Toolbar</IonTitle>
      </IonToolbar>
      <IonToolbar color="primary">
        <IonTitle>Primary Toolbar</IonTitle>
      </IonToolbar>
      <IonToolbar color="secondary">
        <IonTitle>Secondary Toolbar</IonTitle>
      </IonToolbar>
      <IonToolbar color="tertiary">
        <IonTitle>Tertiary Toolbar</IonTitle>
      </IonToolbar>
      <IonToolbar color="success">
        <IonTitle>Success Toolbar</IonTitle>
      </IonToolbar>
      <IonToolbar color="warning">
        <IonTitle>Warning Toolbar</IonTitle>
      </IonToolbar>
      <IonToolbar color="danger">
        <IonTitle>Danger Toolbar</IonTitle>
      </IonToolbar>
      <IonToolbar color="light">
        <IonTitle>Light Toolbar</IonTitle>
      </IonToolbar>
      <IonToolbar color="medium">
        <IonTitle>Medium Toolbar</IonTitle>
      </IonToolbar>
      <IonToolbar color="dark">
        <IonTitle>Dark Toolbar</IonTitle>
      </IonToolbar>
    </>
  );
}
export default Example;
```
