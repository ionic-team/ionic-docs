```tsx
import React from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';

import './main.css';

function Example() {
  return (
    <IonFab slot="fixed" vertical="top" horizontal="center">
      <IonFabButton>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
    </IonFab>
  );
}
export default Example;
```
