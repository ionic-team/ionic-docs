```tsx
import React from 'react';
import {
  IonCheckbox,
  IonItem,
  IonLabel
} from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonItem>
      <IonCheckbox slot="start"></IonCheckbox>
      <IonLabel>Themed checkbox</IonLabel>
    </IonItem>
  );
}
export default Example;
```