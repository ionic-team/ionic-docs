```tsx
import React from 'react';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';
import { caretDownSharp } from 'ionicons/icons';

import './main.css';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonSelect
          className="always-flip"
          toggleIcon={caretDownSharp}
          interface="popover"
          label="Icon flips on both modes"
          placeholder="Select fruit"
        >
          <IonSelectOption value="apples">Apples</IonSelectOption>
          <IonSelectOption value="oranges">Oranges</IonSelectOption>
          <IonSelectOption value="bananas">Bananas</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonSelect
          className="never-flip"
          toggleIcon={caretDownSharp}
          interface="popover"
          label="Icon never flips"
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
