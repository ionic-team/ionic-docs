```tsx
import React from 'react';
import { IonInput, IonItem, IonLabel, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonLabel>Default label</IonLabel>
        <IonInput placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="fixed">Fixed label</IonLabel>
        <IonInput placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Stacked label</IonLabel>
        <IonInput placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Floating label</IonLabel>
        <IonInput placeholder="Enter text"></IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
