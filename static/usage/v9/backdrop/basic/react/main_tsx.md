```tsx
import React from 'react';
import {
  IonBackdrop,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonCheckbox,
  IonButton,
} from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonBackdrop visible={true}></IonBackdrop>
      <div className="ion-page">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Backdrop</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonItem>
            <IonCheckbox>Checkbox</IonCheckbox>
          </IonItem>
          <IonButton expand="block">Button</IonButton>
        </IonContent>
      </div>
    </>
  );
}
export default Example;
```
