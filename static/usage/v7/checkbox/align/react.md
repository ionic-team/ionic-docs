```tsx
import React from 'react';
import { IonCheckbox, IonItem, IonList } from '@ionic/react';

function Example() {
  return (
    <>
      <IonList>
        <IonItem>
          <IonCheckbox labelPlacement="stacked" alignment="start">
            Aligned to the Start
          </IonCheckbox>
        </IonItem>

        <IonItem>
          <IonCheckbox labelPlacement="stacked" alignment="center">
            Aligned to the Center
          </IonCheckbox>
        </IonItem>
      </IonList>
    </>
  );
}
export default Example;
```
