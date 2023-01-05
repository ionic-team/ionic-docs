```tsx
import React from 'react';
import { IonInput } from '@ionic/react';

function Example() {
  return (
    <>
      <IonInput mode="md" label="Solid input" labelPlacement="floating" fill="solid" placeholder="Enter text"></IonInput>
      
      <br />
      
      <IonInput mode="md" label="Outline input" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
    </>
  );
}
export default Example;
```
