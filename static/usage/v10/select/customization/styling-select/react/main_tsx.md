```tsx
import React from 'react';
import { IonSelect, IonSelectOption } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonSelect aria-label="Fruit" placeholder="Select fruit">
      <IonSelectOption value="apples">Apples</IonSelectOption>
      <IonSelectOption value="oranges">Oranges</IonSelectOption>
      <IonSelectOption value="bananas">Bananas</IonSelectOption>
    </IonSelect>
  );
}
export default Example;
```
