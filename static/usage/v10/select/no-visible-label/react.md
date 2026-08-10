```tsx
import React from 'react';
import { IonItem, IonList, IonSelect, IonSelectOption, IonText } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonSelect aria-label="Favorite Fruit" value="apple">
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
