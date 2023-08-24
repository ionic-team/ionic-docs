```tsx
import React from 'react';
import { IonRadio } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonRadioGroup value="start">
        <IonItem>
          <IonRadio value="start" labelPlacement="stacked" align="start">
            Aligned to the Start
          </IonRadio>
        </IonItem>
      </IonRadioGroup>

      <IonRadioGroup value="center">
        <IonItem>
          <IonRadio value="center" labelPlacement="stacked" align="center">
            Aligned to the Center
          </IonRadio>
        </IonItem>
      </IonRadioGroup>
    </IonList>
  );
}
export default Example;
```
