```tsx
import React from 'react';
import { IonIcon, IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import { call, heart, pin } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonSegment value="heart">
        <IonSegmentButton value="call">
          <IonIcon icon={call}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton value="heart">
          <IonIcon icon={heart}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton value="pin">
          <IonIcon icon={pin}></IonIcon>
        </IonSegmentButton>
      </IonSegment>

      <IonSegment value="heart">
        <IonSegmentButton value="call">
          <IonLabel>Call</IonLabel>
          <IonIcon icon={call}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton value="heart">
          <IonLabel>Heart</IonLabel>
          <IonIcon icon={heart}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton value="pin">
          <IonLabel>Pin</IonLabel>
          <IonIcon icon={pin}></IonIcon>
        </IonSegmentButton>
      </IonSegment>

      <IonSegment value="heart">
        <IonSegmentButton value="call" layout="icon-bottom">
          <IonLabel>Call</IonLabel>
          <IonIcon icon={call}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton value="heart" layout="icon-bottom">
          <IonLabel>Heart</IonLabel>
          <IonIcon icon={heart}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton value="pin" layout="icon-bottom">
          <IonLabel>Pin</IonLabel>
          <IonIcon icon={pin}></IonIcon>
        </IonSegmentButton>
      </IonSegment>

      <IonSegment value="heart">
        <IonSegmentButton value="call" layout="icon-start">
          <IonLabel>Call</IonLabel>
          <IonIcon icon={call}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton value="heart" layout="icon-start">
          <IonLabel>Heart</IonLabel>
          <IonIcon icon={heart}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton value="pin" layout="icon-start">
          <IonLabel>Pin</IonLabel>
          <IonIcon icon={pin}></IonIcon>
        </IonSegmentButton>
      </IonSegment>

      <IonSegment value="heart">
        <IonSegmentButton value="call" layout="icon-end">
          <IonLabel>Call</IonLabel>
          <IonIcon icon={call}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton value="heart" layout="icon-end">
          <IonLabel>Heart</IonLabel>
          <IonIcon icon={heart}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton value="pin" layout="icon-end">
          <IonLabel>Pin</IonLabel>
          <IonIcon icon={pin}></IonIcon>
        </IonSegmentButton>
      </IonSegment>
    </>
  );
}
export default Example;
```
