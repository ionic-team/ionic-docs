```tsx
import React from 'react';
import { IonSelect, IonSelectOption } from '@ionic/react';
function Example() {
  return (
    <IonSelect placeholder="Select all fruits that apply" multiple={true}>
      <IonSelectOption value="apples">Apples</IonSelectOption>
      <IonSelectOption value="oranges">Oranges</IonSelectOption>
      <IonSelectOption value="bananas">Bananas</IonSelectOption>
    </IonSelect>
  );
}
export default Example;
```
