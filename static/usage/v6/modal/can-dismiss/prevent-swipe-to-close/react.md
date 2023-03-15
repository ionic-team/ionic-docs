```tsx
import React, { useState, useRef, useEffect } from 'react';
import { IonButtons, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage } from '@ionic/react';

function Example() {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);

  const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }

  async function canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

  return (
    <IonPage ref={page}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="open-modal" expand="block">
          Open
        </IonButton>
        <IonModal ref={modal} trigger="open-modal" canDismiss={canDismiss} presentingElement={presentingElement!}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Modal</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => dismiss()}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <p>
              To close this modal, please use the "Close" button provided. Note that swiping the modal will not dismiss
              it.
            </p>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```
