```tsx
import React from 'react';
import { IonItem, IonLabel, IonList, IonRadio, IonRadioGroup } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonRadioGroup value="strawberries">
        <IonItem>
          <IonLabel>Grapes</IonLabel>
          <IonRadio slot="end" value="grapes"></IonRadio>
        </IonItem>

        <IonItem>
          <IonLabel>Strawberries</IonLabel>
          <IonRadio slot="end" value="strawberries"></IonRadio>
        </IonItem>

        <IonItem>
          <IonLabel>Pineapple</IonLabel>
          <IonRadio slot="end" value="pineapple"></IonRadio>
        </IonItem>

        <IonItem>
          <IonLabel>Cherries (Disabled)</IonLabel>
          <IonRadio slot="end" value="cherries" disabled={true}></IonRadio>
        </IonItem>
      </IonRadioGroup>
    </IonList>
  );
}
export default Example;
```
