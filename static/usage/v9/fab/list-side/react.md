```tsx
import React from 'react';
import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/react';
import { add, chevronBack, chevronDown, chevronForward, chevronUp } from 'ionicons/icons';

function Example() {
  return (
    <IonFab slot="fixed" horizontal="center" vertical="center">
      <IonFabButton>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
      <IonFabList side="top">
        <IonFabButton>
          <IonIcon icon={chevronUp}></IonIcon>
        </IonFabButton>
      </IonFabList>
      <IonFabList side="end">
        <IonFabButton>
          <IonIcon icon={chevronForward}></IonIcon>
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={chevronForward}></IonIcon>
        </IonFabButton>
      </IonFabList>
      <IonFabList side="bottom">
        <IonFabButton>
          <IonIcon icon={chevronDown}></IonIcon>
        </IonFabButton>
      </IonFabList>
      <IonFabList side="start">
        <IonFabButton>
          <IonIcon icon={chevronBack}></IonIcon>
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={chevronBack}></IonIcon>
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
}
export default Example;
```
