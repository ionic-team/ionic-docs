```tsx
import React from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';

function Example() {
  return (
    <IonFab>
      <IonFabButton>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
    </IonFab>
  );
}
export default Example;
```
