```tsx
import React from 'react';
import { IonRange } from '@ionic/react';
function Example() {
  return (
    <IonRange labelPlacement="start">
      <div slot="label">Label at the Start</div>
    </IonRange>
    
    <br />
    
    <IonRange labelPlacement="end">
      <div slot="label">Label at the End</div>
    </IonRange>
    
    <br />
    
    <IonRange labelPlacement="fixed">
      <div slot="label">Fixed Width Label</div>
    </IonRange>
  );
}
export default Example;
```
