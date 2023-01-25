```tsx
import React from 'react';
import { IonInput, IonItem, IonLabel } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonItem lines="full" class="item-has-focus ion-touched">
        <IonLabel position="stacked">Custom Input Highlight: Focused</IonLabel>
        <IonInput></IonInput>
      </IonItem>

      <IonItem lines="full" class="item-has-focus ion-touched ion-valid">
        <IonLabel position="stacked">Custom Input Highlight: Focused & Valid</IonLabel>
        <IonInput></IonInput>
      </IonItem>

      <IonItem lines="full" class="item-has-focus ion-touched ion-invalid">
        <IonLabel position="stacked">Custom Input Highlight: Focused & Invalid</IonLabel>
        <IonInput></IonInput>
      </IonItem>
    </>
  );
}
export default Example;
```
