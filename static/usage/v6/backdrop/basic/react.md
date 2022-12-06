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
  IonLabel,
  IonButton,
} from '@ionic/react';

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
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>Checkbox</IonLabel>
          </IonItem>
          <IonButton expand="block">Button</IonButton>
        </IonContent>
      </div>
    </>
  );
}
export default Example;
```
