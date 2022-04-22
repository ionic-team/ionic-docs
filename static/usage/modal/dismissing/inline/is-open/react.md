```tsx
import React, { useState } from 'react';
import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage } from '@ionic/react';

function Example() {
  const [isModalOpen, setModalOpen] = useState(true);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inline Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p className="ion-text-center">This is the main content</p>
        <IonModal isOpen={isModalOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Modal</IonTitle>
              <IonButton slot="end" fill="clear" onClick={() => setModalOpen(false)}>
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
