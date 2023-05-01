```tsx
import React from 'react';
import { IonButton, useIonAlert } from '@ionic/react';

function Example() {
  const [presentAlert] = useIonAlert();

  return (
    <IonButton
      onClick={() =>
        presentAlert({
          header: 'Alert',
          subHeader: 'Important message',
          message: 'This is an alert!',
          buttons: ['OK'],
        })
      }
    >
      Click Me
    </IonButton>
  );
}
export default Example;
```
