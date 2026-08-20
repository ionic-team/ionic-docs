```tsx
import React, { useEffect, useRef } from 'react';
import { IonCard, IonCardContent, createAnimation, createGesture } from '@ionic/react';
import type { Animation, Gesture, GestureDetail } from '@ionic/react';

import './main.css';

function Example() {
  const cardEl = useRef<HTMLIonCardElement | null>(null);
  const animation = useRef<Animation | null>(null);
  const gesture = useRef<Gesture | null>(null);
  const initialStep = useRef<number>(0);
  const started = useRef<boolean>(false);

  useEffect(() => {
    if (animation.current === null) {
      /**
       * The track is 344px wide.
       * The card is 100px wide.
       * We want 16px of margin on each end of the track.
       */
      const MAX_TRANSLATE = 344 - 100 - 32;

      animation.current = createAnimation()
        .addElement(cardEl.current!)
        .duration(1000)
        .fromTo('transform', 'translateX(0)', `translateX(${MAX_TRANSLATE}px)`);

      gesture.current = createGesture({
        el: cardEl.current!,
        threshold: 0,
        gestureName: 'card-drag',
        onMove: (event) => onMove(event),
        onEnd: (event) => onEnd(event),
      });

      gesture.current.enable(true);

      const onMove = (event: GestureDetail) => {
        if (!started.current) {
          animation.current!.progressStart();
          started.current = true;
        }

        animation.current!.progressStep(getStep(event));
      };

      const onEnd = (event: GestureDetail) => {
        if (!started.current) {
          return;
        }

        gesture.current!.enable(false);

        const step = getStep(event);
        const shouldComplete = step > 0.5;

        animation.current!.progressEnd(shouldComplete ? 1 : 0, step).onFinish(() => {
          gesture.current!.enable(true);
        });

        initialStep.current = shouldComplete ? MAX_TRANSLATE : 0;
        started.current = false;
      };

      const clamp = (min: number, n: number, max: number) => {
        return Math.max(min, Math.min(n, max));
      };

      const getStep = (event: GestureDetail) => {
        const delta = initialStep.current + event.deltaX;
        return clamp(0, delta / MAX_TRANSLATE, 1);
      };
    }
  }, [cardEl]);

  return (
    <>
      <div className="container">
        <div className="track">
          <IonCard id="card" button={true} ref={cardEl}>
            <IonCardContent>Card</IonCardContent>
          </IonCard>
        </div>

        <p>Drag the square along the track.</p>
      </div>
    </>
  );
}
export default Example;
```
