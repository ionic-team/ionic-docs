```tsx
import React from 'react';
import { IonInput, IonItem, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonInput label="Text input" placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Number input" type="number" placeholder="000"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Password input" type="password" value="password"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Email input" type="email" placeholder="email@domain.com"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Telephone input" type="tel" placeholder="888-888-8888"></IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
