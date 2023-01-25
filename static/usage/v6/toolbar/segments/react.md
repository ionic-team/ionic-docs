```tsx
import React from 'react';
import { IonHeader, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <IonHeader>
      <IonToolbar>
        <IonSegment value="all">
          <IonSegmentButton value="all">
            All
          </IonSegmentButton>
          <IonSegmentButton value="favorites">
            Favorites
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>
    </IonHeader>
  );
}
export default Example;
```
