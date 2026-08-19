```tsx
import React, { useState } from 'react';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';

function Example() {
  const [maxBreadcrumbs, setMaxBreadcrumbs] = useState<number | undefined>(4);

  return (
    <IonBreadcrumbs maxItems={maxBreadcrumbs} onIonCollapsedClick={() => setMaxBreadcrumbs(undefined)}>
      <IonBreadcrumb href="#home">Home</IonBreadcrumb>
      <IonBreadcrumb href="#electronics">Electronics</IonBreadcrumb>
      <IonBreadcrumb href="#photography">Photography</IonBreadcrumb>
      <IonBreadcrumb href="#cameras">Cameras</IonBreadcrumb>
      <IonBreadcrumb href="#film">Film</IonBreadcrumb>
      <IonBreadcrumb href="#35mm">35 mm</IonBreadcrumb>
    </IonBreadcrumbs>
  );
}
export default Example;
```
