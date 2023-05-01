```tsx
import React from 'react';
import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { informationCircle, star } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonItem>
        <IonLabel>
          Default Item Lines
        </IonLabel>
      </IonItem>

      <IonItem lines="inset">
        <IonLabel>Item Lines Inset</IonLabel>
      </IonItem>

      <IonItem lines="full">
        <IonLabel>Item Lines Full</IonLabel>
      </IonItem>

      <IonItem lines="none">
        <IonLabel>Item Lines None</IonLabel>
      </IonItem>

      <IonItem>
        <IonIcon icon={star} slot="start"></IonIcon>
        <IonLabel>Default Item Lines</IonLabel>
        <IonIcon icon={informationCircle} slot="end"></IonIcon>
      </IonItem>

      <IonItem lines="inset">
        <IonIcon icon={star} slot="start"></IonIcon>
        <IonLabel>Item Lines Inset</IonLabel>
        <IonIcon icon={informationCircle} slot="end"></IonIcon>
      </IonItem>

      <IonItem lines="full">
        <IonIcon icon={star} slot="start"></IonIcon>
        <IonLabel>Item Lines Full</IonLabel>
        <IonIcon icon={informationCircle} slot="end"></IonIcon>
      </IonItem>

      <IonItem lines="none">
        <IonIcon icon={star} slot="start"></IonIcon>
        <IonLabel>Item Lines None</IonLabel>
        <IonIcon icon={informationCircle} slot="end"></IonIcon>
      </IonItem>
    </>
  );
}
export default Example;
```
