```tsx
import React from 'react';
import { IonButton, IonIcon, IonItem, IonList, IonTextarea } from '@ionic/react';
import { eye, lockClosed } from 'ionicons/icons';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonTextarea labelPlacement="stacked" label="Comments" placeholder="Enter your comments">
          <IonIcon slot="start" icon={lockClosed} aria-hidden="true"></IonIcon>
          <IonButton fill="clear" slot="end" aria-label="Show/hide">
            <IonIcon slot="icon-only" name={eye} aria-hidden="true"></IonIcon>
          </IonButton>
        </IonTextarea>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
