```tsx
import React from 'react';
import {
  IonCheckbox,
  IonItem,
  IonLabel
} from '@ionic/react';

function Example() {
  return (
    <IonItem>
      <IonCheckbox slot="start" indeterminate={true}></IonCheckbox>
      <IonLabel>Indeterminate checkbox</IonLabel>
    </IonItem>
  );
}
export default Example;
```