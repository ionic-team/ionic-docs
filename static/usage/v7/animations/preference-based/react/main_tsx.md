```tsx
import React, { useEffect, useRef } from 'react';
import { IonButton, IonCard, IonCardContent, createAnimation } from '@ionic/react';
import type { Animation } from '@ionic/react';

import './main.css';

function Example() {
  const cardEl = useRef<HTMLIonCardElement | null>(null);

  const animation = useRef<Animation | null>(null);

  useEffect(() => {
    if (animation.current === null) {
      animation.current = createAnimation()
        .addElement(cardEl.current!)
        .duration(1500)
        .iterations(Infinity)
        .direction('alternate')
        .fromTo('background', 'blue', 'var(--background)');
    }
  }, [cardEl]);

  const play = () => {
    animation.current?.play();
  };
  const pause = () => {
    animation.current?.pause();
  };
  const stop = () => {
    animation.current?.stop();
  };

  return (
    <>
      <IonCard ref={cardEl}>
        <IonCardContent>Card</IonCardContent>
      </IonCard>

      <IonButton onClick={play}>Play</IonButton>
      <IonButton onClick={pause}>Pause</IonButton>
      <IonButton onClick={stop}>Stop</IonButton>
    </>
  );
}
export default Example;
```
