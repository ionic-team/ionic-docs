```tsx
import React from 'react';
import { IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage } from '@ionic/react';

function Example() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inline Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonModal isOpen={true}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Modal</IonTitle>
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
