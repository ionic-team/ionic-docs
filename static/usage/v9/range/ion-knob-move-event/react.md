```tsx
import React from 'react';
import { IonRange } from '@ionic/react';

function Example() {
  return (
    <IonRange
      aria-label="Range with knob events"
      dualKnobs={true}
      value={{
        lower: 20,
        upper: 80,
      }}
      onIonKnobMoveStart={({ detail }) => console.log('ionKnobMoveStart:', detail.knob, detail.position, detail.value)}
      onIonKnobMoveEnd={({ detail }) => console.log('ionKnobMoveEnd:', detail.knob, detail.position, detail.value)}
    ></IonRange>
  );
}
export default Example;
```
