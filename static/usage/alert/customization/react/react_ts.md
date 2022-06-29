```tsx
import React from 'react';
import { IonButton, IonContent, useIonAlert } from '@ionic/react';

import './main.css';

function Example() {
  const [presentAlert] = useIonAlert();

  return (
    <IonContent>
      <IonButton onClick={() => presentAlert({
        header: 'Are you sure?',
        cssClass: 'custom-alert',
        buttons: [
          'No',
          {
            text: 'Yes, I\'m sure',
            cssClass: 'alert-button-danger'
          }
        ]
      })}>Click Me</IonButton>
    </IonContent>
  );
}
export default Example;
```
