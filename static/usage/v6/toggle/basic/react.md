```tsx
import React from 'react';
import { IonItem, IonLabel, IonList, IonToggle } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonLabel>Default Toggle</IonLabel>
        <IonToggle slot="end"></IonToggle>
      </IonItem>
      <IonItem>
        <IonLabel>Checked Toggle</IonLabel>
        <IonToggle slot="end" checked={true}></IonToggle>
      </IonItem>
      <IonItem>
        <IonLabel>Disabled Toggle</IonLabel>
        <IonToggle slot="end" disabled={true}></IonToggle>
      </IonItem>
      <IonItem>
        <IonLabel>Disabled Checked Toggle</IonLabel>
        <IonToggle slot="end" checked={true} disabled={true}></IonToggle>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
