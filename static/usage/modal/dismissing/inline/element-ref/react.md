```tsx
import React, { useRef } from 'react';
import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage } from '@ionic/react';

function Example() {
  const modalRef = useRef(null);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inline Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p className="ion-text-center">This is the main content</p>
        <IonModal isOpen={true} ref={modalRef}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Modal</IonTitle>
              <IonButton slot="end" fill="clear" onClick={() => modalRef.current?.dismiss()}>
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
