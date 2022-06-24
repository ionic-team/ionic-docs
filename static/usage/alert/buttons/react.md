```tsx
import React, { useState } from 'react';
import { IonButton, IonContent, useIonAlert } from '@ionic/react';

function Example() {
  const [presentAlert] = useIonAlert();
  const [message, setMessage] = useState('');

  return (
    <IonContent>
      <IonButton onClick={() => presentAlert({
        header: 'Alert!',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => { setMessage('Alert canceled'); }
          },
          {
            text: 'OK',
            handler: () => { setMessage('Alert confirmed'); }
          }
        ]
      })}>Click Me</IonButton>
      <p>{message}</p>
    </IonContent>
  );
}
export default Example;
```
