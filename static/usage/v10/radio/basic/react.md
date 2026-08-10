```tsx
import React from 'react';
import { IonRadio, IonRadioGroup } from '@ionic/react';

function Example() {
  return (
    <IonRadioGroup value="strawberries">
      <IonRadio value="grapes">Grapes</IonRadio>
      <br />
      <IonRadio value="strawberries">Strawberries</IonRadio>
      <br />
      <IonRadio value="pineapple">Pineapple</IonRadio>
      <br />
      <IonRadio value="cherries">Cherries</IonRadio>
    </IonRadioGroup>
  );
}
export default Example;
```
