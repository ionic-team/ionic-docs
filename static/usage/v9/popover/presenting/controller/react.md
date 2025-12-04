```tsx
import React from 'react';
import { IonButton, IonContent, useIonPopover } from '@ionic/react';

const Popover = () => <IonContent className="ion-padding">Hello World!</IonContent>;

function Example() {
  const [present, dismiss] = useIonPopover(Popover, {
    onDismiss: (data: any, role: string) => dismiss(data, role),
  });

  return (
    <IonButton
      onClick={(e: any) =>
        present({
          event: e,
          onDidDismiss: (e: CustomEvent) => console.log(`Popover dismissed with role: ${e.detail.role}`),
        })
      }
    >
      Click Me
    </IonButton>
  );
}
export default Example;
```
