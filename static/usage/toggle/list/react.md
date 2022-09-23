```tsx
import React from 'react';
import { IonItem, IonLabel, IonList, IonToggle } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonLabel>End Toggle</IonLabel>
        <IonToggle slot="end" checked={true}></IonToggle>
      </IonItem>
      <IonItem>
        <IonLabel>Start Toggle</IonLabel>
        <IonToggle slot="start" checked={true}></IonToggle>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
