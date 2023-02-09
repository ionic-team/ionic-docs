```tsx
import React from 'react';
import { IonRange } from '@ionic/react';
function Example() {
  return (
    <IonRange
      aria-label="Dual Knobs Range"
      dualKnobs={true}
      value={{
        lower: 20,
        upper: 80,
      }}
    ></IonRange>
  );
}
export default Example;
```
