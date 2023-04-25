```tsx
import React from 'react';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonSelect justify="start" label="Start" placeholder="Favorite fruit">
          <IonSelectOption value="apple">Apple</IonSelectOption>
          <IonSelectOption value="banana">Banana</IonSelectOption>
          <IonSelectOption value="orange">Orange</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonSelect justify="end" label="End" placeholder="Favorite fruit">
          <IonSelectOption value="apple">Apple</IonSelectOption>
          <IonSelectOption value="banana">Banana</IonSelectOption>
          <IonSelectOption value="orange">Orange</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonSelect justify="space-between" label="Space Between" placeholder="Favorite fruit">
          <IonSelectOption value="apple">Apple</IonSelectOption>
          <IonSelectOption value="banana">Banana</IonSelectOption>
          <IonSelectOption value="orange">Orange</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
