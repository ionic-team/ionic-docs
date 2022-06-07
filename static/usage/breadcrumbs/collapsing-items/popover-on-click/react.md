```tsx
import React, { useState } from 'react';
import { IonBreadcrumb, IonBreadcrumbs, IonContent, IonItem, IonLabel, IonList, useIonPopover } from '@ionic/react';

const Popover: React.FC<{
  collapsedBreadcrumbs: HTMLIonBreadcrumbElement[]
}> = ({ collapsedBreadcrumbs }) => (
  <IonContent>
    <IonList>
      {collapsedBreadcrumbs.map(breadcrumb => (
        <IonItem href={breadcrumb.href}>
          <IonLabel>{breadcrumb.textContent}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  </IonContent>
);

function Example() {
  const [collapsedBreadcrumbs, setCollapsedBreadcrumbs] = useState<HTMLIonBreadcrumbElement[]>([]);
  const [present] = useIonPopover(<Popover collapsedBreadcrumbs={collapsedBreadcrumbs} />);

  return (
    <>
      <IonBreadcrumbs maxItems={4} onIonCollapsedClick={e => {
        setCollapsedBreadcrumbs(e.detail.collapsedBreadcrumbs!);
        present({ event: e });
      }}>
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
