```tsx
import React from 'react';
import { IonInput } from '@ionic/react';

function Example() {
  return (
    <>
      <IonInput label="Default counter" labelPlacement="floating" counter={true} maxlength={20}></IonInput>

      <IonInput
        id="custom-input"
        label="Custom Counter Format"
        labelPlacement="floating"
        counter={true}
        maxlength={20}
        counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}
      ></IonInput>
    </>
  );
}
export default Example;
```
