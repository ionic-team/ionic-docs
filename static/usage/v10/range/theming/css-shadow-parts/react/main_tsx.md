```tsx
import React from 'react';
import { IonRange } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <h2>Single Knob</h2>
      <IonRange
        id="range-single"
        aria-label="Custom range"
        min={0}
        max={10}
        value={5}
        pin={true}
        ticks={true}
        snaps={true}
      ></IonRange>

      <h2>Dual Knobs (A/B)</h2>
      <IonRange
        id="range-a-b"
        aria-label="Custom dual knob range with A/B styling"
        min={0}
        max={10}
        value={{ lower: 3, upper: 7 }}
        dualKnobs={true}
        pin={true}
      ></IonRange>

      <h2>Dual Knobs (Lower/Upper)</h2>
      <IonRange
        id="range-lower-upper"
        aria-label="Custom dual knob range with lower/upper styling"
        min={0}
        max={10}
        value={{ lower: 3, upper: 7 }}
        dualKnobs={true}
        pin={true}
      ></IonRange>
    </>
  );
}

export default Example;
```
