```tsx
import React from 'react';
import { IonButton, IonIcon, IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';
import { eye, leaf } from 'ionicons/icons';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonSelect labelPlacement="stacked" label="Favorite fruit" value="apple">
          <IonIcon slot="start" icon={leaf} aria-hidden="true"></IonIcon>
          <IonSelectOption value="apple">Apple</IonSelectOption>
          <IonSelectOption value="banana">Banana</IonSelectOption>
          <IonSelectOption value="orange">Orange</IonSelectOption>
          <IonButton fill="clear" slot="end" aria-label="Show/hide password">
            <IonIcon slot="icon-only" icon={eye} aria-hidden="true"></IonIcon>
          </IonButton>
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
