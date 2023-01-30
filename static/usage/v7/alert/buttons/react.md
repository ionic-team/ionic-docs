```tsx
import React, { useState } from 'react';
import { IonAlert, IonButton } from '@ionic/react';

function Example() {
  const [handlerMessage, setHandlerMessage] = useState('');
  const [roleMessage, setRoleMessage] = useState('');

  return (
    <>
      <IonButton id="present-alert">Click Me</IonButton>
      <IonAlert
        header="Alert!"
        trigger="present-alert"
        buttons={[
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
        ]}
        onDidDismiss={({ detail }) => setRoleMessage(`Dismissed with role: ${detail.role}`)}
      ></IonAlert>
      <p>{handlerMessage}</p>
      <p>{roleMessage}</p>
    </>
  );
}
export default Example;
```
