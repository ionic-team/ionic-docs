```tsx
import React from 'react';
import { IonButton, useIonAlert } from '@ionic/react';

import './main.css';

function Example() {
  const [presentAlert] = useIonAlert();

  return (
    <IonButton
      onClick={() =>
        presentAlert({
          header: 'Are you sure?',
          cssClass: 'custom-alert',
          buttons: [
            {
              text: 'No',
              cssClass: 'alert-button-cancel',
            },
            {
              text: 'Yes',
              cssClass: 'alert-button-confirm',
            },
          ],
        })
      }
    >
      Click Me
    </IonButton>
  );
}
export default Example;
```
