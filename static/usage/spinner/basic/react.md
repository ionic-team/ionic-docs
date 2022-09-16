```tsx
import React from 'react';
import { IonItem, IonLabel, IonSpinner } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem>
        <IonLabel>Default</IonLabel>
        <IonSpinner></IonSpinner>
      </IonItem>

      <IonItem>
        <IonLabel>Dots</IonLabel>
        <IonSpinner name="dots"></IonSpinner>
      </IonItem>

      <IonItem>
        <IonLabel>Lines</IonLabel>
        <IonSpinner name="lines"></IonSpinner>
      </IonItem>

      <IonItem>
        <IonLabel>Lines Small</IonLabel>
        <IonSpinner name="lines-small"></IonSpinner>
      </IonItem>

      <IonItem>
        <IonLabel>Lines Sharp</IonLabel>
        <IonSpinner name="lines-sharp"></IonSpinner>
      </IonItem>

      <IonItem>
        <IonLabel>Lines Sharp Small</IonLabel>
        <IonSpinner name="lines-sharp-small"></IonSpinner>
      </IonItem>

      <IonItem>
        <IonLabel>Bubbles</IonLabel>
        <IonSpinner name="bubbles"></IonSpinner>
      </IonItem>

      <IonItem>
        <IonLabel>Circles</IonLabel>
        <IonSpinner name="circles"></IonSpinner>
      </IonItem>

      <IonItem>
        <IonLabel>Circular</IonLabel>
        <IonSpinner name="circular"></IonSpinner>
      </IonItem>

      <IonItem>
        <IonLabel>Crescent</IonLabel>
        <IonSpinner name="crescent"></IonSpinner>
      </IonItem>
    </>
  );
}
export default Example;
```
