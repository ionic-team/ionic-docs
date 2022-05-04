```tsx
import React, { useState, useRef } from 'react';
import {
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
  const modal = useRef(null);

  const [canDismiss, setCanDismiss] = useState(false);

  function dismiss() {
    modal.current?.dismiss();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="open-modal" expand="block">
          Open
        </IonButton>
        <IonModal ref={modal} trigger="open-modal" canDismiss={canDismiss}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Modal</IonTitle>
              <IonButton slot="end" fill="clear" onClick={() => dismiss()}>
                Close
              </IonButton>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <p>You must accept the terms and conditions to close this modal.</p>
            <IonItem>
              <IonLabel className="ion-text-wrap" for="terms">
                Do you accept the terms and conditions?
              </IonLabel>
              <IonCheckbox
                id="terms"
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
