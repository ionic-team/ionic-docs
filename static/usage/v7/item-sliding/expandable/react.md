```tsx
import React from 'react';
import { IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItemSliding>
        <IonItemOptions side="start">
          <IonItemOption color="success" expandable>Archive</IonItemOption>
        </IonItemOptions>

        <IonItem>
          <IonLabel>Sliding Item with Expandable Options</IonLabel>
        </IonItem>

        <IonItemOptions side="end">
          <IonItemOption>Favorite</IonItemOption>
          <IonItemOption color="danger" expandable>Delete</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonList>
  );
}
export default Example;
```
