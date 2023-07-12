```tsx
import React, { useEffect, useRef } from 'react';
import { IonButton, IonCard, IonCardContent, createAnimation } from '@ionic/react';
import type { Animation } from '@ionic/react';

function Example() {
  const cardAEl = useRef<HTMLIonCardElement | null>(null);
  const cardBEl = useRef<HTMLIonCardElement | null>(null);
  const cardCEl = useRef<HTMLIonCardElement | null>(null);

  const cardA = useRef<Animation>();
  const cardB = useRef<Animation>();
  const cardC = useRef<Animation>();

  useEffect(() => {
    if (!cardA.current) {
      cardA.current = createAnimation()
        .addElement(cardAEl.current!)
        .fill('none')
        .duration(1000)
        .keyframes([
          { offset: 0, transform: 'scale(1) rotate(0)' },
          { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
          { offset: 1, transform: 'scale(1) rotate(0)' },
        ]);
    }

    if (!cardB.current) {
      cardB.current = createAnimation()
        .addElement(cardBEl.current!)
        .fill('none')
        .duration(1000)
        .keyframes([
          { offset: 0, transform: 'scale(1)', opacity: '1' },
          { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
          { offset: 1, transform: 'scale(1)', opacity: '1' },
        ]);
    }
    if (!cardC.current) {
      cardC.current = createAnimation()
        .addElement(cardCEl.current!)
        .fill('none')
        .duration(1000)
        .keyframes([
          { offset: 0, transform: 'scale(1)', opacity: '0.5' },
          { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
          { offset: 1, transform: 'scale(1)', opacity: '0.5' },
        ]);
    }
  }, [cardAEl, cardBEl, cardCEl]);

  const play = async () => {
    await cardA.current?.play();
    await cardB.current?.play();
    await cardC.current?.play();
  };
  const pause = () => {
    cardA.current?.pause();
    cardB.current?.pause();
    cardC.current?.pause();
  };
  const stop = () => {
    cardA.current?.stop();
    cardB.current?.stop();
    cardC.current?.stop();
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
