```tsx
import React from 'react';
import { IonContent, IonRange } from '@ionic/react';
function Example() {
  return (
    <IonContent>
      <IonRange
        dualKnobs={true}
        value={{
          lower: 20,
          upper: 80,
        }}
      ></IonRange>
    </IonContent>
  );
}
export default Example;
```
