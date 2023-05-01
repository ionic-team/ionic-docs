```tsx
import React from 'react';
import {
  IonCheckbox,
  IonItem,
  IonLabel
} from '@ionic/react';

function Example() {
  return (
    <IonItem>
      <IonCheckbox slot="start"></IonCheckbox>
      <IonLabel>I agree to the terms and conditions</IonLabel>
    </IonItem>
  );
}
export default Example;
```