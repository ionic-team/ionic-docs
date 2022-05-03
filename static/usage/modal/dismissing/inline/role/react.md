```tsx
import React, { useState, useRef } from 'react';
import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage } from '@ionic/react';

function Example() {
  const modal = useRef(null);

  const [message, setMessage] = useState('');

  function dismiss(role) {
    modal.current?.dismiss(null, role);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inline Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p className="ion-text-center">{message}</p>
        <IonModal
          ref={modal}
          isOpen={true}
          onDidDismiss={(ev) => {
            setMessage(`Modal was dismissed with role: ${ev.detail.role}`);
          }}
        >
          <IonHeader>
            <IonToolbar>
              <IonButton slot="start" fill="clear" onClick={() => dismiss('cancel')}>
                Cancel
              </IonButton>
              <IonTitle>Modal</IonTitle>
              <IonButton slot="end" fill="clear" onClick={() => dismiss('confirm')}>
                Confirm
              </IonButton>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <p>Select a button to dismiss the modal.</p>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```
