```tsx
import React from 'react';
import { IonRange } from '@ionic/react';

import './main.css';

function Example() {
  return <IonRange min={0} max={10} value={5} pin={true} ticks={true} snaps={true}></IonRange>;
}

export default Example;
```
