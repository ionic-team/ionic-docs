```tsx
import React from 'react';
import { IonButton, useIonToast } from '@ionic/react';
import { globe } from 'ionicons/icons';

function Example() {
  const [presentToast] = useIonToast();

  return (
    <IonButton
      onClick={() => {
        presentToast({
          message: 'Hello World!',
          duration: 1500,
          icon: globe
        })
      }}
    >
      Click Me
    </IonButton>
  );
}
export default Example;
```
