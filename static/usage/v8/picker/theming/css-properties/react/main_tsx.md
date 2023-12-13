```tsx
import React from 'react';

import { IonPicker, IonPickerColumn, IonPickerColumnOption } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonPicker>
        <IonPickerColumn value="red">
          <IonPickerColumnOption value="" disabled={true}>
            --
          </IonPickerColumnOption>
          <IonPickerColumnOption value="red">Red</IonPickerColumnOption>
          <IonPickerColumnOption value="blue">Blue</IonPickerColumnOption>
          <IonPickerColumnOption value="green">Green</IonPickerColumnOption>
        </IonPickerColumn>
      </IonPicker>
    </>
  );
}

export default Example;
```
