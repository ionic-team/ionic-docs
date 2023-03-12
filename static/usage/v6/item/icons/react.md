```tsx
import React from 'react';
import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { informationCircle, star } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonItem>
        <IonLabel>
          Default Icon
        </IonLabel>
        <IonIcon icon={informationCircle} slot="end"></IonIcon>
      </IonItem>

      <IonItem>
        <IonLabel>
          Large Icon
        </IonLabel>
        <IonIcon icon={informationCircle} size="large" slot="end"></IonIcon>
      </IonItem>

      <IonItem>
        <IonLabel>
          Small Icon
        </IonLabel>
        <IonIcon icon={informationCircle} size="small" slot="end"></IonIcon>
      </IonItem>

      <IonItem>
        <IonIcon icon={star} slot="start"></IonIcon>
        <IonLabel>
          Default Icon
        </IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```
