```tsx
import React from 'react';
import { IonButton, useIonAlert } from '@ionic/react';

function Example() {
  const [presentAlert] = useIonAlert();

  return (
    <IonButton
      onClick={() =>
        presentAlert({
          header: 'A Short Title Is Best',
          subHeader: 'A Sub Header Is Optional',
          message: 'A message should be a short, complete sentence.',
          buttons: ['Action'],
        })
      }
    >
      Click Me
    </IonButton>
  );
}
export default Example;
```
