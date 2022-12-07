```tsx
import React, { useRef, useState } from 'react';
import { IonButton, IonContent, IonPopover } from '@ionic/react';

function Example() {
  const popover = useRef<HTMLIonPopoverElement>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const openPopover = (e: any) => {
    popover.current!.event = e;
    setPopoverOpen(true);
  };

  return (
    <>
      <IonButton onClick={openPopover}>Click Me</IonButton>
      <IonPopover ref={popover} isOpen={popoverOpen} onDidDismiss={() => setPopoverOpen(false)}>
        <IonContent class="ion-padding">Hello World!</IonContent>
      </IonPopover>
    </>
  );
}
export default Example;
```
