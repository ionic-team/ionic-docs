```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';
function Example() {
  return (
    <IonBreadcrumbs maxItems={4}>
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
