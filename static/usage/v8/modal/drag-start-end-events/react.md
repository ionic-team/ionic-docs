```tsx
import React, { useRef } from 'react';
import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonLabel } from '@ionic/react';
import type { ModalDragEventDetail } from '@ionic/react';

function Example() {
  const header = useRef<HTMLIonHeaderElement>(null);

  const onDragStart = () => {
    console.log('Drag started');

    const headerEl = header.current!;

    headerEl.style.opacity = '0';
  };

  const onDragEnd = (event: CustomEvent<ModalDragEventDetail>) => {
    console.log('Drag ended');

    const headerEl = header.current!;

    headerEl.style.opacity = '1';
  };

  return (
    <IonPage>
      <IonHeader ref={header}>
        <IonToolbar>
          <IonTitle>App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="open-modal" expand="block">
          Open Sheet Modal
        </IonButton>
        <IonModal
          trigger="open-modal"
          initialBreakpoint={0.25}
          breakpoints={[0, 0.25, 0.5, 0.75, 1]}
          onIonDragStart={onDragStart}
          onIonDragEnd={onDragEnd}
        >
          <IonContent className="ion-padding">
            <div className="ion-margin-top">
              <IonLabel>Drag the handle to adjust the header's visibility.</IonLabel>
            </div>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```
