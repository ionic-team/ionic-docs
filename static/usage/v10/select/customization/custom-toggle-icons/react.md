```tsx
import React from 'react';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';
import { add, remove } from 'ionicons/icons';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonSelect
          interface="popover"
          toggleIcon={add}
          expandedIcon={remove}
          aria-label="fruit"
          placeholder="Select fruit"
        >
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
