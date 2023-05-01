```tsx
import React from 'react';
import { IonRadio, IonRadioGroup } from '@ionic/react';

function Example() {
  return (
    <>
      <IonRadioGroup value="start">
        <IonRadio value="start" labelPlacement="start">Label at the Start</IonRadio>
      </IonRadioGroup>
      
      <br />
      
      <IonRadioGroup value="end">
        <IonRadio value="end" labelPlacement="end">Label at the End</IonRadio>
      </IonRadioGroup>
      
      <br />
      
      <IonRadioGroup value="fixed">
        <IonRadio value="fixed" labelPlacement="fixed">Fixed Width Label</IonRadio>
      </IonRadioGroup>
    </>
  );
}
export default Example;
```
