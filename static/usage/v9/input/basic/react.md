```tsx
import React from 'react';
import { IonInput, IonItem, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonInput label="Default input"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Input with placeholder" placeholder="Enter company name"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Input with value" value="121 S Pinckney St #300"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Readonly input" value="Madison" readonly={true}></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Disabled input" value="53703" disabled={true}></IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
