```tsx
import React from 'react';
import { IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonSegment value="first">
        <IonSegmentButton value="first" contentId="first">
          <IonLabel>First</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="second" contentId="second">
          <IonLabel>Second</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="third" contentId="third">
          <IonLabel>Third</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonSegmentView>
        <IonSegmentContent id="first">First</IonSegmentContent>
        <IonSegmentContent id="second">Second</IonSegmentContent>
        <IonSegmentContent id="third">Third</IonSegmentContent>
      </IonSegmentView>
    </>
  );
}
export default Example;
```
