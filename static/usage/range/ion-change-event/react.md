```tsx
import React, { useState } from 'react';
import { IonLabel, IonRange } from '@ionic/react';
import { RangeValue } from '@ionic/core';
function Example() {
  const [lastEmittedValue, setLastEmittedValue] = useState<RangeValue>();
  return (
    <div>
      <IonRange onIonChange={({ detail }) => setLastEmittedValue(detail.value)}></IonRange>
      <IonLabel>ionChange emitted value: {lastEmittedValue as number}</IonLabel>
    </div>
  );
}
export default Example;
```
