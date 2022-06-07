```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs, IonContent, IonLabel } from '@ionic/react';
function Example() {
  return (
    <IonContent>
      <IonLabel>Before Collapse = 2</IonLabel>
      <IonBreadcrumbs maxItems={4} itemsBeforeCollapse={2}>
        <IonBreadcrumb href="#home">Home</IonBreadcrumb>
        <IonBreadcrumb href="#electronics">Electronics</IonBreadcrumb>
        <IonBreadcrumb href="#photography">Photography</IonBreadcrumb>
        <IonBreadcrumb href="#cameras">Cameras</IonBreadcrumb>
        <IonBreadcrumb href="#film">Film</IonBreadcrumb>
        <IonBreadcrumb href="#35mm">35 mm</IonBreadcrumb>
      </IonBreadcrumbs>

      <IonLabel className="ion-margin-top">Before Collapse = 0</IonLabel>
      <IonBreadcrumbs maxItems={4} itemsBeforeCollapse={0}>
        <IonBreadcrumb href="#home">Home</IonBreadcrumb>
        <IonBreadcrumb href="#electronics">Electronics</IonBreadcrumb>
        <IonBreadcrumb href="#photography">Photography</IonBreadcrumb>
        <IonBreadcrumb href="#cameras">Cameras</IonBreadcrumb>
        <IonBreadcrumb href="#film">Film</IonBreadcrumb>
        <IonBreadcrumb href="#35mm">35 mm</IonBreadcrumb>
      </IonBreadcrumbs>

      <IonLabel className="ion-margin-top">After Collapse = 2</IonLabel>
      <IonBreadcrumbs maxItems={4} itemsAfterCollapse={2}>
        <IonBreadcrumb href="#home">Home</IonBreadcrumb>
        <IonBreadcrumb href="#electronics">Electronics</IonBreadcrumb>
        <IonBreadcrumb href="#photography">Photography</IonBreadcrumb>
        <IonBreadcrumb href="#cameras">Cameras</IonBreadcrumb>
        <IonBreadcrumb href="#film">Film</IonBreadcrumb>
        <IonBreadcrumb href="#35mm">35 mm</IonBreadcrumb>
      </IonBreadcrumbs>

      <IonLabel className="ion-margin-top">Before Collapse = 2, After Collapse = 2</IonLabel>
      <IonBreadcrumbs maxItems={4} itemsBeforeCollapse={2} itemsAfterCollapse={2}>
        <IonBreadcrumb href="#home">Home</IonBreadcrumb>
        <IonBreadcrumb href="#electronics">Electronics</IonBreadcrumb>
        <IonBreadcrumb href="#photography">Photography</IonBreadcrumb>
        <IonBreadcrumb href="#cameras">Cameras</IonBreadcrumb>
        <IonBreadcrumb href="#film">Film</IonBreadcrumb>
        <IonBreadcrumb href="#35mm">35 mm</IonBreadcrumb>
      </IonBreadcrumbs>
    </IonContent>
  );
}
export default Example;
```
