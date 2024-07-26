```tsx
import React from 'react';
import { IonRange, IonIcon } from '@ionic/react';
import { snowOutline, sunnyOutline } from 'ionicons/icons';

function Example() {
  return (
    <IonRange>
      <IonIcon slot="start" icon={snowOutline}></IonIcon>
      <IonIcon slot="end" icon={sunnyOutline}></IonIcon>
    </IonRange>
  );
}
export default Example;
```
