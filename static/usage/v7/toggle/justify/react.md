```tsx
import React from 'react';
import { IonItem, IonList, IonToggle } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonToggle justify="start">Packed at the Start of Line</IonToggle>
      </IonItem>
      <IonItem>
        <IonToggle justify="end">Packed at the End of Line</IonToggle>
      </IonItem>
      <IonItem>
        <IonToggle justify="space-between">Space Between Label and Control</IonToggle>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
