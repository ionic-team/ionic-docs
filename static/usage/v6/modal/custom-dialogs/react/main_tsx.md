```tsx
import React, { useRef } from 'react';
import {
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';

import './main.css';

function Example() {
  const modal = useRef<HTMLIonModalElement>(null);

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
      <IonContent class="ion-padding">
        <IonButton id="open-custom-dialog" expand="block">
          Open Custom Dialog
        </IonButton>
        <IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
          <div className="wrapper">
            <h1>Dialog header</h1>
        
            <IonList lines="none">
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Item 1</IonLabel>
              </IonItem>
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Item 2</IonLabel>
              </IonItem>
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Item 3</IonLabel>
              </IonItem>
            </IonList>
          </div>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```
