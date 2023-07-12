```tsx
import React, { useEffect, useRef } from 'react';
import { IonButton, createAnimation } from '@ionic/react';
import type { Animation } from '@ionic/react';

function Example() {
  const squareEl = useRef<HTMLDivElement | null>(null);

  const animation = useRef<Animation | null>(null);

  useEffect(() => {
    if (animation.current === null) {
      animation.current = createAnimation()
        .addElement(squareEl.current!)
        .duration(3000)
        .iterations(Infinity)
        .keyframes([
          { offset: 0, background: 'red' },
          { offset: 0.72, background: 'var(--background)' },
          { offset: 1, background: 'green' },
        ]);
    }
  }, [squareEl]);

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
      <div
        ref={squareEl}
        style={
          {
            width: '100px',
            height: '100px',
            background: 'red',
            '--background': 'yellow',
          } as React.CSSProperties
        }
      ></div>
      <IonButton onClick={play}>Play</IonButton>
      <IonButton onClick={pause}>Pause</IonButton>
      <IonButton onClick={stop}>Stop</IonButton>
    </>
  );
}
export default Example;
```
