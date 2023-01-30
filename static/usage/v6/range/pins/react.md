```tsx
import React from 'react';
import { IonRange } from '@ionic/react';
function Example() {
  return <IonRange pin={true} pinFormatter={(value: number) => `${value}%`}></IonRange>;
}
export default Example;
```
