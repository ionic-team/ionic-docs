```tsx
import React from 'react';
import { IonContent, IonRange } from '@ionic/react';
function Example() {
  return (
    <IonContent>
      <IonRange pin={true} pinFormatter={(value: number) => `${value}%`}></IonRange>
    </IonContent>
  );
}
export default Example;
```
