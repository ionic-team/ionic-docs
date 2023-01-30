```tsx
import React from 'react';
import { IonCheckbox, IonInput, IonItem, IonLabel, IonToggle } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem>
        <IonLabel>Default Label</IonLabel>
        <IonInput placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="fixed">Fixed Label</IonLabel>
        <IonInput placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Floating Label</IonLabel>
        <IonInput placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Stacked Label</IonLabel>
        <IonInput placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>Toggle</IonLabel>
        <IonToggle slot="end" checked></IonToggle>
      </IonItem>

      <IonItem>
        <IonCheckbox slot="start" checked></IonCheckbox>
        <IonLabel>Checkbox</IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```
