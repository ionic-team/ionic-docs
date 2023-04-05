```tsx
import React from 'react';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

function Example() {
  return (
    <>
      <IonSegment value="default">
        <IonSegmentButton value="default">
          <IonLabel>Default</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>Segment</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonSegment color="primary" value="primary">
        <IonSegmentButton value="primary">
          <IonLabel>Primary</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>Segment</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonSegment color="secondary" value="secondary">
        <IonSegmentButton value="secondary">
          <IonLabel>Secondary</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>Segment</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonSegment color="tertiary" value="tertiary">
        <IonSegmentButton value="tertiary">
          <IonLabel>Tertiary</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>Segment</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonSegment color="success" value="success">
        <IonSegmentButton value="success">
          <IonLabel>Success</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>Segment</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonSegment color="warning" value="warning">
        <IonSegmentButton value="warning">
          <IonLabel>Warning</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>Segment</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonSegment color="danger" value="danger">
        <IonSegmentButton value="danger">
          <IonLabel>Danger</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>Segment</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonSegment color="light" value="light">
        <IonSegmentButton value="light">
          <IonLabel>Light</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>Segment</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonSegment color="medium" value="medium">
        <IonSegmentButton value="medium">
          <IonLabel>Medium</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>Segment</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonSegment color="dark" value="dark">
        <IonSegmentButton value="dark">
          <IonLabel>Dark</IonLabel>
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
