```tsx
import React from 'react';
import { IonButton, useIonToast } from '@ionic/react';

import './main.css';

function Example() {
  const [presentToast] = useIonToast();

  return (
    <IonButton
      onClick={() =>
        presentToast({
          message: 'Hello Styled World!',
          duration: 3000,
          cssClass: 'custom-toast',
          buttons: [
            {
              text: 'Dismiss',
              role: 'cancel'
            }
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
