```tsx
import React from 'react';
import { IonContent, IonRange } from '@ionic/react';
function Example() {
  return (
    <IonContent>
      <IonRange ticks={true} snaps={true} min={0} max={10}></IonRange>
    </IonContent>
  );
}
export default Example;
```
