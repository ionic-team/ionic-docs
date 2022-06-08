```tsx
import React, { useState } from 'react';
import { IonContent, IonLabel, IonRange } from '@ionic/react';
import { RangeValue } from '@ionic/core';
function Example() {
  const [moveStartValue, setMoveStartValue] = useState<RangeValue>();
  const [moveEndValue, setMoveEndValue] = useState<RangeValue>();
  return (
    <IonContent>
      <IonRange
        onIonKnobMoveStart={({ detail }) => setMoveStartValue(detail.value)}
        onIonKnobMoveEnd={({ detail }) => setMoveEndValue(detail.value)}
      ></IonRange>
      <div>
        <IonLabel>ionKnobMoveStart: {moveStartValue as number}</IonLabel>
      </div>
      <div>
        <IonLabel>ionKnobMoveEnd: {moveEndValue as number}</IonLabel>
      </div>
    </IonContent>
  );
}
export default Example;
```
