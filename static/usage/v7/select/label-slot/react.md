```tsx
import React from 'react';
import { IonItem, IonList, IonSelect, IonSelectOption, IonText } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonSelect placeholder="Select a Fruit">
          <div slot="label">Favorite Fruit <IonText color="danger">(Required)</IonText></div>
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
