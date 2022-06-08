```tsx
import React from 'react';
import { IonContent, IonRange } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonContent className="ion-padding">
      <IonRange value={50} pin={true}></IonRange>
    </IonContent>
  );
}
export default Example;
```
