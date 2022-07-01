```tsx
import React, { useState } from 'react';
import { IonButton, IonContent, useIonAlert } from '@ionic/react';

function Example() {
  const [presentAlert] = useIonAlert();
  const [handlerMessage, setHandlerMessage] = useState('');
  const [roleMessage, setRoleMessage] = useState('');

  return (
    <IonContent>
      <IonButton onClick={() => presentAlert({
        header: 'Alert!',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => { setHandlerMessage('Alert canceled'); }
          },
          {
            text: 'OK',
            role: 'confirm',
            handler: () => { setHandlerMessage('Alert confirmed'); }
          }
        ],
        onDidDismiss: (e: CustomEvent) => setRoleMessage(`Dismissed with role: ${e.detail.role}`)
      })}>Click Me</IonButton>
      <p>{handlerMessage}</p>
      <p>{roleMessage}</p>
    </IonContent>
  );
}
export default Example;
```
