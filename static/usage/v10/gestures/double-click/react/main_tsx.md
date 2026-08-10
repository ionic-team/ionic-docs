```tsx
import React, { useEffect, useRef } from 'react';
import { IonCard, IonCardContent, createGesture } from '@ionic/react';

import './main.css';

function Example() {
  const DOUBLE_CLICK_THRESHOLD = 500;
  const card = useRef<HTMLIonCardElement | null>(null);

  let lastOnStart = 0;
  let currentOffset = 0;

  const getNewTransform = () => {
    if (currentOffset >= 100) {
      currentOffset = 0;
    } else {
      currentOffset += 20;
    }

    return `translateX(${currentOffset}px)`;
  };

  const onStart = () => {
    const now = Date.now();

    if (Math.abs(now - lastOnStart) <= DOUBLE_CLICK_THRESHOLD) {
      if (card.current) {
        card.current.style.setProperty('transform', getNewTransform());
        lastOnStart = 0;
      }
    } else {
      lastOnStart = now;
    }
  };

  useEffect(() => {
    if (card.current) {
      const gesture = createGesture({
        el: card.current,
        threshold: 0,
        onStart,
        gestureName: 'double-click',
      });

      gesture.enable();
    }
  });

  return (
    <IonCard ref={card}>
      <IonCardContent>Double click me to move the card.</IonCardContent>
    </IonCard>
  );
}
export default Example;
```
