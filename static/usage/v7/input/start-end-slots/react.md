```tsx
import React from 'react';
import { IonButton, IonIcon, IonInput, IonItem, IonList } from '@ionic/react';
import { eye, lockClosed } from 'ionicons/icons';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonInput labelPlacement="stacked" label="Email" placeholder="email@domain.com">
          <IonIcon slot="start" icon={lockClosed} aria-hidden="true"></IonIcon>
          <IonButton fill="clear" slot="end" aria-label="Show/hide">
            <IonIcon slot="icon-only" name={eye} aria-hidden="true"></IonIcon>
          </IonButton>
        </IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
