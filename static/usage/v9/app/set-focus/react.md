```tsx
import React from 'react';
import { IonButton, IonRadio, IonRadioGroup } from '@ionic/react';

function Example() {
  function focusElement(id: string) {
    const el = document.querySelector(id) as HTMLElement;

    const app = el.closest('ion-app');
    if (app) {
      app.setFocus([el]);
    }
  }

  return (
    <>
      <IonButton id="buttonToFocus" fill="outline">
        Button
      </IonButton>

      <IonRadioGroup value="a">
        <IonRadio id="radioToFocus" value="a">
          Radio
        </IonRadio>
      </IonRadioGroup>

      <br />

      <IonButton onClick={() => focusElement('#buttonToFocus')}>Focus Button</IonButton>
      <IonButton onClick={() => focusElement('#radioToFocus')}>Focus Radio</IonButton>
    </>
  );
}
export default Example;
```
