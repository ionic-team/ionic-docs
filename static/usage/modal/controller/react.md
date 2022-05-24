```tsx
import React, { useState, useRef } from 'react';
import {
  IonButton,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
  useIonModal,
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';

const ModalExample = ({
  onDismiss,
}: {
  onDismiss: (data?: string | null | undefined | number, role?: string) => void;
}) => {
  const inputRef = useRef<HTMLIonInputElement>(null);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot="start" fill="clear" color="medium" onClick={() => onDismiss(null, 'cancel')}>
            Cancel
          </IonButton>
          <IonTitle>Welcome</IonTitle>
          <IonButton slot="end" fill="clear" onClick={() => onDismiss(inputRef.current?.value, 'confirm')}>
            Confirm
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Enter your name</IonLabel>
          <IonInput ref={inputRef} placeholder="Your name" />
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

function Example() {
  const [present, dismiss] = useIonModal(ModalExample, {
    onDismiss: (data: string, role: string) => dismiss(data, role),
  });
  const [message, setMessage] = useState('This modal example uses the modalController to present and dismiss modals.');

  function openModal() {
    present({
      onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => {
        if (ev.detail.role === 'confirm') {
          setMessage(`Hello, ${ev.detail.data}!`);
        }
      },
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Controller Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="block" onClick={() => openModal()}>
          Open
        </IonButton>
        <p>{message}</p>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```
