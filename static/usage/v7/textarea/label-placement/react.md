```tsx
import React from 'react';
import { IonTextarea, IonItem, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonTextarea label="Default label" placeholder="Enter text"></IonTextarea>
      </IonItem>
      <IonItem>
        <IonTextarea label="Fixed label" labelPlacement="fixed" placeholder="Enter text"></IonTextarea>
      </IonItem>
      <IonItem>
        <IonTextarea label="Stacked label" labelPlacement="stacked" placeholder="Enter text"></IonTextarea>
      </IonItem>
      <IonItem>
        <IonTextarea label="Floating label" labelPlacement="floating" placeholder="Enter text"></IonTextarea>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
