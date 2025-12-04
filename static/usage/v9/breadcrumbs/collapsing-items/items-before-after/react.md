```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';
function Example() {
  return (
    <>
      <div>Before Collapse = 2</div>
      <IonBreadcrumbs maxItems={4} itemsBeforeCollapse={2}>
        <IonBreadcrumb href="#home">Home</IonBreadcrumb>
        <IonBreadcrumb href="#electronics">Electronics</IonBreadcrumb>
        <IonBreadcrumb href="#photography">Photography</IonBreadcrumb>
        <IonBreadcrumb href="#cameras">Cameras</IonBreadcrumb>
        <IonBreadcrumb href="#film">Film</IonBreadcrumb>
        <IonBreadcrumb href="#35mm">35 mm</IonBreadcrumb>
      </IonBreadcrumbs>

      <div className="ion-margin-top">Before Collapse = 0</div>
      <IonBreadcrumbs maxItems={4} itemsBeforeCollapse={0}>
        <IonBreadcrumb href="#home">Home</IonBreadcrumb>
        <IonBreadcrumb href="#electronics">Electronics</IonBreadcrumb>
        <IonBreadcrumb href="#photography">Photography</IonBreadcrumb>
        <IonBreadcrumb href="#cameras">Cameras</IonBreadcrumb>
        <IonBreadcrumb href="#film">Film</IonBreadcrumb>
        <IonBreadcrumb href="#35mm">35 mm</IonBreadcrumb>
      </IonBreadcrumbs>

      <div className="ion-margin-top">After Collapse = 2</div>
      <IonBreadcrumbs maxItems={4} itemsAfterCollapse={2}>
        <IonBreadcrumb href="#home">Home</IonBreadcrumb>
        <IonBreadcrumb href="#electronics">Electronics</IonBreadcrumb>
        <IonBreadcrumb href="#photography">Photography</IonBreadcrumb>
        <IonBreadcrumb href="#cameras">Cameras</IonBreadcrumb>
        <IonBreadcrumb href="#film">Film</IonBreadcrumb>
        <IonBreadcrumb href="#35mm">35 mm</IonBreadcrumb>
      </IonBreadcrumbs>

      <div className="ion-margin-top">Before Collapse = 2, After Collapse = 2</div>
      <IonBreadcrumbs maxItems={4} itemsBeforeCollapse={2} itemsAfterCollapse={2}>
        <IonBreadcrumb href="#home">Home</IonBreadcrumb>
        <IonBreadcrumb href="#electronics">Electronics</IonBreadcrumb>
        <IonBreadcrumb href="#photography">Photography</IonBreadcrumb>
        <IonBreadcrumb href="#cameras">Cameras</IonBreadcrumb>
        <IonBreadcrumb href="#film">Film</IonBreadcrumb>
        <IonBreadcrumb href="#35mm">35 mm</IonBreadcrumb>
      </IonBreadcrumbs>
    </>
  );
}
export default Example;
```
