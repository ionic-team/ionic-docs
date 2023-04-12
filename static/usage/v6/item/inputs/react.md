```tsx
import React from 'react';
import { IonCheckbox, IonInput, IonItem, IonLabel, IonRange, IonSelect, IonSelectOption, IonToggle } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem>
        <IonLabel>Default Input</IonLabel>
        <IonInput placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="fixed">Fixed Input</IonLabel>
        <IonInput placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Stacked Input</IonLabel>
        <IonInput placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Floating Input</IonLabel>
        <IonInput placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem fill="outline">
        <IonLabel position="floating">Floating Input: Outline (MD only)</IonLabel>
        <IonInput placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem fill="solid">
        <IonLabel position="floating">Floating Input: Solid (MD only)</IonLabel>
        <IonInput placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>Select</IonLabel>
        <IonSelect placeholder="Make a Selection">
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
        <IonLabel>Toggle</IonLabel>
        <IonToggle slot="end"></IonToggle>
      </IonItem>

      <IonItem>
        <IonLabel>Checkbox</IonLabel>
        <IonCheckbox slot="end"></IonCheckbox>
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Range</IonLabel>
        <IonRange></IonRange>
      </IonItem>
    </>
  );
}
export default Example;
```
