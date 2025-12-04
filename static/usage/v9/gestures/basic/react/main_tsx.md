```tsx
import React, { useEffect, useRef } from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, createGesture } from '@ionic/react';
import type { GestureDetail } from '@ionic/react';

import './main.css';

function Example() {
  const card = useRef<HTMLIonCardElement | null>(null);
  const debug = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (card.current) {
      const target = card.current.closest('ion-content');

      if (target) {
        const gesture = createGesture({
          el: target,
          onStart: () => onStart(),
          onMove: (detail) => onMove(detail),
          onEnd: () => onEnd(),
          gestureName: 'example',
        });

        gesture.enable();
      }
    }
  }, [card]);

  const onStart = () => {
    card.current?.classList.add('active');
  };

  const onMove = (detail: GestureDetail) => {
    const { type, currentX, deltaX, velocityX } = detail;

    if (debug.current) {
      debug.current.innerHTML = `
        <div>Type: ${type}</div>
        <div>Current X: ${currentX}</div>
        <div>Delta X: ${deltaX}</div>
        <div>Velocity X: ${velocityX}</div>`;
    }
  };

  const onEnd = () => {
    card.current?.classList.remove('active');
  };

  return (
    <IonCard ref={card}>
      <IonCardHeader>
        <IonCardSubtitle>Pan the Screen</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <p ref={debug}>Gesture information will display after interaction.</p>
      </IonCardContent>
    </IonCard>
  );
}
export default Example;
```
