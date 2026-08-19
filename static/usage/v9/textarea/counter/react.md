```tsx
import React from 'react';
import { IonTextarea } from '@ionic/react';

function Example() {
  return (
    <>
      <IonTextarea label="Default counter" labelPlacement="floating" counter={true} maxlength={20}></IonTextarea>

      <IonTextarea
        label="Custom Counter Format"
        labelPlacement="floating"
        counter={true}
        maxlength={20}
        counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}
      ></IonTextarea>
    </>
  );
}
export default Example;
```
