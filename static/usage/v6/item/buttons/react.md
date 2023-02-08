```tsx
import React from 'react';
import { IonButton, IonIcon, IonItem, IonLabel } from '@ionic/react';
import { home, navigate, star } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonItem>
        <IonButton slot="start">
          Start
        </IonButton>
        <IonLabel>Default Buttons</IonLabel>
        <IonButton slot="end">
          End
        </IonButton>
      </IonItem>

      <IonItem>
        <IonButton slot="start">
          Start
          <IonIcon icon={home} slot="end"></IonIcon>
        </IonButton>
        <IonLabel>Buttons with Icons</IonLabel>
        <IonButton slot="end">
          <IonIcon icon={star} slot="end"></IonIcon>
          End
        </IonButton>
      </IonItem>

      <IonItem>
        <IonButton slot="start">
          <IonIcon slot="icon-only" icon={navigate}></IonIcon>
        </IonButton>
        <IonLabel>Icon only Buttons</IonLabel>
        <IonButton slot="end">
          <IonIcon slot="icon-only" icon={star}></IonIcon>
        </IonButton>
      </IonItem>

      <IonItem>
        <IonLabel>Button Sizes</IonLabel>
        <IonButton slot="end" size="small">
          Small
        </IonButton>
        <IonButton slot="end" size="default">
          Default
        </IonButton>
        <IonButton slot="end" size="large">
          Large
        </IonButton>
      </IonItem>
    </>
  );
}
export default Example;
```
