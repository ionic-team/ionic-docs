```tsx
import React, { useRef } from 'react';
import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonLabel } from '@ionic/react';
import type { ModalDragEventDetail } from '@ionic/react';

function Example() {
  const header = useRef<HTMLIonHeaderElement>(null);
  // Assign the current snap breakpoint to the initial breakpoint so
  // that we can track changes during the drag
  const currentSnap = useRef(0.25);

  const onDragMove = (event: CustomEvent<ModalDragEventDetail>) => {
    // `progress` is a value from 1 (top) to 0 (bottom)
    // `snapBreakpoint` tells us which snap point the modal will animate to after the drag ends
    const { progress, snapBreakpoint } = event.detail;
    const headerEl = header.current!;

    if (currentSnap.current !== snapBreakpoint) {
      currentSnap.current = snapBreakpoint as number;

      console.log('Current snap breakpoint:', snapBreakpoint);
    }

    /**
     * Inverse relationship:
     * 1.0 progress = 0 opacity
     * 0 progress = 1.0 opacity
     */
    const currentOpacity = 1 - progress;

    headerEl.style.opacity = currentOpacity.toString();
  };

  const onDragEnd = (event: CustomEvent<ModalDragEventDetail>) => {
    // `progress` is a value from 1 (top) to 0 (bottom)
    // `snapBreakpoint` tells us which snap point the modal will animate to after the drag ends
    const { progress, snapBreakpoint } = event.detail;
    const headerEl = header.current!;

    /**
     * If the modal is snapping to the closed state (0), reset the
     * styles.
     */
    if (snapBreakpoint === 0) {
      headerEl.style.removeProperty('opacity');
      headerEl.style.removeProperty('transition');
      return;
    }

    // Smooth transition to the final resting opacity
    headerEl.style.transition = 'opacity 0.4s ease';
    // The final opacity matches the inverse of the resting progress
    headerEl.style.opacity = (1 - progress).toString();
  };

  /**
   * If the user dismisses the modal (e.g. tapping the backdrop),
   * reset the styles.
   */
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
