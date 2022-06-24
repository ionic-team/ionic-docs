```tsx
import React from 'react';
import { IonButton, IonContent, useIonAlert } from '@ionic/react';

function Example() {
  const [presentAlert] = useIonAlert();

  return (
    <IonContent>
      <IonButton onClick={() => presentAlert({
        header: 'Select your favorite color',
        buttons: ['OK'],
        inputs: [
          {
            label: 'Red',
            type: 'radio',
            value: 'red'
          },
          {
            label: 'Blue',
            type: 'radio',
            value: 'blue'
          },
          {
            label: 'Green',
            type: 'radio',
            value: 'green'
          }
        ]
      })}>Click Me</IonButton>
    </IonContent>
  );
}
export default Example;
```
