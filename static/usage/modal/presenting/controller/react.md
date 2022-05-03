```tsx
import React from 'react';
import { IonButton, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, useIonModal } from '@ionic/react';

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
    <IonContent class="ion-padding">This is an example of an controller full-height modal.</IonContent>
  </div>
);

function Example() {
  const [present, dismiss] = useIonModal(ModalExample, {
    onDismiss: () => dismiss(),
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Controller Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton onClick={() => present()}>Open Modal</IonButton>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```
