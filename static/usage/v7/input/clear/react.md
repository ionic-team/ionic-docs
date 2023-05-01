```tsx
import React from 'react';
import { IonInput, IonItem, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonInput
          label="Input with clear button"
          labelPlacement="stacked"
          clearInput={true}
          placeholder="Enter text to see clear button"
          value="Default value"
        ></IonInput>
      </IonItem>

      <IonItem>
        <IonInput
          label="Input with clear on edit"
          labelPlacement="stacked"
          clearOnEdit={true}
          placeholder="Enter text, leave the input, come back and type to clear"
        ></IonInput>
      </IonItem>

      <IonItem>
        <IonInput
          label="Password input"
          labelPlacement="stacked"
          type="password"
          placeholder="Enter text, leave the input, come back and type to clear"
        ></IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
