```tsx
import React from 'react';
import { IonBadge, IonItem, IonLabel, IonList } from '@ionic/react';
function Example() {
  return (
    <IonList>
      <IonItem>
        <IonBadge slot="start">11</IonBadge>
        <IonLabel>Badge in start slot</IonLabel>
      </IonItem>
      <IonItem>
        <IonBadge slot="end">22</IonBadge>
        <IonLabel>Badge in end slot</IonLabel>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
