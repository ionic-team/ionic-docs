```tsx
import React from 'react';
import { IonRange } from '@ionic/react';

function Example() {
  return (
    <IonRange
      aria-label="Range with ionChange"
      onIonChange={({ detail }) => console.log('ionChange emitted value: ' + detail.value)}
    ></IonRange>
  );
}
export default Example;
```
