```tsx
import React, { useEffect, useState } from 'react';
import { IonButton, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, useIonModal } from '@ionic/react';

const ModalExample = ({ onDismiss }) => (
  <div>
    <IonHeader>
      <IonToolbar>
        <IonButton slot="start" fill="clear" onClick={() => onDismiss('cancel')}>
          Cancel
        </IonButton>
        <IonTitle>Modal</IonTitle>
        <IonButton slot="end" fill="clear" onClick={() => onDismiss('confirm')}>
          Confirm
        </IonButton>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">Select a button to dismiss the modal.</IonContent>
  </div>
);

function Example() {
  const [present, dismiss] = useIonModal(ModalExample, {
    onDismiss: (role) => dismiss(null, role),
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    present({
      onDidDismiss: ({ detail }) => {
        setMessage(`Modal was dismissed with role: ${detail?.role}`);
      },
    });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Controller Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div>{message}</div>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```
