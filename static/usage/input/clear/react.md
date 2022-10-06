```tsx
import React from 'react';
import { IonInput, IonItem, IonLabel, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonLabel position="stacked">Input with clear button</IonLabel>
        <IonInput clearInput={true} placeholder="Enter text to see clear button" value="Default value"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Input with clear on edit</IonLabel>
        <IonInput clearOnEdit={true} placeholder="Enter text, leave the input, come back and type to clear"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Password input</IonLabel>
        <IonInput type="password" placeholder="Enter text, leave the input, come back and type to clear"></IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
