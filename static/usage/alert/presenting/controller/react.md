```tsx
import React, { useState } from 'react';
import { IonButton, IonContent, useIonAlert } from '@ionic/react';

function Example() {
  const [presentAlert] = useIonAlert();
  const [roleMsg, setRoleMsg] = useState('');

  return (
    <IonContent>
      <IonButton onClick={() => presentAlert({
        header: 'Alert',
        subHeader: 'Important message',
        message: 'This is an alert!',
        buttons: ['OK'],
        onDidDismiss: (e: CustomEvent) => setRoleMsg(`Popover dismissed with role: ${e.detail.role}`)
      })}>Click Me</IonButton>
      <p>{roleMsg}</p>
    </IonContent>
  );
}
export default Example;
```
