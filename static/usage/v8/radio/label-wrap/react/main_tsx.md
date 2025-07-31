```tsx
import React from 'react';
import { IonList, IonItem, IonRadio, IonRadioGroup } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonList>
      <IonRadioGroup value="truncated">
        <IonItem>
          <IonRadio value="truncated">Truncated with ellipsis by default</IonRadio>
        </IonItem>
        <IonItem>
          <IonRadio value="wrapped" className="wrapped">
            `text-wrap` applied to `label` shadow part
          </IonRadio>
        </IonItem>
      </IonRadioGroup>
    </IonList>
  );
}
export default Example;
```
