```tsx
import React from 'react';
import { IonItem, IonList, IonRadio, IonRadioGroup } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonRadioGroup value="start">
        <IonItem>
          <IonRadio value="start" justify="start">
            Packed at the Start of Line
          </IonRadio>
        </IonItem>
      </IonRadioGroup>

      <IonRadioGroup value="end">
        <IonItem>
          <IonRadio value="end" justify="end">
            Packed at the End of Line
          </IonRadio>
        </IonItem>
      </IonRadioGroup>

      <IonRadioGroup value="space-between">
        <IonItem>
          <IonRadio value="space-between" justify="space-between">
            Space Between Label and Control
          </IonRadio>
        </IonItem>
      </IonRadioGroup>
    </IonList>
  );
}
export default Example;
```
