```tsx
import React, { useState } from 'react';
import { IonContent, IonLabel, IonRange } from '@ionic/react';
import { RangeValue } from '@ionic/core';
function Example() {
  const [lastEmittedValue, setLastEmittedValue] = useState<RangeValue>();
  return (
    <IonContent>
      <IonRange onIonChange={({ detail }) => setLastEmittedValue(detail.value)}></IonRange>
      <IonLabel>ionChange emitted value: {lastEmittedValue as number}</IonLabel>
    </IonContent>
  );
}
export default Example;
```
