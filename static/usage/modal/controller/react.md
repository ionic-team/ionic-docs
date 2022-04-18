```tsx
import React, { useRef } from 'react';
import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, useIonModal } from '@ionic/react';

const ModalExample = ({ onDismiss }) => (
  <div>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Modal</IonTitle>
        <IonButton slot="end" fill="clear" onClick={() => onDismiss()}>
          Dismiss
        </IonButton>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">This is an example of an inline full-height modal.</IonContent>
  </div>
);

function Example() {
  const modal = useRef(null);

  const [present, dismiss] = useIonModal(ModalExample, {
    onDismiss: () => dismiss(),
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inline Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={() => present()}>Open Modal</IonButton>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```
