```tsx
import React, { useEffect, useState, useRef } from 'react';
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

const ModalExample = ({ onDismiss }) => {
  const inputRef = useRef(null);
  return (
    <div>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Modal</IonTitle>
          <IonButton slot="end" fill="clear" onClick={() => onDismiss(inputRef.current?.value)}>
            Dismiss
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonItem>
          <IonLabel>Enter your name</IonLabel>
          <IonInput ref={inputRef} placeholder="Your name" />
        </IonItem>
      </IonContent>
    </div>
  );
};

function Example() {
  const [present, dismiss] = useIonModal(ModalExample, {
    onDismiss: () => dismiss(),
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    present({
      onDidDismiss: (ev) => {
        const name = ev.detail.data;
        setMessage(`Hell, ${name}!`);
      },
    });
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Controller Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p className="ion-text-center">{message}</p>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```
