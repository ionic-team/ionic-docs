```tsx
import React from 'react';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';
function Example() {
  return (
    <IonList>
      <IonItem>
        <IonSelect aria-label="Fruit" placeholder="Select all fruits that apply" multiple={true}>
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
