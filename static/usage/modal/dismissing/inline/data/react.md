```tsx
import React, { useState, useRef } from 'react';
import {
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
} from '@ionic/react';

function Example() {
  const modal = useRef(null);
  const input = useRef(null);
  const [message, setMessage] = useState('');

  function dismiss() {
    modal.current?.dismiss(input.current?.value);
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
            setMessage(`Hello ${ev.detail.data}!`);
          }}
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle>Modal</IonTitle>
              <IonButton slot="end" fill="clear" onClick={() => dismiss()}>
                Dismiss
              </IonButton>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonLabel>Enter your name</IonLabel>
              <IonInput ref={input} type="text" placeholder="Your name" />
            </IonItem>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```
