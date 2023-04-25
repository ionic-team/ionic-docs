```tsx
import React, { useRef, useState } from 'react';
import { IonBreadcrumb, IonBreadcrumbs, IonContent, IonItem, IonLabel, IonList, IonPopover } from '@ionic/react';

function Example() {
  const popover = useRef<HTMLIonPopoverElement>(null);
  const [collapsedBreadcrumbs, setCollapsedBreadcrumbs] = useState<HTMLIonBreadcrumbElement[]>([]);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const openPopover = (e: Event) => {
    setCollapsedBreadcrumbs((e as CustomEvent).detail.collapsedBreadcrumbs);
    popover.current!.event = e;
    setPopoverOpen(true);
  };

  return (
    <>
      <IonBreadcrumbs maxItems={4} onIonCollapsedClick={openPopover}>
        <IonBreadcrumb href="#home">Home</IonBreadcrumb>
        <IonBreadcrumb href="#electronics">Electronics</IonBreadcrumb>
        <IonBreadcrumb href="#photography">Photography</IonBreadcrumb>
        <IonBreadcrumb href="#cameras">Cameras</IonBreadcrumb>
        <IonBreadcrumb href="#film">Film</IonBreadcrumb>
        <IonBreadcrumb href="#35mm">35 mm</IonBreadcrumb>
      </IonBreadcrumbs>
      <IonPopover ref={popover} isOpen={popoverOpen} onDidDismiss={() => setPopoverOpen(false)}>
        <IonContent>
          <IonList>
            {collapsedBreadcrumbs.map((breadcrumb, i) => (
              <IonItem
                href={breadcrumb.href}
                lines={i === collapsedBreadcrumbs.length - 1 ? "none" : undefined}
              >
                <IonLabel>{breadcrumb.textContent}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonPopover>
    </>
  );
}
export default Example;
```
