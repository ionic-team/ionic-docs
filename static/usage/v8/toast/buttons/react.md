```tsx
import React from 'react';
import { IonButton, IonToast } from '@ionic/react';

function Example() {
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
            handler: () => {
              console.log('More Info clicked');
            },
          },
          {
            text: 'Dismiss',
            role: 'cancel',
            handler: () => {
              console.log('Dismiss clicked');
            },
          },
        ]}
        onDidDismiss={(e: CustomEvent) => console.log(`Dismissed with role: ${e.detail.role}`)}
      ></IonToast>
    </>
  );
}
export default Example;
```
