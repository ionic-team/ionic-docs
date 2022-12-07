```tsx
import React, { useState } from 'react';
import { IonButton, useIonAlert } from '@ionic/react';

function Example() {
  const [presentAlert] = useIonAlert();
  const [handlerMessage, setHandlerMessage] = useState('');
  const [roleMessage, setRoleMessage] = useState('');

  return (
    <>
      <IonButton
        onClick={() =>
          presentAlert({
            header: 'Alert!',
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  setHandlerMessage('Alert canceled');
                },
              },
              {
                text: 'OK',
                role: 'confirm',
                handler: () => {
                  setHandlerMessage('Alert confirmed');
                },
              },
            ],
            onDidDismiss: (e: CustomEvent) => setRoleMessage(`Dismissed with role: ${e.detail.role}`),
          })
        }
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
