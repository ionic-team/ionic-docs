```tsx
import React, { useState } from 'react';
import { IonButton, IonToast } from '@ionic/react';

function Example() {
  const [handlerMessage, setHandlerMessage] = useState('');
  const [roleMessage, setRoleMessage] = useState('');

  return (
    <>
      <IonButton id="open-toast">Open Toast</IonButton>
      <IonToast
        trigger="open-toast"
        message="Hello World!"
        duration={3000}
        buttons={[
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
        ]}
        onDidDismiss={(e: CustomEvent) => setRoleMessage(`Dismissed with role: ${e.detail.role}`)}
      ></IonToast>
      <p>{handlerMessage}</p>
      <p>{roleMessage}</p>
    </>
  );
}
export default Example;
```
