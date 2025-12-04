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
          <IonRadio value="wrapped-part" className="wrapped">
            Wrapping with text-wrap applied to label shadow part
          </IonRadio>
        </IonItem>
        <IonItem>
          <IonRadio value="wrapped-div">
            <div className="ion-text-wrap">Wrapping with ion-text-wrap class applied wrapper element</div>
          </IonRadio>
        </IonItem>
      </IonRadioGroup>
    </IonList>
  );
}
export default Example;
```
