```tsx
import React from 'react';
import { IonInput, IonItem, IonLabel } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem>
        <IonLabel position="floating">Default input</IonLabel>
        <IonInput placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem fill="solid">
        <IonLabel position="floating">Solid input</IonLabel>
        <IonInput placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem fill="outline">
        <IonLabel position="floating">Outline input</IonLabel>
        <IonInput placeholder="Enter text"></IonInput>
      </IonItem>
    </>
  );
}
export default Example;
```
