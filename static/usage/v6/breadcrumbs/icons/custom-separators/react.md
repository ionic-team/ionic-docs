```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/react';
import { arrowForwardCircle } from 'ionicons/icons';

function Example() {
  return (
    <IonBreadcrumbs>
      <IonBreadcrumb href="#home">
        Home
        <IonIcon slot="separator" icon={arrowForwardCircle}></IonIcon>
      </IonBreadcrumb>
      <IonBreadcrumb href="#electronics">
        Electronics
        <IonIcon slot="separator" icon={arrowForwardCircle}></IonIcon>
      </IonBreadcrumb>
      <IonBreadcrumb href="#cameras">
        Cameras
        <IonIcon slot="separator" icon={arrowForwardCircle}></IonIcon>
      </IonBreadcrumb>
      <IonBreadcrumb href="#film">
        Film
        <IonIcon slot="separator" icon={arrowForwardCircle}></IonIcon>
      </IonBreadcrumb>
    </IonBreadcrumbs>
  );
}
export default Example;
```
