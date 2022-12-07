```tsx
import React from 'react';
import { IonButton, useIonToast } from '@ionic/react';

function Example() {
  const [present] = useIonToast();

  const presentToast = (position: 'top' | 'middle' | 'bottom') => {
    present({
      message: 'Hello World!',
      duration: 1500,
      position: position
    });
  };

  return (
    <>
      <IonButton expand="block" onClick={() => presentToast('top')}>Present Toast At the Top</IonButton>
      <IonButton expand="block" onClick={() => presentToast('middle')}>Present Toast At the Middle</IonButton>
      <IonButton expand="block" onClick={() => presentToast('bottom')}>Present Toast At the Bottom</IonButton>
    </>
  );
}
export default Example;
```
