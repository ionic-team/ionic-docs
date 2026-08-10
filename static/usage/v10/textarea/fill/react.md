```tsx
import React from 'react';
import { IonTextarea } from '@ionic/react';
function Example() {
  return (
    <>
      <IonTextarea label="Solid textarea" labelPlacement="floating" fill="solid" placeholder="Enter text"></IonTextarea>

      <br />

      <IonTextarea
        label="Outline textarea"
        labelPlacement="floating"
        fill="outline"
        placeholder="Enter text"
      ></IonTextarea>
    </>
  );
}
export default Example;
```
