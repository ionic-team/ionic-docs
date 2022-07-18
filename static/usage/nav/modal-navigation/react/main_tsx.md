```tsx
import React, { useRef } from 'react';
import { IonNav, IonPage, IonHeader, IonToolbar, IonTitle, IonButton, IonContent, IonModal } from '@ionic/react';

import PageOne from './page-one';

function Example() {
  const nav = useRef<HTMLIonNavElement>();

  const onWillPresent = () => {
    if (nav.current) {
      nav.current.setRoot(PageOne, { nav: nav.current });
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Modal Navigation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton id="openModal">Open Modal</IonButton>
        <IonModal trigger="openModal" onWillPresent={onWillPresent}>
          <IonNav></IonNav>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}
export default Example;
```
