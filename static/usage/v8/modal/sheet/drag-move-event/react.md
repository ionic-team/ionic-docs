```tsx
import React, { useRef } from 'react';
import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonLabel } from '@ionic/react';
import type { ModalDragEventDetail } from '@ionic/react';

function Example() {
  const header = useRef<HTMLIonHeaderElement>(null);

  const onDragMove = (event: CustomEvent<ModalDragEventDetail>) => {
    // `progress` is a value from 1 (top) to 0 (bottom)
    const { progress } = event.detail;
    const headerEl = header.current!;

    /**
     * Inverse relationship:
     * 1.0 progress = 0 opacity
     * 0 progress = 1.0 opacity
     */
    const currentOpacity = 1 - progress;

    headerEl.style.opacity = currentOpacity.toString();
  };

  const onDragEnd = (event: CustomEvent<ModalDragEventDetail>) => {
    // `currentBreakpoint` tells us which snap point the modal will animate to after the drag ends
    const { progress, currentBreakpoint } = event.detail;
    const headerEl = header.current!;

    /**
     * If the modal is snapping to the closed state (0), reset the
     * styles.
     */
    if (currentBreakpoint === 0) {
      headerEl.style.removeProperty('opacity');
      headerEl.style.removeProperty('transition');
      return;
    }

    // Smooth transition to the final resting opacity
    headerEl.style.transition = 'opacity 0.4s ease';
    // The final opacity matches the inverse of the resting progress
    headerEl.style.opacity = (1 - progress).toString();
  };

  const onWillDismiss = () => {
    const headerEl = header.current!;

    // Reset styles when the modal is dismissed
    headerEl.style.removeProperty('opacity');
    headerEl.style.removeProperty('transition');
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
          onIonDragMove={onDragMove}
          onIonDragEnd={onDragEnd}
          onWillDismiss={onWillDismiss}
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
