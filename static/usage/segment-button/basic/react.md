```tsx
import React from 'react';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

function Example() {
  return (
    <>
      <IonSegment value="buttons">
        <IonSegmentButton value="default">
          <IonLabel>Default</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>Segment</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="buttons">
          <IonLabel>Button</IonLabel>
        </IonSegmentButton>
      </IonSegment>

      <IonSegment value="buttons">
        <IonSegmentButton value="disabled" disabled={true}>
          <IonLabel>Disabled</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>Segment</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="buttons">
          <IonLabel>Button</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </>
  );
}
export default Example;
```
