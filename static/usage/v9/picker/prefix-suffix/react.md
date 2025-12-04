```tsx
import React from 'react';
import { IonPicker, IonPickerColumn, IonPickerColumnOption } from '@ionic/react';

function Example() {
  return (
    <>
      <IonPicker>
        <IonPickerColumn value={1}>
          <div slot="prefix">$</div>
          <IonPickerColumnOption value="" disabled={true}>
            --
          </IonPickerColumnOption>
          <IonPickerColumnOption value={1}>1</IonPickerColumnOption>
          <IonPickerColumnOption value={2}>2</IonPickerColumnOption>
          <IonPickerColumnOption value={3}>3</IonPickerColumnOption>
          <IonPickerColumnOption value={4}>4</IonPickerColumnOption>
          <IonPickerColumnOption value={5}>5</IonPickerColumnOption>
          <div slot="suffix">USD</div>
        </IonPickerColumn>
      </IonPicker>
    </>
  );
}

export default Example;
```
