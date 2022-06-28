```tsx
import React from 'react';
import { IonButton, IonContent, useIonAlert } from '@ionic/react';

function Example() {
  const [presentAlert] = useIonAlert();

  return (
    <IonContent>
      <IonButton onClick={() => presentAlert({
        header: 'Alert',
        subHeader: 'Important message',
        message: 'This is an alert!',
        buttons: ['OK'],
      })}>Click Me</IonButton>
    </IonContent>
  );
}
export default Example;
```
