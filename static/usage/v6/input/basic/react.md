```tsx
import React from 'react';
import { IonInput, IonItem, IonLabel, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonLabel>Default input</IonLabel>
        <IonInput></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>Input with placeholder</IonLabel>
        <IonInput placeholder="Enter company name"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>Input with value</IonLabel>
        <IonInput value="121 S Pinckney St #300"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>Readonly input</IonLabel>
        <IonInput value="Madison" readonly={true}></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>Disabled input</IonLabel>
        <IonInput value="53703" disabled={true}></IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
