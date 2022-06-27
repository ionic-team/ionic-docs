```tsx
import React from 'react';
import { IonButton, IonContent, useIonAlert } from '@ionic/react';

import './main.css';

function Example() {
  const [presentAlert] = useIonAlert();

  return (
    <IonContent>
      <IonButton onClick={() => presentAlert({
        header: 'Alert!',
        cssClass: 'custom-alert',
        buttons: [
          'OK',
          {
            text: 'Wow!',
            cssClass: 'custom-alert-button'
          }
        ]
      })}>Click Me</IonButton>
    </IonContent>
  );
}
export default Example;
```
