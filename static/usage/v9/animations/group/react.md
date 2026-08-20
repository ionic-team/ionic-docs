```tsx
import React, { useEffect, useRef } from 'react';
import { IonButton, IonCard, IonCardContent, createAnimation } from '@ionic/react';
import type { Animation } from '@ionic/react';

function Example() {
  const cardAEl = useRef<HTMLIonCardElement | null>(null);
  const cardBEl = useRef<HTMLIonCardElement | null>(null);
  const cardCEl = useRef<HTMLIonCardElement | null>(null);

  const animation = useRef<Animation | null>(null);

  useEffect(() => {
    if (animation.current === null) {
      const cardA = createAnimation()
        .addElement(cardAEl.current!)
        .keyframes([
          { offset: 0, transform: 'scale(1) rotate(0)' },
          { offset: 0.5, transform: 'scale(1.5) rotate(45deg)' },
          { offset: 1, transform: 'scale(1) rotate(0) ' },
        ]);

      const cardB = createAnimation()
        .addElement(cardBEl.current!)
        .keyframes([
          { offset: 0, transform: 'scale(1)', opacity: '1' },
          { offset: 0.5, transform: 'scale(1.5)', opacity: '0.3' },
          { offset: 1, transform: 'scale(1)', opacity: '1' },
        ]);

      const cardC = createAnimation()
        .addElement(cardCEl.current!)
        .duration(5000)
        .keyframes([
          { offset: 0, transform: 'scale(1)', opacity: '0.5' },
          { offset: 0.5, transform: 'scale(0.5)', opacity: '1' },
          { offset: 1, transform: 'scale(1)', opacity: '0.5' },
        ]);

      animation.current = createAnimation().duration(2000).iterations(Infinity).addAnimation([cardA, cardB, cardC]);
    }
  }, [cardAEl, cardBEl, cardCEl]);

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
      <IonCard ref={cardAEl}>
        <IonCardContent>Card 1</IonCardContent>
      </IonCard>

      <IonCard ref={cardBEl}>
        <IonCardContent>Card 2</IonCardContent>
      </IonCard>

      <IonCard ref={cardCEl}>
        <IonCardContent>Card 3</IonCardContent>
      </IonCard>

      <IonButton onClick={play}>Play</IonButton>
      <IonButton onClick={pause}>Pause</IonButton>
      <IonButton onClick={stop}>Stop</IonButton>
    </>
  );
}
export default Example;
```
