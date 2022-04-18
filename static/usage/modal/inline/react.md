```tsx
import React, { useRef } from 'react';
import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage } from '@ionic/react';

function Example() {
  const modal = useRef(null);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inline Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton id="open-modal">Open Modal</IonButton>
        <IonModal ref={modal} trigger="open-modal">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Modal</IonTitle>
              <IonButton slot="end" fill="clear" onClick={() => modal.current?.dismiss()}>
                Dismiss
              </IonButton>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">This is an example of an inline full-height modal.</IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```
