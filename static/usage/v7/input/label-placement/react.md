```tsx
import React from 'react';
import { IonInput, IonItem, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonInput label="Default label" placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Fixed label" labelPlacement="fixed" placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Stacked label" labelPlacement="stacked" placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Floating label" labelPlacement="floating" placeholder="Enter text"></IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
