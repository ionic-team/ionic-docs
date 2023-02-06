```tsx
import React from 'react';
import { IonRadio, IonRadioGroup } from '@ionic/react';

function Example() {
  return (
    <>
      <IonRadioGroup value="primary">
        <IonRadio aria-label="Primary" color="primary" value="primary"></IonRadio>
      </IonRadioGroup>
      <IonRadioGroup value="secondary">
        <IonRadio aria-label="Secondary" color="secondary" value="secondary"></IonRadio>
      </IonRadioGroup>
      <IonRadioGroup value="tertiary">
        <IonRadio aria-label="Tertiary" color="tertiary" value="tertiary"></IonRadio>
      </IonRadioGroup>
      <IonRadioGroup value="success">
        <IonRadio aria-label="Success" color="success" value="success"></IonRadio>
      </IonRadioGroup>
      <IonRadioGroup value="warning">
        <IonRadio aria-label="Warning" color="warning" value="warning"></IonRadio>
      </IonRadioGroup>
      <IonRadioGroup value="danger">
        <IonRadio aria-label="Danger" color="danger" value="danger"></IonRadio>
      </IonRadioGroup>
      <IonRadioGroup value="light">
        <IonRadio aria-label="Light" color="light" value="light"></IonRadio>
      </IonRadioGroup>
      <IonRadioGroup value="medium">
        <IonRadio aria-label="Medium" color="medium" value="medium"></IonRadio>
      </IonRadioGroup>
      <IonRadioGroup value="dark">
        <IonRadio aria-label="Dark" color="dark" value="dark"></IonRadio>
      </IonRadioGroup>
    </>
  );
}
export default Example;
```
