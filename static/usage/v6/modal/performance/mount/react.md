```tsx
import React, { useRef } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
} from '@ionic/react';

function Example() {
  const modal = useRef<HTMLIonModalElement>(null);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="open-modal" expand="block">
          Open Modal
        </IonButton>
        <IonModal ref={modal} keepContentsMounted={true} trigger="open-modal">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>Close</IonButton>
              </IonButtons>
              <IonTitle>Modal</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            This content was mounted as soon as the modal was created.
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```
