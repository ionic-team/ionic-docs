```tsx
import React from 'react';
import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/react';
import { add, chevronBack, chevronDown, chevronForward, chevronUp } from 'ionicons/icons';

function Example() {
  return (
    <IonFab slot="fixed" horizontal="center" vertical="center">
      <IonFabButton color="secondary">
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
      <IonFabList side="top">
        <IonFabButton color="primary">
          <IonIcon icon={chevronUp}></IonIcon>
        </IonFabButton>
      </IonFabList>
      <IonFabList side="end">
        <IonFabButton color="tertiary">
          <IonIcon icon={chevronForward}></IonIcon>
        </IonFabButton>
        <IonFabButton color="success">
          <IonIcon icon={chevronForward}></IonIcon>
        </IonFabButton>
      </IonFabList>
      <IonFabList side="bottom">
        <IonFabButton color="warning">
          <IonIcon icon={chevronDown}></IonIcon>
        </IonFabButton>
      </IonFabList>
      <IonFabList side="start">
        <IonFabButton color="danger">
          <IonIcon icon={chevronBack}></IonIcon>
        </IonFabButton>
        <IonFabButton color="dark">
          <IonIcon icon={chevronBack}></IonIcon>
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
}
export default Example;
```
