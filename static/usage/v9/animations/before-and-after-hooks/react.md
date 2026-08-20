```tsx
import React, { useEffect, useRef } from 'react';
import { IonButton, IonCard, IonCardContent, createAnimation } from '@ionic/react';
import type { Animation } from '@ionic/react';

function Example() {
  const cardEl = useRef<HTMLIonCardElement | null>(null);

  const card = useRef<Animation>();

  useEffect(() => {
    if (!card.current) {
      card.current = createAnimation()
        .addElement(cardEl.current!)
        .duration(2000)
        .beforeStyles({
          filter: 'invert(75%)',
        })
        .beforeClearStyles(['box-shadow'])
        .afterStyles({
          'box-shadow': 'rgba(255, 0, 50, 0.4) 0px 4px 16px 6px',
        })
        .afterClearStyles(['filter'])
        .keyframes([
          { offset: 0, transform: 'scale(1)' },
          { offset: 0.5, transform: 'scale(1.5)' },
          { offset: 1, transform: 'scale(1)' },
        ]);
    }
  }, [cardEl]);

  const play = async () => {
    await card.current?.play();
  };
  const pause = () => {
    card.current?.pause();
  };
  const stop = () => {
    card.current?.stop();
  };

  return (
    <>
      <IonCard ref={cardEl}>
        <IonCardContent>Card</IonCardContent>
      </IonCard>

      <IonButton id="play" onClick={play}>
        Play
      </IonButton>
      <IonButton id="pause" onClick={pause}>
        Pause
      </IonButton>
      <IonButton id="stop" onClick={stop}>
        Stop
      </IonButton>
    </>
  );
}
export default Example;
```
