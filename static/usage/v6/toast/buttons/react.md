```tsx
import React, { useState } from 'react';
import { IonButton, useIonToast } from '@ionic/react';

function Example() {
  const [presentToast] = useIonToast();
  const [handlerMessage, setHandlerMessage] = useState('');
  const [roleMessage, setRoleMessage] = useState('');

  return (
    <>
      <IonButton
        onClick={() => {
          presentToast({
            message: 'Hello World!',
            duration: 3000,
            onDidDismiss: (e: CustomEvent) => setRoleMessage(`Dismissed with role: ${e.detail.role}`),
            buttons: [
              {
                text: 'More Info',
                role: 'info',
                handler: () => { setHandlerMessage('More Info clicked'); }
              },
              {
                text: 'Dismiss',
                role: 'cancel',
                handler: () => { setHandlerMessage('Dismiss clicked'); }
              }
            ]
          })
        }}
      >
        Click Me
      </IonButton>
      <p>{handlerMessage}</p>
      <p>{roleMessage}</p>
    </>
  );
}
export default Example;
```
