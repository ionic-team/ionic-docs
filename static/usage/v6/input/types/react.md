```tsx
import React from 'react';
import { IonInput, IonItem, IonLabel, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonLabel>Text input</IonLabel>
        <IonInput placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>Number input</IonLabel>
        <IonInput type="number" placeholder="000"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>Password input</IonLabel>
        <IonInput type="password" value="password"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>Email input</IonLabel>
        <IonInput type="email" placeholder="email@domain.com"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>Telephone input</IonLabel>
        <IonInput type="tel" placeholder="888-888-8888"></IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
