```tsx
import React from 'react';
import { IonButton, useIonToast } from '@ionic/react';

function Example() {
  const [presentToast] = useIonToast();

  return (
    <>
      <IonButton
        onClick={() => {
          presentToast({
            duration: 3000,
            message: 'This is a toast with a long message and a button that appears on the next line.',
            buttons: [{ text: 'Action With Long Text' }],
          });
        }}
      >
        Open Baseline Layout Toast
      </IonButton>
      <IonButton
        onClick={() => {
          presentToast({
            duration: 3000,
            message: 'This is a toast with a long message and a button that appears on the next line.',
            buttons: [{ text: 'Action With Long Text' }],
            layout: 'stacked',
          });
        }}
      >
        Open Stacked Layout Toast
      </IonButton>
    </>
  );
}
export default Example;
```
