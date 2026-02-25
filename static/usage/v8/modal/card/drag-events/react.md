```tsx
import React, { useRef, useState, useEffect } from 'react';
import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonLabel } from '@ionic/react';

function Example() {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef<HTMLDivElement>(null);

  const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);

  const DARKEST_PERCENT = 50;
  const BRIGHTNESS_RANGE = 100 - DARKEST_PERCENT;

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  const onModalWillPresent = () => {
    page.current!.style.transition = 'filter 0.4s ease';
    // Set to max darkness immediately
    page.current!.style.setProperty('filter', `brightness(${DARKEST_PERCENT}%)`, 'important');
  };

  const onDragStart = () => {
    // Ensure transitions are off during the active drag
    page.current!.style.transition = 'none';
  };

  const onDragMove = (event: CustomEvent) => {
    // `progress` is a value from 1 (top) to 0 (bottom)
    const { progress } = event.detail;

    /**
     * Calculate the current brightness based on how far the user has
     * dragged.
     *
     * When dragging up, the background should become darker,
     * and when dragging down, it should become lighter.
     */
    const brightnessValue = 100 - progress * BRIGHTNESS_RANGE;

    // Update the brightness in real-time as the user drags
    page.current!.style.setProperty('filter', `brightness(${brightnessValue}%)`, 'important');
  };

  const onDragEnd = (event: CustomEvent) => {
    // `progress` is a value from 1 (top) to 0 (bottom)
    const { progress } = event.detail;

    /**
     * Snap the background brightness based on the user's drag intent.
     * Progress > 0.4 implies an intent to open (snap dark),
     * while < 0.4 implies a dismissal (snap bright).
     */
    const brightnessValue = progress > 0.4 ? DARKEST_PERCENT : 100;

    // Reset to max darkness on snap-back for a nice visual effect
    page.current!.style.setProperty('filter', `brightness(${brightnessValue}%)`, 'important');

    // Re-enable transition for a smooth snap-back
    page.current!.style.transition = 'filter 0.4s ease';
  };

  const onModalWillDismiss = () => {
    // Clean up styles when the modal is dismissed
    page.current!.style.removeProperty('filter');
    page.current!.style.removeProperty('transition');
  };

  return (
    <IonPage ref={page}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="open-modal" expand="block">
          Open Card Modal
        </IonButton>

        <IonModal
          ref={modal}
          trigger="open-modal"
          presentingElement={presentingElement!}
          onIonModalWillPresent={onModalWillPresent}
          onIonDragStart={onDragStart}
          onIonDragMove={onDragMove}
          onIonDragEnd={onDragEnd}
          onIonModalWillDismiss={onModalWillDismiss}
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle>Modal</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <div className="ion-margin-top">
              <IonLabel>Drag the handle to adjust the background brightness based on a custom brightness.</IonLabel>
            </div>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```
