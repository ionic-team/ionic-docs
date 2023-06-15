```tsx
import React from 'react';
import { IonRange } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonRange aria-label="Custom range" min={0} max={10} value={5} pin={true} ticks={true} snaps={true}></IonRange>
  );
}

export default Example;
```
