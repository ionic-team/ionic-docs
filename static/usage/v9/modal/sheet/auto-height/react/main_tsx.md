```tsx
import React, { useRef } from 'react';
import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage } from '@ionic/react';

import './main.css';

function Example() {
  const modal = useRef<HTMLIonModalElement>(null);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="open-modal" expand="block">
          Open Sheet Modal
        </IonButton>
        <IonModal ref={modal} trigger="open-modal" initialBreakpoint={1} breakpoints={[0, 1]}>
          <div className="block">Block of Content</div>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```
