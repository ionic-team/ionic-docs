```tsx
import React from 'react';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonSegment value="custom">
        <IonSegmentButton value="custom">
          <IonLabel>Custom</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>Segment</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </>
  );
}
export default Example;
```
