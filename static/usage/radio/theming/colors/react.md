```tsx
import React from 'react';
import { IonRadio, IonRadioGroup } from '@ionic/react';

function Example() {
  return (
    <>
      <IonRadioGroup value="primary">
        <IonRadio color="primary" value="primary"></IonRadio>
      </IonRadioGroup>
      <IonRadioGroup value="secondary">
        <IonRadio color="secondary" value="secondary"></IonRadio>
      </IonRadioGroup>
      <IonRadioGroup value="tertiary">
        <IonRadio color="tertiary" value="tertiary"></IonRadio>
      </IonRadioGroup>
      <IonRadioGroup value="success">
        <IonRadio color="success" value="success"></IonRadio>
      </IonRadioGroup>
      <IonRadioGroup value="warning">
        <IonRadio color="warning" value="warning"></IonRadio>
      </IonRadioGroup>
      <IonRadioGroup value="danger">
        <IonRadio color="danger" value="danger"></IonRadio>
      </IonRadioGroup>
      <IonRadioGroup value="light">
        <IonRadio color="light" value="light"></IonRadio>
      </IonRadioGroup>
      <IonRadioGroup value="medium">
        <IonRadio color="medium" value="medium"></IonRadio>
      </IonRadioGroup>
      <IonRadioGroup value="dark">
        <IonRadio color="dark" value="dark"></IonRadio>
      </IonRadioGroup>
    </>
  );
}
export default Example;
```
