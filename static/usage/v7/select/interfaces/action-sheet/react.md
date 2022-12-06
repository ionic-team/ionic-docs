```tsx
import React from 'react';
import { IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
function Example() {
  return (
    <IonList>
      <IonItem>
        <IonSelect interface="action-sheet" placeholder="Select fruit">
          <IonSelectOption value="apples">Apples</IonSelectOption>
          <IonSelectOption value="oranges">Oranges</IonSelectOption>
          <IonSelectOption value="bananas">Bananas</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
