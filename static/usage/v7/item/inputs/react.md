```tsx
import React from 'react';
import { IonCheckbox, IonInput, IonItem, IonRange, IonSelect, IonSelectOption, IonToggle } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem>
        <IonInput label="Default Input" placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Fixed Input" label-placement="fixed" placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Stacked Input" label-placement="stacked" placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Floating Input" label-placement="floating" placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonSelect label="Select" placeholder="Make a Selection">
          <IonSelectOption value="">No Game Console</IonSelectOption>
          <IonSelectOption value="nes">NES</IonSelectOption>
          <IonSelectOption value="n64">Nintendo64</IonSelectOption>
          <IonSelectOption value="ps">PlayStation</IonSelectOption>
          <IonSelectOption value="genesis">Sega Genesis</IonSelectOption>
          <IonSelectOption value="saturn">Sega Saturn</IonSelectOption>
          <IonSelectOption value="snes">SNES</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonToggle>Toggle</IonToggle>
      </IonItem>

      <IonItem>
        <IonCheckbox>Checkbox</IonCheckbox>
      </IonItem>

      <IonItem>
        <IonRange label-placement="start">
          <div slot="label">Range</div>
        </IonRange>
      </IonItem>
    </>
  );
}
export default Example;
```
