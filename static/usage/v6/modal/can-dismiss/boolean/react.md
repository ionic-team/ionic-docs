```tsx
import React, { useState, useRef, useEffect } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
  IonLabel,
  IonCheckbox,
} from '@ionic/react';

function Example() {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(undefined);

  const [canDismiss, setCanDismiss] = useState(false);
  const [presentingElement, setPresentingElement] = useState<HTMLElement | undefined>(undefined);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  function dismiss() {
    modal.current?.dismiss();
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
        <IonModal ref={modal} trigger="open-modal" canDismiss={canDismiss} presentingElement={presentingElement}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Modal</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => dismiss()}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <p className="ion-padding-horizontal">You must accept the terms and conditions to close this modal.</p>
            <IonItem>
              <IonLabel className="ion-text-wrap" {...{ for: 'terms' }}>
                Do you accept the terms and conditions?
              </IonLabel>
              <IonCheckbox
                id="terms"
                checked={canDismiss}
                onIonChange={(ev) => {
                  setCanDismiss(ev.detail.checked);
                }}
              ></IonCheckbox>
            </IonItem>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```
