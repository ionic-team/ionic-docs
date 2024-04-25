```tsx
import React from 'react';
import { IonCheckbox, IonItem, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonCheckbox justify="start">Packed at the Start of Line</IonCheckbox>
      </IonItem>

      <IonItem>
        <IonCheckbox justify="end">Packed at the End of Line</IonCheckbox>
      </IonItem>

      <IonItem>
        <IonCheckbox justify="space-between">Space Between Label and Control</IonCheckbox>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
