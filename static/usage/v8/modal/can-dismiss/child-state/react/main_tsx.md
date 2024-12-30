```tsx
import React, { useState, useRef, useEffect } from 'react';
import {
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  useIonActionSheet,
} from '@ionic/react';

import Child from './Child';

function Example() {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);
  const [canDismissOverride, setCanDismissOverride] = useState(false);

  const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);
  const [present] = useIonActionSheet();

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }

  function onWillPresent() {
    // Resets the override when the modal is presented
    setCanDismissOverride(false);
  }

  async function canDismiss() {
    if (canDismissOverride) {
      // Checks for the override flag to return early if we can dismiss the overlay immediately
      return true;
    }
    return new Promise<boolean>((resolve, reject) => {
      present({
        header: 'Are you sure?',
        buttons: [
          {
            text: 'Yes',
            role: 'confirm',
          },
          {
            text: 'No',
            role: 'cancel',
          },
        ],
        onWillDismiss: (event) => {
          if (event.detail.role === 'confirm') {
            resolve(true);
          } else {
            reject();
          }
        },
      });
    });
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
        <IonModal
          ref={modal}
          trigger="open-modal"
          canDismiss={canDismiss}
          presentingElement={presentingElement!}
          onWillPresent={onWillPresent}
        >
          <Child
            dismiss={dismiss}
            dismissChange={(checked) => {
              setCanDismissOverride(checked);
            }}
          />
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```
