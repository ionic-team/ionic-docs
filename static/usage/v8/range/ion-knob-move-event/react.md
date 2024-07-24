```tsx
import React from 'react';
import { IonRange } from '@ionic/react';

function Example() {
  return (
    <IonRange
      aria-label="Range with knob events"
      onIonKnobMoveStart={({ detail }) => console.log('ionKnobMoveStart:', detail.value)}
      onIonKnobMoveEnd={({ detail }) => console.log('ionKnobMoveEnd:', detail.value)}
    ></IonRange>
  );
}
export default Example;
```
